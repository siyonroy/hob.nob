import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description: "men collection",
    categoryImage:
      "https://images.unsplash.com/photo-1620122830785-a18b43585b44?q=80&w=1287&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description: "women collection",
    categoryImage:
      "https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?q=80&w=1364&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Kid",
    description: "kids collection",
    categoryImage:
      "https://images.unsplash.com/photo-1505377059067-e285a7bac49b?q=80&w=1176&auto=format&fit=crop&w=500&q=60",
  },
];
