import { Button, Card, Grid, GridItem, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="6" padding="10">
      <GridItem>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title mb="2">Leaderboard</Card.Title>
            <Card.Description>View the current Quiz Season Leaderboard</Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Link href="/leaderboard"><Button>Go</Button></Link>
          </Card.Footer>
        </Card.Root>
      </GridItem>
      <GridItem>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title mb="2">Enter Quiz</Card.Title>
            <Card.Description>Enter the results of a quiz</Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Link href="/leaderboard"><Button>Go</Button></Link>
          </Card.Footer>
        </Card.Root>
      </GridItem>
    </Grid>
  );
}
