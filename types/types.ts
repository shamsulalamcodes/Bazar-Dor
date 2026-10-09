export type TCategories = {
    nameBn: string, id: string
}

export type TAllProducts = {
    nameBn: string, unit: string, image: string, today: number, change: { dir: string, pct: number }
}