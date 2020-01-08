import { IMusicPlayerMothods } from './music-player.interface';
export class CurrentAudio {
  constructor(
    public duration: number = 0,
    public completedDuration: number = 0,
    public bufferd: number = 0,
    public title: string = '',
    public isPlaying: boolean = false
  ) {}
}
export class MusicPlayer implements IMusicPlayerMothods {
  constructor() {}
  convertSecondToHMS(value: number): string {
    let hours = Math.floor(value / 3600).toString();
    let minutes = Math.floor((value % 3600) / 60).toString();
    let seconds = Math.floor((value % 3600) % 60).toString();
    if (Number(hours) < 10) {
      hours = '0' + hours;
    }
    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    }
    if (Number(seconds) < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  }

  toFixed(value: number, digit: number): number {
    if (!isNaN(value) && !isNaN(digit)) {
      return +value.toFixed(digit);
    }
    return 0;
  }
  calculateReminingPercentage(
    totalDuration: number,
    completedDuration: number
  ): number {
    if (!isNaN(totalDuration) && !isNaN(completedDuration)) {
      return (completedDuration * 100) / totalDuration;
    }
    return 0;
  }
}
