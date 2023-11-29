function fibbonocciSeries(number){
    console.log("Fibbonocci series for "+number)
    let n1=0, n2=1, nextNum;
    for(let i=0;i<number;i++){
        console.log(n1)
        nextNum = n1+n2;
        n1=n2;
        n2 = nextNum;
    }
}

fibbonocciSeries(10)