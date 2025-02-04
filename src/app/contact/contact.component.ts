import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted:', this.contact);
    alert('Message sent successfully!');
  }
}

@NgModule({
  declarations: [ContactComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  bootstrap: [ContactComponent]
})
export class ContactModule { }
