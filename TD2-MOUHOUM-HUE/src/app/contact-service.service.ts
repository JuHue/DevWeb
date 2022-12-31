import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private isNull: boolean = true;
  public formData = new BehaviorSubject({
    firstName: '',
    lastName: '',
    age: 0,
    showMail: false,
    mail: '',
    comment: ''
  });

  public sharedFormData = this.formData.asObservable();

  isFormDataVisible(): boolean{
    let form = this.formData.value
    return form.firstName === '' && form.lastName === '' && form.age===0 && form.comment === ''; 
  };

  updateFormData(newFormData: { firstName: string; lastName: string; age: number; showMail: boolean; mail: string; comment: string; }){
    this.formData.next(newFormData)
    this.isNull = false
  }

  constructor(
    public formBuilder: FormBuilder) {}
}
