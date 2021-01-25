import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit, NgZone } from "@angular/core";
import { NavController } from "@ionic/angular";
import { FormBuilder, Validators, FormGroup, NgForm } from "@angular/forms";
import { ToastController } from "@ionic/angular";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage implements OnInit {
  messageForm: FormGroup;
  loading = false;
  constructor(
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
    private zone: NgZone,
    public toastCtrl: ToastController,
    private http: HttpClient
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
  ionViewWillLeave() {
    this.menuActive = false;
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

  sendMessage(form) {
    this.zone.run(() => {
      this.loading = true
        const email = form;
        const headers = new HttpHeaders({ "Content-Type": "application/json" });
        this.http
          .post(
            "https://formspree.io/f/xeqpnvll",
            {
              name: email.fullName,
              replyto: email.email,
              subject: email.subject,
              message: email.message
            },
            { headers: headers }
          )
          .subscribe(async (response: any) => {
            if (response.ok == true) {
              this.messageForm.reset();
              const toaster = await this.toastCtrl.create({
                message: "Thank you for you message.",
                duration: 3000,
              });
              await toaster.present();
              this.loading = false;
            } else {
              const toaster = await this.toastCtrl.create({
                message: "Please try again.",
                duration: 3000,
              });
              await toaster.present();
              this.loading = false;
            }
          }, (err) => {
            this.loading = false;
            console.log(err);
          });
    });
  }
  // async..await is not allowed in global scope, must use a wrapper
}
