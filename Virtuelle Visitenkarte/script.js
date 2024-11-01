// script.js
// editCard-Funktion: Wird durch den Button aufgerufen, um die Bearbeitung der Informationen zu ermöglichen.
function editCard() {
    const name = document.getElementById("name");
    const title = document.getElementById("title");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

// Erstellen von Eingabefeldern für jedes Element
// Zeigt Eingabefenster an, in die der Nutzer neue Werte für Name, Jobtitel, E-Mail und Telefon eingeben kann.
// textContent: Ändert den Inhalt der HTML-Elemente, um die Eingaben des Nutzers anzuzeigen.
const newName = prompt("Neuer Name:", name.textContent);
const newTitle = prompt("Neuer Jobtitel:", title.textContent);
const newEmail = prompt("Neue E-Mail-Adresse:", email.textContent);
const newPhone = prompt("Neue Telefonnummer", phone.textContent);

// Aktualisieren der HTML-Inhalte mit den neuen Werten
if (newName) name.textContent = newName;
if (newTitle) title.textContent = newTitle;
if (newEmail) email.textContent = newEmail;
if (newPhone) phone.textContent = newPhone;
}
