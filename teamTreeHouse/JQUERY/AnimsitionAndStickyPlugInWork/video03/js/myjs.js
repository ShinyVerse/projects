$(".animsition").animsition({
  inClass: 'flip-in-x',
  outClass: 'flip-out-y',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});


$('header').on('sticky-start', function() {
  $('.description').html('We build <strong>great</strong> apps');
});

$('header').on('sticky-end', function() {
  $('.description').html('We build apps');
})

$('#wantUsToWork').sticky({
  topSpacing:64,
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('#wantUsToWork').on('sticky-start', function() {
  $(this).append(' <a href="mailto:email@example.com" class="email-text">Email&nbsp;us</a>')
});

$('#wantUsToWork').on('sticky-end', function() {
  $('.email-text').remove();
})
