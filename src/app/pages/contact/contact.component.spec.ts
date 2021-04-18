import { MockComponents, MockModule } from 'ng-mocks';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule],
      declarations: [
        ContactComponent,
        MockComponents(
          MatError,
          MatFormField,
          MatLabel,
          FormGroup,
          FormBuilder,
        )
       ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valide input email', () => {
    //não definir valor para o email
    component.formGroup.patchValue({'email': ''});
    fixture.autoDetectChanges();
    // obter tag mat-error e verifca a mensagem
    let inputEmail = document.getElementsByClassName('email')
    let matError = document.getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O email é obrigatório')

    //definir email invalido
    component.formGroup.patchValue({'email': 'henrique@quickfast'});
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email')
    matError = inputEmail[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('Email inválido')

    // definir email valido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({'email': 'henrique@quickfast'})
    fixture.autoDetectChanges()

    inputEmail = document.getElementsByClassName('email')
    matError = inputEmail[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);
  });

  it('valide input name', () => {
    //não definir valor para o nome
    component.formGroup.patchValue({'name': ''});
    fixture.autoDetectChanges();
    // obter tag mat-error e verifca a mensagem
    let inputName = document.getElementsByClassName('name')
    let matError = document.getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('Nome é obrigatório')


    // definir nome valido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({'name': 'henrique'})
    fixture.autoDetectChanges()

    inputName = document.getElementsByClassName('name')
    matError = inputName[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);
  });

  it('valide input phone', () => {
    //não definir valor para o nome
    component.formGroup.patchValue({'phone': ''});
    fixture.autoDetectChanges();
    // obter tag mat-error e verifca a mensagem
    let inputPhone = document.getElementsByClassName('phone')
    let matError = document.getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O Número é obrigatório')


    // definir nome valido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({'phone': 'henrique'})
    fixture.autoDetectChanges()

    inputPhone = document.getElementsByClassName('prone')
    matError = inputPhone[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);
  });

  it('valide input message', () => {
    //não definir valor para o nome
    component.formGroup.patchValue({'message': ''});
    fixture.autoDetectChanges();
    // obter tag mat-error e verifca a mensagem
    let inputMessage = document.getElementsByClassName('message')
    let matError = document.getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('A menssagem é obrigatória')


    // definir nome valido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({'massage': 'Bom dia'})
    fixture.autoDetectChanges()

    inputMessage = document.getElementsByClassName('message')
    matError = inputMessage[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);
  });
});
