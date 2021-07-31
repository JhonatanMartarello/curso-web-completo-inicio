/*
    Bloco ímpar
    1
    3
    5
    7
    9

    Bloco par
    2
    4
    6
    8
    10
*/

{
    console.log("//------------------------Bloco Normal---------------------------");
    console.log("Bloco ímpar")
    console.log("1");
    console.log("3");
    console.log("5");
    console.log("7");
    console.log("9");
}
{
    console.log("Bloco par")
    console.log("2");
    console.log("4");
    console.log("6");
    console.log("8");
    console.log("10");
}

{
    console.log("//------------------------Bloco for---------------------------");
    console.log("Bloco ímpar")
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
{
    console.log("Bloco par")
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}