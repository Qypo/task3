if (process.argv.length <= 2) {
    process.exit(-1);
}

var str = process.argv[2];

var arr = str.split(''); //делим строку в массив посимвольно

if(arr.length > 100)
{
    process.exit(-1);
}

var arr_main = arr;

var count_iter, main_index = 0, podstr = [], k = 0, length = arr.length;

for (count_iter = 1; main_index < length ; )
{
    if(yes_or_no(arr, main_index))
    {
        var arr2 = [];
        for(var i = 0; i < arr.length - count_iter; i++)        //цикл для заполнения массива arr2 пустыми элементами
        {
            arr2[i] = '';
        }


        for(var i = 0; i < arr.length - count_iter; i++)            //обновляем массив arr, увеличивается длина подстроки
        {
            for(var i2 = 0; i2 < count_iter + 1; i2++)          //count_iter + 1 - длина подстроки, которая исследуется на этой итерации
            {
                arr2[i] += arr_main[i + i2];
            }
        }

        podstr[k] = arr[main_index];
        k++;

        arr = arr2;

        count_iter++;
    }
    else
    {
        main_index++;
    }
}

process.stdout.write(podstr[podstr.length-1]);

function yes_or_no(arr, main_index) // возвращает 1, если подстрока в строке повторяется больше 1 раза, 0, если меньше
{
    var counter = 0;

    for( var i = 0; i < arr.length; i++)
    {
        if(arr[i] === arr[main_index])
        {
            counter++; // считает сколько повторяется подстрока
        }
    }

    if(counter > 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
