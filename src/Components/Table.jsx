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

function Th({ children }) {
    return (
        <th
            scope="col"
            className="px-6 py-3 text-left font-medium tracking-wider"
        >
            {children}
        </th>
    );
}

function Td({ children }) {
    return (
        <td className="px-6 py-4 whitespace-nowrap">
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
        <div className="flex flex-col text-sm">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="border overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            {children}
                        </table>
                    </div>
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
