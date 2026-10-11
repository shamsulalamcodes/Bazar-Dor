// BASE_URL_1=https://api.api-store.workers.dev/api/bazardor
// BASE_URL_2=https://api.abcz.workers.dev/api/bazardor
const base = "https://openapi.programming-hero.com/api/bazardor"

export const CategoriesData = async () => {
    const res = await fetch(`${base}/categories`, { cache: 'force-cache' })
    return await res.json()
}

export const CategoryName = async (name: string) => {
    const res = await fetch(`${base}/categories/${name}`)
    return await res.json()
}

export const CategoryData = async (id: string) => {
    const res = await fetch(`${base}/products?category=${id}`)
    return await res.json()
}

export const AllData = async () => {
    const res = await fetch(`${base}/products`, { cache: 'force-cache' })
    return await res.json()
}

export const SingleProduct = async (id: number) => {
    const res = await fetch(`${base}/products/${id}`)
    return await res.json()
}