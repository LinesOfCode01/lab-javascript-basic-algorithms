      // Iteration 1: Names and Input
      let hacker1 = "driverName"
      console.log(`The driver's name is ${hacker1}`)
      
      let hacker2 = "navigatorName"
      console.log(`The navigator's name is ${hacker2}`)       
      
      // Iteration 2: Conditionals
      
      function longestName(hacker1, hacker2){
          if(hacker1.length > hacker2.length){
              return `${hacker1} has the longest name, it has ${hacker1.length}`
          } else if (hacker1.length === hacker2.length){
              return `Wow, you both have equally long names, ${hacker1} characters!`
             
          } else {
              return `${hacker2} has the longest name, it has ${hacker2.length}`
          
          }
      }
      
      console.log(longestName(hacker1,hacker2))

// Iteration 3: Loops


