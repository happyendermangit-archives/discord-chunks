function(e, t, n) {
    "use strict";
    n("854508"), n("781738"), e.exports = function(e, t, n, r, i) {
        this.directMap[e + ":" + n] = t;
        var o, s = (e = e.replace(/\s+/g, " ")).split(" ");
        if (s.length > 1) {
            this.bindSequence(e, s, t, n);
            return
        }
        o = this.getKeyInfo(e, n), this.callbacks[o.key] = this.callbacks[o.key] || [], this.getMatches(o.key, o.modifiers, {
            type: o.action
        }, r, e, i), this.callbacks[o.key][r ? "unshift" : "push"]({
            callback: t,
            modifiers: o.modifiers,
            action: o.action,
            seq: r,
            level: i,
            combo: e
        })
    }
}