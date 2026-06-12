# Travel Insurance Quote Engine - Frontend

Frontend desenvolvido em Next.js para o desafio técnico da Root Code.

## Demo

Frontend publicado:

https://root-code-quote-engine-frontend.vercel.app/

Backend:

https://root-code-quote-engine-ixgc.onrender.com

---

## Tecnologias

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Zustand
* Axios

---

## Funcionalidades

### Formulário de Cotação

Permite informar:

* Destino
* Data de início
* Data de fim
* Múltiplos viajantes
* Adicionais por viajante

### Resultado da Cotação

Exibe:

* Dias cobrados
* Subtotal por viajante
* Idade calculada
* Adicionais aplicados
* Avisos retornados pela API
* Desconto de grupo
* Total final

---

## Gerenciamento de Estado

Foi utilizado Zustand para:

* Armazenar a cotação atual
* Controlar loading
* Controlar erros
* Centralizar comunicação entre componentes

A escolha foi feita por simplicidade e baixo overhead para o tamanho do projeto.

---

## Estrutura

```txt
src/
├── app
├── components
├── services
├── store
└── types
```

### Components

* QuoteForm
* TravelerForm
* QuoteResult

### Services

* quote.service.ts

Responsável pelas chamadas HTTP.

### Store

* quote.store.ts

Responsável pelo estado global da aplicação.

---

## Experiência do Usuário

Implementado:

* Loading durante requisições
* Tratamento de erros
* Layout responsivo
* Interface inspirada na identidade visual da Root Code

---

## Executando Localmente

Instalar dependências:

```bash
npm install
```

Executar:

```bash
npm run dev
```

Aplicação:

http://localhost:3001

---

## Variáveis de Ambiente

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Produção:

```env
NEXT_PUBLIC_API_URL=https://root-code-quote-engine-ixgc.onrender.com/api
```

---

## Decisões

O desafio tinha como foco principal:

* Regras de negócio
* Consumo da API
* Exibição dos resultados

Por isso priorizei:

* Clareza
* Organização
* Responsividade
* Fluxo completo da cotação

em vez de investir tempo em bibliotecas visuais complexas ou padrões arquiteturais excessivos.

---

## Diferenciais Implementados

Além dos requisitos obrigatórios:

* Backend publicado em produção
* Frontend publicado em produção
* Docker no backend
* Persistência em banco de dados
* Endpoint de listagem de cotações
* Responsividade
* Estado global com Zustand

---

## Melhorias Futuras

Caso houvesse mais tempo, implementaria:

* Tela para histórico de cotações salvas
* Consumo do endpoint de listagem
* React Query para cache
* Testes de interface
* Filtros e busca
* Dark mode
* Internacionalização
* Design System próprio

A listagem de cotações foi implementada no backend como um diferencial, porém não foi consumida no frontend porque o foco do desafio estava concentrado no fluxo principal de cálculo e exibição da cotação.
