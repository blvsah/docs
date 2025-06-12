---
sidebar_position: 10
---

# Turnier Durchführung

## Spielaufruf

Die Spiele zum aufrufen sind in der Auflistung unter Seitenmenü `Spiele` zu finden. Im unteren Bereich sind drei Register um die verschiedenen Kategorien der Spiele einzusehen.

* Angesetzt
* Nicht angesetzt
* Beendete Spiele

![btpMatchesTabs](./assets/images/btpMatchesTabs.png 'BTP Spielübersicht Register')

Der Spielaufruf geschieht per **Drag & Drop** des Spieles aus der Liste auf die Feldübersicht.

![btpMatchesCourts](./assets/images/btpMatchesCourts.png 'BTP Feldübersicht')

### Liste

![btpMatchesList](./assets/images/btpMatchesList.png 'BTP Spielübersicht')

Auf der Spielübersicht sind mehrere Dinge ablesbar:

**Gelbes Quadrat**: Spielende sind aufgerufen/auf dem Feld \
**Rotes Quadrat**: Spielende bereit \
**Uhr Kreis**: Spielende sind in ihrer Erholungspause (mit Anzeige der groben Minuten)

Die rote Linie unter dem Namen gibt an, ob Gelder bezahlt wurden. Ist für den Turnierverlauf daher nicht relevant.

:::note

Die Personen die zur Bedienung der Spielstandsanzeige berufen sind, können leider nicht in der Software hinterlegt werden.

:::

### Spielzettel drucken

Ein Schiedsrichterzettel ist über mehrere Wege druckbar. In der Spielübersicht rechtsklick auf das Spiel und im Kontextmenü `Schiedsrichterzettel` auswählen.

![btpMatchListContext](./assets/images/btpMatchListContext.png 'BTP Spielübersicht Kontextmenü')

In der Regel reicht es aber kleinere Zettel zu drucken.

Über das oberen Menü `Bericht` - `Spiele` - `Spielformular` oder `Spielkarten` sind Spielzettel mit 7 bzw. 8 Spielen pro Blatt druckbar. Diese Zettel können pro angesetzter Zeitrunde gedruckt werden.

:::note

In den kleineren Varianten sind leider auch Spiele enthalten bei denen die Paarung noch nicht feststeht.

:::

### Hinweis

:::tip

Spielaufruf und Ergebnisrückführung in die Turniersoftware sind automatisierbar. Mit technischem Know-How und Bildschirmen/Tablets ist eine Software dafür auf Github verfügbar: https://github.com/tlehr/bts

:::

## Ergebniseingabe

Das Fenster für das Spielergebnis kann über mehrere Wege geöffnet werden.

* Feldübersicht: Über das Seitenmenü `Spiele` ist im oberen Bereich eine Feldübersicht.
* Spielübersicht: Über das Seitenmenü `Spiele` sind Listen aller Spiele zu sehen.
* Turnierbaum: Über das Seitenmenü `Auslosungen` und Auswahl der jeweiligen Konkurrenz.

![btpMatchesCourtsMatch](./assets/images/btpMatchesCourtsMatch.png 'BTP Feldübersicht Spiel')
![btpMatchListMatch](./assets/images/btpMatchListMatch.png 'BTP Spielübersicht Spiel')
![btpDrawMatch](./assets/images/btpDrawMatch.png 'BTP Turnierbaum Spiel')

Per Doppelklick öffnen sich die Spielinformationen.

![btpMatchResultDialog](./assets/images/btpMatchResultDialog.png 'BTP Spielinformationen')

Im Ergebnisfeld kann mittels der Pfeiltasten auf der Tastatur navigiert werden, um die Zahlen einzugeben.

:::tip

Die kleinere Zahl von einem Satzergebnis zuerst eingeben. Der größere Punktestand wird dann automatisch ergänzt.

:::

### Status "Walkover"

Es muss kein Ergebnis eingegeben werden. Status wird auf Walkover gesetzt und der Gewinner wird manuell ausgewählt. Wird benutzt, wenn eine Partei nicht bei einem Spiel antritt.

:::note

Spielende die vergessen wurden aus der Auslosung zu nehmen, müssen als Ergebnis ein Walkover bekommen. Dadurch wird sichergestellt, dass die Rankingpunkte korrekt mit 0 vergeben werden.

:::

### Status "retired"

Wird benutzt für aufgegebene Spiele. Das Ergebnis wird bis zur Aufgabe eingegeben und der Gewinner wird manuell ausgewählt.

### Status "Kein Spiel"

Kein Spiel kann benutzt werden, wenn ein angesetztes Spiel doch nicht mehr ausgetragen wird (z. B. haben alle Beteiligte vor dem Spiel aufgegeben). Es ist kein Ergebnis einzutragen.

### Ergebnisse von zweitem Rechner eingeben

Es besteht die Möglichkeit von einem zweiten Rechner Ergebnisse einzugeben. Dafür den `Tournament Planner Network` herunterladen. Er ist auf der gleichen Seite wie die Hauptsoftware zu finden ([siehe hier](./installation#download-der-software)). Der Client ist nur in Englischer Sprache verfügbar.

#### Einrichtung

In der Hauptsoftware wird über das obere Menü `Extras` - `Tournament Planner Network` ein Passwort gesetzt und die Funktion aktiviert.

![btpExtrasPlanerNetwork](./assets/images/btpExtrasPlanerNetwork.png 'BTP Einstellungen Planer Network')

Im Client wird über der Spiele Liste über den `Login` Button die Verbindung hergestellt. Ip Adresse des Rechners der Hauptsoftware eingeben und das Passwort setzen, welches in der Hauptsoftware eingegeben wurde.

![btpNetworkConnect](./assets/images/btpNetworkConnect.png 'BTP Network Verbindungseinstellungen')

:::note

Evtl. Firewall Einstellungen beider Rechner beachten, dass die Kommunikation der Programme nicht geblockt wird.

:::

## Bye im Raster weiterschieben

Es kann vorkommen, dass Paarungen nicht korrekt in der Software abgebildet werden. Das liegt gerne daran, dass unbesetzte Positionen (Bye) in einem Turnierbaum nicht richtig weiterverarbeitet werden.

Fallen solche Fälle auf, kann oft mit einem manuellen weiterschieben der Bye Position das ganze behoben werden.

Den jeweiligen Turnierbaum (über Seitenmenü `Auslosungen` - die Konkurrenz wie z. B. `ME U13` auswählen) öffnen und mit rechtsklick auf das jeweiligen Spiel im öffnenden Kontextmenü den Punkt `Byes weiterschieben` auswählen.

![btpDrawMatchContextMoveBye](./assets/images/btpDrawMatchContextMoveBye.png 'BTP Kontextmenü Auslosung Byes weiterschieben')
