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
  gallery = [
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/67514240_1155568961320245_3621583764779433984_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFzaGZIQQEa-thg92nvAiikuM67par3Mq24zrulqvcyrUcQqK68ryKILpejRsS0lQfCp44rSuiTndaKD_l3hrRt&_nc_ohc=GS2PbQFxNC0AX-GgnYE&_nc_ht=scontent-jnb1-1.xx&oh=33879549029ea7d899778262d604308e&oe=6004D65E",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/52605492_1038924746318001_3267467722723688448_o.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_eui2=AeF0MMUtClIkXHO1geZtxNAmSyPeS1Mkh0tLI95LUySHSwi9xXUcbUZAgbu92_INtOXf4W5ZI4muPeLtBcOyBvJk&_nc_ohc=jCADuTMopw0AX8AD_10&_nc_ht=scontent-jnb1-1.xx&oh=7d24851219aecf4d657601a4bca462f0&oe=6007A448",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/29028240_800725846804560_5381026692733017453_n.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_eui2=AeHVYVkYYPrgvHuKE6Ucnzq6vesoPptE6k696yg-m0TqTs7Ezj7fPx_EvENXXS-6rLn2d8l-bzMo2tb1-KXJljxf&_nc_ohc=ZN_amgSov_UAX9enR7t&_nc_ht=scontent-jnb1-1.xx&oh=e25a72091108daaf93ecb0b73970a567&oe=6007FDA3",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/21317582_711934132350399_3733945408684355876_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeGND6-ayjmfb8BPt-sFRSP2LM22Z7PCx2QszbZns8LHZF4d6UqB301ecyGN5eUw5hmoyWQ_cofLMM4vpKada88M&_nc_ohc=xC2V5XQzfUYAX8fiNM1&_nc_ht=scontent-jnb1-1.xx&oh=ec3323762f39f6a64a4e13b06cfa49c6&oe=60070365",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/21371098_711934165683729_4929858987320063017_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeGco-x3Qb_vRF-SRQQHR21iXFJpY8tUWgFcUmljy1RaAWAbcxb1O1j3Tzu_wJA4RXAQRlBAXm9E--EjxpthTl29&_nc_ohc=SnoBwtmi3T8AX9uahVP&_nc_ht=scontent-jnb1-1.xx&oh=8139182fbd6d4ad48d5daff73fc47dff&oe=6004D3EE",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/19884087_694072757469870_3124516916594746192_n.jpg?_nc_cat=103&ccb=2&_nc_sid=9267fe&_nc_eui2=AeGG_1eSPpHkrgxS-EwJSsJqembdwJ_KWoZ6Zt3An8pahoASaPIwPJXeQDoRMnDhQOfG8ylE89pAYa7HAgpUb1qu&_nc_ohc=T2Dn2Rt4348AX8wURut&_nc_ht=scontent-jnb1-1.xx&oh=20ca75d584b60b8a57fe43857d53391d&oe=6006249B",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/13227778_490881211122360_3004154592146911823_o.jpg?_nc_cat=109&ccb=2&_nc_sid=19026a&_nc_eui2=AeEjbKI2AiTblIdYl2CMjX6gJ9r9xA03tjQn2v3EDTe2NA7HqOsTAeXFEjwRnXKdj5BCLNGoCFmotyTP6lVPHVNj&_nc_ohc=oF5RRu6Sa8UAX-aElBj&_nc_ht=scontent-jnb1-1.xx&oh=7ef90e65cfa1aa89ef4e36af79b05481&oe=60051D1B",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/13116332_488223464721468_4118722201100030197_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_eui2=AeFfdfgJOosv4U1o-13L7k4O91rnPKuUxVn3Wuc8q5TFWb_LfigevW6yJQMR_JGvQ69FogUkNDGtXzbIgX2jwt5P&_nc_ohc=K86PmNN9THIAX_aG-Tw&_nc_ht=scontent-jnb1-1.xx&oh=e65a383dc3ce8699aa54e671aaf23f8b&oe=60056B60",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/13103436_484971948379953_8182539423413842225_n.jpg?_nc_cat=107&cb=846ca55b-ee17756f&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEDTxCZaqipaATf81LsCQR5bh1xpDSUvc5uHXGkNJS9zjztIKnItTU_9cchV6QKZG2zNkKHNlY-CRbbnRY8sQYq&_nc_ohc=mifWy4S4CssAX-pusnI&_nc_ht=scontent-jnb1-1.xx&oh=5b9c70cbb15f1be2b7e78fe40a48a68b&oe=6007A265",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/13076941_484971995046615_8756939364643809671_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFgCWMzix0OGx0_uA2l_LH-cDbC2AWMnNZwNsLYBYyc1rRGjUFonAJkCLDRoz2HfnlsXXhPVKNRgHvEG5kNDFI1&_nc_ohc=ZmUwpWYMu2UAX_rx2O8&_nc_ht=scontent-jnb1-1.xx&oh=1ac7d63d8ac439cc62096768cc5587c2&oe=60071D3B",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/12474079_442355305974951_5709080423550710275_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_eui2=AeEGZ3HR93LI72WV84kn7wtLcBxXcGfYUylwHFdwZ9hTKdrGK88o7Y_8Pw5YIxz9Iiy2XG5C5CTex6TI8Ha9cujI&_nc_ohc=Gw6ZBgNkVnwAX-rrG-B&_nc_ht=scontent-jnb1-1.xx&oh=1e38ad9b7d8ab7dda4ba384fe09ac777&oe=6004919A",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/1556483_442354562641692_4999378550233675545_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_eui2=AeHNh3cqstF9KYQQID80SI6SPZpPF3u-iIQ9mk8Xe76IhMyen7CsNVF721U8n3K0-DQ_T6DyManC3CM8gwSQ3Bns&_nc_ohc=Oh6LTcA47L0AX8AoGeS&_nc_ht=scontent-jnb1-1.xx&oh=4cc5112d9a0bb3d651b81f04c13d843e&oe=6007928C",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/12356667_434441113433037_5543917893252708930_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_eui2=AeHrq8W3KHzhgN9x_jLSVgEXzG5jcL6Jh4TMbmNwvomHhI0atqVsYYFyLqdr0AYof058QryUAJapaQBjuM66LTCe&_nc_ohc=Ob8pIaHUTq0AX9eWWgy&_nc_ht=scontent-jnb1-1.xx&oh=042089573aaa3ce437e0e4c3b10880a0&oe=6006CD7A",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/12489425_442354199308395_2827310468462795156_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_eui2=AeFV5sHCf2ieVMVPu-WAH7S6E1XYIG_IdWwTVdggb8h1bFOzjWIzhdsFSLmfVEMMzxPoemFgBugcukwmg_wf4Ddj&_nc_ohc=YjYXRuIl2TkAX9tK1W9&_nc_ht=scontent-jnb1-1.xx&oh=853d1b46c71836932dd0b7bd5b01a15a&oe=60067F22",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/12466131_442352999308515_2513929138913554462_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeF6LbLVnewlV9lEZY_xzsTwHTtZ5vewyC0dO1nm97DILbhchMbBmJhlq7H5L4QMU-4EmnlWxW7AFfrYcPUFw1B-&_nc_ohc=oNxQy0KfxhcAX-9AHjV&_nc_ht=scontent-jnb1-1.xx&oh=d1af75445982ab14b5435c2cd574632a&oe=60052D53",
  ];
  constructor(private navCtrl: NavController, private zone: NgZone) {}

  ngOnInit() {}
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
      this.viewImage = "";
    });
  }
  previewImage(i) {
    this.zone.run(() => {
      this.viewImage = this.gallery[i];
      this.openPreview = true;
    });
  }
  activateMenu() {
    this.zone.run(() => {
      this.menuActive = !this.menuActive;
    });
  }
  // End NAvigation
}
