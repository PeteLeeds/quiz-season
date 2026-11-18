import { Button, Card, Flex, Heading, Link, Spacer, Stack } from "@chakra-ui/react";

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

export default function Quizzes() {
    return <>
        <Flex>
            <Heading data-cy="heading" size="5xl" paddingLeft="10" marginBottom="5">Quizzes</Heading>
            <Spacer />
            <Link href="/enter-quiz"><Button data-cy="enter-quiz-button" marginRight="10">Enter New Quiz</Button></Link>
        </Flex>
        <Stack>
            {mockData.map((quiz, i) =>
                <Card.Root data-cy={`card-${i}`} marginLeft="10" marginRight="10" key={quiz.id} size="sm">
                    <Card.Header>
                        <Heading data-cy={`card-header-${i}`} size="md">{quiz.name}</Heading>
                    </Card.Header>
                    <Card.Body data-cy={`card-season-${i}`} color="fg.muted">{quiz.season}</Card.Body>
                    <Card.Footer justifyContent="flex-end">
                       <Link href={`/view-quiz/${quiz.id}`}><Button data-cy={`card-button-${i}`}>View</Button></Link>
                    </Card.Footer>
                </Card.Root>)}
        </Stack>
    </>
}