// Elementos Avançados de Neuromarketing - Sintaxe Digital

document.addEventListener('DOMContentLoaded', function() {
    
    // Navegação Ativa
    function setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            link.classList.remove('nav-active');
            const href = link.getAttribute('href');
            
            if (href === currentPage || 
                (currentPage === 'index.html' && href === '#') ||
                (currentPage === '' && href === '#')) {
                link.classList.add('nav-active');
            }
        });
    }
    
    // Animações ao Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(el => observer.observe(el));
    }
    
    // Timer de Escassez - REMOVIDO conforme solicitação do usuário
    
    // Social Proof Dinâmico - REMOVIDO conforme solicitação do usuário
    
    // Tracking de Comportamento
    function trackUserBehavior() {
        let timeOnPage = 0;
        let scrollDepth = 0;
        
        // Tempo na página
        setInterval(() => {
            timeOnPage++;
            
            // Mostrar CTA especial após 2 minutos - REMOVIDO conforme solicitação do usuário
            // if (timeOnPage === 120) {
            //     showSpecialCTA();
            // }
        }, 1000);
        
        // Profundidade do scroll
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            
            scrollDepth = Math.max(scrollDepth, scrollPercent);
            
            // CTA de saída quando usuário rola para cima rapidamente - REMOVIDO conforme solicitação do usuário
            // if (scrollPercent < scrollDepth - 0.1 && scrollDepth > 0.5) {
            //     showExitIntentCTA();
            // }
        });
    }
    
    // CTA Especial por Tempo - REMOVIDO conforme solicitação do usuário
    
    // CTA de Intenção de Saída - REMOVIDO conforme solicitação do usuário
    
    // Formulário Inteligente
    function enhanceForm() {
        const form = document.querySelector('form');
        if (!form) return;
        
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            // Validação em tempo real
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            // Sugestões inteligentes
            if (input.name === 'empresa') {
                input.addEventListener('input', function() {
                    if (this.value.length > 2) {
                        showCompanySuggestions(this);
                    }
                });
            }
        });
        
        // Progress indicator no formulário
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-indicator mb-6';
        progressContainer.innerHTML = `
            <div class="progress-step active">1</div>
            <div class="progress-line"></div>
            <div class="progress-step">2</div>
            <div class="progress-line"></div>
            <div class="progress-step">3</div>
        `;
        
        form.insertBefore(progressContainer, form.firstChild);
        
        // Atualizar progresso baseado nos campos preenchidos
        inputs.forEach((input, index) => {
            input.addEventListener('input', updateFormProgress);
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';
        
        // Remover mensagens anteriores
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        // Validações específicas
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
                message = 'Por favor, insira um email válido';
                break;
            case 'tel':
                const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
                isValid = phoneRegex.test(value) || value === '';
                message = 'Formato: (11) 99999-9999';
                break;
        }
        
        if (field.required && !value) {
            isValid = false;
            message = 'Este campo é obrigatório';
        }
        
        // Aplicar estilos
        if (!isValid && value) {
            field.classList.add('border-red-500');
            field.classList.remove('border-green-500');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message text-red-400 text-sm mt-1';
            errorDiv.textContent = message;
            field.parentElement.appendChild(errorDiv);
        } else if (isValid && value) {
            field.classList.add('border-green-500');
            field.classList.remove('border-red-500');
        }
        
        return isValid;
    }
    
    function updateFormProgress() {
        const form = document.querySelector('form');
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        const progressSteps = form.querySelectorAll('.progress-step');
        const progressLines = form.querySelectorAll('.progress-line');
        
        let filledFields = 0;
        inputs.forEach(input => {
            if (input.value.trim()) filledFields++;
        });
        
        const progress = filledFields / inputs.length;
        const currentStep = Math.min(Math.floor(progress * 3) + 1, 3);
        
        progressSteps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index + 1 < currentStep) {
                step.classList.add('completed');
            } else if (index + 1 === currentStep) {
                step.classList.add('active');
            }
        });
        
        progressLines.forEach((line, index) => {
            line.classList.remove('completed');
            if (index + 1 < currentStep) {
                line.classList.add('completed');
            }
        });
    }
    
    // Funcionalidades Específicas por Especialização
    function initSpecializedFeatures() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Marketing Digital - Foco em Conversão e Urgência
        if (currentPage === 'marketing.html') {
            initMarketingFeatures();
        }
        
        // Desenvolvimento - Foco em Confiança Técnica
        if (currentPage === 'dev-ia.html') {
            initDevFeatures();
        }
        
        // Automações - Foco em Eficiência e ROI
        if (currentPage === 'automacoes.html') {
            initAutomationFeatures();
        }
    }
    
    // Marketing Digital Features
    function initMarketingFeatures() {
        // Calculadora de ROI interativa
        enhanceROICalculator();
        
        // Urgência visual nos CTAs (mantida para CTAs principais)
        addUrgencyEffects();
    }
    
    // Pop-ups distrativos removidos para manter imagem premium da agência
    
    function addUrgencyEffects() {
        const ctaButtons = document.querySelectorAll('a[href*="contato"], .btn-marketing');
        
        ctaButtons.forEach(button => {
            // Adicionar efeito de pulsação
            button.classList.add('animate-pulse');
            
            // Adicionar contador de tempo limitado
            const urgencyText = document.createElement('div');
            urgencyText.className = 'text-xs text-orange-200 mt-1 font-semibold';
            urgencyText.textContent = '⏰ Oferta válida por tempo limitado';
            
            if (button.parentElement) {
                button.parentElement.appendChild(urgencyText);
            }
        });
    }
    
    // Desenvolvimento Features
    function initDevFeatures() {
        // Showcase de tecnologias
        createTechShowcase();
    }
    
    function createTechShowcase() {
        const technologies = ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'TypeScript', 'Next.js'];
        
        const showcase = document.createElement('div');
        showcase.className = 'fixed top-20 right-4 bg-gray-800 border border-blue-500/20 rounded-lg p-4 z-40';
        showcase.innerHTML = `
            <div class="text-blue-400 text-sm font-semibold mb-2">🚀 Tecnologias em Uso</div>
            <div id="tech-list" class="space-y-1"></div>
        `;
        
        document.body.appendChild(showcase);
        
        const techList = document.getElementById('tech-list');
        let currentTech = 0;
        
        function updateTech() {
            const tech = technologies[currentTech];
            const techElement = document.createElement('div');
            techElement.className = 'text-white text-xs flex items-center space-x-2 animate-fadeInUp';
            techElement.innerHTML = `
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>${tech}</span>
            `;
            
            techList.appendChild(techElement);
            
            // Manter apenas 4 tecnologias visíveis
            if (techList.children.length > 4) {
                techList.removeChild(techList.firstChild);
            }
            
            currentTech = (currentTech + 1) % technologies.length;
        }
        
        // Atualizar a cada 2 segundos
        setInterval(updateTech, 2000);
        updateTech(); // Primeira execução
    }
    

    
    // Automações Features
    function initAutomationFeatures() {
        // Calculadora de economia em tempo real
        enhanceROICalculator();
    }
    

    

    
    function enhanceROICalculator() {
        // Esta função já existe para a calculadora de ROI
        // Adicionar animações e feedback visual melhorado
        const calculatorInputs = document.querySelectorAll('#funcionarios, #horas, #salario');
        
        calculatorInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.add('border-purple-400');
                
                // Feedback visual imediato
                const feedback = document.createElement('div');
                feedback.className = 'text-purple-400 text-xs mt-1 animate-pulse';
                feedback.textContent = '✓ Calculando economia...';
                
                // Remover feedback anterior
                const existingFeedback = this.parentElement.querySelector('.text-purple-400');
                if (existingFeedback) existingFeedback.remove();
                
                this.parentElement.appendChild(feedback);
                
                setTimeout(() => feedback.remove(), 2000);
            });
        });
    }
    
    // Inicializar todas as funcionalidades
    setActiveNavigation();
    animateOnScroll();
    trackUserBehavior();
    enhanceForm();
    initSpecializedFeatures();
    
    // Adicionar classes de animação aos elementos existentes
    const animatedElements = document.querySelectorAll('.card, .service-card, .package-card, .hero-content, .section-content');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    console.log('🚀 Neuromarketing avançado ativado - Sintaxe Digital');
});

// Utilitários globais
window.SintaxeDigital = {
    trackEvent: function(event, data) {
        console.log('📊 Evento rastreado:', event, data);
        // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    },
    
    showNotification: function(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white transform translate-x-full transition-transform duration-300`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(full)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};