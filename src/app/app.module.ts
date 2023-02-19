import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { MitegyekmaComponent } from './mitegyekma/mitegyekma.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReceptbekuldesComponent } from './receptbekuldes/receptbekuldes.component';
import { ReceptekComponent } from './receptek/receptek.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { BekuldottreceptComponent } from './admin/bekuldottrecept/bekuldottrecept.component';
import { BekuldottreceptekComponent } from './admin/bekuldottreceptek/bekuldottreceptek.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseService } from './service/base.service';
import { UsersComponent } from './admin/users/users.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditreceptComponent } from './editrecept/editrecept.component';
import { SearchComponent } from './search/search.component';
import { BekuldottfajlokComponent } from './admin/bekuldottfajlok/bekuldottfajlok.component';
import { UploadDetailsComponent } from './admin/bekuldottfajlok/upload-details/upload-details.component';
import { UploadListComponent } from './admin/bekuldottfajlok/upload-list/upload-list.component';
import { FileUploadService } from './service/file-upload.service';
import { UserComponent } from './user/user.component';
import { FileUploadModel } from './admin/bekuldottfajlok/file-upload/file-upload.model';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    MitegyekmaComponent,
    NavbarComponent,
    ReceptbekuldesComponent,
    ReceptekComponent,
    RegistrationComponent,
    LoginComponent,
    AdminnavbarComponent,
    BekuldottreceptComponent,
    BekuldottreceptekComponent,
    UsersComponent,
    EditreceptComponent,
    SearchComponent,
    BekuldottfajlokComponent,
    UploadDetailsComponent,
    UploadListComponent,
    UserComponent,
    FileUploadModel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,

    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
  ],
  providers: [AuthService, BaseService, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
