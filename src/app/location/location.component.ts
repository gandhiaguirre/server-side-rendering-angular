import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit{
  
  
  
  ngOnInit(): void {
      this.getLocation();
  }
  title = 'Location';


  position: Position;

  getLocation() {
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
