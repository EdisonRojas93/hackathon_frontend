import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';

import {
    ProfileComponent
} from './pages';
import {
    FeedbackComponent
} from './components';

import {
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSelectModule
} from '@angular/material';
import { AppreciationComponent } from './components/appreciation/appreciation.component';
import { AppreciationCardComponent } from './components/appreciation-card/appreciation-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpRequest, HttpClientModule } from '@angular/common/http';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
    declarations: [
        ProfileComponent,
        AccountComponent,
        FeedbackComponent,
        FeedbackCardComponent,
        AppreciationComponent,
        AppreciationCardComponent,
        StarRatingComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatSelectModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [],
    providers: [],
})
export class AccountModule { }