let printProducts = [
    "Booklets",
    "Bookmarks",
    "Brochures",
    "Business cards",
    "Calendars",
    "Door Hangers",
    "Envelopes",
    "Event Tickets",
    "Flyers",
    "Folders",
    "Greeting Cards",
    "Letterheads",
    "Notepads",
    "Postcards",
    "Posters",
    "Rack Cards",
    "Roll Labels",
    "Special Shapes",
    "Stickers",
    "Table Tents",
];

let signage = [
    "A-Frames",
    "Banners",
    "Car Magnets",
    "Floor Decals",
    "Posters (Large Format)",
    "Retractable stands",
    "Rigid Signs",
    "Window Cling",
    "Window Decals",
    "Window Perfs",
    "Yard Signs",
];

let apparel = [
    {slug: "screen-printing", name: "Screen Printing <small>( high volume )</small>"},
    {slug: "digital-transfer", name: "Digital Transfer <small>( low volume )</small>"},
    {slug: "vinyl-heat-transfer", name: "Vinyl Heat Transfer"},
    {slug: "embroidery", name: "Embroidery"},
];

module.exports = {products: printProducts, signage, apparel};
