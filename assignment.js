const kilometerToMeter = (kilometer) =>
  kilometer > 0 ? kilometer * 1000 : console.log("Put a positive Number");

console.log(kilometerToMeter(10));

const budgetCalculator = (watch, mobile, laptop) => {
  if (watch > 0 && mobile > 0 && laptop > 0) {
    // 1 watch = $50
    // 1 mobile = $100
    // 1 laptop = $500
    watch, mobile, (laptop = watch * 50), mobile * 100, laptop * 500;
    return (totalPrice = watch + mobile + laptop);
  } else {
    console.log("Unexpected Value");
  }
};
console.log(budgetCalculator(10, 10, 10));

//

const hotelCost = (days) => {
  if (days > 0) {
    if (days <= 10) {
      return days * 100;
    }
    if (days > 10 && days <= 20) {
      return (days - 10) * 80 + 1000; // প্রথম  ১০ দিনের ভাড়া ১০০০
    } else {
      return (days - 20) * 50 + 1800; // প্রথম ২০ দিনের ভাড়া  ১৮০০
    }
  } else {
    console.log("Unexpected Value");
  }
};
console.log(hotelCost(200));

// Find Largest String From An Array

const megaFriend = (arr = []) => {
  arr.sort();
  // console.log(arr)

  if (!arr?.length || arr[0] == "" || typeof arr[0] != "string") {
    console.log("Unexpected Value");
    return "";
  }
  let name = "";
  name = arr.reduce((acc, val) => (acc.length > val.length ? acc : val));
  return name;
};

const arr = ["Mohammed", "Rahat", "Tousif", "Sakib", "Tanvir", "Siam"];

console.log(megaFriend(arr));
