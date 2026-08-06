/* ============================================================
   THE CATALOGUE  —  this is the whole "database" of the shop.
   To add a book, copy one block and fill it in. Nothing else
   needs to change; the site rebuilds the grid from this list.

   FIELDS
   ------
   title       (required)  The book's title.
   author      (required)  Author(s), as you'd cite them.
   year        (required)  Year of this printing/edition (number).
   subject     (required)  "Americana", "Literature",
                           "Fine Press & Occult", or "History & Reference"
                           (drives the filter chips).
   antiquarian (optional)  true = also show under "Rare & Antiquarian".
   cond        (required)  Condition, e.g. "Very Good", "VG / G".
   price       (required)  Whole-dollar price (number, no "$").
   blurb       (required)  One or two sentences of description.
   ebay        (required)  Full URL of the eBay listing. Use "#" if
                           the listing isn't up yet (button shows greyed).
   img         (optional)  Filename in /images.
   spine       (optional)  Hex color for the drawn cover (ignored if
                           img is set).
   sold        (optional)  true = show a SOLD stamp, disable the button.
   ============================================================ */

const BOOKS = [
  {
    title: "De Natura Rerum + Arca Arcanorum (2-vol. pair)",
    author: "Paracelsus; Arthur Dee",
    year: 2024,
    subject: "Fine Press & Occult",
    cond: "Like New, hand-numbered #378/500 & #552/700",
    price: 270,
    img: "aula-pair.jpg",
    ebay: "https://www.ebay.com/itm/137591376202",
    blurb: "Two hand-numbered Aula Lucis private-press editions of classic alchemical texts; De Natura Rerum is sold out at the publisher."
  },
  {
    title: "Alchemy Rising: The White Book",
    author: "Heliophilus",
    year: 2025,
    subject: "Fine Press & Occult",
    cond: "Like New, hand-numbered #211/1000",
    price: 240,
    img: "alchemy.jpg",
    ebay: "https://www.ebay.com/itm/137591324615",
    blurb: "Full white bonded leather with blue foil; ~120 color photographs of practical laboratory alchemy. Sold out at U.S. stockists."
  },
  {
    title: "English Historical Documents, Vol. I: c. 500–1042",
    author: "Dorothy Whitelock, ed.",
    year: 1968,
    subject: "History & Reference",
    cond: "Very Good, jacket in fragments",
    price: 150,
    img: "ehd.jpg",
    ebay: "https://www.ebay.com/itm/137591394306",
    blurb: "The foundational 1,000-page sourcebook for Anglo-Saxon England, with the fold-out map intact. 1968 impression of the 1955 first."
  },
  {
    title: "The Romance and Tragedy of a Widely Known Business Man of New York",
    author: "William Ingraham Russell",
    year: 1905,
    subject: "Americana",
    antiquarian: true,
    cond: "Good, signed limited #12/1000",
    price: 90,
    img: "russell.jpg",
    ebay: "https://www.ebay.com/itm/137591422984",
    blurb: "Special Autograph Edition signed by the author, copy Number 12 of 1,000. A candid Gilded Age memoir of fortune and bankruptcy."
  },
  {
    title: "Les Martyrs",
    author: "Chateaubriand",
    year: 1870,
    subject: "Literature",
    antiquarian: true,
    cond: "Very Good, half morocco",
    price: 90,
    img: "martyrs.jpg",
    ebay: "https://www.ebay.com/itm/137591525202",
    blurb: "Handsome green half-morocco Garnier printing with gilt raised bands, armorial bookplate, and period French provenance."
  },
  {
    title: "War and Peace (3-volume set)",
    author: "Leo Tolstoy",
    year: 1900,
    subject: "Literature",
    antiquarian: true,
    cond: "Good−, honest wear, one repaired leaf",
    price: 80,
    img: "warpeace.jpg",
    ebay: "https://www.ebay.com/itm/137591432601",
    blurb: "Complete antique Crowell set in the Dole translation with the Garrett plates, c. 1898–1920s. All condition points photographed."
  },
  {
    title: "A New American Biographical Dictionary",
    author: "Thomas J. Rogers",
    year: 1824,
    subject: "Americana",
    antiquarian: true,
    cond: "Acceptable, original full leather",
    price: 80,
    img: "rogers.jpg",
    ebay: "https://www.ebay.com/itm/137591558799",
    blurb: "Early-Republic biographies of the Revolutionary generation, printed by the compiler in Easton, Pennsylvania. Unrestored survivor."
  },
  {
    title: "Handley Cross; or, Mr. Jorrocks's Hunt",
    author: "R. S. Surtees",
    year: 1890,
    subject: "Literature",
    antiquarian: true,
    cond: "Reading copy; plates bright",
    price: 60,
    img: "handley.jpg",
    ebay: "https://www.ebay.com/itm/137591479299",
    blurb: "The great Victorian comic hunting novel with John Leech's hand-colored plates, bright and complete in a well-worn period binding."
  },
  {
    title: "The War of the Rebellion: Official Records, Ser. I, Vol. XXXII, Pt. III",
    author: "U.S. War Department",
    year: 1891,
    subject: "Americana",
    antiquarian: true,
    cond: "Good, solid original cloth",
    price: 25,
    img: "rebellion.jpg",
    ebay: "https://www.ebay.com/itm/137591571055",
    blurb: "Original GPO volume of the \"OR\": Grant and Sherman correspondence from the eve of the Atlanta campaign, spring 1864."
  },
  {
    title: "The Mughul Empire (History & Culture of the Indian People, Vol. VII)",
    author: "R. C. Majumdar, ed.",
    year: 1984,
    subject: "History & Reference",
    cond: "Very Good in jacket",
    price: 40,
    img: "mughul.jpg",
    ebay: "#",
    blurb: "The standard large-scale scholarly history of the Mughal centuries; thick octavo of 1,000+ pages in the tan jacket."
  }
];
