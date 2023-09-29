const galaxies = [3,5,78,54,23,12,45,70];
// E
const contarEstrellas = () => {
   const total = galaxies.reduce(
      (acumulador, estrella) => acumulador + estrella 
   )
   return total
}

console.log(contarEstrellas(galaxies))
