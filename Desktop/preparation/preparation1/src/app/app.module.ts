import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NewsComponent } from './news/news.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoutinComponent } from './routin/routin.component';
const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'hero',component:HeroSectionComponent},
  {path:'news',component:NewsComponent},
  {path:'frm',component:FormComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroSectionComponent,
    NewsComponent,
    FormComponent,
    FooterComponent,
    RoutinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes ),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
