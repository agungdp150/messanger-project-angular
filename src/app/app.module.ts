import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { HomeModule } from './components/home/home.module';
import { UserModule } from './components/user/user.module';
import { SharedModule } from './shared/shared.module';
import { RoomChatModule } from './components/room-chat/room-chat.module';

// Component
import { NotFoundComponent } from './shared/404';

// Service
import { AuthService } from './service/auth.service';
import { ProtectNavGuard } from './service/protect-nav.guard';
import { UserService } from './service/user.service';

// Bootstrap Framework
import { BootsrapModule } from './bootsrap/bootsrap.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootsrapModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    SharedModule,
    RoomChatModule,
    HomeModule
  ],
  providers: [AuthService, ProtectNavGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
