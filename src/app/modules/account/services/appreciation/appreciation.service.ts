import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators'
import { IAppreciation } from 'src/app/models/appreciation';

@Injectable({
  providedIn: 'root'
})
export class AppreciationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 902U4LbUHZ5k7eNXR2pIyvlyQNbM3ofNouw4NgRAhI2rYUdeKoPFrMu6cnze',
    })
  };
  constructor(private http: HttpClient) {
  }

  getAppreciations() {
    return this.http.get(`${environment.url_api}/api/user`, this.httpOptions).pipe(
      map((res: any) => {
      
      return res.data.reconocimientos && res.data.reconocimientos.map(r => {

        let reconocimiento: IAppreciation = {
          name: `${r.sent_by.first_name} ${r.sent_by.last_name}`,
          position: r.sent_by.position,
          commet: r.comentarios,
          tags: r.skills.split(','),
          area: r.sent_by.area,
          img: r.image
        }

        return reconocimiento;

      }) || []
    }))
   
  }

  saveAppreciation(appreciation: IAppreciation){
    debugger;
    return this.http.post(`${environment.url_api}/api/reconocimientos`, {
      comments: appreciation.commet,
      sender: !appreciation.anonymous ? 'anonymous': '',
      user_id: appreciation.idUser,
      image: appreciation.img,
      skills: appreciation.tags.join(',')
    },
    this.httpOptions
    )
  }
}
