import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentResponseDTo } from '../models/student.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  public data: StudentResponseDTo[] = [];
  public page: number = 0;
  public count: number = 10;
  public isTableView: boolean = true;
  public choosedStudent?: StudentResponseDTo = undefined;

  constructor(private studentsService: StudentsService) {
    this.getData();
  }

  private getData(): void {
    this.studentsService.get({ count: this.count, page: this.page }).subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    });
  }

  public onPaginationSubmit(): void {
    this.getData();
  }

  public onDataStyleChange(): void {
    this.isTableView = !this.isTableView;
  }

  public onChoosedRow(event: StudentResponseDTo): void {
    this.choosedStudent = event;
  }

  public onSubmit(): void {
    this.choosedStudent = undefined;
    this.getData();
  }
}
