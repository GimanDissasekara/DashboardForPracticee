import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighchartsChartModule } from 'highcharts-angular';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { CreateButtonComponent } from './header/create-button/create-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    TopThreeProductsComponent,
    LastFewTransactionsComponent,
    CreateButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  


})
export class AppModule { }
