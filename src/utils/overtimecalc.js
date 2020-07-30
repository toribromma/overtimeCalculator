// let a = 1;
// let b = 45;

function overtime(a,b) {

    if(isNaN(a) || isNaN(b) || a < 0 || b < 0 ||  b > 60) {
        return console.log("nope!")
    }

    let a2 = a * 60;
    if( b === 0) {
        a2 = a * 1.5
        console.log(`you worked ${a2}:00 hours of OT`)
    }
 
    else {
        
        c = (((a2 + b) * 1.5)/60).toString().split(".")
        let hours = c[0] 
        // console.log(c[1])
        let minutes = ((a2 + b) * 1.5) % 60
        // console.log(minutes)
        minutes2 = Math.floor(minutes)
        if (minutes < 10) {
        console.log(`you worked ${hours}:0${minutes2} hours of OT`)
        }
        else {
        console.log(`you worked ${hours}:${minutes2} hours of OT`)
        }



    } 

}

// overtime(a,b)
// overtime(2, 30)
// overtime(6, 15)
// overtime(6, 0)
// overtime(5, 32)
// overtime(0, 45)
// overtime(0, 0)
// overtime(80, 80)