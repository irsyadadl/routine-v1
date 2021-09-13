import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import Table from '../../Components/Table';
import App from '../../Layouts/App';
import axios from 'axios';
export default function Datatable() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setPeople(data)
        }
        getUsers();
    }, [])
    return (
        <App>
            <Card>
                <Card.Header>
                    <Card.Title>
                        Table of Contents
                    </Card.Title>
                    <Card.Subtitle>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, minus.
                    </Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <Table.Thead>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Username</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Website</Table.Th>
                            <Table.Th>Phone</Table.Th>
                            <Table.Th></Table.Th>
                        </Table.Thead>
                        <Table.Tbody>
                            {people.map((person, index) => (
                                <tr key={index}>
                                    <Table.Td>{person.name}</Table.Td>
                                    <Table.Td>{person.username}</Table.Td>
                                    <Table.Td>{person.email}</Table.Td>
                                    <Table.Td>{person.website}</Table.Td>
                                    <Table.Td>{person.phone}</Table.Td>
                                    <Table.Td>
                                        <div className="inline-flex items-center gap-x-2">
                                            <button className="focus:outline-none px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 transition duration-150 font-medium text-sm text-white">
                                                Edit
                                            </button>
                                            <button className="focus:outline-none px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 transition duration-150 font-medium text-sm text-white">
                                                Delete
                                            </button>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Card.Body>
            </Card>
        </App>
    );
}
