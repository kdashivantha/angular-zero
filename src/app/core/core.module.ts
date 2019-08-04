import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './layout/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    LoaderComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    AuthLayoutComponent,
    ContentLayoutComponent
  ],
  exports:[
    ContentLayoutComponent
  ]
})
export class CoreModule { }
