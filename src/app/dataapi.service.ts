import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  constructor(
    public http: HttpClient,
  ) { }
datadetail:any=[];

  // ฟังก์ชันการเพิ่มที่ส่งไปยัง api
  addproduct(formData: any) {
    console.log("ข้อมูลที่ส่งไปยัง api", formData);
    return this.http.post('http://localhost/api/insert.php', formData);
  }
  editData(dataEdit: any){
    return this.http.post('http://localhost/class2-4/api/update.php', dataEdit);
  }
 //ฟังชั้นดึงข้อมูลมาจาก API
  showproduct(){
    return this.http.get('http://localhost/api/get_products.php');
  }
}
