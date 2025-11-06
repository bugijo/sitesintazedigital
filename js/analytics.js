// Google Analytics e métricas de conversão
(function() {
    // Configuração do Google Analytics 4
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    // Substitua 'GA_MEASUREMENT_ID' pelo seu ID real do Google Analytics
    gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
    });
    
    // Tracking de eventos personalizados
    function trackEvent(eventName, parameters = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
        
        // Log para desenvolvimento
        console.log('Analytics Event:', eventName, parameters);
    }
    
    // Tracking de cliques em CTAs
    document.addEventListener('DOMContentLoaded', function() {
        // CTAs principais
        const ctaButtons = document.querySelectorAll('a[href*="contato"], button[type="submit"]');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                const buttonText = this.textContent.trim();
                const buttonLocation = this.closest('section')?.className || 'unknown';
                
                trackEvent('cta_click', {
                    'event_category': 'CTA',
                    'event_label': buttonText,
                    'button_location': buttonLocation
                });
            });
        });
        
        // Tracking de navegação
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const linkText = this.textContent.trim();
                const linkHref = this.getAttribute('href');
                
                trackEvent('navigation_click', {
                    'event_category': 'Navigation',
                    'event_label': linkText,
                    'link_url': linkHref
                });
            });
        });
        
        // Tracking de scroll depth
        let maxScroll = 0;
        const scrollMilestones = [25, 50, 75, 90, 100];
        let trackedMilestones = [];
        
        window.addEventListener('scroll', function() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                scrollMilestones.forEach(milestone => {
                    if (scrollPercent >= milestone && !trackedMilestones.includes(milestone)) {
                        trackedMilestones.push(milestone);
                        
                        trackEvent('scroll_depth', {
                            'event_category': 'Engagement',
                            'event_label': `${milestone}%`,
                            'value': milestone
                        });
                    }
                });
            }
        });
        
        // Tracking de tempo na página
        let startTime = Date.now();
        let timeOnPageTracked = false;
        
        // Track após 30 segundos
        setTimeout(() => {
            if (!timeOnPageTracked) {
                trackEvent('time_on_page', {
                    'event_category': 'Engagement',
                    'event_label': '30_seconds',
                    'value': 30
                });
                timeOnPageTracked = true;
            }
        }, 30000);
        
        // Track ao sair da página
        window.addEventListener('beforeunload', function() {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            trackEvent('session_duration', {
                'event_category': 'Engagement',
                'event_label': 'page_exit',
                'value': timeOnPage
            });
        });
        
        // Tracking de interações com formulários
        const formInputs = document.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            let hasInteracted = false;
            
            input.addEventListener('focus', function() {
                if (!hasInteracted) {
                    hasInteracted = true;
                    
                    trackEvent('form_interaction', {
                        'event_category': 'Form',
                        'event_label': 'field_focus',
                        'field_name': this.name || this.id
                    });
                }
            });
        });
        
        // Tracking de downloads (se houver)
        const downloadLinks = document.querySelectorAll('a[href*=".pdf"], a[href*=".doc"], a[href*=".zip"]');
        downloadLinks.forEach(link => {
            link.addEventListener('click', function() {
                const fileName = this.getAttribute('href').split('/').pop();
                
                trackEvent('file_download', {
                    'event_category': 'Download',
                    'event_label': fileName,
                    'file_type': fileName.split('.').pop()
                });
            });
        });
        
        // Tracking de cliques em links externos
        const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
        externalLinks.forEach(link => {
            link.addEventListener('click', function() {
                const linkUrl = this.getAttribute('href');
                
                trackEvent('external_link_click', {
                    'event_category': 'External Link',
                    'event_label': linkUrl,
                    'link_domain': new URL(linkUrl).hostname
                });
            });
        });
        
        // Tracking de erros JavaScript
        window.addEventListener('error', function(e) {
            trackEvent('javascript_error', {
                'event_category': 'Error',
                'event_label': e.message,
                'error_file': e.filename,
                'error_line': e.lineno
            });
        });
    });
    
    // Função para tracking manual (disponível globalmente)
    window.trackCustomEvent = trackEvent;
    
    // Tracking de performance da página
    window.addEventListener('load', function() {
        // Aguarda um pouco para garantir que todas as métricas estejam disponíveis
        setTimeout(() => {
            if ('performance' in window) {
                const navigation = performance.getEntriesByType('navigation')[0];
                const loadTime = Math.round(navigation.loadEventEnd - navigation.fetchStart);
                
                trackEvent('page_performance', {
                    'event_category': 'Performance',
                    'event_label': 'page_load_time',
                    'value': loadTime,
                    'custom_map': {
                        'load_time_ms': loadTime
                    }
                });
                
                // Track se a página carregou em menos de 3 segundos (meta do briefing)
                if (loadTime < 3000) {
                    trackEvent('performance_goal_met', {
                        'event_category': 'Performance',
                        'event_label': 'under_3_seconds',
                        'value': loadTime
                    });
                }
            }
        }, 1000);
    });
    
    // Tracking de conversões por página
    const currentPage = window.location.pathname;
    const pageConversions = {
        '/contato.html': 'contact_page_view',
        '/marketing.html': 'marketing_page_view',
        '/desenvolvimento.html': 'development_page_view',
        '/sobre.html': 'about_page_view',
        '/servicos.html': 'services_page_view'
    };
    
    if (pageConversions[currentPage]) {
        trackEvent(pageConversions[currentPage], {
            'event_category': 'Page View',
            'event_label': currentPage
        });
    }
    
})();

// Função para tracking de conversões específicas
function trackConversion(conversionType, value = null) {
    const conversionData = {
        'event_category': 'Conversion',
        'event_label': conversionType
    };
    
    if (value !== null) {
        conversionData.value = value;
    }
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', conversionData);
    }
    
    console.log('Conversion tracked:', conversionType, value);
}

// Função para tracking de metas de negócio
function trackBusinessGoal(goalType, details = {}) {
    const goalData = {
        'event_category': 'Business Goal',
        'event_label': goalType,
        ...details
    };
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'business_goal', goalData);
    }
    
    console.log('Business goal tracked:', goalType, details);
}

// Exportar funções para uso global
window.trackConversion = trackConversion;
window.trackBusinessGoal = trackBusinessGoal;