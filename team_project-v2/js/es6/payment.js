const paymentMethodContainer = document.querySelector(".paymentMethodContainer"),
      paymentMethodList = paymentMethodContainer.querySelectorAll("li"),
      paymentMethodAll = paymentMethodContainer.querySelectorAll("label"),
      paymentCorpContainer = document.querySelector(".paymentCorpContainer"),
      paymentCorpAll = paymentCorpContainer.querySelectorAll(".paymentCorp"),
      paymentForm = document.getElementById("paymentForm");

let paymentMethodListArray = [],
    paymentCorpArray = [],
    paymentMethodIndex;

function radioValueCheck(radioName){
    const radioArray = document.getElementsByName(radioName);
    for(i=0; i<radioArray.length; i++){
		if(radioArray[i].checked){
			radioValue = radioArray[i].value;
			return radioValue;
		}
	}
}

function paymentFormValidate(e){
    
    if(!radioValueCheck("paymentMethod")){
        alert("결제 방법을 선택하세요.");
        e.preventDefault();
    }else if(paymentMethodIndex == 0){
        const cardCorp = document.getElementById("cardCorp"),
              cardNum = document.getElementById("cardNum"),
              cardAgree = document.getElementById("cardAgree");
        
        if(!cardCorp.value){
            
            alert("카드사를 선택하세요.");
            e.preventDefault();
            
        }else if(!cardNum.value){
            
            alert("카드번호를 입력하세요");
            e.preventDefault();
            
        }else if(!cardAgree.checked){
            alert("개인정보활용에 동의해주세요.");
            e.preventDefault();
        }
        
        if(cardNum.value){
            
            if(isNaN(cardNum.value)){
                alert("숫자만 입력하세요.");
                e.preventDefault();
            }
        }
        
    }else if(paymentMethodIndex == 1){
        const smartphonePaymentCorp = document.getElementById("smartphonePaymentCorp"),
              smartphonePaymentAgree = document.getElementById("smartphonePaymentAgree");
        
        if(!smartphonePaymentCorp.value){
            alert("결제방법을 선택하세요");
            e.preventDefault();
        }else if(!smartphonePaymentAgree.checked){
            alert("개인정보활용에 동의해주세요.");
            e.preventDefault();
        }
        
    }else if(paymentMethodIndex == 2){
        const bankCorp = document.getElementById("bankCorp"),
              bankAgree = document.getElementById("bankAgree");
        
        if(!bankCorp.value){
            alert("은행을 선택하세요");
            e.preventDefault();
        }else if(!bankAgree.checked){
            alert("개인정보활용에 동의해주세요.");
            e.preventDefault();
        }
        
    }else if(paymentMethodIndex == 3){
        const mobilePaymentCorp = document.getElementById("mobilePaymentCorp"),
              mobileNum = document.getElementById("mobileNum"),
              mobilePaymentAgree = document.getElementById("mobilePaymentAgree");
        
        if(!mobilePaymentCorp.value){
            
            alert("통신사를 선택하세요.");
            e.preventDefault();
            
        }else if(!mobileNum.value){
            
            alert("휴대폰번호를 입력하세요");
            e.preventDefault();
            
        }else if(!mobilePaymentAgree.checked){
            alert("개인정보활용에 동의해주세요.");
            e.preventDefault();
        }
        
        if(mobileNum.value){
            
            if(isNaN(mobileNum.value)){
                alert("숫자만 입력하세요.");
                e.preventDefault();
            }
        }
        
    }
    
    
}

function showPaymentCorp(index){
    paymentCorpAll.forEach((e)=>e.classList.remove("active"));
    paymentCorpArray[index].classList.add("active");
    
}

function showPaymentChoose(){
    paymentForm.reset();
    paymentMethodList.forEach((e)=>e.classList.remove("active"));
    this.parentNode.classList.add("active");
    const listIndex = paymentMethodListArray.indexOf(this.parentNode);
    paymentMethodIndex = listIndex;
    showPaymentCorp(paymentMethodIndex);
}


function init(){
    paymentMethodList.forEach((e)=>paymentMethodListArray.push(e));
    paymentCorpAll.forEach((e)=>paymentCorpArray.push(e));
    paymentMethodAll.forEach((e)=>e.addEventListener("click",showPaymentChoose));
    
    if (paymentForm.addEventListener) {
        paymentForm.addEventListener("submit", paymentFormValidate, false);
    } else if (paymentForm.attachEvent) {
        paymentForm.attachEvent("onsubmit", paymentFormValidate);
    }
}

init();