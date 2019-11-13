import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {MeetingRoomComponent} from './meeting-room/meeting-room.component';

@NgModule({
    imports: [IonicModule],
    declarations: [MeetingRoomComponent],
    exports: [MeetingRoomComponent]
})

export class ComponentsModule {}
