---
sidebar_position: 9
---

# Letzte Vorbereitungen

## Automatisiert bis zur Auslosung

Es gibt eine Funktion um die Setzung der Spielenden, Turnierbäume und Auslosung in einem Vorgang zu erzeugen.

Über das obere Menü `Auslosung` - `Seed & Make all draws` ist das möglich. Abhängig vom Kriterium Anzahl Meldungen wird festgelegt was genau generiert werden soll.

![btpDrawGenerationDialog](./assets/images/btpDrawGenerationDialog.png 'BTP Turnierbaum Erstellung')

Über den Button `Einstellungen` werden die Kriterien hinterlegt, die für die Generierung notwendig sind.

:::warning

Leider sind nicht alle Turnierbaum Systeme die in der Software zur Verfügung stehen auswählbar. Z.B. KO-RL-Systeme, Ranglistensystem 16/5.

Es lohnt sich evtl. trotzdem erst einmal ein anderes System generieren zu lassen und dies dann im Nachhinein anzupassen.

:::

Einstellungsmöglichkeiten gerade zur Auslosung sind dem Punkt [Auslosung](#auslosen) zu entnehmen.

## Turnierbäume erzeugen

Turnierbäume werden erzeugt über das Seitenmenü `Meldeliste` und Auswahl der jeweiligen Konkurrenz. Nun im oberen Menü `Auslosung` - `Auslosung hinzufügen` benutzen.

![btpEntryListAddDraw](./assets/images/btpEntryListAddDraw.png 'BTP Meldeliste Turnierbaum hinzufügen')

Der öffnende Dialog zeigt die möglichen Systeme die erzeugt werden können.

Häufig genutzte Systeme:

- KO-System
- Gruppensystem
- KO-RL-System
- Ranglistensystem 16/5

Zu den einzelnen Systemen sind in einem weiteren Schritt Einstellungsmöglichkeiten vorhanden.

![btpEntryListAddDrawDialogStepTwo](./assets/images/btpEntryListAddDrawDialogStepTwo.png 'BTP Meldeliste Turnierbaum hinzufügen - Schritt 2')

Die Schritte sind über `Folgende >` weiter zu bestätigen und zum Schluss zu `Beenden`.

:::info

Das Layout setzen kann übersprungen werden, wird am Ende für alle Turnierbäume in einem Vorgang gesetzt ([siehe hier](#layout-setzen)).

:::

### Bearbeiten

Die Einstellungen zu einem Turnierbaum können noch angepasst werden. Über das Seitenmenü `Meldeliste` und Auswahl der jeweiligen Konkurrenz + Auswahl des `Auslosungen` Registers im oberen Bereich, zeigen sich die vorhandenen Turnierbäume der Konkurrenz.

![btpEntryListTabsTopDraw](./assets/images/btpEntryListTabsTopDraw.png 'BTP Meldeliste Turnierbäume')

Doppelklick auf den jeweiligen Eintrag öffnet die Einstellungen.

### Entfernen

Ein erzeugter Turnierbaum kann wieder entfernt werden. Über das Seitenmenü `Meldeliste` und Auswahl der jeweiligen Konkurrenz + Auswahl des `Auslosungen` Registers im oberen Bereich, zeigen sich die vorhandenen Turnierbäume.

![btpEntryListTabsTopDraw](./assets/images/btpEntryListTabsTopDraw.png 'BTP Meldeliste Turnierbäume')

Rechtsklick auf den zu löschenden Turnierbaum öffnet das Kontextmenü. `Auslosung löschen` entfernt den Turnierbaum.

![btpEntryListDrawContextRemove](./assets/images/btpEntryListDrawContextRemove.png 'BTP Meldeliste Turnierbaum entfernen')

:::note

Alle Turnierbäume können in einem Vorgang über das obere Menü `Auslosung` - `Seed & Make all draws` entfernt werden.

![btpDrawGenerationDialogBottom](./assets/images/btpDrawGenerationDialogBottom.png 'BTP Turnierbäume entfernen')

:::

### Layout setzen

Über das obere Menü `Auslosung` - `Layout...` werden für alle Turnierbäume die Infos die auf turnier.de sichtbar sein sollen gesetzt.

![btpDrawDialogLayout](./assets/images/btpDrawDialogLayout.png 'BTP Turnierbaum Layout')

Es sollten wichtige Informationen dargestellt werden wie: Verein, Verband (Region), Ranglistenplatz, Flagge (Nationalität).
:::warning

Leider sind die Punkte nicht darstellbar, um trotzdem die Setzplätze zu erklären, werden die Ranglistenplätze mit veröffentlicht.

:::

## Setzplätze vergeben

Über das obere Menü `Auslosung` - `Automatisch setzen...` werden die Setzplätze anhand der Ranking Punkte vergeben.

![btpDrawDialogSeeding](./assets/images/btpDrawDialogSeeding.png 'BTP Dialog Auslosung Setzung')

**Reihenfolge**: Punkte

Durch Auswahl der Anzahl bei `Setzplatz` werden die Setzplätze vergeben. Die Anzahl ergibt sich aus der Anzahl der Meldungen. Die Hälfte wird gesetzt, wobei abgerundet wird bei einer ungeraden Anzahl.

:::warning

Ungerade Setzplätze sind über diesen Dialog nicht auswählbar. Das kann umgangen werden, durch eine Meldung zu viel setzen und diesen Platz dann durch Doppelklick auf den Namen und die Gruppe (meist Hauptfeld) wieder zu entfernen.

:::

## Auslosen

Es gilt die Meldungen in die Turnierbäume zu losen. Die gesetzten Spielenden werden an ihre jeweilige Position gesetzt und die übrigen werden zugelost.

Über das obere Menü `Auslosung` - `Auslosungen vornehmen` öffnet sich der Dialog um einzelne Auslosungen vorzunehmen.

![btpDrawDialogDrawStepOne](./assets/images/btpDrawDialogDrawStepOne.png 'BTP Dialog Auslosung Schritt Eins')

Die jeweilige Konkurrenz und Gruppe wird ausgewählt (bei nur einer Gruppe muss nichts ausgewählt werden) und über den Button `Folgende >` öffnen sich die Einstellungen zur Auslosung.

![btpDrawDialogDrawStepTwo](./assets/images/btpDrawDialogDrawStepTwo.png 'BTP Dialog Auslosung Schritt Zwei')

**Trennung Regionalebene**: Trennung durch: **Verein** \
**Trennung Landesebene**: Trennung durch: **Verband**

Das stellt sicher, dass in der ersten Runde versucht wird niemanden aus dem gleichen Verein bzw. aus dem gleichen Regionalbereich gegeneinander spielen zu lassen. Gemischte Doppelpaarungen werden dabei nicht berücksichtigt.

**Optimierung:** Nur erste Runde

Das sollte reichen, um die Auslosung korrekt vorzunehmen. Die Auslosung wird vorgenommen durch den Button `Folgende >`.

![btpDrawDialogDrawStepThree](./assets/images/btpDrawDialogDrawStepThree.png 'BTP Dialog Auslosung Schritt Drei')

Gespeichert wird die Auslosung über den Button `Beenden`.

:::note

Die Software ist bekannt dafür gleiche Personen gegeneinander zu losen. Daher empfiehlt es sich im letzten Schritt noch einmal auf `Erneut Auslosen` zu drücken. Dann ist auch optisch zu sehen, das sich etwas in der Auslosung verändert.

:::

:::danger

Bei kleinen Turnierfeldern sollten immer Spielende die nicht anwesend sind aus dem Turnierbaum genommen werden und die Auslosung für diese Konkurrenz ist zu wiederholen.

:::

## Spiele ansetzen

Das ansetzen der Spiele hat den Sinn, Teilnehmenden den groben Ablaufplan bekannt zu geben. Die Reihenfolge erscheint dann auf turnier.de.

Es gibt verschiedenste Möglichkeiten die Ansetzung zu vollziehen.

Eine Möglichkeit besteht über das obere Menü `Auslosung` - `Schedule Per Day`. Hier kann per Drag & Drop der jeweiligen Runden der Spiel Reihenfolge nach rechts gezogen werden.

![btpDrawMatchSchedule](./assets/images/btpDrawMatchSchedule.png 'BTP Spiel Ansetzung')

Die Ansetzung wird dann ausgelöst durch klicken auf den Button `Zeitplanung` und Bestätigen auf `OK`.

:::info

Sollten sich Teilnehmerfelder noch kurzfristig vergrößern, gilt es die dazugekommenen Spiele noch nachträglich anzusetzen.

:::

### Einzelne Runde/Spiele ansetzen

Über das Seitenmenü `Auslosungen` und Auswahl der jeweiligen Konkurrenz kann im Turnierbaum durch Rechtsklick das Kontextmenü geöffnet werden.

![btpDrawMatchContextSchedule](./assets/images/btpDrawMatchContextSchedule.png 'BTP Spiel Ansetzung aus Turnierbaum')

Im öffnenden Dialog Fenster wird das jeweilige Zeitkästchen angeklickt um das Spiel auf die jeweilige Zeit anzusetzen. Mit `OK` Bestätigen.

## Spielnummern vergeben

Über das obere Menü `Auslosung` - `Spielnummerierung...` wird der Spielreihenfolge auch eine aufsteigende Nummer vergeben. Das heißt nicht, dass von dieser Reihenfolge nicht abgewichen werden kann, sollten Spielende noch in ihrer zustehende Pausenzeit zwischen den Spielen sein.

![btpMatchesListNumber](./assets/images/btpMatchesListNumber.png 'BTP Spielliste Nummerierung')
