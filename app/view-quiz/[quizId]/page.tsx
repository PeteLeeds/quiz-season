'use client'

import { Button, Card, Heading, Stack } from "@chakra-ui/react";
import { useParams } from "next/navigation";

interface Quiz {
    id: string;
    name: string;
    season: string;
}

const mockData: Quiz[] = [
    {
        id: '123',
        name: 'Pointless',
        season: 'Quiz Season 2026'
    },
    {
        id: '456',
        name: 'Family Fortunes',
        season: 'Quiz Season 2026'
    }
]

export default function ViewQuiz() {
    const params = useParams()

    const quiz = mockData.find(quiz => quiz.id === params.quizId)

    return <>
        <Heading size="5xl" paddingLeft="10" marginBottom="5">{quiz?.name}</Heading>
    </>
}