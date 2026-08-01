OI.README {

  KONTINUUM:
    K(t) = 1 / (1 - t)
    Φ(t) = φ∞ · K(t)

  TRANSPORT:
    io = +Δx · K(t)
    oi = -Δx · K(t)

  ACHSEN:
    EAR = anchor
    EON = stabilize
    EXP = expand
    AIR = up
    AIV = down

  ROUTING:
    io → EAR → EON → EXP
    oi → AIR ↕ AIV

  HIGHWAY:
    MODE = 5-Achs
    OPERATOR = XI
    PATH = linear

  SLALOM:
    RESPO = 3
    TARGET = 4
    PATH = EAR → EON → EXP → AIR → AIV
}
