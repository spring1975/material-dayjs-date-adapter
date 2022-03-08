import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE
} from '@angular/material/core';
import {
    DayjsDateAdapter,
    MAT_DAYJS_DATE_ADAPTER_OPTIONS
} from './dayjs-date-adapter';

import { MAT_DAYJS_DATE_FORMATS } from './dayjs-date-formats';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    providers: [
        {
            provide: DateAdapter,
            useClass: DayjsDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_DAYJS_DATE_ADAPTER_OPTIONS]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: MAT_DAYJS_DATE_FORMATS
        }
    ]
})
export class DayjsDateModule {}

@NgModule({
    imports: [DayjsDateModule],
    providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS }]
})
export class MatDateFnsModule {}
