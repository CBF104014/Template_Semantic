$(document).ready(() => {
	$('#body').load('HomePage.html');
});

function Loader(url) {
	$('#body').load(url);
}

function test() {
	alert('just test!');
}

$('.ui.dropdown').dropdown();