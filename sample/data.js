const sampleData = [
  {
    "title": "Beachside Villa",
    "description": "A luxurious villa with a sea view and private beach access.",
    "price": 450,
    "image": "https://th.bing.com/th/id/R.52d07345ddc6a56b8a5566c7a552c1d1?rik=PuYhp2Zg4HC%2b3Q&riu=http%3a%2f%2fmedia.cntraveler.com%2fphotos%2f56556bab659c4b487486611e%2fmaster%2fpass%2foia-santorini-greece-cr-alamy.jpg&ehk=G60H1Lu3Z1KSk5VrC9MLvSM1YnJbpaG1Ol0Q1%2fnkjqM%3d&risl=&pid=ImgRaw&r=0",
    "country": "Spain",
    "location": "Ibiza"
  },
  {
    "title": "Mountain Cabin",
    "description": "Cozy wooden cabin surrounded by serene mountain views.",
    "price": 150,
    "image": "https://i.pinimg.com/originals/68/11/7c/68117cd253b9905049e4347b33765b91.jpg",
    "country": "Switzerland",
    "location": "Zermatt"
  },
  {
    "title": "City Apartment",
    "description": "Modern apartment in the heart of the city with all amenities.",
    "price": 120,
    "image": "https://th.bing.com/th/id/R.b728f1fa7c9ce1582b5cd4023039809a?rik=ktzifNapQMTJfA&riu=http%3a%2f%2fs3.amazonaws.com%2ftravelcroc%2fwp-content%2fuploads%2f20160722105711%2f3.-20-Most-Amazing-Places-to-Visit-Before-You-Die-Maldives.jpg&ehk=BiNmxDgnhPd7Rxy9AQmnCgigSq9gzpGNTz0FnHsRXuA%3d&risl=&pid=ImgRaw&r=0",
    "country": "USA",
    "location": "New York"
  },
  {
    "title": "Desert Retreat",
    "description": "Experience tranquility in this unique desert dome stay.",
    "price": 200,
    "image": "https://handluggageonly.co.uk/wp-content/uploads/2017/12/Hand-Luggage-Only-10-2.jpg",
    "country": "UAE",
    "location": "Dubai"
  },
  {
    "title": "Countryside Cottage",
    "description": "Charming cottage with a garden in the quiet countryside.",
    "price": 90,
    "image": "https://www.ourescapeclause.com/wp-content/uploads/2020/09/shutterstock_1037347711-scaled.jpg",
    "country": "United Kingdom",
    "location": "Cotswolds"
  },
  {
    "title": "Jungle Treehouse",
    "description": "Eco-friendly treehouse surrounded by lush greenery and wildlife.",
    "price": 180,
    "image": "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg",
    "country": "Costa Rica",
    "location": "Monteverde"
  },
  {
    "title": "Ski Lodge",
    "description": "Rustic lodge located right next to the ski slopes.",
    "price": 220,
    "image": "https://www.roadaffair.com/wp-content/uploads/2021/04/autumn-gyeongbokgung-palace-seoul-south-korea-shutterstock_653918203-1024x683.jpg",
    "country": "Canada",
    "location": "Whistler"
  },
  {
    "title": "Tropical Bungalow",
    "description": "Beachfront bungalow with clear blue water just steps away.",
    "price": 300,
    "image": "https://www.qantas.com/content/dam/travelinsider/images/explore/asia/india/beautiful-places-to-visit-in-india/iStock-510978989.jpg",
    "country": "Thailand",
    "location": "Phuket"
  },
  {
    "title": "Penthouse Suite",
    "description": "Luxury penthouse with rooftop pool and panoramic views.",
    "price": 600,
    "image": "https://www.roadaffair.com/wp-content/uploads/2021/05/lake-tahoe-california-usa-shutterstock_1164844816.jpg",
    "country": "Singapore",
    "location": "Marina Bay"
  },
  {
    "title": "Historic Castle Stay",
    "description": "Stay in a beautifully restored medieval castle.",
    "price": 500,
    "image": "https://admin.thetravelnet.com/img/domains/shutterstock_149526038.jpg",
    "country": "France",
    "location": "Loire Valley"
  },
  {
    "title": "Lake House",
    "description": "Peaceful house with private dock on the lake.",
    "price": 190,
    "image": "https://www.travelandleisure.com/thmb/l7wzNpnV14P2uZr-RCw838hyF9A=/1800x1200/filters:fill(auto,1)/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg",
    "country": "USA",
    "location": "Minnesota"
  },
  {
    "title": "Safari Tent",
    "description": "Glamorous tent stay with wildlife views.",
    "price": 250,
    "image": "https://media.cntraveler.com/photos/5994745c0ded6c4dfe2f3f4d/master/pass/10%20Hamburg_GettyImages-492694916.jpg",
    "country": "Kenya",
    "location": "Maasai Mara"
  },
  {
    "title": "Island Hut",
    "description": "Simple beach hut on a private island.",
    "price": 170,
    "image": "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/places-to-travel-in-2018-1522385995-785X440.jpg",
    "country": "Indonesia",
    "location": "Bali"
  },
  {
    "title": "Art Loft",
    "description": "Colorful loft in the city's arts district.",
    "price": 130,
    "image": "https://www.explore.com/img/gallery/the-worlds-best-places-to-put-on-your-travel-bucket-list/l-intro-1668448379.jpg",
    "country": "Germany",
    "location": "Berlin"
  },
  {
    "title": "Farmhouse",
    "description": "Traditional farmhouse with animals and fresh produce.",
    "price": 110,
    "image": "https://www.pandotrip.com/wp-content/uploads/2016/04/Horseshoe.jpg",
    "country": "Italy",
    "location": "Tuscany"
  },
  {
    "title": "Igloo Stay",
    "description": "Unique ice igloo experience under the northern lights.",
    "price": 270,
    "image": "https://img.veenaworld.com/wp-content/uploads/2022/10/12-Most-Beautiful-Places-to-Visit-in-Bhimtal-scaled-e1669312913111.jpg",
    "country": "Finland",
    "location": "Lapland"
  },
  {
    "title": "Forest Cabin",
    "description": "Secluded cabin deep in the woods.",
    "price": 140,
    "image": "https://www.tripsavvy.com/thmb/j612aq-Vz0HVu-KvH_OtNwrmE8A=/2122x1413/filters:fill(auto,1)/GettyImages-531732818-592d24ec3df78cbe7e956e68.jpg",
    "country": "Poland",
    "location": "Białowieża"
  },
  {
    "title": "Luxury Tent Camp",
    "description": "All-inclusive tent experience with gourmet meals.",
    "price": 320,
    "image": "https://media.cntraveler.com/photos/589218b46ce0e5bb7a6ec536/16:9/pass/venice-GettyImages-491075100.jpg",
    "country": "Australia",
    "location": "Uluru"
  },
  {
    "title": "Riverside Chalet",
    "description": "Wooden chalet right beside a peaceful river.",
    "price": 160,
    "image": "https://media.cntraveler.com/photos/5851c79aada6b88679ec49ad/master/pass/2017-norway-GettyImages-485535794.jpg",
    "country": "Austria",
    "location": "Salzburg"
  },
  {
    "title": "Cave House",
    "description": "Live in a unique house carved into the mountain.",
    "price": 210,
    "image": "https://www.worldatlas.com/upload/31/fc/d2/img-0173-2.jpg",
    "country": "Turkey",
    "location": "Cappadocia"
  },
  {
    "title": "Modern Studio",
    "description": "Minimalist studio with smart home features.",
    "price": 100,
    "image": "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_713119015.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=23&dpr=4",
    "country": "Japan",
    "location": "Tokyo"
  },
  {
    "title": "Windmill Stay",
    "description": "Historic windmill converted into a comfortable stay.",
    "price": 180,
    "image": "https://globalgrasshopper.com/wp-content/uploads/2011/01/Gadi-Sagar.jpg",
    "country": "Netherlands",
    "location": "Kinderdijk"
  },
  {
    "title": "Cliffside Retreat",
    "description": "Dramatic cliffside home with ocean views.",
    "price": 350,
    "image": "https://travellersworldwide.com/wp-content/uploads/2023/03/Shutterstock_1937002054.jpg",
    "country": "Greece",
    "location": "Santorini"
  },
  {
    "title": "Houseboat",
    "description": "Stay afloat in a cozy houseboat.",
    "price": 200,
    "image": "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg",
    "country": "India",
    "location": "Kerala"
  },
  {
    "title": "Alpine Chalet",
    "description": "Snow-covered chalet perfect for winter getaways.",
    "price": 240,
    "image": "https://www.goatsontheroad.com/wp-content/uploads/2018/11/places-to-visit-in-seoul.jpg",
    "country": "France",
    "location": "Chamonix"
  },
  {
    "title": "Hammock Hut",
    "description": "Chill in the jungle in your private hammock hut.",
    "price": 80,
    "image": "https://www.hyderabadtourism.travel/images/popular/places-near-hyderabad/best-tourist-places-to-visit-near-hyderabad-header.jpg",
    "country": "Brazil",
    "location": "Manaus"
  },
  {
    "title": "Floating Villa",
    "description": "Stay in a floating villa with direct access to the sea.",
    "price": 500,
    "image": "https://3.bp.blogspot.com/-ZGRLdOzfHP8/WTWaSy3oEBI/AAAAAAAACEI/u09i9-ZN964b4EdvzYuCsytumbcTLL-CgCLcB/s1600/kumarakom.jpg",
    "country": "Maldives",
    "location": "Male"
  },
  {
    "title": "Vintage Train Cabin",
    "description": "Experience old-world charm in a train cabin converted into a stay.",
    "price": 190,
    "image": "https://globalgrasshopper.com/wp-content/uploads/2011/01/Mumbai-India-scaled.jpg",
    "country": "UK",
    "location": "Yorkshire"
  },
  {
    "title": "Tree Tent",
    "description": "Suspended tent hanging between trees for adventurous stays.",
    "price": 110,
    "image": "https://th.bing.com/th/id/OIP.NZ_jDnObnvEPsATy6vdjSQHaE8?rs=1&pid=ImgDetMain",
    "country": "USA",
    "location": "Oregon"
  },
  {
    "title": "Zen Garden House",
    "description": "A peaceful house surrounded by a traditional Zen garden.",
    "price": 160,
    "image": "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1660823032/Best-Places-to-Visit-in-India-Amritsar/Best-Places-to-Visit-in-India-Amritsar.jpg",
    "country": "Japan",
    "location": "Kyoto"
  }
]

module.exports = sampleData;