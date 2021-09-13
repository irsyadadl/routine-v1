import React from 'react';

function Thead({ children }) {
    return (
        <thead>
            <tr>
                {children}
            </tr>
        </thead>
    );
}

function Th({ className, children, ...props }) {
    return (
        <th
            scope="col"
            className={`${className ? className : ''} px-4 py-3 text-left font-medium tracking-wider`}
            {...props}
        >
            {children}
        </th>
    );
}

function Td({ children, ...props }) {
    return (
        <td {...props} className="px-4 py-2 whitespace-nowrap">
            {children}
        </td>
    );
}

function Tbody({ children }) {
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {children}
        </tbody>
    );
}

function Table({ children }) {
    return (
        <div className="overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full text-sm">
                <div className="border overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    );
}

Table.Th = Th;
Table.Thead = Thead;
Table.Td = Td;
Table.Tbody = Tbody;
export default Table;
