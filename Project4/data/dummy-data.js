import Category from "../models/category";
import Product from "../models/product";

export const CATEGORIES = [
  new Category(
    1,
    "Maid",
    "Electronic gadgets and devices",
    "https://media.istockphoto.com/id/1417401413/photo/maid-making-the-bed-at-a-hotel.webp?b=1&s=170667a&w=0&k=20&c=2tKQEH2V21QNcomEmyBP0peodetSxHBLqFN-ZwKovNs="
  ),
  new Category(
    2,
    "Baby Sitter",
    "Fashionable clothing for all ages",
    "https://media.istockphoto.com/id/1028379220/photo/mom-and-kid-girl-drawing-with-colored-pencils-at-home.jpg?s=612x612&w=0&k=20&c=nS8uCJ8ityMaERQKQfC_QaGGzOagouDD_7hnWGmt0x4="
  ),
  new Category(
    3,
    "Cook",
    "Home appliances and kitchen essentials",
    "https://media.istockphoto.com/id/1311030976/photo/portrait-of-a-young-women-chef-holding-wooden-spoon-and-spatula-standing-isolated-over-white.jpg?s=612x612&w=0&k=20&c=ZwrQBgDEKF9SDrLrvIx6i2RBUz0OoL6UBJeNtoJLx8Y="
  ),
  new Category(
    4,
    "Elder Care",
    "Accessories for electronic devices",
    "https://media.istockphoto.com/id/1134451603/photo/she-knows-just-how-to-make-each-patient-feel-special.jpg?s=612x612&w=0&k=20&c=OLZuce52LblJl9JFp0dwtyFlDWbD3sTCxJYKhkLTxW8="
  ),
  new Category(
    5,
    "Paitent Care",
    "Clothing for men",
    "https://media.istockphoto.com/id/1296176562/photo/caregiver-assist-senior-woman-at-home.jpg?s=612x612&w=0&k=20&c=UiHsEPH-avDi9_sK3D3BSAiEdqPr45Pg5qGOprVR5BA="
  ),
  new Category(
    6,
    "Japa Maid",
    "Clothing for women",
    "https://media.istockphoto.com/id/1136852444/photo/mother-playing-with-her-toddler-boy-smiling.jpg?s=612x612&w=0&k=20&c=G32lUWaTnROxkvdZvTSME7aGKImUCTvvJ_K1UNGjTTk="
  ),
  new Category(
    7,
    "Pet Care",
    "Smartphones and mobile devices",
    "https://media.istockphoto.com/id/1425107939/photo/african-american-woman-is-playing-with-her-french-bulldog-puppy-while-walking-in-the-dog-park.jpg?s=612x612&w=0&k=20&c=-n5PMV-oiMejkUIMmbrS7RZe3rMFUDQg4vPNa3ANZdQ="
  ),
];

export const PRODUCT = [
  new Product(
    1,
    "High-Performance Laptop",
    '15.6" display, Intel Core i7, 16GB RAM, 512GB SSD',
    "1100",
    1,
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA="
  ),
  new Product(
    2,
    "Smartphone",
    '5.5" OLED display, 128GB storage, dual-camera setup, Snapdragon 855',
    "700",
    6,
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA="
  ),
  new Product(
    3,
    "Running Shoes",
    "Comfortable running shoes with breathable mesh, suitable for long-distance running",
    "80",
    2,
    "https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA=="
  ),
  new Product(
    4,
    "HD Smart TV",
    '55" 4K UHD Smart TV with HDR, built-in streaming apps',
    "900",
    1,
    "https://shs-media.storage.googleapis.com/wp-content/uploads/2023/04/17154135/IMG_8749-1024x541.jpg"
  ),
  new Product(
    5,
    "Coffee Maker",
    "Programmable coffee maker with built-in grinder, 12-cup capacity",
    "130",
    3,
    "https://img.freepik.com/premium-photo/coffee-maker_152290-1.jpg?size=626&ext=jpg"
  ),
  new Product(
    6,
    "Wireless Headphones",
    "Over-ear wireless headphones with noise cancellation",
    "150",
    4,
    "https://static.independent.co.uk/2021/06/21/15/Bose%20NC%20700%20Headphones.jpeg"
  ),
  new Product(
    7,
    "Men's Casual Shirt",
    "Cotton casual shirt for men, available in various colors and sizes",
    "40",
    5,
    "https://img.freepik.com/free-photo/business-casual-shirt-white-closeup-outdoor-photoshoot_53876-119744.jpg?size=626&ext=jpg"
  ),
  new Product(
    8,
    "Women's Floral Dress",
    "Elegant floral dress for women, perfect for special occasions",
    "60",
    6,
    "https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3N8ZW58MHx8MHx8fDA="
  ),
  new Product(
    9,
    "Mobile Phone",
    "Latest mobile phone with advanced features and high-resolution camera",
    "800",
    7,
    "https://m.media-amazon.com/images/I/51NPFoz5cOS.jpg"
  ),
  new Product(
    10,
    "Bluetooth Earbuds",
    "Wireless Bluetooth earbuds with long battery life and compact design",
    "50",
    4,
    "https://m.media-amazon.com/images/I/61autD8TAxL.jpg"
  ),
  new Product(
    11,
    "Backpack",
    "Durable and stylish backpack with multiple compartments for storage",
    "35",
    2,
    "https://media.istockphoto.com/id/820482470/photo/backpack.jpg?s=612x612&w=0&k=20&c=iUP2CSdHYco7zt56iecRphEn4FiXLDrtd4B9wiyAIT8="
  ),
  new Product(
    12,
    "Smart Watch",
    "Fitness and health tracking smartwatch with a vibrant display",
    "120",
    3,
    "https://media.gettyimages.com/id/481616102/photo/apple-watch-sport.jpg?s=612x612&w=0&k=20&c=uJuuSi9jiwjhAm8lehYQTskuPkrQOJSM9rBrbpn-zQw="
  ),
  new Product(
    13,
    "Sunglasses",
    "Fashionable sunglasses with UV protection, available in various styles",
    "25",
    5,
    "https://media.istockphoto.com/id/1081398784/photo/sunglass-on-white-background.jpg?s=612x612&w=0&k=20&c=3gwUtbgJcRcjB3U60IpRhGNYFSNVYK6QfgrlhVVgK9w="
  ),
  new Product(
    14,
    "Desk Organizer",
    "Organize your workspace with a multifunctional desk organizer",
    "20",
    1,
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1626723225-41ryNx8BigL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
  ),
  new Product(
    15,
    "Portable Speaker",
    "Compact and powerful portable speaker for on-the-go music",
    "70",
    1,
    "https://images-na.ssl-images-amazon.com/images/I/71xv8DjjpRL.jpg"
  ),
  new Product(
    16,
    "Digital Camera",
    "Capture stunning moments with a high-resolution digital camera",
    "450",
    7,
    "https://s.studiobinder.com/wp-content/uploads/2018/11/Best-Digital-Camera-Best-Camera-for-Video-Types-of-Camera-Professional-Digital-Camera-Canon-EOS-C200B.jpg?resolution=1366,1"
  ),
  new Product(
    17,
    "Air Purifier",
    "Improve indoor air quality with a modern air purifier",
    "100",
    1,
    "https://media.istockphoto.com/id/1437264927/photo/air-purifier-in-living-room-dust-protection.jpg?s=612x612&w=0&k=20&c=c06KndUpKEz3EByPIO8kxGdqI1cMOHRbAwF-juzh-co="
  ),
];
