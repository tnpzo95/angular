import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers :[]
})
export class EmployeeComponent implements OnInit {

  public employees = [] ;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.employeeService.GetList().subscribe(data => this.employees = data);
  }
  

}
