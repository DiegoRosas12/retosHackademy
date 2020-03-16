const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;
  
  (function secondFunction () {
      const b = 8;
      (function thirdFunction () {
          const a = 7; const c = 9;
          
          (function fourthFunction () {
              const a = 1; const c = 8
            })()
        })()
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
  })()
})()



// Usa tu conocimiento sobre el ámbito de las variables y ubica el 
// siguiente código dentro de alguna de las funciones en scope.js 
// para que la salida sea a: 1, b: 8, c: 6