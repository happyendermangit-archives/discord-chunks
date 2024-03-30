function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlowmodeType: function() {
            return o
        }
    });
    var r, o, i, a, u = n("898511"),
        s = n("945816"),
        l = n("629815"),
        c = n("388990"),
        f = n("935741"),
        d = n("29884"),
        _ = n("281767");

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    }(r = o || (o = {}))[r.SendMessage = 0] = "SendMessage", r[r.CreateThread = 1] = "CreateThread";
    var I = (p(i = {}, 0, {}), p(i, 1, {}), i);

    function h(e, t, n) {
        if (function(e, t) {
                null != I[t][e.id] && (I[t][e.id].timer.stop(), delete I[t][e.id])
            }(e, t), ! function(e, t) {
                return 0 === t ? d.default.can(_.Permissions.MANAGE_CHANNELS, e) || d.default.can(_.Permissions.MANAGE_MESSAGES, e) : d.default.can(_.Permissions.MANAGE_THREADS, e)
            }(e, t)) {
            if (!(n <= 0)) {
                var r = n + Date.now();
                I[t][e.id] = {
                    rateLimitPerUser: e.rateLimitPerUser,
                    cooldownMs: n,
                    cooldownEndTimestamp: r,
                    timer: new s.Timeout
                }, I[t][e.id].timer.start(1e3, function() {
                    l.default.dispatch({
                        type: "SLOWMODE_SET_COOLDOWN",
                        channelId: e.id,
                        slowmodeType: t,
                        cooldownMs: Math.max(r - Date.now(), 0)
                    })
                }, !0)
            }
        }
    }

    function O(e, t) {
        var n = f.default.getChannel(e);
        if (null == n) return !1;
        h(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * c.default.Millis.SECOND + 100)
    }

    function T(e) {
        var t = e.file,
            n = f.default.getChannel(t.channelId);
        return null != n && h(n, 0, 0)
    }
    var S = function(e) {
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
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(f.default)
            }
        }, {
            key: "getSlowmodeCooldownGuess",
            value: function(e, t) {
                var n = I[null != t ? t : 0][e];
                return null != n ? n.cooldownMs : 0
            }
        }], E(r.prototype, o), i && E(r, i), u
    }(u.default.Store);
    p(S, "displayName", "SlowmodeStore"), t.default = new S(l.default, {
        SLOWMODE_RESET_COOLDOWN: function(e) {
            return O(e.channelId, e.slowmodeType)
        },
        SLOWMODE_SET_COOLDOWN: function(e) {
            var t = e.channelId,
                n = e.slowmodeType,
                r = e.cooldownMs,
                o = f.default.getChannel(t);
            if (null == o) return !1;
            h(o, n, 0 === r ? 0 : r + 100)
        },
        UPLOAD_START: function(e) {
            return O(e.channelId, 0)
        },
        UPLOAD_FAIL: T,
        UPLOAD_CANCEL_REQUEST: T,
        CHANNEL_UPDATES: function(e) {
            var t = e.channels;
            [0, 1].forEach(function(e) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u, s = i.value,
                            l = I[e][s.id],
                            f = s.rateLimitPerUser;
                        if (null != l && l.rateLimitPerUser !== f) {
                            var d = Math.min(null !== (u = null == l ? void 0 : l.cooldownMs) && void 0 !== u ? u : 0, f * c.default.Millis.SECOND);
                            h(s, e, d)
                        }
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
            })
        },
        LOGOUT: function() {
            [0, 1].forEach(function(e) {
                Object.keys(I[e]).forEach(function(t) {
                    return I[e][t].timer.stop()
                }), I[e] = {}
            })
        }
    })
}