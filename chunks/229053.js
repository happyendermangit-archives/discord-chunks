function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldTrackMessage: function() {
            return A
        }
    });
    var r, o = n("898511"),
        i = n("727309"),
        a = n("945816"),
        u = n("629815"),
        s = n("217014"),
        l = n("894288"),
        c = n("120447"),
        f = n("251305"),
        d = n("421349"),
        _ = n("582258"),
        E = n("281767");

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = new Set,
        S = new i.SecondaryIndexMap(function(e) {
            var t = e.userId,
                n = e.channelId;
            return [t, n]
        }, function(e) {
            var t = e.userId,
                n = e.channelId;
            return "".concat(n, "-").concat(t)
        }),
        v = new i.SecondaryIndexMap(function(e) {
            var t = e.messageId,
                n = e.channelId,
                r = e.combo.userId;
            return [t, n, r]
        }, function(e) {
            var t = e.messageId,
                n = e.channelId,
                r = e.combo.userId;
            return "".concat(n, "-").concat(r, "-").concat(t)
        }),
        g = function(e) {
            var t = e.userId,
                n = e.channelId;
            return "".concat(t, "-").concat(n)
        };

    function A(e, t, n, r) {
        return !(e !== t || null == n || r.has(n)) && (r.add(n), !0)
    }
    var b = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
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

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(s.default, l.default)
            }
        }, {
            key: "getComboScore",
            value: function(e, t) {
                var n = S.get(g({
                    userId: e,
                    channelId: t
                }));
                return null == n ? 0 : (0, d.getComboScore)(n)
            }
        }, {
            key: "getUserCombo",
            value: function(e, t) {
                return S.get(g({
                    userId: e,
                    channelId: t
                }))
            }
        }, {
            key: "isComboing",
            value: function(e, t) {
                var n, r = this.getUserCombo(e, t);
                return null != r && r.value >= f.default.combosRequiredCount && null != (n = r) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
            }
        }, {
            key: "getMessageCombo",
            value: function(e) {
                var t, n = v.get(e);
                return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
            }
        }, {
            key: "getMostRecentMessageCombo",
            value: function(e) {
                var t = v.values(e);
                return t[t.length - 1]
            }
        }, {
            key: "getUserComboShakeIntensity",
            value: function(e, t, n, r) {
                var o = this.getUserCombo(e, t);
                return null != o ? (0, d.getComboShakeIntensity)(o, r) * n : 0
            }
        }], p(r.prototype, o), i && p(r, i), u
    }(o.default.Store);
    m(b, "displayName", "PoggermodeStore");
    var N = new b(u.default, {
        POGGERMODE_UPDATE_COMBO: function(e) {
            e.type;
            var t = function(e, t) {
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
            }(e, ["type"]);
            if (!f.default.isEnabled()) return !1;
            ! function e(t) {
                var n, r, o, i, u, s, l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    c = S.get(g(t)),
                    f = h(I({}, c, t), {
                        value: null !== (r = null !== (n = t.value) && void 0 !== n ? n : null == c ? void 0 : c.value) && void 0 !== r ? r : 0,
                        multiplier: Math.min(null !== (i = null !== (o = t.multiplier) && void 0 !== o ? o : null == c ? void 0 : c.multiplier) && void 0 !== i ? i : 1, 7),
                        decayInterval: null !== (u = null == c ? void 0 : c.decayInterval) && void 0 !== u ? u : new a.Interval
                    });
                S.set(g(t), f), l && (null === (s = f.decayInterval) || void 0 === s || s.start(1e3, function() {
                    var t = S.get(g(f));
                    if (null != t) {
                        var n, r = f.multiplier !== t.multiplier && f.value !== t.value;
                        t.value <= 0 || r ? (null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e(h(I({}, t), {
                            value: 0,
                            multiplier: 1
                        })), N.emitChange())) : (e(h(I({}, t), {
                            value: t.value - 1
                        })), N.emitChange())
                    }
                }))
            }(t)
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
            var t, n = e.comboMessage;
            if (!f.default.isEnabled()) return !1;
            t = n, v.set(t.messageId, t)
        },
        MESSAGE_CREATE: function(e) {
            var t = e.channelId,
                n = e.message,
                r = n.mentions,
                o = n.author,
                i = n.nonce;
            if (!f.default.isEnabled()) return !1;
            var a = s.default.getId();
            if (!A(null == o ? void 0 : o.id, a, i, T)) return !1;
            var u = S.get(g({
                userId: null !== (l = null == o ? void 0 : o.id) && void 0 !== l ? l : "???",
                channelId: t
            }));
            if (f.default.screenshakeEnabled && f.default.screenshakeEnabledLocations[_.ShakeLocation.MENTION] && null != r && null != r.find(function(e) {
                    return e.id === a
                })) {
                var l, p, m = null != u ? null !== (p = (0, d.getComboShakeIntensity)(u, _.ShakeLevel.LEVEL_4)) && void 0 !== p ? p : .001 : 4 * Math.random();
                return c.ComponentDispatch.dispatch(E.ComponentActions.SHAKE_APP, {
                    duration: 1e3,
                    intensity: m
                }), !0
            }
            return !1
        }
    });
    t.default = N
}