import type { CSSProperties } from "react";

/* ============================================================
   NorteWeb — landing (implementación de "NorteWeb.dc.html")
   Edita estos valores para configurar el sitio:
   ============================================================ */
const WHATSAPP = "593999999999"; // solo números
const CORREO = "hola@norteweb.ec";
const MOSTRAR_PORTAFOLIO = true;
const MOSTRAR_PRECIOS = true;

const waLink = `https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}?text=Hola%20NorteWeb%2C%20quiero%20cotizar%20un%20proyecto`;

const DISPLAY = "var(--font-bricolage), 'Bricolage Grotesque', sans-serif";

/* ---------- helpers ---------- */

function SlotImage({
  src,
  alt,
  credit,
  creditHref,
}: {
  src: string;
  alt: string;
  credit?: string;
  creditHref?: string;
}) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {credit ? (
        <a
          href={creditHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: 8,
            bottom: 8,
            fontSize: 10.5,
            color: "rgba(246,244,237,0.85)",
            background: "rgba(20,31,25,0.45)",
            padding: "3px 8px",
            borderRadius: 999,
            backdropFilter: "blur(2px)",
          }}
        >
          {credit}
        </a>
      ) : null}
    </>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: 20,
        background:
          "repeating-linear-gradient(-45deg, #EDF2EC 0 12px, #E3EDE4 12px 24px)",
        color: "#6B7A6F",
        fontSize: 13.5,
        lineHeight: 1.4,
      }}
    >
      {label}
    </div>
  );
}

const eyebrow = (color: string): CSSProperties => ({
  margin: "0 0 12px",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color,
});

const check: CSSProperties = {
  display: "flex",
  gap: 10,
};

/* ---------- data ---------- */

const servicios = [
  {
    icon: "◳",
    title: "Sitios web y sistemas a medida",
    desc: "En NorteWeb te armamos el sitio o sistema que tu negocio necesita, pensado para ti, no una plantilla genérica. Vas a tener una herramienta que funciona como quieres, se ve profesional y te hace la vida más fácil.",
  },
  {
    icon: "↻",
    title: "Automatización de tareas repetitivas",
    desc: "¿Cargas pedidos a mano, mandas las mismas respuestas por WhatsApp o armas reportes todos los meses? Te armamos un sistema que lo hace solo. Menos tiempo perdido, menos errores.",
  },
  {
    icon: "⇄",
    title: "Conexión entre tus sistemas",
    desc: "Tu web, tu WhatsApp, tu sistema de pagos y tu planilla de ventas pueden hablar entre sí. Te integramos todo para que no tengas que copiar y pegar información de un lado a otro.",
  },
  {
    icon: "◈",
    title: "Chatbot o asistente para atender clientes",
    desc: "Un asistente que responde preguntas frecuentes, toma pedidos o agenda turnos las 24 horas, incluso cuando tú no estás. Tú sigues atendiendo lo importante.",
  },
  {
    icon: "▦",
    title: "Paneles con tus números en tiempo real",
    desc: "Ventas, stock, clientes: todo en una pantalla clara, sin tener que armar planillas a mano. Tomas decisiones mirando datos reales, no a ojo.",
  },
  {
    icon: "⟲",
    title: "Modernización de sistemas viejos",
    desc: "Si ya tienes una web o sistema que quedó atrás, lo actualizamos y lo hacemos más rápido, seguro y fácil de mantener, sin arrancar de cero.",
  },
  {
    icon: "✚",
    title: "Mantenimiento mensual",
    desc: "No te dejamos solo después de la entrega. Con un plan mensual nos ocupamos de que todo siga funcionando, sumamos mejoras y arreglamos lo que haga falta.",
  },
  {
    icon: "✦",
    title: "Prueba rápida de tu idea (MVP)",
    desc: "¿Tienes una idea de negocio y quieres ver si funciona antes de invertir en grande? Te armamos una versión simple y funcional para probarla con clientes reales.",
  },
];

const portafolio = [
  { label: "Captura: sitio web de cliente", tag: "Página web · Tulcán" },
  { label: "Captura: automatización / chatbot", tag: "Automatización IA · San Gabriel" },
  { label: "Captura: sistema de gestión", tag: "Sistema a medida · El Ángel" },
];

/* ---------- page ---------- */

