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
                            <Table.Th>Title</Table.Th>
                            <Table.Th>Department</Table.Th>
                            <Table.Th>Role</Table.Th>
                            <Table.Th>Email</Table.Th>
                        </Table.Thead>
                        <Table.Tbody>
                            {people.map((person, index) => (
                                <tr key={index}>
                                    <Table.Td> {person.name} </Table.Td>
                                    <Table.Td>{person.title}</Table.Td>
                                    <Table.Td>{person.department}</Table.Td>
                                    <Table.Td>{person.role}</Table.Td>
                                    <Table.Td>{person.email}</Table.Td>
                                </tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Card.Body>
            </Card>
        </App>
    );
}
