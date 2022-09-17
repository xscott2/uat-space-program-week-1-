<html>
<head>
<title>(this is week 2's assignment)</title>
<script type="text/javascript"> 
function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}
// comment display date
function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();
 }
</script>
</head>

<body onload=display_ct();>
<span id='ct' ></span>

</body>
</html>
