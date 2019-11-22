import { Injectable } from '@angular/core';
import Room from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomBookingService {

  constructor() { }

  book(room: Room) {
    console.warn('Not available yet');
  }


}
