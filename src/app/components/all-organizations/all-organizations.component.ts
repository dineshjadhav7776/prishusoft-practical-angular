import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { OrganizationService } from '../../services/organization.service';

@Component({
  selector: 'app-all-organizations',
  templateUrl: './all-organizations.component.html',
  styleUrls: ['./all-organizations.component.css']
})
export class AllOrganizationsComponent implements OnInit {

  organizationListing = [];

  constructor(private OrgService: OrganizationService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.OrgService.getAllOrganizations().subscribe((res: any) => {
      this.organizationListing = res.data;
    })
  }

  navigateToAddOrg() {
    this.router.navigate(['/add-organization']);
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

}
