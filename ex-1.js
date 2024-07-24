function sortCustomerName(customers) {
  let n = customers.length;
  for(let i=0; i<n-1; i++){
    for(let j=0; j<n-i-1; j++){
      
      if(customers[j] > customers[j+1]){
        let temp = customers[j]
        customers[j] = customers[j+1]
        customers[j+1] = temp
      }
    }
  }
  return customers
}

let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]
let result = sortCustomerName(customers)
console.log(result)
// ตอบคำถามตรงนี้จ้า
//O(n^2) 