$('ul').on("click", "li", function() { //read line34
	$(this).toggleClass('completed');
});

//click on X to delete Todo (also read line36)
$("ul").on("click", "span", function(event){
//we want to remove the span element and the element holding it
//$(this).parent().remove(); make this better with a fadeout
 // this doesnt remove so add callback
$(this).parent().fadeOut(500, function() {
	$(this).remove();
});
	//stopPropagation stops all the alerts or other 
	//elements from being called after this one
	event.stopPropagation();
});

//use .keypress and event.which to see if the enter key was
//used in the <input> field. Use event because it's an 'event'
//use .keypress because its a keypress! use .which because
//you need to know 'which' key was pressed!!!!!
$("input[type='text'").keypress(function(event){
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create a new li and add li
		//this does not clear the input field tho
		$(this).val("");//this clears
		//and no span so add to .append
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
		//now make new input removeable at the top on
		// line 1 by adding .on(click, funct...) instead of
		//.click(funct...) and change from :
		//$('li').on("click", "li",function(){
		//now to delete,use line6 and change from :
		//$("span").click(function(event){


	}
	
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text'").fadeToggle() ;
});

