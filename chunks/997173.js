function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        caseInsensitiveLangRegex: function() {
            return O
        },
        findBackticks: function() {
            return v
        },
        isKnownLang: function() {
            return S
        }
    });
    var r = n("920478");
    n("928344");
    var o = r.default.listLanguages(),
        i = {},
        a = !0,
        u = !1,
        s = void 0;
    try {
        for (var l, c = o[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
            var f = l.value;
            f = f.toLowerCase();
            var d = r.default.getLanguage(f);
            if (null != d) {
                var _ = d.aliases;
                if (i[f] = f, null != _) {
                    var E = !0,
                        p = !1,
                        m = void 0;
                    try {
                        for (var y, I = _[Symbol.iterator](); !(E = (y = I.next()).done); E = !0) i[y.value.toLowerCase()] = f
                    } catch (e) {
                        p = !0, m = e
                    } finally {
                        try {
                            !E && null != I.return && I.return()
                        } finally {
                            if (p) throw m
                        }
                    }
                }
            }
        }
    } catch (e) {
        u = !0, s = e
    } finally {
        try {
            !a && null != c.return && c.return()
        } finally {
            if (u) throw s
        }
    }
    var h = /^[a-z0-9_+\-.#]+$/,
        O = /^[a-z0-9_+\-.#]+$/i;
    for (var T in i)
        if (null == T.match(h)) throw Error("Language name does not match regex: ".concat(T));

    function S(e) {
        return e.toLowerCase() in i
    }

    function v(e) {
        for (var t, n = [], r = /\\|```/g; null != (t = r.exec(e));) {
            if ("\\" === t[0]) {
                r.lastIndex += 1;
                continue
            }
            n.push(t.index)
        }
        return n
    }
}