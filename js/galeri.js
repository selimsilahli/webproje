document.addEventListener('DOMContentLoaded', function() { // HTML içeriği yüklendikten sonra fonksiyonu çalıştır.
  var modal = document.getElementById("imageModal"); // Modal penceresini ID ile seç.
  var modalImg = document.getElementById("img-buyuk"); // Modal içindeki büyük görsel elementini seç.
  var captionText = document.getElementById("caption"); // Görsel alt yazı alanını seç.
  var links = document.querySelectorAll(".img-link"); // '.img-link' sınıfına sahip tüm görsel linklerini seç.
  var span = document.getElementsByClassName("close")[0]; // 'close' sınıfına sahip kapatma butonunu seç.

  links.forEach(function(link) { // Seçilen her bir link için döngü başlat.
    link.onclick = function(event) { // Linke tıklandığında çalışacak fonksiyonu tanımla.
      event.preventDefault(); // Varsayılan link davranışını (hedefe gitmeyi) engelle.
      
      modal.style.display = "block"; // Modalı görünür yap.
      
      var imageSrc = this.getAttribute('data-src'); // Tıklanan linkteki tam boyutlu görsel yolunu (data-src) al.
      var imageAlt = this.getAttribute('data-alt'); // Tıklanan linkteki alt yazıyı (data-alt) al.
      
      modalImg.src = imageSrc; // Modal görselinin kaynağını (src) tam boyutlu görsel yoluyla değiştir.
captionText.innerHTML = imageAlt; // Modal alt yazı alanını alınan metinle doldur.
}
});
 span.onclick = function() { // Kapatma butonuna tıklandığında çalışacak fonksiyonu tanımla.
 modal.style.display = "none"; // Modalı gizle.
}

window.onclick = function(event) { // Pencerenin herhangi bir yerine tıklandığında çalışacak fonksiyonu tanımla.
if (event.target == modal) { // Tıklanan hedefin modalın kendisi (arka planı) olup olmadığını kontrol et.
modal.style.display = "none"; // Eğer arka plana tıklandıysa, modalı gizle.
}
}
});