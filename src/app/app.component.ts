import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'File Upload to GCS Bucket';
  tableData:any;
  res:any;

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get<any>('https://asia-south1-appsheettrial-321109.cloudfunctions.net/AngularGCP').subscribe(
      response => {
        console.log(response);
        console.log("Type :", typeof response);
        this.tableData = JSON.stringify(response);
        this.res = JSON.stringify(response.SNO['0']);
        // console.log("Type :", response.data.CONFIDENCE);
      }
    );
  }
}
