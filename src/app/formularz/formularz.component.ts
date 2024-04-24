import { Component, EventEmitter, Output, inject } from '@angular/core';
import { StudentRequestDTO } from '../models/request.interface';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrl: './formularz.component.css'
})
export class FormularzComponent {
  @Output() submit = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  public object: StudentRequestDTO = {
    albumNo: null,
    groupId: null,
    name: null,
    surname: null
  };

  private readonly api = inject(StudentsService);

  public onSubmit(event: any): void {
    console.log('event: ', event);
    console.log('object: ', this.object);

    this.api.post(this.object).subscribe({
      next: () => {
        console.log('dodano studenta');
        this.submit.emit();
      },
      error: (err) => console.error(err) 
    })
  }
}
