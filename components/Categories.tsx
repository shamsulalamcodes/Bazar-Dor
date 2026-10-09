import { CategoriesData } from "@/dataTerminal/AllData";
import Category from "./Category";
import { TCategories } from "@/types/types";


const Categories = async () => {

    const categories: TCategories[] = await CategoriesData()

    return (
        <div className="text-sm py-2 container mx-auto flex gap-4 items-center">
            {
                categories.map((ct, i) => <Category href={`/category/${ct.id}`} key={i} label={ct.nameBn} />)
            }
        </div>
    );
};

export default Categories;