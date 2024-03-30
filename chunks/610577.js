function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("194926"),
        u = n("898511"),
        s = n("447515"),
        l = n("784184"),
        c = n("622780"),
        f = n("438398"),
        d = n("120468");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        var t, n, o, E = e.color,
            p = e.size,
            m = e.forcedIconColor,
            y = e.className,
            I = e.iconClassName;
        var h = (t = (0, u.useStateFromStoresArray)([c.default], function() {
                return [c.default.desaturateUserColors, c.default.saturation]
            }), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            O = h[0],
            T = h[1],
            S = (0, l.useToken)(s.default.unsafe_rawColors.PRIMARY_300).hex(),
            v = (0, a.hex2int)(null != E ? E : S),
            g = (0, a.int2hsl)(v, !1, O ? T : null);
        o = null != m ? m : .3 > (0, a.getDarkness)(v) ? s.default.unsafe_rawColors.PRIMARY_630.css : s.default.unsafe_rawColors.WHITE_500.css;
        var A = p / 8;
        return r.createElement("div", {
            style: {
                background: g,
                width: p,
                height: p,
                borderRadius: p,
                lineHeight: "".concat(p, "px")
            },
            className: y
        }, r.createElement(f.default, {
            color: o,
            className: i()(d.linkIcon, I),
            width: p - 2 * A,
            height: p - 2 * A,
            style: {
                margin: A
            }
        }))
    }
}