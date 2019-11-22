export default interface Room {
    id: string;
    name: string;
    owner: string;
    imageUrl: string;
    priceInNok: number;
    description: string;
    address: string;
    maxNumberOfPeople: number;
    availability: string;
    facilities: string[];
    coordinates: Coordinates;
    reviews: Review[];
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Review {
    stars: number;
    author: string;
    comment: string;
    date: string;
}
