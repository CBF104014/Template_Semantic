$(document).ready(() => {
	$('#body').load('HomePage.html');
});

function Loader(url) {
	$('#body').load(url);
}

function test() {
	alert('just test!');
}

var kv = new function (_key,_val) {
	this.Key = _key;
	this.Val = _val;
}

$('.ui.dropdown').dropdown();

