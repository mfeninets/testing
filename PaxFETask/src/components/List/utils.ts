export const getUSDAmount = (rate: string, amount: number) =>
    (parseInt(rate, 10) * amount).toFixed(2);
