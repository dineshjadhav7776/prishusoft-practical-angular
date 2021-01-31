import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ConstName {
  API = {
    base_uri: environment.apiUrl,
  };

  API_URL = {
    login: this.API.base_uri + '/api/Auth/Login',
    get_organizations: this.API.base_uri + '/api/Organization/getAllOrganization',
    add_organization: this.API.base_uri + '/api/Organization/addOrganization'
  }

  getAccessToken() {
    return {
      headers: new HttpHeaders({
        'Authentication': localStorage.getItem('adminToken'),
      }),
    };
  }
}