
import React from "react";
import Photo1 from "../images/acun.png";
import Photo2 from "../images/hullcity.png";
import Photo3 from "../images/ece-pulas.png";
import Photo4 from "../images/halilbedir.png";
import Photo5 from "../images/afsar-akal.png";

const Content = () => {
  return (
    <div className='content'>
            <h1 className='mb-0 pb-1 basinda '>Basında Biz</h1>
            <h3 className='mb-0 content-subtitle mt-1'>Tomya'yla Geçmişten Geleceğe Tüm Haberler</h3>
            <div className='mt-5'>
                <div className='d-flex flex-column haber-foto'>
                    <h5>Acun Ilıcalı'nın takımı Hull City'e Türk kripto para borsası sponsor oldu</h5>
                    <img src={Photo1} alt="Photo" className='shadow rounded mt-3' />
                    <a href="https://www.ntv.com.tr/ekonomi/acun-ilicalinin-takimi-hull-citye-turk-kripto-para-borsasi-sponsor-oldu,CBhWWEMGu0aWXMIzJp4xNw" target="_blank" className='photo-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column haber-foto mt-5'>
                    <h5>Tomya borsası Hull City formasına sponsor oldu</h5>
                    <img src={Photo2} alt="Photo" className='shadow rounded mt-3' />
                    <a href="https://www.donanimhaber.com/tomya-borsasindan-surpriz--150541" target="_blank" className='photo-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column haber-foto mt-5'>
                    <h5>Ece Pulaş'a yeni görev</h5>
                    <img src={Photo3} alt="Photo" className='shadow rounded mt-3' />
                    <a href="http://www.gazeteekonomi.com/ekonomi-finans/ece-pulas-a-yeni-gorev-h585590.html" target="_blank" className='photo-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column haber-foto mt-5'>
                    <h5>Tomya'nın yeni Genel Müdür Yardımcısı Ece Pulaş oldu</h5>
                    <img src={Photo3} alt="Photo" className='shadow rounded mt-3' />
                    <a href="https://www.dunya.com/sirketler/tomyanin-yeni-genel-mudur-yardimcisi-ece-pulas-oldu-haberi-663211" target="_blank" className='photo-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column haber-foto mt-5'>
                    <h5>Kripto borsası TOMYA: "Yatırımcıların platform seçerken dikkatli olması gerekiyor"</h5>
                    <img src={Photo4} alt="Photo" className='shadow rounded mt-3' />
                    <a href="https://www.ntv.com.tr/ekonomi/kripto-borsasi-tomya-yatirimcilarin-platform-secerken-dikkatli-olmasi-gerekiyor,WgLFz9vpd0iqrHIcJ45uIQ" target="_blank" className='photo-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column haber-foto mt-5'>
                    <h5>Tomya CEO’su Afşar Akal: Kesintisiz hizmet sunmayı ilke edindik</h5>
                    <img src={Photo5} alt="Photo" className='shadow rounded mt-3' />
                    <a href="https://uzmancoin.com/kripto-para-tomya-afsar-akal/" target="_blank" className='photo-link mt-4'>Haberin Devamı</a>
                </div>
            </div>
        </div>
  );
};

export default Content;
