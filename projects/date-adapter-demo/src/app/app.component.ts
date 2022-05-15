import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
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
      const t = new Date();
      this.today = dayjs(new Date(
        Date.UTC(t.getFullYear(), t.getMonth(), t.getUTCDay(), 0, 0, 0)
      ));
      this.datePicked = new FormControl(this.today);
      this.datePicked$ = this.datePicked.valueChanges.pipe(startWith(this.today));
      }
}
