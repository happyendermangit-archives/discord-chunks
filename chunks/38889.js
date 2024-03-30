function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("945816"),
        a = n("807471"),
        u = n("217014"),
        s = n("388990"),
        l = n("423284"),
        c = n("71823"),
        f = n("656833"),
        d = n("699307");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function I(e, t) {
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
        }(e, t) || h(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(e, t) {
        if (e) {
            if ("string" == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }
    }
    var O = 15 * s.default.Millis.SECOND,
        T = 15 * s.default.Millis.SECOND,
        S = ["\uD83C\uDDE9", "\uD83C\uDDF4", "\uD83C\uDDF9", "\uD83C\uDDE6"],
        v = S.length,
        g = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return "".concat(e, ":").concat(t, ":").concat(n)
        },
        A = new i.Timeout,
        b = [],
        N = {},
        R = (0, l.createSound)("highfive_whistle", "highfive_whistle", .6),
        C = (0, l.createSound)("highfive_clap", "highfive_clap", .6);

    function P(e) {
        var t, n = e.emoji,
            r = e.channelId,
            a = e.userId,
            s = u.default.getId(),
            l = f.default.getEnabled();
        if (null != n) {
            if (l && (0, d.default)(n.name)) return function(e, t, n) {
                var r, o = g(t, n);
                if (null == f.default.getWaitingHighFive(n, t)) {
                    var a = I(null !== (r = Object.entries(N).find(function(e) {
                            return I(e, 1)[0] !== o
                        })) && void 0 !== r ? r : [], 2),
                        u = a[0],
                        s = a[1];
                    if (null != u && null != s) s.cancel(), C.play(), delete N[u], (0, c.completeHighFive)(u.split(":")[0], t, n, e);
                    else {
                        (0, c.queueHighFive)(e, t, n), R.play();
                        var l = new i.DelayedCall(T, function() {
                            delete N[t], (0, c.removeHighFive)(t, n)
                        });
                        N[t] = l, l.delay()
                    }
                }
            }(n.name, a, r);
            if (a === s) {
                ;
                b = ((function(e) {
                    if (Array.isArray(e)) return _(e)
                })(t = b) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || h(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([n.name]).slice(-1 * v), o().isEqual(b, S) ? (R.play(), A.stop(), b = [], (0, c.setHighFiveEnabled)(!l)) : A.start(O, function() {
                    return b = []
                })
            }
        }
    }

    function D(e) {
        var t = e.completingUserId,
            n = e.waitingUserId,
            r = e.channelId,
            o = g(t + n, r, !0);
        N[o] = new i.DelayedCall(550, function() {
            delete N[o], (0, c.clearCompletedHighFive)(t, n, r)
        }), N[o].delay()
    }
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : E(e)
        });

        function u() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), e = a.apply(this, arguments), t = E(e), n = "actions", r = {
                VOICE_CHANNEL_EFFECT_SEND: P,
                HIGH_FIVE_COMPLETE: D
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return r = u, o = [{
            key: "_terminate",
            value: function() {
                Object.values(N).forEach(function(e) {
                    return e.cancel()
                }), N = {}
            }
        }], p(r.prototype, o), i && p(r, i), u
    }(a.default);
    t.default = new L
}