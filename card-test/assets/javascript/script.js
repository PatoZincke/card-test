(function() {

	var random = Math.floor(Math.random() * 3) + 1;
	$(".wrapper-" + random).show();

	// Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyAchZcvz7P4vm-BjgyENjM6nAnrpv3ZScQ",
	    authDomain: "icon-test-7ba1b.firebaseapp.com",
	    databaseURL: "https://icon-test-7ba1b.firebaseio.com",
	    projectId: "icon-test-7ba1b",
	    storageBucket: "",
	    messagingSenderId: "277696164664"
	  };

	  firebase.initializeApp(config);

		var database             = firebase.database();
    var ref                  = database.ref("registros");

  $(".box").on("click", function(){
	  var data = {
	      template: $(this).parent().attr("id"),
	      width: $(window).width()
	    }

	  ref.push(data);
	});

	$("ul li a").on("click", function(){

	  var data = {
	      link: $(this).attr("class"),
	      width: $(window).width()
	    }

	  ref.push(data);
	});



})();