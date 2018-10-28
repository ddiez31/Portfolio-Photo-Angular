import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  title: string = 'Gallery Photos';
  message: string = 'My Instagram live';
  idImage: number = 0;
  urlImage: string = "https://picsum.photos/458/354?image=";

  dataImages: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.getImages();
  }
  
  getImages(): void {
    for(let i = 0; i <= 11; i++) {
      this.getIdImage();
      this.dataImages.push(this.urlImage + this.idImage);
    };    
  }
  
  getIdImage(): number {
    return this.idImage = Math.floor(Math.random() * 1000);
  }

  onViewImage(id: number) {
    console.log(id);
    // this.router.navigate(['/books', 'view', id]);
  }


}
