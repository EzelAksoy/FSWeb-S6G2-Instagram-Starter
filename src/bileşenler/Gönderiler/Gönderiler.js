import React from "react";
import Gönderi from "./Gönderi";
import "./Gönderiler.css";

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((item) => (
        <Gönderi gonderiyiBegen={gonderiyiBegen} bilgi={item}></Gönderi>
      ))}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gönderiler;
