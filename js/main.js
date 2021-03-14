window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function ROStart( type, element )
{
	window.open( 'http://demo.robrowser.com/?demo/2.7/', '_self', [
		'directories=0',
		'fullscreen=0',
		'top='  + ( (window.innerHeight||document.body.clientHeight)-600) / 2,
		'left=' + ( (window.innerWidth ||document.body.clientWidth) -800) / 2,
		'height='+ 600,
		'width=' + 800,
		'location=0',
		'menubar=0',
		'resizable=0',
		'scrollbars=0',
		'status=0',
		'toolbar=0'
	].join(','));
}

