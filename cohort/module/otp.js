const otpGen = require("otp-generator")
let otp = otpGen.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false })

var sid = "ACc99fab5935472f2db8beec536e92a4df";
var auth_token = "5909e32111ba05ef4727adc5e18e4ce9";


var twilio = require("twilio")(sid, auth_token);

twilio.messages
    .create({
        from: "+19707071268",
        to: "+918319523939",
        body: `this is testing otp is ${otp}`,
    })
    .then(function (res) { console.log("message has sent!") })
    .catch(function (err) {
        console.log(err);
    });
