import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { RegistrationService } from '../_services/register.service';
//import { AlertService } from '../_services/alert.service';



@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    [x: string]: any;
    form!: FormGroup;
    loading = false;
    submitted = false;
    //alertService: any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private registrationService: RegistrationService,
        //private toastr: ToastrService,
        private router: Router       
       // private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            fname: ['', [Validators.required]],
            dob: ['', [Validators.required]],
            email: ['', [Validators.required]],
            mobileno: ['', [Validators.required]],
            qualification: ['', [Validators.required]],
            address: ['', [Validators.required]],
            city: ['', [Validators.required]],
            state: ['', [Validators.required]],
            zipcode: ['', [Validators.required]] 
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        debugger;
        this.submitted = true;

        // reset alerts on submit
       // this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        //this.userService.register(this.registerForm.value)        
        this.registrationService.postRegistration(this.form.value)
            .pipe(first())
            // const registration_Master = this.form.value;
            // this.registrationService.postRegistration(registration_Master)
            .subscribe({
                next: () => {

                   // this.alertService.success('Registration successful',true);
                   //this.toastr.success('Registration successful');
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: (error: any) => {
                    //this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
    //  PostRegistrationData(registration: registration) {
    //     debugger;
    //     const registration_Master = this.form.value;
    //     this.registrationService.postRegistration(registration_Master).subscribe(
    //       () => {
    //         //this.router.navigateByUrl('/registration');
    //         this.registrationForm.reset();
    //         this.alertService.success('Registration successful',true);
    //         //this.toastr.success('Data Saved Successfully');
    //       }
    //     );
    //   }
}