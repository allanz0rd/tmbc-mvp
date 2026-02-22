/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import pedroaImg from './assets/pedroa.jpg';
import allanzordImg from './assets/allanzord.jpg';
import denispereiraImg from './assets/denispereira.jpg';
import lucasregoImg from './assets/lucasrego.jpg';
import dairojuniorImg from './assets/dairojunior.jpg';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Users, 
  Zap, 
  Globe, 
  MessageSquare, 
  ShieldCheck, 
  TrendingUp,
  Plus,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? "bg-bg/80 backdrop-blur-md py-4 border-border" : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-black text-xs">TMBC</span>
            </div>
            <span className="font-heading font-bold tracking-tighter text-xl text-primary">THE MEDIA BUYER CLUB</span>
          </div>
          
          <button className="bg-destructive text-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95">
            INGRESSO ENCERRADO
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-6xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-12">
                Acesso Restrito
              </span>
              
              <div className="mb-12 flex justify-center">
                <div className="relative group">
                  {/* Actual Image (Hidden if fails/missing) */}
                  <img 
                    src="/logo.png" 
                    alt="The Media Buyer Club" 
                    className="max-w-full h-auto md:max-h-[300px] hidden"
                    onError={(e) => e.currentTarget.classList.add('hidden')}
                    onLoad={(e) => e.currentTarget.classList.remove('hidden')}
                  />
                  
                  {/* Stylized Text Fallback */}
                  <div className="flex flex-col items-center">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-h1 font-black tracking-tighter leading-none flex flex-col items-center"
                    >
                      <span className="text-primary">THE MEDIA</span>
                      <span className="text-foreground/10 -mt-4 md:-mt-8">BUYER CLUB</span>
                    </motion.div>
                    <div className="h-1 w-24 bg-primary mt-4 rounded-full" />
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                Estratégias de Direct Response e Compra de Mídia de Alta Performance no Mercado Americano, Global e BR.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="group relative bg-destructive text-foreground px-10 py-4 rounded-full text-lg font-black flex items-center gap-2 overflow-hidden">
                  <span className="relative z-10">INGRESSO ENCERRADO</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <div className="text-left">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Novas vagas em breve</p>
                  <p className="text-xl font-black text-primary">R$ 1.997</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </section>

        {/* Social Proof Bar */}
        <section className="py-12 border-y border-border bg-card/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              <span className="text-2xl font-black tracking-tighter text-muted-foreground">META ADS</span>
              <span className="text-2xl font-black tracking-tighter text-muted-foreground">GOOGLE ADS</span>
              <span className="text-2xl font-black tracking-tighter text-muted-foreground">TIKTOK ADS</span>
              <span className="text-2xl font-black tracking-tighter text-muted-foreground">YOUTUBE ADS</span>
            </div>
          </div>
        </section>

        {/* O Convite - Recado do Allan */}
        <section id="convite" className="py-32 bg-bg">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <motion.div {...fadeIn}>
                <h2 className="text-h2 font-black uppercase mb-8">
                  UM RECADO <br />
                  <span className="text-primary/20">DIRETO DO ALLAN</span>
                </h2>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-bold uppercase tracking-widest text-sm text-primary">Escrito 100% à mão. Sem IA.</p>
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeIn}
                className="space-y-8 text-lg text-muted-foreground leading-relaxed"
              >
                <p>
                  The Media Buyer Club era ser um simples "último produto" de uma esteira educacional. Tomei muito cuidado nas palavras e no posicionamento para não parecer apenas mais um mecanismo falho.
                </p>
                <p>
                  Eu esperava no máximo 30 pessoas, mas no primeiro dia já tinha mais de 50. Aqui estão verdadeiras lendas. Mentores meus, que eu via distantes em podcasts do VTurb. São mais de bilhões em mídia paga reunidos.
                </p>
                <p>
                  Um projeto que era para ser o produto final da minha esteira, agora é um produto do próprio Direct Response. Não consigo mais olhar para o TMBC como meu, mas sim como nosso.
                </p>
                <div className="pt-8 border-t border-border">
                  <p className="font-black text-primary text-xl">Allan Luiz</p>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">Founder & Media Buyer</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aviso Importante - Bento Grid Style */}
        <section className="py-32 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 text-destructive">PARE AGORA SE VOCÊ <br /><span className="text-destructive/20">FOR INICIANTE</span></h2>
              <p className="text-xl text-muted-foreground">O TMBC não é uma escola. Não é uma formação.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: "Sem Babá", desc: "Você não precisa de uma 'babá' para o seu tráfego.", icon: ShieldCheck },
                { title: "Sem Promessas", desc: "Você não espera promessas vazias de '6, 7, 8d'.", icon: TrendingUp },
                { title: "Sem Básico", desc: "Você não quer aprender a 'subir campanha' no Gerenciador.", icon: Zap },
                { title: "Sem Garantias", desc: "Você não busca garantia de emprego em grandes empresas.", icon: Users },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-card border border-border rounded-2xl hover:border-destructive/30 transition-colors group"
                >
                  <item.icon className="w-10 h-10 mb-6 text-destructive/20 group-hover:text-destructive transition-colors" />
                  <h3 className="text-xl font-black uppercase mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* O que é o TMBC - Refined Showcase */}
        <section id="objetivo" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-card border border-border rounded-[40px] overflow-hidden">
              <div className="p-12 md:p-20">
                <motion.div {...fadeIn}>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-6 block">/Reliable /Partner</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none">
                    O MASTERMIND <br /><span className="text-primary/20">DEFINITIVO</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                    Conhecimento, Mastermind, Networking. Construído pela inteligência coletiva de quem está no campo de batalha. Transformando o Brasil no melhor país de Media Buying do mundo.
                  </p>
                </motion.div>
              </div>
              
              <div className="relative h-full min-h-[500px] bg-secondary/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-12 w-full">
                    <div className="space-y-4">
                      <div className="aspect-square bg-primary text-primary-foreground rounded-3xl flex flex-col items-center justify-center p-8">
                        <p className="text-5xl font-black">200+</p>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-40">Membros</p>
                      </div>
                      <div className="aspect-[4/3] bg-secondary rounded-3xl border border-border" />
                    </div>
                    <div className="space-y-4 pt-12">
                      <div className="aspect-[4/3] bg-secondary rounded-3xl border border-border" />
                      <div className="aspect-square bg-secondary rounded-3xl border border-border flex flex-col items-center justify-center p-8">
                        <p className="text-5xl font-black text-primary">+3bi</p>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Em mídia paga</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap 2026 - Vertical Steps */}
        <section id="roadmap" className="py-32 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-24">
              <h2 className="text-h2 font-black uppercase">ROADMAP <span className="text-primary/20">2026</span></h2>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
              
              {[
                { title: "Grupo Fechado WhatsApp", desc: "Para troca de ideia diária e insights em tempo real.", icon: MessageSquare },
                { title: "Networking no Discord", desc: "Ambiente sem ruído, apenas alto nível, onde as calls acontecem.", icon: Users },
                { title: "Calls de Elite", desc: "Encontros com convidados que dominam o mercado global.", icon: Zap },
                { title: "Estudos de Caso Reais", desc: "Alunos que aplicaram o método em Info, Nutra, Leads e Drop.", icon: TrendingUp },
                { title: "Parceiros de Qualidade", desc: "Acesso a copywriters, editores e gestores validados.", icon: ShieldCheck },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-20 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-bg" />
                  <div className="flex-1 md:text-right">
                    {i % 2 !== 0 && (
                      <div className="p-8 bg-card border border-border rounded-2xl">
                        <step.icon className="w-8 h-8 mb-4 text-primary/20" />
                        <h3 className="text-xl font-black uppercase mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-12 hidden md:block" />
                  <div className="flex-1">
                    {i % 2 === 0 && (
                      <div className="p-8 bg-card border border-border rounded-2xl">
                        <step.icon className="w-8 h-8 mb-4 text-primary/20" />
                        <h3 className="text-xl font-black uppercase mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Legends / Community Section */}
        <section className="py-32 bg-bg relative">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="mb-20">
              <h2 className="text-h2 font-black uppercase">THE <span className="text-primary/20">LEGENDS</span></h2>
              <p className="text-xl text-muted-foreground mt-4">Mais de bilhões em mídia paga reunidos em um só lugar.</p>
            </motion.div>

            {/* Stories Section */}
            <div className="flex justify-center gap-8 mb-20 overflow-x-auto pb-4 no-scrollbar">
              {[
                { name: "Pedro Andrade", img: pedroaImg },
                { name: "Allanzord", img: allanzordImg },
                { name: "Denis Pereira", img: denispereiraImg },
                { name: "Lucas Rego", img: lucasregoImg },
                { name: "Dairo Junior", img: dairojuniorImg },
              ].map((player, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3 flex-shrink-0"
                >
                  <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-lg shadow-primary/10">
                    <div className="w-full h-full rounded-full border-2 border-bg overflow-hidden bg-card">
                      <img 
                        src={player.img} 
                        alt={player.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-black uppercase tracking-tighter text-foreground">{player.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Direct Response", role: "Estratégia Global", desc: "Foco total em ROI e escala agressiva no mercado americano, global e brasileiro." },
                { name: "Media Buying", role: "Alta Performance", desc: "Domínio completo das principais fontes de tráfego do mundo." },
                { name: "Mastermind", role: "Inteligência Coletiva", desc: "Networking real com quem realmente está no campo de batalha." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-card border border-border rounded-[32px] relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-primary">
                    <Plus className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2">{item.name}</h3>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">{item.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Masonry Style */}
        <section className="py-32 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black uppercase">PROVA <span className="text-primary/20">SOCIAL</span></h2>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {[
                { text: "O TMBC mudou minha percepção sobre o que é tráfego de verdade. O nível das discussões no Discord é surreal.", author: "Gestor de Tráfego @ Info" },
                { text: "Finalmente um lugar sem promessas de 6 em 7, apenas estratégia pura e dura.", author: "Media Buyer @ Nutra" },
                { text: "As calls com convidados de elite valem o investimento de um ano inteiro.", author: "Founder @ Drop Global" },
                { text: "O networking aqui é o que realmente faz a diferença. Estar perto de quem fatura milhões muda o jogo.", author: "Estrategista @ Direct Response" },
                { text: "Sem babá, sem enrolação. Conteúdo direto ao ponto para quem já sabe o que está fazendo.", author: "Performance Lead" },
                { text: "O roadmap para 2026 está incrível. Mal posso esperar pelas próximas atualizações.", author: "Afiliado Elite" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  className="break-inside-avoid p-8 bg-card border border-border rounded-2xl"
                >
                  <p className="text-lg italic text-foreground mb-6">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10" />
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.author}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Conversion Block */}
        <section className="py-40 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              {...fadeIn}
              className="max-w-4xl mx-auto p-12 md:p-24 bg-primary text-primary-foreground rounded-[40px] relative z-10"
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none">
                PRONTO PARA O <br />PRÓXIMO NÍVEL?
              </h2>
              <p className="text-xl font-bold mb-12 opacity-60">
                O Mastermind para os melhores Media Buyers do Brasil.
              </p>
              <button className="bg-bg text-foreground px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-transform active:scale-95 flex items-center gap-3 mx-auto">
                INGRESSO ENCERRADO <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 blur-[120px] -z-10" />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 bg-bg">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeIn} className="mb-20">
              <h2 className="text-h2 font-black uppercase">FAQ</h2>
              <p className="text-xl text-muted-foreground">Dúvidas frequentes sobre o clube.</p>
            </motion.div>

            <div className="space-y-4">
              {[
                { q: "O TMBC é para iniciantes?", a: "Não. O The Media Buyer Club não é uma escola ou formação básica. É um ambiente para quem já está no campo de batalha." },
                { q: "Qual o valor do investimento?", a: "O ingresso para o clube é de R$ 1.997. No momento, as vagas estão encerradas." },
                { q: "O que vou encontrar lá dentro?", a: "Networking de alto nível, calls com convidados de elite, estudos de caso reais e grupos fechados no WhatsApp e Discord." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-border pb-8 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black uppercase group-hover:text-primary transition-colors">{item.q}</h3>
                    <Plus className="w-6 h-6 text-muted-foreground group-hover:rotate-45 transition-transform" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
