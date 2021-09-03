function PhoneBill() {


    function makeCall() {

    }

    function sendSMS() {

    }

    return {
        makeCall,
        sendSMS
    }
}

//increase call

const PhoneBill = PhoneBill()

PhoneBill.makeCall(); 

PhoneBill.sendSMS(); 

PhoneBill.callTotal();
PhoneBill.smsTotal(); 
PhoneBill.grandTotal();