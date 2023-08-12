let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function printDeveloper() {
    arr.map((item) => {
       if(item.profession=="developer"){
        console.log(item)
       }
      })
}
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee={id:4,name:"susan",age:"20",profession:"intern"}
   arr.push(newEmployee);
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const update = arr.filter(item =>item.profession!="admin");
  arr = update;
  console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr=[
        { id: 4, name: 'Rahul', age: 21, profession: 'Frontend' },
        { id: 5, name: 'Ravi', age: 25, profession: 'Accountent' },
        { id: 6, name: 'Ajay', age: 35, profession: 'Maneger' },
      ];

      let concatArr=arr.concat(newArr)
      arr=concatArr
      console.log(arr)
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }