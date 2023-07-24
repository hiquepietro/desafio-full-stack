import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.css']
})
export class CadastroFornecedorComponent implements OnInit {
  fornecedorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fornecedorForm = this.formBuilder.group({
      tipoPessoa: ['F', Validators.required],
      nome: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      rg: [''],
      dataNascimento: [''],
      empresa: ['', Validators.required]
    });

    this.fornecedorForm.get('tipoPessoa').valueChanges.subscribe(value => {
      if (value === 'F') {
        this.fornecedorForm.get('rg').setValidators([Validators.required]);
        this.fornecedorForm.get('dataNascimento').setValidators([Validators.required]);
      } else {
        this.fornecedorForm.get('rg').clearValidators();
        this.fornecedorForm.get('dataNascimento').clearValidators();
      }
      this.fornecedorForm.get('rg').updateValueAndValidity();
      this.fornecedorForm.get('dataNascimento').updateValueAndValidity();
    });
  }

  cadastrarFornecedor() {
    if (this.fornecedorForm.invalid) {
      return;
    }

    // Aqui você deve implementar a lógica para cadastrar o fornecedor no backend,
    // verificando se o CNPJ/CPF é único e se o fornecedor é maior de idade (caso seja pessoa física).

    console.log('Fornecedor cadastrado com sucesso!');
    this.fornecedorForm.reset();
  }
}

