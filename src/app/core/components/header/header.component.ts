import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    isAdminLoggedIn = false;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.subscription = this.authService.isLoggedIn$.subscribe((value: boolean) => {
            this.isAdminLoggedIn = value && this.authService.isAdmin();
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
