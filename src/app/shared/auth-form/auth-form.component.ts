import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements OnInit {
  @Input() title: string = ""
  @Input() submit: string = ""
  form: FormGroup
  alertform: boolean = false
  loading: boolean = false
  errorMSG: any = ""
  submitFunc: any = {
    "login": () => this.login(),
    "register": () => this.register()
  }


  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private ngZone:NgZone,
    private router: Router,
  ) { 
    this.form = fb.group({})
  }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm():FormGroup{
    var form:any = this.fb.group({
      email: ['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['',Validators.compose([
        Validators.required
      ])],
    })
    return form
  }

  login(){
    this.loading = true
    const {email,password} = this.form.value
    this.authService.SignIn(email, password)  
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
      this.authService.SetUserData(result.user);
      this.loading = false
    }).catch(({code}) => {
      this.alertform = true
      this.errorMSG = this.authService.errors[code] ? this.authService.errors[code] : "Hubo un error inesperado. Intentelo de nuevo más tarde"
      this.loading = false
    })
  }

  register(){
    this.loading = true
    
    const {email,password} = this.form.value
    this.authService.SignUp(email, password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['taskIn']);
      });
      this.authService.SetUserData(result.user)
      this.loading = false
    }).catch(({code}) => {
    this.alertform = true
    this.errorMSG = this.authService.errors[code] ? this.authService.errors[code] : "Hubo un error inesperado. Intentelo de nuevo más tarde"
    this.loading = false
  })  

  }

  redirect(route:string){
    this.router.navigate([route])
  }

}
