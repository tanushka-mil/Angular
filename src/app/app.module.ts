import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import {TextMaskModule} from 'angular2-text-mask';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {OrdersComponent} from './pages/orders/orders.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {ProcessingComponent} from './pages/processing/processing.component';
import {LicenseNumberComponent} from './pages/registration/license-number/license-number.component';
import {LoginComponent} from './pages/login/login.component';
import {StartRegistrationComponent} from './pages/registration/start-registration/start-registration.component';
import {InsuranceTypeStepComponent} from './pages/order/new/pages/insurance-type-step/insurance-type-step.component';
import {ProductTypeStepComponent} from './pages/order/new/pages/product-type-step/product-type-step.component';
import {SelectTemplateComponent} from './pages/order/new/pages/select-template/select-template.component';
import {LeadsCounterStepComponent} from './pages/order/new/pages/leads-counter-step/leads-counter-step.component';
import {GeoComponent} from './pages/order/new/pages/geo/geo.component';
import {LeadsDeliverComponent} from './pages/order/new/pages/leads-deliver/leads-deliver.component';
import {LayoutComponent} from './layout/layout.component';
import {NewOrderComponent} from './pages/order/new/new-order.component';
import {ControlMessagesComponent} from './components/control-messages/control-messages.component';

import {AppOptionsService} from './services/app-options.service';
import {ValidationService} from './validation/validation.service';

import {RangeNumberPipe} from './pipes/range-number.pipe';
import {KeysPipe} from './pipes/keys.pipe';
import {environment} from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        OrdersComponent,
        PageNotFoundComponent,
        ProcessingComponent,
        LicenseNumberComponent,
        LoginComponent,
        StartRegistrationComponent,
        InsuranceTypeStepComponent,
        RangeNumberPipe,
        ProductTypeStepComponent,
        NewOrderComponent,
        KeysPipe,
        SelectTemplateComponent,
        LayoutComponent,
        LeadsDeliverComponent,
        GeoComponent,
        LeadsCounterStepComponent,
        ControlMessagesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        TextMaskModule,
        AgmCoreModule.forRoot({
            apiKey: environment.googleMapsApiKey
        })
    ],
    providers: [
        AppOptionsService,
        ValidationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
