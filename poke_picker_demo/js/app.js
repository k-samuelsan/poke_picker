var name = window.prompt("Enter your name: ");

alert('Welcome to the world of Pokemon, ' + name + '! Please choose your starter Pokemon by clicking a pokeball below.');

$('.welcome-text').text('Choose your Pokemon, ' + name + '.');

//bonus
var close = function(element) {
	element.removeClass('open');
	element.attr('src', 'img/poke_ball.png');
}

//default
var toggleLeft = function(event) {
	var element = $(event.target);
	if (element.hasClass('open')) {
		element.removeClass('open');
		element.attr('src', 'img/poke_ball.png');
	} else {
		element.attr('src', 'img/charmander.png');
		element.addClass('open');
		close($('.pokeball-middle'));
		close($('.pokeball-right'));
	}
}

var toggleMiddle = function(event) {
	var element = $(event.target);
	if (element.hasClass('open')) {
		element.removeClass('open');
		element.attr('src', 'img/poke_ball.png');
	} else {
		element.attr('src', 'img/squirtle.png');
		element.addClass('open');
		close($('.pokeball-left'));
		close($('.pokeball-right'));
	}
}

var toggleRight = function(event) {
	var element = $(event.target);
	if (element.hasClass('open')) {
		element.removeClass('open');
		element.attr('src', 'img/poke_ball.png');
	} else {
		element.attr('src', 'img/bulbasaur.png');
		element.addClass('open');
		close($('.pokeball-left'));
		close($('.pokeball-middle'));
	}
}

//extra bonus
var getPokemon = function(element) {
	if (element.hasClass('pokeball-left')) {
		return 'Charmander';
	} else if (element.hasClass('pokeball-middle')) {
		return 'Squirtle';
	} else if (element.hasClass('pokeball-right')) {
		return 'Bulbasaur';
	}
}

var lock = function() {
	$('.pokeball').unbind('click');
	$('.confirm').hide();
}

var choose = function(event) {
	var pokeballs = $('.pokeball');
	var pokemon = null;
	for (var i = 0; i < pokeballs.length; i++) {
		var pokeball = $(pokeballs[i]);
		if (pokeball.hasClass('open')) {
			pokemon = getPokemon(pokeball);
		}
	}
	if (pokemon && confirm('Are you sure you wish to choose ' + pokemon + '?')) {
		alert('Enjoy your adventures with ' + pokemon + '!');
		lock();
	} else {
		alert('You haven\'t chosen a pokemon yet!');
	}
}

$('.pokeball-left').click(toggleLeft);
$('.pokeball-middle').click(toggleMiddle);
$('.pokeball-right').click(toggleRight);
$('.confirm').click(choose)