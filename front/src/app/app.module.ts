import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { TopMessageComponent } from './components/top-message/top-message.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { CommonsComponent } from './components/commons/commons.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { TestTableComponent } from './components/test-table/test-table.component';
import { PlanTableComponent } from './components/plan-table/plan-table.component';
import { VehicleTableComponent } from './components/vehicle-table/vehicle-table.component';
import { InjectorTableComponent } from './components/injector-table/injector-table.component';
import { TabsModule } from "ngx-bootstrap/tabs";
import { PlanFormComponent } from './components/plan-form/plan-form.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { InjectorFormComponent } from './components/injector-form/injector-form.component';
import { PreInjectionTableComponent } from './components/pre-injection-table/pre-injection-table.component';
import { MedElectricTableComponent } from './components/med-electric-table/med-electric-table.component';
import { IdlingTableComponent } from './components/idling-table/idling-table.component';
import { FullLoadTableComponent } from './components/full-load-table/full-load-table.component';
import { HalfLoadTableComponent } from './components/half-load-table/half-load-table.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReportComponent } from './pages/report/report.component';
import { CanvasGraphComponent } from './components/canvas-graph/canvas-graph.component';

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
    CommonsComponent,
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
