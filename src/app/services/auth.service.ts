import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConstName } from './const-name.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(
        private http: HttpClient,
        private constant: ConstName
    ) { }

    login(data) {
        return this.http.post(this.constant.API_URL.login, {
            email: data.email,
            password: data.password,
            organizationUrl: 'http://localhost:4200/'
        })
    }

    logout() {
        localStorage.clear();
    }
}