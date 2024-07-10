export const numbersAmericanCase= (num:number):string => { 
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