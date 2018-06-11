if (process.argv.length <= 2) {
    process.exit(-1);
}
 
var a = process.argv[2], b = process.argv[3];

a = Math.abs(a);
b = Math.abs(b);

if (a < 1 || a >= 10000 || b < 1 || b >= 10000)
  process.exit(-1);
// console.log(a, b);

var nod = function(a, b) {
    if ( b === 0) {
        return a;
    }

    return nod(b, a % b);
};
var str = nod(a, b) + '';

process.stdout.write(str);
