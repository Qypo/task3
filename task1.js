// if (process.argv.length <= 2) {
//     process.exit(-1);
// }

var i = process.argv[2], a = process.argv[3], b = process.argv[4];

if (i < 0 || i > 10000 || a < 2 || a > 36 || b < 2 || b > 36) {
    process.exit(-1);
}

function perevod(i, a ,b)
{

    var str = i + ''; //преобразуем в строку
    var arr = str.split(''); //делим в массив

    for (var k = 0; k < arr.length - 1; k++) {
        if (arr[k] >= a) {          //проверяем, чтобы цифры числа не превышали основание
            process.exit(-1);
        }
    }

    var des = parseInt(i, a); //перевод в десятичную
    var num = des.toString(b); //из десятичной в любую другую

    return num;
}

process.stdout.write(perevod(i, a ,b));

//не работает с дробными