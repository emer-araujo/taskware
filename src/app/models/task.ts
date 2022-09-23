/* Interface Modelo à ser implementada para manter a consistência da aplicação*/
export interface Task {
    id: number
    name: string
    last: string
    task: string
    email: string
    phone: string
    date_ini: any
    date_end: any
    classification: string
    status: boolean
}
