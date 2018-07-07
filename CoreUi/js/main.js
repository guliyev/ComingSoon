$(document).ready(function () {
    
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    
    });



    function ghost() {
        var x = document.getElementById("dropdown");
        if (x.style.display == "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
    }
    function ghostic() {
        var x = document.getElementById("dropdownSecond");
        if (x.style.display == "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    // function w3_open() {
    //     document.getElementById("wrapper").style.marginLeft = "25%";
    //     document.getElementById("sidebar").style.width = "25%";
    //     document.getElementById("sidebar").style.display = "block";
    //     document.getElementById("openNav").style.display = 'none';
    //   }
    //   function w3_close() {
    //     document.getElementById("wrapper").style.marginLeft = "0%";
    //     document.getElementById("sidebar").style.display = "none";
    //     document.getElementById("openNav").style.display = "inline-block";
    //   }