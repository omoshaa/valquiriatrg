# 🌿 Portfólio Profissional — Valquiria Telis de Lima

Site de portfólio premium de uma página (landing page) para a terapeuta Valquiria Telis de Lima, especializada em Terapia de Reprocessamento Generativo (TRG).

## ✨ Características

### Design Premium

- 🎨 Paleta de cores sofisticada e calmante
- 📱 Totalmente responsivo (mobile-first)
- ✨ Animações suaves e micro-interações
- 🎭 Gradientes e efeitos visuais modernos
- 🖼️ Layout em grid profissional

### Funcionalidades

- 🧭 Navegação fixa com scroll spy (destaque automático)
- 📜 Scroll suave entre seções
- 📝 Formulário de contato com validação
- 📱 Menu mobile animado
- ⬆️ Botão "Voltar ao topo"
- 🎬 Animações on-scroll
- 🖼️ Lazy loading de imagens
- 🌊 Efeito parallax sutil

### Seções

1. **Hero** — Introdução impactante com CTA
2. **Sobre Mim** — Biografia e credenciais
3. **O que é TRG** — Explicação detalhada da terapia
4. **Serviços** — Valores e detalhes das sessões
5. **Contato** — Formulário + informações + redes sociais
6. **Footer** — Links úteis e copyright

## 📁 Arquivos

```
├── index-novo.html      # Estrutura HTML semântica
├── styles-novo.css      # Design system completo
├── script-novo.js       # Interações e animações
└── README-NOVO.md       # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir diretamente

Clique duas vezes em `index-novo.html` para abrir no navegador.

### Opção 2: Servidor local (recomendado)

**Com Python:**

```powershell
python -m http.server 8000
# Acesse: http://localhost:8000/index-novo.html
```

**Com Node.js (npx):**

```powershell
npx serve
# Acesse o link fornecido no terminal
```

**Com VS Code:**

- Instale a extensão "Live Server"
- Clique direito em `index-novo.html` → "Open with Live Server"

## 🎨 Personalização

### 1. Informações de Contato (já atualizadas)

- ✅ WhatsApp: (19) 99816-1689
- ✅ E-mail: kila.com@hotmail.com
- ✅ Instagram: @valquiria.terapeutatrg

### 2. Foto Profissional

No `index-novo.html`, linha ~98, substitua:

```html
<img
  src="https://images.unsplash.com/photo-..."
  alt="Valquiria Telis de Lima"
/>
```

Por:

```html
<img src="caminho/para/sua-foto.jpg" alt="Valquiria Telis de Lima" />
```

### 3. Endereço

No `index-novo.html`, linha ~244, substitua:

```html
<p class="contact__info-text">[Insira o endereço completo aqui]</p>
```

### 4. Cores (se desejar ajustar)

No `styles-novo.css`, linhas 6-13, ajuste as variáveis:

```css
--primary-hue: 168; /* Tom principal */
--primary-sat: 28%; /* Saturação */
--primary-lig: 46%; /* Luminosidade */
```

### 5. Fontes (se desejar trocar)

No `index-novo.html`, linha 11, troque a URL do Google Fonts.
No `styles-novo.css`, linhas 27-28, atualize:

```css
--body-font: "Inter", sans-serif;
--title-font: "Playfair Display", serif;
```

## 🔧 Integrações Opcionais

### Formulário de Contato Real

Por padrão, o formulário redireciona para o WhatsApp após envio. Para integração com back-end:

**Opção 1: Formspree (gratuito)**

1. Crie uma conta em [formspree.io](https://formspree.io)
2. Obtenha seu endpoint
3. No `index-novo.html`, adicione ao `<form>`:

```html
<form action="https://formspree.io/f/SEU-ID" method="POST" ...></form>
```

**Opção 2: Netlify Forms (gratuito)**
Se hospedar na Netlify, adicione ao `<form>`:

```html
<form netlify netlify-honeypot="bot-field" ...></form>
```

### Google Analytics

Antes do `</head>` em `index-novo.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXX");
</script>
```

### Favicon

Antes do `</head>`:

```html
<link rel="icon" type="image/png" href="favicon.png" />
```

## 🌐 Deploy (Hospedagem Gratuita)

### Netlify (Recomendado)

1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o dashboard
3. Pronto! Seu site está no ar

### Vercel

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub ou faça upload
3. Deploy automático

### GitHub Pages

1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages → Source: main branch
4. Acesse: `https://seu-usuario.github.io/nome-repo/index-novo.html`

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis (iOS/Android)

## 🎯 Performance

- ⚡ Carregamento rápido
- 🖼️ Lazy loading de imagens
- 📦 CSS otimizado
- 🚀 JavaScript minificável

## 📝 Próximos Passos Sugeridos

1. ✅ Adicionar foto profissional real
2. ✅ Preencher endereço completo
3. ⚙️ Configurar integração de formulário (Formspree/Netlify)
4. 🌐 Fazer deploy em plataforma de hospedagem
5. 📊 Adicionar Google Analytics
6. 🎨 Adicionar favicon personalizado
7. 🔍 Otimizar meta tags para SEO
8. 📸 Otimizar imagens (compressão)

## 🆘 Suporte

Se precisar de ajuda para:

- Configurar o formulário de contato
- Fazer deploy do site
- Ajustar cores ou layout
- Adicionar novas funcionalidades

Basta me pedir! 😊

---

**Desenvolvido com ❤️ e atenção aos detalhes.**
