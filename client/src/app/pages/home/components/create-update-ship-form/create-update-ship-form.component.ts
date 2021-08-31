import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateShipPayload, UpdateShipPayload } from '../../home.service';

@Component({
  selector: 'create-update-ship-form',
  styleUrls: ['./create-update-ship-form.component.scss'],
  templateUrl: './create-update-ship-form.component.html',
})
export class CreateUpdateShipForm {
  @Output() formIsReadyToSubmit = new EventEmitter<any>();

  @Input() initialFormData!: UpdateShipPayload | CreateShipPayload;

  formGroup: any;
  formData: any;

  ngOnInit() {
    this.initFormData();
    this.formData = {
      name: {
        errors: {
          required: 'Name is required',
        },
        placeholder: 'Ship Name*',
      },

      code: {
        errors: {
          required: 'Code is required',
          pattern:
            'Code pattern must match /[A-Z]{4}-[0-9]{4}-[A-Z]{1}[0-9]{1}/',
        },
        placeholder: 'Code*',
      },
      width: {
        errors: {
          required: 'Width is required',
          pattern: 'Width must be a positive number',
        },
        placeholder: 'Width*',
      },
      length: {
        errors: {
          required: 'Length is required',
          pattern: 'Length must be a positive number',
        },
        placeholder: 'Length*',
      },
    };
  }

  initFormData() {
    if (!this.initialFormData) {
      this.initialFormData = {
        name: '',
        code: '',
        width: '' as unknown as number,
        length: '' as unknown as number,
      };
    }
    this.formGroup = new FormGroup({
      name: new FormControl(this.initialFormData.name, [Validators.required]),
      width: new FormControl(this.initialFormData.width, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      length: new FormControl(this.initialFormData.length, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      code: new FormControl(this.initialFormData.code, [
        Validators.required,
        Validators.pattern(/[A-Z]{4}-[0-9]{4}-[A-Z]{1}[0-9]{1}/),
      ]),
    });
  }

  ngOnChanges() {
    this.initFormData();
  }

  shouldValidateField(fieldName: unknown | string) {
    return (
      this.formGroup.get(fieldName).invalid &&
      (this.formGroup.get(fieldName).dirty ||
        this.formGroup.get(fieldName).touched)
    );
  }

  getFieldErrorTrigger(fieldName: unknown | string, trigger: unknown | string) {
    return this.formGroup.get(fieldName).errors[trigger as string];
  }

  getFieldErrors(fieldName: unknown | string) {
    return this.formData[fieldName as string].errors;
  }

  submitForm(data: any) {
    if (this.formGroup.status === 'VALID') {
      this.formIsReadyToSubmit.emit(this.formGroup.value);
    }
  }
}
