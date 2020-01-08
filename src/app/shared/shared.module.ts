import { AuthGuardService } from './auth-guard.service';
import {
  MatFormFieldModule,
  MatFormFieldControl
} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from './global.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalEventDirective } from './global-event.directive';
import { InputDirective } from './input.directive';
import {
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSliderModule,
  MatDividerModule,
  MatIconModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    GlobalEventDirective,
    InputDirective,
    DialogComponent,
    LoaderComponent
  ],
  imports: [MatDialogModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [
    CommonModule,
    FormsModule,
    InputDirective,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    DialogComponent,
    LoaderComponent,
    MatToolbarModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule
  ],
  entryComponents: [DialogComponent],
  providers: [GlobalService, AuthGuardService]
})
export class SharedModule {}
