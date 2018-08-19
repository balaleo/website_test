$( document ).ready(function() {  
 
    $.ajax({
        url: "https://balaleo.000webhostapp.com/ip.php",
        cache: false,
        async:false,       
        success: function(ip){
          console.log(3);
          var details = getIpDetails(ip);
          var res = postIpDetails(details);
        }
      });


      $.ajax({
        url: "https://balaleo.000webhostapp.com/show.php",
        cache: false,
        async:false,       
        success: function(contentFromAjax){
          $("#content").html(contentFromAjax);
        }
      });
 
});


function getIpDetails(ip) {

        var request = new XMLHttpRequest();      
        request.open('GET', 'http://ip-api.com/json/' + ip, false);
        request.send(null);
    
        if (request.status === 200) {
            return request.responseText;
        }
}

function postIpDetails(details) {

    // Url Construct
    var Url = "https://balaleo.000webhostapp.com/tracker.php?" + "json=" + JSON.stringify(details);

    var request = new XMLHttpRequest();
    request.open('GET', Url, false);
    request.send(null);

    if (request.status === 200) {
        console.log('tracked..');
    }
}




