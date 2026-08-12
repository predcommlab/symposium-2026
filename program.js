/* Predictive Processing Network Symposium 2026 — programme fallback.
 *
 * The live programme comes from the Google Sheet that Helen and Andrea edit
 * (SHEET_CSV_URL in index.html). This array is the offline fallback: the page
 * paints it immediately, then replaces it with the sheet once that arrives.
 *
 * It is also what visitors see if the sheet cannot be used — e.g. on
 * 2026-08-12 the sheet's "Day" header had been overwritten with a speaker
 * name, which made every row unassignable. So keep this copy roughly in step
 * with the sheet; it is not dead code.
 *
 * kind: keynote | talk | blitz | session | break | meal | social | note
 *   (controls the badge / styling only)
 * who: speaker or chair; leave "TBA" until confirmed. end: "" if open-ended.
 */
const PROGRAM = [
  {
    day: "Tuesday", date: "6 October 2026",
    venue: "Blue Square, Bochum city centre",
    theme: "Welcome and opening session",
    items: [
      {start:"16:00", end:"16:15", kind:"note",    title:"Arrival"},
      {start:"16:15", end:"16:30", kind:"session", title:"Opening", who:"Andrea Greve & Helen Blank"},
      {start:"16:30", end:"17:00", kind:"blitz",   title:"Poster blitzes"},
      {start:"17:00", end:"17:45", kind:"keynote", title:"The synergistic interaction between learning and perception", who:"Clare Press"},
      {start:"18:00", end:"20:00", kind:"social",  title:"Reception with poster session"}
    ]
  },
  {
    day: "Wednesday", date: "7 October 2026",
    venue: "Ruhr University Bochum, campus",
    theme: "Full-day programme and conference dinner",
    items: [
      {start:"09:00", end:"09:30", kind:"talk",    title:"Talk 1", who:"TBA"},
      {start:"09:30", end:"10:00", kind:"talk",    title:"Talk 2", who:"TBA"},
      {start:"10:00", end:"10:30", kind:"talk",    title:"Talk 3", who:"TBA"},
      {start:"10:30", end:"11:00", kind:"break",   title:"Coffee break"},
      {start:"11:00", end:"12:00", kind:"keynote", title:"Keynote", who:"Lars Muckli"},
      {start:"12:00", end:"14:00", kind:"meal",    title:"Lunch (Mensa / Rote Bete) and a walk in the Botanical Garden"},
      {start:"14:00", end:"14:30", kind:"talk",    title:"Talk 4", who:"TBA"},
      {start:"14:30", end:"15:00", kind:"talk",    title:"Talk 5", who:"TBA"},
      {start:"15:00", end:"15:30", kind:"talk",    title:"Talk 6", who:"TBA"},
      {start:"15:30", end:"16:30", kind:"break",   title:"Coffee break and cake"},
      {start:"16:30", end:"17:30", kind:"keynote", title:"Remembering the present and predicting the past", who:"Chris Bird"},
      {start:"17:30", end:"18:00", kind:"session", title:"General discussion", who:"chaired by Andrea Greve & Helen Blank"},
      {start:"19:00", end:"",      kind:"social",  title:"Internal conference dinner", who:"speakers and network members"}
    ]
  },
  {
    day: "Thursday", date: "8 October 2026",
    venue: "Ruhr University Bochum, campus",
    theme: "Closing session (with lunch packages)",
    items: [
      {start:"09:00", end:"09:30", kind:"talk",    title:"Talk 7", who:"TBA"},
      {start:"09:30", end:"10:00", kind:"talk",    title:"Talk 8", who:"TBA"},
      {start:"10:00", end:"10:30", kind:"session", title:"General discussion", who:"chaired by Andrea Greve & Helen Blank"},
      {start:"10:30", end:"11:00", kind:"break",   title:"Coffee break"},
      {start:"11:00", end:"12:00", kind:"session", title:"Closing: shared BIDS database, network outputs, and future directions", who:"Andrea Greve & Helen Blank"},
      {start:"12:00", end:"",      kind:"note",    title:"Goodbye and lunch packages"}
    ]
  }
];
