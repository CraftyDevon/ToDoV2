$(document).ready(function() {


	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	var completedDo = _.template($("#completeTmpl").html(), completedToDos);


	$(".duetodayul").append(todayDo);
	$(".duetomorrowul").append(tomorrowDo);
	$(".completeditemsul").append(completedDo);
	 $(".duetodayleft").append(todayToDos.length + " To-Do(s) left");

	 $(".duetomorrowleft").append(tomorrowToDos.length + " To-Do(s) left");



	//Today Submit
	$("#todaytodoSubmit").submit (function(e) {
	e.preventDefault();

	var todayTask = $(".taskToday").val();

	var todayToDosObj = {

					todayDo: todayTask
	};

	todayToDos.push(todayToDosObj);

	var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);

	$(".taskToday").val("What's your to-do for today?");
	$(".duetodayul").html(todayTaskString);
	//$(".duetodayleft").html(todayToDos.length + " To-Do(s) left");


	});

		//Tomorrow Submit
	$("#tomorrowtodoSubmit").submit (function(e) {
	e.preventDefault();
	
	var tomorrowTask = $(".taskTomorrow").val();

	var tomorrowToDosObj = {

					tomorrowDo: tomorrowTask
	};

	tomorrowToDos.unshift(tomorrowToDosObj);

	var tomorrowTaskString = _.template($("#tomorrowTmpl").html(), tomorrowToDos);

	$(".taskTomorrow").val("What's your to-do for tomorrow?");
	$(".duetomorrowul").html(tomorrowTaskString);
	$(".duetomorrowleft").html(tomorrowToDos.length + " To-Do(s) left");

	
	});





	//strikes through the complete task and adds it to complete array
	$(".thedoer").on("click", ".finishedItem", function(){
		// var total = completedToDos.push();
		// console.log (total);
		$(this).closest("li").addClass("line");
		var completedTask = $(this).closest("li");
		$(".completeditemsul").append(completedTask);
		var toRemove = $(this).closest("li").data("index");
		console.log(toRemove);
		var removeThis = todayToDos.indexOf(toRemove);
		todayToDos.splice(removeThis, 1);
	});




	//removes the to-do
	$('.thedoer').on('click', '.removeToDo', function(){
		$(this).closest("li").remove();

	});	
//adding a comment just to try and push this 

//click to edit <li>
// var oriVal;
// $(".thedoer").on('dblclick', 'li', function () {
//     oriVal = $(this).text();
//     $(this).text("");
//     $("<input type='text'>").appendTo(this).focus();
// });
// $(".thedoer").on('focusout', 'li > input', function () {
//     var $this = $(this);
//     $this.parent().text($this.val() || oriVal);
//     $this.remove(); // Don't just hide, remove the element.
// });


});