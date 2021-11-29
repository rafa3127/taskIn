import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, canActivate, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { AppComponent } from './app.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectAuthorizedToHome =() => redirectLoggedInTo(["taskIn"])
const routes: Routes = [
  { path: 'auth', loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule), canActivate:[AngularFireAuthGuard], data:{ authGuardPipe: redirectAuthorizedToHome} },
  { path: 'taskIn', loadChildren: () => import("./modules/task-in/task-in.module").then(m => m.TaskInModule), canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: '**', redirectTo: 'taskIn',  pathMatch: 'full'},
  { path: '', redirectTo: 'taskIn', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
