function(t, r, n) {
    "use strict";
    var e, i, u = n("868822"),
        o = n("64980"),
        c = n("998270"),
        a = n("383252"),
        s = n("854745"),
        f = n("17758"),
        l = n("148066"),
        p = n("515011").get,
        v = n("297403"),
        x = n("34810"),
        h = f("native-string-replace", String.prototype.replace),
        d = RegExp.prototype.exec,
        g = d,
        y = o("".charAt),
        E = o("".indexOf),
        b = o("".replace),
        I = o("".slice);
    var R = (i = /b*/g, u(d, e = /a/, "a"), u(d, i, "a"), 0 !== e.lastIndex || 0 !== i.lastIndex),
        k = s.BROKEN_CARET,
        m = void 0 !== /()??/.exec("")[1];
    (R || m || k || v || x) && (g = function(t) {
        var r, n, e, i, o, s, f, v = p(this),
            x = c(t),
            S = v.raw;
        if (S) return S.lastIndex = this.lastIndex, r = u(g, S, x), this.lastIndex = S.lastIndex, r;
        var $ = v.groups,
            A = k && this.sticky,
            T = u(a, this),
            C = this.source,
            w = 0,
            O = x;
        if (A && (-1 === E(T = b(T, "y", ""), "g") && (T += "g"), O = I(x, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== y(x, this.lastIndex - 1)) && (C = "(?: " + C + ")", O = " " + O, w++), n = RegExp("^(?:" + C + ")", T)), m && (n = RegExp("^" + C + "$(?!\\s)", T)), R && (e = this.lastIndex), i = u(d, A ? n : this, O), A ? i ? (i.input = I(i.input, w), i[0] = I(i[0], w), i.index = this.lastIndex, this.lastIndex += i[0].length) : this.lastIndex = 0 : R && i && (this.lastIndex = this.global ? i.index + i[0].length : e), m && i && i.length > 1 && u(h, i[0], n, function() {
                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (i[o] = void 0)
            }), i && $)
            for (o = 0, i.groups = s = l(null); o < $.length; o++) s[(f = $[o])[0]] = i[f[1]];
        return i
    }), t.exports = g
}