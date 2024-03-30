function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityEmoji: function() {
            return C
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("94919"),
        u = n("898511"),
        s = n("784184"),
        l = n("765457"),
        c = n("889083"),
        f = n("162150"),
        d = n("405502"),
        _ = n("27375"),
        E = n("33580"),
        p = n("979821"),
        m = n("376220"),
        y = n("53867"),
        I = n("217014"),
        h = n("935741"),
        O = n("29884"),
        T = n("868447"),
        S = n("665863"),
        v = n("50597"),
        g = n("281767"),
        A = n("478198");

    function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function N(e) {
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
    var R = "14px";

    function C(e) {
        var t = e.emoji,
            n = e.className,
            o = e.animate,
            a = e.hideTooltip,
            u = y.AnimateEmoji.useSetting(),
            c = null != t.id ? ":".concat(t.name, ":") : _.default.translateSurrogatesToInlineEmoji(t.name),
            f = {
                className: i()(A.emoji, n),
                emojiId: t.id,
                emojiName: t.name,
                autoplay: !0,
                animated: !!(t.animated && u && (void 0 === o || o))
            };
        return a ? r.createElement(l.default, f) : r.createElement(s.Tooltip, {
            text: c
        }, function(e) {
            return r.createElement(l.default, N({}, e, f))
        })
    }
    var P = function(e) {
        var t, n, o = e.className,
            a = e.text,
            u = r.useRef(null),
            l = r.useRef(null);
        var c = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = c[0],
            d = c[1];
        return r.useLayoutEffect(function() {
            var e = u.current,
                t = l.current;
            null != e && null != t && d(!(e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight))
        }, [a]), r.createElement(s.Tooltip, {
            text: f || null == a || "" === a ? null : a,
            delay: 150,
            "aria-label": !1
        }, function(e) {
            var t, n;
            return r.createElement(r.Fragment, null, r.createElement("div", (t = N({}, e), n = (n = {
                className: o,
                ref: u
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), a), r.createElement("div", {
                className: i()(A.textRuler, o),
                ref: l,
                "aria-hidden": !0
            }, a))
        })
    };
    t.default = function(e) {
        var t, n = e.activities,
            o = e.applicationStream,
            i = e.className,
            s = e.textClassName,
            l = e.emojiClassName,
            _ = e.animate,
            y = e.hideTooltip,
            b = e.hideEmoji,
            N = e.user,
            D = e.hasQuest,
            L = null != n ? n.find(function(e) {
                return e.type === g.ActivityTypes.CUSTOM_STATUS
            }) : null,
            M = (0, u.useStateFromStores)([I.default], function() {
                return I.default.getId() === (null == N ? void 0 : N.id)
            }),
            U = (0, u.useStateFromStores)([p.default], function() {
                return M ? p.default.getHangStatusActivity() : null != n ? n.find(function(e) {
                    return e.type === g.ActivityTypes.HANG_STATUS
                }) : null
            }),
            w = (0, u.useStateFromStores)([S.default, h.default], function() {
                var e;
                return null != U && null != N ? h.default.getChannel(null === (e = S.default.getVoiceStateForUser(N.id)) || void 0 === e ? void 0 : e.channelId) : null
            }),
            k = E.HangStatusExperiment.useExperiment({
                guildId: null == w ? void 0 : w.guild_id,
                location: "ActivityStatus"
            }, {
                autoTrackExposure: !1
            }).enableHangStatus,
            G = (0, d.useColorValue)(g.Color.BRAND_345),
            B = null,
            j = k && null != U && O.default.can(g.Permissions.CONNECT, w);
        j ? B = r.createElement(m.default, {
            className: l,
            hangStatusActivity: U
        }) : null != L && null != L.emoji && !(void 0 !== b && b) && (B = r.createElement(C, {
            emoji: L.emoji,
            animate: void 0 === _ || _,
            hideTooltip: void 0 !== y && y,
            className: l
        }));
        var F = (0, u.useStateFromStores)([T.default], function() {
                return null != N ? T.default.getStatus(N.id) : null
            }),
            V = null !== F && [g.StatusTypes.OFFLINE, g.StatusTypes.INVISIBLE].includes(F),
            H = null === (t = (0, f.default)(n, o, void 0, j)) || void 0 === t ? void 0 : t.activityText,
            x = null != H && H.length > 0;
        return V || null == B && !x ? null : r.createElement("div", {
            className: i
        }, B, r.createElement(P, {
            text: H,
            className: s
        }), D && r.createElement(a.QuestsIcon, {
            className: A.questsIcon,
            height: R,
            width: R,
            color: G.hex
        }), null != n && n.some(function(e) {
            return (0, c.default)(e, j)
        }) ? r.createElement(v.default, {
            width: 16,
            height: 16,
            className: A.icon
        }) : null)
    }
}