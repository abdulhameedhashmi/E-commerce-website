import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeadingComponent } from './heading/heading.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Shop1Component } from './shop1/shop1.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'heading',component:HeadingComponent},
{path:'footer',component:FooterComponent},
{path:'shop1',component:Shop1Component},
{path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
