export type State = any;

export type Action = {
  type: any;
  [extraProps: string]: any;
};

export type Reducer = (state: State, action: Action) => State;

export type Listeners = (() => void)[];

export type Listener = () => void;
