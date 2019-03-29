import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { AttributeComponent } from './attribute/attribute.component';
import { Transmit1Component } from './transmit1/transmit1.component';
import { Transmit2Component } from './transmit2/transmit2.component';
import { FormComponent } from './form/form.component';
import { WorkSevicesComponent } from './work-sevices/work-sevices.component';
import { from } from 'rxjs';
import { EmployeeComponent } from './work-sevices/employee/employee.component';
import {EmployeeService} from './service/employee.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NgIfComponent,
    AttributeComponent,
    Transmit1Component,
    Transmit2Component,
    FormComponent,
    WorkSevicesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
