import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PartnersListComponent } from "./partners/partners-list/partners-list.component";
import { CategoriesListComponent } from "./categories-list/categories-list.component";

const routes: Routes = [
    {
        path: "",
        component: CategoriesListComponent
    },
    
    {
        path: ":name",
        component: PartnersListComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule {}
