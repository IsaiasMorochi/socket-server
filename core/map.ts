import { Marker } from "./marker";

export class Map {
    private markers: Marker[] = []

    constructor() {}

    getMarkers() {
        return this.markers;
    }

    setMarker( marker: Marker ){
        this.markers.push( marker );
    }

    deleteMarker( id: string ) {
        this.markers = this.markers.filter( marker => marker.id = id );
        return this.markers;
    }

    moveMarker( marker: Marker ) {
        for (const key in this.markers) {
            if (this.markers.hasOwnProperty(key)) {
                this.markers[key].lat = marker.lat;
                this.markers[key].lng = marker.lng;
                break;
            }
        }
    }
    
}