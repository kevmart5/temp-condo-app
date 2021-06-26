import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLoginComponent } from './app-login.component';
import { APP_LOGIN_ROUTE } from './app-login.route';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([APP_LOGIN_ROUTE])],
  declarations: [AppLoginComponent],
})
export class AppLoginModule {}
