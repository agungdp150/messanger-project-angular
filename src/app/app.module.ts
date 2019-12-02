import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './components/user/user.module';

// Component
import { ChatSideComponent } from './components/room-chat/chat-side/chat-side.component';
import { FormComponent } from './components/room-chat/form/form.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { MyChatComponent } from './components/room-chat/my-chat/my-chat.component';

import { NotFoundComponent } from './404';

// Service
import { AuthService } from './service/auth.service';
import { ProtectNavGuard } from './service/protect-nav.guard';

// Bootstrap Framework
import { BootsrapModule } from './bootsrap/bootsrap.module';


@NgModule({
  declarations: [
    AppComponent,
    ChatSideComponent,
    FormComponent,
    SidenavComponent,
    MyChatComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootsrapModule,
    HttpClientModule,
    FormsModule,
    UserModule
  ],
  providers: [AuthService, ProtectNavGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
