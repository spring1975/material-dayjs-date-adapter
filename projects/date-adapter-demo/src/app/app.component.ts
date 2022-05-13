import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    readonly today: dayjs.Dayjs;
    readonly datePicked: FormControl;

    readonly datePicked$: Observable<any>;
    constructor() {
        dayjs.extend(utc);
        this.today = dayjs.utc().startOf('day');
        console.log('date as initialized in constructor', this.today.format());
        this.datePicked = new FormControl(this.today);
        this.datePicked$ = this.datePicked.valueChanges.pipe(
            startWith(this.today)
        );
    }
}
