$(".jumanji").click(function()
{
	$(".jumanjip").toggle(1000);
	$(".jumanjip").css("display","block")
})
$(".tombraider").click(function()
{
	$(".tombraiderp").toggle(1000);
	$(".tombraiderp").css("display","block")
})
$(".midsun").click(function()
{
	$(".midsunp").toggle(1000);
	$(".midsunp").css("display","block")
})
$(document).ready(function()
{
    $(".slide1").hover(function()
    {
        $(".slide1").css("transform","translate(200px,0)");
        $(".slide1").css("opacity", 1);
       

    });
});
$(document).ready(function()
{
    $(".slide2").hover(function()
    {
        $(".slide2").css("opacity", 1);
        $(".slide2").css("transform","translate(-200px,0)");
    });
});
$(document).ready(function()
{
    $(".slide3").hover(function()
    {
        $(".slide3").css("opacity", 1);
        $(".slide3").css("transform","translate(200px,0)");
    });
});
$("#close").click(function()
{
	$(".clearfix").css("display","none");
})
$("#ramp").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/ramp.jpg");
	$(".changeh3").html("When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago.<br>Runtime: 107 min<br> Genre minAdventure, Sci-Fi <br>Actors: Dwayne Johnson, Naomie Harris, Malin Akerman, Jeffrey Dean Morgan <br> Rating: Released: 2018 <br>Language: English, Spanish");
    $(".changeh1").html("RAMPAGE")
})  
$("#panther").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/panther.jpg");
	$(".changeh3").html("T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.<br>Runtime: 134 mi<br>Genre: Action, Adventure, Sci-F<br>Actors: Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurir<br>Rating:<br>Released: 201<br>Language: Swahili, Nama, English, Xhosa, Korea<br>");
	$(".changeh1").html("BLACK PANTHER")
})
$("#american").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/american.jpg");
	$(".changeh3").html("After the death of his girlfriend at the hands of Islamic terrorists, Mitch Rapp is drawn into the world of counter-terrorism, mentored by tough-as-nails former U.S. Navy SEAL Stan Hurley.<br>Runtime: 112 min<br>Genre:  Action, Thriller <br>Actors:  Dylan O'Brien, Charlotte Vega, Christopher Bomford, Chris Webster<br>Rating:***<br>Released: 2017<br>Language:English, Italian, Arabic, Polish, Turkish, Persian<br>");
	$(".changeh1").html("AMERICAN ASSASSIN")
})
$("#12strong").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/12strong.jpg");
	$("changeh3").html("12 Strong tells the story of the first Special Forces team deployed to Afghanistan after 9/11; under the leadership of a new captain, the team must work with an Afghan warlord to take down for the Taliban.<br>Runtime: 130 min<br>Genre: Action, Drama, History<br>Actors: Chris Hemsworth, Michael Shannon, Michael Peña, Navid Negahban<br>Rating: ****<br>Released: 2018<br>Language: English, Pushto, Russian")
    $(".changeh1").html("12 STRONG")
})

