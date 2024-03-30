function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("188104"),
        i = n("898511"),
        a = n("622780"),
        u = n("766063");

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
    var l = function(e) {
        var t = function() {
                var e;
                d && (null == y || null === (e = y.current) || void 0 === e || e.play())
            },
            n = function() {
                var e;
                d && (null == y || null === (e = y.current) || void 0 === e || e.pause())
            },
            l = function() {
                return {
                    maxWidth: p.width,
                    maxHeight: p.height,
                    width: "100%",
                    height: "100%"
                }
            },
            c = e.externalRef,
            f = e.autoPlay,
            d = e.playOnHover,
            _ = e.responsive,
            E = e.mediaLayoutType,
            p = function(e, t) {
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
            }(e, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]),
            m = (0, i.useStateFromStores)([a.default], function() {
                return a.default.useReducedMotion
            }),
            y = r.useRef(null);
        return r.useLayoutEffect(function() {
            return function() {
                var e = y.current;
                null != e && function(e) {
                    e.removeAttribute("src"), Array.from(e.children).forEach(function(e) {
                        (0, o.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, o.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                    });
                    try {
                        e.load()
                    } catch (e) {}
                }(e)
            }
        }, []), r.useLayoutEffect(function() {
            return "function" == typeof c ? (c(null), c(y.current)) : null != c && (c.current = y.current),
                function() {
                    "function" == typeof c ? c(null) : null != c && (c.current = null)
                }
        }, [c, y]), r.createElement("video", s({
            ref: y,
            autoPlay: !m && !d && f,
            onMouseEnter: t,
            onMouseLeave: n,
            onFocus: t,
            onBlur: n,
            style: E === u.MediaLayoutType.MOSAIC ? {
                width: "100%",
                height: "100%",
                maxHeight: "inherit",
                objectFit: "cover"
            } : _ ? l() : {}
        }, p))
    };
    t.default = r.forwardRef(function(e, t) {
        var n, o;
        return r.createElement(l, (n = s({}, e), o = (o = {
            externalRef: t
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n))
    })
}