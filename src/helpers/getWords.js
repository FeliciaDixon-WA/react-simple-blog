const getWords = (words) => (str) => {
    let strArr = str.split(" ", words + 1)
    if (strArr.length > words) {
        strArr.pop();
        return strArr.join(" ") + " ...";
        
    } 
    return strArr.join(" ");
}

export const getTwentyWords = getWords(20);

export default getWords;

