'use client'

import { Button, Card, Center, Field, Flex, Heading, Input, NativeSelect, Stack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faHandshake, faTrashCan, faUpDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const quizSeasons = [
    "2026 Quiz Season",
    "2025 Quiz Season"
]

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
    const [positions, setPositions] = useState<string[][]>([])
    const [availableUsers, setAvailableUsers] = useState<string[]>(["John", "Chris", "Anne", "Debbie"])
    const [userToMove, setUserToMove] = useState<string | undefined>(undefined)
    const [moveHere, setMoveHere] = useState<number>(0)

    const addUser = (position: number) => {
        setPositions([...positions, [availableUsers[position]]])
        const newAvailableUsers = availableUsers.toSpliced(position, 1)
        setAvailableUsers(newAvailableUsers)
    }

    const removeUser = (name: string, position: number) => {
        const newPositions = positions.flatMap((pos, i) => {
            if (i !== position) {
                return [pos]
            }
            const newArray = pos.filter(user => user !== name)
            return newArray.length > 0 ? [newArray] : []
        })
        setPositions(newPositions)
        setAvailableUsers([...availableUsers, name])
    }

    const tieUser = (name: string, position: number) => {
        if (position === 0 && positions[position].length === 1) {
            console.warn('Cannot tie user in first place')
            return
        }
        if (positions[position].length === 1) {
            const newPositions = positions.toSpliced(position, 1)
            newPositions[position - 1].push(name)
            setPositions(newPositions)
        } else {
            const newPositions = positions.toSpliced(position + 1, 0, [name]).map((pos, i) => {
                if (i === position) return pos.filter(user => user !== name)
                return pos
            })
            setPositions(newPositions)
        }
    }

    const flatPositions = positions.flatMap((pos, i) => pos.map(user => ({
        name: user,
        position: i + 1,
        tied: pos.length > 1
    })))

    const positionsStackItems = []
    for (let i = 1; i <= 30; i++) {
        const entry = flatPositions.length > i - 1 ? flatPositions[i - 1] : undefined;
        const position = entry?.position || i
        if (userToMove && moveHere == i && entry) {
            positionsStackItems.push(<Button>Move Here</Button>)
        }
        positionsStackItems.push(<Flex onMouseEnter={() => setMoveHere(i)}>
            <Text>{position}</Text>
            {entry && <Card.Root w="1/2" alignItems={"center"} marginLeft="10" marginRight="10" key={entry.name} size="sm">
                <Card.Body>
                    <Center>
                        <Heading size="md">{entry.name}</Heading>
                        <IconButton icon={faTrashCan} action={() => removeUser(entry.name, entry.position - 1)}></IconButton>
                        <IconButton icon={faHandshake} action={() => tieUser(entry.name, entry.position - 1)}></IconButton>
                        <IconButton icon={faUpDown} action={() => setUserToMove(entry.name)}></IconButton>
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