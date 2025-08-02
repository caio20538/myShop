//uma caixa que guarda as infos do usuário e compartilha por toda aplicação
//manipula tbm o estado

interface User{
    name: string,
    email: string
}

interface UserState{
    user: User | null;
}

const initialState: UserState = {
    user: null,
}

interface UserAction{
    type: string,
    payload?: User
}

//todo reducer deve retornar o nosso estado atualizado
export function userReducer(state = initialState, action:UserAction): UserState{
    if(action.type === 'user/login'){
        return{
            ...state,
            user: action.payload as User,
        }
    }
    
    return{
        ...state,
        user: null
    }
}