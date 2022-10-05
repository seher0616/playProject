// 1-100 arasında bir sayı tut.
const randomNumber = Math.floor(Math.random()*100); //random olunco 100 floor olunca +1
console.log(randomNumber);


// varables
let score = 10;
let topScore = 0;




// ChecBtn basildiğinda kontrollari yap.

document.querySelector(".check-btn").addEventListener("click", () =>{ // iki paremetre var olaya var on kalkıyor diğeri fonksiyon
    const guesInput = Number(document.querySelector(".guess-input").value);
console.log(guesInput);
const msg = querySelector(".msg");

//eger input girilmediysekullanıcıya uyari ver.
if(!guesInput) {
    msg.İnnerText = "Please enter a number" //3 yöntemi var
}
//! eger rastgele == input.value
else if(randomNumber===guessInput){
    msg.İnnerText = "Congrats You Win <i class= `fa-solid fa-face-grin-hearts fa-2x`></i>" 
    document.querySelector("body").style.background = "yellow";
}                                            //yeni bi içerik oluştururken herşeyi html olarak kullanmak daha mantıklı
if(score > topScore){
    topScore = score;
    document.querySelector(".top-score").textContent = topScore // seçilen rakamaları document etmek için
}

document.querySelector(".secret-number").textContent = randomNumber //bilgisayarın tuttuğu sayıyısı o kutucukta yazdır 
 } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});



//tebrikler bildiniz.
//background = green
// eger score > topScore
// secret_number = gorunur.

//! degilse
//! eger scrore>0
//! score = score -1
// eger rastgele < input.value
// AZALT
//degilse
//ARTTIR
//! değilse
//üzgünüz kaybettiniz
