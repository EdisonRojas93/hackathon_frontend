import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
   {
       path: 'mi-espacio',
       loadChildren: () => import('../modules/account/account.module').then(m => m.AccountModule)
   },
   {
       path: '',
       redirectTo: 'mi-espacio',
       pathMatch: 'full'
   }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {}
