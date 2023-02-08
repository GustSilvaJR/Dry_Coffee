import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';

import { AppComponent } from './mainApp/app.component';

//Components
import { AdminLayoutComponent } from './pages/admin-layout/admin/admin-layout.component';
import { CoreModule } from './core/core.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,

    NavbarModule,
    FooterModule,
    SidebarModule,

    CoreModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
