function evaluate(x) {
    var radios = document.getElementsByTagName('input');
        var c = 0;
        for (i = 0; i < radios.length; i++) {
            
            if (radios[i].type == 'radio') {
                if(c%6===x)
                    radios[i].checked = true;
                c+=1;
            }
        }
    document.getElementsByName("ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$pstEvalBtn")[0].click();
  }
  if(document.getElementsByName("ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$stfIdLst").length>0){
    if(document.getElementsByName("ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$stfIdLst")[0].selectedIndex!==0){
        var x = parseInt(prompt("enter number from 0 to 5 to choose from strongly agree (0) to strongly disagree(5) or -1 to cancel"));
        if(x>-1){
          evaluate(x);
        }
    }
  }
  if(document.getElementsByName("ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$crsIdLst").length>0){
    if(document.getElementsByName("ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$crsIdLst")[0].selectedIndex!==0){
        var x = parseInt(prompt("enter number from 0 to 5 to choose from strongly agree (0) to strongly disagree(5) or -1 to cancel"));
        if(x>-1){
          evaluate(x);
        }
    }
  }
  
  
