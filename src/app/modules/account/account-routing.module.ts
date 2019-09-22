import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './pages';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: 'perfil',
                component: ProfileComponent
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
