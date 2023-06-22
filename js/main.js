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
    printResult(
      'positiveTotal',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
  } else {
    var total = 0;
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] > 0) {
        total += arrNumber[i];
      }
    }
    var resultReq1 = 'Tổng các số dương: ' + total;
    printResult('positiveTotal', resultReq1);
  }
};

/*
    Đếm số dương
*/
getEle('btnReq2').onclick = function () {
  if (arrNumber.length === 0) {
    printResult(
      'positiveCount',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
  } else {
    var posCount = 0;
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] > 0) {
        posCount++;
      }
    }
    var resultReq2 = 'Có ' + posCount + ' số dương';
    printResult('positiveCount', resultReq2);
  }
};

/*
    Tìm số nhỏ nhất
*/
getEle('btnReq3').onclick = function () {
  if (arrNumber.length === 0) {
    printResult(
      'minNumber',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
  } else {
    var minNumber = arrNumber[0];
    for (var i = 1; i < arrNumber.length; i++) {
      if (minNumber > arrNumber[i]) {
        minNumber = arrNumber[i];
      }
    }
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
    printResult(
      'minPositiveNum',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
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
      var minPositiveNum = positiveNum[0];
      var resultReq4 = '';
      for (var j = 1; j < positiveNum.length; j++) {
        if (minPositiveNum > positiveNum[j] && positiveNum[j] > 0) {
          minPositiveNum = positiveNum[j];
        }
      }
      resultReq4 = 'Số dương nhỏ nhất: ' + minPositiveNum;
      printResult('minPositiveNum', resultReq4);
    }
  }
};

/*
    Tìm số chẵn cuối cùng
*/
//Khai báo biến chứa số chẵn
var arrEvenNum = [];

getEle('btnReq5').onclick = function () {
  var resultReq5 = '';
  if (arrNumber.length === 0) {
    printResult(
      'lastEven',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
  } else {
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] % 2 === 0) {
        arrEvenNum.push(arrNumber[i]);
      }
    }
    if (arrEvenNum.length === 0) {
      resultReq5 = 'Không có số chẵn nào!';
      printResult('lastEven', resultReq5);
    } else {
      var lastEven = arrEvenNum[arrEvenNum.length - 1];
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
    printResult(
      'swapPosition',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
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
    printResult(
      'arrange',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
  } else {
    for (var i = 0; i < arrNumber.length - 1; i++) {
      for (var j = i + 1; j < arrNumber.length; j++) {
        if (arrNumber[i] > arrNumber[j]) {
          permutation(arrNumber, i, j);
        }
      }
    }
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
    printResult(
      'firstInteger',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
  } else {
    for (var i = 0; i < arrNumber.length; i++) {
      var checkInt = checkInteger(arrNumber[i]);
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
    printResult(
      'integerCount',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
  } else {
    var integerCount = 0;
    var resultReq9 = '';
    for (var i = 0; i < totalArr.length; i++) {
      // if (totalArr[i] % 1 === 0) {
      //   integerCount++;
      // }
      if (Number.isInteger(totalArr[i])) {
        integerCount++;
      }
    }
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
    printResult(
      'compare',
      'Không có giá trị nào trong mảng',
      'Vui lòng thêm số vào mảng!'
    );
  } else {
    var positiveCount = 0;
    var negativeCount = 0;
    var resultReq10 = '';
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] > 0) {
        positiveCount++;
      } else if (arrNumber[i] < 0) {
        negativeCount++;
      }
    }
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
