import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { NavLink } from "./components/NavLink";
import { useState } from "react";

export default function LandingLight() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleButtonClick = (action: string) => {
    console.log(`Button clicked: ${action}`);
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Social media clicked: ${platform}`);
  };

  return (
    <div className="bg-slate-200 min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <header id="inicio" className="bg-[#041f59] w-full sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-[150px] md:w-[250px] lg:w-[395px] h-auto flex-shrink-0">
              <img src="./src/assets/logo.png" alt="AutoStory Builder" className="w-full h-auto" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              <NavLink
                href="#inicio"
                className="font-['Julius_Sans_One:Regular',sans-serif] text-[18px] lg:text-[24px] text-white"
              >
                Inicio
              </NavLink>
              <NavLink
                href="#como-funciona"
                className="font-['Julius_Sans_One:Regular',sans-serif] text-[18px] lg:text-[24px] text-white"
              >
                Cómo Funciona
              </NavLink>
              <Button
                variant="secondary"
                onClick={() => handleButtonClick('ingresar')}
              >
                Ingresar
              </Button>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
              <NavLink
                href="#inicio"
                className="font-['Julius_Sans_One:Regular',sans-serif] text-[18px] text-white block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </NavLink>
              <NavLink
                href="#como-funciona"
                className="font-['Julius_Sans_One:Regular',sans-serif] text-[18px] text-white block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cómo Funciona
              </NavLink>
              <Button
                variant="secondary"
                onClick={() => {
                  handleButtonClick('ingresar');
                  setMobileMenuOpen(false);
                }}
                fullWidth
              >
                Ingresar
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <h1 className="font-['Julius_Sans_One:Regular',sans-serif] text-[36px] md:text-[52px] lg:text-[64px] text-slate-800 leading-tight">
                Crea contenido de valor en tres pasos
              </h1>
              
              <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[22px] lg:text-[24px] text-slate-800">
                Simplifica la producción de contenido. Subí imágenes, textos, testimonios para crear contenido para redes
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  onClick={() => handleButtonClick('registrarme')}
                >
                  Registrarme
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick('agendar-reunion')}
                >
                  AGENDAR REUNIÓN
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative w-full flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-[450px] md:max-w-[550px] lg:max-w-[669px]">
                <img src="./src/assets/hero.png" alt="Dashboard mostrando 78% Eficiencia Impresionante con gráficos de datos" className="w-full h-auto rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="border-t border-[#041F59] opacity-30"></div>
      </div>

      {/* How It Works Section */}
      <section id="como-funciona" className="w-full bg-[rgba(217,217,217,0.25)] py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-['Julius_Sans_One:Regular',sans-serif] text-[32px] md:text-[40px] text-slate-800 text-center mb-12 md:mb-16">
            ¿CÓMO FUNCIONA?
          </h2>

          <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
            {/* Step 1 - SUBE */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-[#041f59] rounded-full flex items-center justify-center">
                <img src="./src/assets/num1.png" alt="Upload" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-['Inter:Regular',sans-serif] text-[24px] md:text-[28px] text-slate-800 mb-3">
                  SUBE
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-slate-800">
                  Arrastra imágenes, videos o textos (testimonios, capturas)
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#041F59] opacity-30 max-w-xs mx-auto"></div>

            {/* Step 2 - GENERA */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-[#041f59] rounded-full flex items-center justify-center">
                <img src="./src/assets/num2.png" alt="Generate" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-['Inter:Regular',sans-serif] text-[24px] md:text-[28px] text-slate-800 mb-3">
                  GENERA
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-slate-800">
                  La IA analiza el contenido y crea una historia visual
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#041F59] opacity-30 max-w-xs mx-auto"></div>

            {/* Step 3 - EXPORTA */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-[#041f59] rounded-full flex items-center justify-center">
                <img src="./src/assets/num3.png" alt="Export" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-['Inter:Regular',sans-serif] text-[24px] md:text-[28px] text-slate-800 mb-3">
                  EXPORTA
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-slate-800">
                  Descarga como imagen, PDF o comparte en redes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="ejemplos" className="w-full py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-['Julius_Sans_One:Regular',sans-serif] text-[32px] md:text-[40px] text-slate-800 text-center md:text-center mb-12 md:mb-16">
            EJEMPLOS DE USO
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card
              emoji="🌱"
              title="Impacto Social"
              description="Fundaciones: convierte testimonios en campañas emocionales"
            />
            <Card
              emoji="🛍"
              title="Marca Personal"
              description="Creadores: automatiza stories diarios a partir de logros"
            />
            <Card
              emoji="📚"
              title="Educación"
              description="Instituciones: genera casos de estudio"
            />
          </div>
        </div>
      </section>

      {/* Story/Testimonial Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 ">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 space-y-6 md:space-y-8 lg:space-y-12">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            {/* Main image */}
            <div className="w-full">
              <img src="./src/assets/mujer.png" alt="Mujer sonriente caminando al aire libre - Historia de transformación" className="w-full h-auto" />
            </div>

            {/* Overlay text - positioned absolutely on the image */}
            <div className="absolute inset-0 flex items-center justify-center p-4">              
            </div> 
          </div>

            <div className="flex justify-center ">
              <Button
                variant="primary"
                onClick={() => handleButtonClick('probar-gratis')}
                className="w-full sm:w-auto"
              >
                PROBAR AHORA GRATIS →
              </Button>
            </div>

        </div>
           
      </section>

      {/* Call to Action Section */}
      <section id="llamada-accion" className="w-full bg-[rgba(217,217,217,0.25)] py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-['Julius_Sans_One:Regular',sans-serif] text-[32px] md:text-[40px] text-slate-800 text-center mb-12 md:mb-16">
            LLAMADA A ACCION
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-['Inter:Regular',sans-serif] text-[28px] md:text-[36px] text-slate-800 mb-4">
                  Crea tu historia en 3 pasos
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-slate-800">
                  Sube tus materiales y deja que la IA haga el resto. Sin experiencia en diseño o redacción.
                </p>
              </div>

              
            </div>

            {/* Right Content */}
            <Button
                variant="primary"
                onClick={() => handleButtonClick('generar-historia')}
                className="w-full sm:w-auto"
              >
                GENERAR MI HISTORIA
              </Button>
         
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#041f59] w-full py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="w-[180px] md:w-[280px] lg:w-[395px] h-auto">
                <img src="./src/assets/logo.png" alt="AutoStory Builder" className="w-full h-auto" />
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-[#d9d9d9]">
                La IA que convierte momentos en historia
              </p>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h3 className="font-['Inter:Regular',sans-serif] text-[24px] md:text-[32px] text-[#d9d9d9] mb-4">
                Recursos
              </h3>
              <nav className="flex flex-col space-y-3">
                <NavLink
                  href="#inicio"
                  className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-[#d9d9d9]"
                >
                  Inicio
                </NavLink>
                <NavLink
                  href="#como-funciona"
                  className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-[#d9d9d9]"
                >
                  Como funciona
                </NavLink>
                <NavLink
                  href="#ejemplos"
                  className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-[#d9d9d9]"
                >
                  Ejemplos
                </NavLink>
                <NavLink
                  href="#llamada-accion"
                  className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] text-[#d9d9d9]"
                >
                  Llamada a acción
                </NavLink>
              </nav>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-['Inter:Regular',sans-serif] text-[24px] md:text-[32px] text-[#d9d9d9] mb-4">
                Sigueme en mis redes sociales
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                 {/* WhatsApp */}               
                <a href="https://wa.me/+59167023053/?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services." className="social-icon" aria-label="Contáctanos en WhatsApp" target="_blank" rel="noopener noreferrer">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.451 3.488"/>
                    </svg>
                </a>
                {/* Email */}                        
                <a href="mailto:fabinnerself@gmail.com?subject=Consulta%20sobre%20tus%20servicios" className="social-icon" aria-label="Envíanos un email" target="_blank" rel="noopener noreferrer">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </a>
                  {/* LinkedIn */}                        
                <a href="https://www.linkedin.com/in/favian-medina-gemio/" className="social-icon" aria-label="Síguenos en LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>

                {/* Facebook */}
                 <a href="https://www.facebook.com/fabinnerself" className="social-icon" aria-label="Síguenos en Facebook" target="_blank" rel="noopener noreferrer">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                  </a>
                  {/* Twitter */}
                  <a href="https://x.com/favinnerself" className="social-icon" aria-label="Síguenos en X (Twitter)" target="_blank" rel="noopener noreferrer">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                      </svg>
                  </a>

              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#CAC4D0] opacity-50 mb-6"></div>

          {/* Copyright */}
          <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[24px] text-[#d9d9d9] text-center">
            © 2025 AutoStory Builder. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
