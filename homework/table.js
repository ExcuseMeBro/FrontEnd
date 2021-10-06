let array = [];
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
           'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
           'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
           'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
           '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
for (let i = 0; i < 6; i++){
    for (let j = 0; j < 6; j++){
        array.push(letters[Math.trunc(Math.random()*(letters.length-1))]);
    }
    console.log(array);
    array = [];
}