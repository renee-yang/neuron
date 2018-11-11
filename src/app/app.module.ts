import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { CreatePage } from '../pages/create/create';
import { ResourcesPage } from '../pages/resources/resources';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartpagePage } from '../pages/startpage/startpage';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';
import { SwipePage } from '../pages/swipe/swipe';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CreatePage,
    ResourcesPage,
    TabsPage,
    StartpagePage,
    RegisterPage,
    ChatPage,
    SwipePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CreatePage,
    ResourcesPage,
    TabsPage,
    StartpagePage,
    RegisterPage,
    ChatPage,
    SwipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
