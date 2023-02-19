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
import { BekuldottfajlokComponent } from './admin/bekuldottfajlok/bekuldottfajlok.component';
import { UploadDetailsComponent } from './admin/bekuldottfajlok/upload-details/upload-details.component';
import { UploadListComponent } from './admin/bekuldottfajlok/upload-list/upload-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'mitegyekma', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'bekuldottreceptek', component: BekuldottreceptekComponent},
  ]
},
{path: 'admin', component: AdminComponent, children: [
  {path: 'bekuldottfajlok', component: BekuldottfajlokComponent},
]
},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'users', component: UsersComponent},
  ]
},
{path: 'admin', component: AdminComponent, children: [
  {path: 'bekuldottrecept/:id', component: BekuldottreceptComponent},
]
},
  {path: 'receptek', component: ReceptekComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'mitegyekma', component: MitegyekmaComponent},
  {path: 'bekuldottrecept/:id', component: BekuldottreceptComponent},
  {path: 'receptbekuldes', component: ReceptbekuldesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'editrecept', component: EditreceptComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: '**', redirectTo: 'mitegyekma', pathMatch: 'full'},



  {path: 'admin', component: AdminComponent, children: [
    {path: 'uploaddetails', component: UploadDetailsComponent},
  ]
  },

  {path: 'uploadlist', component: UploadListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
