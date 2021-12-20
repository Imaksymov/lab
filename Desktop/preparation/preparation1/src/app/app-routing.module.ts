import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NewsComponent } from './news/news.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'hero',component:HeroSectionComponent},
  {path:'news',component:NewsComponent},
  {path:'frm',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
