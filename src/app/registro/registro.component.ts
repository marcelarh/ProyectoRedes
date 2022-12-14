import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    // private toastr: ToastrService,
    private router: Router,
    // private firebaseError: FirebaseCodeErrorService
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassowrd = this.registrarUsuario.value.repetirPassword;

    // console.log(this.registrarUsuario);
    // if (password !== repetirPassowrd) {
    //   this.toastr.error(
    //     'Las contraseñas ingresadas deben ser las mismas',
    //     'Error'
    //   );
    //   return;
    // }

    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // this.verificarCorreo();
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        // this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  }

  // verificarCorreo() {
  //   this.afAuth.currentUser
  //     .then((user) => user?.sendEmailVerification())
  //     .then(() => {
  //       this.toastr.info(
  //         'Le enviamos un correo electronico para su verificacion',
  //         'Verificar correo'
  //       );
  //       this.router.navigate(['/login']);
  //     });
  // }
}
