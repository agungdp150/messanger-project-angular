import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { TokenInterceptorService } from './service/token-interceptor.service';
import { RoomResolverService } from './components/room-chat/room-resolver.service';
import { DetaiUserResolverService } from './components/user/detail-user/du-resolver.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    SharedModule,
    RoomChatModule,
    HomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    ProtectNavGuard,
    UserService,
    RoomResolverService,
    DetaiUserResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
