import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StartpagePage } from '../startpage/startpage';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public name: string;
  public email: string;
  public password: string;
  cpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams/*, public http: Http, public authService: AuthServ*/) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  register() {
    if (!this.password || !this.email ||
      !this.name ||
      !this.cpassword) {
      alert("Please fill out ALL entries")
    }
    else {
      if (this.password == this.cpassword) {
        if (this.email.includes("@") && this.email.includes(".")) {
          // this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
          // this.http
          //   .post(this.authService.getBaseUrl() + "/registration", {
          //     firstname: this.name,
          //     email: this.email,
          //     password: this.password,
          //   })
          //   .subscribe(
          //     result => {
          //       console.log(result);

                this.navCtrl.push(StartpagePage);
        //       },
        //       error => {
        //         console.log(error);
        //       }
        //     );
        }
        else {
          alert("Email not valid!")
        }
      }
      else {
        alert("Passwords do not match!")
      }
    }
  }

}
