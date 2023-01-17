const sentence = ["creative", "development", "is", "awesome"];

const pronouncedAsAsmathic = (word) => `${word}. `;

const asmathicSentence = sentence.map(pronouncedAsAsmathic);

console.log(asmathicSentence);
// Sortie : [ 'creative. ', 'development. ', 'is. ', 'awesome. ' ]
