calcSI = () => {

  let amount = prompt("Enter the amount");
  let rate = prompt("Enter the interest rate");
  let time = prompt("Enter the time");

  let principle = amount /(1+ rate*time);
  let si = (principle*rate*time)/100;
  
  document.getElementById("si").innerHTML="Simple interest is : "+si;
}

checkPalindrome = () => {

    let string = document.getElementById("string").value;
    let reverseString = ''

    for(let i = string.length-1; i>=0; i--)
     reverseString += string[i];

    if(string.toLowerCase() == reverseString.toLowerCase()){
        document.getElementById('result').innerHTML= string + " is palindromic string";
    }
    else{
        document.getElementById('result').innerHTML = string + ' is not a palindromic string';
    }
}

circleArea = () => {
    let radius = document.getElementById('radius').value;
    document.getElementById('area').innerHTML = "Area of circle having radius "
    +radius +" is : "+(Math.PI*radius*radius)
}

copyObject = () =>{
    let object1 = { a: 1, b: 2 };
    let object2 = { d: 4, c: 5 };
    console.log(object1)

    Object.assign(object1, object2);
       
    console.log(object1);
}

var list = [
    {name:'Bhupesh',age:21,salary:999,DOB:25/08/1998},
    {name:'Vipul',age:14,salary:5000,DOB:25/08/1998},
    {name:'Yash',age:31,salary:5000,DOB:25/08/1998},
    {name:'Naveen',age:22,salary:200,DOB:25/08/1998},
    {name:'Varun',age:12,salary:300,DOB:25/08/1998},
    {name:'Nishtha',age:27,salary:300,DOB:25/08/1998},
    {name:'Tehreem',age:13,salary:3000,DOB:25/08/1998},
    {name:'Palak',age:25,salary:4000,DOB:25/08/1998},
    {name:'Nishant',age:19,salary:400,DOB:25/08/1998},
    {name:'Bhupesh',age:12,salary:400,DOB:25/08/1998},
    {name:'Priya',age:32,salary:4000,DOB:25/08/1998},
    {name:'Yunus',age:41,salary:400,DOB:25/08/1998},
    {name:'Jay',age:21,salary:800,DOB:25/08/1998},
    {name:'Om',age:21,salary:8000,DOB:25/08/1998},
    {name:'Nikhil',age:25,salary:8000,DOB:25/08/1998},
    {name:'Devansh',age:16,salary:800,DOB:25/08/1998},
    {name:'siddhant',age:25,salary:800,DOB:25/08/1998},
    {name:'Saket',age:14,salary:2000,DOB:25/08/1998}
];

filter = () => {
    var filteredList= list.filter( p => { 
        if(p.salary>3000){ 
         return true;
        }else{
            return false;
        } })
    console.log(filteredList)   
}

group=()=>{
    let group = list.reduce((r, a) => {
        r[a.age] = [...r[a.age] || [], a];
        return r;
       }, {});
    console.log(group)
}

fetch = () => {
    var fetchList = list.filter(p => {
        if(p.salary <1000 && p.age>20){
            p.salary=p.salary*5
            return true;
        }
        else
         return false;
    })
    console.log(fetchList)
}

copyObject();

