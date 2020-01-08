import { MusicPlayerControlsComponent } from './music-player-controls/music-player-controls.component';
import { MusicPlayerComponent } from './music-player.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: MusicPlayerComponent }];

@NgModule({
  declarations: [MusicPlayerComponent, MusicPlayerControlsComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: []
})
export class MusicPlayerRoutingModule {}
