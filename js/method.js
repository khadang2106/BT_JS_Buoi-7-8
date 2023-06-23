//Hàm DOM tới id
function getEle(id) {
  return document.getElementById(id);
}
//Hàm in kết quả ra giao diện
function printResult(id, sentence, messAlert = null) {
  if (messAlert) alert(messAlert);
  getEle(id).innerHTML = sentence;
  getEle(id).style.display = 'block';
}

//Hàm in thông báo và kết quả nếu mảng trống
function printResultIfEmpty(id) {
  printResult(
    id,
    'Không có giá trị nào trong mảng',
    'Vui lòng thêm số vào mảng!'
  );
}

//Hàm tính tổng số dương
function sumPositiveNum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

//Hàm đếm số dương
function countPositiveNum(arr) {
  var posCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posCount++;
    }
  }
  return posCount;
}

//Hàm tìm số chẵn cuối cùng
function findLastEvenNum(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
  return -1;
}

//Hàm hoán vị
function permutation(arr, pos1, pos2) {
  var tempPos = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = tempPos;
}

//Hàm sắp xếp theo thứ tự tăng dần
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        permutation(arr, i, j);
      }
    }
  }
}

//Hàm kiểm tra số nguyên tố
function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  if (Number.isInteger(number) === false) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

//Hàm đếm số nguyên
function countInteger(arr) {
  var integerCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      integerCount++;
    }
  }
  return integerCount;
}

//Hàm tìm số nhỏ nhất
function findMin(arr) {
  var minNumber = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (minNumber > arr[i]) {
      minNumber = arr[i];
    }
  }
  return minNumber;
}

//Hàm đếm số dương
function countPositiveNum(arr) {
  var positiveCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    }
  }
  return positiveCount;
}

//Hàm đếm số âm
function countNegativeNum(arr) {
  var negativeCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeCount++;
    }
  }
  return negativeCount;
}
