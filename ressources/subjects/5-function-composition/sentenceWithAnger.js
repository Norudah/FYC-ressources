const removeFinalPoint = (sentence) => sentence.substring(0, sentence.length - 1);
const makeSentenceOMG = (sentence) => `${sentence} OMG`;
const withAnger = (sentence) => `${sentence} !`;

const sentence = "Functional programming is awesome.";

withAnger(makeSentenceOMG(removeFinalPoint(sentence)));
// Retourne "Functional programming is awesome OMG !"
