async function searchWord(){

let word = document.getElementById("wordInput").value;

let url = 
`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

let response = await fetch(url);

let data = await response.json();

let meaning = 
data[0].meanings[0].definitions[0].definition;

let example = 
data[0].meanings[0].definitions[0].example;

let partOfSpeech =
data[0].meanings[0].partOfSpeech;

document.getElementById("result").innerHTML =

`
<div class="word">${word}</div>
<div>Part of Speech: ${partOfSpeech}</div>
<div class="meaning">${meaning}</div>
<div class="example">${example || ""}</div>
`;

}