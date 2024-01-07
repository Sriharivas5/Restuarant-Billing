function calculate() {

    let kbiryani = document.getElementById("kb").value;
    let fbiryani = document.getElementById("fb").value;
    let dbiryani = document.getElementById("db").value;
    let chLollipop = document.getElementById("cl").value;
    let chburger = document.getElementById("cb").value;
    let chshawarma = document.getElementById("cs").value;

    let quantity1 = document.getElementById("quantity1").value;
    let quantity2 = document.getElementById("quantity2").value;
    let quantity3 = document.getElementById("quantity3").value;
    let quantity4 = document.getElementById("quantity4").value;
    let quantity5 = document.getElementById("quantity5").value;
    let quantity6 = document.getElementById("quantity6").value;

    let gstInput = document.getElementById("gstInput").value;
    let tipInput = document.getElementById("tipInput").value;



    arr = [parseInt(kbiryani * quantity1), parseInt(fbiryani * quantity2), parseInt(dbiryani * quantity3), parseInt(chLollipop * quantity4), parseInt(chburger * quantity5), parseInt(chshawarma * quantity6)]

    let total = document.getElementById("para5")
    let withGst = document.getElementById("para6")
    let withTip = document.getElementById("para7")

    let sum = 0;
    for (i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];
    }

    let gst = sum + (sum * (gstInput / 100))
    let tip= gst +parseInt( tipInput)

    total.innerHTML = (`Toatal bill:${sum}`)
    withGst.innerHTML = (`Toatal bill with gst:${gst}`)
    withTip.innerHTML = (`Toatal bill with tip:${tip}`)


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let NAME = document.getElementById("para1")
    let EMAIL = document.getElementById("para2")
    let PHONE = document.getElementById("para3")

    NAME.innerHTML = (`NAME: ${name}`)
    EMAIL.innerHTML = (`EMAIL:${email}`)
    PHONE.innerHTML = (`PHONE: ${phone}`)




}


