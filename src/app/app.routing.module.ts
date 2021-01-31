import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AllOrganizationsComponent } from './components/all-organizations/all-organizations.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { AddOrganizationComponent } from './components/add-organization/add-organization.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'all-organizations', component: AllOrganizationsComponent, canActivate: [AuthGuard] },
    { path: 'add-organization', component: AddOrganizationComponent, canActivate: [AuthGuard] }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}