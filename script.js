
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	next_fs.show();

	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {

			scale = 1 - (1 - now) * 0.2;

			left = (now * 50)+"%";

			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},

		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();

	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");


	previous_fs.show();

	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 0.8 + (1 - now) * 0.2;
			left = ((1-now) * 50)+"%";
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})


function goAdmin(){
  var user = document.getElementById('user1').value;
  var pass = document.getElementById('ps1').value;

  if(user == "admin" && pass == "admin123A!"){
    alert("welcome");
    return;
  }
  else {alert("error"); return;}
}


var pressed = {},
    audio = document.getElementById('audio'),
    output = document.getElementById('output'),
    maxValue = 2,
    duration,
    volume;

document.onkeydown = function (e) {
  if (pressed[e.which]) return;
  pressed[e.which] = e.timeStamp;
};

document.onkeyup = function (e) {
  if (!pressed[e.which]) return;


  if (e.keyCode === 65) {


    duration = (e.timeStamp - pressed[e.which]) / 1000;


    if (duration >= maxValue) {
      volume = 1;
    } else {
      volume = duration / maxValue;
    }

    audio.volume = volume;
    audio.play();

    pressed[e.which] = 0;


    return false;
  }
};
