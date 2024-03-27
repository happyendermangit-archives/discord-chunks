function(e, t, n) {
    "use strict";
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n("512722"),
        a = n("379334"),
        o = n("603068"),
        s = n("232027"),
        u = n("257405"),
        c = n("303544"),
        l = n("514312"),
        d = n("396459"),
        f = n("785269"),
        p = n("597971");
    n("434429");
    var h = n("71626"),
        m = n("434407"),
        g = n("182925"),
        _ = function(e, t, n) {
            if (e instanceof s) {
                var i = r({}, t),
                    a = r({}, t);
                for (var o in t) {
                    var u = t[o],
                        c = u.x,
                        l = u.y;
                    void 0 !== c && void 0 !== l && (i[o] = c, a[o] = l)
                }
                return y([n(e.x, i), n(e.y, a)], {
                    stopTogether: !1
                })
            }
            return null
        },
        b = function e(t, n) {
            return _(t, n, e) || {
                start: function(e) {
                    t.stopTracking(), n.toValue instanceof a ? t.track(new f(t, n.toValue, h, n, e)) : t.animate(new h(n), e)
                },
                stop: function() {
                    t.stopAnimation()
                }
            }
        },
        v = function(e) {
            var t = 0;
            return {
                start: function(n) {
                    0 === e.length ? n && n({
                        finished: !0
                    }) : e[t].start(function r(i) {
                        if (!i.finished || ++t === e.length) {
                            n && n(i);
                            return
                        }
                        e[t].start(r)
                    })
                },
                stop: function() {
                    t < e.length && e[t].stop()
                }
            }
        },
        y = function(e, t) {
            var n = 0,
                r = {},
                i = !(t && !1 === t.stopTogether),
                a = {
                    start: function(t) {
                        if (n === e.length) {
                            t && t({
                                finished: !0
                            });
                            return
                        }
                        e.forEach(function(o, s) {
                            var u = function(o) {
                                if (r[s] = !0, ++n === e.length) {
                                    n = 0, t && t(o);
                                    return
                                }!o.finished && i && a.stop()
                            };
                            o ? o.start(u) : u({
                                finished: !0
                            })
                        })
                    },
                    stop: function() {
                        e.forEach(function(e, t) {
                            r[t] || e.stop(), r[t] = !0
                        })
                    }
                };
            return a
        },
        E = function(e) {
            return b(new o(0), {
                toValue: 0,
                delay: e,
                duration: 0
            })
        };
    e.exports = {
        Value: o,
        ValueXY: s,
        decay: function e(t, n) {
            return _(t, n, e) || {
                start: function(e) {
                    t.stopTracking(), t.animate(new m(n), e)
                },
                stop: function() {
                    t.stopAnimation()
                }
            }
        },
        timing: b,
        spring: function e(t, n) {
            return _(t, n, e) || {
                start: function(e) {
                    t.stopTracking(), n.toValue instanceof a ? t.track(new f(t, n.toValue, g, n, e)) : t.animate(new g(n), e)
                },
                stop: function() {
                    t.stopAnimation()
                }
            }
        },
        add: function(e, t) {
            return new u(e, t)
        },
        multiply: function(e, t) {
            return new c(e, t)
        },
        modulo: function(e, t) {
            return new l(e, t)
        },
        template: function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return new d(e, n)
        },
        delay: E,
        sequence: v,
        parallel: y,
        stagger: function(e, t) {
            return y(t.map(function(t, n) {
                return v([E(e * n), t])
            }))
        },
        event: function(e, t) {
            return function() {
                for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                var s = function e(t, n, r) {
                    if ("number" == typeof n) {
                        i(t instanceof o, "Bad mapping of type " + typeof t + " for key " + r + ", event value must map to AnimatedValue"), t.setValue(n);
                        return
                    }
                    for (var r in i("object" == typeof t, "Bad mapping of type " + typeof t + " for key " + r), i("object" == typeof n, "Bad event of type " + typeof n + " for key " + r), t) e(t[r], n[r], r)
                };
                e.forEach(function(e, t) {
                    s(e, r[t], "arg" + t)
                }), t && t.listener && t.listener.apply(null, r)
            }
        },
        isAnimated: p,
        createAnimatedComponent: n("116461"),
        inject: {
            ApplyAnimatedValues: n("913131").inject,
            InteractionManager: n("974522").inject,
            FlattenStyle: n("872757").inject,
            RequestAnimationFrame: n("648935").inject,
            CancelAnimationFrame: n("530892").inject
        },
        __PropsOnlyForTests: n("114245")
    }
}