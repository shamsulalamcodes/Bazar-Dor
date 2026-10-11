import { CategoriesData } from "@/dataTerminal/AllData";
import { TCategories } from "@/types/types";
import CategoryLink from "./Category";


const Categories = async () => {

    const categories: TCategories[] = await CategoriesData()

    return (
        <div className="text-sm p-2 max-w-7xl container mx-auto grid grid-cols-4 justify-between sm:justify-start gap-1 sm:flex sm:gap-4 items-center">
            {
                categories.map((ct, i) => <CategoryLink hr={`/category/${ct.id}`} key={i} label={ct.nameBn} icon={ct.icon} />)
            }
        </div>
    );
};

export default Categories;