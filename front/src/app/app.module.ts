import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AlertMessageComponent } from './components/commons/alert-message/alert-message.component';
import { TestFormComponent } from './components/forms/test-form/test-form.component';
import { TestTableComponent } from './components/tables/test-table/test-table.component';
import { PlanTableComponent } from './components/tables/plan-table/plan-table.component';
import { VehicleTableComponent } from './components/tables/vehicle-table/vehicle-table.component';
import { InjectorTableComponent } from './components/tables/injector-table/injector-table.component';
import { TabsModule } from "ngx-bootstrap/tabs";
import { PreInjectionTableComponent } from './components/tables/pre-injection-table/pre-injection-table.component';
import { MedElectricTableComponent } from './components/tables/med-electric-table/med-electric-table.component';
import { IdlingTableComponent } from './components/tables/idling-table/idling-table.component';
import { FullLoadTableComponent } from './components/tables/full-load-table/full-load-table.component';
import { HalfLoadTableComponent } from './components/tables/half-load-table/half-load-table.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReportComponent } from './pages/report/report.component';
import { CanvasGraphComponent } from './components/canvas-graph/canvas-graph.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { UserTableComponent } from './components/tables/user-table/user-table.component';
import { WorkshopTableComponent } from './components/tables/workshop-table/workshop-table.component';
import { PlanFormComponent } from './components/forms/plan-form/plan-form.component';
import { VehicleFormComponent } from './components/forms/vehicle-form/vehicle-form.component';
import { InjectorFormComponent } from './components/forms/injector-form/injector-form.component';
import { WorkshopFormComponent } from './components/forms/workshop-form/workshop-form.component';
import { CommonPageComponent } from './components/commons/common-page/common-page.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { TopMessageComponent } from './components/commons/top-message/top-message.component';
import { AsideComponent } from './components/commons/aside/aside.component';
import { InjectorNumberReportComponent } from './components/reports/injector-number-report/injector-number-report.component';
import { ServiceOrderReportComponent } from './components/reports/service-order-report/service-order-report.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    TopMessageComponent,
    AlertMessageComponent,
    CommonPageComponent,
    TestFormComponent,
    TestTableComponent,
    PlanTableComponent,
    VehicleTableComponent,
    InjectorTableComponent,
    PlanFormComponent,
    VehicleFormComponent,
    InjectorFormComponent,
    PreInjectionTableComponent,
    MedElectricTableComponent,
    IdlingTableComponent,
    FullLoadTableComponent,
    HalfLoadTableComponent,
    CommentsComponent,
    ReportComponent,
    CanvasGraphComponent,
    ServiceOrderReportComponent,
    InjectorNumberReportComponent,
    UserFormComponent,
    UserTableComponent,
    WorkshopTableComponent,
    WorkshopFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
