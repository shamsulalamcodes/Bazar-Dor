export const FormatToBdFont = (need: string | number) => {
    const bn = new Intl.NumberFormat("bn-BD");
    return bn.format(Number(need));
};

export const FormatToBdFontDigits = new Intl.NumberFormat("bn-BD", { minimumFractionDigits: 1, maximumFractionDigits: 1 });