export interface Action {
  /**
   * type is optional because event creator receives action without type and set it automatically
   */
  type?: string
  payload?: Record<string, unknown>
  [key: string]: unknown
}

export type ActionCreator = (...args: unknown[]) => Action

export type State = Record<string, unknown>

export type Reducer = (state: State, action: Action) => State

export interface Event {
  type: string
  action: ActionCreator
  reducer?: Reducer
}

export type ReducersMapping = Record<string, Reducer>
