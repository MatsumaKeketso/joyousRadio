import { Component, OnInit, NgZone } from "@angular/core";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.page.html",
  styleUrls: ["./gallery.page.scss"],
})
export class GalleryPage implements OnInit {
  openPreview = false;
  viewImage = "";
  imageIndex = 0;
  gallery = [
    '../../assets/gallery/1.jpg',
    '../../assets/gallery/2.jpg',
    '../../assets/gallery/3.jpg',
    '../../assets/gallery/4.jpg',
    '../../assets/gallery/5.jpg',
    '../../assets/gallery/6.jpg',
    '../../assets/gallery/7.jpg',
    '../../assets/gallery/8.jpg',
    '../../assets/gallery/9.jpg',
    '../../assets/gallery/10.jpg',
    '../../assets/gallery/11.jpg',
    '../../assets/gallery/12.jpg',
    '../../assets/gallery/13.jpg',
    '../../assets/gallery/14.jpg',
    '../../assets/gallery/15.jpg',
    '../../assets/gallery/16.jpg',
    '../../assets/gallery/17.jpg',
    '../../assets/gallery/18.jpg',
    '../../assets/gallery/19.jpg',
    '../../assets/gallery/20.jpg',
    '../../assets/gallery/21.jpg',
    '../../assets/gallery/22.jpg',
    '../../assets/gallery/23.jpg',
    '../../assets/gallery/24.jpg',
    '../../assets/gallery/25.jpg',
    '../../assets/gallery/26.jpg',
    '../../assets/gallery/27.jpg',
    '../../assets/gallery/28.jpg',
    '../../assets/gallery/29.jpg',
    '../../assets/gallery/30.jpg',
    '../../assets/gallery/31.jpg',
    '../../assets/gallery/32.jpg',
    '../../assets/gallery/33.jpg',
    '../../assets/gallery/34.jpg',
    '../../assets/gallery/35.jpg',
    '../../assets/gallery/36.jpg',
    '../../assets/gallery/37.jpg',
    '../../assets/gallery/38.jpg',
    '../../assets/gallery/39.jpg',
    '../../assets/gallery/40.jpg',
    '../../assets/gallery/41.jpg',
    '../../assets/gallery/42.jpg',
    '../../assets/gallery/43.jpg',
    '../../assets/gallery/44.jpg',
    '../../assets/gallery/45.jpg',
    '../../assets/gallery/46.jpg',
    '../../assets/gallery/47.jpg',
    '../../assets/gallery/48.jpg',
    '../../assets/gallery/49.jpg',
    '../../assets/gallery/50.jpg',
    '../../assets/gallery/51.jpg',
    '../../assets/gallery/52.jpg',
    '../../assets/gallery/53.jpg',
    '../../assets/gallery/54.jpg',
    '../../assets/gallery/55.jpg',
    '../../assets/gallery/56.jpg',
    '../../assets/gallery/57.jpg',
    '../../assets/gallery/58.jpg',
  ];
  constructor(private navCtrl: NavController, private zone: NgZone) {}

  ngOnInit() {}
  ionViewWillLeave(){
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
  closePreview() {
    this.zone.run(() => {
      this.openPreview = false;
      setTimeout(() => {
        this.viewImage = "";
      }, 300);
    });
  }
  previewImage(i) {
    this.zone.run(() => {
      this.viewImage = this.gallery[i];
      this.imageIndex = i;
      this.openPreview = true;
    });
  }
  activateMenu() {
    this.zone.run(() => {
      this.menuActive = !this.menuActive;
    });
  }
  navigatePictures(cmd) {
    this.zone.run(() => {
      switch (cmd) {
        case "f":
          // check if the index is not greater than the gallery length
          // if smaller allow skipping
          // if equal do nothing
          if (this.imageIndex < this.gallery.length-1) {
            this.imageIndex = this.imageIndex + 1;
          this.previewImage(this.imageIndex);
          }
          break;
        case "b":
           // check if the index is not less than 1
          // if smaller allow skipping
          // if equal do nothing
          if (this.imageIndex > 0) {
            this.imageIndex = this.imageIndex - 1;
            this.previewImage(this.imageIndex);
          }
          
          break;
      }
    });
  }
  // End NAvigation
}
