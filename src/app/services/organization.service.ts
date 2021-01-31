import { Injectable } from '@angular/core';
import { ConstName } from './const-name.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class OrganizationService {
    constructor(
        private http: HttpClient,
        private constant: ConstName
    ) { }

    getAllOrganizations() {
        return this.http.get(this.constant.API_URL.get_organizations, this.constant.getAccessToken());
    }

    addOrganization(addOrgData) {
        return this.http.post(this.constant.API_URL.add_organization, {
            organizationName: addOrgData.organizationName,
            organizationShortName: addOrgData.organizationShortName,
            organizationURL: addOrgData.organizationURL,
            organizationLOGO: addOrgData.organizationLOGO
        }, this.constant.getAccessToken())
    }
}