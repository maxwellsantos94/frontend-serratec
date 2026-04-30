# Dia 3: Introdução ao CSS e Estilização

## 🎯 Objetivo da Aula

Compreender como aplicar estilos a uma página HTML, dominando os diferentes tipos de seletores, a hierarquia de especificidade e as principais propriedades de texto, cores, bordas e sombras.

---

# 1. Formas de Aplicar CSS

Existem três maneiras de incluir CSS em um projeto:

1. **Externo (Recomendado):** Arquivo `.css` separado vinculado via tag `<link>`. Facilita a manutenção e reutilização em várias páginas.
2. **Interno:** Estilos escritos dentro da tag `<style>` no `<head>`. Ideal para estudos ou estilos específicos de uma única página.
3. **Inline:** Estilo aplicado diretamente no atributo `style` da tag HTML. Possui a maior prioridade, mas dificulta a manutenção do código.

---

# 2. Seletores e Especificidade

Os seletores definem quais elementos HTML serão estilizados.

- **Seletor de Tag:** Afeta todos os elementos do tipo declarado (ex: `p`, `h1`, `body`).
- **Seletor de Classe (`.nome`):** Identifica um grupo de elementos. Um mesmo elemento pode ter várias classes.
- **Seletor de ID (`#nome`):** Identifica um elemento único na página.

### ⚖️ Regra de Especificidade

Quando há conflito de estilos, o navegador segue esta ordem de prioridade:
**Inline (1000) > ID (100) > Classe (10) > Tag (1)**

---

# 3. Propriedades de Texto e Tipografia

Principais comandos para manipular a aparência do texto:

- **`font-family`:** Define a fonte (sempre incluir uma fonte genérica como `sans-serif` como fallback).
- **`font-size`:** Tamanho do texto (ex: `16px` ou `1rem`).
- **`text-align`:** Alinhamento horizontal (`left`, `center`, `right`).
- **`line-height`:** Espaçamento entre as linhas de um parágrafo.
- **`text-transform`:** Modifica o texto para `uppercase`, `lowercase` ou `capitalize`.
- **`text-decoration`:** Controla decorações como sublinhados (`underline`) ou riscado (`line-through`).

---

# 4. Cores e Fundos

As cores podem ser aplicadas ao texto (`color`) ou ao fundo (`background-color`):

- **Nomes:** `tomato`, `blue`, `black`.
- **Hexadecimal:** `#1d4ed8` (combinação de Vermelho, Verde e Azul).
- **RGB / RGBA:** `rgba(0, 0, 0, 0.35)` — Onde o valor "A" (Alpha) define a transparência.

---

# 5. Bordas e Arredondamento

A propriedade `border` permite definir a moldura de um elemento.

- **Sintaxe:** `espessura estilo cor` (Ex: `2px solid #000`).
- **Estilos comuns:** `solid` (linha contínua), `dashed` (tracejada), `dotted` (pontilhada).
- **`border-radius`:** Arredonda os cantos. Valores altos (ex: `50px`) criam formatos de pílula ou círculos.

---

# 6. Efeitos Visuais: Sombras

- **`box-shadow`:** Adiciona sombra à caixa do elemento. Parâmetros: `deslocamento-x deslocamento-y desfoque cor`.
- **`text-shadow`:** Aplica sombra diretamente às letras do texto.

---

# 📝 Atividades Práticas

### Exercício 1: Hierarquia e Estilo

Crie um cabeçalho centralizado com sombra no texto e mude a fonte padrão do corpo da página para uma fonte sem serifa.

### Exercício 2: Cards de Conteúdo

Crie uma `div` com fundo branco, bordas arredondadas e uma sombra suave (`box-shadow`) para simular um card flutuante.

### Exercício 3: Botões e Links

Estilize um link para que ele não tenha sublinhado, tenha uma cor de fundo sólida, preenchimento interno (`padding`) e cantos arredondados, fazendo-o parecer um botão moderno.

---

# 📚 Próximo Passo

No **Dia 4**, exploraremos o **Box Model** (margens, preenchimentos e tamanhos) e as técnicas iniciais de layout com **Flexbox**.
