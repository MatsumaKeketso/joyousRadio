import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  playing = false;
  audioUrl = new Audio('https://zas5.ndx.co.za:9588/stream');
  constructor() { }
  playSong() {
    return new Promise((resolve, reject) => {
    if (this.playing === false) {
      try {
        this.audioUrl.play();
        this.playing = true;
        resolve(this.playing)
      } catch (error) {
        reject(error)
      }
    } else {
      this.audioUrl.pause();
      this.playing = false;
      resolve(this.playing);
    }
    })
  }
}
