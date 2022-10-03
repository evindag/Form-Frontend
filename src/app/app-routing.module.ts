import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReceiptComponent } from './add-receipt/add-receipt.component';
import { CheckComponent } from './components/check/check.component';
import { NaviComponent } from './components/navi/navi.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:"check",component:CheckComponent},
  {path:"receipt",component:ReceiptComponent},
  {path:"receipt/Add", component:AddReceiptComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
