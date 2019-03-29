import {Injectable} from '@Angular/core'
import {HttpClient} from '@angular/common/http'
import { IEmployee } from '../work-sevices/employee/employee';
import { Observable } from 'rxjs';
@Injectable()
export class EmployeeService{

    private _url:string = "/service/employee.service.js"

    constructor(private http: HttpClient){}
    GetList(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
    }
}