import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
   {
       path: 'mi-espacio',
       loadChildren: () => import('../modules/account/account.module').then(m => m.AccountModule)
   },
   {
        path: 'login',
        loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule)
   },
   {
       path: '',
       redirectTo: 'login',
       pathMatch: 'full'
   }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {}
