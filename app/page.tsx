"use client";

import React, { useEffect, useState } from "react";

const C = {
  bg: "#09090b",
  sur: "#111114",
  sur2: "#17171c",
  bd: "#26262d",
  bd2: "#353542",
  tx: "#efeff2",
  tx2: "#a0a2ad",
  tx3: "#656877",
  vi: "#7c3aed",
  viL: "#b79aff",
  viD: "#5b21b6",
  ro: "#b3315a",
  roL: "#ef7aa5",
  wine: "#d14d77",
  mint: "#8de4cb",
  amber: "#ffc37c",
} as const;

const MONO: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const W = 1120;

export default function Home() {
  return (
    <>
      <style>{`
        html, body { background-color: ${C.bg} !important; }
        .container { max-width: ${W}px; margin: 0 auto; padding: 0 32px; }
        .section-pad { padding: 92px 0; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); }
        .soft-card { border: 1px solid ${C.bd}; border-radius: 14px; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); }
        .hover-line { transition: border-color .2s, transform .2s; }
        .hover-line:hover { border-color: ${C.bd2}; transform: translateY(-2px); }
        .nh:hover { color: ${C.tx} !important; }
        .bv:hover { background: ${C.viD} !important; box-shadow: 0 0 0 1px rgba(255,255,255,0.14) inset, 0 0 22px rgba(124,58,237,0.5) !important; }
        .bg:hover { background: ${C.sur2} !important; border-color: ${C.bd2} !important; color: ${C.tx} !important; }

        .stars, .stars2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .stars {
          background-image:
            radial-gradient(1.5px 1.5px at 8% 12%, rgba(255,255,255,.85), transparent 65%),
            radial-gradient(1.5px 1.5px at 22% 38%, rgba(255,255,255,.65), transparent 65%),
            radial-gradient(2px 2px at 41% 78%, rgba(255,255,255,.75), transparent 65%),
            radial-gradient(1.5px 1.5px at 56% 23%, rgba(255,255,255,.7), transparent 65%),
            radial-gradient(2px 2px at 70% 58%, rgba(255,255,255,.6), transparent 65%),
            radial-gradient(2.5px 2.5px at 85% 88%, rgba(255,255,255,.78), transparent 65%),
            radial-gradient(2.5px 2.5px at 60% 75%, rgba(232,93,138,.6), transparent 65%),
            radial-gradient(2.5px 2.5px at 30% 18%, rgba(167,139,250,.6), transparent 65%);
          background-size: 320px 320px,280px 280px,410px 410px,360px 360px,300px 300px,440px 440px,520px 520px,460px 460px;
        }
        .stars2 {
          opacity: .48;
          background-image:
            radial-gradient(1.5px 1.5px at 17% 27%, rgba(255,255,255,.6), transparent 65%),
            radial-gradient(1.5px 1.5px at 63% 83%, rgba(255,255,255,.5), transparent 65%),
            radial-gradient(2px 2px at 88% 33%, rgba(255,255,255,.6), transparent 65%),
            radial-gradient(1.5px 1.5px at 38% 47%, rgba(232,93,138,.45), transparent 65%);
          background-size: 200px 200px,240px 240px,220px 220px,180px 180px;
        }

        @keyframes nebDrift { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(40px,-30px) scale(1.12) } }
        @keyframes nebDrift2 { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(-50px,40px) scale(1.15) } }
        @keyframes corePulse { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity: .55 } 50% { transform: translate(-50%,-50%) scale(1.22); opacity: .85 } }
        .neb1 { animation: nebDrift 20s ease-in-out infinite; }
        .neb2 { animation: nebDrift2 26s ease-in-out infinite; }
        .core-pulse { animation: corePulse 5s ease-in-out infinite; }

        @media (max-width: 980px) {
          .container { padding: 0 20px; }
          .section-pad { padding: 70px 0; }
          .grid-2 { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr; }
          .hero-actions { flex-direction: column; align-items: center; }
          .nav-links { display: none !important; }
        }
      `}</style>

      <GlobalBg />
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        <Nav />
        <main>
          <HeroSection />
          <Divider />
          <ManifestoSection />
          <Divider />
          <TracksSection />
          <Divider />
          <RoadmapSection />
          <Divider />
          <ArtifactsSection />
          <Divider />
          <CTASection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}

function GlobalBg() {
  return (
    <div aria-hidden style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div className="core-pulse" style={{ position: "absolute", top: "6%", left: "50%", width: 1100, height: 900, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,237,0.5) 0%, rgba(109,40,217,0.22) 38%, transparent 66%)", filter: "blur(70px)" }} />
      <div className="neb1" style={{ position: "absolute", top: "4%", left: "-8%", width: 680, height: 680, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.26) 0%, transparent 70%)", filter: "blur(110px)" }} />
      <div className="neb2" style={{ position: "absolute", top: "46%", right: "-12%", width: 860, height: 860, borderRadius: "50%", background: `radial-gradient(circle, ${C.ro}40 0%, transparent 70%)`, filter: "blur(130px)" }} />
      <div className="stars" />
      <div className="stars2" />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 90% at 50% 20%, transparent 60%, rgba(9,9,11,0.35) 100%)" }} />
    </div>
  );
}

