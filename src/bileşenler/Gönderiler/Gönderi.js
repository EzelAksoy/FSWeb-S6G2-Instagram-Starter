import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BeğenBölümü from "./BeğenBölümü";
import GönderiBaşlığı from "./GönderiBaşlığı";

const Gönderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { bilgi, gonderiyiBegen } = props;

  return (
    <div className="post-border">
      <GönderiBaşlığı
        username={bilgi.username}
        thumbnailUrl={bilgi.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={bilgi.imageUrl} />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BeğenBölümü
        gonderiyiBegen={() => gonderiyiBegen(bilgi.id)}
        begeniSayisi={bilgi.likes}
      />
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={bilgi.comments} />
    </div>
  );
};

export default Gönderi;
