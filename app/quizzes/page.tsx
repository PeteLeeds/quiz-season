import { Button, Card, Heading, Link, Stack } from "@chakra-ui/react";

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
        <Heading size="5xl" paddingLeft="10" marginBottom="5">Quizzes</Heading>
        <Stack>
            {mockData.map(quiz =>
                <Card.Root marginLeft="10" marginRight="10" key={quiz.id} size="sm">
                    <Card.Header>
                        <Heading size="md">{quiz.name}</Heading>
                    </Card.Header>
                    <Card.Body color="fg.muted">{quiz.season}</Card.Body>
                    <Card.Footer justifyContent="flex-end">
                       <Link href={`/view-quiz/${quiz.id}`}><Button>View</Button></Link>
                    </Card.Footer>
                </Card.Root>)}
        </Stack>
    </>
}