export default function Home() {
  return (
    <div style={{ minWidth: 320, overflowX: "clip" }}>
      {/* ============ NAV ============ */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(246,244,237,0.92)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid #E3DFD3",
        }}
      >
        <nav
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "linear-gradient(135deg, #2F6B4F, #1E4A36)",
                color: "#F6F4ED",
                display: "grid",
                placeItems: "center",
                fontFamily: DISPLAY,
                fontWeight: 800,
                fontSize: 17,
                letterSpacing: "-0.5px",
              }}
            >
              04
            </span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 700,
                  fontSize: 19,
                  color: "#23312A",
                }}
              >
                NorteWeb
              </span>
              <span
                style={{
                  fontSize: 10.5,
                  letterSpacing: "1.6px",
                  textTransform: "uppercase",
                  color: "#8A8271",
                }}
              >
                Carchi · Ecuador
              </span>
            </span>
          </a>
          <div
            className="nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 26,
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            <a href="#servicios" className="nav-link nav-secondary">
              Servicios
            </a>
            <a href="#portafolio" className="nav-link nav-secondary">
              Portafolio
            </a>
            <a href="#precios" className="nav-link nav-secondary">
              Precios
            </a>
            <a href="#nosotros" className="nav-link nav-secondary">
              Nosotros
            </a>
            <a
              href={waLink}
              className="btn btn-green"
              style={{
                background: "#2F6B4F",
                color: "#F6F4ED",
                padding: "10px 20px",
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              Hablemos
            </a>
          </div>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section
        id="inicio"
        className="two-col"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "72px 24px 64px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 56,
          alignItems: "center",
          animation: "fadeUp 0.7s ease both",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 18px",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#2F6B4F",
              border: "1px solid #C9D9CD",
              borderRadius: 999,
              padding: "7px 14px",
              background: "#EDF2EC",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: "#C8A24A",
                transform: "rotate(45deg)",
              }}
            />
            Desde Tulcán, para todo el Carchi
          </p>
          <h1
            style={{
              margin: "0 0 20px",
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(38px, 5vw, 58px)",
              lineHeight: 1.04,
              letterSpacing: "-1.5px",
              color: "#1B2921",
              textWrap: "balance",
            }}
          >
            Tecnología con raíces en el páramo
          </h1>
          <p
            style={{
              margin: "0 0 32px",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#4A5A50",
              maxWidth: "46ch",
              textWrap: "pretty",
            }}
          >
            Creamos páginas web, automatizaciones con inteligencia artificial y
            sistemas a la medida para los negocios carchenses. Cercanos como
            vecinos, precisos como buena tecnología.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={waLink}
              className="btn btn-green"
              style={{
                background: "#2F6B4F",
                color: "#F6F4ED",
                padding: "15px 28px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Cotiza tu proyecto
            </a>
            <a
              href="#servicios"
              className="btn btn-outline"
              style={{
                border: "1.5px solid #C9D9CD",
                color: "#23312A",
                padding: "15px 28px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 16,
                background: "transparent",
              }}
            >
              Ver servicios
            </a>
          </div>
          <div
            className="hero-stats"
            style={{
              marginTop: 40,
              display: "flex",
              gap: 32,
              color: "#6B7A6F",
              fontSize: 14,
            }}
          >
            {[
              ["100%", "hecho en Carchi"],
              ["6", "cantones atendidos"],
              ["24h", "respuesta garantizada"],
            ].map(([n, l]) => (
              <span key={l}>
                <strong
                  style={{ color: "#1B2921", fontSize: 17, fontFamily: DISPLAY }}
                >
                  {n}
                </strong>
                <br />
                {l}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 4.6",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <SlotImage
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Reserva_Ecológica_El_Ángel.jpg?width=1600"
              alt="Frailejones del páramo de El Ángel, Carchi"
              credit="Wikimedia Commons · CC BY-SA"
              creditHref="https://commons.wikimedia.org/wiki/File:Reserva_Ecológica_El_Ángel.jpg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: -18,
              bottom: 28,
              background: "#F6F4ED",
              border: "1px solid #E3DFD3",
              borderRadius: 14,
              padding: "14px 18px",
              boxShadow: "0 12px 32px rgba(27,41,33,0.12)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                background: "#EDF2EC",
                display: "grid",
                placeItems: "center",
                fontSize: 16,
              }}
            >
              ✦
            </span>
            <span style={{ fontSize: 14, lineHeight: 1.35, color: "#4A5A50" }}>
              <strong style={{ color: "#1B2921" }}>El Ángel, Carchi</strong>
              <br />
              Reserva Ecológica · 3.640 msnm
            </span>
          </div>
        </div>
      </section>

      {/* divisor andino */}
      <div
        style={{
          height: 10,
          background:
            "repeating-linear-gradient(-45deg, #2F6B4F 0 10px, #C8A24A 10px 20px, #1E4A36 20px 30px, #EDF2EC 30px 40px)",
          opacity: 0.85,
        }}
      />

      {/* ============ SERVICIOS ============ */}
      <section
        id="servicios"
        style={{ background: "#1B2921", color: "#EDEAE0", padding: "88px 24px" }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={eyebrow("#C8A24A")}>Lo que hacemos</p>
          <h2
            style={{
              margin: "0 0 18px",
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(30px, 4vw, 44px)",
              letterSpacing: "-1px",
              color: "#F6F4ED",
              maxWidth: "22ch",
              textWrap: "balance",
            }}
          >
            Soluciones digitales para cada parte de tu negocio
          </h2>
          <p
            style={{
              margin: "0 0 48px",
              color: "#A9B3A8",
              fontSize: 17,
              maxWidth: "58ch",
              lineHeight: 1.6,
            }}
          >
            De la tienda de barrio en Tulcán a la cooperativa en San Gabriel:
            soluciones digitales pensadas para cómo se trabaja aquí.
          </p>
          <div
            className="three-col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {servicios.map((s) => (
              <article
                key={s.title}
                className="service-card"
                style={{
                  background: "#22332A",
                  border: "1px solid #33473B",
                  borderRadius: 18,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "#2F6B4F",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 20,
                    color: "#F6F4ED",
                  }}
                >
                  {s.icon}
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#F6F4ED",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#A9B3A8",
                    lineHeight: 1.6,
                    fontSize: 15.5,
                  }}
                >
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BANNER PÁRAMO ============ */}
      <section style={{ position: "relative", height: 420, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <SlotImage
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Frailejones_chiles.JPG?width=1920"
            alt="Panorámica del páramo con frailejones, volcán Chiles"
            credit="Frailejones, volcán Chiles · Wikimedia Commons"
            creditHref="https://commons.wikimedia.org/wiki/File:Frailejones_chiles.JPG"
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(27,41,33,0.72) 0%, rgba(27,41,33,0.15) 55%, rgba(27,41,33,0) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 44,
            textAlign: "center",
            padding: "0 24px",
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              margin: "0 auto",
              maxWidth: "30ch",
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(24px, 3.2vw, 38px)",
              lineHeight: 1.2,
              color: "#F6F4ED",
              letterSpacing: "-0.5px",
              textWrap: "balance",
              textShadow: "0 2px 20px rgba(0,0,0,0.35)",
            }}
          >
            Como el frailejón: firmes, locales y hechos para durar
          </p>
        </div>
      </section>

      {/* ============ PORTAFOLIO ============ */}
      {MOSTRAR_PORTAFOLIO ? (
        <section
          id="portafolio"
          style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 24px" }}
        >
          <p style={eyebrow("#2F6B4F")}>Portafolio</p>
          <h2
            style={{
              margin: "0 0 48px",
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(30px, 4vw, 44px)",
              letterSpacing: "-1px",
              color: "#1B2921",
            }}
          >
            Trabajo hecho con manos carchenses
          </h2>
          <div
            className="three-col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {portafolio.map((p, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <Placeholder label={p.label} />
                </div>
                <figcaption style={{ fontSize: 15, color: "#4A5A50" }}>
                  <strong
                    style={{
                      color: "#1B2921",
                      fontFamily: DISPLAY,
                      fontSize: 17,
                    }}
                  >
                    Nombre del proyecto
                  </strong>
                  <br />
                  {p.tag}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* ============ PRECIOS ============ */}
      {MOSTRAR_PRECIOS ? (
        <section
          id="precios"
          style={{
            background: "#EDF2EC",
            borderTop: "1px solid #DCE5DC",
            borderBottom: "1px solid #DCE5DC",
            padding: "88px 24px",
          }}
        >
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <p style={eyebrow("#2F6B4F")}>Precios</p>
            <h2
              style={{
                margin: "0 0 18px",
                fontFamily: DISPLAY,
                fontWeight: 800,
                fontSize: "clamp(30px, 4vw, 44px)",
                letterSpacing: "-1px",
                color: "#1B2921",
              }}
            >
              Paquetes claros, sin letra pequeña
            </h2>
            <p
              style={{
                margin: "0 0 48px",
                color: "#4A5A50",
                fontSize: 17,
                maxWidth: "55ch",
                lineHeight: 1.6,
              }}
            >
              Precios pensados para la realidad local. Todos incluyen
              capacitación y soporte en tu idioma, cara a cara si estás en la
              provincia.
            </p>
            <div
              className="three-col"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
                alignItems: "stretch",
              }}
            >
              {/* Semilla */}
              <article
                style={{
                  background: "#F6F4ED",
                  border: "1px solid #DCE5DC",
                  borderRadius: 18,
                  padding: "34px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#1B2921",
                  }}
                >
                  Semilla
                </h3>
                <p style={{ margin: "0 0 6px", fontSize: 14, color: "#6B7A6F" }}>
                  Para empezar tu presencia digital
                </p>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontFamily: DISPLAY,
                    fontWeight: 800,
                    fontSize: 40,
                    color: "#1B2921",
                  }}
                >
                  $180
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#6B7A6F" }}>
                    {" "}
                    único
                  </span>
                </p>
                <ul
                  style={{
                    margin: "0 0 24px",
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    fontSize: 15,
                    color: "#4A5A50",
                  }}
                >
                  {[
                    "Página web de hasta 4 secciones",
                    "Diseño adaptado a celular",
                    "Botón directo a WhatsApp",
                    "1 mes de soporte incluido",
                  ].map((item) => (
                    <li key={item} style={check}>
                      <span style={{ color: "#2F6B4F" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  className="btn btn-outline-fill"
                  style={{
                    marginTop: "auto",
                    textAlign: "center",
                    border: "1.5px solid #2F6B4F",
                    color: "#2F6B4F",
                    padding: 13,
                    borderRadius: 999,
                    fontWeight: 600,
                  }}
                >
                  Empezar
                </a>
              </article>

              {/* Páramo (destacado) */}
              <article
                style={{
                  background: "#1B2921",
                  borderRadius: 18,
                  padding: "34px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  position: "relative",
                  boxShadow: "0 20px 44px rgba(27,41,33,0.22)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -13,
                    left: 30,
                    background: "#C8A24A",
                    color: "#1B2921",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: 999,
                  }}
                >
                  Más pedido
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#F6F4ED",
                  }}
                >
                  Páramo
                </h3>
                <p style={{ margin: "0 0 6px", fontSize: 14, color: "#A9B3A8" }}>
                  Web completa + automatización
                </p>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontFamily: DISPLAY,
                    fontWeight: 800,
                    fontSize: 40,
                    color: "#F6F4ED",
                  }}
                >
                  $420
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#A9B3A8" }}>
                    {" "}
                    único
                  </span>
                </p>
                <ul
                  style={{
                    margin: "0 0 24px",
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    fontSize: 15,
                    color: "#C9D2C7",
                  }}
                >
                  {[
                    "Web ilimitada con catálogo",
                    "Chatbot de WhatsApp con IA",
                    "Correo y dominio propio 1 año",
                    "3 meses de soporte incluido",
                  ].map((item) => (
                    <li key={item} style={check}>
                      <span style={{ color: "#C8A24A" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  className="btn btn-gold"
                  style={{
                    marginTop: "auto",
                    textAlign: "center",
                    background: "#C8A24A",
                    color: "#1B2921",
                    padding: 13,
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  Quiero este
                </a>
              </article>

              {/* Cumbre */}
              <article
                style={{
                  background: "#F6F4ED",
                  border: "1px solid #DCE5DC",
                  borderRadius: 18,
                  padding: "34px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#1B2921",
                  }}
                >
                  Cumbre
                </h3>
                <p style={{ margin: "0 0 6px", fontSize: 14, color: "#6B7A6F" }}>
                  Sistemas a la medida de tu negocio
                </p>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontFamily: DISPLAY,
                    fontWeight: 800,
                    fontSize: 40,
                    color: "#1B2921",
                  }}
                >
                  A medida
                </p>
                <ul
                  style={{
                    margin: "0 0 24px",
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    fontSize: 15,
                    color: "#4A5A50",
                  }}
                >
                  {[
                    "Inventarios, facturación, reportes",
                    "Integraciones con IA",
                    "Capacitación a tu equipo",
                    "Soporte continuo opcional",
                  ].map((item) => (
                    <li key={item} style={check}>
                      <span style={{ color: "#2F6B4F" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  className="btn btn-outline-fill"
                  style={{
                    marginTop: "auto",
                    textAlign: "center",
                    border: "1.5px solid #2F6B4F",
                    color: "#2F6B4F",
                    padding: 13,
                    borderRadius: 999,
                    fontWeight: 600,
                  }}
                >
                  Conversemos
                </a>
              </article>
            </div>
          </div>
        </section>
      ) : null}

      {/* ============ NOSOTROS ============ */}
      <section
        id="nosotros"
        className="two-col"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "88px 24px",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/4.4",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <SlotImage
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Cementerio_de_Tulcán.jpg?width=1600"
            alt="Cementerio de Tulcán, Carchi"
            credit="Cementerio de Tulcán · Wikimedia Commons"
            creditHref="https://commons.wikimedia.org/wiki/File:Cementerio_de_Tulcán.jpg"
          />
        </div>
        <div>
          <p style={eyebrow("#2F6B4F")}>Nosotros</p>
          <h2
            style={{
              margin: "0 0 20px",
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(30px, 4vw, 44px)",
              letterSpacing: "-1px",
              color: "#1B2921",
              textWrap: "balance",
            }}
          >
            04, como la provincia que nos vio nacer
          </h2>
          <p
            style={{
              margin: "0 0 16px",
              fontSize: 17,
              lineHeight: 1.7,
              color: "#4A5A50",
              textWrap: "pretty",
            }}
          >
            Nuestro nombre viene del{" "}
            <strong style={{ color: "#1B2921" }}>código 04</strong>: el número de
            la provincia del Carchi. Somos un equipo de desarrolladores
            carchenses que decidió quedarse y construir tecnología desde casa,
            para la gente de casa.
          </p>
          <p
            style={{
              margin: "0 0 28px",
              fontSize: 17,
              lineHeight: 1.7,
              color: "#4A5A50",
              textWrap: "pretty",
            }}
          >
            Creemos que un negocio de Tulcán, Mira o Huaca merece las mismas
            herramientas que uno de Quito o Guayaquil — con la ventaja de que a
            nosotros nos encuentras aquí mismo, tomando un café.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            {[
              [
                "Cercanía real",
                "Reuniones presenciales en cualquier cantón de la provincia.",
              ],
              [
                "Sin enredos",
                "Te explicamos todo en palabras simples, sin tecnicismos.",
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                style={{ background: "#EDF2EC", borderRadius: 14, padding: "18px 20px" }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#1B2921",
                  }}
                >
                  {t}
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: 14.5,
                    color: "#4A5A50",
                    lineHeight: 1.5,
                  }}
                >
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACTO / CTA ============ */}
      <section
        id="contacto"
        style={{
          background: "#1B2921",
          padding: "96px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "auto 0 0 0",
            height: 10,
            background:
              "repeating-linear-gradient(-45deg, #2F6B4F 0 10px, #C8A24A 10px 20px, #1E4A36 20px 30px, #EDF2EC 30px 40px)",
            opacity: 0.85,
          }}
        />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              margin: "0 0 18px",
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(32px, 4.5vw, 50px)",
              letterSpacing: "-1.2px",
              color: "#F6F4ED",
              textWrap: "balance",
            }}
          >
            ¿Listo para llevar tu negocio más alto que el páramo?
          </h2>
          <p
            style={{
              margin: "0 0 36px",
              fontSize: 18,
              color: "#A9B3A8",
              lineHeight: 1.6,
            }}
          >
            Escríbenos y en menos de 24 horas tienes una propuesta. Sin
            compromiso, sin costo.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={waLink}
              className="btn btn-gold"
              style={{
                background: "#C8A24A",
                color: "#1B2921",
                padding: "16px 32px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Escríbenos por WhatsApp
            </a>
            <a
              href={`mailto:${CORREO}`}
              className="btn btn-outline-dark"
              style={{
                border: "1.5px solid #33473B",
                color: "#EDEAE0",
                padding: "16px 32px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              {CORREO}
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ background: "#141F19", color: "#A9B3A8", padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#2F6B4F",
                color: "#F6F4ED",
                display: "grid",
                placeItems: "center",
                fontFamily: DISPLAY,
                fontWeight: 800,
                fontSize: 14,
              }}
            >
              04
            </span>
            <span
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: 16,
                color: "#EDEAE0",
              }}
            >
              NorteWeb
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 14 }}>
            Tulcán · Provincia del Carchi · Ecuador
          </p>
          <p style={{ margin: 0, fontSize: 14 }}>
            © 2026 NorteWeb. Hecho en el Carchi con orgullo.
          </p>
        </div>
      </footer>
    </div>
  );
}
