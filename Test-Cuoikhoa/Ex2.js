let order = {
    Shampoo: 5.99, 
    Rubber_Ducks: 15.99,
    Flatscreen_TV: 399.99,
    Monpoly: 11.99
}


function freeShipping(order){
    let isFreeShip = false;
    const value = Object.values(order);
    const tongTien = value.reduce((sum, number) => sum + number);
    console.log(tongTien);
    if(tongTien >= 50) {
        isFreeShip = true;
    }
    return isFreeShip
}

if(freeShipping(order) === true) {
    console.log("Free shipping");
}
else{
    console.log("Không miễn phí ship");
}