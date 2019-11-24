import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export default interface Room {
    id?: string;
    name: string;
    owner: string;
    imageUrl: string;
    priceInNok: number;
    description: string;
    address: string;
    maxNumberOfPeople: number;
    facilities: string[];
    bookedByUser: string;
    bookedUntil: Timestamp;
    coordinates: Coordinates;
    reviews: Review[];
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Review {
    id?: string;
    stars: number;
    author: string;
    comment: string;
    date: Timestamp;
}
