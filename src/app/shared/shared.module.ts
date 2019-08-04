import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthDirective } from './directives/auth.directive';
import { ConfirmedDialogComponent } from './popups/confirmed-dialog/confirmed-dialog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SafePipe,
    CapitalizePipe,
    AuthDirective,
    ConfirmedDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
