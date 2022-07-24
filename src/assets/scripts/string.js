const stringManipulation = {
    pluralWord(quantity, word) {
        return parseInt(quantity) > 1 ? `${word}s` : word;
    },
}

export default stringManipulation;