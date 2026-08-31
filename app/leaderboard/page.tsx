'use client'

import { Box, Heading, Table } from "@chakra-ui/react"
import { Fragment, useState } from "react";

type User = {
    id: string;
    position: string;
    name: string;
    total: number;
    results: Record<string, number>
}

const mockData: User[] = [
    {
        id: 'abc123',
        position: '1',
        name: 'Chris',
        total: 50,
        results: {
            '1': 5,
            '2': 25,
            '3': 20,
        }
    },
    {
        id: 'def456',
        position: '2',
        name: 'John',
        total: 45,
        results: {
            '1': 5,
            '2': 25,
            '3': 15,
        }
    }
]

export default function Leaderboard() {
    const [expanded, setExpanded] = useState<string | undefined>()

    return <>
        <Heading size="5xl" paddingLeft="10">Leaderboard</Heading>
        <Box padding="10">
            <Table.Root size="lg">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Position</Table.ColumnHeader>
                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Score</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {mockData.map((item) => (
                        <Fragment key={item.id}>
                            <Table.Row key={item.id} onClick={() => expanded === item.id ? setExpanded(undefined) : setExpanded(item.id)}>
                                <Table.Cell>{item.position}</Table.Cell>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.total}</Table.Cell>
                            </Table.Row>
                            { expanded === item.id && <Table.Row>
                                <Table.Cell colSpan={3}>
                                <Box padding="4" borderWidth="1px">
                                <Heading size="md">Points Breakdown</Heading>
                                {Object.entries(item.results).map(([key, value]) => <div key={`${item.id}-${key}`}>{key}: {value}</div>)}
                            </Box></Table.Cell></Table.Row>}
                        </Fragment>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    </>
}