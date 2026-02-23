import React from "react";
import type { IHeaderParams } from "ag-grid-community";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface CustomHeaderProps extends IHeaderParams {
    onRemoveColumn: (colId: string) => void;
}

export const CustomHeader: React.FC<CustomHeaderProps> = (props) => {
    const handleRemove = () => {
        props.onRemoveColumn(props.column.getColId());
    };

    return (
        <div className="flex justify-between items-center w-full h-full px-2">
            <span >{props.displayName}</span>
            <button
                className=" w-5 h-5 ml-2 p-1 bg-red-500 rounded-sm hover:bg-red-600 flex items-center justify-center cursor-pointer"
                onClick={handleRemove}
            >
            <XMarkIcon className="w-4 h-4" />
            </button>
        </div>
    );
};