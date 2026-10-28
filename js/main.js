(function () {
  var t = document.getElementById('mob-toggle');
  var d = document.getElementById('mob-drawer');
  var o = document.getElementById('mob-overlay');
  var c = document.getElementById('drawer-close');
  function openDrawer() {
    d.removeAttribute('hidden');
    o.classList.add('visible');
    t.setAttribute('aria-expanded', 'true');
    t.setAttribute('aria-label', 'Close navigation menu');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeDrawer() {
    d.setAttribute('hidden', '');
    o.classList.remove('visible');
    t.setAttribute('aria-expanded', 'false');
    t.setAttribute('aria-label', 'Open navigation menu');
    document.documentElement.style.overflow = '';
  }
  if (t && d && o) {
    t.addEventListener('click', function () {
      if (t.getAttribute('aria-expanded') === 'true') { closeDrawer(); } else { openDrawer(); }
    });
    if (c) { c.addEventListener('click', closeDrawer); }
    o.addEventListener('click', closeDrawer);
    var links = d.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) { links[i].addEventListener('click', closeDrawer); }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeDrawer(); } });
    var mq = window.matchMedia('(min-width: 901px)');
    var onMq = function () { if (mq.matches) { closeDrawer(); } };
    if (mq.addEventListener) { mq.addEventListener('change', onMq); }
  }
  var qs = document.querySelectorAll('.faq-q');
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener('click', function () {
      var item = this.parentNode;
      var open = item.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
