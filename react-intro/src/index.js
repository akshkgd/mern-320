import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FoodItem from './components/Demo';
const items = [
  {
    title: "Biryani",
    desc: "Aromatic rice dish with tender vegetables, fragrant spices.",
    img: "Biryani",
    ratings: 4.0,
    votes: 1200,
    pricing: 350
  },
  {
    title: "Butter Paneer",
    desc: "Creamy tomato-based curry with soft paneer cubes.",
    img: "curry",
    ratings: 4.5,
    votes: 850,
    pricing: 250
  },
  {
    title: "Supreme Pizza",
    desc: "Grilled cottage cheese marinated in spicy yogurt and Indian spices.",
    img: "Pizza",
    ratings: 4.2,
    votes: 650,
    pricing: 400
  },
  {
    title: "Masala Dosa",
    desc: "Thin, crispy crepe filled with spiced potato filling, served with chutney.",
    img: "dosa",
    ratings: 3.9,
    votes: 950,
    pricing: 250
  },
  {
    title: "Green Sald",
    desc: "Fluffy fried bread served with spicy chickpea curry and pickles.",
    img: "salad",
    ratings: 4.4,
    votes: 720,
    pricing: 300
  },
  {
    title: "Aloo Paratha",
    desc: "Stuffed Indian flatbread with spiced mashed potatoes.",
    img: "Paratha",
    ratings: 4.2,
    votes: 580,
    pricing: 120
  },
  {
    title: "Grilled Sandwitch",
    desc: "Crispy hollow balls filled with spicy tamarind water and potatoes.",
    img: "sandwitch",
    ratings: 4.9,
    votes: 1100,
    pricing: 60
  },
  {
    title: "Gulab Jamun",
    desc: "Soft, sweet milk dumplings soaked in fragrant sugar syrup.",
    img: "GulabJamun",
    ratings: 4.6,
    votes: 980,
    pricing: 80
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
   {
    items.map((item)=>{
       return <FoodItem pricing={item.pricing} ratings={item.ratings} title={item.title} desc={item.desc} img={item.img} />
    })
   }
   </div>
    
    // <App />
);


reportWebVitals();
