import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaListaComponent } from './pages/empresa-lista/empresa-lista.component';
import { EmpresaFormComponent } from './pages/empresa-form/empresa-form.component';
import { EmpresaDetalhesComponent } from './pages/empresa-detalhes/empresa-detalhes.component';
import { FornecedorListaComponent } from './pages/fornecedor-lista/fornecedor-lista.component';
import { FornecedorDetalhesComponent } from './pages/fornecedor-detalhes/fornecedor-detalhes.component';
import { FornecedorFormComponent } from './pages/fornecedor-form/fornecedor-form.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'empresas', component: EmpresaListaComponent },
  { path: 'empresas/detalhes/:cnpj', component: EmpresaDetalhesComponent },
  { path: 'empresas/nova', component: EmpresaFormComponent },
  { path: 'empresas/editar/:cnpj', component: EmpresaFormComponent },
  { path: 'fornecedores', component: FornecedorListaComponent },
  { path: 'fornecedores/detalhes/:cnpjCpf', component: FornecedorDetalhesComponent },
  { path: 'fornecedores/novo', component: FornecedorFormComponent },
  { path: 'fornecedores/editar/:cnpjCpf', component: FornecedorFormComponent },
  { path: '', redirectTo: '/empresas', pathMatch: 'full' },
  { path: '**', redirectTo: '/empresas', pathMatch: 'full' } // Rota padrão caso a URL seja inválida
];

@NgModule({
  declarations: [
    AppComponent,
    EmpresaListaComponent,
    EmpresaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
