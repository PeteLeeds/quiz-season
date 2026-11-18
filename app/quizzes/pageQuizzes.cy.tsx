import Quizzes from './page'

describe('<Quizzes />', () => {
  it('renders with title', () => {
    cy.mount(<Quizzes />)
    cy.get('[data-cy="heading"]').contains('Quizzes')
  })

  it('displays button to enter new quiz', () => {
    cy.mount(<Quizzes />)
    cy.get('[data-cy="enter-quiz-button"]').contains('Enter New Quiz')
  })

  it('displays box with information on quiz', () => {
    cy.mount(<Quizzes />)
    cy.get('[data-cy="card-0"]')
    cy.get('[data-cy="card-header-0"]').contains('Pointless')
    cy.get('[data-cy="card-season-0"]').contains('Quiz Season 2026')
    cy.get('[data-cy="card-button-0"]').contains('View')
  })
})