$(document).ready(function() {


	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	var completedDo = _.template($("#completeTmpl").html(), completedToDos);


	$(".duetodayul").append(todayDo);
	$(".duetomorrowul").append(tomorrowDo);
	$(".completeditemsul").append(completedDo);
	 $(".duetodayleft").append(todayToDos.length + " To-Do(s) left");

	 $(".duetomorrowleft").append(tomorrowToDos.length + " To-Do(s) left");
	 $(".completeleft").append(completedToDos.length + " To-Do(s) complete");



	//Today Submit 
	$("#todaytodoSubmit").submit (function(e) {
	e.preventDefault();

	var todayTask = $(".taskToday").val();

	var todayToDosObj = {

					todayDo: todayTask
	};

	todayToDos.push(todayToDosObj);
	tomorrowToDos.push(todayToDosObj);

	var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);

	$(".taskToday").val("What's your to-do for today?");
	$(".duetodayul").html(todayTaskString);
	$(".duetomorrowul").html(todayTaskString);

	$(".duetodayleft").html(todayToDos.length + " To-Do(s) left");

	// var tomorrowToDosObj = {

	// 				tomorrowDo: tomorrowTask
	// };



	});

	//	Tomorrow Submit
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
		todayToDos.splice(toRemove, 1);
			$(".completeleft").html(completedToDos.length + " To-Do(s) completed");

	});




	//removes the to-do
	$('.thedoer').on('click', '.removeToDo', function(){
		$(this).closest("li").remove();

	});	


var oriVal;
$(".thedoer").on('dblclick', 'li', function () {
    oriVal = $(this).text();
    $(this).text(" ");
	var toChange = $(this).closest("li").data("index");
    todayToDos.splice(toChange, 1);
    $("<input type='text'>").appendTo(this).focus();

    //delete current item from array


});
$(".thedoer").on('focusout', 'li > input', function () {
    var $this = $(this);
    $this.parent().text($this.val() || oriVal);
    $this.remove();

    var todayToDosObj = {

					todayDo: ($this.val() || oriVal)
	};
	todayToDos.unshift(todayToDosObj);

//next: compile template with new data, and then add that to mark up again
    // push or unshift then render the template
     // Don't just hide, remove the element.

    //add new item to array
});


});