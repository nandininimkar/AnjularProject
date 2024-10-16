import { Component } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  constructor (private crud: CrudService) { }

  studentData : any

  fetchData() {
    this.crud.getData().subscribe((stu)=>{
      this.studentData = stu
    })
  }

  ngOnInit(){
    this.fetchData()
  }

  deleteRecord(id : number) {
    if(confirm('Are you sure ?')){
     
      this.crud.deleteStudent(id).subscribe(()=> this.studentData = this.studentData.filter((s:any)=>s.id !== id))
    }
    
  }
}
