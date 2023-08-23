import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo01Component } from './components/exemplo01/exemplo01.component';
import { Exemplo02Component } from './components/exemplo02/exemplo02.component';
import { PessoaService } from './services/pessoa.service';
import { Exemplo03Component } from './components/exemplo03/exemplo03.component';
import { MenuComponent } from './components/menu/menu.component';
import { StartupComponent } from './components/startup/startup.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo01Component,
    Exemplo02Component,
    Exemplo03Component,
    MenuComponent,
    StartupComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PessoaService // Não é obrigatorio se "providedIn: 'root' no serviço
  ],
  bootstrap: [StartupComponent]
})
export class AppModule { }
