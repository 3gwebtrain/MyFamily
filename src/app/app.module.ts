import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { AllFamilyComponent } from './all-family/all-family.component';
import { ArifFamilyComponent } from './arif-family/arif-family.component';
import { FagruddinFamilyComponent } from './fagruddin-family/fagruddin-family.component';
import { UmarFamilyComponent } from './umar-family/umar-family.component';
import { ShahulFamilyComponent } from './shahul-family/shahul-family.component';
import { AllMarriedComponent } from './all-married/all-married.component';
import { AllUnMarriedComponent } from './all-un-married/all-un-married.component';


const familyRoutes = [
    {path:"", redirectTo:"allFamily", pathMatch:"full"},
    {path:"allFamily",component:AllFamilyComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    AllFamilyComponent,
    ArifFamilyComponent,
    FagruddinFamilyComponent,
    UmarFamilyComponent,
    ShahulFamilyComponent,
    AllMarriedComponent,
    AllUnMarriedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(familyRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
