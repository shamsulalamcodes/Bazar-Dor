import { TSortProp } from "@/types/types";
import { Label, ListBox, Select } from "@heroui/react";
import type { Key } from "react";

export function Sort({ value, onChange }: TSortProp) {
    return (
        <div className="flex w-60 items-center ml-auto gap-2">
            <p>সাজান</p>
            <Select className="w-48" placeholder="Select one" value={value}
                onChange={(key: Key | null) => {
                    if (key) onChange(key as "default" | "priceAsc" | "priceDesc");
                }}>
                <Label></Label>
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item id="default" textValue="default">
                            ডিফল্ট
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="priceDesc" textValue="priceAsc">
                            দাম: কম থেকে বেশি
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="priceAsc" textValue="priceDesc">
                            দাম: বেশি থেকে কম
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    );
}