if (process.argv.length <= 2) {
    process.exit(-1);
}
 
var a = process.argv[2], b = process.argv[3];

if (a < 1 || a >= 10000 || b < 1 || b >= 10000)
  process.exit(-1);

function nod(a, b)
{
  if (a == 0)
  {
    return b;
  }
  
  while (b != 0) 
  {
    if (a > b)
         a = a - b;
    else
         b = b - a;
  }
  return a;
}

process.stdout.write(nod(a, b));
