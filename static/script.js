// static/script.js

// Funktion zum Umschalten der Tabs (Zertifikate/Zeugnisse)
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Alle Tab-Inhalte ausblenden
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Die 'active'-Klasse von allen Tab-Buttons entfernen
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Den aktuellen Tab anzeigen und den Button als 'active' markieren
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Standardmäßig den ersten Tab öffnen
document.getElementById("defaultOpen").click();


// Funktion für das Akkordeon
function initializeAccordion() {
    let acc = document.getElementsByClassName("accordion");
    let j;

    for (j = 0; j < acc.length; j++) {
        // Event Listener nur hinzufügen, wenn noch keiner existiert
        if (!acc[j].classList.contains('listener-added')) {
            acc[j].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
            acc[j].classList.add('listener-added');
        }
    }
}

// Akkordeon initialisieren, wenn die Seite lädt
initializeAccordion();


// Passwort für Zeugnisse prüfen
function checkPassword() {
    const correctPassword = "Salzgitter2025"; // Das korrekte Passwort
    const enteredPassword = document.getElementById("zeugnis-password").value;
    const errorElement = document.getElementById("password-error");

    // Debugging-Hilfe: Gibt das eingegebene Passwort in der Browser-Konsole aus
    console.log("Eingegebenes Passwort:", enteredPassword);

    if (enteredPassword === correctPassword) {
        // Passwort korrekt: Formular ausblenden, Inhalt einblenden
        document.getElementById("zeugnisse-prompt").style.display = "none";
        document.getElementById("zeugnisse-content").style.display = "block";
        errorElement.textContent = "";
        
        // Wichtig: Das Akkordeon für den neuen Inhalt neu initialisieren
        initializeAccordion();

    } else {
        // Passwort falsch: Fehlermeldung anzeigen
        errorElement.textContent = "Falsches Passwort. Bitte versuchen Sie es erneut.";
    }
}

// Event Listener hinzufügen, um auf die "Enter"-Taste im Passwortfeld zu reagieren
document.getElementById("zeugnis-password").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // Klickt den "Freischalten"-Button, wenn Enter gedrückt wird
        document.querySelector(".password-form .btn").click();
    }
});
