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
