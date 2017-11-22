import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//variables

    español={
      miidioma:"español",
      esteidioma: ["español"  , "Spanish"  ,   "Espagnol"  ,   "spagnolo"  ,   "スペイン語"  ,   "испанский" ],
      titulo: "Mi pagina",
      texto:"Esta es una pagina para probar el idioma",
      boton:"traducir",
      idiomas:["español", 
        "ingles",
        "frances",
        "italiano",
        "japones",
        "ruso"]
      };

    ingles={
      miidioma:"English",
      esteidioma:["ingles","English","anglais","inglese","英語","английский"],
      titulo: "My page",
      texto: "This is a page to test the language",
      boton: "translate",
      idiomas:["Spanish",
      "English",
      "French",
      "Italian",
      "Japanese",
      "Russian"]
      };

    frances={
      miidioma:"français",
      esteidioma:["frances","French","français","francese","フランス語","французский"],
      titulo: "Ma page",
      texto: "Ceci est une page pour tester la langue",
      boton: "traduire",
      idiomas: ["Espagnol",
      "anglais",
      "français",
      "italien",
      "japonais",
      "russe"]
      };

    italiano=
      {
      miidioma:"italiano",
      esteidioma:["italiano","Italian","italien","italiano","イタリア語","итальянский"],
      titulo: "La mia pagina",
      texto: "Questa è una pagina per testare la lingua",
      boton: "tradurre",
      idiomas: ["spagnolo",
      "inglese",
      "francese",
      "italiano",
      "giapponese",
      "russo"]
      };

    japones={
      miidioma:"日本",
      esteidioma:["japones","Japanese","japonais","giapponese","日本","японский"],
      titulo: "私のページ",
      texto: "これは言語をテストするページです",
      boton: "翻訳する",
      idiomas: ["スペイン語",
      "英語",
      "フランス語",
      "イタリア語",
      "日本",
      "ロシア語"]
      };

    ruso={
      miidioma:"русский",
      esteidioma:["ruso","Russian","russe","russo","ロシア語","русский"],  
      titulo: "Моя страница",
      texto: "Это страница для проверки языка",
      boton: "переводить",
      idiomas: ["испанский",
      "английский",
      "французский",
      "итальянский",
      "японский",
      "русский"]
    };

  titulo="mi pag";
  texto= "hola mundo";
  boton = "traduce";
  misidiomas;
  comboidioma=this.español.idiomas;
  idi=this.comboidioma[0];
  
  
  constructor(public navCtrl: NavController) {
    this.misidiomas=[this.español,this.ingles,this.italiano,this.frances,this.ruso,this.japones];
      
      
  }

  miboton()
  {
      alert(this.idi);
  }

  evento(){

    this.misidiomas.forEach(element => {
      
      console.info(this.idi);
      //console.info(element['esteidioma']);
      element['esteidioma'].forEach(element2 => {
         
        if(this.idi == element2){
          console.info("idioma: "+ element2);
          console.info(element);
          this.titulo=element['titulo'];
          this.texto=element['texto'];
          this.boton =element['boton'];
          this.comboidioma= element['idiomas'];
          this.idi=element['miidioma'];;
        }
        
      });
            });
  
  }
}