function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("718017"),
        l = n("898511"),
        c = n("622780"),
        f = n("320173");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var E = {
        mass: 10,
        tension: 550,
        friction: 140
    };

    function p(e) {
        var t = e.className,
            n = e.pageMultiplier,
            o = (0, l.useStateFromStores)([c.default], function() {
                return c.default.useReducedMotion
            }),
            a = _(r.useState({
                x: 0,
                y: 0
            }), 2),
            d = a[0],
            p = a[1],
            m = r.useMemo(function() {
                return u().throttle(function(e) {
                    !o && p({
                        x: (window.innerWidth - e.pageX * n) / 90,
                        y: (window.innerHeight - e.pageY * n) / 90
                    })
                }, 20)
            }, [n, o]);
        r.useEffect(function() {
            return window.addEventListener("mousemove", m),
                function() {
                    return window.removeEventListener("mousemove", m)
                }
        }, [m]);
        var y = _((0, s.useSpring)(function() {
                return {
                    x: 0,
                    y: 0,
                    config: E
                }
            }), 2),
            I = y[0],
            h = y[1];
        return r.useEffect(function() {
            h({
                x: d.x,
                y: d.y
            })
        }, [d.x, d.y, h]), r.createElement(s.animated.div, {
            style: {
                transform: (0, s.to)([I.x, I.y], function(e, t) {
                    return "translate3d(".concat(e, "px, ").concat(t, "px, 0)")
                })
            },
            className: i()(f.background, t)
        })
    }
}