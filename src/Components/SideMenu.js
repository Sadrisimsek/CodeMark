

import React from "react";

const SideMenu = () => {
  return (
    <>
      <ul className="list-unstyled side">
        {/* İçeriği görüntüleyeceğim sınırlama */}
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/sss">Sıkça Sorulan Sorular</a>
        </li>
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/kripto-hesaplayici">
            Kripto Hesaplayıcı
          </a>
        </li>
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/kripto-sozluk">Kripto Sözlük</a>
        </li>
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/basin" className="active">
            Basında Biz
          </a>
        </li>
        {/* İçeriği gizlediğim sınırlama*/}
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/duyurular">Duyurular</a>
        </li>
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/limitler">Limitler</a>
        </li>
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/para-yatirma-cekme">
            Para Yatırma ve Çekme Platformları
          </a>
        </li>
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/kara-para-aklamayi-onleme">
            Kara Para Aklamayı Önleme Politikası
          </a>
        </li>
        <li className="d-none d-lg-block">
          <a href="https://www.tomya.com/musterini-tani">
            Müşterini Tanı (KYC) Politikası
          </a>
        </li>
      </ul>
    </>
  );
};

export default SideMenu;
