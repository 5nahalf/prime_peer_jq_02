$(document).ready(function(){
$(".btn").on("click", function(){
	House();
	$("#ourList").prepend("<div class='row' id='row1'><div class='floatCell'><a href=" + propId + ".html>Property ID: " + propId + "</a></div><div class='floatCell'>" + sqFoot + " Sq Ft.</div><div class='floatCell'>$" + pricePF + " / sq foot</div><div class='floatCell'> <button class='removeButton'>Remove</div></div>");
	});
		$("#ourList").on("click",".removeButton", function(){
		$(this).parent().parent().slideUp("slow", function(){
			$(this).remove();
	});
		});
});

function House(propId, sqFoot, pricePF){
	this.propId = randomNumber(1000, 9999);
	this.sqFoot = randomNumber(1000, 2000);
	this.pricePF = randomNumber(1, 100);

}



//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


