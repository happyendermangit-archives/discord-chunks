function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearVoiceChannelEffectForUser: function() {
            return v
        }
    });
    var r, o, i, a, u, s = n("392711"),
        l = n("898511"),
        c = n("751848"),
        f = n("629815"),
        d = n("388990"),
        _ = n("781984"),
        E = n("656462");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        return function(e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var O = [],
        T = {},
        S = [],
        v = function(e) {
            null != e && f.default.dispatch({
                type: "VOICE_CHANNEL_EFFECT_CLEAR",
                userId: e
            })
        },
        g = [],
        A = 10 * d.default.Millis.SECOND,
        b = (0, s.debounce)(function() {
            var e = (0, _.getEffectAnnouncement)(S);
            c.AccessibilityAnnouncer.announce(e, "polite"), S = []
        }, 500),
        N = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && I(e, t)
            }(s, e);
            var t, n, r, o, i, u = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = y(t);
                if (n) {
                    var a = y(this).constructor;
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
                }(this, s), u.apply(this, arguments)
            }
            return r = s, o = [{
                key: "recentlyUsedEmojis",
                get: function() {
                    return O
                }
            }, {
                key: "isOnCooldown",
                get: function() {
                    return null != a && new Date < a
                }
            }, {
                key: "effectCooldownEndTime",
                get: function() {
                    return a
                }
            }, {
                key: "getEffectForUserId",
                value: function(e) {
                    return T[e]
                }
            }], m(r.prototype, o), i && m(r, i), s
        }(l.default.Store);
    i = "VoiceChannelEffectsStore", (o = "displayName") in(r = N) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new N(f.default, {
        VOICE_CHANNEL_EFFECT_CLEAR: function(e) {
            var t = e.userId;
            null != T[t] && delete T[t]
        },
        VOICE_CHANNEL_EFFECT_RECENT_EMOJI: function(e) {
            var t = e.emoji;
            null != t && (O.unshift(t), (O = (0, s.uniqBy)(O, "name")).length > E.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && O.pop())
        },
        VOICE_CHANNEL_EFFECT_SEND: function(e) {
            var t = e.emoji,
                n = e.userId,
                r = e.animationType;
            null != t && null != r && (T[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: r
            }, S = h(S).concat([{
                emojiName: t.name,
                userId: n
            }]), b())
        },
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: function() {
            var e = new Date;
            if ((g = [e].concat(h(g)).slice(0, 20)).length >= 20) {
                var t = g[g.length - 1],
                    n = e.getTime() - t.getTime();
                n < A && (a = new Date(e.getTime() + A - n))
            }
        },
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: function(e) {
            var t = e.cooldownEndsAtMs;
            a = new Date(Date.now() + t)
        }
    })
}