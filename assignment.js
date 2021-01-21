

/*******************kilometerToMeter  ***********************/

//kilometerToMeter function will take input in kilometer and convert it in meter. 

function kilometerToMeter(kilometer) {
    if(kilometer>=0){
        let meter = kilometer * 1000;
        return meter;
    }else {
        let errorMessage ="INVALID INPUT!!!!";
        return errorMessage;
    }
}



/*******************  budgetCalculator  ***********************/

//Give the number of watches,phones and laptops you want to buy.
//it will return total budget required.

function budgetCalculator(numOfWatch ,numOfPhone ,numOfLaptop ) {
    
    if (numOfWatch>=0 && numOfPhone>=0 && numOfLaptop>=0
        && Number.isInteger(numOfWatch)===true && Number.isInteger(numOfPhone)===true && Number.isInteger(numOfLaptop)===true) {
         
        let totalPriceOfWatch = numOfWatch * 50;
        let totalPriceOfPhone = numOfPhone * 100;
        let totalPriceOfLaptop = numOfLaptop * 500;
        let totalPrice = totalPriceOfWatch + totalPriceOfPhone + totalPriceOfLaptop;
        return totalPrice;
    }
    else{
        let errorMessage ="INVALID INPUT!!!!";
        return errorMessage;
    }
}

/*******************  hotelCost  ***********************/

//Give the number of days you want to stay in this hotel as input.
//it will return you the amount of money you will need.

function hotelCost(totalDays) {
    if (totalDays>=0 && typeof(totalDays)==="number"&& Number.isInteger(totalDays)===true) {
        let totalCost = 0;
        if (totalDays <=10) {
            totalCost =totalDays *100;
            
        } else if(totalDays <=20) {
            let firstTenDayCost = 10 *100;
            let remainingDayCost = (totalDays-10) * 80;
            totalCost = firstTenDayCost + remainingDayCost;
            
        } else {
            let firstTwentyDayCost = (10 *100) + (10 * 80);
            remainingDayCost = (totalDays - 20) * 50;
            totalCost = firstTwentyDayCost + remainingDayCost;  
        }
        return totalCost;
    } 
    else{
        let errorMessage ="Invalid Input!!!!!";
        return errorMessage;
    }
}

/*******************  Mega friend  ***********************/

function megaFriend(arrayOfFriendsName) {
    let newArray=[];//an empty array for filtering valid inputs.
    for (let i = 0; i <arrayOfFriendsName.length; i++) {
        let element =arrayOfFriendsName[i];
        if (typeof element ==='string') {
            newArray.push(element);
        }
    }
    //all the valid inputs are in newArray
    if (newArray.length!==0) {
        let largestName=newArray[0];
        for (let i = 0; i < newArray.length; i++) {
            let newName = newArray[i];
            if (newName.length>largestName.length) {
                largestName=newName;
            }
        }
        return largestName ;
    }else {
        let errorMessage ="Please give valid inputs!!!!";
        return errorMessage;
    }
}