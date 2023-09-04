const express = require("express");
const cors = require("cors");
var cookieparser = require('cookie-parser');

const app = express();


var corsOptions = {
  credentials: true,
  origin: "https://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const db = require("./app/models");
const url = "https://drive.google.com/uc?export=view&id=";
const Product = db.product; //для проверки
const Compound = db.compound; //для проверки
const Brand = db.brand; //для проверки
const Type = db.type; //для проверки
const User = db.user; //для проверки
const Basket = db.basket;
const History = db.history;
const Review = db.review;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
function initial() {
  User.create({
    id: 1,
    username: "misha.panteleev@inbox.ru",
    role: "ADMIN",
    email: "misha.panteleev@inbox.ru",
    password: "1234"
  });
  Brand.create({  
    id:1,  
    name:"Rex",
    img:url+"1FRn87iMuMX1fvkvtPyEZqOiJK-s9Rz4u"
  });
  Brand.create({    
    id:2,  
    name:"STN",
    img: url+"1E7bECDDehLEWVsSKSpn0lQxqell5x38L"
  });
  Type.create({  
    id:1,  
    name:"снеки",
    img:url+"1FRn87iMuMX1fvkvtPyEZqOiJK-s9Rz4u"
  });
  Type.create({    
    id:2,  
    name:"Л-Карнитин",
    img: url+"1E7bECDDehLEWVsSKSpn0lQxqell5x38L"
  });
    Product.create({
      id:1,
      name:"Печенье ProteinRex с высоким содержанием протеина «Кокосовое»",       
      info: "Протеиновое печенье",
      cost: 4.10,
      type: "снеки",
      quantity: 1,
      brand: "Rex",
      amount_in_package: 1,
      number_of_servings: 1,      
      img:url+"13wJPE_5NOB6JFLOkJKgoZIeTQ9GARrDQ"
    });
    Product.create({
      id:2,
      name:"Печенье ProteinRex с высоким содержанием протеина «Миндаль-лимон»",       
      info: "Протеиновое печенье",
      cost: 4.10,
      type: "снеки",
      quantity: 1,
      brand: "Rex",
      amount_in_package: 1,
      number_of_servings: 1,      
      img:url+"1FRn87iMuMX1fvkvtPyEZqOiJK-s9Rz4u"
    });
    Product.create({
      id:3,
      name:"Печенье ProteinRex с высоким содержанием протеина «Арахис»",       
      info: "Протеиновое печенье",
      cost: 4.10,
      type: "снеки",
      quantity: 1,
      brand: "Rex",
      amount_in_package: 1,
      number_of_servings: 1,      
      img:url+"1bwuzbDOYRpXMmQYFjT_LNNdWRd_d95-2"
    });
    Product.create({
      id:4,
      name:"Печенье ProteinRex с высоким содержанием протеина «Вишня-шоколад»",       
      info: "Протеиновое печенье",
      cost: 4.10,
      type: "снеки",
      quantity: 1,
      brand: "Rex",
      amount_in_package: 1,
      number_of_servings: 1,      
      img:url+"1V8uWbDS-4qRx15ChNxEIIHb3RZ8Q4vME"
    });
    Product.create({
      id:5,
      name:"Напиток безалкогольный слабогазированный STN Л-Карнитин 1000 со вкусом персик ",       
      info: "Напиток богов",
      cost: 2.60,
      type: "Л-Карнитин",
      quantity: 1,
      brand: "STN",
      amount_in_package: 1000,
      number_of_servings: 1000,
      img: url+"1G-W_tpHyICc2qNNeGTjNc-Mgq4bJCh3A"
    });
    Product.create({
      id:6,
      name:"Напиток безалкогольный слабогазированный STN Л-Карнитин 1000 со вкусом зелёное яблоко",       
      info: "Напиток богов",
      cost: 2.60,
      type: "Л-Карнитин",
      quantity: 1,
      brand: "STN",
      amount_in_package: 1000,
      number_of_servings: 1000,
      img: url+"1QDHbezB1l6dQ89gQdB3-zd5hFDhW76HV"
    });
    Product.create({
      id:7,
      name:"Напиток безалкогольный слабогазированный STN Л-Карнитин 1000 со вкусом ананас ",       
      info: "Напиток богов",
      cost: 2.60,
      type: "Л-Карнитин",
      quantity: 1,
      brand: "STN",
      amount_in_package: 1000,
      number_of_servings: 1000,
      img:url+"11vpojJ1MjVWBezAo46tsAR2_xu8ZsQwh"
    });
    Product.create({
      id:8,
      name:"Напиток безалкогольный слабогазированный STN Л-Карнитин 1000 со вкусом апельсин",       
      info: "Напиток богов",
      cost: 2.60,
      type: "Л-Карнитин",
      quantity: 1,
      brand: "STN",
      amount_in_package: 1000,
      number_of_servings: 1000,
      img: url+ "1E7bECDDehLEWVsSKSpn0lQxqell5x38L"
    });
    Compound.create({
      id:1,
      name: "белки",
      quantity: 10,
      dimension:"гр",
      productId: 1
    });
    Compound.create({
      id:2,
      name: "углеводы",
      quantity: 10,
      dimension:"гр",
      productId: 1
    });
    Compound.create({
      id:3,
      name: "белки",
      quantity: 10,
      dimension:"гр",
      productId: 2
    });
    Compound.create({
      id:4,
      name: "углеводы",
      quantity: 10,
      dimension:"гр",
      productId: 2
    });
    Compound.create({
      id:5,
      name: "белки",
      quantity: 10,
      dimension:"гр",
      productId: 3
    });
    Compound.create({
      id:6,
      name: "углеводы",
      quantity: 10,
      dimension:"гр",
      productId: 3
    });
    Compound.create({
      id:7,
      name: "белки",
      quantity: 10,
      dimension:"гр",
      productId: 4
    });
    Compound.create({
      id:8,
      name: "углеводы",
      quantity: 10,
      dimension:"гр",
      productId: 4
    });
    Compound.create({
      id:9,
      name: "Л-карнитин",
      quantity: 1000,
      dimension:"мл",
      productId: 5
    });
    Compound.create({
      id:10,
      name: "Л-карнитин",
      quantity: 1000,
      dimension:"мл",
      productId: 6
    });
    Compound.create({
      id:11,
      name: "Л-карнитин",
      quantity: 1000,
      dimension:"мл",
      productId: 7
    });
    Compound.create({
      id:12,
      name: "Л-карнитин",
      quantity: 1000,
      dimension:"мл",
      productId: 8
    });
    Basket.create({
      id:1,
      quantity:1,
      userId:1,
      productId:1,
    });
    Basket.create({
      id:2,
      quantity:1,
      userId:1,
      productId:2,
    });
    Basket.create({
      id:3,
      quantity:1,
      userId:1,
      productId:4,
    });
    Basket.create({
      id:4,
      quantity:1,
      userId:1,
      productId:5,
    });
    History.create({
      id:1,
      quantity:1,
      userId:1,
      productId:5,
      cost:5,
    });
    History.create({
      id:2,
      quantity:1,
      userId:1,
      productId:5,
      cost:10,
    });
    Review.create({
      id:1,
      productId:1,
      userId:1,
      maek:4,
      text:"Не плохо, есть можно",
    });
    Review.create({
      id:2,
      productId:1,
      userId:1,
      maek:4,
      text:"Плохо, есть можно",
    });
}
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});