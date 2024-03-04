function(e, t, n) {
    "use strict";
    n("854508"), e.exports = function(e, t, r) {
        var i, o, s, a, c = {},
            u = 0,
            d = !1;
        for (o = 0, i = this.getMatches(e, t, r); o < i.length; ++o) i[o].seq && (u = Math.max(u, i[o].level));
        for (o = 0; o < i.length; ++o) {
            if (i[o].seq) {
                if (i[o].level !== u) continue;
                d = !0, c[i[o].seq] = 1, this.fireCallback(i[o].callback, r, i[o].combo, i[o].seq);
                continue
            }!d && this.fireCallback(i[o].callback, r, i[o].combo)
        }
        a = "keypress" === r.type && this.ignoreNextKeypress, s = n("275750"), r.type === this.nextExpectedAction && !s(e) && !a && this.resetSequences(c), this.ignoreNextKeypress = d && "keydown" === r.type
    }
}