function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: solid ? "rgba(9,9,11,0.88)" : "transparent", backdropFilter: solid ? "blur(18px)" : "none", WebkitBackdropFilter: solid ? "blur(18px)" : "none", borderBottom: solid ? `1px solid ${C.bd}` : "1px solid transparent", transition: "all .25s" }}>
      <div className="container" style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: C.tx, letterSpacing: "-0.02em" }}>physical-ai</span>
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {[ ["#frentes", "Frentes"], ["#roteiro", "Roteiro"], ["#artefatos", "Artefatos"] ].map(([href, label]) => (
            <a key={href} href={href} className="nh" style={{ fontSize: 13.5, color: C.tx3, textDecoration: "none" }}>{label}</a>
          ))}
          <div style={{ width: 1, height: 14, background: C.bd2 }} />
          <a href="https://github.com/VictorAlexandr/lp-physical-ai" className="nh" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: C.tx2, textDecoration: "none" }}>
            <GhIcon /> GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <>
      <section style={{ position: "relative", minHeight: 660, display: "flex", alignItems: "center", justifyContent: "center", padding: "148px 32px 60px" }}>
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: W, width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32, padding: "5px 14px", borderRadius: 100, border: "1px solid rgba(167,139,250,0.35)", background: "rgba(124,58,237,0.1)", backdropFilter: "blur(8px)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.viL, display: "inline-block", boxShadow: `0 0 10px ${C.viL}` }} />
            <span style={{ ...MONO, fontSize: 11, color: C.viL, letterSpacing: "0.06em" }}>PHYSICAL AI · BUILD IN PUBLIC</span>
          </div>

          <h1 style={{ fontSize: "clamp(3.2rem,6vw,5.4rem)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.045em", color: "#ffffff", textShadow: "0 0 60px rgba(167,139,250,0.25), 0 2px 4px rgba(0,0,0,0.5)", marginBottom: 24, maxWidth: 820, margin: "0 auto 24px" }}>
            Autonomous Robotics
            <br />and <span style={{ color: C.wine, textShadow: `0 0 40px ${C.wine}88` }}>Edge MLOps.</span>
          </h1>

          <p style={{ fontSize: 18, color: "rgba(236,236,236,0.65)", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 48px", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
            Physical AI e onde a inteligencia artificial sai da tela e age no mundo fisico. Duas frentes, uma arquitetura unica: cloud para operar e edge para aprender.
          </p>

          <div className="hero-actions" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a href="#frentes" className="bv" style={{ display: "inline-flex", alignItems: "center", padding: "13px 30px", borderRadius: 7, background: C.vi, color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none", boxShadow: "0 0 0 1px rgba(255,255,255,0.16) inset, 0 0 28px rgba(124,58,237,0.6), 0 0 60px rgba(124,58,237,0.2)", letterSpacing: "-0.01em" }}>
              Ver Frentes
            </a>
            <a href="#artefatos" className="bg" style={{ display: "inline-flex", alignItems: "center", padding: "13px 30px", borderRadius: 7, background: "rgba(9,9,11,0.6)", border: `1px solid ${C.bd2}`, color: C.tx2, fontSize: 15, textDecoration: "none", backdropFilter: "blur(8px)", letterSpacing: "-0.01em" }}>
              Ver Entregaveis
            </a>
          </div>
        </div>
      </section>

      <div style={{ position: "relative", marginTop: -16, paddingBottom: 20 }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          {[
            { l: "Cloud Robotics", dot: C.viL },
            { l: "Edge MLOps", dot: C.roL },
            { l: "Operacao em tempo real", dot: C.mint },
            { l: "Arquitetura reproducivel", dot: C.amber },
          ].map((m) => (
            <div key={m.l} className="chip">
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: m.dot, boxShadow: `0 0 6px ${m.dot}`, display: "inline-block" }} />
              <span style={{ fontSize: 13, color: C.tx2 }}>{m.l}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Divider() {
  return (
    <div className="container" style={{ marginTop: 18 }}>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)" }} />
    </div>
  );
}

function ManifestoSection() {
  return (
    <section className="section-pad">
      <div className="container grid-2" style={{ alignItems: "start" }}>
        <div>
          <Label>Direcao</Label>
          <h2 style={{ fontSize: "clamp(2rem,3.4vw,3rem)", fontWeight: 750, letterSpacing: "-0.04em", lineHeight: 1.05, marginTop: 12 }}>
            Menos promessa,
            <br />mais operacao.
          </h2>
          <p style={{ marginTop: 24, color: C.tx2, lineHeight: 1.8, maxWidth: 500 }}>
            A pagina agora nao vende hype. Ela mostra o que esta sendo construido, em que ordem, e qual ganho pratico cada bloco entrega no mundo real.
          </p>
        </div>

        <div className="soft-card" style={{ padding: 24 }}>
          {["Cada secao responde uma pergunta objetiva.", "Cada entrega gera um artefato verificavel.", "Toda decisao tecnica tem trade-off explicito."].map((line) => (
            <div key={line} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 0", borderBottom: `1px solid ${C.bd}` }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", marginTop: 9, background: C.viL, boxShadow: `0 0 8px ${C.viL}`, flexShrink: 0 }} />
              <p style={{ color: C.tx2, lineHeight: 1.7, fontSize: 14.5 }}>{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TracksSection() {
  return (
    <section id="frentes" className="section-pad">
      <div className="container">
        <Label>Frentes</Label>
        <h2 style={{ fontSize: "clamp(2rem,3.2vw,2.8rem)", marginTop: 12, letterSpacing: "-0.035em" }}>Duas trilhas complementares.</h2>

        <div className="grid-2" style={{ marginTop: 26 }}>
          <TrackCard tone={C.vi} eyebrow="Cloud Robotics" title="Operar frota com previsibilidade" summary="Padroniza status, observabilidade e controle remoto para multiplos robos simultaneos." points={["Telemetria de estado por robo", "Painel unico para acompanhamento", "Comando central sem acoplamento"]} />
          <TrackCard tone={C.ro} eyebrow="Edge MLOps" title="Evoluir modelos sem parar o campo" summary="Leva versoes de IA para borda com rollout seguro, validacao e rollback rapido." points={["Pipeline OTA versionado", "Deploy por lote e por risco", "Rollback automatizado por metrica"]} />
        </div>
      </div>
    </section>
  );
}

function TrackCard({ tone, eyebrow, title, summary, points }: { tone: string; eyebrow: string; title: string; summary: string; points: string[] }) {
  return (
    <article className="soft-card hover-line" style={{ padding: 24 }}>
      <p style={{ ...MONO, fontSize: 11, color: tone, letterSpacing: "0.08em", textTransform: "uppercase" }}>{eyebrow}</p>
      <h3 style={{ marginTop: 10, fontSize: 27, letterSpacing: "-0.03em", lineHeight: 1.15 }}>{title}</h3>
      <p style={{ marginTop: 14, color: C.tx2, lineHeight: 1.75 }}>{summary}</p>
      <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
        {points.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: tone, boxShadow: `0 0 10px ${tone}` }} />
            <span style={{ color: C.tx2, fontSize: 14 }}>{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function RoadmapSection() {
  const stages = [
    { k: "Fase 1", title: "Base de simulacao", note: "Ambiente reproduzivel para validar autonomia sem custo de campo." },
    { k: "Fase 2", title: "Operacao cloud", note: "Visibilidade de frota, alertas e ciclo de observabilidade completo." },
    { k: "Fase 3", title: "Pipeline edge", note: "Treino, empacotamento e distribuicao de modelos com governanca." },
    { k: "Fase 4", title: "Producao assistida", note: "Rollout gradual com metricas de seguranca e qualidade." },
  ];

  return (
    <section id="roteiro" className="section-pad">
      <div className="container">
        <div className="grid-2" style={{ alignItems: "end" }}>
          <div>
            <Label>Roteiro</Label>
            <h2 style={{ marginTop: 12, fontSize: "clamp(2rem,3vw,2.7rem)", letterSpacing: "-0.03em" }}>Sequencia de construcao.</h2>
          </div>
          <p style={{ color: C.tx3, lineHeight: 1.7, maxWidth: 420, justifySelf: "end" }}>Sem secao decorativa. Cada fase ja nasce com criterio de pronto e impacto esperado.</p>
        </div>

        <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
          {stages.map((s, idx) => (
            <article key={s.k} className="soft-card hover-line" style={{ padding: 20, display: "grid", gridTemplateColumns: "90px 1fr", gap: 16 }}>
              <span style={{ ...MONO, color: idx % 2 === 0 ? C.viL : C.roL, fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase" }}>{s.k}</span>
              <div>
                <h3 style={{ fontSize: 20, letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ marginTop: 8, color: C.tx2, lineHeight: 1.75 }}>{s.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtifactsSection() {
  const artifacts = [
    { title: "Arquitetura Geral", desc: "Mapa tecnico das duas frentes e seus contratos.", href: "#" },
    { title: "Setup de Ambiente", desc: "Passo a passo para reproduzir stack localmente.", href: "#" },
    { title: "Roadmap Tecnico", desc: "Prioridades, riscos e ordem de implementacao.", href: "#" },
  ];

  return (
    <section id="artefatos" className="section-pad">
      <div className="container">
        <Label>Artefatos</Label>
        <h2 style={{ marginTop: 12, fontSize: "clamp(2rem,3vw,2.6rem)", letterSpacing: "-0.03em" }}>Documentacao util, sem enchimento.</h2>

        <div className="grid-3" style={{ marginTop: 24 }}>
          {artifacts.map((a, i) => (
            <a key={a.title} href={a.href} className="soft-card hover-line" style={{ textDecoration: "none", color: C.tx, padding: 20, display: "block", borderColor: i === 1 ? "rgba(239,122,165,0.35)" : C.bd }}>
              <p style={{ ...MONO, color: i === 1 ? C.roL : C.viL, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {i === 1 ? "Reproducao" : "Referencia"}
              </p>
              <h3 style={{ marginTop: 10, fontSize: 21, letterSpacing: "-0.02em" }}>{a.title}</h3>
              <p style={{ marginTop: 10, color: C.tx2, lineHeight: 1.7 }}>{a.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-pad" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="soft-card" style={{ padding: 30, display: "grid", gap: 18, textAlign: "center" }}>
          <p style={{ ...MONO, fontSize: 11, color: C.viL, letterSpacing: "0.08em", textTransform: "uppercase" }}>Build in Public</p>
          <h2 style={{ fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.035em" }}>Acompanhe os proximos entregaveis.</h2>
          <p style={{ color: C.tx2, lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>A cada iteracao: contexto, decisao tecnica, resultado observado e o que muda no ciclo seguinte.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <a href="https://github.com/VictorAlexandr/lp-physical-ai" className="bv" style={{ padding: "11px 22px", borderRadius: 7, textDecoration: "none", color: "#fff", background: C.vi }}>Ver no GitHub</a>
            <a href="#frentes" className="bg" style={{ padding: "11px 22px", borderRadius: 7, textDecoration: "none", color: C.tx2, border: `1px solid ${C.bd2}` }}>Revisitar Frentes</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer>
      <div className="container" style={{ paddingTop: 26, paddingBottom: 34, display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
        <span style={{ ...MONO, fontSize: 11, color: C.tx3 }}>physical-ai · architecture lab</span>
        <span style={{ ...MONO, fontSize: 11, color: C.tx3 }}>cloud robotics + edge mlops</span>
      </div>
    </footer>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p style={{ ...MONO, fontSize: 11, color: C.vi, letterSpacing: "0.1em", textTransform: "uppercase" }}>{children}</p>;
}

function GhIcon({ white }: { white?: boolean } = {}) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={white ? "#fff" : "currentColor"}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
