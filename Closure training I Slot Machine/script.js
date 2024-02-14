function createSlotMachine() {
    let symbols = ["🍒", "🍍", "🍌"];
    let combination = [];
  
    function spin() {
      combination = [];
      for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * symbols.length);
        combination.push(symbols[randomIndex]);
      }
      console.log(`Combination: ${combination.join("")}`);
    }
  
    return spin;
  }
  
  let spin = createSlotMachine();
  
  // Example usage:
  spin(); // 'Combination: 🍒🍌🍍'
  spin(); // 'Combination: 🍍🍍🍌'
  spin(); // 'Combination: 🍌🍒🍍'