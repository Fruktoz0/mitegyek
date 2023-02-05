import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ReceptekComponent } from './receptek/receptek.component';
import { LoginComponent } from './login/login.component';
import { ReceptbekuldesComponent } from './receptbekuldes/receptbekuldes.component';
import { BekuldottreceptekComponent } from './admin/bekuldottreceptek/bekuldottreceptek.component';
import { BekuldottreceptComponent } from './admin/bekuldottrecept/bekuldottrecept.component';
import { MitegyekmaComponent } from './mitegyekma/mitegyekma.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './admin/users/users.component';
import { EditreceptComponent } from './editrecept/editrecept.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'mitegyekma', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'bekuldottreceptek', component: BekuldottreceptekComponent},
  ]
},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'users', component: UsersComponent},
  ]
},
  {path: 'receptek', component: ReceptekComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'mitegyekma', component: MitegyekmaComponent},
  {path: 'bekuldottrecept/:id', component: BekuldottreceptComponent},

  {path: 'admin', component: AdminComponent, children: [
    {path: 'bekuldottrecept/:id', component: BekuldottreceptComponent},
  ]
},
  {path: 'receptbekuldes', component: ReceptbekuldesComponent},
  {path: 'search', component: SearchComponent},

  /*{path: 'receptek', component: ReceptekComponent, children: [
    {path: 'search', component: SearchComponent}
  ]
},*/

  {path: 'editrecept', component: EditreceptComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'mitegyekma', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
