import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

import { MatFormFieldModule, MatInputModule } from '@angular/material'

const router: Routes = [
    {
        path: '',
        component: AuthComponent
    }
]

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
         CommonModule,
         RouterModule.forChild(router),
         MatFormFieldModule,
         MatInputModule,
         ],
    exports: [],
    providers: [],
})
export class AuthModule {}