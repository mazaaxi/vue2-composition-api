type StatePartial<T> = Partial<Omit<T, 'id'>> & { id: string }

export { StatePartial }
