import React from 'react';
import Card from '../../Components/Card';
import Table from '../../Components/Table';
import App from '../../Layouts/App';

const people = [
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
];
export default function Datatable() {
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
                                    <Table.Td>
                                        <div className="flex items-center gap-x-2">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src={person.image} alt={person.name} />
                                            </div>
                                            {person.name}
                                        </div>
                                    </Table.Td>
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
