import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from '../../services/organization.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {
  addOrgForm: FormGroup;
  submitted = false;
  validationMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private orgService: OrganizationService) { }

  ngOnInit(): void {
    this.addOrgForm = this.formBuilder.group({
      organizationName: ['', [Validators.required, Validators.maxLength(100)]],
      organizationShortName: ['', Validators.required, Validators.maxLength(50)],
      organizationURL: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      organizationLOGO: ['', Validators.required],
    });
  }
  get f() { return this.addOrgForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addOrgForm.invalid) {
      this.submitted = false;
      return;
    } else {
      this.orgService.addOrganization(this.addOrgForm.value).subscribe((res: any) => {
        if (res) {
          alert('oragnization added successfully  !');
          this.router.navigate(['/all-organizations']);
        }
      }, (error: HttpErrorResponse) => {
        this.submitted = false;
        alert('failed to add !');
        if (error.status === 0) {
          this.submitted = false;
        }
      });
    }
  }
}
