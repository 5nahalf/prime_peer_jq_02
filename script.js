

$(document).ready(function(){
	$(".btn").on("click", function(){
		var propId = randomNumber(1000, 9999);
		var sqFoot = randomNumber(1000, 2000);
		var pricePF = randomNumber(1, 100);

		var house = new House(propId, sqFoot, pricePF);
		$("#ourList").prepend("<div class='row' id=" + house.propId + "><div class='floatCell'><a href=" + house.propId + ".html>Property ID: " + house.propId + "</a></div><div class='floatCell'>" + house.sqFoot + " Sq Ft.</div><div class='floatCell'>$" + house.pricePF + " / sq foot</div><div class='floatCell'> <button class='removeButton'>Remove</div></div>");
	
		var el = $("#ourList").children().first();
		el.hide().slideDown();

	});
		
	$("#ourList").on("click",".removeButton", function(){
		$(this).parent().parent().slideUp("slow", function(){
			$(this).remove();
		});
	});	
});
	$(document).mousemove(function(e){
    	$(".btn").css({
       	left: e.pageX, top: e.pageY
    });

});

function House(propId, sqFoot, pricePF){
	this.propId = propId;
	this.sqFoot = sqFoot;
	this.pricePF = pricePF;

}
		$(document).keypress(function(){
    		$(".btn").empty().prepend("<img src='http://media.giphy.com/media/5ftsmLIqktHQA/giphy.gif'><audio controls autoplay><source src='ned.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
    	});



//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
