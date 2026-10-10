export const FormatToBdFont = (need: string | number) => {
    const bn = new Intl.NumberFormat("bn-BD");
    return bn.format(Number(need));
};

export const FormatToBdFontDigits = new Intl.NumberFormat("bn-BD", { minimumFractionDigits: 1, maximumFractionDigits: 1 });



export const unitPer: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
};

export const unitShort: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
};


export const marketAvg = (m: { min: number; max: number }) =>
    Math.round((m.min + m.max) / 2);