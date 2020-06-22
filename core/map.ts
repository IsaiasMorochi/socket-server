import { Marker } from "./marker";

export class Map {
    
    public markers: Marker[] = []

    constructor() {}

    getMarkers() {
        return this.markers;
    }

    setMarker( marker: Marker ){
        this.markers.push( marker );
    }

    deleteMarker( id: string ) {
        this.markers = this.markers.filter( marker => marker.id === id );
        return this.markers;
    }

    moveMarker( marker: Marker ) {
        for (const index in this.markers) {
            if (this.markers[index].id === marker.id ) {
                this.markers[index].lat = marker.lat;
                this.markers[index].lng = marker.lng;
                break;
            }
        }
    }

}