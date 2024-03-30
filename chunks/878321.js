function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("898511"),
        c = n("242880"),
        f = n("629815"),
        d = n("935741"),
        _ = n("306912");

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = "hideSuppressWarning",
        I = !1,
        h = !0,
        O = !1,
        T = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(s, e);
            var t, n, r, o, i, a = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = p(t);
                if (n) {
                    var a = p(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function s() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), a.apply(this, arguments)
            }
            return r = s, o = [{
                key: "initialize",
                value: function() {
                    O = c.Storage.get(y) || O
                }
            }, {
                key: "isAFKChannel",
                value: function() {
                    var e = d.default.getChannel(u);
                    if (null == e) return !1;
                    var t = _.default.getGuild(e.getGuildId());
                    return null != t && e.id === t.afkChannelId
                }
            }, {
                key: "shouldShowWarning",
                value: function() {
                    var e;
                    return !(null === (e = d.default.getChannel(u)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !h
                }
            }], E(r.prototype, o), i && E(r, i), s
        }(l.default.Store);
    i = "PermissionSpeakStore", (o = "displayName") in(r = T) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new T(f.default, {
        CONNECTION_OPEN: function(e) {
            a = e.sessionId, I = !1
        },
        CONNECTION_CLOSED: function() {
            a = null, u = null, h = !0
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                return a !== t.sessionId ? e : (I !== t.suppress && (h = !(I = t.suppress)), u !== t.channelId && (u = t.channelId, h = !I), (O || null == t.channelId) && (h = !0), !0)
            }, !1)
        },
        PERMISSION_CLEAR_SUPPRESS_WARNING: function(e) {
            var t = e.forever;
            h = !0, t && (O = !0, c.Storage.set(y, O))
        }
    })
}