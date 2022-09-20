<!--xavier scott-->
<!DOCTYPE html>
<html lang="en">

<!doctype html><html><head><style type="text/css">body {
  height: 100%;
  width: 100%;
  background-color: #333;
}

#countdown {
  position: relative;
  margin: auto;
  margin-top: 100px;
  height: 40px;
  width: 40px;
  text-align: center;
}

#countdown-number {
  color: white;
  display: inline-block;
  line-height: 40px;
}

svg {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  transform: rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
  stroke-dasharray: 113px;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 2px;
  stroke: white;
  fill: none;
  animation: countdown 10s linear infinite forwards;
}

@keyframes countdown {
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 113px;
  }
}</style></head><body><!--xavier scott-->
<!DOCTYPE html>
<html lang="en">

<head>
	<SCRIPT>
		alert("bad wolf");
	</SCRIPT>
	<!-- ^^^/SCRIPT makes an alert^^^-->
	<title>UAT Space Program</title>
	<meta charset="UTF-8">
	<style>
		.div-1 {
			width: 60%;
			height: 60%;
		}

		.alert {
			padding: 50
      px;
			background-color: #9e0303;
			/* Red */
			color: white;
			margin-bottom: 15px;
	</style>
</head>

<body>

	<div class="div-1">
		<img src="https://praterma2-2.github.io/UATspaceLogo-2.jpg" alt= UATspaceLogo/>
	
		<h1>UAT Space Program</h1>
		<div class="alert">
			<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>

			i am the bad wolf, i create myself
			i take the words, i scatter them in time and space, a message to lead myself here
			
			<!-- ^^^ This is another form of an alert-->

		<p>

			Welcome!
		</p>
</body>
	</div>
	<div id="countdown">
		<div id="countdown-number"></div>
		<svg>
			<circle r="20" cx="20" cy="20"></circle>
		</svg>
	</div>
</html><script type="text/javascript">var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 10;

countdownNumberEl.textContent = countdown;

setInterval(function () {
  countdown = --countdown <= 0 ? 10 : countdown;

  countdownNumberEl.textContent = countdown;
}, 1000);</script></body><html>
