import { Component } from '@angular/core';
import { DataapiService } from './../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage {
  txtname: string = '';
  txtprice: string = '';
  txtdetail: string = '';
  selectedFile: File | null = null;

  constructor(
    private dataapi: DataapiService,
    public route: Router
  ) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  addproduct() {
    const formData = new FormData();
    formData.append('name', this.txtname);
    formData.append('price', this.txtprice);
    formData.append('detail', this.txtdetail);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.dataapi.addproduct(formData).subscribe({
      next: (res: any) => {
        console.log("บันทึกข้อมูลสำเร็จ", res);
        this.txtname = '';
        this.txtprice = '';
        this.txtdetail = '';
        this.selectedFile = null;  // Reset the selected file
        this.route.navigateByUrl('/product')
      },
      error: (err) => {
        console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล", err);
        // Handle HTML response or specific status
        if (err.error instanceof ProgressEvent) {
          console.error("เกิดข้อผิดพลาดของเครือข่าย");
        } else {
          console.error("เกิดข้อผิดพลาดจากเซิร์ฟเวอร์: ", err.error);
        }
      }
    });
  }
}
