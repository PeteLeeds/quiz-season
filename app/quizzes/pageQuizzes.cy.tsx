import Quizzes from './page'

describe('<Quizzes />', () => {
  it('renders with title', () => {
    cy.mount(<Quizzes />)
    cy.get('h2').contains('Quizzes')
  })

  it('displays button to enter new quiz', () => {
    cy.mount(<Quizzes />)
    cy.get('button').contains('Enter New Quiz')
  })

  it('displays box with information on quiz', () => {
    cy.mount(<Quizzes />)
    cy.get('div').find('h2').contains('Pointless')
    cy.get('div').find('div').contains('Quiz Season 2026')
    cy.get('div').find('button').contains('View')
  })
})