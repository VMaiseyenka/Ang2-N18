import { Component, OnInit } from '@angular/core';

import { AppSettingsService } from './core/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private appSettings: AppSettingsService
    ) { }

    ngOnInit(): void {
        this.appSettings.getSettings().subscribe(response => console.log(response));
    }
}
