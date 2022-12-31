import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  data !: {}

  constructor(public contactData: ContactServiceService ) {
    this.data = this.contactData.formData.value
  }

  ngOnInit(): void {
    console.log(this.contactData.sharedFormData)
    console.log(this.contactData.isFormDataVisible())
  }


}
