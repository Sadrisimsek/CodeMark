function bolumHesapla(sayi) {
    const sayilar = Array.from(String(sayi), Number); 
    let a = 0;
  
    for (let i = 0; i < sayilar.length; i++) {
      if (sayi % sayilar[i] === 0) {
        a++;
      }
    }
  
    return a;
  }
  
  
  const sayilar = [8560, 6201, 10896, 67852, 126];
  
  for (let i = 0; i < sayilar.length; i++) {
    const sayi = sayilar[i];
    const sonuc = bolumHesapla(sayi);
    console.log(`Sayı: ${sayi} | Sonuç: ${sonuc}`);
  }