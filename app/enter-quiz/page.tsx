'use client'

import { Button, Card, Center, Field, Flex, Heading, Input, NativeSelect, Stack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faHandshake, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const quizSeasons = [
    "2026 Quiz Season",
    "2025 Quiz Season"
]

const getTiedPosition = (entryPosition, positions) => {
    return 10
}

const IconButton = ({icon, action}: {icon: IconProp, action: () => void}) =>
    <Button
        cursor="pointer"
        width="1/4"
        marginLeft="1"
        onClick={action}
    >
        <FontAwesomeIcon icon={icon} />
    </Button>


export default function ViewQuiz() {
    const [positions, setPositions] = useState<{ name: string, tied: boolean }[]>([])
    const [availableUsers, setAvailableUsers] = useState<string[]>(["John", "Chris", "Anne"])

    const addUser = (position: number) => {
        setPositions([...positions, { name: availableUsers[position], tied: false }])
        const newAvailableUsers = availableUsers.toSpliced(position, 1)
        setAvailableUsers(newAvailableUsers)
    }

    const removeUser = (position: number) => {
        const userName = positions[position].name
        const newPositions = positions.toSpliced(position, 1)
        setPositions(newPositions)
        setAvailableUsers([...availableUsers, userName])
    }

    const tieUser = (name: string) => {
        const newPositions = positions.map(pos => {
            if (pos.name === name) {
                return {name, tied: !pos.tied}
            }
            return pos
        })
        setPositions(newPositions)
    }

    const positionsStackItems = []
    for (let i = 1; i <= 30; i++) {
        const entry = positions.length > i - 1 ? positions[i - 1] : undefined;
        const position = entry?.tied ? getTiedPosition(i, positions) : i
        positionsStackItems.push(<Flex>
            <Text>{position}</Text>
            {entry && <Card.Root w="1/2" alignItems={"center"} marginLeft="10" marginRight="10" key={entry.name} size="sm">
                <Card.Body>
                    <Center>
                        <Heading size="md">{entry.name}</Heading>
                        <IconButton icon={faTrashCan} action={() => removeUser(i - 1)}></IconButton>
                        <IconButton icon={faHandshake} action={() => tieUser(entry.name)}></IconButton>
                    </Center>
                </Card.Body>
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
                {availableUsers.map((name, i) => <Card.Root
                    cursor="pointer"
                    marginLeft="10"
                    marginRight="10"
                    key={name}
                    size="sm"
                    _hover={{ background: "#ADD8E6" }}
                    onClick={() => addUser(i)}
                >
                    <Card.Body>
                        <Center><Heading size="md">{name}</Heading></Center>
                    </Card.Body>
                </Card.Root>)}
            </Stack>
            <Stack w="1/4">
                <Heading size="3xl" paddingLeft="10" marginBottom="5">Positions</Heading>
                {positionsStackItems}
            </Stack>
        </Flex>
    </>
}