function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i, a, o) {
        var s, u, c, l, d = [],
            f = r.type;
        if ("keypress" === f && !(r.code && "Arrow" === r.code.slice(0, 5)) && (this.callbacks["any-character"] || []).forEach(function(e) {
                d.push(e)
            }), !this.callbacks[e]) return d;
        for (c = n("64000"), "keyup" === f && c(e) && (t = [e]), s = 0; s < this.callbacks[e].length; ++s) {
            if (u = this.callbacks[e][s], !!i || !u.seq || this.sequenceLevels[u.seq] === u.level) {
                if (f === u.action && (l = n("758686"), "keypress" === f && !r.metaKey && !r.ctrlKey || l(t, u.modifiers))) {
                    var p = !i && u.combo === a,
                        h = i && u.seq === i && u.level === o;
                    (p || h) && this.callbacks[e].splice(s, 1), d.push(u)
                }
            }
        }
        return d
    }
}