/* Predictive Processing Network Symposium 2026 — programme fallback.
 *
 * The live programme comes from the Google Sheet that Helen and Andrea edit
 * (SHEET_CSV_URL in index.html). This array is the offline fallback: the page
 * paints it immediately, then replaces it with the sheet once that arrives.
 *
 * It is also what visitors see if the sheet cannot be used — e.g. on
 * 2026-08-12 the sheet's "Day" header had been overwritten with a speaker
 * name, which made every row unassignable. So keep this copy roughly in step
 * with the sheet; it is not dead code. (Last synced 2026-08-27.)
 *
 * kind: keynote | talk | blitz | session | break | meal | social | note
 *   (controls the badge / styling only)
 * who: speaker or chair. affil: speaker's institution, shown after the name.
 * end: "" if open-ended.
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
      {start:"17:00", end:"17:45", kind:"keynote", title:"The synergistic interaction between learning and perception", who:"Clare Press", affil:"UCL"},
      {start:"18:00", end:"20:00", kind:"social",  title:"Reception with poster session"}
    ]
  },
  {
    day: "Wednesday", date: "7 October 2026",
    venue: "Ruhr University Bochum, campus",
    theme: "Full-day programme and conference dinner",
    items: [
      {start:"09:00", end:"09:30", kind:"talk",    title:"Talk 1: Dynamic Predictions: Interactions Between Memory, Context, and Sensory Processing", who:"Ryszard Auksztulewicz", affil:"Maastricht University"},
      {start:"09:30", end:"10:00", kind:"talk",    title:"Talk 2: Predictions reshape neural population codes in macaque inferotemporal cortex", who:"Caspar M. Schwiedrzik", affil:"Ruhr University Bochum"},
      {start:"10:00", end:"10:30", kind:"talk",    title:"Talk 3: Predictive Processing Unplugged", who:"Alejandro Tabas", affil:"Basque Center on Cognition, Brain and Language (BCBL)"},
      {start:"10:30", end:"11:00", kind:"break",   title:"Coffee break"},
      {start:"11:00", end:"12:00", kind:"keynote", title:"Keynote", who:"Lars Muckli", affil:"University of Glasgow"},
      {start:"12:00", end:"14:00", kind:"meal",    title:"Lunch (Mensa / Rote Bete) and a walk in the Botanical Garden"},
      {start:"14:00", end:"14:30", kind:"talk",    title:"Talk 4: tba", who:"Andrea Greve/Helen Blank", affil:"University of Cambridge / Ruhr University Bochum"},
      {start:"14:30", end:"15:00", kind:"talk",    title:"Talk 5: The Influence of Knowledge on Perception in visual word recognition", who:"Benjamin Gagl", affil:"University of Cologne"},
      {start:"15:00", end:"15:30", kind:"talk",    title:"Talk 6: Stronger Priors, Noisy Inputs: Predictive Language Processing and Speech Detection Bias in Schizotypy", who:"Franziska Knolle", affil:"Technical University of Munich"},
      {start:"15:30", end:"16:30", kind:"break",   title:"Coffee break and cake"},
      {start:"16:30", end:"17:30", kind:"keynote", title:"Remembering the present and predicting the past", who:"Chris Bird", affil:"University of Sussex"},
      {start:"17:30", end:"18:00", kind:"session", title:"General discussion", who:"chaired by Andrea Greve & Helen Blank"},
      {start:"19:00", end:"",      kind:"social",  title:"Internal conference dinner", who:"speakers and network members"}
    ]
  },
  {
    day: "Thursday", date: "8 October 2026",
    venue: "Ruhr University Bochum, campus",
    theme: "Closing session (with lunch packages)",
    items: [
      {start:"09:00", end:"09:30", kind:"talk",    title:"Talk 7: Predictive processing as a mechanism underlying word form learning", who:"Florian Hintz", affil:"University of Marburg"},
      {start:"09:30", end:"10:00", kind:"talk",    title:"Talk 8: Building predictive models in early development", who:"Moritz Köster", affil:"University of Regensburg"},
      {start:"10:00", end:"10:30", kind:"talk",    title:"Talk 9: tba", who:"Arjen Alink", affil:"University Medical Center Hamburg-Eppendorf"},
      {start:"10:30", end:"11:00", kind:"break",   title:"Coffee break"},
      {start:"11:00", end:"12:00", kind:"session", title:"General Discussion: shared BIDS database, network outputs, and future directions", who:"Andrea Greve & Helen Blank"},
      {start:"12:00", end:"",      kind:"note",    title:"Goodbye and lunch packages"}
    ]
  }
];

/* Poster fallback, mirroring the sheet's "Posters" tab (POSTERS_CSV_URL in
 * index.html): {title, who, affil, blitz} — blitz: true marks a poster whose
 * presenter also gives a poster blitz. Rendered as a drop-down on the
 * "Reception with poster session" row; empty = the drop-down is not shown.
 */
const POSTERS = [];
