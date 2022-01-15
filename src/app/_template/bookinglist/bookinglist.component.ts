import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.sass']
})
export class BookinglistComponent implements OnInit {
  public summe : number = 0
  public bookings = [
    {
      datum: new Date("02-02-2021"),
      betrag: 300,
      grund: "Auftritt Gage",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("04-04-2021"),
      betrag: 150,
      grund: "Auftritt Kleinrdf",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("01-01-2021"),
      betrag: -300,
      grund: "Gage für Bassprobe",
      kategorie: "indieller Wert",
      bemerkung: "Beleg fehlt"
    },
    {
      datum: new Date("02-03-2021"),
      betrag: -179.40,
      grund: "neue Trommel",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("10-08-2021"),
      betrag: 150,
      grund: "Auftritt Lichtenberg",
      kategorie: "indieller Wert",
      bemerkung: ""
    },{
      datum: new Date("02-02-2021"),
      betrag: -110.50,
      grund: "Auszahlung Fahrtkosten",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("02-02-2021"),
      betrag: 300,
      grund: "Auftritt Gage",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("04-04-2021"),
      betrag: 150,
      grund: "Auftritt Kleinrdf",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("01-01-2021"),
      betrag: -300,
      grund: "Gage für Bassprobe",
      kategorie: "indieller Wert",
      bemerkung: "Beleg fehlt"
    },
    {
      datum: new Date("02-03-2021"),
      betrag: -179.40,
      grund: "neue Trommel",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("10-08-2021"),
      betrag: 150,
      grund: "Auftritt Lichtenberg",
      kategorie: "indieller Wert",
      bemerkung: ""
    },{
      datum: new Date("02-02-2021"),
      betrag: -110.50,
      grund: "Auszahlung Fahrtkosten",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("02-02-2021"),
      betrag: 300,
      grund: "Auftritt Gage",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("04-04-2021"),
      betrag: 150,
      grund: "Auftritt Kleinrdf",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("01-01-2021"),
      betrag: -300,
      grund: "Gage für Bassprobe",
      kategorie: "indieller Wert",
      bemerkung: "Beleg fehlt"
    },
    {
      datum: new Date("02-03-2021"),
      betrag: -179.40,
      grund: "neue Trommel",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("10-08-2021"),
      betrag: 150,
      grund: "Auftritt Lichtenberg",
      kategorie: "indieller Wert",
      bemerkung: ""
    },{
      datum: new Date("02-02-2021"),
      betrag: -110.50,
      grund: "Auszahlung Fahrtkosten",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("02-02-2021"),
      betrag: 300,
      grund: "Auftritt Gage",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("04-04-2021"),
      betrag: 150,
      grund: "Auftritt Kleinrdf",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("01-01-2021"),
      betrag: -300,
      grund: "Gage für Bassprobe",
      kategorie: "indieller Wert",
      bemerkung: "Beleg fehlt"
    },
    {
      datum: new Date("02-03-2021"),
      betrag: -179.40,
      grund: "neue Trommel",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("10-08-2021"),
      betrag: 150,
      grund: "Auftritt Lichtenberg",
      kategorie: "indieller Wert",
      bemerkung: ""
    },{
      datum: new Date("02-02-2021"),
      betrag: -110.50,
      grund: "Auszahlung Fahrtkosten",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("02-02-2021"),
      betrag: 300,
      grund: "Auftritt Gage",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("04-04-2021"),
      betrag: 150,
      grund: "Auftritt Kleinrdf",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("01-01-2021"),
      betrag: -300,
      grund: "Gage für Bassprobe",
      kategorie: "indieller Wert",
      bemerkung: "Beleg fehlt"
    },
    {
      datum: new Date("02-03-2021"),
      betrag: -179.40,
      grund: "neue Trommel",
      kategorie: "indieller Wert",
      bemerkung: ""
    },
    {
      datum: new Date("10-08-2021"),
      betrag: 150,
      grund: "Auftritt Lichtenberg",
      kategorie: "indieller Wert",
      bemerkung: ""
    },{
      datum: new Date("02-02-2021"),
      betrag: -110.50,
      grund: "Auszahlung Fahrtkosten",
      kategorie: "indieller Wert",
      bemerkung: ""
    }
  ]


  constructor() { }

  ngOnInit(): void {
    for (var i = 0 ; i<this.bookings.length; i++) {
      this.summe = this.summe + this.bookings[i].betrag
    }
    
  }

}
