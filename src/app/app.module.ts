import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoModule } from './modules/todo/todo.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { FormsModule } from '@angular/forms';
import { NoteService } from "./note.service"
import { HttpModule, JsonpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EnumIteratorPipe } from './enum-iterator.pipe';
import {APP_BASE_HREF} from '@angular/common';
import { TitleComponent } from './title/title.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ExtendedPaginationComponent } from './extended-pagination/extended-pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NavbarComponent,
    EnumIteratorPipe,
    TitleComponent,
    PaginationComponent,
    ExtendedPaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    TodoModule
  ],
  providers: [NoteService,{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
