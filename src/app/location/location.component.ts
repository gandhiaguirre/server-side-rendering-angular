import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId) { }

  ngOnInit(): void {
    this.getLocation();
  }
  title = 'Location';


  position: Position;

  getLocation() {
    if (isPlatformBrowser(this.platformId)){
      console.log('getLocation');

      navigator.geolocation.getCurrentPosition((position: Position) => {

        this.position = position
        console.log(position)
      },
        (errorCallback) => {
          console.log(errorCallback);

          alert('Acceso denegado')
        })
    }
  }

}
