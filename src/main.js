function reverseWords(str) {
    let words = str.split(' ');
    let result = "";
    for (let word of words) {
        for (var i = word.length - 1; i >= 0; i--) {
            result += word[i];
        }
        result += " ";
    }
    return result.trim();
}