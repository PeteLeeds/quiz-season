import { Button, Card, Grid, GridItem, Heading, Link } from "@chakra-ui/react";

type MenuCardProps = {
  title: string;
  description: string;
  link: string;
}

const MenuCard = ({ title, description, link }: MenuCardProps) => <Card.Root>
  <Card.Body gap="2">
    <Card.Title mb="2">{title}</Card.Title>
    <Card.Description>{description}</Card.Description>
  </Card.Body>
  <Card.Footer justifyContent="flex-end">
    <Link href={link}><Button>Go</Button></Link>
  </Card.Footer>
</Card.Root>

export default function Home() {
  return (
    <>
      <Heading size="5xl" paddingLeft="10">Welcome to the Quiz Season App!</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap="6" padding="10">
        <GridItem>
          <MenuCard 
            title="Leaderboard" 
            description="View the current Quiz Season Leaderboard" 
            link="/leaderboard">
          </MenuCard>
        </GridItem>
        <GridItem>
          <MenuCard 
            title="Enter Quiz" 
            description="Enter the results of a quiz" 
            link="/">
          </MenuCard>
        </GridItem>
      </Grid>
    </>
  );
}
