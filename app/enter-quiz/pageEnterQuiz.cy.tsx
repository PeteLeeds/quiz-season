import EnterQuiz from './page'

describe('<EnterQuiz />', () => {
  it('renders with title', () => {
    cy.mount(<EnterQuiz />)
    cy.get('h2').contains('Enter Quiz')
  })

  it('moves user into position when clicking', () => {
    cy.mount(<EnterQuiz />)
    cy.get('.chakra-stack').eq(1).find('.chakra-card__root').eq(1).click()
    cy.get('.chakra-stack').eq(1).find('.chakra-card__root').eq(2).click()
    cy.get('.chakra-stack').eq(2).find('.chakra-card__root').eq(0).contains('Chris')
    cy.get('.chakra-stack').eq(2).find('.chakra-card__root').eq(1).contains('Debbie')
  })

  it('moves user out of position when pressing delete', () => {
    cy.mount(<EnterQuiz />)
    cy.get('.chakra-stack').eq(1).find('.chakra-card__root').eq(1).click()
    cy.get('.chakra-stack').eq(1).find('.chakra-card__root').eq(2).click()
    cy.get('.chakra-stack').eq(2).find('.chakra-card__root').eq(0).find('button').eq(0).click()
    cy.get('.chakra-stack').eq(2).find('.chakra-card__root').eq(0).contains('Debbie')
    cy.get('.chakra-stack').eq(1).find('.chakra-card__root').eq(2).contains('Chris')
  })

  it('ties position when pressing tie', () => {
    cy.mount(<EnterQuiz />)
    cy.get('.chakra-stack').eq(1).find('.chakra-card__root').eq(1).click()
    cy.get('.chakra-stack').eq(1).find('.chakra-card__root').eq(2).click()
    cy.get('.chakra-stack').eq(2).find('.chakra-card__root').eq(1).find('button').eq(1).click()
    cy.get('.chakra-stack').eq(2).find('p').eq(0).contains('1')
    cy.get('.chakra-stack').eq(2).find('p').eq(1).contains('1')
  })
})