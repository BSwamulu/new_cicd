import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Build1Component } from './build1/build1.component';
import { Build2Component } from './build2/build2.component';
import { NightComponent } from  './night/night.component';
import { PrivateComponent } from './private/private.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  { path: 'night/image/:image_id', component: Build1Component },
  { path: 'night/image', component: Build1Component },
  { path: 'private/image', component: Build2Component },
  { path: 'private/image/:image_id', component: Build2Component },
  { path:'night', component: NightComponent },
  { path:'private', component: PrivateComponent },
  // {path: '**', redirectTo: 'night'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
