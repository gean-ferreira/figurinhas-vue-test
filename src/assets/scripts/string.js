const stringManipulation = {
    // Coloca em no plural a palavra/titulo de acordo com a quantidade
    pluralWord(quantity, word) {
        return parseInt(quantity) > 1 ? `${word}s` : word;
    },
}

export default stringManipulation;