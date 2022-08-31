import axios from "axios";
const catalog = [
  {
    _id: "1",
    title: "Apple",
    price: 13.05,
    category: "Fruit",
    image: "Apple.jpg",
    max: 10,
  },
  {
    _id: "2",
    title: "Switch",
    price: 345.05,
    category: "Console",
    image: "switch.jpg",
    max: 10,
  },
  {
    _id: "3",
    title: "Coke",
    price: 7.05,
    category: "Drinks",
    image: "coke.jpg",
    max: 10,
  },
  {
    _id: "4",
    title: "Grapes",
    price: 4.05,
    category: "Fruit",
    image: "Grape.jpg",
    max: 10,
  },
  {
    _id: "5",
    title: "Xbox Series X",
    price: 485.05,
    category: "Console",
    image: "XboxSX.jpg",
    max: 10,
  },
];

class DataService {
  async getCatalog() {
    //call the servers
    //get the list of items and return it
    let res = await axios.get("http://127.0.0.1:5000/api/catalog");
    //return res.data;

    return catalog;
  }

  async saveProduct(prod) {
    let res = await axios.post("http://127.0.0.1:5000/api/catalog", prod);
    return res.data;
  }
}

export default DataService;
