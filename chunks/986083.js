function(e, t, n) {
    "use strict";
    n("854508"), e.exports = function(e, t, r) {
        var a, i, o, s, c = {},
            l = 0,
            u = !1;
        for (i = 0, a = this.getMatches(e, t, r); i < a.length; ++i) a[i].seq && (l = Math.max(l, a[i].level));
        for (i = 0; i < a.length; ++i) {
            if (a[i].seq) {
                if (a[i].level !== l) continue;
                u = !0, c[a[i].seq] = 1, this.fireCallback(a[i].callback, r, a[i].combo, a[i].seq);
                continue
            }!u && this.fireCallback(a[i].callback, r, a[i].combo)
        }
        s = "keypress" === r.type && this.ignoreNextKeypress, o = n("275750"), r.type === this.nextExpectedAction && !o(e) && !s && this.resetSequences(c), this.ignoreNextKeypress = u && "keydown" === r.type
    }
}