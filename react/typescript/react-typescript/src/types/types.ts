export type PostProps = { id: number, title: string, body: string };

export type UserType = { sessionId: number, name: string };

export type StateType = { theme: string, fontSize: number };

// Discriminated unions

export type ColorActionType = { type: "CHANGE_THEME" };

export type SizeActionType = { type: "CHANGE_FONTSIZE", payload: number };

export type ActionType = ColorActionType | SizeActionType;

// --------------------------------------------------------


// Generics example
export type ItemProps<T> = {
  id: number,
  title: string,
  extra: T[],
};