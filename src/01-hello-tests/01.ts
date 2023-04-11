export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}
//
// export function splitIntoWords(sentense: string) {
// return ["hello","my","friend"]
// }

export function splitIntoWords(sentense: string) {
        const words = sentense.toLowerCase().split(" ")
    return words.filter(el => el !== "" && el !== "-")
        .map(el => el
            .replace("!", "")
            .replace(".", "")
            .replace(",", ""));
}
