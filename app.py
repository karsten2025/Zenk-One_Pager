# app.py
# Dies ist die Hauptdatei für unsere Flask-Webanwendung.
# Sie definiert die Routen und rendert die HTML-Vorlage.

from flask import Flask, render_template

# Initialisieren der Flask-App
app = Flask(__name__)

# Definieren der Hauptroute für die Landingpage
@app.route('/')
def index():
    """
    Diese Funktion wird aufgerufen, wenn ein Benutzer die Haupt-URL (/) besucht.
    Sie rendert die index.html-Datei aus dem 'templates'-Ordner.
    """
    return render_template('index.html')

# Starten der Anwendung, wenn das Skript direkt ausgeführt wird
if __name__ == '__main__':
    # Der Debug-Modus ermöglicht automatische Neustarts bei Code-Änderungen.
    # Für die finale Version (Deployment) sollte debug=False gesetzt werden.
    app.run(debug=True)
