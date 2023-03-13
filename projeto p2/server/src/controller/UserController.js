import { compareSync } from "bcrypt"
import { randomUUID } from 'crypto'
import User from "../DAO/User.js"

export default class UserController {
    static rotas(app) {
        app.post('/login', UserController.login)
        // app.post('/users', UserController.create)
    }

    static async login(req, res) {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                message: 'Os campos "email" e "password" são obrigatórios'
            })
        }

        const user = await User.findByProperty('email', email)
        if (!user) {
            return res.status(404).send({
                message: 'Usuário não encontrado'
            })
        }

        const passwordsMatch = compareSync(password, user.encryptedPassword)
        if (!passwordsMatch) {
            return res.status(401).send({
                message: 'Senha incorreta'
            })
        }

        user.authToken = randomUUID()
        await user.save()

        res.status(200).send({
            token: user.authToken
        })
    }
        //daqui pra baixo eu tentei criar um novo user com cadastro
    static async create(req, res) {
        const { email, password } = req.body
        if (!email || !password) {
          return res.status(400).send({
            message: 'Os campos "email" e "password" são obrigatórios'
          })
        }
      
        // Verifica se já existe um usuário com o mesmo email
        const existingUser = await User.findByProperty('email', email)
        if (existingUser) {
          return res.status(409).send({
            message: 'Já existe um usuário com o mesmo email'
          })
        }
      
        // Cria um novo usuário com o email e a senha fornecidos
        const user = new User({
          email,
          encryptedPassword: await hash(password, 10)
        })
      
        // Salva o novo usuário no banco de dados
        await user.save()
      
        res.status(201).send({
          message: 'Usuário criado com sucesso'
        })
      }
      
}