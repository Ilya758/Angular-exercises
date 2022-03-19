import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
EventEmitter;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  isFormInvalid = false;
  namePattern = /^[a-z]{3,}$/i;
  passwordPattern = /^[a-z0-9]{4,}$/i;

  user: FormGroup;

  aliases: FormArray;

  constructor(fb: FormBuilder) {
    this.user = fb.group({
      name: ['', [Validators.pattern(this.namePattern)]],
      password: ['', Validators.pattern(this.passwordPattern)],
    });
    this.aliases = fb.array([fb.control('')]);
  }

  get name() {
    return this.user.get('name');
  }

  get password() {
    return this.user.get('password');
  }

  ngOnInit(): void {
    // this.user.statusChanges.subscribe((v) => console.log(v));
  }

  submit(f: FormGroup) {
    console.log(f);
    this.isFormInvalid = true;

    if (f.invalid) {
      console.log('form isnt correct');

      setTimeout(() => {
        this.isFormInvalid = false;
      }, 1000);
      return;
    }

    this.isFormInvalid = false;

    console.log('form has been submitted');
    console.log(`user-data is ${JSON.stringify(f.value)}`);
    this.user.reset();
  }
}
