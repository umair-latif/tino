var savedNotes = document.getElementById("content");

function getAllData() {
	var keys = Object.keys(localStorage),
	i = keys.length;

	keys.sort();
	keys.reverse();

	while ( i-- ) {
		let card_data =  JSON.parse(localStorage.getItem(keys[i]));
		addCard(keys[i], card_data.text, card_data.cat,card_data.date);
	}
	var newcard = document.getElementById("note_text");
	newcard.focus();
}

function newCard(){
    var noteText = document.getElementById("note_text");
    if(noteText.value === ""){
        alert(getAlertMessage());
        noteText.focus();
        return;
    }
    var memItems = localStorage.length;
    var text = noteText.value;

    let card_nr = GetTimeStamp();
    const date = GetDateStamp();
    const cat="cat"+ getRandomInt(5);
    const obj={text:text, date:date, cat:cat};
    localStorage.setItem(JSON.stringify(card_nr), JSON.stringify(obj));
    addCard(card_nr, text, cat, date);
    noteText.value = "";
   
	location.reload();
	noteText.focus();
    // alert(card_nr + " saved!");
}

function addCard(idnr, usertext, category, date){
	savedNotes = document.getElementById("content");
	var card_nr= idnr;
	const dated=date;

	const div = document.createElement("div");
	div.className = "card " + category;
	div.id = card_nr;

	//---header container------------------------------
	const btn_container = document.createElement("div");
	btn_container.className = "btn_container";

	//-----date--------------------------
	const p_date = document.createElement("p");
	p_date.innerHTML = dated;
	btn_container.appendChild(p_date);

	//--edit-------------------------------
	const edit_btn = document.createElement("a");
	edit_btn.className = "icon_btn edit_btn bi-pencil-square";
	// edit_btn.setAttribute('href', "#");
	edit_btn.setAttribute('name', card_nr);
	edit_btn.setAttribute('title', "Bearbeiten");
	edit_btn.onclick = editCard;

	btn_container.appendChild(edit_btn);
	//---save---------------------------------
	const save_btn = document.createElement("a");
	save_btn.className = "icon_btn save_btn bi-floppy link_inactive";
	save_btn.setAttribute('name', card_nr);
	save_btn.setAttribute('title', "Speichern");
	save_btn.onclick = saveCard;

	btn_container.appendChild(save_btn);
	//---delete--------------------------------
	const del_btn = document.createElement("a");
	del_btn.className = "icon_btn del_btn bi-trash";
	del_btn.setAttribute('name', card_nr);
	del_btn.setAttribute('title', "Löschen");
	del_btn.onclick = deleteCard;

	btn_container.appendChild(del_btn);
	//---text area-----------------------------------
	const textArea = document.createElement("textarea");
	textArea.className = "card_text";
	textArea.setAttribute("disabled", true);
	const node = document.createTextNode(usertext);
	textArea.appendChild(node);

	div.appendChild(btn_container);
	div.appendChild(textArea);

	if(savedNotes){
		savedNotes.insertBefore( div, savedNotes.children[1]);
	}
}

function deleteCard(e){
	savedNotes = document.getElementById("content");
	var elemName = e.target.getAttribute("name");
	var card = document.getElementById(elemName);

	try{
		localStorage.removeItem(elemName);
	}
	catch(err) {
		alert("Error: " + err);
	}
	savedNotes.removeChild(card);
	var newcard_text = document.getElementById("note_text");
	newcard_text.focus();
	//location.reload();
}

function editCard(e){
var elemName = e.target.getAttribute("name");
var card = document.getElementById(elemName);
var textArea = card.querySelector(".card_text");
textArea.removeAttribute("disabled", false);
textArea.focus();
textArea.selectionStart = textArea.value.length;
card.querySelector(".edit_btn").classList.add("link_inactive");
card.querySelector(".save_btn").classList.remove("link_inactive");
}

function saveCard(e){
var elemName = e.target.getAttribute("name");
var card = document.getElementById(elemName);
var textArea = card.querySelector(".card_text");
textArea.setAttribute("disabled", true);
card.querySelector(".save_btn").classList.add("link_inactive");
card.querySelector(".edit_btn").classList.remove("link_inactive");
textArea.focus();
var usertext = textArea.value;
//----save the chnages
let card_data =  JSON.parse(localStorage.getItem(elemName));
const date=GetDateStamp();
const cat=card_data.cat;
const obj={text:usertext, date:date, cat:cat};
try{
	localStorage.removeItem(elemName);
	localStorage.setItem(JSON.stringify(GetTimeStamp()), JSON.stringify(obj));
}
catch(err) {
		alert("Error: " + err);
	}
	location.reload();
	noteText.focus();
}


//+++++++ Random number generator: used for card color ++++++++++
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//++++++++++ Random text for alert box +++++++++++++++++++++++++++
var messages = [];
messages.push("Diese Notiz ist so leer wie dein Kühlschrank am Sonntagmorgen. Füll sie mit Ideen und klicke auf 'Speichern'!");
messages.push("Leere Notiz: Ein Meisterwerk, das nur darauf wartet, vollgeschrieben zu werden.");
messages.push("This note is like a fossil - waiting to be discovered. Fill it with your thoughts and save it for future generations!");
messages.push("This note is a treasure chest waiting to be filled. Save it to keep your thoughts safe.");
messages.push("This note is a time capsule. Fill it with your thoughts and save it for posterity.");
messages.push("This note is as empty as a T-Rex's brain... just kidding! Save it before your brilliant ideas become extinct!");

function getAlertMessage(){
	return messages[Math.floor(Math.random() * 5)];
}


