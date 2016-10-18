import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// Import pages
import { Signup } from './../pages/signup/signup';
import { ResetPassword } from './../pages/reset-password/reset-password';
import { Profile } from './../pages/profile/profile';
import { Login } from './../pages/login/login';
import { EventList } from './../pages/event-list/event-list';
import { EventDetail } from './../pages/event-detail/event-detail';
import { EventCreate } from './../pages/event-create/event-create';
import { Home } from './../pages/home/home';

// Import providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';

@NgModule({
  declarations: [
    MyApp,
    Home,
    EventCreate,
    EventDetail,
    EventList,
    Login,
    Profile,
    ResetPassword,
    Signup
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    EventCreate,
    EventDetail,
    EventList,
    Login,
    Profile,
    ResetPassword,
    Signup
  ],
  providers: [AuthData,
    EventData,
    ProfileData]
})
export class AppModule {}
