import EnterQuiz from './page'

describe('<EnterQuiz />', () => {
  it('renders with title', () => {
    cy.mount(<EnterQuiz />)
    cy.get('[data-cy="heading"]').contains('Enter Quiz')
  })

  it('moves user into position when clicking', () => {
    cy.mount(<EnterQuiz />)
    cy.get('[data-cy="add-1"]').click()
    cy.get('[data-cy="add-2"]').click()
    cy.get('[data-cy="user-1"]').contains('Chris')
    cy.get('[data-cy="user-2"]').contains('Debbie')
  })

  it('moves user out of position when pressing delete', () => {
    cy.mount(<EnterQuiz />)
    cy.get('[data-cy="add-1"]').click()
    cy.get('[data-cy="add-2"]').click()
    cy.get('[data-cy="remove-user-1"]').click()
    cy.get('[data-cy="user-1"]').contains('Debbie')
    cy.get('[data-cy="add-2"]').contains('Chris')
  })

  it('ties position when pressing tie', () => {
    cy.mount(<EnterQuiz />)
    cy.get('[data-cy="add-1"]').click()
    cy.get('[data-cy="add-2"]').click()
    cy.get('[data-cy="tie-user-2"]').click()
    cy.get('[data-cy="card-2"]').contains('1')
  })
})