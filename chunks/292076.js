function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("194926"),
        i = n("898511"),
        a = n("447515"),
        u = n("784184"),
        s = n("622780"),
        l = n("516617"),
        c = n("728664"),
        f = n("941504");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e) {
        var t, n, _, E = e.color,
            p = e.size,
            m = e.forcedIconColor,
            y = e.className,
            I = e.iconClassName,
            h = e.tooltipText;
        var O = (t = (0, i.useStateFromStoresArray)([s.default], function() {
                return [s.default.desaturateUserColors, s.default.saturation]
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
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            T = O[0],
            S = O[1],
            v = (0, u.useToken)(a.default.unsafe_rawColors.PRIMARY_300).hex(),
            g = (0, o.hex2int)(null != E ? E : v),
            A = (0, o.int2hsl)(g, !1, T ? S : null);
        return _ = null != m ? m : .3 > (0, o.getDarkness)(g) ? a.default.unsafe_rawColors.PRIMARY_630.css : a.default.unsafe_rawColors.WHITE_500.css, r.createElement(u.Tooltip, {
            text: null != h ? h : f.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP
        }, function(e) {
            var t, n;
            return r.createElement(l.default, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, e), n = (n = {
                className: y,
                color: A,
                size: p
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), r.createElement(c.default, {
                color: _,
                height: p,
                width: p,
                className: I
            }))
        })
    }
}