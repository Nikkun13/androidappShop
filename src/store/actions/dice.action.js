export const SELECT_DICE = 'SELECT_DICE'
export const FILTERED_DICE = 'FILTERES_DICE'

export const selectDice = (id) => ({
    type: SELECT_DICE,
    diceID: id
})

export const filteredDice = (id) => ({
    type: FILTERED_DICE,
    categoryID: id
})