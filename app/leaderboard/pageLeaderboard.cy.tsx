import Leaderboard from './page'

describe('<Leaderboard />', () => {
  it('renders with title', () => {
    cy.mount(<Leaderboard />)
    cy.get('h2').contains('Leaderboard')
  })

  it('creates table with expected rows', () => {
    cy.mount(<Leaderboard />)
    cy.get('table').find('th').contains('Position')
    cy.get('table').find('th').contains('Name')
    cy.get('table').find('th').contains('Score')
  })

  it('displays users in correct order', () => {
    cy.mount(<Leaderboard />)
    cy.get('table').find('tr').eq(1).find('td').contains('Chris')
    cy.get('table').find('tr').eq(2).find('td').contains('John')
  })

  it('displays quiz results if table row is clicked on', () => {
    cy.mount(<Leaderboard />)
    cy.get('table').find('tr').eq(1).click()
    cy.get('table').find('tr').eq(2).contains('Points Breakdown')
  })
})