function removeDuplicates(array) {
    // Create a new Set from the input array to automatically remove duplicates
    const uniqueSet = new Set(array);
    // Convert the Set back into an array
    const uniqueArray = [...uniqueSet];
    // Return the new array with only the unique elements
    return uniqueArray;
  }
  