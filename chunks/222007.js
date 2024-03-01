function(t, e, r) {
    "use strict";
    var n = r("503486"),
        o = r("698801"),
        i = r("833676"),
        c = r("422200"),
        u = r("366483"),
        s = r("174669"),
        a = s("iterator"),
        f = s("toStringTag"),
        p = c.values,
        l = function(t, e) {
            if (t) {
                if (t[a] !== p) try {
                    u(t, a, p)
                } catch (e) {
                    t[a] = p
                }
                if (!t[f] && u(t, f, e), o[e]) {
                    for (var r in c)
                        if (t[r] !== c[r]) try {
                            u(t, r, c[r])
                        } catch (e) {
                            t[r] = c[r]
                        }
                }
            }
        };
    for (var y in o) l(n[y] && n[y].prototype, y);
    l(i, "DOMTokenList")
}