import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {OrdersComponent} from './pages/orders/orders.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {StartRegistrationComponent} from './pages/registration/start-registration/start-registration.component';
import {LicenseNumberComponent} from './pages/registration/license-number/license-number.component';
import {LoginComponent} from './pages/login/login.component';
import {InsuranceTypeStepComponent} from './pages/order/new/pages/insurance-type-step/insurance-type-step.component';
import {ProductTypeStepComponent} from './pages/order/new/pages/product-type-step/product-type-step.component';
import {SelectTemplateComponent} from './pages/order/new/pages/select-template/select-template.component';
import {LeadsDeliverComponent} from './pages/order/new/pages/leads-deliver/leads-deliver.component';
import {GeoComponent} from './pages/order/new/pages/geo/geo.component';
import {LeadsCounterStepComponent} from './pages/order/new/pages/leads-counter-step/leads-counter-step.component';
import {NewOrderComponent} from './pages/order/new/new-order.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthorizeGuard} from './guards/authorize/authorize.guard';
import {NotAuthorizeGuard} from './guards/not-authorize/not-authorize.guard';

import {UserService} from './services/user.service';
import {RegistrationService} from './services/registration.service';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthorizeGuard]
    },
    {
        path: 'registration',
        canActivate: [NotAuthorizeGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'start-registration',
            },
            {
                path: 'start-registration',
                component: StartRegistrationComponent
            },
            {
                path: 'license-number',
                component: LicenseNumberComponent
            }
        ]

    },
    {
        path: 'order',
        canActivate: [AuthorizeGuard],
        children: [
            {
                path: 'new',
                component: NewOrderComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'insurance-type-step',
                    },
                    {
                        path: 'insurance-type-step',
                        component: InsuranceTypeStepComponent,
                    },
                    {
                        path: 'product-type-step',
                        component: ProductTypeStepComponent,
                    },
                    {
                        path: 'select-template',
                        component: SelectTemplateComponent,
                    },
                    {
                        path: 'leads-deliver',
                        component: LeadsDeliverComponent,
                    },
                    {
                        path: 'geo',
                        component: GeoComponent,
                    },
                    {
                        path: 'leads-counter-step',
                        component: LeadsCounterStepComponent,
                    },
                ]
            }
        ]

    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthorizeGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'orders',
                component: OrdersComponent
            },
        ],
    },
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent,
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        UserService,
        RegistrationService,
        NotAuthorizeGuard,
        AuthorizeGuard,
    ]
})
export class AppRoutingModule {
}
