import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  constructor(public zone: NgZone, public navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewWillLeave(){
    this.menuActive = false;
   }
  // Navigation
  light = false;
  menuActive = false;
  logScrolling(ev) {
    let y = ev.detail.currentY;
    if (y > 100) {
      this.light = true;
    } else {
      this.light = false;
    }
    
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
    })
  }
  // End NAvigation
}
