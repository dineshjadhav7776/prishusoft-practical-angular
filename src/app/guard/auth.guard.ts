import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ConstName } from '../services/const-name.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
    ) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const adminToken = localStorage.getItem('adminToken');
        if (adminToken) {
            return true;
        } else {
            this.router.navigate(['/']);
            alert('Please login first');
            return false;
        }
    }
}
