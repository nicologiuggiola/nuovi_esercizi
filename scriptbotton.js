const text2 = "L'Ateniese Milziade.";

function btn(text2) {
    let input = document.getElementById('input').value;


    for (let i = 0; i < text2.length; i++) {
        if (input.includes(text2[i])) {
            alert("includes " + text2[i]);
        }
        else {
            console.log('dosnt include ' + text2[i]);
        }
    }
    return input;
}

