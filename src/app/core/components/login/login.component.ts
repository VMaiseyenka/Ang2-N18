import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    isLoggedIn = false;
    rolesSelectMapping = {
        'user': 'User',
        'admin': 'Admin'
    };

    @ViewChild('userRole')
    userRole: ElementRef;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.subscription = this.authService.isLoggedIn$
            .subscribe((value: boolean) => this.isLoggedIn = value);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getSelectKeys() {
        return Object.keys(this.rolesSelectMapping);
    }

    login() {
        this.authService.login(this.userRole.nativeElement.value).then(() => {
            const user = this.authService.getUser();

            if (user === 'admin') {
                this.router.navigate(['/admin']);
            }
        }
        );
    }

    user() {
        return this.authService.getUser();
    }

    logout() {
        this.authService.loginOut();
    }

}
