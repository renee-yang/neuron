import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AuthServ } from '../../authserv';
// import { Http } from "@angular/http";
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';


@Component({
  selector: 'page-startpage',
  templateUrl: 'startpage.html',
})
export class StartpagePage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams/*, public http: Http, public authService: AuthServ*/) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartpagePage');
  }

  login() {
    // this.http
    //   .post(this.authService.getBaseUrl() + "/login", {
    //     email: this.email,
    //     password: this.password
    //   })
    //   .subscribe(
    //     result => {
    //       var UserToken = result.json();
    //       localStorage.setItem("Token", UserToken.token);
    //       this.navCtrl.setRoot(TabsPage);
    //       this.navCtrl.popToRoot();
    this.navCtrl.setRoot(TabsPage);
    this.navCtrl.popToRoot();
          // console.log(result.json().name);
          // var user = result.json();


          // Our username and password (on this) should have data from the user
          // this.navCtrl.push(ProfilePage, {
          //   email: this.email,
          //   password: this.password,
          //   firstname: user.firstname
          // });
      //   },

      //   error => {
      //     console.log(error);
      // }
    // );
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
