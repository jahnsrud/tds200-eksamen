export default interface Room {
    id: string;
    name: string;
    imageUrl: string;
    priceInNok: number;
    description: string;
    address: string;
    maxNumberOfPeople: number;
    availability: string;
    facilities: string[];
    reviews: Review;
}

export interface Review {
    stars: number;
    author: string;
    comment: string;
    date: string;
}
