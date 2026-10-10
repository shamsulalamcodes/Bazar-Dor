export type TCategories = {
    nameBn: string, id: string
}

export type TAllProducts = {
    nameBn: string, unit: string, image: string, today: number, change: { dir: string, pct: number }, id: number
}

export type TCategoryProps = {
    hr: string;
    label: string;
};

export type TSortProp = {
    value: "default" | "priceAsc" | "priceDesc";
    onChange: (v: "default" | "priceAsc" | "priceDesc") => void;
};

export type TMarketPrice = {
    market: string;
    division: string;
    min: number;
    max: number;
};

export type TProductDetail = {
    id: number;
    slug: string;
    nameBn: string;
    category: string;          // slug, e.g. "chal"
    categoryNameBn: string;    // "চাল"
    categoryIcon: string;      // emoji
    unit: string;
    image: string;             // emoji, not a URL
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: { dir: string; pct: number };
    markets: TMarketPrice[];
};