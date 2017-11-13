import counterReducer from '../../src/app/reducers/counter'
import expect from 'expect'

describe('Counter reducer', () => {
  it('can add and subtract', () => {
    const state0 = counterReducer(undefined, {type: '@@redux/INIT'})
    expect(state0).toEqual(0)
    const state1 = counterReducer(state0, {type: 'COUNTER+'})
    expect(state1).toEqual(1)
    const state2 = counterReducer(state1, {type: 'COUNTER-'})
    expect(state2).toEqual(0)
  })
})
