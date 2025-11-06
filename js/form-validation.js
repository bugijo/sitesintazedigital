// Validação de formulários e funcionalidades interativas
document.addEventListener('DOMContentLoaded', function() {
    // Validação do formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const empresa = document.getElementById('empresa').value.trim();
            const servico = document.getElementById('servico').value;
            const mensagem = document.getElementById('mensagem').value.trim();
            const aceito = document.getElementById('aceito').checked;
            
            // Validações
            if (!nome || nome.length < 2) {
                showError('Nome deve ter pelo menos 2 caracteres');
                return;
            }
            
            if (!isValidEmail(email)) {
                showError('Email inválido');
                return;
            }
            
            if (!telefone || telefone.length < 10) {
                showError('Telefone deve ter pelo menos 10 dígitos');
                return;
            }
            
            if (!empresa || empresa.length < 2) {
                showError('Nome da empresa deve ter pelo menos 2 caracteres');
                return;
            }
            
            if (!servico) {
                showError('Selecione um serviço');
                return;
            }
            
            if (!mensagem || mensagem.length < 10) {
                showError('Mensagem deve ter pelo menos 10 caracteres');
                return;
            }
            
            if (!aceito) {
                showError('Você deve aceitar os termos');
                return;
            }
            
            // Se chegou até aqui, o formulário é válido
            submitForm({
                nome,
                email,
                telefone,
                empresa,
                servico,
                mensagem
            });
        });
    }
    
    // Validação em tempo real
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
    
    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                if (value.length < 14) {
                    value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
                }
                e.target.value = value;
            }
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    switch(fieldName) {
        case 'nome':
            if (!value || value.length < 2) {
                showFieldError(field, 'Nome deve ter pelo menos 2 caracteres');
                return false;
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                showFieldError(field, 'Email inválido');
                return false;
            }
            break;
        case 'telefone':
            const phoneNumbers = value.replace(/\D/g, '');
            if (!phoneNumbers || phoneNumbers.length < 10) {
                showFieldError(field, 'Telefone deve ter pelo menos 10 dígitos');
                return false;
            }
            break;
        case 'empresa':
            if (!value || value.length < 2) {
                showFieldError(field, 'Nome da empresa deve ter pelo menos 2 caracteres');
                return false;
            }
            break;
        case 'mensagem':
            if (!value || value.length < 10) {
                showFieldError(field, 'Mensagem deve ter pelo menos 10 caracteres');
                return false;
            }
            break;
    }
    
    clearFieldError(field);
    return true;
}

function showError(message) {
    // Remove erro anterior se existir
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Cria novo erro
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-4';
    errorDiv.innerHTML = `
        <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            ${message}
        </div>
    `;
    
    const form = document.getElementById('contact-form');
    form.insertBefore(errorDiv, form.firstChild);
    
    // Remove o erro após 5 segundos
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-red-400 text-sm mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
    field.classList.add('border-red-500');
}

function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('border-red-500');
}

function clearError(field) {
    clearFieldError(field);
}

function submitForm(data) {
    const submitButton = document.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Mostra loading
    submitButton.innerHTML = `
        <span class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
        </span>
    `;
    submitButton.disabled = true;
    
    // Simula envio (em produção, fazer requisição real)
    setTimeout(() => {
        showSuccess('Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.');
        
        // Reset form
        document.getElementById('contact-form').reset();
        
        // Restaura botão
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'event_category': 'Contact',
                'event_label': data.servico
            });
        }
    }, 2000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg mb-4';
    successDiv.innerHTML = `
        <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            ${message}
        </div>
    `;
    
    const form = document.getElementById('contact-form');
    form.insertBefore(successDiv, form.firstChild);
    
    // Remove a mensagem após 8 segundos
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 8000);
}

// Calculadora ROI (para página de desenvolvimento)
function initROICalculator() {
    const calculator = document.getElementById('roi-calculator');
    if (!calculator) return;
    
    const inputs = calculator.querySelectorAll('input');
    const calculateBtn = calculator.querySelector('#calculate-roi');
    const resultDiv = calculator.querySelector('#roi-result');
    
    calculateBtn.addEventListener('click', function() {
        const faturamentoAtual = parseFloat(document.getElementById('faturamento-atual').value) || 0;
        const custoAtual = parseFloat(document.getElementById('custo-atual').value) || 0;
        const investimentoProjeto = parseFloat(document.getElementById('investimento-projeto').value) || 0;
        
        if (faturamentoAtual <= 0 || investimentoProjeto <= 0) {
            resultDiv.innerHTML = `
                <div class="text-red-400 text-center p-4">
                    Por favor, preencha todos os campos com valores válidos.
                </div>
            `;
            return;
        }
        
        // Cálculos baseados em médias do mercado
        const aumentoConversao = 0.25; // 25% de aumento médio
        const reducaoCustos = 0.15; // 15% de redução de custos
        const novoFaturamento = faturamentoAtual * (1 + aumentoConversao);
        const novoCusto = custoAtual * (1 - reducaoCustos);
        const economiaAnual = (faturamentoAtual - custoAtual) - (novoFaturamento - novoCusto - investimentoProjeto);
        const roi = ((novoFaturamento - novoCusto - investimentoProjeto) / investimentoProjeto) * 100;
        const payback = investimentoProjeto / ((novoFaturamento - novoCusto) - (faturamentoAtual - custoAtual)) * 12;
        
        resultDiv.innerHTML = `
            <div class="bg-gradient-to-r from-[#33FF99]/10 to-[#FF6B00]/10 border border-[#33FF99]/20 rounded-lg p-6">
                <h4 class="text-xl font-bold text-[#33FF99] mb-4">Projeção de Resultados</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-white">${roi.toFixed(1)}%</div>
                        <div class="text-sm text-gray-400">ROI Anual</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-[#FF6B00]">R$ ${(novoFaturamento - faturamentoAtual).toLocaleString('pt-BR')}</div>
                        <div class="text-sm text-gray-400">Aumento de Receita</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-[#33FF99]">${payback.toFixed(1)} meses</div>
                        <div class="text-sm text-gray-400">Payback</div>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <a href="contato.html" class="inline-flex items-center bg-gradient-to-r from-[#33FF99] to-[#FF6B00] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                        Quero estes resultados
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'calculator_use', {
                'event_category': 'ROI Calculator',
                'event_label': 'Calculate',
                'value': roi
            });
        }
    });
}

// Inicializa calculadora quando a página carrega
document.addEventListener('DOMContentLoaded', initROICalculator);