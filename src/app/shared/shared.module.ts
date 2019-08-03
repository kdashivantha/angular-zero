import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SafePipe } from './pipes/safe.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthDirective } from './directives/auth.directive';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    LoaderComponent,
    SafePipe,
    CapitalizePipe,
    AuthDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
