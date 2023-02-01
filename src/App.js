/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React from "react";
import { useState } from "react";
import Gönderiler from "./bileşenler/Gönderiler/Gönderiler";
import AramaÇubuğu from "./bileşenler/AramaÇubuğu/AramaÇubuğu";
import sahteVeri from "./sahte-veri";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import Gönderi from "./bileşenler/Gönderiler/Gönderi";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [arama, setArama] = useState("");
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

  const gonderiyiBegen = (gonderiID) => {
    let yeniGönderiler = [...gonderiler];
    let ArananID = yeniGönderiler.find((item) => item.id === gonderiID);
    ArananID.likes = ArananID.likes + 1;
    setGonderiler(yeniGönderiler);
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
  };
  console.log("ne yazdı", arama);
  return (
    <div className="App">
      <AramaÇubuğu arama={arama} arama2={setArama}>
        {" "}
      </AramaÇubuğu>
      <Gönderiler
        gonderiler={gonderiler}
        gonderiyiBegen={gonderiyiBegen}
      ></Gönderiler>
    </div>
  );
};

export default App;
