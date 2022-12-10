import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Paste from 'src/models/Paste';
import { PasteService } from '../services/paste.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  form: UntypedFormGroup = new UntypedFormGroup({});
  submit_btn_classes = { 'btn': true, 'btn-primary': true, 'mt-2': true, 'disabled': false };
  error = { error: false, message: "" }
  grc_key = "6LeWS8ciAAAAAGjDOhR7rMpcXLfITm6i8a81gV2Y";

  constructor(private ps: PasteService, private fb: UntypedFormBuilder, private router: Router) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      captcha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  grc_resolved(key: string) {
    console.log(key);
    this.form.get('captcha')?.setValue(key);
    console.log(this.form.value);
  }

  savePaste(): void {
    if (this.form.valid) {
      this.submit_btn_classes.disabled = true
      this.ps.post(this.form.value).subscribe(
        {
          next: (v: Paste) => {
            this.router.navigateByUrl(`/uuid/${v.uuid}`, { state: v })
          },
          error: (err: any) => {
            console.error(err);
            this.error.error = true;
            this.error.message = err.error.message;
            this.submit_btn_classes.disabled = false;
          }
        }
      );
    }
  }

}
