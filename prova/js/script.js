$(document).ready(function(){
	var ctx = $("#process").get(0).getContext("2d");

	var data = [
		{
			value: 10,
			color: "#d8ccbf",
			highlight: "white",
			label: "Purpouse"
		},
		{
			value: 30,
			color: "#7578ab",
			highlight: "white",
			label: "Discussion"
		},
		{
			value: 20,
			color: "#474277",
			highlight: "white",
			label: "Concept"
		},
    {
			value: 40,
			color: "#e04543",
			highlight: "white",
			label: "Realisation"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
});

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for your message! i'll write you back soon.");
			$("#form").trigger("reset");
		});
		return false;
	});

});
