import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 902U4LbUHZ5k7eNXR2pIyvlyQNbM3ofNouw4NgRAhI2rYUdeKoPFrMu6cnze',
    })
  };
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.url_api}/api/users`, this.httpOptions).pipe(
      map((res: any) => {
        return res.data.map(r => {
          return {
            ...r,
            name: `${r.first_name} ${r.last_name}`
          }
        })
      }),
     
    );
  }


}
