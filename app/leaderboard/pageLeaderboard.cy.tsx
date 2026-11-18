import Leaderboard from './page'

describe('<Leaderboard />', () => {
  it('renders with title', () => {
    cy.mount(<Leaderboard />)
    cy.get('[data-cy="heading"]').contains('Leaderboard')
  })

  it('creates table with expected rows', () => {
    cy.mount(<Leaderboard />)
    cy.get('[data-cy="position-header"]').contains('Position')
    cy.get('[data-cy="name-header"]').contains('Name')
    cy.get('[data-cy="score-header"]').contains('Score')
  })

  it('displays users in correct order', () => {
    cy.mount(<Leaderboard />)
    cy.get('[data-cy="row-0"]').contains('Chris')
    cy.get('[data-cy="row-1"]').contains('John')
  })

  it('displays quiz results if table row is clicked on', () => {
    cy.mount(<Leaderboard />)
    cy.get('[data-cy="row-0"]').click()
    cy.get('[data-cy="breakdown-row-0"]')
  })
})