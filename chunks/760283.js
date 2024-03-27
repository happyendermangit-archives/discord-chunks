function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r) {
        var i, a, o, s, u = {},
            c = 0,
            l = !1;
        for (a = 0, i = this.getMatches(e, t, r); a < i.length; ++a) i[a].seq && (c = Math.max(c, i[a].level));
        for (a = 0; a < i.length; ++a) {
            if (i[a].seq) {
                if (i[a].level !== c) continue;
                l = !0, u[i[a].seq] = 1, this.fireCallback(i[a].callback, r, i[a].combo, i[a].seq);
                continue
            }!l && this.fireCallback(i[a].callback, r, i[a].combo)
        }
        s = "keypress" === r.type && this.ignoreNextKeypress, o = n("64000"), r.type === this.nextExpectedAction && !o(e) && !s && this.resetSequences(u), this.ignoreNextKeypress = l && "keydown" === r.type
    }
}