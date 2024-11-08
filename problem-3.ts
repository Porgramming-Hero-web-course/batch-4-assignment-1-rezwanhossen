{
  const countWordOccurrences = (sent: string, w: string): number => {
    let count: number = 0;
    const words: string[] = sent.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase() == w.toLowerCase()) {
        count = count + 1;
      }
    }
    return count;
  };

  const result = countWordOccurrences("I love Typescript ", "typescript");
  // console.log(result);
}
