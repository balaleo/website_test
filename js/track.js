$( document ).ready(function() {
    
    $.ajax({
        url: "https://balaleo.000webhostapp.com/ip.php",
        cache: false,
        async:false,
        success: function(ip){
          console.log(JSON.parse(ip).ip);
        }
      });




});