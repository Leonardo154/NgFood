import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { PedidoRealizadoComponent } from './order-made/oreder-made.component';
import { TotalPipe } from './total.pipe';
import { TotalQuantityPipe } from './total-quantity.pipe';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    PedidoRealizadoComponent,
    TotalPipe,
    TotalQuantityPipe,
    OrderItensComponent,
    OrderListComponent,
    OrderManagerComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    NgbModule,
    MatGridListModule
  ],
  exports: [
    TotalPipe
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
