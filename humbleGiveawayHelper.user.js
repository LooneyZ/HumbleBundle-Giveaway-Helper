// ==UserScript==
// @name         Humble Giveaway Helper
// @namespace    http://tampermonkey.net/
// @version      0.0.3
// @description  Get keys from HumbleBundle faster
// @author       Looney
// @match        https://www.humblebundle.com/store/*
// @include      https://www.humblebundle.com/downloads*
// @include      https://www.humblebundle.com/receipt*
// @include      https://www.humblebundle.com/emailhelper*
// @include      https://www.humblebundle.com/user/humbleguard*
// @updateURL    https://raw.githubusercontent.com/LooneyZ/HumbleBundle-Giveaway-Helper/master/humbleGiveawayHelper.user.js
// @downloadURL  https://raw.githubusercontent.com/LooneyZ/HumbleBundle-Giveaway-Helper/master/humbleGiveawayHelper.user.js
// @grant        none
// ==/UserScript==

(function() {
    function moveRec(e){
        if (e.keyCode===81) {
            if(location.toString().substring(0,34) === "https://www.humblebundle.com/store"){
                if(typeof document.getElementsByClassName("js-shopping-cart-button shopping-cart-button")[0] !== 'undefined'){
                    f1();
                }
                else setTimeout(f1,1000);
            }
        }
    }
    addEventListener("keydown", moveRec);

    if(location.toString().substring(0,36) === "https://www.humblebundle.com/receipt"){
        if(typeof document.getElementsByClassName("success-redirect")[0] !== 'undefined'){
            f2();
        }
        else setTimeout(f2,1000);
    }
    else if(location.toString().substring(0,40) === "https://www.humblebundle.com/emailhelper"){
        if(typeof document.getElementsByClassName("order-link-btn")[0] !== 'undefined'){
            f3();
        }
        else setTimeout(f3,1000);
    }
    else if(location.toString().substring(0,45) === "https://www.humblebundle.com/user/humbleguard"){
        alert("Email code");
    }
    else if(location.toString().substring(0,38) === "https://www.humblebundle.com/downloads"){
        if(typeof document.getElementsByClassName("sr-unredeemed-button-text")[0] !== 'undefined'){
            f4();
        }
        else setTimeout(f4,1000);
    }

    function f1(){
        document.getElementsByClassName("js-shopping-cart-button shopping-cart-button")[0].click();
        document.getElementsByClassName("cart")[0].click();
        document.getElementsByClassName("store-free-payment-button")[0].click();
    }
	
	function f2(){
        var bluebuttons = document.getElementsByClassName("blue button-v2");
        var isFound = false;
        for(var i = 0; i< bluebuttons.length; i++){
            if(bluebuttons[i].innerHTML === "Preview your Email"){
                isFound = true;
                bluebuttons[i].click();
                break;
            }
        }
        if(!isFound) setTimeout(f2,1000);
    }
	
	
    function f3(){
		if(typeof document.getElementsByName("order-link-btn")[0] !== 'undefined'){
            document.getElementsByName("order-link-btn")[0].getElementsByTagName('a')[0].click();
        }
        else setTimeout(f3,1000);
    }
	
	function f4(){
		if(typeof document.getElementsByClassName("keyfield-value")[0] !== 'undefined'){
            document.getElementsByClassName("keyfield-value")[0].click();
			f5();
        }
        else setTimeout(f4,1000);
    }
	
    function f5(){
        if(typeof document.getElementsByClassName("steam-redeem-text")[0] !== 'undefined'){
            document.getElementsByClassName("steam-redeem-text")[0].click();
        }
        else setTimeout(f5,1000);
    }
})();