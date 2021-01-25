import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(private zone: NgZone, public navCtrl: NavController) { }

  ngOnInit() {}
  
  onClick(page) {
    this.zone.run(() => {
      this.navCtrl.navigateForward(page);
    });
  }
}
