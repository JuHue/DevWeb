import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  form!: FormGroup

  constructor(
    private ContactServiceService: ContactServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {
}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.pattern('[a-zA-Z-]+')]),
      lastName: this.fb.control('', [Validators.required, Validators.pattern('[a-zA-Z-]+')]),
      age: this.fb.control('', [Validators.required, Validators.pattern('[0-9]+')]),
      showMail: this.fb.control(false),
      mail: this.fb.control(''),
      comment: this.fb.control('',  Validators.required)
    })
  }

  ngAfterViewInit(): void {
    this.form.get('showMail')?.valueChanges.subscribe(checked =>{
      if (checked){
        this.form.get("mail")?.setValidators([Validators.required, Validators.email])
      } else {
        this.form.get("mail")?.clearValidators()
        this.form.get("mail")?.setValue('')
      }
    })
    this.form.get("mail")?.updateValueAndValidity()
  }

  onSubmit(){
      this.ContactServiceService.updateFormData(this.form.value)
      this.router.navigate([''])
      console.log("success")
  }

}
