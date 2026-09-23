'use client'

import { Card, Field, Flex, Heading, Input, NativeSelect, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const quizSeasons = [
    "2026 Quiz Season",
    "2025 Quiz Season"
]

const getTiedPosition = (entryPosition, positions) => {
    return 10
}

export default function ViewQuiz() {
    const [positions, setPositions] = useState<{ name: string, tied: boolean }[]>([])

    const addUser = (name: string) => {
        setPositions([...positions, {name, tied: false}])
    }

    const positionsStackItems = []
    for (let i = 1; i <= 30; i++) {
        const entry = positions.length > i ? positions[i] : undefined;
        console.log('POSITION', positions.length, i, entry, positions)
        const position = entry?.tied ? getTiedPosition(i, positions) : i
        positionsStackItems.push(<Flex>
            <Text>{position}</Text>
            {entry && <Card.Root w="1/2" alignItems={"center"} marginLeft="10" marginRight="10" key={entry.name} size="sm">
                <Card.Header>
                    <Heading size="md">{entry.name}</Heading>
                </Card.Header>
            </Card.Root>}
        </Flex>
        )
    }

    return <>
        <Heading size="5xl" paddingLeft="10" marginBottom="5">Enter Quiz</Heading>
        <Stack marginLeft="10" maxW="sm">
            <Field.Root>
                <Field.Label>Quiz Name</Field.Label>
                <Input />
            </Field.Root>
            <Field.Root>
                <Field.Label>Quiz Season</Field.Label>
                <NativeSelect.Root>
                    <NativeSelect.Field>
                        {quizSeasons.map(season => <option key={season} value={season}>{season}</option>)}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                </NativeSelect.Root>
            </Field.Root>
        </Stack>
        <Flex marginTop={10}>
            <Stack w="1/4">
                <Heading size="3xl" paddingLeft="10" marginBottom="5">Users</Heading>
                {["John", "Chris", "Anne"].map(name => <Card.Root alignItems={"center"} marginLeft="10" marginRight="10" key={name} size="sm" onClick={() => addUser(name)}>
                    <Card.Header>
                        <Heading size="md">{name}</Heading>
                    </Card.Header>
                </Card.Root>)}
            </Stack>
            <Stack w="1/4">
                <Heading size="3xl" paddingLeft="10" marginBottom="5">Positions</Heading>
                {positionsStackItems}
            </Stack>
        </Flex>
    </>
}