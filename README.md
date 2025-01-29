![freepik__background__68232 (1)](https://github.com/user-attachments/assets/dc7f102b-9f1a-4109-9521-2e7629b0b582)

# Social Portfólio

Bem-vindo ao **Social Portfólio**! Este projeto foi desenvolvido com o objetivo de praticar e aprimorar minhas habilidades em **Front-end** e **Back-end**.

## 🎡 Sobre o Projeto
O **Social Portfólio** é uma plataforma que combina os conceitos de **rede social, FAQ e portfólio** em um só lugar. A ideia é permitir que os usuários compartilhem seus projetos, interajam entre si e tenham um espaço dedicado para perguntas e respostas.

## 💪 Tecnologias Utilizadas
O projeto utiliza as seguintes tecnologias:
- **Front-end:** React, Axios, Date-fns, Universal Cookies
- **Back-end:** Prisma, Express, Bcrypt, Multer, Zod
- **Banco de Dados:** PostgreSQL (recomendado)
- **Outras Ferramentas:** JWT para autenticação, conversão de imagens para WebP

**Destaque:** Desenvolvi um **componente de emoji próprio**, pois achei as bibliotecas prontas um pouco complexas para personalização.

## 🎨 Estrutura do Projeto
O projeto segue uma estrutura **monorepo**, onde o código está organizado nas seguintes pastas:
- **client/**: Contém o código do front-end, incluindo seu próprio `package.json` e dependências.
- **server/**: Contém o código do back-end, também com seu próprio `package.json` e dependências.

Atualmente, não há uma configuração para instalar o backend e frontend juntos automaticamente.

## 📂 Configuração do Ambiente
Antes de rodar o projeto, é necessário criar arquivos `.env` no **frontend** e **backend**.

### 📌 Frontend (`client/.env`)
```
BACKEND_URL=
```

### 📌 Backend (`server/.env`)
```
DATABASE_URL=
JWT_SECRET=
PORT=
CORS_ORIGIN=
```

## 🎉 Funcionalidades
- Criar posts com **dúvidas ou depoimentos** (necessário criar uma conta, processo rápido).
- Upload de **imagens em posts**, restrito a administradores.
- Sistema de **curtidas**, armazenando o engajamento no banco de dados.
- **Comentários** são permitidos apenas para administradores (por enquanto).
- No futuro, visitantes (guests) poderão curtir posts e comentários.

### Recursos em Desenvolvimento
- **Edição de perfil**
- **Captcha para segurança**
- **Conversão automática de imagens para WebP**
- **Log de sessões**
- **Posts com tamanhos de fonte personalizáveis**
- **Outras melhorias e correções**

## 🛠 Como Rodar o Projeto
Para rodar o projeto localmente, siga estes passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/social-portfolio.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd social-portfolio
   ```
3. Instale as dependências separadamente:
   ```bash
   cd client && npm install  # ou yarn install
   cd ../server && npm install  # ou yarn install
   ```
4. Execute as migrations no backend para desenvolvimento:
   ```bash
   cd server && npx prisma migrate dev
   ```
   Ou no deploy:
   ```bash
   cd server && npx prisma migrate deploy
   ```
5. Para desenvolvimento, utilize:
   ```bash
   cd client && npm run dev  # ou yarn dev
   cd ../server && npm run dev  # ou yarn dev
   ```
6. Para rodar em produção, primeiro faça o build:
   ```bash
   cd client && npm run build
   cd ../server && npm run build
   ```
   Depois inicie:
   ```bash
   cd client && npm start  # ou yarn start
   cd ../server && npm start  # ou yarn start
   ```
7. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 🛠 Contribuição
Fique à vontade para contribuir! Basta seguir os passos:
1. Faça um **fork** do repositório.
2. Crie uma **branch** para sua feature (`git checkout -b minha-feature`).
3. Faça o **commit** das suas alterações (`git commit -m 'Adicionando minha feature'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um **Pull Request**.

## 🌟 Contato
Caso tenha alguma dúvida ou sugestão, entre em contato:
- **Email:** [jeanpj12@gmail.com]
- **LinkedIn:** [jeanjr](https://www.linkedin.com/in/jeanjr/)
- **GitHub:** [jeanpj12](https://github.com/jeanpj12)

---

Este README será atualizado conforme o projeto for evoluindo. Obrigado por conferir o **Social Portfólio**! 🚀

