import { GlobalService } from './../../shared/global.service';
import { MusicPlayer, CurrentAudio } from './../music-player.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as MusicPlayerActions from '../store/music-player.actions';

@Component({
  selector: 'app-music-player-controls',
  templateUrl: './music-player-controls.component.html',
  styleUrls: ['./music-player-controls.component.css']
})
export class MusicPlayerControlsComponent implements OnInit, AfterViewInit {
  @ViewChild('musicPlayerControl') musicPlayerControl: ElementRef;
  @ViewChild('inputSlider') inputSlider: ElementRef;
  audio: HTMLAudioElement;
  currentAudio: CurrentAudio = new CurrentAudio();
  uiState = {
    clsPlayOrPause: 'play_arrow',
    completedBuffer: 0,
    completedPercentage: 0
  };
  updateTimeEventInterval: any;
  musicPlayer: MusicPlayer = new MusicPlayer();

  constructor(
    private renderer: Renderer2,
    private store: Store<fromApp.AppState>,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.audio = this.musicPlayerControl.nativeElement;
    this.store.select('musicPlayer').subscribe(data => {
      this.currentAudio = data.currentAudio;
    });
    this.globalService.spaceBarKeyPress.subscribe(data => {
      this.togglePlayPause();
    });
  }
  ngAfterViewInit() {
    this.listenEvents();
  }

  loadedmetadata() {
    this.setDuration();
    this.setCompletedPercentage();
    this.setCompletedBuffer();
  }

  progress(e) {
    this.setCompletedBuffer();
  }

  updateBuffered() {
    if (this.currentAudio.bufferd !== 0) {
      this.store.dispatch(
        new MusicPlayerActions.UpdateBuffered(this.currentAudio.bufferd)
      );
    }
  }

  updateCompletedDuration() {
    if (this.currentAudio.completedDuration !== 0) {
      this.store.dispatch(
        new MusicPlayerActions.UpdateCompletedDuration(
          this.currentAudio.completedDuration
        )
      );
    }
  }

  updateduration() {
    if (this.currentAudio.duration !== 0) {
      this.store.dispatch(
        new MusicPlayerActions.UpdateDuration(this.currentAudio.duration)
      );
    }
  }
  updateIsPlayingFlag(flag: boolean) {
    this.store.dispatch(new MusicPlayerActions.UpdatePlayingFlag(flag));
  }

  setCompletedBuffer() {
    for (let i = 0; i < this.audio.buffered.length; i++) {
      this.currentAudio.bufferd = this.musicPlayer.toFixed(
        +this.audio.buffered.end(i),
        2
      );
    }
    this.updateBuffered();
    this.uiState.completedBuffer = this.musicPlayer.calculateReminingPercentage(
      this.currentAudio.duration,
      this.currentAudio.bufferd
    );
  }
  setDuration() {
    this.currentAudio.duration = this.musicPlayer.toFixed(
      +this.audio.duration,
      2
    );
    this.updateduration();
  }
  setCompletedPercentage() {
    this.currentAudio.completedDuration = this.musicPlayer.toFixed(
      +this.audio['currentTime'],
      2
    );
    this.updateCompletedDuration();
    this.uiState.completedPercentage = this.musicPlayer.calculateReminingPercentage(
      this.currentAudio.duration,
      this.currentAudio.completedDuration
    );
  }
  onMouseDownHandler() {
    this.clearTimeUpdateInterval();
  }
  onMouseUpHandler(value: number) {
    this.currentAudio.completedDuration = value;
    this.audio.currentTime = this.currentAudio.completedDuration;
    this.updateCompletedDuration();
    this.setCompletedPercentage();
    this.setCompletedBuffer();
    this.setTimeUpdateInterval();
  }

  updateCurrentTime() {
    this.audio.currentTime = this.currentAudio.completedDuration;
  }

  listenEvents() {
    this.renderer.listen(this.audio, 'progress', e => {
      this.progress(e);
    });

    this.renderer.listen(this.audio, 'loadedmetadata', e => {
      this.loadedmetadata();
    });
  }

  setTimeUpdateInterval() {
    this.updateTimeEventInterval = setInterval(() => {
      this.setCompletedBuffer();
      this.setCompletedPercentage();
    }, 1000);
  }
  clearTimeUpdateInterval() {
    clearInterval(this.updateTimeEventInterval);
  }
  playSong() {
    this.audio.play();
    this.setTimeUpdateInterval();
    this.updateIsPlayingFlag(true);
  }

  pauseSong() {
    this.audio.pause();
    this.clearTimeUpdateInterval();
    this.updateIsPlayingFlag(false);
  }

  togglePlayPause() {
    if (this.uiState.clsPlayOrPause === 'play_arrow') {
      this.playSong();
      this.uiState.clsPlayOrPause = 'pause';
    } else {
      this.pauseSong();
      this.uiState.clsPlayOrPause = 'play_arrow';
    }
  }
}
