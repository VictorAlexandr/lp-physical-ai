"use client";
import { useEffect, useState } from "react";
import React from "react";

const C = {
  bg:    "#09090b",
  sur:   "#0e0e11",
  sur2:  "#141418",
  bd:    "#222226",
  bd2:   "#32323a",
  tx:    "#ececec",
  tx2:   "#878791",
  tx3:   "#484854",
  vi:    "#7c3aed",   // violet — sistema 01
  viL:   "#a78bfa",   // violet light
  viD:   "#5b21b6",   // violet dark
  ro:    "#b3315a",   // rosa-vinho — sistema 02
  roL:   "#e85d8a",   // rosa claro
  wine:  "#d14d77",   // vinho quase rosa — destaque hero
} as const;

const MONO: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const W = 1120;

/* ────────────────────────────────────────────
   PAGE
──────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <style>{`
        html,body{ background-color:${C.bg}!important; }
        /* ── starfield ── */
        .stars,.stars2{ position:fixed; inset:0; pointer-events:none; z-index:0; }
        .stars{
          background-image:
            radial-gradient(1.5px 1.5px at 8% 12%, rgba(255,255,255,.85), transparent 65%),
            radial-gradient(1.5px 1.5px at 22% 38%, rgba(255,255,255,.65), transparent 65%),
            radial-gradient(2px 2px at 41% 78%, rgba(255,255,255,.75), transparent 65%),
            radial-gradient(1.5px 1.5px at 56% 23%, rgba(255,255,255,.7), transparent 65%),
            radial-gradient(2px 2px at 70% 58%, rgba(255,255,255,.6), transparent 65%),
            radial-gradient(2.5px 2.5px at 85% 88%, rgba(255,255,255,.78), transparent 65%),
            radial-gradient(1.5px 1.5px at 92% 18%, rgba(255,255,255,.7), transparent 65%),
            radial-gradient(1.5px 1.5px at 14% 65%, rgba(255,255,255,.6), transparent 65%),
            radial-gradient(2.5px 2.5px at 60% 75%, rgba(232,93,138,.6), transparent 65%),
            radial-gradient(2.5px 2.5px at 30% 18%, rgba(167,139,250,.6), transparent 65%),
            radial-gradient(3px 3px at 80% 42%, rgba(167,139,250,.62), transparent 65%);
          background-size:320px 320px,280px 280px,410px 410px,360px 360px,300px 300px,440px 440px,260px 260px,380px 380px,520px 520px,460px 460px,480px 480px;
        }
        .stars2{
          opacity:.55;
          background-image:
            radial-gradient(1.5px 1.5px at 17% 27%, rgba(255,255,255,.6), transparent 65%),
            radial-gradient(1.5px 1.5px at 63% 83%, rgba(255,255,255,.5), transparent 65%),
            radial-gradient(2px 2px at 88% 33%, rgba(255,255,255,.6), transparent 65%),
            radial-gradient(1.5px 1.5px at 38% 47%, rgba(232,93,138,.45), transparent 65%),
            radial-gradient(1.5px 1.5px at 9% 49%, rgba(255,255,255,.45), transparent 65%);
          background-size:200px 200px,240px 240px,220px 220px,180px 180px,210px 210px;
        }
        @keyframes nebDrift{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(40px,-30px) scale(1.12)}}
        @keyframes nebDrift2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-50px,40px) scale(1.15)}}
        .neb1{animation:nebDrift 20s ease-in-out infinite}
        .neb2{animation:nebDrift2 26s ease-in-out infinite}
        /* interactions */
        .nh:hover{color:${C.tx}!important}
        .bv:hover{background:${C.viD}!important;box-shadow:0 0 0 1px rgba(255,255,255,0.14) inset,0 0 22px rgba(124,58,237,0.5)!important}
        .bg:hover{background:${C.sur2}!important;border-color:${C.bd2}!important;color:${C.tx}!important}
        .sol:hover .sn{color:${C.tx2}!important}
        .cap:hover{background:${C.sur}!important}
        a,button{transition:all .15s}
        /* ── hero animations ── */
        @keyframes corePulse{
          0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.55}
          50%{transform:translate(-50%,-50%) scale(1.22);opacity:.85}
        }
        @keyframes orbDrift{
          0%,100%{transform:scale(1) translate(0,0);opacity:.35}
          50%{transform:scale(1.15) translate(30px,-20px);opacity:.55}
        }
        @keyframes orbDrift2{
          0%,100%{transform:scale(1) translate(0,0);opacity:.3}
          50%{transform:scale(1.1) translate(-25px,15px);opacity:.5}
        }
        @keyframes fl1{0%,100%{transform:translateY(0) translateX(0) rotate(0deg)}50%{transform:translateY(-22px) translateX(8px) rotate(6deg)}}
        @keyframes fl2{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-18px) rotate(-9deg)}}
        @keyframes fl3{0%,100%{transform:translateY(0) translateX(0)}33%{transform:translateY(-14px) translateX(-12px)}66%{transform:translateY(-28px) translateX(6px)}}
        @keyframes fl4{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-32px) rotate(14deg)}}
        @keyframes fl5{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-16px) scale(1.1)}}
        @keyframes fl6{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-20px) translateX(-8px)}}
        .core-pulse{animation:corePulse 5s ease-in-out infinite}
        .orb1{animation:orbDrift 7s ease-in-out infinite}
        .orb2{animation:orbDrift2 9s ease-in-out infinite}
        .syscard:hover{border-color:rgba(255,255,255,0.12)!important}
      `}</style>

      <GlobalBg />
      <div style={{ position:"relative", zIndex:1, minHeight:"100vh" }}>
        <Nav />
        <main>
          <HeroSection />
          <SystemsSection />
          <FadeLine />
          <CapabilitiesSection />
          <FadeLine mt={20} />
          <StackSection />
        </main>
        <FadeLine mt={20} mb={20} />
        <CTASection />
        <FadeLine />
        <FooterSection />
      </div>
    </>
  );
}

/* ──── FUNDO ÚNICO E CONTÍNUO (toda a página) ──── */
function GlobalBg() {
  return (
    <div aria-hidden style={{ position:"fixed", inset:0, zIndex:0, overflow:"hidden", pointerEvents:"none" }}>
      {/* glow principal do hero — topo, persistente */}
      <div className="core-pulse" style={{ position:"absolute", top:"6%", left:"50%",
        width:1100, height:900, borderRadius:"50%",
        background:"radial-gradient(ellipse, rgba(124,58,237,0.5) 0%, rgba(109,40,217,0.22) 38%, transparent 66%)",
        filter:"blur(70px)" }}/>
      {/* nebulosa violeta — topo esquerda */}
      <div className="neb1" style={{ position:"absolute", top:"4%", left:"-8%",
        width:680, height:680, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", filter:"blur(110px)" }}/>
      {/* nebulosa rosa-vinho — meio/direita */}
      <div className="neb2" style={{ position:"absolute", top:"46%", right:"-12%",
        width:860, height:860, borderRadius:"50%",
        background:`radial-gradient(circle, ${C.ro}40 0%, transparent 70%)`, filter:"blur(130px)" }}/>
      {/* nebulosa rosa-vinho — base esquerda */}
      <div className="neb1" style={{ position:"absolute", bottom:"-12%", left:"6%",
        width:680, height:680, borderRadius:"50%",
        background:`radial-gradient(circle, ${C.ro}26 0%, transparent 70%)`, filter:"blur(120px)" }}/>

      {/* partículas flutuantes (sutis, por toda a tela) */}
      {[
        ["8%","12%", 6, C.viL, "blur(1px)", "fl1", "6s",  "0s"],
        ["16%","82%",9, "#c4b5fd", "blur(2px)", "fl2", "7s", "0.8s"],
        ["28%","6%", 5, "#818cf8", "blur(1px)", "fl3", "8s", "1.2s"],
        ["12%","48%",11,C.vi, "blur(5px)", "fl5", "9s", "2s"],
        ["40%","90%",6, C.roL, "blur(1px)", "fl4", "6.5s","0.4s"],
        ["62%","14%",7, C.roL, "blur(2px)", "fl6", "7.5s","1s"],
        ["72%","76%",5, "#c4b5fd", "blur(1px)", "fl2", "5.5s","0.6s"],
        ["88%","40%",8, C.ro, "blur(4px)", "fl1", "9s", "1.4s"],
      ].map(([top,left,size,color,blur,anim,dur,delay],i)=>(
        <div key={i} style={{ position:"absolute", top:top as string, left:left as string,
          width:size as number, height:size as number, borderRadius:i%4===0?"3px":"50%",
          background:color as string, filter:blur as string,
          boxShadow:`0 0 ${(size as number)*1.6}px ${color}`,
          animation:`${anim} ${dur} ease-in-out ${delay} infinite`, opacity:0.6 }}/>
      ))}

      {/* estrelas */}
      <div className="stars" />
      <div className="stars2" />

      {/* vinheta global suave — escurece bordas extremas sem criar faixa */}
      <div style={{ position:"absolute", inset:0,
        background:"radial-gradient(ellipse 100% 90% at 50% 20%, transparent 60%, rgba(9,9,11,0.35) 100%)" }}/>
    </div>
  );
}

/* ──── NAV ──── */
function Nav() {
  const [s, setS] = useState(false);
  useEffect(() => {
    const h = () => setS(window.scrollY > 12);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      background: s ? "rgba(9,9,11,0.88)" : "transparent",
      backdropFilter: s ? "blur(18px)" : "none",
      WebkitBackdropFilter: s ? "blur(18px)" : "none",
      borderBottom: s ? `1px solid ${C.bd}` : "1px solid transparent",
      transition:"all .25s",
    }}>
      <div style={{ maxWidth:W, margin:"0 auto", padding:"0 32px", height:56, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span style={{ fontSize:14, fontWeight:600, color:C.tx, letterSpacing:"-0.02em" }}>physical-ai</span>
        <nav style={{ display:"flex", alignItems:"center", gap:28 }}>
          {[["#solutions","Systems"],["#capabilities","Capabilities"],["#stack","Stack"]].map(([h,l])=>(
            <a key={h} href={h} className="nh" style={{ fontSize:13.5, color:C.tx3, textDecoration:"none" }}>{l}</a>
          ))}
          <div style={{ width:1, height:14, background:C.bd2 }}/>
          <a href="https://github.com" className="nh" style={{ display:"flex", alignItems:"center", gap:6, fontSize:13.5, color:C.tx2, textDecoration:"none" }}>
            <GhIcon/> GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ──── HERO ──── */
function HeroSection() {
  return (
    <>
      {/* ── HERO (sem fundo próprio — usa o fundo global) ── */}
      <section style={{ position:"relative", minHeight:660,
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:"148px 32px 60px",
      }}>
        {/* ── CONTENT ── */}
        <div style={{ position:"relative", zIndex:10, textAlign:"center", maxWidth:W, width:"100%" }}>

          {/* badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:32,
            padding:"5px 14px", borderRadius:100,
            border:"1px solid rgba(167,139,250,0.35)",
            background:"rgba(124,58,237,0.1)",
            backdropFilter:"blur(8px)",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:C.viL, display:"inline-block",
              boxShadow:`0 0 10px ${C.viL}` }}/>
            <span style={{ ...MONO, fontSize:11, color:C.viL, letterSpacing:"0.06em" }}>
              PHYSICAL AI · BUILD IN PUBLIC
            </span>
          </div>

          {/* title */}
          <h1 style={{ fontSize:"clamp(3.2rem,6vw,5.4rem)", fontWeight:800, lineHeight:1.04,
            letterSpacing:"-0.045em", color:"#ffffff",
            textShadow:"0 0 60px rgba(167,139,250,0.25), 0 2px 4px rgba(0,0,0,0.5)",
            marginBottom:24, maxWidth:820, margin:"0 auto 24px",
          }}>
            Autonomous Robotics<br/>and{" "}
            <span style={{ color:C.wine, textShadow:`0 0 40px ${C.wine}88` }}>
              Edge MLOps.
            </span>
          </h1>

          {/* subtitle */}
          <p style={{ fontSize:18, color:"rgba(236,236,236,0.65)", lineHeight:1.75,
            maxWidth:560, margin:"0 auto 48px",
            textShadow:"0 1px 3px rgba(0,0,0,0.4)",
          }}>
            Physical AI é a fronteira onde a inteligência artificial deixa a tela
            e passa a agir no mundo físico. Estou construindo essa base em duas
            frentes: Cloud e Edge.
          </p>

          {/* ctas */}
          <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
            <a href="#solutions" className="bv" style={{
              display:"inline-flex", alignItems:"center", padding:"13px 30px",
              borderRadius:7, background:C.vi, color:"#fff",
              fontSize:15, fontWeight:600, textDecoration:"none",
              boxShadow:`0 0 0 1px rgba(255,255,255,0.16) inset, 0 0 28px rgba(124,58,237,0.6), 0 0 60px rgba(124,58,237,0.2)`,
              letterSpacing:"-0.01em",
            }}>
              Explorar Sistemas
            </a>
            <a href="#" className="bg" style={{
              display:"inline-flex", alignItems:"center", padding:"13px 30px",
              borderRadius:7, background:"rgba(9,9,11,0.6)", border:`1px solid ${C.bd2}`,
              color:C.tx2, fontSize:15, textDecoration:"none",
              backdropFilter:"blur(8px)", letterSpacing:"-0.01em",
            }}>
              Documentação
            </a>
          </div>
        </div>
      </section>

      {/* ── PILARES (conceituais, honestos) ── */}
      <div style={{ position:"relative", marginTop:-16, paddingBottom:20 }}>
        <div style={{ maxWidth:760, margin:"0 auto", padding:"0 32px",
          display:"flex", justifyContent:"center", gap:14, flexWrap:"wrap" }}>
          {[
            { l:"Cloud Robotics", dot:C.viL },
            { l:"Edge MLOps",     dot:C.roL },
            { l:"Tempo real",     dot:C.viL },
            { l:"Open source",    dot:C.roL },
          ].map((m)=>(
            <div key={m.l} style={{ display:"inline-flex", alignItems:"center", gap:8,
              padding:"8px 16px", borderRadius:100,
              border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.02)" }}>
              <span style={{ width:5, height:5, borderRadius:"50%", background:m.dot,
                boxShadow:`0 0 6px ${m.dot}`, display:"inline-block" }}/>
              <span style={{ fontSize:13, color:C.tx2, letterSpacing:"-0.01em" }}>{m.l}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ──── divisor suave (desvanece nas bordas) ──── */
function FadeLine({ mt = 0, mb = 0 }: { mt?: number; mb?: number }) {
  return (
    <div style={{ maxWidth:W, margin:`${mt}px auto ${mb}px`, padding:"0 32px" }}>
      <div style={{ height:1, background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.09) 20%, rgba(255,255,255,0.09) 80%, transparent)" }} />
    </div>
  );
}

/* ──── SYSTEMS (keynote, sem código) ──── */
function SystemsSection() {
  return (
    <section id="solutions" style={{ maxWidth:W, margin:"0 auto", padding:"110px 32px 20px" }}>
      <div style={{ textAlign:"center", marginBottom:80 }}>
        <Label>As Duas Frentes</Label>
        <H2 style={{ marginTop:12 }}>Cloud e Edge. Um projeto para cada.</H2>
        <p style={{ fontSize:17, color:C.tx2, lineHeight:1.75, maxWidth:540, margin:"18px auto 0" }}>
          A frente Cloud cuida da operação da frota na nuvem. A frente Edge cuida da inteligência rodando na borda. Juntas, são a porta de entrada no Physical AI.
        </p>
      </div>

      <SystemBlock
        n="01"
        front="Frente Cloud"
        accent={C.vi} accentL={C.viL}
        name="Cloud Robotics"
        role="Fleet Management & Telemetria"
        desc="Gestão e visibilidade de frotas de robôs autônomos, operando em tempo real do edge à nuvem."
        caps={[
          "Navegação autônoma local em cada robô",
          "Telemetria e estado da frota ao vivo",
          "Controle centralizado na nuvem",
        ]}
        stat={"Toda a frota,\nem um só lugar."} statLabel="Acompanhe cada robô em tempo real, de onde estiver."
      />

      <FadeLine />

      <SystemBlock
        n="02"
        front="Frente Edge"
        accent={C.ro} accentL={C.roL}
        name="Edge MLOps"
        role="Pipeline Over-The-Air"
        desc="Atualiza a inteligência dos robôs em campo, sem interromper a operação. Deploy silencioso e contínuo."
        caps={[
          "Visão computacional rodando na borda",
          "Atualização de modelos sem parar o sistema",
          "Deploy automático para toda a frota",
        ]}
        stat={"Atualize a IA\nsem parar nada."} statLabel="O sistema continua rodando enquanto o modelo evolui."
        flip
      />
    </section>
  );
}

/* divisor inserido entre os dois sistemas */

function SystemBlock({ n, front, accent, accentL, name, role, desc, caps, stat, statLabel, flip }:{
  n:string; front:string; accent:string; accentL:string;
  name:string; role:string; desc:string; caps:string[];
  stat:string; statLabel:string; flip?:boolean;
}) {
  const content = (
    <div style={{ padding: flip ? "0 0 0 8px" : "0 8px 0 0" }}>
      {/* header */}
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
        <span style={{ ...MONO, fontSize:13, color:accentL }}>{n}</span>
        <span style={{ width:24, height:1, background:C.bd2 }}/>
        <span style={{ ...MONO, fontSize:12, color:accentL, letterSpacing:"0.08em", textTransform:"uppercase" }}>{front}</span>
      </div>
      <h3 style={{ fontSize:"clamp(2rem,3.4vw,3rem)", fontWeight:800, letterSpacing:"-0.04em", color:C.tx, lineHeight:1.0, marginBottom:10 }}>
        {name}
      </h3>
      <p style={{ fontSize:19, color:accentL, letterSpacing:"-0.01em", marginBottom:24 }}>{role}</p>
      <p style={{ fontSize:16, color:C.tx2, lineHeight:1.8, marginBottom:30, maxWidth:440 }}>{desc}</p>
      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:14 }}>
        {caps.map(c=>(
          <li key={c} style={{ display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:accent, boxShadow:`0 0 8px ${accent}`, flexShrink:0 }}/>
            <span style={{ fontSize:15, color:C.tx2 }}>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // visual: card de resultado, limpo, sem número gigante
  const visual = (
    <div className="syscard" style={{
      position:"relative", overflow:"hidden",
      borderRadius:16, border:`1px solid ${C.bd}`,
      background:`linear-gradient(${flip?"225deg":"135deg"}, ${accent}12 0%, ${C.sur} 55%)`,
      minHeight:340, display:"flex", flexDirection:"column", justifyContent:"space-between",
      padding:"40px",
      transition:"border-color .2s",
    }}>
      {/* top glow line */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1,
        background:`linear-gradient(90deg, transparent, ${accentL}55, transparent)` }}/>
      {/* glow de canto sutil (substitui o número gigante) */}
      <div aria-hidden style={{ position:"absolute", bottom:-120, right:-120,
        width:360, height:360, borderRadius:"50%",
        background:`radial-gradient(circle, ${accent}33 0%, transparent 70%)`, filter:"blur(40px)" }}/>

      {/* topo: índice do sistema */}
      <div style={{ position:"relative", display:"flex", alignItems:"center", gap:10 }}>
        <span style={{ ...MONO, fontSize:13, color:accentL }}>{front}</span>
        <span style={{ width:18, height:1, background:`${accentL}55` }}/>
        <span style={{ width:6, height:6, borderRadius:"50%", background:accentL, boxShadow:`0 0 8px ${accentL}` }}/>
      </div>

      {/* resultado em destaque */}
      <div style={{ position:"relative" }}>
        <p style={{ fontSize:"clamp(1.7rem,2.6vw,2.3rem)", fontWeight:700, letterSpacing:"-0.035em",
          color:C.tx, lineHeight:1.12, whiteSpace:"pre-line", marginBottom:14 }}>{stat}</p>
        <p style={{ fontSize:15, color:accentL, lineHeight:1.5 }}>{statLabel}</p>
      </div>
    </div>
  );

  return (
    <div style={{ padding:"64px 0",
      display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center",
    }}>
      {flip ? <>{visual}{content}</> : <>{content}{visual}</>}
    </div>
  );
}

/* ──── CAPABILITIES ──── */
function CapabilitiesSection() {
  const rows = [
    { n:"01", title:"Inteligência na borda",   body:"Decisões autônomas rodando direto no robô, sem depender de conexão com a nuvem.",  dot:C.viL },
    { n:"02", title:"Deploy sem downtime",     body:"A inteligência se atualiza enquanto o sistema continua operando normalmente.",      dot:C.roL },
    { n:"03", title:"Frota sempre visível",    body:"O estado de cada robô espelhado em tempo real. Acompanhe a operação de qualquer lugar.", dot:C.viL },
    { n:"04", title:"Navegação autônoma",      body:"Mapeamento e localização próprios. Os robôs se movem sem GPS ou infraestrutura externa.", dot:C.roL },
    { n:"05", title:"Telemetria em tempo real",body:"Dados de toda a frota fluindo continuamente para dashboards ao vivo.",            dot:C.viL },
    { n:"06", title:"Comunicação segura",      body:"Toda troca entre robô e nuvem autenticada e criptografada de ponta a ponta.",      dot:C.roL },
  ];
  return (
    <section id="capabilities" style={{ marginTop:20 }}>
      <div style={{ maxWidth:W, margin:"0 auto", padding:"80px 32px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:56 }}>
          <div>
            <Label>Capacidades</Label>
            <H2 style={{ marginTop:12 }}>Feito para operar em produção.</H2>
          </div>
          <p style={{ fontSize:14, color:C.tx3, maxWidth:300, textAlign:"right", lineHeight:1.7 }}>
            Cada parte foi pensada para funcionar de forma confiável em cenários reais de robótica.
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)" }}>
          {rows.map((r,i)=>(
            <div key={r.n} className="cap" style={{
              padding:"28px 24px",
              borderTop:"1px solid rgba(255,255,255,0.05)",
              borderRight: i%3!==2 ? "1px solid rgba(255,255,255,0.05)" : "none",
              transition:"background .15s",
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:16 }}>
                <span style={{ width:5, height:5, borderRadius:"50%", background:r.dot,
                  boxShadow:`0 0 6px ${r.dot}`, display:"inline-block" }}/>
                <span style={{ ...MONO, fontSize:10, color:C.tx3, letterSpacing:"0.07em" }}>{r.n}</span>
              </div>
              <h3 style={{ fontSize:14, fontWeight:600, color:C.tx, letterSpacing:"-0.01em", marginBottom:9 }}>{r.title}</h3>
              <p style={{ fontSize:13.5, color:C.tx2, lineHeight:1.75 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──── STACK ──── */
function StackSection() {
  const layers = [
    { l:"Simulação",      c:"#86efac", items:["Gazebo Harmonic","SITL","TurtleBot4","SDF Worlds"] },
    { l:"Robótica",       c:"#93c5fd", items:["ROS 2 Humble","Nav2","SLAM Toolbox","ROS Bridge"] },
    { l:"Cloud / IoT",    c:"#fdba74", items:["AWS IoT Core","MQTT 5.0","Device Shadow","Greengrass"] },
    { l:"ML / Vision",    c:"#6ee7b7", items:["YOLO v8","ONNX Runtime","TensorRT","PyTorch"] },
    { l:"Infraestrutura", c:"#67e8f9", items:["Docker ARM64","AWS S3","GitHub Actions","Terraform"] },
    { l:"Observability",  c:"#c4b5fd", items:["InfluxDB","Grafana","Prometheus","CloudWatch"] },
  ];
  return (
    <section id="stack">
      <div style={{ maxWidth:W, margin:"0 auto", padding:"80px 32px" }}>
        <div style={{ marginBottom:48 }}>
          <Label>Stack</Label>
          <H2 style={{ marginTop:12 }}>Infraestrutura completa.</H2>
        </div>
        <div style={{ border:`1px solid ${C.bd}`, borderRadius:8, overflow:"hidden" }}>
          {layers.map((l,i)=>(
            <div key={l.l} style={{
              display:"grid", gridTemplateColumns:"160px 1fr",
              borderBottom: i<layers.length-1 ? `1px solid ${C.bd}` : "none",
              background: i%2===0 ? C.sur : "transparent",
            }}>
              <div style={{ padding:"16px 22px", borderRight:`1px solid ${C.bd}`, display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ width:5, height:5, borderRadius:"50%", background:l.c, flexShrink:0 }}/>
                <span style={{ fontSize:12, fontWeight:500, color:C.tx2 }}>{l.l}</span>
              </div>
              <div style={{ padding:"16px 22px", display:"flex", gap:8, flexWrap:"wrap", alignItems:"center" }}>
                {l.items.map(it=>(
                  <span key={it} style={{ ...MONO, fontSize:11.5, color:C.tx3 }}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──── CTA ──── */
function CTASection() {
  return (
    <section style={{ position:"relative", overflow:"hidden" }}>
      <div aria-hidden style={{
        position:"absolute", top:"-10%", left:"50%", transform:"translateX(-50%)",
        width:900, height:500, borderRadius:"50%",
        background:`radial-gradient(ellipse, ${C.ro}22 0%, rgba(124,58,237,0.10) 45%, transparent 70%)`,
        filter:"blur(80px)", pointerEvents:"none",
      }}/>
      <div style={{ maxWidth:W, margin:"0 auto", padding:"96px 32px", position:"relative",
        display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
        <div>
          <Label>Open Source</Label>
          <h2 style={{ fontSize:"clamp(2rem,3vw,2.8rem)", fontWeight:700, letterSpacing:"-0.035em",
            color:C.tx, lineHeight:1.12, margin:"14px 0 18px" }}>
            Construído em público.<br/>Do zero.
          </h2>
          <p style={{ fontSize:15, color:C.tx2, lineHeight:1.8, maxWidth:380 }}>
            Acompanhe a jornada das duas frentes do começo ao fim. Código, diagramas e documentação abertos, cada etapa registrada em público.
          </p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
          <div style={{ display:"flex", gap:10 }}>
            <a href="https://github.com" className="bv" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"11px 24px", borderRadius:6,
              background:C.vi, color:"#fff", fontSize:14, fontWeight:500, textDecoration:"none",
              boxShadow:`0 0 0 1px rgba(255,255,255,0.14) inset, 0 0 20px rgba(124,58,237,0.4)`,
            }}>
              <GhIcon white/> Ver no GitHub
            </a>
            <a href="#" className="bg" style={{
              display:"inline-flex", alignItems:"center",
              padding:"11px 24px", borderRadius:6,
              background:"transparent", border:`1px solid ${C.bd2}`,
              color:C.tx2, fontSize:14, textDecoration:"none",
            }}>
              Documentação
            </a>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", border:`1px solid ${C.bd}`, borderRadius:7 }}>
            {[["2","Sistemas"],["MIT","Licença"],["Open","Source"]].map(([v,k],i)=>(
              <div key={k} style={{ padding:"18px", borderRight:i<2?`1px solid ${C.bd}`:"none", textAlign:"center" }}>
                <p style={{ fontSize:20, fontWeight:700, color:C.viL, letterSpacing:"-0.03em" }}>{v}</p>
                <p style={{ ...MONO, fontSize:10, color:C.tx3, marginTop:5, letterSpacing:"0.05em", textTransform:"uppercase" }}>{k}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──── FOOTER ──── */
function FooterSection() {
  return (
    <footer>
      <div style={{ maxWidth:W, margin:"0 auto", padding:"28px 32px",
        display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ ...MONO, fontSize:11, color:C.tx3 }}>physical-ai · distributed architecture lab</span>
        <span style={{ ...MONO, fontSize:11, color:C.tx3 }}>build in public</span>
      </div>
    </footer>
  );
}

/* ──── ATOMS ──── */
function Label({ children }:{ children:React.ReactNode }) {
  return <p style={{ ...MONO, fontSize:11, color:C.vi, letterSpacing:"0.1em", textTransform:"uppercase" }}>{children}</p>;
}
function H2({ children, style }:{ children:React.ReactNode; style?:React.CSSProperties }) {
  return <h2 style={{ fontSize:"clamp(1.9rem,3vw,2.6rem)", fontWeight:700, letterSpacing:"-0.035em", color:C.tx, ...style }}>{children}</h2>;
}
function GhIcon({ white }:{ white?:boolean }={}) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={white?"#fff":"currentColor"}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
