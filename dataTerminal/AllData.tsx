const base = process.env.BASE_URL_1

export const CategoriesData = async () => {
    const res = await fetch(`${base}/categories`)
    return await res.json()
}

export const AllData = async () => {
    const res = await fetch(`${base}/products`)
    return await res.json()
}