import { Component } from '@angular/core';
// importiere service zur Dateneinreichung
import { SubmitService } from './submit.service';
// importiere ClassificationData von export-klasse
import { ArrestNFL } from './arrest_nfl';
// importiere  Liste
// import {ARRESTSNFL} from './arrests_nfl';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // allgemeine variablen
  title = 'app';
  text : string;



    //BESSER - deklariere NEUE property arrestsNFL als Liste der Klasse ArrestNFL[]
    //arrestsNFL: ArrestNFL[];





  // objekterzeugung zur Arbeit mit nflArrest
  arrestNFL : ArrestNFL;


  // Objekterzeugung zur Arbeit mit submitservice
  // Variablename : Typ
  submitService : SubmitService;
            // INJECT service (erschaffe objekt "service")
  constructor(public service: SubmitService) {

  // spiele objekt in submitService in ABhängigkeit von this
  this.submitService= service;
}

  ngOnInit() {  }

// onklick-Methode bei Dateneinreichung
   onSubmit() {
      // start submitsservice und rufe methode zur sendung der Naachricht auf
     //  this.submitService.sendMessage(this.text).subscribe(senddata => {
     //    console.log(senddata);
     // });
   }

// onlick methode zum Abruf von Criminalrecord
   onGetcriminal() {                              // subscribe wartet auf erfolgreiche Datenübertragung, führt dnn funktionen im parametwr weiter aus
     this.submitService.getCriminalrecord().subscribe(data => {
        console.log(data);
         //console.log("arrest_count: " + data.arrest_count);

      //   this.arrestsNFL = data;
     this.arrestNFL = data[0];
     // this.arrestsNFL = data;

     // save JSON in LIST-Object of given class - GOOGLE
     // save list in object



   });
   // Parse daten  JSON.parse

   // mit Punkt-Operator auf metadatanzugreifen ( von template.html aus)
   }


}
