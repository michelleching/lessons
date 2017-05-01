$(document).ready(function() {
	audio1 = new Audio('audio/track1.mp3');
	audio1.volume = 0.2;
	audio1.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);


	audio2 = new Audio('audio/track2.mp3');
	audio2.volume = 0.45;
	audio2.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	$('#poeme1').hide();
	$('#poeme2').hide();
	$('#poeme3').hide();

	$('#aube').click(function() {
		$('#pics').hide();
		$('#poeme1').show();
		audio1.play();

		$('#poeme1').click(function() {
			audio1.pause();
			audio2.pause();
			// audio3.pause();
			$('#poeme1').hide();
			$('#poeme2').hide();
			// $('#poeme3').hide();
			$('#pics').show();
			sound = false;
		});
	});

	$('#route').click(function() {
		$('#pics').hide();
		$('#poeme2').show();
		audio2.play();

		$('#poeme2').click(function() {
			audio1.pause();
			audio2.pause();
			// audio3.pause();
			$('#poeme1').hide();
			$('#poeme2').hide();
			// $('#poeme3').hide();
			$('#pics').show();
			sound = false;
		});

	});

	$('#nuit').click(function() {
		$('#pics').hide();
		$('#poeme3').show();
		audio3.play();
		$('#poeme3').click(function() {
			audio1.pause();
			audio2.pause();
			// audio3.pause();
			$('#poeme1').hide();
			$('#poeme2').hide();
			// $('#poeme3').hide();
			$('#pics').show();
			sound = false;
		});
	});
});