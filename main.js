
let result = document.getElementById("result")

function submit(){
    let word = document.getElementById("word").value; 

    let vowels = ["a", "e", "i", "o", "u"]
    let total = 0;
    for (let i = 0; i < word.length; i++){
        let letter = word[i]
        if(vowels.includes(letter)){
            total++
            result.innerHTML = total
        }
    }
    return total
}

