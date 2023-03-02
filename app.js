function sakuraFall(v) {
    if(v > 0){
        return (5*80)/v;
    } else {
        return 0;
    }
}

console.log(sakuraFall(5)); // 80
console.log(sakuraFall(10)); // 40
console.log(sakuraFall(-1)); // 0