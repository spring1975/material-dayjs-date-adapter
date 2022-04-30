import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as dayjs from 'dayjs';
import { startWith } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    readonly today = dayjs();
    readonly datePicked = new FormControl(this.today);

    readonly datePicked$ = this.datePicked.valueChanges.pipe(
        startWith(this.today)
    );
}
