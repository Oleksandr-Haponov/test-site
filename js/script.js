document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Дякуємо! Ми звʼяжемось із вами найближчим часом.');
    this.reset();
  });
