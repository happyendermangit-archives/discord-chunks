function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("207561"),
        i = n("898511"),
        a = n("169850"),
        u = n("471559"),
        s = n("398975"),
        l = n("646220"),
        c = n("957808"),
        f = n("29884"),
        d = n("930949"),
        _ = n("208454"),
        E = n("420823"),
        p = n("687814"),
        m = n("281767"),
        y = n("142680"),
        I = n("68735");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e, t) {
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
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function S(e, t, n) {
        var h, S, v, g, A, b, N, R, C, P = e.channel,
            D = e.type,
            L = T(r.useState(function() {
                return (0, E.createInitialState)()
            }), 2),
            M = L[0],
            U = L[1],
            w = (0, o.useForceUpdate)(),
            k = (0, i.useStateFromStores)([c.default], function() {
                if (null != e.guild) {
                    var t;
                    return null != c.default.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, y.CLYDE_AI_USER_ID)
                }
                return !1
            }),
            G = (0, l.useClydeEnabled)(e.guild, e.channel) && !k && !(0, l.canUseCustomClydeProfiles)(e.guild),
            B = (0, i.useStateFromStores)([c.default, _.default], function() {
                var e, t, n = _.default.getCurrentUser();
                return null !== (t = null != P.guild_id && null != n ? null === (e = c.default.getMember(P.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
            }),
            j = (0, i.useStateFromStoresObject)([f.default, d.default], function() {
                return {
                    canMentionEveryone: P.isPrivate() || B || D === s.ChatInputTypes.RULES_INPUT || f.default.can(m.Permissions.MENTION_EVERYONE, P),
                    hidePersonalInformation: d.default.hidePersonalInformation
                }
            }, [P, D, B]),
            F = j.canMentionEveryone,
            V = j.hidePersonalInformation,
            H = (0, i.useStateFromStoresObject)([u.default], function() {
                return {
                    activeCommand: u.default.getActiveCommand(P.id),
                    activeCommandOption: u.default.getActiveOption(P.id)
                }
            }),
            x = H.activeCommand,
            Y = H.activeCommandOption,
            W = (0, p.default)({
                navId: "channel-autocomplete",
                scrollerRef: n,
                state: M,
                onFocus: function(e) {
                    return X.setSelectedIndex(e)
                }
            }),
            K = null === (v = e.editorRef.current) || void 0 === v ? void 0 : v.getCurrentWord();
        var z = (h = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        O(e, t, n[t])
                    })
                }
                return e
            }({}, e), S = (S = {
                navigator: W,
                activeCommand: x,
                activeCommandOption: Y,
                canMentionUsers: null !== (N = null === (g = D.users) || void 0 === g ? void 0 : g.allowMentioning) && void 0 !== N && N,
                canMentionEveryone: F,
                canMentionClyde: G,
                hidePersonalInformation: V,
                hideMentionDescription: D === s.ChatInputTypes.RULES_INPUT,
                emojiIntention: D === s.ChatInputTypes.RULES_INPUT ? I.EmojiIntention.COMMUNITY_CONTENT : I.EmojiIntention.CHAT,
                currentWord: null !== (R = null == K ? void 0 : K.word) && void 0 !== R ? R : "",
                currentWordIsAtStart: (null == K ? void 0 : K.isAtStart) === !0,
                optionText: null != Y ? (0, a.getString)(O({}, Y.name, null !== (C = null === (A = e.editorRef.current) || void 0 === A ? void 0 : A.getCurrentCommandOptionValue()) && void 0 !== C ? C : []), Y.name) : ""
            }, S), Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(S)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(S)).forEach(function(e) {
                Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(S, e))
            }), h),
            X = T(r.useState(function() {
                return new E.default(z)
            }), 1)[0];
        return r.useEffect(function() {
            X.updateProps(z)
        }), r.useImperativeHandle(t, function() {
            return X
        }, [X]), r.useEffect(function() {
            var e = function(e) {
                return U(e)
            };
            return X.on("change", e), X.on("update", w),
                function() {
                    X.off("change", e), X.off("update", w)
                }
        }, [w, X]), r.useEffect(function() {
            var e = null === (i = M.query) || void 0 === i ? void 0 : i.typeInfo.stores;
            if (null != e) {
                var t = function() {
                        return X.queryResults()
                    },
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a, u = e[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) a.value.addChangeListener(t)
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != u.return && u.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return function() {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) i.value.removeChangeListener(t)
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                }
            }
        }, [X, null === (b = M.query) || void 0 === b ? void 0 : b.typeInfo]), [M, X, W]
    }
}