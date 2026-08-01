// OI · continuumSlide.js · RAW

// Unendlichkeits‑Operator
// K(t) = 1 / (1 - t)
function K(t) {
    return 1 / (1 - t);
}

// Φ‑Skalierung
// Φ(t) = phi_inf * K(t)
function PhiScale(phi_inf, t) {
    return phi_inf * K(t);
}

// Einzel‑Slide für OI (Output‑Kanal)
// OI bewegt sich immer negativ (AIV‑Achse)
function continuumSlideOI(element, dx, t) {
    const scale = -dx * K(t);
    element.style.transform = `translateX(${scale}px)`;
    return scale;
}

// Dual‑Slide io ↔ oi
// io = +, oi = -
function continuumDual(io, oi, dx, t) {
    const scale = dx * K(t);
    io.style.transform = `translateX(${scale}px)`;
    oi.style.transform = `translateX(${-scale}px)`;
    return { io: scale, oi: -scale };
}

// Transport‑Rechnung für OI
// T_oi(t) = -dx * K(t)
function transportOI(dx, t) {
    return -dx * K(t);
}

// Dual‑Transport‑Rechnung
function dualTransport(io, oi, dx, t) {
    const scale = dx * K(t);
    io.value = scale;
    oi.value = -scale;
    return { io: scale, oi: -scale };
}

// Export (RAW)
const OI_CONTINUUM = {
    K,
    PhiScale,
    continuumSlideOI,
    continuumDual,
    transportOI,
    dualTransport
};
