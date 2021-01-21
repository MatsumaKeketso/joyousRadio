import { Component, NgZone, Inject } from "@angular/core";

import { AlertController, NavController, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClient } from "@angular/common/http";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
  constructor(
    private platform: Platform,
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.clear()
    this.platform.ready().then(async () => {
      this.http.get("../assets/credentials.json").subscribe((data: any) => {
      });
    });
  }
  sendTestEmail () {
  //   sendmail({
  //     from: 'no-reply@yourdomain.com',
  //     to: 'test@qq.com, test@sohu.com, test@163.com ',
  //     subject: 'test sendmail',
  //     html: 'Mail of test sendmail ',
  //   }, function(err, reply) {
  //     console.log(err && err.stack);
  //     console.dir(reply);
  // });
  }
}
