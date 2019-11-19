export default interface Room {
    name: string;
    imageUrl: string;
    priceInNOK: number;
    description: string;
    address: string;
    size: string;
    availability: string;
    facilities: string;
    reviews: Review;
}

export interface Review {
    stars: number;
    author: string;
    comment: string;
    date: string;
}
