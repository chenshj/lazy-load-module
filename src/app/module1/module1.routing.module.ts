import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Module1Component } from "./module1.component";

const module1Routes: Routes = [
    { path:'',component:Module1Component},
]

@NgModule({
    imports:[
        RouterModule.forChild(module1Routes)
    ],
    exports:[
        RouterModule
    ]
})
export class Module1RoutingModule{}