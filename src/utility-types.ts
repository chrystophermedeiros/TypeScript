type User = {
    id?: number,
    username: string,
    password:string
}

const user:User = {
    id: 1,
    username:"chrystopher",
    password: '123456'
}

type PartiaUser = Partial<User> //deixa tudo opcional
type NewUser = Omit<User, 'id' | 'username'> //apenas restringe uma ou mais propriedade
type SearchUser = Pick<User,'username'>