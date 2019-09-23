import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IFeedback } from 'src/app/models/feedback';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 902U4LbUHZ5k7eNXR2pIyvlyQNbM3ofNouw4NgRAhI2rYUdeKoPFrMu6cnze',
    })
  };

  constructor(private http: HttpClient) { }

  getFeedbacks() {
    // return this.http.get(`${environment.url_api}/api/user`, this.httpOptions).pipe(
    //   map((res: any) => {
      
    //   return res.data.feedbacks && res.data.feedbacks.map(r => {

    //     let reconocimiento: IFeedback = {
    //       name: `${r.sent_by.first_name} ${r.sent_by.last_name}`,
    //       position: r.sent_by.position,
    //       comments: r.comentarios,
    //       area: r.sent_by.area || '',
          
    //     }

    //     return reconocimiento;

    //   }) || []
    // }))
   
  }

  sendFeedback(feedback: IFeedback){
    return this.http.post(`${environment.url_api}/api/api/feedbacks`, {feedback}, this.httpOptions).pipe(
      map((res: any) => {
        return {point : res.data && res.data.sent_by.points || 0}
      })
    );
  }
}
