import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private zone: NgZone) { }
  setScroll(value) {
    return new Promise((resolve, reject) => {
     
    });
  }
  sendEmail() {
    return new Promise((reject, resolve) => {

    })
  }
}
