import * as dayjs from 'dayjs';
import { Component } from '@angular/core';
import { startWith, filter, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    readonly datePicked = new FormControl();

    readonly datePicked$ = this.datePicked?.valueChanges.pipe(
        startWith(dayjs()),
        filter<dayjs.Dayjs>(Boolean),
        map((d) => d.toDate())
    );
}
