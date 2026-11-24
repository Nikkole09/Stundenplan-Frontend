// Benötigte Angular-Werkzeuge zum Erstellen und Testen einer Komponente
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Import der Admin-Komponente, die getestet werden soll
import { Admin } from './admin';

// Gruppiert alle Tests der Admin-Komponente
describe('Admin', () => {
  // Ermöglicht den Zugriff auf die Variablen und Funktionen der Komponente
  let component: Admin;
  // Ermöglicht den Zugriff auf die HTML-Oberfläche der Komponente
  let fixture: ComponentFixture<Admin>;

  // Wird vor jedem einzelnen Test ausgeführt (dadurch beginnt jeder Test mit einer neu erstellten Komponente und wird nicht durch vorherige Tests beeinflusst)
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin],
    }).compileComponents();

    // Erstellt die Admin-Komponente für den Test
    fixture = TestBed.createComponent(Admin);
    component = fixture.componentInstance;
    // Wartet, bis Angular die Oberfläche fertig aufgebaut hat
    await fixture.whenStable();
  });


  // ==================== Test 1: Komponente erstellen ====================

  // Prüft, ob die Admin-Komponente erfolgreich erstellt werden kann
  it('sollte die Admin-Komponente erstellen', () => {
    expect(component).toBeTruthy();
  });


  // ==================== Test 2: Standardansicht ====================

  // Prüft, ob beim ersten Aufrufen die Übersicht angezeigt wird
  it('sollte standardmäßig die Übersicht anzeigen', () => {
    // Prüft den gespeicherten Wert in der admin.ts
    expect(component.aktiverBereich()).toBe('uebersicht');
    // Sucht die Hauptüberschrift in der HTML-Oberfläche
    const heading = fixture.nativeElement.querySelector('h1');
    // Prüft, ob die richtige Überschrift angezeigt wird
    expect(heading.textContent).toContain('Admin-Dashboard');
  });


  // ==================== Test 3: Navigationsbuttons ====================

  // Prüft, ob alle fünf vorgesehenen Navigationsbuttons vorhanden sind
  it('sollte fünf Navigationsbuttons anzeigen', () => {
    // Sucht alle Buttons innerhalb der seitlichen Navigation
    const buttons = fixture.nativeElement.querySelectorAll(
      '.admin-navigation button'
    );

    // Vergleicht die Anzahl der gefundenen Buttons mit der erwarteten Anzahl
    expect(buttons.length).toBe(5);
  });


  // ==================== Test 4: Bereich wechseln ====================

  // Prüft, ob beim Anklicken eines Navigationsbuttons der richtige Verwaltungsbereich angezeigt wird
  it('sollte beim Klick auf Kontoanfragen den Bereich wechseln', async () => {
    const buttons = fixture.nativeElement.querySelectorAll(
      '.admin-navigation button'
    );

    // Simuliert einen Klick auf den zweiten Button (Kontoanfragen). Die Nummerierung beginnt bei 0
    buttons[1].click();
    // Wartet, bis Angular die Oberfläche aktualisiert hat
    await fixture.whenStable();

    // Prüft, ob der richtige Bereich gespeichert wurde
    expect(component.aktiverBereich()).toBe('kontoanfragen');

    // Prüft zusätzlich, ob die passende Überschrift angezeigt wird
    const heading = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toContain('Professorenkonto-Anfragen');
  });


  // ==================== Test 5: Aktiver Menüpunkt ====================

  // Prüft, ob der aktuell ausgewählte Menüpunkt die CSS-Klasse "active" erhält und dadurch hervorgehoben wird
  it('sollte den ausgewählten Menüpunkt hervorheben', async () => {
    // Wechselt direkt zum Bereich für Professorenkonten
    component.bereichWechseln('professoren');
    await fixture.whenStable();

    // Sucht den Navigationsbutton mit der Klasse "active"
    const activeButton = fixture.nativeElement.querySelector(
      '.admin-navigation button.active'
    );

    // Prüft, ob der richtige Button hervorgehoben wird
    expect(activeButton.textContent).toContain('Professor:innen');
  });


  // ==================== Test 6: Übersichtskarten ====================

  // Prüft, ob auch über eine Übersichtskarte zum entsprechenden Verwaltungsbereich gewechselt werden kann
  it('sollte über eine Dashboard-Karte den Bereich wechseln', async () => {
    // Sucht alle Übersichtskarten im Dashboard
    const cards = fixture.nativeElement.querySelectorAll(
      '.dashboard-card'
    );

    // Simuliert einen Klick auf die erste Karte (offene Kontoanfragen)
    cards[0].click();
    await fixture.whenStable();

    // Prüft, ob zum Bereich für Kontoanfragen gewechselt wurde
    expect(component.aktiverBereich()).toBe('kontoanfragen');
  });


  // ==================== Test 7: Zurück zur Übersicht ====================

  // Prüft, ob man aus einem anderen Verwaltungsbereich wieder zur ursprünglichen Übersicht zurückkehren kann
  it('sollte zur Übersicht zurückkehren können', async () => {
    // Wechselt zunächst zum Bereich für Studierendenkonten
    component.bereichWechseln('studierende');
    await fixture.whenStable();

    const buttons = fixture.nativeElement.querySelectorAll(
      '.admin-navigation button'
    );

    // Simuliert einen Klick auf den ersten Navigationsbutton (Übersicht)
    buttons[0].click();
    await fixture.whenStable();

    // Prüft, ob die Übersicht wieder als aktiver Bereich gespeichert ist
    expect(component.aktiverBereich()).toBe('uebersicht');

    // Prüft, ob die ursprüngliche Dashboard-Überschrift angezeigt wird
    const heading = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toContain('Admin-Dashboard');
  });
});