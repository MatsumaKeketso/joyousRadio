import { Component, OnInit, NgZone } from "@angular/core";
import { NavController } from "@ionic/angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { MainService } from "../services/main.service";
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
    private mainService: MainService
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
    console.log(data)
    let method = 'POST'
    let url ='https://formspree.io/f/mpzoozvj'
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        console.log('Success > ', xhr.response, xhr.responseType);
      } else {
        console.log( 'Error > ', xhr.status, xhr.response, xhr.responseType);
      }
    };
    this.mainService.sendEmail()
    // xhr.send(data);
  }
}
