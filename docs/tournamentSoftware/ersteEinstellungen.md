---
sidebar_position: 4
---

# Erste Einstellungen

In den Turniereigenschaften werden Einstellungen für das Turnier vorgenommen. Direkt nach dem Erstellen neuer Turniere wird das Fenster angezeigt, nachträglich ist es über das obere Menü `Turnier` - `Eigenschaften` zu öffnen.

## Info Tab

Auf dem Info Tab werden erste Angaben zum Turnier gemacht.

![btpSettingsDialog](./assets/images/btpSettingsDialog.png 'BTP Turniereigenschaften Info')

### Turniername

Turnierart\_Bundesland[-Region]_disziplin_altersstufen

||Beispiel|
|---|---|
|**Turnierart**|Landesrangliste, Regionalmeisterschaft etc.|
|**Bundesland**|SAH|
|**Region** (bei Regionsturnieren)|-Dessau, -Halle, -Magdeburg|
|**Disziplin**|Einzel, Doppel, Mixed|
|**Altersstufe**|U11, U13/U15, U17/U19, O19|
|**Type**|(DBV-C, DBV-D)|
|**Jahr**|Jahr: 2026|

**Beispiel:** Landesrangliste SAH Einzel, Doppel U11, U17, U19 (DBV-C) 2026 \
**Beispiel:** Regionalmeisterschaft SAH-Dessau Einzel, Doppel, Mixed U11-U19 (DBV-D) 2026

### Turniertyp

Der Turniertyp setzt sich aus der Ebene, der größen Kategorisierung und dem Turniertyp zusammen. Sachsen-Anhalt ist momentan als nicht großer Landesverband (2) vom DBV eingeordnet.

||Beispiel|
|---|---|
|**Ebene**|C (Landesebene), D (Regionsebene)|
|**Größe**|2 (nicht groß)|
|**Typ**| RLT (Rangliste), LM/BM (Meisterschaft, je nach Ebene)|

### Turnierverantwortlicher

Das Feld eignet sich um auf den Ausrichterverein hinzuweisen.

### Weitere Felder

Um Infos an den Ausrichter zu geben (z. B. kurze Verspätung vor der Auslosung), sollte eine Telefonnummer und eine E-Mailadresse eingegeben werden.

:::info

Die notwendigsten Infos sollten angegeben werden. Keine Angaben zweimal eingeben! Einmal eine Telefonnummer angeben reicht.

:::

## Adresse Tab

Der Adress Tab wird die Adresse der Sporthalle angegeben.

![btpSettingsDialogAddress](./assets/images/btpSettingsDialogAddress.png 'BTP Turniereigenschaften Adresse')

:::tip

Es ist nicht notwendig hier nochmal irgendwelche Telefonnummern zu wiederholen. Es ist ok, dass Felder leer bleiben.

:::

## Konkurrenzen Tab

Unter Konkurrenzen werden die Klassen verstanden, die bei dem Turnier gespielt werden.

![btpSettingsDialogEvents](./assets/images/btpSettingsDialogEvents.png 'BTP Turniereigenschaften Konkurrenz')

Über den Button `Auswählen` sind Presets vorhanden die zum erstellen der Klassen benutzt werden können.

:::tip

Bitte gebt immer die komplette Bezeichnung der Konkurrenz an. Wir legen z. B. oft U17 und U19 zusammen, dann wird die Klasse mit **JE U17/U19** bezeichnet. Es sollen halt nicht nur die "Systemkenner" Bescheid wissen.

:::

### Meldegebühr

Bei den Klassen wird die Meldegebühr mit angegeben und zwar pro Person.


:::info

Wenn bei einem Doppel z. B. 10,00 € pro Person bezahlt werden, dann wird in das Feld 10,00 € eingetragen.

:::

## Tage Tab

Es werden die Tage angegeben, an denen das Turnier jeweils stattfindet.

## Zeiten Tab

![btpSettingsDialogTimes](./assets/images/btpSettingsDialogTimes.png 'BTP Turniereigenschaften Zeiten')

Im Zeiten Tab werden Rundenzeiten angelegt, auf die später die Spiele angesetzt werden können.

Über den Button `Alle Tage` können für alle Tage die Zeiten generiert werden.

Unter Angabe von Start, Intervall, Stop und max. Times werden die Zeiten erzeugt.

25 Minuten Intervalle sind ein guter Einstieg.

:::note

Ersteinmal viele Zeiten anlegen, müssen ja später nicht genutzt werden.

:::

## Spielorte/Felder Tab

Den standard Spielort der bereits angelegt ist einfach umbenennen.

Da die Hallenadresse bereits im Address Tab angegeben wurde, sparen wir uns dies hier zu wiederholen.

Die Auswahlbox unter den Spielorten wird auf **Berechne aus Feld-Verfügbarkeit** gestellt. Auch eine Einstellung für die spätere Spielansetzung.

:::info

Bitte die Feldbezeichnung nicht noch mit "Feld" voran bezeichnen. Nur die Nummer anzugeben reicht.

:::

## Gruppensystem Tab

![btpSettingsDialogGroupeStages](./assets/images/btpSettingsDialogGroupeStages.png 'BTP Turniereigenschaften Gruppensystem')

Einstellungen bitte wie auf dem Bild dargestellt auswählen.

:::warning

Die Einstellung ´Ergebnisse von zurückgezogenen Spielenden nicht benutzen´ hat schon zu komischen Tabellenbildungen geführt. Bei Problemen evtl. den Haken mal raus nehmen und Tabelle nochmal überprüfen.

:::

## Meldegebühren Tab

![btpSettingsDialogEntryFee](./assets/images/btpSettingsDialogEntryFee.png 'BTP Turniereigenschaften Meldegebühren')

Die Berechnung der Meldegebühr wird auf `Bezogen auf Meldung` und der Typ auf `Summe Startgelder Konkurrenz` gestellt.

:::info

Extra Items sind nicht für die Meldegebühr gedacht! Hier kann z. B. die Gebühr für ein Physiotherapeut mit abgerechnet werden.

:::

Die Berechnung der Meldegebühr entspricht leider nicht ganz unserer Abrechnung.

Abmeldungen bis zum Abmeldeschluss sind Meldegeld frei. Ebenfalls kann für jemanden der nie Startrecht hatte (nie über einen Reserve Platz hinausgekommen ist) kein Meldegeld erhoben werden.

Das ist so mit dieser Software leider nicht direkt umsetzbar. Es geht über Umwege, indem der Person ein Rabatt eingetragen wird, und eine Notiz zur Erklärung des Rabattes hinterlegt wird. [Siehe unter](../tournamentSoftware/nachAbmeldeschluss#rabatt-eintragen).

:::tip

Wer Startrecht hatte, und es fällt evtl. der Doppelpartner aus, ist trotzdem verpflichtet das volle Meldegeld zu zahlen.

:::

## Auslosungen Tab

![btpSettingsDialogDraw](./assets/images/btpSettingsDialogDraw.png 'BTP Turniereigenschaften Auslosungen')

:::danger

Die wichtigste Einstellung ist **`Byes`**! Hier muss das Auswahlfeld auf "DBV" gestellt werden. Nur so werden die Setzplätze an die korrekten Stellen im Turnierbaum platziert.

:::

## Ansetzen Tab

Keine Haken setzen, da die bei eintägigen Turnieren diese Einstellungen nicht relevant sind.

## Ergebnis Tab

Hier müsste die Standard Einstellung vollkommen reichen. Sollte eine Zählweise von 21 und zwei Gewinnsätzen bedeuten.
