import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {MeetingRoomComponent} from './meeting-room/meeting-room.component';
import {ReviewComponent} from './review/review.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [IonicModule.forRoot(), FormsModule],
    declarations: [MeetingRoomComponent, ReviewComponent],
    exports: [MeetingRoomComponent, ReviewComponent]
})

export class ComponentsModule {}
