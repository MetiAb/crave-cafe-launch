export type MenuCategory =
  | "Starters"
  | "Pizza & Wraps"
  | "Pasta"
  | "Main Dish"
  | "Breakfast";

export interface MenuItem {
  name: string;
  price?: number;
  description?: string;
  category: MenuCategory;
  signature?: boolean;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  "Starters",
  "Pizza & Wraps",
  "Pasta",
  "Main Dish",
  "Breakfast",
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    name: "Crave Special Salad",
    price: 696,
    description: "Lettuce with feta cheese, fresh tomato, cucumber, avocado, grilled chicken",
    category: "Starters",
    signature: true,
  },
  {
    name: "Green Salad",
    price: 558,
    description: "Lettuce, tomato, cucumber, avocado with house dressing",
    category: "Starters",
  },
  {
    name: "Chicken Salad",
    price: 696,
    description: "Lettuce, fresh tomato, cucumber, avocado & chicken",
    category: "Starters",
  },
  {
    name: "Tuna Salad",
    price: 657,
    description: "Lettuce, fresh tomato, cucumber, avocado & tuna",
    category: "Starters",
  },
  {
    name: "Caprese Salad",
    price: 696,
    description: "Fresh tomato with mozzarella cheese",
    category: "Starters",
  },
  { name: "Avocado Toast", description: "Café favourite, served all day", category: "Starters" },
  { name: "Hummus", description: "Served with peta bread", category: "Starters" },

  // Pizza & Wraps
  {
    name: "Chicken Wrap",
    price: 671,
    description: "Chicken with caramelized onion and melted cheese, french fries",
    category: "Pizza & Wraps",
  },
  {
    name: "Philly Steak Wrap",
    price: 671,
    description: "Sliced beef with caramelized onion, melted cheese & french fries",
    category: "Pizza & Wraps",
  },
  {
    name: "Tuna Wrap",
    price: 660,
    description: "Tuna chunks with caramelized onion & melted cheese",
    category: "Pizza & Wraps",
  },
  {
    name: "Vegetable Wrap",
    price: 499,
    description: "Seasonal vegetables with house spice & french fries",
    category: "Pizza & Wraps",
  },
  {
    name: "Pizza Margherita",
    price: 745,
    description: "Tomato & mixed cheese",
    category: "Pizza & Wraps",
  },
  {
    name: "Beef Pizza",
    price: 766,
    description: "Margherita sauce, beef chunks & mixed cheese",
    category: "Pizza & Wraps",
  },
  {
    name: "Chicken Pizza",
    price: 766,
    description: "Chicken, margherita sauce & mixed cheese",
    category: "Pizza & Wraps",
  },
  {
    name: "Crave Special Pizza",
    price: 835,
    description: "Beef & chicken with margherita sauce & mixed cheese",
    category: "Pizza & Wraps",
    signature: true,
  },
  {
    name: "Fasting Vegetable Pizza",
    price: 630,
    description: "Seasonal vegetables, margherita sauce, fasting",
    category: "Pizza & Wraps",
  },
  {
    name: "Fasting Tuna Pizza",
    price: 714,
    description: "Tuna with margherita sauce",
    category: "Pizza & Wraps",
  },
  {
    name: "Tuna Pizza with Cheese",
    price: 766,
    description: "Tuna with margherita sauce & mixed cheese",
    category: "Pizza & Wraps",
  },
  { name: "Cheese Toast", description: "Fast food counter classic", category: "Pizza & Wraps" },
  { name: "Tuna Sandwich", description: "Fast food counter classic", category: "Pizza & Wraps" },

  // Pasta
  {
    name: "Vegetable Spaghetti",
    price: 660,
    description: "Spaghetti with tomato, vegetables & cream sauce",
    category: "Pasta",
  },
  {
    name: "Spaghetti Bolognese",
    price: 705,
    description: "Spaghetti or penne with our meat & cream sauce",
    category: "Pasta",
  },
  {
    name: "Penne Arrabbiata",
    price: 646,
    description: "Spaghetti or penne with tomato & hot spice sauce",
    category: "Pasta",
  },
  {
    name: "Chicken Pesto",
    price: 744,
    description: "Spaghetti or penne, chicken & fresh pesto with cream",
    category: "Pasta",
    signature: true,
  },
  {
    name: "Fasting Pesto",
    price: 696,
    description: "Fresh pesto with fasting sauce, spaghetti or penne",
    category: "Pasta",
  },
  {
    name: "Spaghetti with Tuna",
    price: 756,
    description: "Spaghetti with tuna & tomato sauce",
    category: "Pasta",
  },
  {
    name: "Spaghetti Zaffaron",
    price: 705,
    description: "Saffron sauce with cream",
    category: "Pasta",
  },
  { name: "Fasting Zaffaron", price: 660, description: "Saffron sauce", category: "Pasta" },
  {
    name: "Beef Ravioli",
    price: 804,
    description: "Heart shaped pasta stuffed with meat, served with meat & cream sauce",
    category: "Pasta",
  },
  {
    name: "Tortellini",
    price: 804,
    description: "Flower shaped pasta stuffed with ricotta & spinach, cream sauce",
    category: "Pasta",
  },
  {
    name: "Fettuccine Alfredo",
    price: 820,
    description: "Served with cream, chicken & parmesan cheese",
    category: "Pasta",
  },
  {
    name: "Tagliatelle Bolognese",
    price: 804,
    description: "Tagliatelle with meat & cream sauce",
    category: "Pasta",
  },
  {
    name: "Tagliatelle Chicken Pesto",
    price: 846,
    description: "Freshly made pasta, chicken & cream sauce",
    category: "Pasta",
  },
  {
    name: "Lasagna",
    price: 894,
    description: "Layers of pasta & beef with cream cheese & meat sauce",
    category: "Pasta",
    signature: true,
  },

  // Main Dish
  {
    name: "Pepper Steak",
    price: 981,
    description: "Pepper steak with cream, potatoes or vegetables",
    category: "Main Dish",
  },
  {
    name: "Atlanta Style Filet Mignonet",
    price: 1102,
    description: "Slice cut beef with house made gravy, mashed potatoes or vegetables",
    category: "Main Dish",
    signature: true,
  },
  {
    name: "Beef Cutlets",
    price: 866,
    description: "Coated beef, fried, with french fries",
    category: "Main Dish",
  },
  {
    name: "Beef Kebab",
    price: 781,
    description: "Cube beef skewered with vegetables, served with rice",
    category: "Main Dish",
  },
  {
    name: "Roasted Lamb",
    price: 1095,
    description: "Three pieces of roasted lamb with vegetables & rice",
    category: "Main Dish",
  },
  {
    name: "Farmers Wife Steak",
    price: 924,
    description: "Steak with tagliatelle & cream sauce",
    category: "Main Dish",
  },
  {
    name: "Chicken Kebab",
    price: 781,
    description: "Cube chicken marinated with yoghurt & house spices, skewered with vegetables",
    category: "Main Dish",
  },
  {
    name: "Chicken Wings",
    price: 765,
    description: "Choice of buffalo, barbecue or honey barbecue",
    category: "Main Dish",
  },
  {
    name: "Chicken Scallops",
    price: 865,
    description: "Scallop chicken with cream & barbecue",
    category: "Main Dish",
  },
  {
    name: "Grilled Chicken with Pesto",
    price: 896,
    description: "Grilled chicken served with spaghetti pesto",
    category: "Main Dish",
    signature: true,
  },
  {
    name: "Grilled Fish",
    price: 1190,
    description: "Baked marinated fish with green pepper",
    category: "Main Dish",
  },
  {
    name: "Fish Goulash",
    price: 1047,
    description: "Cubed fish with tomato sauce & spice",
    category: "Main Dish",
  },
  {
    name: "Fish Cutlet",
    price: 1047,
    description: "Fish cutlet served with french fries",
    category: "Main Dish",
  },
  {
    name: "Chicken Cutlets",
    price: 866,
    description: "Chicken cutlet served with french fries",
    category: "Main Dish",
  },

  // Breakfast
  { name: "Sunny Side Up Steak", price: 725, category: "Breakfast" },
  {
    name: "Chicken and Waffles",
    price: 799,
    description: "Served with hot syrup",
    category: "Breakfast",
    signature: true,
  },
  {
    name: "Classic French Toast",
    price: 530,
    description: "Served with hot syrup",
    category: "Breakfast",
  },
  { name: "Classic Omelette", price: 490, category: "Breakfast" },
  { name: "Omelette with Cheese", price: 567, category: "Breakfast" },
  { name: "Scrambled Eggs", price: 548, category: "Breakfast" },
  { name: "Fetira with Eggs", price: 510, category: "Breakfast" },
  { name: "Egg Sandwich", price: 486, category: "Breakfast" },
  { name: "Classic Oats Meal", price: 462, description: "With milk", category: "Breakfast" },
  { name: "Fasting Oats Meal", price: 667, category: "Breakfast" },
  { name: "Yoghurt Bowl", price: 395, category: "Breakfast" },
  { name: "Mulawha with Fresh Honey", price: 443, category: "Breakfast" },
  { name: "Mulawha with Dates", price: 490, category: "Breakfast" },
  { name: "Special Ful Plate", price: 500, category: "Breakfast" },
  { name: "Classic Ful", price: 443, description: "Served with peta bread", category: "Breakfast" },
  {
    name: "Arabian Delight",
    description: "Fetira with dates, fried eggs & ful. For two, served with peta bread",
    category: "Breakfast",
  },
  {
    name: "American Classic",
    description: "Omelette & beef sausage for two, with toasted bread, jam & butter",
    category: "Breakfast",
  },
  {
    name: "Pancakes",
    description: "For two, served with toasted bread, jam & butter",
    category: "Breakfast",
  },
];

export const RESTAURANT = {
  name: "Crave Cafe & Restaurant",
  instagram: "@crave_cafeandrestaurant",
  instagramHref: "https://www.instagram.com/crave_cafeandrestaurant?igsi=MXJ1ZDh3OHIwaXpzaQ==",
  phone: "090 536 3336",
  phoneHref: "tel:+251905363336",
  phoneAlt: "+251 11 557 4853",
  phoneAltHref: "tel:+251115574853",

  email: "metiabera24@gmail.com",
  address: "Gabon St, Addis Ababa",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Crave+Cafe+%26+Restaurant+Gabon+St+Addis+Ababa",
  hours: "Open daily · Closes 10:00 PM",
  rating: 4.3,
  reviews: 195,
};
