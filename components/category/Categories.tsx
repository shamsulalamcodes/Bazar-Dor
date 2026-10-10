import { CategoriesData } from "@/dataTerminal/AllData";
import { TCategories } from "@/types/types";
import CategoryLink from "./Category";


const Categories = async () => {

    const categories: TCategories[] = await CategoriesData()

    return (
        <div className="text-sm py-2 max-w-7xl container mx-auto flex gap-4 items-center">
            {
                categories.map((ct, i) => <CategoryLink hr={`/category/${ct.id}`} key={i} label={ct.nameBn} />)
            }
        </div>
    );
};

export default Categories;