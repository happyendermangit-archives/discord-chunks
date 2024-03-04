function(e, t, n) {
    "use strict";
    n("854508"), n("424973"), e.exports = function(e, t, r, i, o, s) {
        var a, c, u, d, l = [],
            f = r.type;
        if ("keypress" === f && !(r.code && "Arrow" === r.code.slice(0, 5)) && (this.callbacks["any-character"] || []).forEach(function(e) {
                l.push(e)
            }), !this.callbacks[e]) return l;
        for (u = n("275750"), "keyup" === f && u(e) && (t = [e]), a = 0; a < this.callbacks[e].length; ++a) {
            if (c = this.callbacks[e][a], !!i || !c.seq || this.sequenceLevels[c.seq] === c.level) {
                if (f === c.action && (d = n("164788"), "keypress" === f && !r.metaKey && !r.ctrlKey || d(t, c.modifiers))) {
                    var p = !i && c.combo === o,
                        h = i && c.seq === i && c.level === s;
                    (p || h) && this.callbacks[e].splice(a, 1), l.push(c)
                }
            }
        }
        return l
    }
}