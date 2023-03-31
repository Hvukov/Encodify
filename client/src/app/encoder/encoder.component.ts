import { BackendService } from './../backend.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * The EncoderComponent class represents the Angular component responsible for encoding text input and displaying the encoded output.
 * @class
 */
@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css'],
})
export class EncoderComponent {
  /**
   * The NgForm object representing the encoder form.
   * @type {NgForm}
   */
  @ViewChild('f') encoderForm!: NgForm;

  /**
   * The input text to be encoded.
   * @type {any}
   */
  input: any;

  /**
   * The encoded output text.
   * @type {any}
   */
  output: any;

  /**
   * Creates an instance of EncoderComponent.
   * @param {BackendService} backendService - The backend service to make API calls.
   * @param {Router} router - The router to navigate between components.
   */
  constructor(private backendService: BackendService, private router: Router) {}

  /**
   *Handles form submission and calls the backend service to encode the input text.
   * @return {void}
   */
  onSubmit() {
    console.log('Encoder test submit!', this.encoderForm);
    this.input = this.encoderForm.value.inputText;
    this.backendService.encoder(this.input).subscribe(
      (response) => {
        console.log('Encoded text:', response.encoded);
        this.output = response.encoded;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Logs out the user by removing the token from local storage and navigating to the login page.
   * @return {void}
   */
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
