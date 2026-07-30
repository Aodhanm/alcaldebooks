/* ============================================================
   THE CATALOGUE  —  this is the whole "database" of the shop.
   To add a book, copy one block and fill it in. Nothing else
   needs to change; the site rebuilds the grid from this list.

   FIELDS
   ------
   title       (required)  The book's title.
   author      (required)  Author(s), as you'd cite them.
   year        (required)  Year of this printing/edition (number).
   subject     (required)  "California" or "Western Americana"
                           (drives the filter chips).
   antiquarian (optional)  true = also show under "Rare & Antiquarian".
   cond        (required)  Condition, e.g. "Very Good", "VG / G",
                           "Good, ex-library". See the key on the page.
   price       (required)  Whole-dollar price (number, no "$").
   blurb       (required)  One or two sentences of description.
   ebay        (required)  Full URL of the eBay listing. Use "#" if
                           the listing isn't up yet (button shows greyed).
   img         (optional)  Filename in /images (e.g. "annals.jpg").
                           Omit it and a drawn placeholder cover shows.
   spine       (optional)  Hex color for the drawn cover (ignored if
                           img is set), e.g. "#5b3a2e".
   sold        (optional)  true = show a SOLD stamp, disable the button.
   ============================================================ */

const BOOKS = [
  {
    title: "The Annals of San Francisco",
    author: "Soulé, Gihon & Nisbet",
    year: 1855,
    subject: "California",
    antiquarian: true,
    cond: "Good, rebound",
    price: 220,
    spine: "#6e2b26",
    ebay: "https://www.ebay.com/sch/i.html?_nkw=annals+of+san+francisco+1855",
    blurb: "First edition of the foundational chronicle of Gold-Rush San Francisco, with the folding view."
  },
  {
    title: "The Beginnings of San Francisco",
    author: "Zoeth Skinner Eldredge",
    year: 1912,
    subject: "California",
    cond: "Very Good, 2 vols.",
    price: 145,
    spine: "#4a352a",
    ebay: "https://www.ebay.com/sch/i.html?_nkw=eldredge+beginnings+of+san+francisco",
    blurb: "Complete two-volume set tracing the Spanish and Mexican origins of the city."
  },
  {
    title: "Anza's California Expeditions",
    author: "Herbert E. Bolton",
    year: 1930,
    subject: "Western Americana",
    antiquarian: true,
    cond: "VG / G",
    price: 275,
    spine: "#7a4e1e",
    ebay: "https://www.ebay.com/sch/i.html?_nkw=bolton+anza+california+expeditions",
    blurb: "The five-volume University of California edition — standard source on the Anza overland route."
  },
  {
    title: "History of California, Vol. I",
    author: "Hubert Howe Bancroft",
    year: 1884,
    subject: "California",
    antiquarian: true,
    cond: "Good, ex-library",
    price: 40,
    spine: "#5a2f2a",
    ebay: "https://www.ebay.com/sch/i.html?_nkw=bancroft+history+of+california",
    blurb: "Volume I of the monumental seven-volume history. Library markings; a sound reading copy."
  },
  {
    title: "Sixty Years in California",
    author: "William Heath Davis",
    year: 1889,
    subject: "California",
    antiquarian: true,
    cond: "Fair",
    price: 90,
    sold: true,
    spine: "#3f2a24",
    ebay: "#",
    blurb: "Firsthand recollections of Mexican and early American California by a pioneer merchant."
  },
  {
    title: "Route of the Portolá Expedition, 1769–70",
    author: "Stanger & Brown",
    year: 1969,
    subject: "Western Americana",
    cond: "Fine",
    price: 35,
    spine: "#6a4a1c",
    ebay: "https://www.ebay.com/sch/i.html?_nkw=portola+expedition+stanger+brown",
    blurb: "Careful reconstruction of the first overland exploration of Alta California."
  }
];
