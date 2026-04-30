<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dia 4 — Box Model, Posicionamento e Flexbox</title>

    <style>
      /* ============================================================
       RESET E CONFIGURAÇÃO GLOBAL
       Uso do box-sizing: border-box para que padding e border 
       não alterem o tamanho final definido para o elemento.
    ============================================================ */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f0f0f0;
        color: #222;
        line-height: 1.6;
        padding: 2rem;
      }

      h1 {
        font-size: 2rem;
        margin-bottom: 0.4rem;
        color: #ffffff;
      }
      h2 {
        font-size: 1.3rem;
        color: #333;
        margin-top: 2rem;
        margin-bottom: 0.8rem;
        padding-bottom: 0.4rem;
        border-bottom: 2px solid #ccc;
      }
      h3 {
        font-size: 1rem;
        color: #444;
        margin-top: 1.2rem;
        margin-bottom: 0.4rem;
      }
      p {
        margin-bottom: 0.8rem;
      }

      #cabecalho {
        max-width: 720px;
        margin: 0 auto 2rem auto;
        background-color: #222;
        color: #fff;
        padding: 1.5rem 2rem;
        border-radius: 6px;
      }

      .secao {
        max-width: 720px;
        margin: 0 auto 1.5rem auto;
        background-color: #fff;
        padding: 1.5rem 2rem;
        border-radius: 6px;
      }

      .codigo {
        display: block;
        font-family: "Courier New", monospace;
        font-size: 0.85rem;
        background-color: #f4f4f4;
        border-left: 3px solid #999;
        padding: 0.8rem 1rem;
        margin: 0.8rem 0 1rem 0;
        white-space: pre;
        overflow-x: auto;
      }

      /* ============================================================
       1. BOX MODEL: A anatomia do elemento
       Composição: Content > Padding > Border > Margin
    ============================================================ */
      .bm-visual-container {
        border: 2px dashed #d97706; /* Representa a margem */
        background-color: #fef3c7;
        padding: 20px;
        text-align: center;
      }
      .bm-border {
        background-color: #fee2e2;
        border: 8px solid #ef4444;
        padding: 16px;
      }
      .bm-padding {
        background-color: #dbeafe;
        padding: 20px;
      }
      .bm-content {
        background-color: #bbf7d0;
        padding: 10px;
        font-weight: bold;
      }

      /* Utilitários de demonstração */
      .demo-margin {
        margin: 1rem auto;
        width: 250px;
        background: #e0e7ff;
        text-align: center;
        padding: 10px;
      }
      .demo-padding {
        background-color: #fce7f3;
        border: 1px solid #f9a8d4;
        margin-bottom: 10px;
      }

      /* ============================================================
       2. POSICIONAMENTO: Fluxo e Coordenadas
       static: Fluxo normal.
       relative: Deslocamento sem perder o espaço original.
       absolute: Sai do fluxo, ancora no ancestral posicionado mais próximo.
       fixed: Fixado na janela de visualização (viewport).
    ============================================================ */
      .pos-container {
        position: relative; /* Contexto de referência para filhos absolute */
        height: 150px;
        background-color: #f9fafb;
        border: 1px solid #ddd;
        margin: 1rem 0;
      }

      .pos-relative {
        position: relative;
        top: 15px;
        left: 20px;
        background-color: #93c5fd;
        padding: 5px 10px;
        display: inline-block;
      }

      .pos-absolute {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: #86efac;
        padding: 5px 10px;