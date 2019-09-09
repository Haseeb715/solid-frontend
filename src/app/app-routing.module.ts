import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './components/info/info.component';
import {PrivacyComponent} from './components/privacy/privacy.component';

const routes: Routes = [
  {path: 'info', component: InfoComponent, data: {title: 'Informationen'}},
  {path: 'privacy', component: PrivacyComponent, data: {title: 'Datenschutzerklärung'}},
  {
    path: 'determination',
    loadChildren: () => import('./modules/determinationhelper/determinationhelper.module').then(m => m.DeterminationHelperModule),
  }, {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./modules/quiz/quiz.module').then(m => m.QuizModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
