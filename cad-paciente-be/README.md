# **Cadastrar Paciente - API com Node.js e MongoDB**

API REST para gerenciar pacientes, utilizando **Node.js**, **Express**, **MongoDB**, e o ORM **Mongoose**, estruturada em **3 camadas**: **Controller**, **Service**, e **Model**.

---

## **Funcionalidades**

- **Cadastrar Paciente**: Adicionar novos pacientes ao banco.
- **Listar Pacientes**: Consultar a lista de pacientes cadastrados.

---

## **Tecnologias Utilizadas**

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**

---

## **Estrutura do Projeto**
```
cad-paciente-be/ 
├── controllers/ 
│ └── pacienteController.js 
├── models/
│ └── paciente.js 
├── services/ 
│ └── pacienteService.js 
├── routes/ 
│ └── pacienteRoutes.js 
├── server.js 
├── package.json 
└── README.md
```

---

## **Instalação**

1. Clone o repositório:

   ```
   git clone (https://github.com/mclaudiany/cad-paciente-app-be.git
   ```
2. Instale as dependências:
```
    cd cad-paciente-be
    npm install
```
4. Inicie o MongoDB. Caso não esteja instalado, siga este [guia](https://docs.mongodb.com/manual/installation/) .

5. Inicie o servidor:
``` 
    node server.js 
```

1. Acesse a API: http://localhost:3000

---
## **Endpoints**

**Verificar Saúde do Servidor**
  - GET /health
  - Resposta:

            {
                "status": 200,
                "message": "Servidor ativo!"
            }

**Cadastrar Paciente**
  - POST /api/pacientes
  - Body (JSON):

           {
                "nome": "João Silva",
                "idade": 35,
                "endereco": "Rua das Flores, 123",
                "telefone": "987654321",
                "email": "joao@example.com"
           }
          


**Listar Contatos**
   - GET /api/pacientes
   - Resposta:

            [
                {
                    "_id": "605c5f6e2c8a4e23f8d7c333",
                    "nome": "João Silva",
                    "idade": 35,
                    "endereco": "Rua das Flores, 123",
                    "telefone": "987654321",
                    "email": "joao@example.com",
                    "createdAt": "2023-03-18T12:34:56.789Z"
                }
            ]



---

### **Dicas para escrever um README eficiente:**

1. **Título claro** com o nome do projeto.
2. **Descrição concisa** do projeto e funcionalidades.
3. **Tecnologias usadas** para fácil identificação.
4. **Instruções de instalação** passo a passo.
5. **Exemplos claros** dos endpoints com requisições e respostas.
6. **Como testar** a API.
7. **Melhorias futuras** para mostrar evolução planejada.
8. **Licença e autor** para creditar corretamente.

---

Esse **README** documenta o uso da API, ajudando quem for utilizar ou desenvolver o projeto.
