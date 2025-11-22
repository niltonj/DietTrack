# DietTrack 🥗

Aplicação web responsiva para controlar o consumo diário de calorias através do cadastro de refeições. O aplicativo permite que o usuário estime as calorias do seu prato utilizando uma chamada ao ChatGPT e cadastre este valor calórico em um log diário de refeições.

## ✨ Funcionalidades

- 📝 **Cadastro de Refeições**: Registre suas refeições com nome, descrição e calorias
- 🤖 **Estimativa com IA**: Use o ChatGPT para estimar automaticamente as calorias baseado na descrição da refeição
- 📊 **Resumo Diário**: Visualize o total de calorias consumidas no dia, número de refeições e média por refeição
- 📋 **Histórico Completo**: Acompanhe todas as suas refeições registradas
- 💾 **Armazenamento Local**: Seus dados são salvos localmente no navegador
- 📱 **Design Responsivo**: Interface adaptada para desktop, tablet e mobile

## 🚀 Como Usar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Chave API da OpenAI (para usar a estimativa de calorias com IA)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/niltonj/DietTrack.git
cd DietTrack
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Configuração da API OpenAI

1. Obtenha uma chave API em [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Na aplicação, insira sua chave no campo "Chave API OpenAI" no topo da página
3. A chave é armazenada localmente no navegador e nunca é enviada para outros servidores além da OpenAI

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool e dev server moderno e rápido
- **OpenAI API** - Integração com ChatGPT para estimativa de calorias
- **CSS3** - Estilização responsiva
- **LocalStorage** - Persistência de dados no navegador

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o ESLint

## 🎨 Interface

A aplicação possui:

- **Header**: Cabeçalho com gradiente roxo e título da aplicação
- **API Key Section**: Campo para configurar a chave da OpenAI
- **Summary Cards**: Cards com resumo de calorias do dia
- **Meal Form**: Formulário para cadastrar refeições com botão de estimativa por IA
- **Meal Log**: Lista de todas as refeições cadastradas com opção de deletar

## 💡 Como Usar a Estimativa de Calorias

1. Configure sua chave API da OpenAI
2. No formulário de cadastro, descreva sua refeição (ex: "1 prato de arroz, feijão, bife e salada")
3. Clique em "🤖 Estimar Calorias com IA"
4. Aguarde a estimativa do ChatGPT
5. O valor será preenchido automaticamente no campo de calorias
6. Você pode ajustar o valor se desejar
7. Clique em "➕ Adicionar Refeição"

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout de 3 colunas para os cards de resumo
- **Tablet**: Layout de 2 colunas
- **Mobile**: Layout de 1 coluna com elementos empilhados

## 🔒 Privacidade

- Todos os dados das refeições são armazenados localmente no seu navegador
- A chave API da OpenAI é armazenada localmente
- Nenhum dado é enviado para servidores externos além da OpenAI para estimativa de calorias

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

