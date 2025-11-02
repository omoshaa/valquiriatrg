# 🌿 Portfólio Profissional — Valquiria Telis de Lima

Este repositório contém a versão final e publicada do site one-page (landing page) de Valquiria Telis de Lima — terapeuta especializada em Terapia de Reprocessamento Generativo (TRG).

Status: ✅ Trabalho concluído — HTML, CSS e JavaScript premium integrados, conteúdo TRG finalizado, contatos atualizados e pronto para deploy.

## O que foi implementado

- Estrutura HTML semântica e otimizada (`index.html`).
- Design system premium e responsivo (`styles.css`).
- Interações, animações e comportamentos polidos (`script.js`).
- Conteúdo editorial completo sobre TRG (texto profissional e educativo).
- Contatos atualizados e testados: WhatsApp, e-mail e Instagram.
- Acessibilidade e performance: lazy-loading de imagens, atributos ARIA básicos e animações respeitando preferências de redução de movimento.

## Principais funcionalidades (já ativas)

- Navegação fixa e menu mobile com bloqueio de rolagem ao abrir
- Scroll suave e scroll-spy (link ativo conforme a seção)
- Formulário de contato com validação básica e integração opcional pronta
- Animações on-scroll sutis e micro-interações
- Gradientes, ícones SVG e sistema tipográfico profissional
- Botão de voltar ao topo

## Arquivos importantes

```
├── index.html          # Página principal final (versão premium ativada)
├── styles.css          # Estilos finais e design system
├── script.js           # Interações, scroll-spy e validações
├── index-novo.html     # Variante/backup do premium (mantida como histórico)
├── styles-novo.css     # Variante/backup do premium (mantida como histórico)
└── script-novo.js      # Variante/backup do premium (mantida como histórico)
```

> Observação: a versão ativa é `index.html` (apontando para `styles.css` e `script.js`). As variantes `*-novo.*` foram preservadas como histórico/backup.

## Contatos (já atualizados)

- WhatsApp: (19) 99816-1689
- E-mail: kila.com@hotmail.com
- Instagram: @valquiria.terapeutatrg

## Como visualizar localmente (rápido)

1. Abra um terminal na pasta do projeto.

Com Python (recomendado para testes rápidos):

```powershell
python -m http.server 8000
# Abra: http://localhost:8000/index.html
```

Com Node.js (npx serve):

```powershell
npx serve .
# Abra o link fornecido pelo serve
```

Ou use a extensão Live Server do VS Code: clique com o botão direito em `index.html` → "Open with Live Server".

## Deploy sugerido (passos rápidos)

- Netlify: arraste a pasta para o dashboard ou conecte o repositório GitHub.
- Vercel: conecte o repositório e publique (deploy automático).
- GitHub Pages: publique a branch principal e aponte a página para `index.html`.

## Personalização pós-entrega (opcional)

- Substituir a foto profissional em `index.html` (tag `<img>` principal).
- Inserir endereço completo na seção de contato.
- Configurar um endpoint real para o formulário (Formspree / Netlify Forms / back-end próprio).
- Ajustar variáveis de cor em `styles.css` se desejar outra paleta.

## Verificações realizadas

- [x] HTML semântico e meta tags SEO básicas
- [x] Tipografia carregada via Google Fonts
- [x] Teste básico de responsividade (mobile/tablet/desktop)
- [x] Links de contato verificados (WhatsApp / email / Instagram)
- [x] Correções de CSS e JS aplicadas (sem erros de sintaxe)

## Próximos passos (opcionais)

1. Integrar formulário a um serviço real (Formspree/Netlify) — se desejar, eu posso configurar.
2. Fazer otimização final de imagens (compressão/formatos modernos).
3. Adicionar Google Analytics / Search Console.

## Suporte

Se quiser que eu realize qualquer passo opcional (deploy + configuração de formulário + analytics), diga qual opção prefere e eu aplico as mudanças diretamente.

---

**Feito com cuidado e pronto para apresentar.**
