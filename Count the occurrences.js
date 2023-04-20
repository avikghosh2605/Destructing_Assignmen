function countWords(text) {
    const words = text.split(/\s+/);  // Split the text into an array of words
    const wordCounts = new Map();     // Create a new Map to store the word counts
    
    // Iterate over the words and increment their count in the map
    for (const word of words) {
      const count = wordCounts.get(word) || 0;
      wordCounts.set(word, count + 1);
    }
    
    return wordCounts;                // Return the map of word counts
  }
  