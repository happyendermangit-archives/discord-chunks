function(t, e, r) {
    "use strict";
    var n = r("161581"),
        o = r("824232"),
        i = r("957833"),
        c = r("996173"),
        s = r("251069"),
        u = r("641236"),
        a = u("iterator"),
        f = u("toStringTag"),
        p = c.values,
        l = function(t, e) {
            if (t) {
                if (t[a] !== p) try {
                    s(t, a, p)
                } catch (e) {
                    t[a] = p
                }
                if (!t[f] && s(t, f, e), o[e]) {
                    for (var r in c)
                        if (t[r] !== c[r]) try {
                            s(t, r, c[r])
                        } catch (e) {
                            t[r] = c[r]
                        }
                }
            }
        };
    for (var y in o) l(n[y] && n[y].prototype, y);
    l(i, "DOMTokenList")
}