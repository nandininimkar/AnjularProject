import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { StudentComponent } from './pages/student/student.component';
import { ErrorComponent } from './pages/error/error.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'admin' , component: AdminComponent},
  { path: 'student' , component: StudentComponent},
  { path: 'update' , component: UpdateComponent},
  { path: '**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
