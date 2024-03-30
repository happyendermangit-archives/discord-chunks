function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeShapes: function() {
            return c
        },
        CircleBadge: function() {
            return y
        },
        IconBadge: function() {
            return m
        },
        NumberBadge: function() {
            return _
        },
        PremiumBadge: function() {
            return p
        },
        TextBadge: function() {
            return E
        },
        getBadgeCountString: function() {
            return d
        },
        getBadgeWidthForValue: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o);
    n("784184");
    var a = n("7445");
    n("941504");
    var u = n("248682");

    function s(e) {
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
    }

    function l(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }
    var c = {
        ROUND: u.baseShapeRound,
        ROUND_LEFT: u.baseShapeRoundLeft,
        ROUND_RIGHT: u.baseShapeRoundRight,
        SQUARE: ""
    };

    function f(e) {
        return e < 10 ? 16 : e < 100 ? 22 : 30
    }

    function d(e) {
        return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
    }
    var _ = function(e) {
            var t = e.count,
                n = e.color,
                o = void 0 === n ? a.default.STATUS_DANGER : n,
                _ = e.disableColor,
                E = e.shape,
                p = void 0 === E ? c.ROUND : E,
                m = e.className,
                y = e.style,
                I = l(e, ["count", "color", "disableColor", "shape", "className", "style"]);
            return r.createElement("div", s({
                className: i()(m, u.numberBadge, p),
                style: s({
                    backgroundColor: void 0 !== _ && _ ? void 0 : o,
                    width: f(t),
                    paddingRight: function(e) {
                        switch (e) {
                            case 1:
                            case 4:
                            case 6:
                                return 1;
                            default:
                                return
                        }
                    }(t)
                }, y)
            }, I), d(t))
        },
        E = function(e) {
            var t = e.text,
                n = e.className,
                o = e.color,
                f = void 0 === o ? a.default.STATUS_DANGER : o,
                d = e.shape,
                _ = void 0 === d ? c.ROUND : d,
                E = e.disableColor,
                p = e.style,
                m = l(e, ["text", "className", "color", "shape", "disableColor", "style"]);
            return r.createElement("div", s({
                className: i()(n, u.textBadge, _),
                style: s({
                    backgroundColor: void 0 !== E && E ? void 0 : f
                }, p)
            }, m), t)
        },
        p = function(e) {
            var t = e.text,
                n = e.className,
                o = l(e, ["text", "className"]);
            return r.createElement(E, s({
                className: i()(u.premiumBadge, n),
                text: t
            }, o))
        },
        m = function(e) {
            var t = e.icon,
                n = e.className,
                o = e.color,
                l = void 0 === o ? a.default.STATUS_DANGER : o,
                f = e.shape,
                d = void 0 === f ? c.ROUND : f,
                _ = e.disableColor,
                E = e.style;
            return r.createElement("div", {
                className: i()(n, u.iconBadge, d),
                style: s({
                    backgroundColor: void 0 !== _ && _ ? void 0 : l
                }, E)
            }, r.createElement(t, {
                className: u.icon
            }))
        },
        y = function(e) {
            var t = e.className,
                n = e.color,
                o = void 0 === n ? a.default.INTERACTIVE_ACTIVE : n,
                f = e.shape,
                d = void 0 === f ? c.ROUND : f,
                _ = e.disableColor,
                E = e.style,
                p = l(e, ["className", "color", "shape", "disableColor", "style"]);
            return r.createElement("div", s({
                className: i()(t, u.circleBadge, d),
                style: s({
                    backgroundColor: void 0 !== _ && _ ? void 0 : o
                }, E)
            }, p))
        }
}