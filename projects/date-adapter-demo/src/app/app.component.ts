import * as dayjs from 'dayjs';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    readonly datePicked = new FormControl(dayjs());

    get datePicked$() {
        return this.datePicked.valueChanges;
    }
}
