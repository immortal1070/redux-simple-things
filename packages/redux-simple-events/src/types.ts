export interface ActionTemplate {
  payload?: Record<string, unknown>
  [key: string]: unknown
}

export interface Action {
  type: string
  payload?: Record<string, unknown>
  [key: string]: unknown
}

export type ActionCreator = (...args: unknown[]) => ActionTemplate

export type State = Record<string, unknown>

export type Reducer = (state: State, action: Action) => State

export interface Event {
  type: string
  action: ActionCreator
  reducer?: Reducer
}

export type ReducersMapping = Record<string, Reducer>
