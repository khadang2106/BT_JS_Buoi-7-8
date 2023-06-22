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

//Hàm hoán vị
function permutation(arr, pos1, pos2) {
  var tempPos = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = tempPos;
}

//Hàm kiểm tra số nguyên tố
function isPrimeNumber(number) {
  var checkInt = true;
  if (number <= 1) {
    checkInt = false;
  } else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        checkInt = false;
        break;
      }
    }
  }
  return checkInt;
}
