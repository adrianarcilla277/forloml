function showMessage() {
    document.getElementById('secretMessage').style.display = 'block';
  }
  
  function showVideo() {
    const container = document.getElementById('videoContainer');
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth' });
  }
  
  function showBouquet() {
    const bouquet = document.getElementById('bouquetContainer');
    bouquet.style.display = 'block';
    bouquet.scrollIntoView({ behavior: 'smooth' });
  }
  