function getFirstElement<T>(data: T[]): T | null{
    if(!data.length) {
    return null
    }
    const [firstElement] = data
    return  firstElement
}
const stringArry: string[] = ['chrystopher', 'Nayara']
const numberArray: number[] = [1, 2,3,4,5,6,7,8,9,10,11]

console.log(getFirstElement<string>(stringArry));
console.log(getFirstElement<number>(numberArray));
