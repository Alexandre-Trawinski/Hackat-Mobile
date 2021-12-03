import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detail-hackathon',
    loadChildren: () => import('./detail-hackathon/detail-hackathon.module').then( m => m.DetailHackathonPageModule)
  },
  {
    path: 'form-login',
    loadChildren: () => import('./form-login/form-login.module').then( m => m.FormLoginPageModule)
  },
  {
    path: 'atelier',
    loadChildren: () => import('./atelier/atelier.module').then( m => m.AtelierPageModule)
  },
  {
    path: 'inscription-evenement',
    loadChildren: () => import('./inscription-evenement/inscription-evenement.module').then( m => m.InscriptionEvenementPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