$("#starwar").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/starwar.jpg");
	$(".changeh3").html("Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.<br>Runtime: 152 min<br>Genre: Action, Adventure, Fantasy<br>Actors: Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley<br>Rating: *****<br>Released: 2017<br>Language: English")
    $(".changeh1").html("STAR WARS : THE LAST JEDI")
})
$("#viking").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/viking.jpg");
	$(".changeh3").html("The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.<br>Runtime: 44 min<br>Genre: Action, Drama, History<br>Actors: Gustaf Skarsgård, Katheryn Winnick, Alexander Ludwig, Travis Fimmel<br>Rating: *****<br>Released: 2013–<br>Language: English, Old English, Norse, Old, Latin")
	$(".changeh1").html("VIKINGS")
})
$("#black").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/black.jpg");
	$(".changeh3").html("Covert operative Tom Keen joins forces with Susan Hargrave, the brilliant and cunning chief of a covert mercenary organization that solves problems that are too dangerous for the government.<br> Runtime: 43 min<br> Genre: Action, Crime, Drama<br> Actors: Famke Janssen, Ryan Eggold, Edi Gathegi, Tawny Cypress<br> Rating: ****<br> Released: 2017<br> Language: English")
	$(".changeh1").html("BLACK LIST")
})
$("#deception").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/deception.jpg");
	$(".changeh3").html("Cameron Black is the world's greatest illusionist. At least, that's what people used to call him - before his greatest secret was exposed and his career destroyed. Even worse, Cameron has good reason to believe this was no accident.<br>Runtime: 41 min<br>Genre: Drama<br>Actors: Laila Robins, Robert Reed Murphy, Jack Cutmore-Scott, Ilfenesh Hadera<br>Rating: ** <br>Released: 2018<br>Language: English")
	$(".changeh1").html("DECEPTION")
})
$("#reasons").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/reasons.jpg");
	$(".changeh3").html("Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.<br>Runtime: 45<br>Genre: Drama, Mystery<br>Actors: Katherine Langford, Christian Navarro, Michael Sadler, Justin Prentice<br>Rating:***** <br>Released: 2017–<br>Language: English")
	$(".changeh1").html("13 REASONS WHY")
})
$("#space").click(function()
{
	$(".clearfix").css("display","block");
	$("#changeimg").attr("src","res/spa.jpg");
	$(".changeh3").html("After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.<br>Runtime: 60 min<br>Genre: Adventure, Drama, Sci-Fi<br>Actors: Molly Parker, Toby Stephens, Maxwell Jenkins, Taylor Russell<br>Rating:*** <br>Released: 2018–<br>Language: English")
	$(".changeh1").html("LOST IN SPACE")
})
$(".slide1close").click(function()
{   
	$(".slide1").css("visibility","hidden")
	$("#soonh2").css("display","none")
    $("#soonbutton").css("display","block")
    $(".slide1").css("margin-bottom","-200px")

	
})
$(".slide2close").click(function()
{
	$(".slide2").css("visibility","hidden")
	$("#soonh2").css("display","none")
    $("#soonbutton").css("display","block")
    $(".slide2").css("margin-bottom","-200px")
	
})
$(".slide3close").click(function()
{
	$(".slide3").css("visibility","hidden")
	$(".slide3").css("opacity", 0);
	$("#soonh2").css("display","none")
    $("#soonbutton").css("display","block")
    $(".slide3").css("margin-bottom","-200px")
	
})

$(document).ready(function(){
    $("#soonbutton").click(function()
	{
	    $(".slide1").css("visibility","visible")
		$(".slide2").css("visibility","visible")
	    $(".slide3").css("visibility","visible")
	    $(".slide1").css("opacity", 0);
	    $(".slide2").css("opacity", 0);
	    $(".slide3").css("opacity", 0);
	    $(".slide1").css("opacity", 1);
	    $(".slide2").css("opacity", 1);
	    $(".slide3").css("opacity", 1);
	    $(".slide1").css("transform","translate(6%,0)");
	    $(".slide2").css("transform","translate(-6%,0)");
	    $(".slide3").css("transform","translate(6%,0)");
	    $("#soonh2").css("display","block")
	    $("#soonbutton").css("display","none")
	    $(".slide1").css("margin-bottom","1px")
	    $(".slide2").css("margin-bottom","1px")
	    $(".slide3").css("margin-bottom","1px")
	});
});
$(document).ready(function()
{
    $("#fba1").click(function()
    {

    	$("#fb").show(500);
        $("#fb").css("opacity", 1);
        $("#fb").css("transform","translate(20px,0)");
        
        $("#fba1").css("display","none");
        $("#fba2").css("display","block");

    });
});
$(document).ready(function()
{
    $("#fba2").click(function()
    {
        
        $("#fb").hide(500);
        
        $("#fba1").css("display","block");
        $("#fba2").css("display","none");

    });
});
$(document).ready(function()
{
    $("#twitter1").click(function()
    {
    	$("#twitter").show(500);
        $("#twitter").css("opacity", 1);
        $("#twitter").css("transform","translate(200px,0)");
        
        
        $("#twitter1").css("display","none");
        $("#twitter2").css("display","block");

    });
});
$(document).ready(function()
{
    $("#twitter2").click(function()
    {
        
        $("#twitter").hide(500);
        
        
        $("#twitter1").css("display","block");
        $("#twitter2").css("display","none");

    });
});
$(document).ready(function()
{

    $("#instagram1").click(function()
    {
    	
        
    	$("#instagram").show(500);
    	$("#instagram").css("opacity", 1);
        $("#instagram").css("transform","translate(300px,0)")
        

        $("#instagram1").css("display","none");
        $("#instagram2").css("display","block");

    });
});
$(document).ready(function()
{
    $("#instagram2").click(function()
    {
        
        $("#instagram").hide(500);
        $("#instagram1").css("display","block");
     
        $("#instagram2").css("display","none");

    });
});