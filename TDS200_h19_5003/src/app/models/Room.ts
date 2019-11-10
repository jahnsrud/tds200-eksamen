export default interface IRoom {
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    address: string;
    size: string;
    availability: string;
    facilities: string;
    reviews: IReview;
}

export interface IReview {
    stars: number;
    author: string;
    comment: string;
    date: string;
}
