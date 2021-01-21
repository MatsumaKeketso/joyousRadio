import { Component, OnInit, NgZone, ViewChild, Renderer2 } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { MainService } from '../services/main.service';
@Component({
  selector: 'app-listen',
  templateUrl: './listen.page.html',
  styleUrls: ['./listen.page.scss'],
})
export class ListenPage implements OnInit {
  @ViewChild('imageBG', {static: false}) imageBG;
  playing = this.mainService.playing;
  constructor(private navCtrl: NavController, private zone: NgZone, private mainService: MainService, private renderer: Renderer2, public platform: Platform) { }

  ngOnInit() {
    this.zone.run(() => {
      setTimeout(() => {
        const platform = this.platform.is('desktop');
        if (platform) {
          this.mousePosition();
        }
        console.log(this.imageBG);
      }, 1000);
      
    })
  }
  mousePosition() {
    document.onmousemove = (e) => {
      const eX = e.x / 15;
      const eY = e.y/ 15;
      this.renderer.setStyle(this.imageBG.nativeElement, 'background-position', `${-eX}px ${-eY}px`)
    }
  }
  playSong() {
    this.mainService.playSong().then((res: any) => {
      this.playing = res;
    })
    .catch(err => {
      console.log(err);
      
    })
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
