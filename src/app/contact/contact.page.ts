import { Component, OnInit, NgZone } from "@angular/core";
import { NavController } from "@ionic/angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage implements OnInit {
  messageForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
    private zone: NgZone,
    public toastCtrl: ToastController,
    private emailComposer: EmailComposer
  ) {}

  ngOnInit() {
 
    this.messageForm = this.formBuilder.group({
      fullName: ["", Validators.compose([Validators.required])],
      email: [
        "",
        Validators.compose([
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
          Validators.required,
        ]),
      ],
      subject: ["", Validators.compose([Validators.required])],
      message: ["", Validators.compose([Validators.required])],
    });
  }
  // Navigation
  light = false;
  menuActive = false;
  logScrolling(ev) {
    this.zone.run(() => {
      let y = ev.detail.currentY;
      if (y > 100) {
        this.light = true;
      } else {
        this.light = false;
      }
    });
  }
  onClick(page) {
    this.zone.run(() => {
      this.menuActive = false;
      this.navCtrl.navigateForward(page);
    });
  }
  activateMenu() {
    this.zone.run(() => {
      this.menuActive = !this.menuActive;
    });
  }
  // End NAvigation

  sendMessage(data) {
    let email = {
      to: 'keketsomatsuma88@gmail.com',
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    }
  
    // Send a text message using default options
    this.emailComposer.open(email);
  }
}
