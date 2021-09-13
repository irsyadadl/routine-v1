import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import Table from '../../Components/Table';
import App from '../../Layouts/App';
import useFetch from '../../Hooks/useFetch';
export default function Datatable() {
    const [people, ] = useFetch();
    return (
        <App>
            <div>
                <div className="flex items-center justify-between">
                    <div className="ml-2 w-full">
                        <h1 className="font-semibold tracking-tighter">People</h1>
                        <div className="text-xs text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, tenetur!
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-x-1">
                            <div className="w-32">
                                <select name="n" id="n" className="form-select w-full rounded-xl border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in">
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between px-4 bg-white border rounded-xl overflow-hidden focus-within:ring focus-within:ring-blue-100 focus-within:border-blue-400 transition duration-200 ease-in">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-gray-500 inline" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                    <input type="text" name="q" id="q" placeholder="Search" className="form-text w-full border-0 focus:ring-0" />
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-gray-500 inline" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Table>
                    <Table.Thead>
                        <Table.Th className="!w-1">#</Table.Th>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Email</Table.Th>
                        <Table.Th>Website</Table.Th>
                        <Table.Th>Phone</Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Thead>
                    <Table.Tbody>
                        {people.map((person, index) => (
                            <tr key={index}>
                                <Table.Td className="!w-1">{index + 1}</Table.Td>
                                <Table.Td>
                                    <div>{person.name}</div>
                                    <div className="text-xs text-gray-500">
                                        {person.username}
                                    </div>
                                </Table.Td>
                                <Table.Td>{person.email}</Table.Td>
                                <Table.Td>{person.website}</Table.Td>
                                <Table.Td>{person.phone}</Table.Td>
                                <Table.Td>
                                    <div className="inline-flex items-center gap-x-2">
                                        <button className="focus:outline-none px-3.5 py-1.5 rounded-xl bg-purple-500 hover:bg-purple-600 transition duration-150 font-medium text-sm text-white">
                                            Edit
                                        </button>
                                        <button className="focus:outline-none px-3.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 transition duration-150 font-medium text-sm text-white">
                                            Delete
                                        </button>
                                    </div>
                                </Table.Td>
                            </tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </div>
        </App>
    );
}
