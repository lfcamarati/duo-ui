import {UserLogin} from '../types/userLogin.interface'
import * as AuthActions from './actions'
import * as fromReducer from './reducers'

describe('authReducers', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      // arrange
      const {initialState} = fromReducer
      const action = {
        type: 'unknown',
      }

      // act
      const actual = fromReducer.reducers(initialState, action)

      // assert
      expect(actual).toBe(initialState)
    })
  })

  describe('login action', () => {
    it('should not update the state', () => {
      // arrange
      const {initialState} = fromReducer
      const userLogin: UserLogin = {
        username: 'user',
        password: 'pass',
      }
      const action = AuthActions.login(userLogin)

      // act
      const actual = fromReducer.reducers(initialState, action)

      // assert
      expect(actual).toEqual(initialState)
    })
  })

  describe('loginSuccess action', () => {
    it('should update the state with the token', () => {
      // arrange
      const {initialState} = fromReducer
      const token: string = '12345abcde'
      const expected = {
        token: token,
        error: null,
      }
      const action = AuthActions.loginSuccess(token)

      // act
      const actual = fromReducer.reducers(initialState, action)

      // assert
      expect(actual).toEqual(expected)
    })
  })
})
