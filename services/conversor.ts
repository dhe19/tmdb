export const numbersToMinuts = (nums: number) => {
    const hours = Math.floor(nums / 60);
    const mins = nums % 60;

    return `${hours}hr ${mins}m`;
}


export const getCurrency = (num: number | null) => {
    if (null) return null;
    const formatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return formatter.format(num as number);
};