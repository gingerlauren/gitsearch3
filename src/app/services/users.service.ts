import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private username: string;
  private clientid = "9dc208c0a529c3eeac66";
  private clientsecret = "5cd8fb0a1c1540a878ab8a06b3fd0e65b37e1d2b";
  constructor(private http: HttpClient) {
    console.log("Service is now ready");
    this.username = "Mantongash";
  }

  getUserData() {
    return this.http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "?client_id=" +
          this.clientid +
          "&client_secret=" +
          this.clientsecret
      )
      .pipe(map(res => res));
  }

  getUserRepos() {
    return this.http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "/repos?client_id=" +
          this.clientid +
          "&client_secret=" +
          this.clientsecret
      )
      .pipe(map(res => res));
  }

  updateUser(username: string) {
    this.username = username;
  }
}
