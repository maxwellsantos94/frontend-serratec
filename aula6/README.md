# Dia 6: JavaScript e Manipulação do DOM

## 🎯 Objetivo da Aula

Sair da estrutura estática e dar vida à página. Vamos aprender a utilizar o JavaScript para manipular o DOM, reagir a eventos do usuário e criar interfaces verdadeiramente interativas.

---

# 1. O Que é JavaScript?

O JS é a "camada de comportamento" da web. Enquanto o HTML define a estrutura e o CSS a aparência, o JavaScript dita o que acontece quando o usuário interage com a página. Ele é executado diretamente no navegador.

> **Dica de Ouro:** Sempre inclua seu arquivo `.js` no final do `<body>` (antes do fechamento `</body>`). Isso garante que o navegador já tenha desenhado todos os elementos antes de tentar manipulá-los.

---

# 2. Variáveis e Tipos de Dados

### 📦 Variáveis: Qual usar?

A regra moderna (ES6+) é simples:

- **`const`**: Para valores que **não** mudam. Use sempre como padrão.
- **`let`**: Para valores que **vão** mudar (ex: contadores).
- **`var`**: **Evite**. É uma forma antiga que pode causar bugs de escopo.

### 🧬 Tipos Primitivos

| Tipo        | Exemplo                                          |
| :---------- | :----------------------------------------------- |
| **String**  | `'Texto'`, `"Olá"`, `` `Template ${variavel}` `` |
| **Number**  | `42`, `3.14`                                     |
| **Boolean** | `true`, `false`                                  |
| **Object**  | `{ nome: 'Ana', idade: 25 }`                     |
| **Array**   | `['Maçã', 'Banana']`                             |

---

# 3. O DOM (Document Object Model)

O DOM é a árvore que representa sua página HTML na memória. O JS interage com essa árvore para alterar elementos em tempo real.

### 🔍 Seleção de Elementos

- `document.getElementById('id')`: Seleciona pelo ID único (o mais rápido).
- `document.querySelector('.classe')`: Seleciona o **primeiro** elemento que corresponde ao seletor CSS.
- `document.querySelectorAll('.classe')`: Seleciona **todos** os elementos (retorna uma lista chamada _NodeList_).

### 🛠️ Manipulação (O que fazer com eles)

- **Texto:** `elemento.textContent = 'Novo texto'`
- **HTML:** `elemento.innerHTML = '<b>Negrito</b>'` (cuidado com segurança).
- **Estilo:** `elemento.style.color = 'red'` (camelCase no JS).
- **Classes:** `elemento.classList.add('ativa')` ou `elemento.classList.toggle('ativa')`.
- **Criação:** `document.createElement('li')` + `appendChild()`.

---

# 4. Eventos

A interatividade acontece através de "escutadores" de eventos (`addEventListener`).

```javascript
// Sintaxe padrão
elemento.addEventListener("click", (event) => {
  console.log("Botão clicado!");
  event.preventDefault(); // Impede comportamento padrão do navegador
});
```

**Principais Eventos:**

- **Mouse:** `click`, `dblclick`, `mouseenter`, `mouseleave`.
- **Teclado:** `keydown`, `keyup`.
- **Formulário:** `input` (toda vez que o valor muda), `submit`.

---

# 📝 Atividades Práticas

### Exercício 1: Manipulador de Cores

Crie um botão que, ao ser clicado, altera o `background-color` de um card na tela para uma cor aleatória presente em um array.

### Exercício 2: Lista Dinâmica (To-Do List)

Crie um campo de texto (`input`) e um botão "Adicionar". Ao clicar:

1. Pegue o valor do input (`.value`).
2. Crie um elemento `<li>` novo (`createElement`).
3. Adicione esse `<li>` dentro de uma `<ul>` existente (`appendChild`).
4. (Opcional) Adicione um botão de excluir ao lado de cada item.

### Exercício 3: Log de Teclado

Use `addEventListener` no objeto `document` para capturar o evento `keydown`. Exiba no console (ou em um elemento na tela) qual tecla o usuário pressionou.

---

# 📚 Glossário de Termos

- **DOM:** Document Object Model. A "ponte" entre o JS e o HTML.
- **NodeList:** Uma lista de elementos retornada pelo `querySelectorAll`, semelhante a um array.
- **Template Literals:** Strings usando crases (`` ` ``) que permitem inserir variáveis com `${}`.
- **Event Delegation:** Técnica de adicionar um evento a um elemento pai para gerenciar vários fi