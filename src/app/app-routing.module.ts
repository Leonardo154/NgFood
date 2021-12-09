import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PedidoRealizadoComponent } from './order-made/oreder-made.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: "cardapio", component: MenuComponent },
  { path: "pedido", component: OrderComponent },
  { path: "pedidos/:idPedido", component: PedidoRealizadoComponent },
  { path: "pedidos", component: OrderListComponent },
  { path: "pedidos/:idPedido/editar", component: OrderManagerComponent },
  { path: "", redirectTo: "cardapio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
