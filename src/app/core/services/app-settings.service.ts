import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';
import { AppSettings } from '../models/app-settings.model';

@Injectable()
export class AppSettingsService {

    private readonly APP_SETTINGS = 'app-settings';

    constructor(
        private localStorageService: LocalStorageService,
        private http: HttpClient) { }

    getSettings(): Observable<AppSettings> {
        const settings = this.localStorageService.getItem(this.APP_SETTINGS);
        if (settings === null) {
            this.load()
                .pipe(
                    map(
                        response => {
                            this.localStorageService.setItem(this.APP_SETTINGS, JSON.stringify(response));
                            return response;
                        }
                    )
                );
        } else {
            return of(<AppSettings>JSON.parse(settings));
        }
    }

    private load() {
        return this.http.get<AppSettings>('./assets/app-settings.json');
    }
}
