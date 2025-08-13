import z from 'zod'

export const validation_send_email = z.object({
    nomeCompleto: z.string().min(2, 'Deve ser um nome válido'),
    email: z.email('Email inválido'),
    nomeImobiliaria: z.string().min(2, 'Deve ser um nome válido'),
    telefone: z.string().min(10, 'Deve ser um telefone/celular válido'),
    mensagem: z.string().min(1,'Mensagem não pode ser vazia').max(200, 'Limite de caracteres atingido'),
})

export const default_values_send_email = {
    nomeCompleto: '',
    email: '',
    nomeImobiliaria: '',
    telefone: '',
    mensagem: '',
}