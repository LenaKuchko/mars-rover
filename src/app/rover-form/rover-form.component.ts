import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotos } from '../mars-rover-api-photos.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [MarsRoverApiPhotos, PhotoService]
})

export class RoverFormComponent {
  photos: any[] = null;
  noPhotos: boolean = false;

  constructor(private marsRoverApiPhotos: MarsRoverApiPhotos) { }

  getRoverImages(date: string, camera: string) {
    this.marsRoverApiPhotos.getByDateAndCamera(date, camera).subscribe(response => {
      if(response.json().photos.length > 0)
      {
        this.photos = response.json();
      }
      else {
        this.noPhotos = true;
      }
    });
  }

  saveRoverImages(date, camera) {
    this.marsRoverApiPhotos.saveImages(date, camera);
  }

}
