import React from 'react';
import Card from '../../Components/Card';
import Table from '../../Components/Table';
import App from '../../Layouts/App';

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
                            <Table.Th>No</Table.Th>
                            <Table.Th>No</Table.Th>
                            <Table.Th>No</Table.Th>
                            <Table.Th>No</Table.Th>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Td>x</Table.Td>
                            <Table.Td>x</Table.Td>
                            <Table.Td>x</Table.Td>
                            <Table.Td>x</Table.Td>
                        </Table.Tbody>
                    </Table>
                </Card.Body>
            </Card>
        </App>
    );
}
