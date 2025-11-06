 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/contato.html b/contato.html
new file mode 100644
index 0000000000000000000000000000000000000000..e1245eb60d6b090c320d5597d67e3eb86c231cd8
--- /dev/null
+++ b/contato.html
@@ -0,0 +1,222 @@
+<!DOCTYPE html>
+<html lang="pt-BR">
+<head>
+  <meta charset="UTF-8" />
+  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+  <title>Sintaxe Digital - Contato</title>
+  <link rel="preconnect" href="https://fonts.googleapis.com">
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
+  <script src="https://cdn.tailwindcss.com"></script>
+  <style>
+    body { font-family: 'Inter', sans-serif; }
+  </style>
+</head>
+<body class="bg-[#0A0F1A] text-gray-200">
+  <div class="relative overflow-hidden">
+    <div class="pointer-events-none absolute inset-0 opacity-60">
+      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
+        <defs>
+          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
+            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51,255,153,0.08)" stroke-width="1" />
+          </pattern>
+        </defs>
+        <rect width="100%" height="100%" fill="url(#grid)" />
+      </svg>
+    </div>
+
+    <!-- Header -->
+    <header class="sticky top-0 z-50 bg-[#0A0F1A]/95 backdrop-blur border-b border-white/5">
+      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
+        <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+        <div class="hidden items-center space-x-8 text-sm font-medium md:flex">
+          <a href="index.html" class="hover:text-white transition">Home</a>
+          <a href="sobre.html" class="hover:text-white transition">Sobre Nós</a>
+          <a href="marketing.html" class="hover:text-white transition">Marketing Digital</a>
+          <a href="dev-ia.html" class="hover:text-white transition">Dev &amp; IA</a>
+          <a href="contato.html" class="hover:text-white transition">Contato</a>
+        </div>
+        <a href="contato.html" class="hidden rounded-full border border-[#FF6B00] px-4 py-2 text-sm font-semibold text-[#FF6B00] transition hover:bg-[#FF6B00]/10 md:inline-flex">Briefing Rápido</a>
+        <button class="inline-flex items-center justify-center rounded border border-white/10 p-2 text-gray-200 md:hidden">
+          <span class="sr-only">Abrir menu</span>
+          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
+          </svg>
+        </button>
+      </nav>
+    </header>
+
+    <main id="contato">
+      <!-- Hero Contato -->
+      <section class="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24">
+        <div class="max-w-3xl space-y-6">
+          <h1 class="text-4xl font-bold text-white sm:text-5xl">Vamos conversar.</h1>
+          <h2 class="text-xl text-gray-300 sm:text-2xl">Seja para um projeto completo ou para tirar uma dúvida, estamos prontos para ouvir seu desafio.</h2>
+        </div>
+      </section>
+
+      <!-- Seção de Conversão -->
+      <section class="mx-auto max-w-6xl px-6 pb-24">
+        <div class="grid gap-10 lg:grid-cols-2">
+          <!-- Formulário -->
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <h3 class="text-2xl font-semibold text-white">Envie sua mensagem</h3>
+            <p class="mt-2 text-sm text-gray-400">Conte um pouco sobre seu projeto e nosso time retornará rapidamente.</p>
+            <form class="mt-8 space-y-6">
+              <div>
+                <label for="nome" class="mb-2 block text-sm font-medium text-gray-300">Nome Completo</label>
+                <input id="nome" name="nome" type="text" placeholder="Seu nome" class="w-full rounded-xl border border-white/10 bg-[#0A0F1A] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40" />
+              </div>
+              <div>
+                <label for="email" class="mb-2 block text-sm font-medium text-gray-300">Seu melhor E-mail</label>
+                <input id="email" name="email" type="email" placeholder="nome@empresa.com" class="w-full rounded-xl border border-white/10 bg-[#0A0F1A] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40" />
+              </div>
+              <div>
+                <label for="telefone" class="mb-2 block text-sm font-medium text-gray-300">Telefone/WhatsApp</label>
+                <input id="telefone" name="telefone" type="tel" placeholder="(11) 99999-9999" class="w-full rounded-xl border border-white/10 bg-[#0A0F1A] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40" />
+              </div>
+              <div>
+                <label for="interesse" class="mb-2 block text-sm font-medium text-gray-300">Qual área de interesse?</label>
+                <select id="interesse" name="interesse" class="w-full rounded-xl border border-white/10 bg-[#0A0F1A] px-4 py-3 text-sm text-white focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40">
+                  <option class="bg-[#0A0F1A] text-gray-900" value="marketing">Marketing Digital</option>
+                  <option class="bg-[#0A0F1A] text-gray-900" value="devia">Desenvolvimento &amp; IA</option>
+                  <option class="bg-[#0A0F1A] text-gray-900" value="ambos">Ambos / Outro Assunto</option>
+                </select>
+              </div>
+              <div>
+                <label for="mensagem" class="mb-2 block text-sm font-medium text-gray-300">Mensagem</label>
+                <textarea id="mensagem" name="mensagem" rows="4" placeholder="Compartilhe seu desafio com a Sintaxe Digital" class="w-full rounded-xl border border-white/10 bg-[#0A0F1A] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40"></textarea>
+              </div>
+              <button type="submit" class="w-full rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6B00]/30 transition hover:bg-[#FF6B00]/80">Enviar Mensagem</button>
+            </form>
+          </div>
+
+          <!-- Canais Diretos -->
+          <div class="space-y-6">
+            <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+              <h3 class="text-2xl font-semibold text-white">Canais Diretos</h3>
+              <p class="mt-2 text-sm text-gray-400">Prefere um contato imediato? Escolha o canal ideal para você.</p>
+              <div class="mt-8 space-y-6">
+                <div class="rounded-xl border border-white/10 bg-[#0A0F1A]/60 p-6">
+                  <div class="flex items-start justify-between gap-4">
+                    <div>
+                      <div class="flex items-center gap-3">
+                        <span class="inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
+                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.21-.242-.579-.487-.501-.669-.51-.173-.009-.372-.011-.571-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.711.226 1.356.194 1.868.118.569-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.569-.347z" />
+                          </svg>
+                        </span>
+                        <div>
+                          <h4 class="text-lg font-semibold text-white">WhatsApp</h4>
+                          <p class="text-sm text-gray-400">(11) 99999-9999</p>
+                        </div>
+                      </div>
+                      <button class="mt-4 inline-flex items-center gap-2 rounded-full bg-[#33FF99] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#33FF99]/80">
+                        Iniciar Conversa Agora
+                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
+                        </svg>
+                      </button>
+                    </div>
+                  </div>
+                </div>
+
+                <div class="rounded-xl border border-white/10 bg-[#0A0F1A]/60 p-6">
+                  <div class="flex items-start gap-3">
+                    <span class="inline-flex rounded-full bg-white/10 p-3 text-white">
+                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
+                      </svg>
+                    </span>
+                    <div>
+                      <h4 class="text-lg font-semibold text-white">E-mail Principal</h4>
+                      <p class="text-sm text-gray-400">contato@sintaxedigital.com</p>
+                    </div>
+                  </div>
+                </div>
+
+                <div class="rounded-xl border border-white/10 bg-[#0A0F1A]/60 p-6">
+                  <div class="flex items-start gap-3">
+                    <span class="inline-flex rounded-full bg-white/10 p-3 text-white">
+                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.343-3 3m6 0a3 3 0 00-3-3m0 0V5m0 6v5m0 0h4.5M12 16H7.5" />
+                      </svg>
+                    </span>
+                    <div>
+                      <h4 class="text-lg font-semibold text-white">Horário de Atendimento</h4>
+                      <p class="text-sm text-gray-400">Seg. a Sex. / 09h às 18h</p>
+                    </div>
+                  </div>
+                </div>
+              </div>
+            </div>
+          </div>
+        </div>
+      </section>
+    </main>
+
+    <!-- Footer -->
+    <footer class="border-t border-white/5 bg-[#050811]">
+      <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
+        <div class="space-y-4">
+          <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+          <p class="text-sm text-gray-400">Arquitetos de soluções que unem marketing, tecnologia e inteligência para impulsionar seu crescimento.</p>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-white">Links rápidos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li><a href="index.html" class="transition hover:text-white">Home</a></li>
+            <li><a href="sobre.html" class="transition hover:text-white">Sobre Nós</a></li>
+            <li><a href="marketing.html" class="transition hover:text-white">Marketing Digital</a></li>
+            <li><a href="dev-ia.html" class="transition hover:text-white">Dev &amp; IA</a></li>
+            <li><a href="contato.html" class="transition hover:text-white">Contato</a></li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-white">Departamentos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Marketing Digital</li>
+            <li>Desenvolvimento &amp; IA</li>
+            <li>Performance &amp; Dados</li>
+            <li>Experiência do Cliente</li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-white">Contato</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>contato@sintaxedigital.com</li>
+            <li>(11) 99999-9999</li>
+            <li class="flex items-center gap-3 pt-2 text-white">
+              <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-[#33FF99] hover:text-[#33FF99]">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                  <path d="M22.54 6.42a5.93 5.93 0 00-.41-2.18 4.41 4.41 0 00-2.5-2.51 5.94 5.94 0 00-2.18-.4C15.9 1.27 12 1.27 12 1.27s-3.9 0-5.45.06a5.94 5.94 0 00-2.18.41A4.41 4.41 0 001.86 4.24a5.93 5.93 0 00-.41 2.18C1.39 8 1.34 9.71 1.34 11.42v1.16c0 1.71 0 3.42.11 5.05a5.93 5.93 0 00.41 2.18 4.41 4.41 0 002.5 2.51 5.94 5.94 0 002.18.4c1.55.07 5.45.07 5.45.07s3.9 0 5.45-.06a5.94 5.94 0 002.18-.41 4.41 4.41 0 002.5-2.5 5.93 5.93 0 00.41-2.18c.07-1.63.11-3.34.11-5.05v-1.16c0-1.71 0-3.42-.11-5.05zM9.75 15.02V8.48l5.7 3.27z" />
+                </svg>
+              </a>
+              <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-[#33FF99] hover:text-[#33FF99]">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                  <path d="M22.23 5.924c-.793.35-1.644.586-2.538.69a4.479 4.479 0 001.963-2.475 8.934 8.934 0 01-2.828 1.083 4.463 4.463 0 00-7.6 4.07 12.66 12.66 0 01-9.195-4.66 4.455 4.455 0 001.381 5.95 4.423 4.423 0 01-2.022-.558v.057a4.465 4.465 0 003.577 4.376 4.47 4.47 0 01-2.013.076 4.468 4.468 0 004.168 3.103A8.955 8.955 0 012 19.54a12.615 12.615 0 006.84 2.004c8.206 0 12.695-6.8 12.695-12.695 0-.193-.004-.386-.013-.577a9.066 9.066 0 002.23-2.312z" />
+                </svg>
+              </a>
+              <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-[#33FF99] hover:text-[#33FF99]">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                  <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.41 3.6 8.07 8.28 8.87v-6.28H7.9v-2.59h2.42V9.41c0-2.4 1.43-3.72 3.63-3.72 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.66l-.43 2.59h-2.23v6.28c4.68-.8 8.28-4.46 8.28-8.87 0-5.51-4.45-9.96-9.96-9.96z" />
+                </svg>
+              </a>
+            </li>
+          </ul>
+        </div>
+      </div>
+      <div class="border-t border-white/5 bg-[#04060d] py-6">
+        <p class="text-center text-xs text-gray-500">&copy; <span id="year"></span> Sintaxe Digital. Todos os direitos reservados.</p>
+      </div>
+    </footer>
+  </div>
+
+  <script>
+    const yearSpan = document.getElementById('year');
+    if (yearSpan) {
+      yearSpan.textContent = new Date().getFullYear();
+    }
+  </script>
+</body>
+</html>
diff --git a/dev-ia.html b/dev-ia.html
new file mode 100644
index 0000000000000000000000000000000000000000..cc7e294ac5d72f5356d5c51f865dbab28fc6a51b
--- /dev/null
+++ b/dev-ia.html
@@ -0,0 +1,229 @@
+<!DOCTYPE html>
+<html lang="pt-BR">
+<head>
+  <meta charset="UTF-8" />
+  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+  <title>Sintaxe Digital - Desenvolvimento Web & IA</title>
+  <link rel="preconnect" href="https://fonts.googleapis.com">
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
+  <script src="https://cdn.tailwindcss.com"></script>
+  <style>
+    body { font-family: 'Inter', sans-serif; }
+  </style>
+</head>
+<body class="bg-[#0A0F1A] text-gray-200">
+  <div class="relative overflow-hidden">
+    <div class="pointer-events-none absolute inset-0 opacity-50">
+      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
+        <defs>
+          <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
+            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
+            <circle cx="0" cy="0" r="1" fill="rgba(255,107,0,0.25)" />
+          </pattern>
+        </defs>
+        <rect width="100%" height="100%" fill="url(#tech-grid)" />
+      </svg>
+    </div>
+
+    <!-- Header -->
+    <header class="sticky top-0 z-50 bg-[#0A0F1A]/95 backdrop-blur border-b border-white/5">
+      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
+        <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+        <div class="hidden items-center space-x-8 text-sm font-medium md:flex">
+          <a href="index.html" class="hover:text-white transition">Home</a>
+          <a href="sobre.html" class="hover:text-white transition">Sobre Nós</a>
+          <a href="marketing.html" class="hover:text-white transition">Marketing Digital</a>
+          <a href="dev-ia.html" class="hover:text-white transition">Dev &amp; IA</a>
+          <a href="contato.html" class="hover:text-white transition">Contato</a>
+        </div>
+        <a href="contato.html" class="hidden rounded-full border border-[#FF6B00] px-4 py-2 text-sm font-semibold text-[#FF6B00] transition hover:bg-[#FF6B00]/10 md:inline-flex">Briefing Rápido</a>
+        <button class="inline-flex items-center justify-center rounded border border-white/10 p-2 text-gray-200 md:hidden">
+          <span class="sr-only">Abrir menu</span>
+          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
+          </svg>
+        </button>
+      </nav>
+    </header>
+
+    <main>
+      <!-- Hero -->
+      <section id="home" class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
+        <div class="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-[#FF6B00]/10 via-transparent to-transparent blur-3xl md:block"></div>
+        <div class="relative max-w-3xl space-y-6">
+          <span class="inline-flex items-center rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FF6B00]">Dev &amp; IA</span>
+          <h1 class="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Automatize, Inove, Escale.</h1>
+          <h2 class="text-xl font-medium text-gray-300 sm:text-2xl">Construindo a vantagem competitiva que seu negócio precisa com tecnologia customizada e IA.</h2>
+          <p class="text-base text-gray-400 sm:text-lg">Do planejamento à implementação, entregamos produtos digitais, integrações e automações inteligentes que aceleram resultados e liberam seu time para o estratégico.</p>
+          <div class="flex flex-wrap items-center gap-4">
+            <a href="#contato" class="rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6B00]/30 transition hover:bg-[#FF6B00]/80">Solicitar Orçamento</a>
+            <a href="#laboratorio" class="text-sm font-medium text-gray-300 hover:text-white">Explorar o laboratório</a>
+          </div>
+        </div>
+      </section>
+
+      <!-- Pilares de Serviço -->
+      <section id="laboratorio" class="mx-auto max-w-6xl px-6 py-16">
+        <div class="mb-12 max-w-3xl">
+          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Nosso Laboratório de Inovação</h2>
+          <p class="mt-4 text-gray-400">Projetamos, prototipamos e entregamos soluções que unem design, engenharia e inteligência artificial para escalar o core digital da sua empresa.</p>
+        </div>
+        <div class="grid gap-8 md:grid-cols-3">
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <div class="mb-5 inline-flex rounded-full bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h18M3 9.75h18M3 15h12M3 19.5h12" />
+              </svg>
+            </div>
+            <h3 class="text-2xl font-semibold text-[#FF6B00]">Websites &amp; E-com de Alta Performance</h3>
+            <p class="mt-4 text-base text-gray-300">Criamos plataformas web rápidas, seguras e com UX orientada à conversão para transformar visitantes em clientes.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <div class="mb-5 inline-flex rounded-full bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
+              </svg>
+            </div>
+            <h3 class="text-2xl font-semibold text-[#FF6B00]">Automações &amp; Inteligência Artificial</h3>
+            <p class="mt-4 text-base text-gray-300">Implementamos IAs e automações que reduzem custos, otimizam tarefas e fornecem insights acionáveis em tempo real.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <div class="mb-5 inline-flex rounded-full bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 6h15M4.5 12h15M4.5 18h9" />
+              </svg>
+            </div>
+            <h3 class="text-2xl font-semibold text-[#FF6B00]">Sistemas Customizados</h3>
+            <p class="mt-4 text-base text-gray-300">Desenvolvemos dashboards, CRMs e plataformas internas sob medida para sustentar a operação e o crescimento.</p>
+          </div>
+        </div>
+      </section>
+
+      <!-- Diferenciais Técnicos -->
+      <section class="bg-white/5">
+        <div class="mx-auto max-w-6xl px-6 py-16">
+          <div class="mb-12 max-w-3xl">
+            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Nossa Stack Tecnológica</h2>
+            <p class="mt-4 text-gray-300">Selecionamos tecnologias modernas, escaláveis e seguras para entregar soluções de alto impacto, alinhadas à sua estratégia.</p>
+          </div>
+          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
+            <div class="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0A0F1A]/80 p-5">
+              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-semibold">Py</span>
+              <div>
+                <h3 class="text-lg font-semibold text-white">Python &amp; FastAPI</h3>
+                <p class="text-sm text-gray-400">Back-ends robustos, automações e integrações alimentadas por dados.</p>
+              </div>
+            </div>
+            <div class="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0A0F1A]/80 p-5">
+              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-semibold">JS</span>
+              <div>
+                <h3 class="text-lg font-semibold text-white">Node.js &amp; Serverless</h3>
+                <p class="text-sm text-gray-400">Arquiteturas escaláveis para APIs, integrações e microserviços.</p>
+              </div>
+            </div>
+            <div class="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0A0F1A]/80 p-5">
+              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-semibold">Rx</span>
+              <div>
+                <h3 class="text-lg font-semibold text-white">React &amp; Next.js</h3>
+                <p class="text-sm text-gray-400">Interfaces ricas e rápidas para experiências digitais conectadas.</p>
+              </div>
+            </div>
+            <div class="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0A0F1A]/80 p-5">
+              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-semibold">AI</span>
+              <div>
+                <h3 class="text-lg font-semibold text-white">TensorFlow &amp; OpenAI</h3>
+                <p class="text-sm text-gray-400">Modelos de machine learning e IA aplicada aos seus desafios.</p>
+              </div>
+            </div>
+            <div class="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0A0F1A]/80 p-5">
+              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-semibold">Db</span>
+              <div>
+                <h3 class="text-lg font-semibold text-white">PostgreSQL &amp; MongoDB</h3>
+                <p class="text-sm text-gray-400">Dados estruturados e não estruturados com governança e segurança.</p>
+              </div>
+            </div>
+            <div class="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0A0F1A]/80 p-5">
+              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-semibold">☁️</span>
+              <div>
+                <h3 class="text-lg font-semibold text-white">Cloud AWS &amp; Azure</h3>
+                <p class="text-sm text-gray-400">Infraestrutura resiliente, observável e preparada para crescer.</p>
+              </div>
+            </div>
+          </div>
+        </div>
+      </section>
+
+      <!-- CTA Final -->
+      <section id="contato" class="mx-auto max-w-6xl px-6 py-20">
+        <div class="rounded-3xl border border-[#33FF99]/30 bg-gradient-to-br from-[#0A0F1A] via-[#33FF99]/10 to-[#0A0F1A] p-12 text-center shadow-lg shadow-[#33FF99]/10">
+          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Sua plataforma precisa de usuários?</h2>
+          <p class="mt-4 text-gray-300">A melhor tecnologia do mundo precisa da estratégia de marketing correta para gerar resultados. Nossos times trabalham integrados.</p>
+          <a href="marketing.html" class="mt-8 inline-flex items-center justify-center rounded-full bg-[#33FF99] px-8 py-3 text-base font-semibold text-black transition hover:bg-[#33FF99]/90">Conheça nosso núcleo de Marketing</a>
+        </div>
+      </section>
+    </main>
+
+    <!-- Footer -->
+    <footer class="border-t border-white/5 bg-[#05070E]">
+      <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
+        <div>
+          <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+          <p class="mt-3 text-sm text-gray-400">Programamos jornadas digitais que conectam, convertem e escalam.</p>
+          <div class="mt-6 flex space-x-3 text-gray-400">
+            <a href="#" aria-label="LinkedIn" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
+                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5A2.49 2.49 0 010 3.5C0 2.12 1.11 1 2.5 1S5 2.12 5 3.5zM.22 8.98h4.56V24H.22zM8.45 8.98h4.37v2.05h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.49 3.05 5.49 7.02V24h-4.56v-6.72c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.45z" />
+              </svg>
+            </a>
+            <a href="#" aria-label="Instagram" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
+              </svg>
+            </a>
+            <a href="#" aria-label="YouTube" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M21.543 7.104a2.508 2.508 0 00-1.767-1.77C18.274 5 12 5 12 5s-6.274 0-7.776.334a2.508 2.508 0 00-1.767 1.77A26.373 26.373 0 002 11.999a26.373 26.373 0 00.457 4.896 2.508 2.508 0 001.767 1.77C5.726 19 12 19 12 19s6.274 0 7.776-.334a2.508 2.508 0 001.767-1.77A26.373 26.373 0 0022 12a26.373 26.373 0 00-.457-4.896zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
+              </svg>
+            </a>
+          </div>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Links rápidos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li><a class="hover:text-white" href="index.html">Home</a></li>
+            <li><a class="hover:text-white" href="sobre.html">Sobre Nós</a></li>
+            <li><a class="hover:text-white" href="marketing.html">Marketing Digital</a></li>
+            <li><a class="hover:text-white" href="dev-ia.html">Dev &amp; IA</a></li>
+            <li><a class="hover:text-white" href="contato.html">Contato</a></li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Departamentos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Marketing Digital</li>
+            <li>Performance &amp; Growth</li>
+            <li>Desenvolvimento Web</li>
+            <li>Inteligência Artificial</li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Contato</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Email: <a class="hover:text-white" href="mailto:contato@sintaxedigital.com">contato@sintaxedigital.com</a></li>
+            <li>WhatsApp: <a class="hover:text-white" href="https://wa.me/5511999999999">+55 11 99999-9999</a></li>
+            <li>São Paulo · Atendimento Global</li>
+          </ul>
+        </div>
+      </div>
+      <div class="border-t border-white/5 py-6 text-center text-xs text-gray-500">
+        © <span id="ano"></span> Sintaxe Digital. Todos os direitos reservados.
+      </div>
+    </footer>
+  </div>
+
+  <script>
+    document.getElementById('ano').textContent = new Date().getFullYear();
+  </script>
+</body>
+</html>
diff --git a/index.html b/index.html
new file mode 100644
index 0000000000000000000000000000000000000000..2ce546d0baf9e17bfc9f992f337d848e63511cce
--- /dev/null
+++ b/index.html
@@ -0,0 +1,307 @@
+<!DOCTYPE html>
+<html lang="pt-BR">
+<head>
+  <meta charset="UTF-8" />
+  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+  <title>Sintaxe Digital - Arquitetos de Soluções Digitais</title>
+  <link rel="preconnect" href="https://fonts.googleapis.com">
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
+  <script src="https://cdn.tailwindcss.com"></script>
+  <style>
+    body { font-family: 'Inter', sans-serif; }
+  </style>
+</head>
+<body class="bg-[#0A0F1A] text-gray-200">
+  <div class="relative overflow-hidden">
+    <div class="pointer-events-none absolute inset-0 opacity-60">
+      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
+        <defs>
+          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
+            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51,255,153,0.08)" stroke-width="1" />
+          </pattern>
+        </defs>
+        <rect width="100%" height="100%" fill="url(#grid)" />
+      </svg>
+    </div>
+
+    <!-- Header -->
+    <header class="sticky top-0 z-50 bg-[#0A0F1A]/95 backdrop-blur border-b border-white/5">
+      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
+        <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+        <div class="hidden items-center space-x-8 text-sm font-medium md:flex">
+          <a href="index.html" class="hover:text-white transition">Home</a>
+          <a href="sobre.html" class="hover:text-white transition">Sobre Nós</a>
+          <a href="marketing.html" class="hover:text-white transition">Marketing Digital</a>
+          <a href="dev-ia.html" class="hover:text-white transition">Dev &amp; IA</a>
+          <a href="contato.html" class="hover:text-white transition">Contato</a>
+        </div>
+        <a href="contato.html" class="hidden rounded-full border border-[#FF6B00] px-4 py-2 text-sm font-semibold text-[#FF6B00] transition hover:bg-[#FF6B00]/10 md:inline-flex">Briefing Rápido</a>
+        <button class="inline-flex items-center justify-center rounded border border-white/10 p-2 text-gray-200 md:hidden">
+          <span class="sr-only">Abrir menu</span>
+          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
+          </svg>
+        </button>
+      </nav>
+    </header>
+
+    <main>
+      <!-- Hero -->
+      <section id="home" class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
+        <div class="max-w-2xl space-y-6">
+          <span class="inline-flex items-center rounded-full border border-[#33FF99]/20 bg-[#33FF99]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#33FF99]">Sintaxe Digital</span>
+          <h1 class="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Arquitetos de Soluções Digitais.</h1>
+          <h2 class="text-xl font-medium text-gray-300 sm:text-2xl">Programando o sucesso do seu negócio.</h2>
+          <p class="text-base text-gray-400 sm:text-lg">Unimos estratégia, tecnologia e inteligência para impulsionar marcas com experiências memoráveis e resultados mensuráveis.</p>
+          <div class="flex flex-wrap items-center gap-4">
+            <a href="#contato" class="rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6B00]/30 transition hover:bg-[#FF6B00]/80">Descubra como</a>
+            <a href="#marketing" class="text-sm font-medium text-gray-300 hover:text-white">Conheça nossos pilares</a>
+          </div>
+        </div>
+      </section>
+
+      <!-- Dores -->
+      <section class="mx-auto max-w-6xl px-6 py-16" id="sobre">
+        <div class="mb-12 max-w-3xl">
+          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Seu negócio está enfrentando estes desafios?</h2>
+          <p class="mt-4 text-gray-400">A Sintaxe Digital traduz problemas complexos em estratégias integradas de marketing e tecnologia.</p>
+        </div>
+        <div class="grid gap-8 md:grid-cols-3">
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-3.5 2.1a.75.75 0 01-1.125-.649V14.3l-2.4-2.087a.75.75 0 01.247-1.276l3.1-.97 1.22-3.07a.75.75 0 011.4 0l1.22 3.07 3.1.97a.75.75 0 01.247 1.276L16.625 14.3v4.401a.75.75 0 01-1.125.648L12 17.25z" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Baixa visibilidade online</h3>
+            <p class="mt-3 text-sm text-gray-400">Sua marca não aparece quando o cliente procura? Elevamos seu alcance com campanhas inteligentes.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25h13.5m-13.5 7.5h13.5M18 5.25H21v4.5h-3V5.25zm0 9H21v4.5h-3v-4.5z" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Processos manuais lentos</h3>
+            <p class="mt-3 text-sm text-gray-400">Automatizamos fluxos críticos e integramos sistemas para escalar sem gargalos.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Marketing sem resultados</h3>
+            <p class="mt-3 text-sm text-gray-400">Construímos campanhas orientadas a dados para transformar investimento em retorno real.</p>
+          </div>
+        </div>
+      </section>
+
+      <!-- Pilares -->
+      <section id="marketing" class="mx-auto max-w-6xl px-6 py-16">
+        <div class="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
+          <div>
+            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Nossa Expertise Integrada</h2>
+            <p class="mt-4 max-w-2xl text-gray-400">Marketing estratégico e tecnologia aplicada trabalhando lado a lado para projetar jornadas digitais completas.</p>
+          </div>
+          <div class="hidden h-16 w-16 items-center justify-center rounded-full border border-[#33FF99]/40 bg-white/5 text-3xl font-bold text-[#33FF99] lg:flex">S</div>
+        </div>
+        <div class="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <div class="mb-5 inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l5.4-5.4a1.5 1.5 0 012.121 0L15 13.5m0 0l2.4-2.4a1.5 1.5 0 012.121 0L21 12" />
+              </svg>
+            </div>
+            <h3 class="text-2xl font-semibold text-[#33FF99]">Marketing Digital Estratégico</h3>
+            <p class="mt-4 text-base text-gray-300">Atraímos e convertemos seu público-alvo com estratégias de dados e criatividade, focadas em crescimento real.</p>
+          </div>
+          <div class="hidden flex-col items-center gap-4 lg:flex">
+            <span class="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0A0F1A] text-2xl font-bold text-white">+</span>
+            <span class="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></span>
+          </div>
+          <div id="devia" class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <div class="mb-5 inline-flex rounded-full bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M4 5h16M4 9h16M4 19h16M4 13h8" />
+              </svg>
+            </div>
+            <h3 class="text-2xl font-semibold text-[#FF6B00]">Desenvolvimento Web &amp; IA</h3>
+            <p class="mt-4 text-base text-gray-300">Construímos as ferramentas, sites e automações que dão à sua empresa uma vantagem tecnológica decisiva.</p>
+          </div>
+        </div>
+      </section>
+
+      <!-- Diferenciais -->
+      <section class="mx-auto max-w-6xl px-6 py-16">
+        <div class="mb-12 max-w-3xl">
+          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Por que 'Sintaxe Digital'?</h2>
+          <p class="mt-4 text-gray-400">Somos arquitetos digitais que combinam performance e experiência para construir valor de marca duradouro.</p>
+        </div>
+        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5" />
+                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Abordagem de arquiteto</h3>
+            <p class="mt-2 text-sm text-gray-400">Mapeamos o ecossistema digital completo antes de construir soluções sob medida.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L15 4.5m2.25 2.25l2.25-2.25M17.25 6.75l-2.25 2.25m0 0L12 6l-7.5 7.5M12 6v15" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Equipe especializada</h3>
+            <p class="mt-2 text-sm text-gray-400">Experts em marketing, tecnologia e dados atuando de forma integrada.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.5l4.5-4.5 4.5 4.5L21 6" />
+                <path stroke-linecap="round" stroke-linejoin="round" d="M21 6v6h-6" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Foco em ROI</h3>
+            <p class="mt-2 text-sm text-gray-400">Metodologias orientadas a métricas para maximizar retorno e eficiência.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#33FF99]/10 p-3 text-[#33FF99]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5" />
+                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Performance contínua</h3>
+            <p class="mt-2 text-sm text-gray-400">Monitoramento em tempo real e ajustes ágeis para manter o crescimento.</p>
+          </div>
+        </div>
+      </section>
+
+      <!-- Metodologia -->
+      <section class="mx-auto max-w-6xl px-6 py-16">
+        <div class="mb-12 max-w-3xl">
+          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Nossa Arquitetura de Sucesso</h2>
+          <p class="mt-4 text-gray-400">Um processo validado que alinha estratégia, execução e evolução contínua.</p>
+        </div>
+        <div class="grid gap-8 lg:grid-cols-4">
+          <div class="group relative rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
+                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Diagnóstico &amp; Imersão</h3>
+            <p class="mt-2 text-sm text-gray-400">Investigamos a fundo seu cenário, dados e oportunidades.</p>
+            <span class="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-white/10 to-white/40 lg:block"></span>
+          </div>
+          <div class="group relative rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5l9 4.5 9-4.5M3 12l9 4.5 9-4.5" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Arquitetura &amp; Design</h3>
+            <p class="mt-2 text-sm text-gray-400">Projetamos a jornada e os touchpoints digitais com precisão.</p>
+            <span class="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-white/10 to-white/40 lg:block"></span>
+          </div>
+          <div class="group relative rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21l4.5-18 4.5 18M3 17h18" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Construção &amp; Implementação</h3>
+            <p class="mt-2 text-sm text-gray-400">Desenvolvemos e ativamos soluções com metodologias ágeis.</p>
+            <span class="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-white/10 to-white/40 lg:block"></span>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
+            <div class="mb-4 inline-flex rounded-full bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v6h6M21 21v-6h-6M3 21l6-6m6-6l6-6" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Otimização &amp; Crescimento</h3>
+            <p class="mt-2 text-sm text-gray-400">Mensuramos, aprendemos e escalamos com foco em performance contínua.</p>
+          </div>
+        </div>
+      </section>
+
+      <!-- CTA Final -->
+      <section id="contato" class="mx-auto max-w-6xl px-6 py-20">
+        <div class="rounded-3xl border border-[#FF6B00]/30 bg-gradient-to-br from-[#FF6B00]/10 via-[#0A0F1A] to-[#FF6B00]/10 p-12 text-center shadow-lg shadow-[#FF6B00]/20">
+          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Pronto para programar seu sucesso?</h2>
+          <p class="mt-4 text-gray-300">Vamos construir juntos a próxima evolução digital da sua empresa.</p>
+          <a href="mailto:contato@sintaxedigital.com" class="mt-8 inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#FF6B00]/80">Vamos Conversar</a>
+        </div>
+      </section>
+    </main>
+
+    <!-- Footer -->
+    <footer class="border-t border-white/5 bg-[#05070E]">
+      <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
+        <div>
+          <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+          <p class="mt-3 text-sm text-gray-400">Programamos jornadas digitais que conectam, convertem e escalam.</p>
+          <div class="mt-6 flex space-x-3 text-gray-400">
+            <a href="#" aria-label="LinkedIn" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
+                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5A2.49 2.49 0 010 3.5C0 2.12 1.11 1 2.5 1S5 2.12 5 3.5zM.22 8.98h4.56V24H.22zM8.45 8.98h4.37v2.05h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.49 3.05 5.49 7.02V24h-4.56v-6.72c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.45z" />
+              </svg>
+            </a>
+            <a href="#" aria-label="Instagram" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
+              </svg>
+            </a>
+            <a href="#" aria-label="YouTube" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M21.543 7.104a2.508 2.508 0 00-1.767-1.77C18.274 5 12 5 12 5s-6.274 0-7.776.334a2.508 2.508 0 00-1.767 1.77A26.373 26.373 0 002 11.999a26.373 26.373 0 00.457 4.896 2.508 2.508 0 001.767 1.77C5.726 19 12 19 12 19s6.274 0 7.776-.334a2.508 2.508 0 001.767-1.77A26.373 26.373 0 0022 12a26.373 26.373 0 00-.457-4.896zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
+              </svg>
+            </a>
+          </div>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Links rápidos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li><a class="hover:text-white" href="index.html">Home</a></li>
+            <li><a class="hover:text-white" href="sobre.html">Sobre Nós</a></li>
+            <li><a class="hover:text-white" href="marketing.html">Marketing Digital</a></li>
+            <li><a class="hover:text-white" href="dev-ia.html">Dev &amp; IA</a></li>
+            <li><a class="hover:text-white" href="contato.html">Contato</a></li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Departamentos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Marketing Digital</li>
+            <li>Performance &amp; Growth</li>
+            <li>Desenvolvimento Web</li>
+            <li>Inteligência Artificial</li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Contato</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Email: <a class="hover:text-white" href="mailto:contato@sintaxedigital.com">contato@sintaxedigital.com</a></li>
+            <li>WhatsApp: <a class="hover:text-white" href="https://wa.me/5511999999999">+55 11 99999-9999</a></li>
+            <li>São Paulo · Atendimento Global</li>
+          </ul>
+        </div>
+      </div>
+      <div class="border-t border-white/5 py-6 text-center text-xs text-gray-500">
+        © <span id="ano"></span> Sintaxe Digital. Todos os direitos reservados.
+      </div>
+    </footer>
+  </div>
+
+  <script>
+    document.getElementById('ano').textContent = new Date().getFullYear();
+  </script>
+</body>
+</html>
diff --git a/marketing.html b/marketing.html
new file mode 100644
index 0000000000000000000000000000000000000000..f78bc566c5deb02de8dfe5c8fef0df903b5329d3
--- /dev/null
+++ b/marketing.html
@@ -0,0 +1,270 @@
+<!DOCTYPE html>
+<html lang="pt-BR">
+<head>
+  <meta charset="UTF-8" />
+  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+  <title>Sintaxe Digital - Marketing Digital</title>
+  <link rel="preconnect" href="https://fonts.googleapis.com">
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
+  <script src="https://cdn.tailwindcss.com"></script>
+  <style>
+    body { font-family: 'Inter', sans-serif; }
+  </style>
+</head>
+<body class="bg-white text-gray-900">
+  <div class="relative">
+    <!-- Header -->
+    <header class="sticky top-0 z-50 bg-[#0A0F1A]/95 backdrop-blur border-b border-white/5">
+      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
+        <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+        <div class="hidden items-center space-x-8 text-sm font-medium md:flex">
+          <a href="index.html" class="hover:text-white transition">Home</a>
+          <a href="sobre.html" class="hover:text-white transition">Sobre Nós</a>
+          <a href="marketing.html" class="hover:text-white transition">Marketing Digital</a>
+          <a href="dev-ia.html" class="hover:text-white transition">Dev &amp; IA</a>
+          <a href="contato.html" class="hover:text-white transition">Contato</a>
+        </div>
+        <a href="contato.html" class="hidden rounded-full border border-[#FF6B00] px-4 py-2 text-sm font-semibold text-[#FF6B00] transition hover:bg-[#FF6B00]/10 md:inline-flex">Briefing Rápido</a>
+        <button class="inline-flex items-center justify-center rounded border border-white/10 p-2 text-gray-200 md:hidden">
+          <span class="sr-only">Abrir menu</span>
+          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
+          </svg>
+        </button>
+      </nav>
+    </header>
+
+    <main class="bg-white">
+      <!-- Hero Marketing -->
+      <section id="home" class="mx-auto max-w-6xl px-6 py-24">
+        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
+          <div class="space-y-6">
+            <span class="inline-flex items-center rounded-full bg-[#33FF99]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A0F1A]">Marketing Digital</span>
+            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">Transforme sua Audiência em Receita.</h1>
+            <h2 class="text-xl font-medium text-gray-700 sm:text-2xl">Estratégias de marketing digital focadas em crescimento e performance real.</h2>
+            <p class="text-base text-gray-600 sm:text-lg">Construímos campanhas que combinam dados, criatividade e automação para acelerar resultados em cada etapa do funil.</p>
+            <div class="flex flex-wrap items-center gap-4">
+              <a href="#planos" class="rounded-full bg-[#33FF99] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[#33FF99]/40 transition hover:bg-[#33FF99]/90">Ver Nossos Pacotes</a>
+              <a href="#ecossistema" class="text-sm font-medium text-[#0A0F1A] hover:text-[#33FF99]">Conheça nosso método</a>
+            </div>
+          </div>
+          <div class="flex items-center justify-center">
+            <div class="relative max-w-md overflow-hidden rounded-3xl border border-[#33FF99]/30 bg-white p-6 shadow-xl">
+              <div class="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-[#33FF99]/30 blur-3xl"></div>
+              <div class="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#FF6B00]/20 blur-3xl"></div>
+              <div class="relative space-y-4">
+                <div class="flex items-center justify-between">
+                  <span class="text-sm font-medium text-gray-500">ROI Médio Clientes</span>
+                  <span class="text-2xl font-semibold text-[#33FF99]">+214%</span>
+                </div>
+                <div class="rounded-2xl bg-gray-100 p-5">
+                  <div class="flex items-center justify-between text-sm font-medium text-gray-600">
+                    <span>Campanhas ativas</span>
+                    <span>18</span>
+                  </div>
+                  <div class="mt-4 space-y-3">
+                    <div>
+                      <div class="flex justify-between text-xs font-medium text-gray-500">
+                        <span>Social Ads</span>
+                        <span>72%</span>
+                      </div>
+                      <div class="mt-1 h-2 rounded-full bg-gray-200">
+                        <div class="h-2 rounded-full bg-[#33FF99]" style="width: 72%"></div>
+                      </div>
+                    </div>
+                    <div>
+                      <div class="flex justify-between text-xs font-medium text-gray-500">
+                        <span>Pesquisa</span>
+                        <span>54%</span>
+                      </div>
+                      <div class="mt-1 h-2 rounded-full bg-gray-200">
+                        <div class="h-2 rounded-full bg-[#33FF99]/80" style="width: 54%"></div>
+                      </div>
+                    </div>
+                    <div>
+                      <div class="flex justify-between text-xs font-medium text-gray-500">
+                        <span>CRM &amp; Automação</span>
+                        <span>44%</span>
+                      </div>
+                      <div class="mt-1 h-2 rounded-full bg-gray-200">
+                        <div class="h-2 rounded-full bg-[#0A0F1A]" style="width: 44%"></div>
+                      </div>
+                    </div>
+                  </div>
+                </div>
+                <p class="text-xs text-gray-500">Transparência total sobre performance em um painel único, atualizado em tempo real.</p>
+              </div>
+            </div>
+          </div>
+        </div>
+      </section>
+
+      <!-- Metodologia de Marketing -->
+      <section id="ecossistema" class="bg-gray-50 py-20">
+        <div class="mx-auto max-w-6xl px-6">
+          <div class="mx-auto max-w-3xl text-center">
+            <span class="inline-flex items-center justify-center rounded-full bg-[#33FF99]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A0F1A]">Processo</span>
+            <h2 class="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">Nosso Ecossistema de Growth</h2>
+            <p class="mt-4 text-base text-gray-600">Integramos estratégia, mídia, conteúdo e tecnologia para gerar crescimento previsível e sustentável.</p>
+          </div>
+          <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
+            <div class="rounded-2xl border border-[#33FF99]/30 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
+              <div class="mb-6 inline-flex rounded-full bg-[#33FF99]/20 p-3 text-[#0A0F1A]">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h7.5v7.5H3V3zm10.5 0H21v7.5h-7.5V3zM3 13.5h7.5V21H3v-7.5zm10.5 0H21V21h-7.5v-7.5z" />
+                </svg>
+              </div>
+              <h3 class="text-lg font-semibold text-gray-900">Performance (Tráfego Pago)</h3>
+              <p class="mt-3 text-sm text-gray-600">Campanhas omnichannel otimizadas por dados, focadas em aquisição e ROAS.</p>
+            </div>
+            <div class="rounded-2xl border border-[#33FF99]/30 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
+              <div class="mb-6 inline-flex rounded-full bg-[#33FF99]/20 p-3 text-[#0A0F1A]">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.556 0 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75 3.75 7.444 3.75 12c0 3.784 2.654 6.942 6.187 7.842.452.106.613-.196.613-.438 0-.216-.008-.788-.012-1.547-2.513.546-3.042-1.21-3.042-1.21-.412-1.048-1.005-1.328-1.005-1.328-.822-.562.062-.551.062-.551.908.064 1.386.933 1.386.933.808 1.384 2.12.985 2.639.753.082-.585.316-.985.574-1.212-2.006-.228-4.116-1.002-4.116-4.462 0-.986.352-1.792.93-2.424-.093-.227-.403-1.142.088-2.38 0 0 .756-.242 2.476.925.718-.2 1.487-.3 2.252-.304.765.003 1.534.103 2.252.304 1.72-1.167 2.475-.925 2.475-.925.492 1.238.182 2.153.089 2.38.579.632.93 1.438.93 2.424 0 3.468-2.113 4.23-4.124 4.453.325.28.616.83.616 1.673 0 1.209-.011 2.184-.011 2.481 0 .243.16.547.62.454C17.598 18.94 20.25 15.782 20.25 12c0-4.556-3.694-8.25-8.25-8.25z" />
+                </svg>
+              </div>
+              <h3 class="text-lg font-semibold text-gray-900">SEO &amp; Conteúdo</h3>
+              <p class="mt-3 text-sm text-gray-600">Produção editorial com inteligência de dados para conquistar relevância orgânica.</p>
+            </div>
+            <div class="rounded-2xl border border-[#33FF99]/30 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
+              <div class="mb-6 inline-flex rounded-full bg-[#33FF99]/20 p-3 text-[#0A0F1A]">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h-3a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 002.25 2.25h3m0-10.5V6a2.25 2.25 0 012.25-2.25h3A2.25 2.25 0 0115.75 6v.75m-7.5 0h7.5m0 0H18a2.25 2.25 0 012.25 2.25v6A2.25 2.25 0 0118 17.25h-2.25m-7.5 0H15" />
+                </svg>
+              </div>
+              <h3 class="text-lg font-semibold text-gray-900">Gestão de Redes Sociais</h3>
+              <p class="mt-3 text-sm text-gray-600">Branding, conteúdo e comunidades conectadas em narrativas consistentes.</p>
+            </div>
+            <div class="rounded-2xl border border-[#33FF99]/30 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
+              <div class="mb-6 inline-flex rounded-full bg-[#33FF99]/20 p-3 text-[#0A0F1A]">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75L12 12m0 0l3.75-2.25M12 12v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
+                </svg>
+              </div>
+              <h3 class="text-lg font-semibold text-gray-900">Automação (CRM &amp; Funis)</h3>
+              <p class="mt-3 text-sm text-gray-600">Fluxos multicanais que nutrem leads e aumentam LTV de forma previsível.</p>
+            </div>
+          </div>
+        </div>
+      </section>
+
+      <!-- Planos -->
+      <section id="planos" class="bg-white py-24">
+        <div class="mx-auto max-w-6xl px-6">
+          <div class="mx-auto max-w-3xl text-center">
+            <span class="inline-flex items-center justify-center rounded-full bg-[#33FF99]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A0F1A]">Pacotes</span>
+            <h2 class="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">Planos Projetados para seu Nível de Negócio</h2>
+            <p class="mt-4 text-base text-gray-600">Escolha a estrutura ideal para o seu momento e mantenha o foco no crescimento.</p>
+          </div>
+          <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
+            <div class="flex flex-col rounded-3xl border border-[#33FF99]/30 bg-white p-8 shadow-lg shadow-[#33FF99]/10">
+              <div class="mb-4 inline-flex items-center rounded-full bg-[#33FF99]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A0F1A]">Startup Ready</div>
+              <h3 class="text-2xl font-semibold text-gray-900">Alicerce</h3>
+              <p class="mt-3 text-sm text-gray-600">Ideal para startups e negócios locais validando o mercado.</p>
+              <ul class="mt-6 space-y-3 text-sm text-gray-600">
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#33FF99]/20 text-[#0A0F1A]">✔</span> Gestão de 2 redes sociais</li>
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#33FF99]/20 text-[#0A0F1A]">✔</span> Tráfego pago inicial</li>
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#33FF99]/20 text-[#0A0F1A]">✔</span> Relatório mensal simplificado</li>
+              </ul>
+              <div class="mt-8 text-3xl font-semibold text-gray-900">A partir de R$ 1.200/mês</div>
+              <a href="#contato" class="mt-8 inline-flex items-center justify-center rounded-full bg-[#33FF99] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#33FF99]/90">Quero este Pacote</a>
+            </div>
+            <div class="flex flex-col rounded-3xl border-2 border-[#33FF99] bg-white p-8 shadow-xl shadow-[#33FF99]/20">
+              <div class="mb-4 inline-flex items-center rounded-full bg-[#33FF99] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">Mais Popular</div>
+              <h3 class="text-2xl font-semibold text-gray-900">Planta Baixa</h3>
+              <p class="mt-3 text-sm text-gray-600">Para empresas em crescimento buscando escalar a aquisição.</p>
+              <ul class="mt-6 space-y-3 text-sm text-gray-600">
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#33FF99]/20 text-[#0A0F1A]">✔</span> Tráfego pago multicanais</li>
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#33FF99]/20 text-[#0A0F1A]">✔</span> SEO técnico &amp; conteúdo premium</li>
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#33FF99]/20 text-[#0A0F1A]">✔</span> Relatórios quinzenais com insights</li>
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#33FF99]/20 text-[#0A0F1A]">✔</span> Automação básica de CRM</li>
+              </ul>
+              <div class="mt-8 text-3xl font-semibold text-gray-900">A partir de R$ 2.500/mês</div>
+              <a href="#contato" class="mt-8 inline-flex items-center justify-center rounded-full bg-[#33FF99] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#33FF99]/90">Quero este Pacote</a>
+            </div>
+            <div class="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-md">
+              <div class="mb-4 inline-flex items-center rounded-full bg-[#FF6B00]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FF6B00]">Sob medida</div>
+              <h3 class="text-2xl font-semibold text-gray-900">Projeto Customizado</h3>
+              <p class="mt-3 text-sm text-gray-600">Co-criação com squads multidisciplinares e integrações avançadas.</p>
+              <ul class="mt-6 space-y-3 text-sm text-gray-600">
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00]">★</span> Growth sprints orientados a KPI</li>
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00]">★</span> Squad dedicado de marketing &amp; dados</li>
+                <li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00]">★</span> Integração total com tecnologia proprietária</li>
+              </ul>
+              <div class="mt-8 text-3xl font-semibold text-gray-900">Sob consulta</div>
+              <a href="#contato" class="mt-8 inline-flex items-center justify-center rounded-full border border-[#FF6B00] px-6 py-3 text-sm font-semibold text-[#FF6B00] transition hover:bg-[#FF6B00]/10">Quero construir com a Sintaxe</a>
+            </div>
+          </div>
+        </div>
+      </section>
+
+      <!-- CTA Final -->
+      <section id="contato" class="bg-gray-50 py-20">
+        <div class="mx-auto max-w-6xl px-6">
+          <div class="grid gap-10 rounded-3xl border border-[#33FF99]/30 bg-white p-12 shadow-xl shadow-[#33FF99]/10 lg:grid-cols-[2fr_1fr]">
+            <div class="space-y-5">
+              <h2 class="text-3xl font-semibold text-gray-900 sm:text-4xl">Precisa da tecnologia para suportar o marketing?</h2>
+              <p class="text-base text-gray-600">Nossas soluções de marketing funcionam ainda melhor quando integradas a um website de alta performance ou uma automação de IA.</p>
+            </div>
+            <div class="flex items-center justify-start lg:justify-end">
+              <a href="index.html#devia" class="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#FF6B00]/90">Conheça nosso Lab de Dev &amp; IA</a>
+            </div>
+          </div>
+        </div>
+      </section>
+    </main>
+
+    <!-- Footer -->
+    <footer class="border-t border-white/5 bg-[#0A0F1A] py-16 text-gray-300">
+      <div class="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
+        <div>
+          <a href="index.html" class="text-lg font-semibold text-white">Sintaxe Digital</a>
+          <p class="mt-3 text-sm text-gray-400">Arquitetos digitais projetando crescimento com marketing, tecnologia e IA.</p>
+        </div>
+        <div>
+          <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-400">Links Rápidos</h3>
+          <ul class="mt-4 space-y-2 text-sm">
+            <li><a href="index.html" class="hover:text-white transition">Home</a></li>
+            <li><a href="sobre.html" class="hover:text-white transition">Sobre Nós</a></li>
+            <li><a href="marketing.html" class="hover:text-white transition">Marketing Digital</a></li>
+            <li><a href="dev-ia.html" class="hover:text-white transition">Dev &amp; IA</a></li>
+            <li><a href="contato.html" class="hover:text-white transition">Contato</a></li>
+          </ul>
+        </div>
+        <div>
+          <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-400">Departamentos</h3>
+          <ul class="mt-4 space-y-2 text-sm">
+            <li><a href="marketing.html" class="hover:text-white transition">Marketing Digital</a></li>
+            <li><a href="dev-ia.html" class="hover:text-white transition">Dev &amp; IA</a></li>
+          </ul>
+        </div>
+        <div>
+          <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-400">Contato</h3>
+          <ul class="mt-4 space-y-2 text-sm">
+            <li>Email: <a href="mailto:contato@sintaxedigital.com" class="hover:text-white transition">contato@sintaxedigital.com</a></li>
+            <li>WhatsApp: <a href="https://wa.me/5500000000000" class="hover:text-white transition">(55) 00 0000-0000</a></li>
+          </ul>
+          <div class="mt-4 flex items-center space-x-4 text-gray-400">
+            <a href="#" class="hover:text-white transition" aria-label="LinkedIn">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.75h3.96V21H3zM9.75 8.75H13.5v1.68h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.7 2.6 4.7 5.99V21h-3.96v-5.54c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H9.75z" />
+              </svg>
+            </a>
+            <a href="#" class="hover:text-white transition" aria-label="Instagram">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A5.506 5.506 0 006.5 13 5.506 5.506 0 0012 18.5 5.506 5.506 0 0017.5 13 5.506 5.506 0 0012 7.5zm0 2A3.505 3.505 0 0115.5 13 3.505 3.505 0 0112 16.5 3.505 3.505 0 018.5 13 3.505 3.505 0 0112 9.5zm5.75-3.75a1 1 0 110 2 1 1 0 010-2z" />
+              </svg>
+            </a>
+            <a href="#" class="hover:text-white transition" aria-label="YouTube">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M21.543 6.498a2.754 2.754 0 00-1.94-1.955C17.994 4.25 12 4.25 12 4.25s-5.994 0-7.603.293a2.754 2.754 0 00-1.94 1.955A28.673 28.673 0 002 11.75a28.67 28.67 0 00.457 5.252 2.754 2.754 0 001.94 1.955c1.61.293 7.603.293 7.603.293s5.994 0 7.603-.293a2.754 2.754 0 001.94-1.955 28.67 28.67 0 00.457-5.252 28.673 28.673 0 00-.457-5.252zM10 15.5v-7l6 3.5-6 3.5z" />
+              </svg>
+            </a>
+          </div>
+        </div>
+      </div>
+    </footer>
+  </div>
+</body>
+</html>
diff --git a/preview.py b/preview.py
new file mode 100644
index 0000000000000000000000000000000000000000..5e9721135423d5a2eb71b9b5fbf045cc559ffa7d
--- /dev/null
+++ b/preview.py
@@ -0,0 +1,75 @@
+#!/usr/bin/env python3
+"""Convenient local preview server for the Sintaxe Digital landing page."""
+
+from __future__ import annotations
+
+import argparse
+import http.server
+import socket
+import sys
+import threading
+import webbrowser
+from functools import partial
+from pathlib import Path
+
+
+def parse_args() -> argparse.Namespace:
+    parser = argparse.ArgumentParser(
+        description="Serve the landing page locally and open it in a browser."
+    )
+    parser.add_argument(
+        "--port",
+        type=int,
+        default=8000,
+        help="Port to run the preview server on (default: 8000).",
+    )
+    parser.add_argument(
+        "--no-browser",
+        action="store_true",
+        help="Do not automatically open the browser after starting the server.",
+    )
+    return parser.parse_args()
+
+
+def ensure_port_available(port: int) -> None:
+    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
+        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
+        try:
+            sock.bind(("127.0.0.1", port))
+        except OSError as exc:
+            raise OSError(
+                f"Port {port} is already in use. Specify a different port with --port."
+            ) from exc
+
+
+def main() -> None:
+    args = parse_args()
+
+    try:
+        ensure_port_available(args.port)
+    except OSError as exc:
+        print(exc, file=sys.stderr)
+        sys.exit(1)
+
+    base_dir = Path(__file__).resolve().parent
+    handler_cls = partial(http.server.SimpleHTTPRequestHandler, directory=str(base_dir))
+    server = http.server.ThreadingHTTPServer(("0.0.0.0", args.port), handler_cls)
+
+    url = f"http://127.0.0.1:{args.port}/index.html"
+    print(f"Serving Sintaxe Digital preview at {url}")
+    print("The page will open in your default browser automatically.")
+    print("Press CTRL+C here to stop the preview server when you're done.")
+
+    if not args.no_browser:
+        threading.Timer(1.0, webbrowser.open, args=(url,)).start()
+
+    try:
+        server.serve_forever()
+    except KeyboardInterrupt:
+        print("\nShutting down preview server...")
+    finally:
+        server.server_close()
+
+
+if __name__ == "__main__":
+    main()
diff --git a/servicos.html b/servicos.html
new file mode 100644
index 0000000000000000000000000000000000000000..f95863302ad2deca9783ba5a0ed61fd5b35542a8
--- /dev/null
+++ b/servicos.html
@@ -0,0 +1,198 @@
+<!DOCTYPE html>
+<html lang="pt-BR">
+<head>
+  <meta charset="UTF-8" />
+  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+  <title>Sintaxe Digital - Serviços</title>
+  <link rel="preconnect" href="https://fonts.googleapis.com">
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
+  <script src="https://cdn.tailwindcss.com"></script>
+  <style>
+    body { font-family: 'Inter', sans-serif; }
+  </style>
+</head>
+<body class="bg-[#0A0F1A] text-gray-200">
+  <div class="relative overflow-hidden">
+    <div class="pointer-events-none absolute inset-0 opacity-60">
+      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
+        <defs>
+          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
+            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51,255,153,0.08)" stroke-width="1" />
+          </pattern>
+        </defs>
+        <rect width="100%" height="100%" fill="url(#grid)" />
+      </svg>
+    </div>
+
+    <!-- Header -->
+    <header class="sticky top-0 z-50 bg-[#0A0F1A]/95 backdrop-blur border-b border-white/5">
+      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
+        <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+        <div class="hidden items-center space-x-8 text-sm font-medium md:flex">
+          <a href="index.html" class="hover:text-white transition">Home</a>
+          <a href="sobre.html" class="hover:text-white transition">Sobre Nós</a>
+          <a href="marketing.html" class="hover:text-white transition">Marketing Digital</a>
+          <a href="dev-ia.html" class="hover:text-white transition">Dev &amp; IA</a>
+          <a href="contato.html" class="hover:text-white transition">Contato</a>
+        </div>
+        <a href="contato.html" class="hidden rounded-full border border-[#FF6B00] px-4 py-2 text-sm font-semibold text-[#FF6B00] transition hover:bg-[#FF6B00]/10 md:inline-flex">Briefing Rápido</a>
+        <button class="inline-flex items-center justify-center rounded border border-white/10 p-2 text-gray-200 md:hidden">
+          <span class="sr-only">Abrir menu</span>
+          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
+          </svg>
+        </button>
+      </nav>
+    </header>
+
+    <main>
+      <!-- Hero Serviços -->
+      <section id="home" class="relative mx-auto flex max-w-6xl flex-col justify-center gap-6 px-6 py-24">
+        <div class="max-w-3xl space-y-6">
+          <span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-200">Mapa de Serviços</span>
+          <h1 class="text-4xl font-bold text-white sm:text-5xl">Nossas Frentes de Atuação.</h1>
+          <h2 class="text-xl font-medium text-gray-300 sm:text-2xl">Especialistas em Marketing e Tecnologia, trabalhando de forma integrada.</h2>
+          <p class="text-base text-gray-400 sm:text-lg">Conectamos estratégias de crescimento com engenharia digital para gerar performance e escala. Escolha o caminho ideal para o seu próximo salto.</p>
+        </div>
+      </section>
+
+      <!-- Departamentos -->
+      <section id="departamentos" class="mx-auto max-w-6xl px-6 pb-24">
+        <div class="grid gap-8 lg:grid-cols-2">
+          <article class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur transition hover:border-[#33FF99]/40">
+            <div class="absolute inset-x-0 top-0 h-2 bg-[#33FF99]"></div>
+            <div class="flex items-start justify-between gap-6">
+              <div class="space-y-4">
+                <span class="inline-flex items-center rounded-full bg-[#33FF99]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#33FF99]">Growth Lab</span>
+                <h3 class="text-2xl font-semibold text-[#33FF99]">Marketing Digital</h3>
+                <p class="text-sm text-gray-300">Atraia, converta e retenha clientes com estratégias de growth focadas em performance e dados.</p>
+              </div>
+              <div class="hidden rounded-full bg-[#33FF99]/15 p-4 text-[#33FF99] sm:inline-flex">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v7.5h7.5V3H3zm10.5 0V6H21M13.5 10.5H21V21h-7.5v-2.25M10.5 13.5H3V21h7.5v-7.5zm0 0L21 3" />
+                </svg>
+              </div>
+            </div>
+            <ul class="mt-8 grid gap-3 text-sm text-gray-400 sm:grid-cols-2">
+              <li class="flex items-center gap-2">
+                <span class="inline-flex h-2 w-2 rounded-full bg-[#33FF99]"></span>
+                Planejamento orientado a dados
+              </li>
+              <li class="flex items-center gap-2">
+                <span class="inline-flex h-2 w-2 rounded-full bg-[#33FF99]"></span>
+                Operação de tráfego multicanal
+              </li>
+              <li class="flex items-center gap-2">
+                <span class="inline-flex h-2 w-2 rounded-full bg-[#33FF99]"></span>
+                Conteúdo e SEO integrado
+              </li>
+              <li class="flex items-center gap-2">
+                <span class="inline-flex h-2 w-2 rounded-full bg-[#33FF99]"></span>
+                Automação e CRM inteligentes
+              </li>
+            </ul>
+            <a href="marketing.html" class="mt-10 inline-flex items-center justify-center rounded-full bg-[#33FF99] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[#33FF99]/30 transition hover:bg-[#33FF99]/90">Ver Soluções de Marketing</a>
+          </article>
+
+          <article class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur transition hover:border-[#FF6B00]/40">
+            <div class="absolute inset-x-0 top-0 h-2 bg-[#FF6B00]"></div>
+            <div class="flex items-start justify-between gap-6">
+              <div class="space-y-4">
+                <span class="inline-flex items-center rounded-full bg-[#FF6B00]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FF6B00]">Tech Lab</span>
+                <h3 class="text-2xl font-semibold text-[#FF6B00]">Desenvolvimento &amp; IA</h3>
+                <p class="text-sm text-gray-300">Construa a tecnologia, automações e plataformas que dão à sua empresa uma vantagem competitiva.</p>
+              </div>
+              <div class="hidden rounded-full bg-[#FF6B00]/15 p-4 text-[#FF6B00] sm:inline-flex">
+                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25m0 13.5V21m10.5 0v-2.25m0-13.5V3M3 6.75h2.25m13.5 0H21m0 10.5h-2.25M3 17.25h2.25M7.5 7.5h9v9h-9v-9z" />
+                </svg>
+              </div>
+            </div>
+            <ul class="mt-8 grid gap-3 text-sm text-gray-400 sm:grid-cols-2">
+              <li class="flex items-center gap-2">
+                <span class="inline-flex h-2 w-2 rounded-full bg-[#FF6B00]"></span>
+                Produtos digitais escaláveis
+              </li>
+              <li class="flex items-center gap-2">
+                <span class="inline-flex h-2 w-2 rounded-full bg-[#FF6B00]"></span>
+                Automação e IA aplicada
+              </li>
+              <li class="flex items-center gap-2">
+                <span class="inline-flex h-2 w-2 rounded-full bg-[#FF6B00]"></span>
+                Integrações e APIs robustas
+              </li>
+              <li class="flex items-center gap-2">
+                <span class="inline-flex h-2 w-2 rounded-full bg-[#FF6B00]"></span>
+                Suporte e evolução contínua
+              </li>
+            </ul>
+            <a href="dev-ia.html" class="mt-10 inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6B00]/30 transition hover:bg-[#FF6B00]/80">Ver Soluções de Tech</a>
+          </article>
+        </div>
+      </section>
+    </main>
+
+    <!-- Footer -->
+    <footer class="border-t border-white/5 bg-[#05070E]">
+      <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
+        <div>
+          <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+          <p class="mt-3 text-sm text-gray-400">Programamos jornadas digitais que conectam, convertem e escalam.</p>
+          <div class="mt-6 flex space-x-3 text-gray-400">
+            <a href="#" aria-label="LinkedIn" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
+                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5A2.49 2.49 0 010 3.5C0 2.12 1.11 1 2.5 1S5 2.12 5 3.5zM.22 8.98h4.56V24H.22zM8.45 8.98h4.37v2.05h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.49 3.05 5.49 7.02V24h-4.56v-6.72c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.45z" />
+              </svg>
+            </a>
+            <a href="#" aria-label="Instagram" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
+              </svg>
+            </a>
+            <a href="#" aria-label="YouTube" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M21.543 7.104a2.508 2.508 0 00-1.767-1.77C18.274 5 12 5 12 5s-6.274 0-7.776.334a2.508 2.508 0 00-1.767 1.77A26.373 26.373 0 002 11.999a26.373 26.373 0 00.457 4.896 2.508 2.508 0 001.767 1.77C5.726 19 12 19 12 19s6.274 0 7.776-.334a2.508 2.508 0 001.767-1.77A26.373 26.373 0 0022 12a26.373 26.373 0 00-.457-4.896zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
+              </svg>
+            </a>
+          </div>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Links rápidos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li><a class="hover:text-white" href="index.html">Home</a></li>
+            <li><a class="hover:text-white" href="sobre.html">Sobre Nós</a></li>
+            <li><a class="hover:text-white" href="marketing.html">Marketing Digital</a></li>
+            <li><a class="hover:text-white" href="dev-ia.html">Dev &amp; IA</a></li>
+            <li><a class="hover:text-white" href="contato.html">Contato</a></li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Departamentos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Marketing Digital</li>
+            <li>Performance &amp; Growth</li>
+            <li>Desenvolvimento Web</li>
+            <li>Inteligência Artificial</li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Contato</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Email: <a class="hover:text-white" href="mailto:contato@sintaxedigital.com">contato@sintaxedigital.com</a></li>
+            <li>WhatsApp: <a class="hover:text-white" href="https://wa.me/5511999999999">+55 11 99999-9999</a></li>
+            <li>São Paulo · Atendimento Global</li>
+          </ul>
+        </div>
+      </div>
+      <div class="border-t border-white/5 py-6 text-center text-xs text-gray-500">
+        © <span id="ano"></span> Sintaxe Digital. Todos os direitos reservados.
+      </div>
+    </footer>
+  </div>
+
+  <script>
+    document.getElementById('ano').textContent = new Date().getFullYear();
+  </script>
+</body>
+</html>
diff --git a/sobre.html b/sobre.html
new file mode 100644
index 0000000000000000000000000000000000000000..9ada88e0f5d0ab894ecd76e43fabf0cfa27eb963
--- /dev/null
+++ b/sobre.html
@@ -0,0 +1,207 @@
+<!DOCTYPE html>
+<html lang="pt-BR">
+<head>
+  <meta charset="UTF-8" />
+  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+  <title>Sintaxe Digital - Sobre Nós</title>
+  <link rel="preconnect" href="https://fonts.googleapis.com">
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
+  <script src="https://cdn.tailwindcss.com"></script>
+  <style>
+    body { font-family: 'Inter', sans-serif; }
+  </style>
+</head>
+<body class="bg-[#0A0F1A] text-gray-200">
+  <div class="relative overflow-hidden">
+    <div class="pointer-events-none absolute inset-0 opacity-40">
+      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
+        <defs>
+          <pattern id="sobre-grid" width="36" height="36" patternUnits="userSpaceOnUse">
+            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
+          </pattern>
+        </defs>
+        <rect width="100%" height="100%" fill="url(#sobre-grid)" />
+      </svg>
+    </div>
+
+    <!-- Header -->
+    <header class="sticky top-0 z-50 bg-[#0A0F1A]/95 backdrop-blur border-b border-white/5">
+      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
+        <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+        <div class="hidden items-center space-x-8 text-sm font-medium md:flex">
+          <a href="index.html" class="hover:text-white transition">Home</a>
+          <a href="sobre.html" class="hover:text-white transition">Sobre Nós</a>
+          <a href="marketing.html" class="hover:text-white transition">Marketing Digital</a>
+          <a href="dev-ia.html" class="hover:text-white transition">Dev &amp; IA</a>
+          <a href="contato.html" class="hover:text-white transition">Contato</a>
+        </div>
+        <a href="contato.html" class="hidden rounded-full border border-[#FF6B00] px-4 py-2 text-sm font-semibold text-[#FF6B00] transition hover:bg-[#FF6B00]/10 md:inline-flex">Briefing Rápido</a>
+        <button class="inline-flex items-center justify-center rounded border border-white/10 p-2 text-gray-200 md:hidden">
+          <span class="sr-only">Abrir menu</span>
+          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
+          </svg>
+        </button>
+      </nav>
+    </header>
+
+    <main>
+      <!-- Hero Sobre -->
+      <section id="home" class="relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-24">
+        <div class="max-w-3xl space-y-6">
+          <h1 class="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Nós somos a Sintaxe Digital.</h1>
+          <h2 class="text-xl font-medium text-gray-300 sm:text-2xl">A agência que enxerga seu negócio como um ecossistema completo.</h2>
+          <p class="text-base text-gray-300 sm:text-lg">
+            Não somos apenas executores. Somos arquitetos de soluções digitais. Nossa filosofia é baseada na 'sintaxe': a ordem correta das peças para gerar o resultado máximo. Integramos Marketing, Desenvolvimento e IA para construir um sistema coeso que programa o seu sucesso.
+          </p>
+        </div>
+      </section>
+
+      <!-- Filosofia -->
+      <section id="sobre" class="bg-white/5 py-20">
+        <div class="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
+          <div class="space-y-5">
+            <span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-200">Manifesto</span>
+            <h3 class="text-3xl font-semibold text-white sm:text-4xl">A Abordagem do Arquiteto</h3>
+            <div class="space-y-4 text-gray-300">
+              <h4 class="text-xl font-semibold text-white">Precisão em cada linha.</h4>
+              <p>A "Sintaxe" é nossa regra. No código, na estratégia de marketing e na análise de dados. Acreditamos que o sucesso digital não é um acidente, mas um projeto de engenharia. Mapeamos, planejamos e executamos com um único foco: performance sustentável.</p>
+            </div>
+          </div>
+          <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0F1A] p-12">
+            <div class="absolute -top-16 -left-10 h-32 w-32 rounded-full bg-[#FF6B00]/20 blur-3xl"></div>
+            <div class="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-[#33FF99]/10 blur-3xl"></div>
+            <div class="relative flex flex-col gap-6">
+              <div class="flex items-center gap-4">
+                <span class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-white">01</span>
+                <p class="text-sm text-gray-300">Blueprint digital: desenhamos fluxos, integrações e jornadas antes da primeira linha de código.</p>
+              </div>
+              <div class="flex items-center gap-4">
+                <span class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-white">02</span>
+                <p class="text-sm text-gray-300">Prototipagem rápida: validamos hipóteses com dados e feedbacks reais.</p>
+              </div>
+              <div class="flex items-center gap-4">
+                <span class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-white">03</span>
+                <p class="text-sm text-gray-300">Engenharia contínua: mantemos o ecossistema vivo com otimizações e inovação constante.</p>
+              </div>
+            </div>
+          </div>
+        </div>
+      </section>
+
+      <!-- Valores -->
+      <section id="marketing" class="mx-auto max-w-6xl px-6 py-20">
+        <div class="mb-12 max-w-3xl">
+          <span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-300">Essência</span>
+          <h2 class="mt-4 text-3xl font-semibold text-white sm:text-4xl">Nossos Pilares</h2>
+          <p class="mt-4 text-gray-400">Construímos relações de longo prazo com base em integração, performance e inovação aplicada.</p>
+        </div>
+        <div class="grid gap-8 md:grid-cols-3">
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <div class="mb-5 inline-flex rounded-full bg-white/10 p-3 text-gray-200">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h-3a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h3m7.5-12h3a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-3m-7.5 0h7.5m-7.5-12V5.25a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V6.75m-7.5 0h7.5" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Integração (Marketing + Tech)</h3>
+            <p class="mt-3 text-sm text-gray-400">Times multidisciplinares trabalhando como um único organismo orientado a resultados.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <div class="mb-5 inline-flex rounded-full bg-white/10 p-3 text-gray-200">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.5l6.75-6.75L13.5 10.5 21 3" />
+                <path stroke-linecap="round" stroke-linejoin="round" d="M21 3v6h-6" />
+                <path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Performance (Foco em ROI)</h3>
+            <p class="mt-3 text-sm text-gray-400">Metas claras, métricas transparentes e decisões guiadas por dados do seu negócio.</p>
+          </div>
+          <div class="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
+            <div class="mb-5 inline-flex rounded-full bg-white/10 p-3 text-gray-200">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
+                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5V9m0 0l3 3m-3-3l-3 3m3-8.25a7.5 7.5 0 107.5 7.5" />
+              </svg>
+            </div>
+            <h3 class="text-lg font-semibold text-white">Inovação (IA Aplicada)</h3>
+            <p class="mt-3 text-sm text-gray-400">Tecnologias emergentes incorporadas à rotina para acelerar respostas e personalização.</p>
+          </div>
+        </div>
+      </section>
+
+      <div id="devia" class="sr-only" aria-hidden="true"></div>
+
+      <!-- CTA Final -->
+      <section id="contato" class="mx-auto max-w-6xl px-6 pb-24">
+        <div class="rounded-3xl border border-[#FF6B00]/30 bg-gradient-to-br from-[#FF6B00]/10 via-[#0A0F1A] to-[#FF6B00]/10 p-12 text-center shadow-lg shadow-[#FF6B00]/20">
+          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Vamos desenhar seu projeto?</h2>
+          <p class="mt-4 text-gray-300">Veja como nossa abordagem integrada pode ser aplicada ao seu desafio específico.</p>
+          <a href="mailto:contato@sintaxedigital.com" class="mt-8 inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#FF6B00]/80">Iniciar Projeto</a>
+        </div>
+      </section>
+    </main>
+
+    <!-- Footer -->
+    <footer class="border-t border-white/5 bg-[#05070E]">
+      <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
+        <div>
+          <a href="index.html" class="text-xl font-semibold text-white">Sintaxe Digital</a>
+          <p class="mt-3 text-sm text-gray-400">Programamos jornadas digitais que conectam, convertem e escalam.</p>
+          <div class="mt-6 flex space-x-3 text-gray-400">
+            <a href="#" aria-label="LinkedIn" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
+                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5A2.49 2.49 0 010 3.5C0 2.12 1.11 1 2.5 1S5 2.12 5 3.5zM.22 8.98h4.56V24H.22zM8.45 8.98h4.37v2.05h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.49 3.05 5.49 7.02V24h-4.56v-6.72c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.45z" />
+              </svg>
+            </a>
+            <a href="#" aria-label="Instagram" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
+              </svg>
+            </a>
+            <a href="#" aria-label="YouTube" class="hover:text-white">
+              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
+                <path d="M21.543 7.104a2.508 2.508 0 00-1.767-1.77C18.274 5 12 5 12 5s-6.274 0-7.776.334a2.508 2.508 0 00-1.767 1.77A26.373 26.373 0 002 11.999a26.373 26.373 0 00.457 4.896 2.508 2.508 0 001.767 1.77C5.726 19 12 19 12 19s6.274 0 7.776-.334a2.508 2.508 0 001.767-1.77A26.373 26.373 0 0022 12a26.373 26.373 0 00-.457-4.896zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
+              </svg>
+            </a>
+          </div>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Links rápidos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li><a class="hover:text-white" href="index.html">Home</a></li>
+            <li><a class="hover:text-white" href="sobre.html">Sobre Nós</a></li>
+            <li><a class="hover:text-white" href="marketing.html">Marketing Digital</a></li>
+            <li><a class="hover:text-white" href="dev-ia.html">Dev &amp; IA</a></li>
+            <li><a class="hover:text-white" href="contato.html">Contato</a></li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Departamentos</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Marketing Digital</li>
+            <li>Performance &amp; Growth</li>
+            <li>Desenvolvimento Web</li>
+            <li>Inteligência Artificial</li>
+          </ul>
+        </div>
+        <div>
+          <h4 class="text-sm font-semibold uppercase tracking-wide text-gray-300">Contato</h4>
+          <ul class="mt-4 space-y-2 text-sm text-gray-400">
+            <li>Email: <a class="hover:text-white" href="mailto:contato@sintaxedigital.com">contato@sintaxedigital.com</a></li>
+            <li>WhatsApp: <a class="hover:text-white" href="https://wa.me/5511999999999">+55 11 99999-9999</a></li>
+            <li>São Paulo · Atendimento Global</li>
+          </ul>
+        </div>
+      </div>
+      <div class="border-t border-white/5 py-6 text-center text-xs text-gray-500">
+        © <span id="ano"></span> Sintaxe Digital. Todos os direitos reservados.
+      </div>
+    </footer>
+  </div>
+
+  <script>
+    document.getElementById('ano').textContent = new Date().getFullYear();
+  </script>
+</body>
+</html>
diff --git a/tests/conftest.py b/tests/conftest.py
new file mode 100644
index 0000000000000000000000000000000000000000..67375ee954b4de30eab034c7e8180cee4f8ce1fc
--- /dev/null
+++ b/tests/conftest.py
@@ -0,0 +1,7 @@
+import sys
+from pathlib import Path
+
+ROOT_DIR = Path(__file__).resolve().parents[1]
+root_str = str(ROOT_DIR)
+if root_str not in sys.path:
+    sys.path.insert(0, root_str)
 
EOF
)