function(e, t, n) {
    "use strict";
    n("424973"), n("854508"), e.exports = function(e, t) {
        var r, i, o, s, a, c, u = [];
        for (o = 0, r = n("87552")(e), s = n("973809"), a = n("325688"), c = n("275750"); o < r.length; ++o) s[i = r[o]] && (i = s[i]), t && "keypress" !== t && a[i] && (i = a[i], u.push("shift")), c(i) && u.push(i);
        return t = this.pickBestAction(i, u, t), {
            key: i,
            modifiers: u,
            action: t
        }
    }
}