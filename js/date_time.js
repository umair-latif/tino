// JavaScript Document Bibliothek
	
/* Funktion für das Anzeigen der Zeit*/
			
function ZeitAnzeigen(lang) { 
				
				var Wochentagname = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch","Donnerstag", "Freitag", "Samstag");
	
				var Jetzt = new Date();
					
				var Tag = Jetzt.getDate();
				var Monat = Jetzt.getMonth() + 1;
				var Jahr = Jetzt.getFullYear();

				var Stunden = Jetzt.getHours();
				var Minuten = Jetzt.getMinutes();
				var Sekunden = Jetzt.getSeconds();
				var WoTag = Jetzt.getDay();
				
				var Vortag = (Tag < 10) ? "0" : "";
				var Vormon = (Monat < 10) ? "0" : "";
				var Vorstd = (Stunden < 10) ? "0" : "";
				var Vormin = (Minuten < 10) ? "0" : "";
				var Vorsek = (Sekunden < 10) ? "0" : "";
				
				var Datum = Vortag +Tag +"." +Vormon +Monat +"." +Jahr;
				var Uhrzeit = Vorstd +Stunden +":" + Vormin +Minuten +":" +Vorsek +Sekunden;
				
				var Gesamt = Wochentagname[WoTag] + ", der " +Datum + ", es ist: " +Uhrzeit;
				
				var din5008 = Jahr +"-" +Vormon +Monat +"-" +Vortag +Tag;
        var germanDate = Vortag +Tag +"."+Vormon +Monat +"."+ Jahr;
				var snow_zeit = din5008 +" | " +Vorstd +Stunden +":" +Vormin +Minuten;
				var wochentag = Wochentagname[WoTag];
        var germanDat_Time = wochentag + ", " +germanDate +" | " +Vorstd +Stunden +":" +Vormin +Minuten;

         if(lang === "de"){
          setContent("id", "dat_uhr", null, germanDat_Time);
         } else {      
				  setContent("id", "dat_uhr", null, snow_zeit);}
				
				 /* Die Funktion setContent tauscht einen vorhandenen Inhalt mit dem Inhalt einer Variablen!
				Achtung!! es muss ein Inhalt (mind. 1 Zeichen) vorhanden sein*/
					
				window.setTimeout("ZeitAnzeigen('de')", 1000); 
			
				 /* Rekursiver Aufruf - Die Funktion lädt sich selbst alle 1000Milisekunden dadurch wird der Eindruck einer Laufenden Uhr erreicht!*/
			}

            function GetDateStamp(){
                var Wochentagname = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch","Donnerstag", "Freitag", "Samstag");
                
                var Jetzt = new Date();
				var Tag = Jetzt.getDate();
				var Monat = Jetzt.getMonth() + 1;
				var Jahr = Jetzt.getFullYear();

				var Stunden = Jetzt.getHours();
				var Minuten = Jetzt.getMinutes();
				var Sekunden = Jetzt.getSeconds();
				var WoTag = Jetzt.getDay();
				
				var Vortag = (Tag < 10) ? "0" : "";
				var Vormon = (Monat < 10) ? "0" : "";
				var Vorstd = (Stunden < 10) ? "0" : "";
				var Vormin = (Minuten < 10) ? "0" : "";
				var Vorsek = (Sekunden < 10) ? "0" : "";

                var Datum = Vortag +Tag +"." +Vormon +Monat +"." +Jahr;
				// var Uhrzeit = Vorstd +Stunden +":" + Vormin +Minuten +":" +Vorsek +Sekunden;

                return(Datum);
            }

            function GetTimeStamp(){
                var Jetzt = new Date();
					
				var Tag = Jetzt.getDate();
				var Monat = Jetzt.getMonth() + 1;
				var Jahr = Jetzt.getFullYear();

				var Stunden = Jetzt.getHours();
				var Minuten = Jetzt.getMinutes();
				var Sekunden = Jetzt.getSeconds();

                var Vortag = (Tag < 10) ? "0" : "";
				var Vormon = (Monat < 10) ? "0" : "";
				var Vorstd = (Stunden < 10) ? "0" : "";
				var Vormin = (Minuten < 10) ? "0" : "";
				var Vorsek = (Sekunden < 10) ? "0" : "";

                var timestamp = Jahr + Vormon + Monat + Vortag +Tag + Vorstd + Stunden +Vormin + Minuten + Vorsek + Sekunden;
				return(timestamp);
            }
