import { MESSER_PERCENT, MESSER_DEGREE, MESSER_COIN } from "./messer.js";

export function NC_MAGNET_POWER(IO, OI, IX, XI, TP3, TP4, TP6, TP8, TP9, TP12) {

    const MRW = IO + OI + IX + XI;
    const TP6D = TP3 + TP4 + TP6 + TP8 + TP9 + TP12;

    const NCP = MRW * TP6D;

    return {
        MRW,
        TP6D,
        NCP,
        percent: MESSER_PERCENT(MRW, TP6D),
        degree: MESSER_DEGREE(MRW),
        coin: MESSER_COIN(NCP)
    };
}

