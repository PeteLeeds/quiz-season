'use client'

import { Box, Heading, Table } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

interface Result {
    user: string;
    points: number;
}
interface Quiz {
    id: string;
    name: string;
    season: string;
    results: Result[];
}

const mockData: Quiz[] = [
    {
        id: '123',
        name: 'Pointless',
        season: 'Quiz Season 2026',
        results: [{
            user: 'Chris',
            points: 30
        },
        {
            user: 'Bob',
            points: 29
        },
        {
            user: 'Joanne',
            points: 28
        }]
    },
    {
        id: '456',
        name: 'Family Fortunes',
        season: 'Quiz Season 2026',
        results: [{
            user: 'Joanne',
            points: 30
        },
        {
            user: 'Chris',
            points: 29
        },
        {
            user: 'Bob',
            points: 28
        }]
    }
]

export default function ViewQuiz() {
    const params = useParams()

    const quiz = mockData.find(quiz => quiz.id === params.quizId)

    return <>
        <Heading size="5xl" paddingLeft="10" marginBottom="5">{quiz?.name}</Heading>
        <Box padding="10">
            <Table.Root size="lg">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Score</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {quiz?.results.map((result) => (
                        <Fragment key={result.user}>
                            <Table.Row key={result.user}>
                                <Table.Cell>{result.user}</Table.Cell>
                                <Table.Cell>{result.points}</Table.Cell>
                            </Table.Row>
                        </Fragment>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    </>
}