import { Injectable } from '@angular/core';
// importiere http-client
import { HttpClient, HttpHeaders } from '@angular/common/http';


// importiere arrestNFL
import { ArrestNFL } from './arrest_nfl';

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  // CLI verlangt 2-3 Argumente?
};


@Injectable()
export class SubmitService {



    getdataUrl = 'http://nflarrest.com/api/v1/crime';  // URL to web api (GETTING)
    postdataUrl = 'http://nflarrest.com/api/v1/crime';  // URL to web api (POSTING)

  // erschaffe messages als string liste
 // messages: string[] = [];

  constructor(private http: HttpClient) { }

// methode to submit text
sendMessage(message: string) {
console.log("Message-BEFORE: ", message);

// To-Do: Transform message into proper JSON-payload
// var obj = JSON.parse(message);
//
// console.log("Message-AFTER:", obj);


 // Submit JSON-payload via http-POST to predefined endpoint with a given URL
 //return this.http.post(this.postdataUrl);


}


// methode to get criminal records
getCriminalrecord() { // ein
// To-Do: Transform message into proper JSON-payload

 // GET JSON-payload via http-GET from predefined endpoint with a given URL
 // return this.http.get<ArrestNFL>(this.getdataUrl);
 return this.http.get(this.getdataUrl); // Starte HTTPS-Verbindung an URL!!! - NICHT MEHR!!!


//  console.log("Message:",message)
}


}
