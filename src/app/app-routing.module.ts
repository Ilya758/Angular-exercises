import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './routing/child/child.component';
import { AuthGuard } from './routing/guards/auth.guard';
import { MainPageComponent } from './routing/main-page/main-page.component';
import { ProtectedPageComponent } from './routing/protected-page/protected-page.component';
import { UnprotectedPageComponent } from './routing/unprotected-page/unprotected-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'protected',
    component: ProtectedPageComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [{ path: 'child', component: ChildComponent }],
  },
  {
    path: 'unprotected',
    component: UnprotectedPageComponent,
  },
  { path: 'customer/:id/orders', component: UnprotectedPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
