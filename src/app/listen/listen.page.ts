import { Component, OnInit, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-listen',
  templateUrl: './listen.page.html',
  styleUrls: ['./listen.page.scss'],
})
export class ListenPage implements OnInit {

  constructor(private navCtrl: NavController, private zone: NgZone) { }

  ngOnInit() {
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
