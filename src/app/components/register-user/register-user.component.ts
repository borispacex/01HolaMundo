import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit  {

  registroUserForm!: FormGroup;
  
  constructor() { }
  ngOnInit(): void {
    this.registroUserForm = new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmar: new FormControl('', [Validators.required])
    });
  }
  public validateControl (controlName: string) {
    return this.registroUserForm.get(controlName)?.invalid && this.registroUserForm.get(controlName)?.touched;
  }
  public hasError (controlName: string, errorName: string) {
    return this.registroUserForm.get(controlName)?.hasError(errorName);
  }
  
  public registrarUser (registerFormValue: any) {
    const formValues = { ...registerFormValue };
    const user: UsuarioDto = {
      nombres: formValues.nombres,
      apellidos: formValues.apellidos,
      email: formValues.email,
      password: formValues.password,
      confirmarPassword: formValues.confirmar
    };
    console.log(user);
  }
 
}

interface UsuarioDto {
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  confirmarPassword: string;
}