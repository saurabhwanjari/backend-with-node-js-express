let coursername:string ='backend web dev'
console.log(coursername)


let printnumbers=(start:number ,end:number):void =>{
    let temp:string ='';
    for(let i:number=start;i<=end;i++){
        temp+=`${i} `;

    }
    console.log(temp);
}

printnumbers(1,8);