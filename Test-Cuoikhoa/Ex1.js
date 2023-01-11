let number = Number(prompt('Nhập number'));

    function hailstone(number){
        let b = []
        b[0] = number;
        let i = 1;
        while( number != 1){
            if(number % 2 === 0){
                number /= 2;
            }
            else{
                number = number*3 + 1;
            }
            b.push(number);
    
        }
        return b;
    }

let c = [...hailstone(number)];

for(let i = 0; i < c.length; i++){
    console.log(c[i]);
}

