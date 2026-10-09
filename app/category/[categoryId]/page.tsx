import CategoryHeader from "@/components/CategoryHeader";
import ParentSort from "@/components/ParentSort";
import { CategoryData, CategoryName } from "@/dataTerminal/AllData";
import { TAllProducts } from "@/types/types";

const CategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {

    const { categoryId } = await params
    const { nameBn } = await CategoryName(categoryId)

    const data: TAllProducts[] = await CategoryData(categoryId)

    return (
        <div>
            <main className="container mx-auto space-y-4 px-3 py-4 sm:px-4">
                <CategoryHeader title={nameBn} count={data.length} />

                <ParentSort dat={data} />
            </main>
        </div>
    );
};

export default CategoryPage;