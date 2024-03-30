function(t, e, r) {
    "use strict";
    var n, i, o = r("926515"),
        u = r("581031"),
        c = r("714050"),
        a = r("572609"),
        s = r("489412"),
        f = r("972277"),
        l = r("803938"),
        v = r("644659").get,
        p = r("973326"),
        d = r("440196"),
        x = f("native-string-replace", String.prototype.replace),
        g = RegExp.prototype.exec,
        h = g,
        b = u("".charAt),
        y = u("".indexOf),
        I = u("".replace),
        m = u("".slice);
    var E = (i = /b*/g, o(g, n = /a/, "a"), o(g, i, "a"), 0 !== n.lastIndex || 0 !== i.lastIndex),
        $ = s.BROKEN_CARET,
        O = void 0 !== /()??/.exec("")[1];
    (E || O || $ || p || d) && (h = function(t) {
        var e, r, n, i, u, s, f, p = v(this),
            d = c(t),
            R = p.raw;
        if (R) return R.lastIndex = this.lastIndex, e = o(h, R, d), this.lastIndex = R.lastIndex, e;
        var j = p.groups,
            S = $ && this.sticky,
            T = o(a, this),
            A = this.source,
            k = 0,
            C = d;
        if (S && (-1 === y(T = I(T, "y", ""), "g") && (T += "g"), C = m(d, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== b(d, this.lastIndex - 1)) && (A = "(?: " + A + ")", C = " " + C, k++), r = RegExp("^(?:" + A + ")", T)), O && (r = RegExp("^" + A + "$(?!\\s)", T)), E && (n = this.lastIndex), i = o(g, S ? r : this, C), S ? i ? (i.input = m(i.input, k), i[0] = m(i[0], k), i.index = this.lastIndex, this.lastIndex += i[0].length) : this.lastIndex = 0 : E && i && (this.lastIndex = this.global ? i.index + i[0].length : n), O && i && i.length > 1 && o(x, i[0], r, function() {
                for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (i[u] = void 0)
            }), i && j)
            for (u = 0, i.groups = s = l(null); u < j.length; u++) s[(f = j[u])[0]] = i[f[1]];
        return i
    }), t.exports = h
}