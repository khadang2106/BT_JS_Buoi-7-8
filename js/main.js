//Khai báo mảng lưu trữ số
var arrNumber = [];

getEle('btnAddNum').onclick = function () {
  var integer = getEle('integer').value * 1;
  arrNumber.push(integer);
  printResult('arrNumberResult', arrNumber);
};

/*
    Tổng các số dương
*/
getEle('btnReq1').onclick = function () {
  if (arrNumber.length === 0) {
    printResultIfEmpty('positiveTotal');
  } else {
    var total = sumPositiveNum(arrNumber);
    var resultReq1 = 'Tổng các số dương: ' + total;
    printResult('positiveTotal', resultReq1);
  }
};

/*
    Đếm số dương
*/
getEle('btnReq2').onclick = function () {
  if (arrNumber.length === 0) {
    printResultIfEmpty('positiveCount');
  } else {
    var posCount = countPositiveNum(arrNumber);
    var resultReq2 = 'Có ' + posCount + ' số dương';
    printResult('positiveCount', resultReq2);
  }
};

/*
    Tìm số nhỏ nhất
*/
getEle('btnReq3').onclick = function () {
  if (arrNumber.length === 0) {
    printResultIfEmpty('minNumber');
  } else {
    var minNumber = findMin(arrNumber);
    var resultReq3 = 'Số nhỏ nhất: ' + minNumber;
    printResult('minNumber', resultReq3);
  }
};

/*
    Tìm số dương nhỏ nhất
*/
//Khai báo mảng số dương mới
var positiveNum = [];

getEle('btnReq4').onclick = function () {
  var resultReq4 = '';
  if (arrNumber.length === 0) {
    printResultIfEmpty('minPositiveNum');
  } else {
    //Thêm các số dương từ mảng arrNumber vào mảng positiveNum
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] > 0) {
        positiveNum.push(arrNumber[i]);
      }
    }
    if (positiveNum.length === 0) {
      resultReq4 = 'Không có số dương trong mảng';
      printResult('minPositiveNum', resultReq4);
    } else {
      var minPositiveNum = findMin(positiveNum);
      resultReq4 = 'Số dương nhỏ nhất: ' + minPositiveNum;
      printResult('minPositiveNum', resultReq4);
    }
  }
};

/*
    Tìm số chẵn cuối cùng
*/
//Khai báo biến chứa số chẵn
// var arrEvenNum = [];

// getEle('btnReq5').onclick = function () {
//   var resultReq5 = '';
//   if (arrNumber.length === 0) {
//     printResultIfEmpty('lastEven');
//   } else {
//     for (var i = 0; i < arrNumber.length; i++) {
//       if (arrNumber[i] % 2 === 0) {
//         arrEvenNum.push(arrNumber[i]);
//       }
//     }
//     if (arrEvenNum.length === 0) {
//       resultReq5 = 'Không có số chẵn nào!';
//       printResult('lastEven', resultReq5);
//     } else {
//       var lastEven = arrEvenNum[arrEvenNum.length - 1];
//       resultReq5 = 'Số chẵn cuối cùng: ' + lastEven;
//       printResult('lastEven', resultReq5);
//     }
//   }
// };

//Cách khác: Duyệt mảng ngược từ cuối mảng
getEle('btnReq5').onclick = function () {
  var resultReq5 = '';
  if (arrNumber.length === 0) {
    printResultIfEmpty('lastEven');
  } else {
    if (findLastEvenNum(arrNumber) === -1) {
      resultReq5 = 'Không có số chẵn nào!';
      printResult('lastEven', resultReq5);
    } else {
      var lastEven = findLastEvenNum(arrNumber);
      resultReq5 = 'Số chẵn cuối cùng: ' + lastEven;
      printResult('lastEven', resultReq5);
    }
  }
};

/*
    Đổi chỗ 2 giá trị
*/
getEle('btnReq6').onclick = function () {
  if (arrNumber.length === 0) {
    printResultIfEmpty('swapPosition');
  } else {
    var pos1 = getEle('pos1').value * 1;
    var pos2 = getEle('pos2').value * 1;
    permutation(arrNumber, pos1, pos2);
    var resultReq6 = 'Mảng sau khi đổi vị trí: ' + arrNumber;
    printResult('swapPosition', resultReq6);
  }
};

/*
    Sắp xếp theo thứ tự tăng dần
*/
getEle('btnReq7').onclick = function () {
  if (arrNumber.length === 0) {
    printResultIfEmpty('arrange');
  } else {
    bubbleSort(arrNumber);
    var resultReq7 = 'Mảng sau khi sắp xếp tăng dần: ' + arrNumber;
    printResult('arrange', resultReq7);
  }
};

/*
    Tìm số nguyên tố đầu tiên
*/
getEle('btnReq8').onclick = function () {
  var resultReq8 = '';
  if (arrNumber.length === 0) {
    printResultIfEmpty('firstInteger');
  } else {
    for (var i = 0; i < arrNumber.length; i++) {
      var checkInt = isPrimeNumber(arrNumber[i]);
      if (checkInt) {
        resultReq8 = 'Số nguyên tố đầu tiên: ' + arrNumber[i];
        break;
      } else {
        resultReq8 = 'Không có số nguyên tố trong mảng!';
      }
    }
    printResult('firstInteger', resultReq8);
  }
};

/*
    Đếm số nguyên
*/
//Tạo mảng số mới để ghép chung với mảng số ban đầu
var newArrNum = [];
getEle('btnAddReq9').onclick = function () {
  var realNumber = getEle('realNumber').value * 1;
  newArrNum.push(realNumber);
  printResult('newArrNum', newArrNum);
};

getEle('btnReq9').onclick = function () {
  //Nối 2 mảng lại trước khi đếm
  var totalArr = arrNumber.concat(newArrNum);

  if (totalArr.length === 0) {
    printResultIfEmpty('integerCount');
  } else {
    var resultReq9 = '';
    var integerCount = countInteger(totalArr);
    if (integerCount === 0) {
      resultReq9 = 'Không có số nguyên nào trong mảng!';
    } else {
      resultReq9 = 'Có ' + integerCount + ' số nguyên';
    }
    printResult('integerCount', resultReq9);
  }
};

/*
    So sánh số lượng số dương và số âm
*/
getEle('btnReq10').onclick = function () {
  if (arrNumber.length === 0) {
    printResultIfEmpty('compare');
  } else {
    var resultReq10 = '';
    var positiveCount = countPositiveNum(arrNumber);
    var negativeCount = countNegativeNum(arrNumber);
    if (positiveCount === negativeCount) {
      resultReq10 = 'Số dương = Số âm';
    } else if (positiveCount > negativeCount) {
      resultReq10 = 'Số dương > Số âm';
    } else if (positiveCount < negativeCount) {
      resultReq10 = 'Số âm > Số dương';
    }
    printResult('compare', resultReq10);
  }
};
