debugger
const sum = (a: number, b: number) => {
    return a + b;
}
const res = sum(sum(1,2), sum(1,3))
console.log(res)