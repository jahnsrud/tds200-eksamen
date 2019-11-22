import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {MeetingRoomComponent} from './meeting-room/meeting-room.component';
import {ReviewComponent} from './review/review.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';

@NgModule({
    imports: [IonicModule],
    declarations: [MeetingRoomComponent, ReviewComponent, LoginFormComponent, RegisterFormComponent],
    exports: [MeetingRoomComponent, ReviewComponent, LoginFormComponent, RegisterFormComponent]
})

export class ComponentsModule {}
