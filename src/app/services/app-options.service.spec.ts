import {TestBed, inject} from '@angular/core/testing';

import {AppOptionsService} from './app-options.service';

describe('AppOptionsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppOptionsService]
        });
    });

    it('should be created', inject([AppOptionsService], (service: AppOptionsService) => {
        expect(service).toBeTruthy();
    }));
});
