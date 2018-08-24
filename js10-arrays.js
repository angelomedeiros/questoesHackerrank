const nums = [ 'a', 'n', 'g', 'e', 'l', 'o' ]

let tamanhoDoArray = nums.length
let maior, condicao

while ( condicao != 0 ) {

  condicao = 0

  for ( i = 0 ; i < tamanhoDoArray ; i++ ) {

    if ( nums[i] > nums[i+1] ) {
      maior = nums[i]
      nums[i] = nums[i+1]
      nums[i+1] = maior
      condicao = i
    }

  }

  tamanhoDoArray--

}
  

console.log(nums)
