export type TCategories = {
    nameBn: string, id: string
}

export type TAllProducts = {
    nameBn: string, unit: string, image: string, today: number, change: { dir: string, pct: number }
}

export type TCategoryProps = {
    hr: string;
    label: string;
};

export type TSortProp = {
    value: "default" | "priceAsc" | "priceDesc";
    onChange: (v: "default" | "priceAsc" | "priceDesc") => void;
};

export interface Root {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: string;
        pct: number;
    };
    markets: {
        market: string;
        division: string;
        min: number;
        max: number;
    }[];
}