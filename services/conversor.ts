export const numbersToMinuts =(nums:number) =>{
    const hours = Math.floor(nums / 60);
    const mins = nums % 60;
    
    return  `${hours}hr ${mins}m`;
}