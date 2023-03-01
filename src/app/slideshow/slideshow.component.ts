import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['freimarkt.jpg', 'garten.jpg', 'oytersee.jpg', 'skatepark.jpg'];
  headlines = ['Mit voller Wucht ins Detail', 'Wenn Perfektion keine Option mehr ist', 'Immer wieder von vorn', 'Wer kann noch einmal?'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
