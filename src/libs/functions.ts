export const numbersAmericanCase= (num:number|undefined):string => { 
    if(num===undefined ) return "";
    let result:string="";
    let i = 0;
    while(num){
        const t:number = num%10;
        num=Math.floor(num/10);
        result+=t.toString();
        i++;
        if(i%3==0&&num>0){
            result+=',';
        }
    }
    return result.split('').reverse().join('');

}
export function findItemByKey<T>(array: T[], key: keyof T, value: unknown): T | undefined {
    return array.find(item => item[key] === value);
  }