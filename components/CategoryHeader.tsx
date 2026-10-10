import { FormatToBdFont } from "../shortcut/FormatToBdFont";

type Props = {
    title: string;
    count: number
};

const CategoryHeader = ({ title, count }: Props) => {
    const countBn = FormatToBdFont(count)

    return (
        <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm sm:px-8 sm:py-5">
            <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                {title}
            </h1>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">{countBn}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
    );
}

export default CategoryHeader;