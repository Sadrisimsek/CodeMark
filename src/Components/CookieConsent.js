import React, { useState } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    // Kabul işlemi vs
  };

  if (!isVisible) {
    return null; // Kabul edince renderi kes
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "lightgray",
        padding: "1px",

        textAlign: "center",
        opacity: 0.7,
        fontSize: "13px",

        fontWeight: "bold",
      }}
    >
      <p>
        KVKK'nın Veri Sorumlusunun Aydınlatma Yükümlülüğü Başlıklı 10. Maddesi
        uyarınca, gizlilik politikasında belirtilen amaçlarla,{" "}
        <strong>kabul etmeniz dahilinde</strong>, sınırlı olarak mevzuata uygun
        çerezler (cookies) kullanılacaktır. {"   "} {"  "}
        <button className="btn-sm  kabulet btn" onClick={handleAccept}>
          Kabul Et
        </button>
      </p>
    </div>
  );
};

export default CookieConsent;
