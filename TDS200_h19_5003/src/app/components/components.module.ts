import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {MeetingRoomComponent} from './meeting-room/meeting-room.component';
import {ReviewComponent} from './review/review.component';

@NgModule({
    imports: [IonicModule],
    declarations: [MeetingRoomComponent, ReviewComponent],
    exports: [MeetingRoomComponent, ReviewComponent]
})

export class ComponentsModule {}