/* --------------------------------------------- DHTML-Bibliothek ----------------------------------- */

var DHTML = false, DOM = false, MSIE4 = false, NS4 = false, OP = false;

if (document.getElementById) {
  DHTML = true;
  DOM = true;
} else {
  if (document.all) {
    DHTML = true;
    MSIE4 = true;
  } else {
    if (document.layers) {
      DHTML = true;
      NS4 = true;
    }
  }
}
if (window.opera) {
  OP = true;
}

function getElement (Mode, Identifier, ElementNumber) {
  var Element, ElementList;
  if (DOM) {
    if (Mode.toLowerCase() == "id") {
      Element = document.getElementById(Identifier);
      if (!Element) {
        Element = false;
      }
      return Element;
    }
    if (Mode.toLowerCase() == "name") {
      ElementList = document.getElementsByName(Identifier);
      Element = ElementList[ElementNumber];
      if (!Element) {
        Element = false;
      }
      return Element;
    }
    if (Mode.toLowerCase() == "tagname") {
      ElementList = document.getElementsByTagName(Identifier);
      Element = ElementList[ElementNumber];
      if (!Element) {
        Element = false;
      }
      return Element;
    }
    return false;
  }
  if (MSIE4) {
    if (Mode.toLowerCase() == "id" || Mode.toLowerCase() == "name") {
      Element = document.all(Identifier);
      if (!Element) {
        Element = false;
      }
      return Element;
    }
    if (Mode.toLowerCase() == "tagname") {
      ElementList = document.all.tags(Identifier);
      Element = ElementList[ElementNumber];
      if (!Element) {
        Element = false;
      }
      return Element;
    }
    return false;
  }
  if (NS4) {
    if (Mode.toLowerCase() == "id" || Mode.toLowerCase() == "name") {
      Element = document[Identifier];
      if (!Element) {
        Element = document.anchors[Identifier];
      }
      if (!Element) {
        Element = false;
      }
      return Element;
    }
    if (Mode.toLowerCase() == "layerindex") {
      Element = document.layers[Identifier];
      if (!Element) {
        Element = false;
      }
      return Element;
    }
    return false;
  }
  return false;
}

function getAttribute (Mode, Identifier, ElementNumber, AttributeName) {
  var Attribute;
  var Element = getElement(Mode, Identifier, ElementNumber);
  if (!Element) {
    return false;
  }
  if (DOM || MSIE4) {
    Attribute = Element.getAttribute(AttributeName);
    return Attribute;
  }
  if (NS4) {
    Attribute = Element[AttributeName]
    if (!Attribute) {
       Attribute = false;
    }
    return Attribute;
  }
  return false;
}

function getContent (Mode, Identifier, ElementNumber) {
  var Content;
  var Element = getElement(Mode, Identifier, ElementNumber);
  if (!Element) {
    return false;
  }
  if (DOM && Element.firstChild) {
    if (Element.firstChild.nodeType == 3) {
      Content = Element.firstChild.nodeValue;
    } else {
      Content = "";
    }
    return Content;
  }
  if (MSIE4) {
    Content = Element.innerText;
    return Content;
  }
  return false;
}

function setContent (Mode, Identifier, ElementNumber, Text) {
  var Element = getElement(Mode, Identifier, ElementNumber);
  if (!Element) {
    return false;
  }
  if (DOM && Element.firstChild) {
    Element.firstChild.nodeValue = Text;
    return true;
  }
  if (MSIE4) {
    Element.innerText = Text;
    return true;
  }
  if (NS4) {
    Element.document.open();
    Element.document.write(Text);
    Element.document.close();
    return true;
  }
}