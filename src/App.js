import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import DetailsThumb from "./components/Details";

const App = () => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "IPhone",
      src: [
        "https://images.unsplash.com/photo-1606564268183-e35f0298f524",
        "https://images.unsplash.com/photo-1558562805-4bf1e2a724eb",
        "https://images.unsplash.com/photo-1600333862399-d95f00e08bd3",
        "https://images.unsplash.com/photo-1603816245457-fe9c80b740ff",
      ],
      description:
        "iPhone 12 Pro Max 6.7 inç Super Retina XDR ekran1 iPhone 12 Pro 6.1 inç",
      content:
        "Tüm akıllı telefon çiplerine açık ara fark atan A14 Bionic. Loş ışıkta çekilen fotoğrafları ileri bir seviyeye taşıyan Pro kamera sistemi. Bu seviyeyi zirve noktasına çıkaran iPhone 12 Pro Max. Ve düşmelere karşı dört kat daha iyi performans sunan Ceramic Shield. Gelin, tüm yeniliklere birlikte göz atalım.",
      price: 7000,
    },
  ]);
  const [index, setIndex] = useState(0);

  const myRef = useRef();

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    myRef.current.children[index].className = "active";
  });

  return (
    <div className="app">
      {products.map((i) => (
        <div className="details" key={i._id}>
          <div className="big-img">
            <img src={i.src[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{i.title}</h2>
              <span>₺{i.price}</span>
            </div>

            <p>{i.description}</p>
            <p>{i.content}</p>

            <DetailsThumb images={i.src} tab={handleTab} myRef={myRef} />
            <button className="cart">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
