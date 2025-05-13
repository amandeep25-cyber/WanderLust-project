const sampleData = [
  {
    "title": "Beachside Villa",
    "description": "A luxurious villa with a sea view and private beach access.",
    "price": 450,
    "image": "https://example.com/images/beachside-villa.jpg",
    "country": "Spain",
    "location": "Ibiza"
  },
  {
    "title": "Mountain Cabin",
    "description": "Cozy wooden cabin surrounded by serene mountain views.",
    "price": 150,
    "image": "https://example.com/images/mountain-cabin.jpg",
    "country": "Switzerland",
    "location": "Zermatt"
  },
  {
    "title": "City Apartment",
    "description": "Modern apartment in the heart of the city with all amenities.",
    "price": 120,
    "image": "https://example.com/images/city-apartment.jpg",
    "country": "USA",
    "location": "New York"
  },
  {
    "title": "Desert Retreat",
    "description": "Experience tranquility in this unique desert dome stay.",
    "price": 200,
    "image": "https://example.com/images/desert-retreat.jpg",
    "country": "UAE",
    "location": "Dubai"
  },
  {
    "title": "Countryside Cottage",
    "description": "Charming cottage with a garden in the quiet countryside.",
    "price": 90,
    "image": "https://example.com/images/countryside-cottage.jpg",
    "country": "United Kingdom",
    "location": "Cotswolds"
  },
  {
    "title": "Jungle Treehouse",
    "description": "Eco-friendly treehouse surrounded by lush greenery and wildlife.",
    "price": 180,
    "image": "https://example.com/images/jungle-treehouse.jpg",
    "country": "Costa Rica",
    "location": "Monteverde"
  },
  {
    "title": "Ski Lodge",
    "description": "Rustic lodge located right next to the ski slopes.",
    "price": 220,
    "image": "https://example.com/images/ski-lodge.jpg",
    "country": "Canada",
    "location": "Whistler"
  },
  {
    "title": "Tropical Bungalow",
    "description": "Beachfront bungalow with clear blue water just steps away.",
    "price": 300,
    "image": "https://example.com/images/tropical-bungalow.jpg",
    "country": "Thailand",
    "location": "Phuket"
  },
  {
    "title": "Penthouse Suite",
    "description": "Luxury penthouse with rooftop pool and panoramic views.",
    "price": 600,
    "image": "https://example.com/images/penthouse-suite.jpg",
    "country": "Singapore",
    "location": "Marina Bay"
  },
  {
    "title": "Historic Castle Stay",
    "description": "Stay in a beautifully restored medieval castle.",
    "price": 500,
    "image": "https://example.com/images/castle-stay.jpg",
    "country": "France",
    "location": "Loire Valley"
  },
  {
    "title": "Lake House",
    "description": "Peaceful house with private dock on the lake.",
    "price": 190,
    "image": "https://example.com/images/lake-house.jpg",
    "country": "USA",
    "location": "Minnesota"
  },
  {
    "title": "Safari Tent",
    "description": "Glamorous tent stay with wildlife views.",
    "price": 250,
    "image": "https://example.com/images/safari-tent.jpg",
    "country": "Kenya",
    "location": "Maasai Mara"
  },
  {
    "title": "Island Hut",
    "description": "Simple beach hut on a private island.",
    "price": 170,
    "image": "https://example.com/images/island-hut.jpg",
    "country": "Indonesia",
    "location": "Bali"
  },
  {
    "title": "Art Loft",
    "description": "Colorful loft in the city's arts district.",
    "price": 130,
    "image": "https://example.com/images/art-loft.jpg",
    "country": "Germany",
    "location": "Berlin"
  },
  {
    "title": "Farmhouse",
    "description": "Traditional farmhouse with animals and fresh produce.",
    "price": 110,
    "image": "https://example.com/images/farmhouse.jpg",
    "country": "Italy",
    "location": "Tuscany"
  },
  {
    "title": "Igloo Stay",
    "description": "Unique ice igloo experience under the northern lights.",
    "price": 270,
    "image": "https://example.com/images/igloo-stay.jpg",
    "country": "Finland",
    "location": "Lapland"
  },
  {
    "title": "Forest Cabin",
    "description": "Secluded cabin deep in the woods.",
    "price": 140,
    "image": "https://example.com/images/forest-cabin.jpg",
    "country": "Poland",
    "location": "Białowieża"
  },
  {
    "title": "Luxury Tent Camp",
    "description": "All-inclusive tent experience with gourmet meals.",
    "price": 320,
    "image": "https://example.com/images/luxury-tent.jpg",
    "country": "Australia",
    "location": "Uluru"
  },
  {
    "title": "Riverside Chalet",
    "description": "Wooden chalet right beside a peaceful river.",
    "price": 160,
    "image": "https://example.com/images/riverside-chalet.jpg",
    "country": "Austria",
    "location": "Salzburg"
  },
  {
    "title": "Cave House",
    "description": "Live in a unique house carved into the mountain.",
    "price": 210,
    "image": "https://example.com/images/cave-house.jpg",
    "country": "Turkey",
    "location": "Cappadocia"
  },
  {
    "title": "Modern Studio",
    "description": "Minimalist studio with smart home features.",
    "price": 100,
    "image": "https://example.com/images/modern-studio.jpg",
    "country": "Japan",
    "location": "Tokyo"
  },
  {
    "title": "Windmill Stay",
    "description": "Historic windmill converted into a comfortable stay.",
    "price": 180,
    "image": "https://example.com/images/windmill-stay.jpg",
    "country": "Netherlands",
    "location": "Kinderdijk"
  },
  {
    "title": "Cliffside Retreat",
    "description": "Dramatic cliffside home with ocean views.",
    "price": 350,
    "image": "https://example.com/images/cliffside-retreat.jpg",
    "country": "Greece",
    "location": "Santorini"
  },
  {
    "title": "Houseboat",
    "description": "Stay afloat in a cozy houseboat.",
    "price": 200,
    "image": "https://example.com/images/houseboat.jpg",
    "country": "India",
    "location": "Kerala"
  },
  {
    "title": "Alpine Chalet",
    "description": "Snow-covered chalet perfect for winter getaways.",
    "price": 240,
    "image": "https://example.com/images/alpine-chalet.jpg",
    "country": "France",
    "location": "Chamonix"
  },
  {
    "title": "Hammock Hut",
    "description": "Chill in the jungle in your private hammock hut.",
    "price": 80,
    "image": "https://example.com/images/hammock-hut.jpg",
    "country": "Brazil",
    "location": "Manaus"
  },
  {
    "title": "Floating Villa",
    "description": "Stay in a floating villa with direct access to the sea.",
    "price": 500,
    "image": "https://example.com/images/floating-villa.jpg",
    "country": "Maldives",
    "location": "Male"
  },
  {
    "title": "Vintage Train Cabin",
    "description": "Experience old-world charm in a train cabin converted into a stay.",
    "price": 190,
    "image": "https://example.com/images/train-cabin.jpg",
    "country": "UK",
    "location": "Yorkshire"
  },
  {
    "title": "Tree Tent",
    "description": "Suspended tent hanging between trees for adventurous stays.",
    "price": 110,
    "image": "https://example.com/images/tree-tent.jpg",
    "country": "USA",
    "location": "Oregon"
  },
  {
    "title": "Zen Garden House",
    "description": "A peaceful house surrounded by a traditional Zen garden.",
    "price": 160,
    "image": "https://example.com/images/zen-house.jpg",
    "country": "Japan",
    "location": "Kyoto"
  }
]

module.exports = sampleData;