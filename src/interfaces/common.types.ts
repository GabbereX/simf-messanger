import { ReactNode } from 'react'

export type Nullable<T> = null | T

export interface IPropsWithChildren {
	children: ReactNode
}
