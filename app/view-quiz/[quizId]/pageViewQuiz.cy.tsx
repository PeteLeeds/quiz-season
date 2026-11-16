import React from 'react'
import ViewQuiz, { QuizTable } from './page'

describe('<ViewQuiz />', () => {
  const mockQuiz = {
    id: '123',
    name: 'Pointless',
    season: 'Quiz Season 2026',
    results: [{
      user: 'Chris',
      points: 30
    },
    {
      user: 'Bob',
      points: 29
    },
    {
      user: 'Joanne',
      points: 28
    }]
  }

  it('renders with title', () => {
    cy.mount(<QuizTable quiz={mockQuiz} />)
    cy.get('h2').contains('Pointless')
  })

  it('displays users in correct order', () => {
    cy.mount(<QuizTable quiz={mockQuiz} />)
    cy.get('table').find('tr').eq(1).find('td').contains('Chris')
    cy.get('table').find('tr').eq(2).find('td').contains('Bob')
  })
})