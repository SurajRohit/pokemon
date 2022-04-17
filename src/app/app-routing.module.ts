import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';

const routes: Routes = [
  //  {
  //     component:ViewPokemonComponent,
  //     path:'pokemon'
  //  },
  //  {
  //   component:AppComponent,
  //   path:''
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
