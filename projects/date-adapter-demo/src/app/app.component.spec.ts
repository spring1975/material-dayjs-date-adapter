import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DateOnlyPipe } from './shared/pipes/dateonly.pipe';
import { DayjsPipe } from './shared/pipes/dayjs.pipe';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
              DateOnlyPipe,
              DayjsPipe
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });
});
