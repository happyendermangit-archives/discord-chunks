function(e) {
    "use strict";
    e.exports = function(e, t, n, r, i) {
        this.directMap[e + ":" + n] = t;
        var a, o = (e = e.replace(/\s+/g, " ")).split(" ");
        if (o.length > 1) {
            this.bindSequence(e, o, t, n);
            return
        }
        a = this.getKeyInfo(e, n), this.callbacks[a.key] = this.callbacks[a.key] || [], this.getMatches(a.key, a.modifiers, {
            type: a.action
        }, r, e, i), this.callbacks[a.key][r ? "unshift" : "push"]({
            callback: t,
            modifiers: a.modifiers,
            action: a.action,
            seq: r,
            level: i,
            combo: e
        })
    }
}