import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MarcheModel} from '../../models/marche.model';
import {MarcheService} from '../../shared/marche.service';
import {} from 'googlemaps';

@Component({
  selector: 'app-marche',
  templateUrl: './marche.component.html',
  styleUrls: ['./marche.component.scss']
})
export class MarcheComponent implements OnInit {

  @ViewChild('gmap') gmapElement: ElementRef;
  map: google.maps.Map;
  marcheListe?: MarcheModel[];

  private markerListe: {};
  private infoWindow: google.maps.InfoWindow;

  constructor(private marcheService: MarcheService) {
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.marcheService.list().subscribe(
      (data: any[]) => {
        this.marcheListe = [];
        for (const marche of data) {
          this.marcheListe.push(new MarcheModel(marche));
        }
        this.markerListe = {};
        for (const marche of this.marcheListe) {
          this.addMarker(marche.adresse + ' ' + marche.code_postal, marche.id);
        }
      }
    );
  }

  addMarker(location: string, markerId) {
    const placeService = new google.maps.places.PlacesService(this.map);
    placeService.findPlaceFromQuery({query: location, fields: ['geometry']},
      (results, status1) => {
        if (status1 === google.maps.places.PlacesServiceStatus.OK) {
          this.markerListe[markerId] = new google.maps.Marker({map: this.map, position: results[0].geometry.location});
          this.map.setCenter(results[0].geometry.location);
        }
      });
  }

  setDirections(markerId: number) {
    const directionService = new google.maps.DirectionsService();
    const directionDisplay = new google.maps.DirectionsRenderer();
    let userPos: { lat: number, lng: number };
    directionDisplay.setMap(this.map);

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      if (this.infoWindow) {
        this.infoWindow.close();
      }
      navigator.geolocation.getCurrentPosition((position) => {
          userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.infoWindow = new google.maps.InfoWindow();
          this.infoWindow.setPosition(userPos);
          this.infoWindow.setContent('Vous');
          this.infoWindow.open(this.map);

          const markerPos = {lat: this.markerListe[markerId].getPosition().lat(), lng: this.markerListe[markerId].getPosition().lng()};

          directionService.route({
            origin: userPos,
            destination: markerPos,
            travelMode: google.maps.TravelMode.DRIVING
          }, (result, status1) => {
            if (status1 === 'OK') {
              directionDisplay.setDirections(result);
            } else {
              console.log(result);
              console.log(status1);
            }
          });
        },
        positionError => console.log(positionError));
    }
  }
}
