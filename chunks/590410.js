function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("898511"),
        l = n("784184"),
        c = n("396586"),
        f = n("703803"),
        d = n("428264"),
        _ = n("217014"),
        E = n("372844"),
        p = n("62957"),
        m = n("689381"),
        y = n("264437"),
        I = n("733608"),
        h = n("7612"),
        O = n("899517"),
        T = n("731616"),
        S = n("941504"),
        v = n("403513");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e) {
        if (Array.isArray(e)) return e
    }

    function b() {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
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

    function R(e, t) {
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

    function C(e, t) {
        return A(e) || function(e, t) {
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
        }(e, t) || D(e, t) || b()
    }

    function P(e) {
        return A(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || D(e) || b()
    }

    function D(e, t) {
        if (e) {
            if ("string" == typeof e) return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
        }
    }
    var L = i.memo(function(e) {
        var t = e.user,
            n = e.onClose,
            r = e.analyticsLocation,
            o = e.maxGuilds,
            a = void 0 === o ? 2 : o,
            s = (0, h.useMutualGuilds)(t),
            f = (0, c.default)().analyticsLocations,
            _ = (0, y.useUserProfileAnalyticsContext)(),
            p = _.guildId,
            m = _.channelId,
            I = _.messageId,
            g = _.roleId,
            A = i.useMemo(function() {
                var e;
                return null !== (e = null == s ? void 0 : s.map(function(e) {
                    return e.guild
                })) && void 0 !== e ? e : []
            }, [s]),
            b = i.useMemo(function() {
                return S.default.Messages.USER_PROFILE_MUTUAL_GUILDS_COUNT.format({
                    count: A.length
                })
            }, [A]),
            C = i.useCallback(function() {
                (0, O.openUserProfileModal)({
                    userId: t.id,
                    guildId: null != p ? p : void 0,
                    channelId: null != m ? m : void 0,
                    messageId: null != I ? I : void 0,
                    roleId: null != g ? g : void 0,
                    section: T.UserProfileSections.MUTUAL_GUILDS,
                    sourceAnalyticsLocations: f,
                    analyticsLocation: r
                }), null == n || n()
            }, [r, f, n, t.id, p, m, I, g]);
        return null == A || 0 === A.length ? null : i.createElement(l.Tooltip, {
            text: S.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP
        }, function(e) {
            return i.createElement(l.Clickable, R(N({}, e), {
                onClick: C,
                className: u()(v.avatarAndTextContainer, v.serverContainer)
            }), i.createElement("div", {
                className: v.__invalid_avatars
            }, i.createElement(d.default, {
                maxGuilds: a,
                guilds: A,
                size: E.default.Sizes.SMOL,
                hideOverflowCount: !0,
                disableGuildNameTooltip: !0
            })), i.createElement(l.Text, {
                className: v.itemizedListText,
                variant: "text-sm/normal",
                color: "interactive-normal"
            }, b))
        })
    });
    (r = o || (o = {}))[r.NOT_CHECKED = 0] = "NOT_CHECKED", r[r.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", r[r.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", r[r.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
    var M = i.memo(function(e) {
            var t = e.user,
                n = e.hasFetchedFriends,
                r = e.mutualFriends,
                o = e.onClose,
                a = e.analyticsLocation,
                s = e.maxFriends,
                d = void 0 === s ? 2 : s,
                _ = (0, c.default)().analyticsLocations,
                E = (0, y.useUserProfileAnalyticsContext)(),
                m = E.guildId,
                I = E.channelId,
                h = E.messageId,
                g = E.roleId,
                A = i.useMemo(function() {
                    var e;
                    return null !== (e = null == r ? void 0 : r.map(function(e) {
                        return e.user
                    })) && void 0 !== e ? e : []
                }, [r]),
                b = i.useRef(null),
                D = C(i.useState(!1), 2),
                L = D[0],
                M = D[1],
                U = C(i.useState(0), 2),
                w = U[0],
                k = U[1],
                G = i.useCallback(function() {
                    if (null != b.current) {
                        var e = b.current.clientHeight > 19;
                        k(function(t) {
                            switch (t) {
                                case 0:
                                    return e ? 2 : 1;
                                case 1:
                                    return M(!e), e ? 2 : 1;
                                case 2:
                                    return M(!e), e ? 3 : 2;
                                case 3:
                                    return M(!0), 3
                            }
                        })
                    }
                }, []),
                B = i.useCallback(function() {
                    (0, O.openUserProfileModal)({
                        userId: t.id,
                        guildId: null != m ? m : void 0,
                        channelId: null != I ? I : void 0,
                        messageId: null != h ? h : void 0,
                        roleId: null != g ? g : void 0,
                        section: T.UserProfileSections.MUTUAL_FRIENDS,
                        sourceAnalyticsLocations: _,
                        analyticsLocation: a
                    }), null == o || o()
                }, [a, _, o, t.id, m, I, h, g]),
                j = i.useMemo(function() {
                    if (0 === A.length) return null;
                    var e = P(A),
                        t = e[0],
                        n = e[1],
                        r = e.slice(2);
                    return 1 === A.length ? S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_ONE.format({
                        usernameOne: p.default.getName(null, null, t)
                    }) : 2 === A.length ? S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TWO.format({
                        usernameOne: p.default.getName(null, null, t),
                        usernameTwo: p.default.getName(null, null, n)
                    }) : A.length > 2 ? S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY.format({
                        usernameOne: p.default.getName(null, null, t),
                        usernameTwo: p.default.getName(null, null, n),
                        count: r.length
                    }) : void 0
                }, [A]);
            i.useEffect(function() {
                G()
            }, [G, j, w]);
            var F = i.useMemo(function() {
                if (A.length > 0 && w > 1) {
                    var e = P(A),
                        t = e[0],
                        n = e.slice(1);
                    return A.length > 1 && 2 === w ? S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY_SHORT.format({
                        usernameOne: p.default.getName(null, null, t),
                        count: n.length
                    }) : S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_COUNT.format({
                        count: A.length
                    })
                }
                return j
            }, [A, w, j]);
            return n ? 0 === A.length ? null : i.createElement("div", {
                className: u()(!L && v.hideElement),
                ref: b
            }, i.createElement(l.Tooltip, {
                text: S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP
            }, function(e) {
                return i.createElement(l.Clickable, R(N({}, e), {
                    onClick: B,
                    className: u()(v.avatarAndTextContainer, v.__invalid_friendsContainer)
                }), i.createElement("div", {
                    className: v.__invalid_avatars
                }, i.createElement(f.default, {
                    maxUsers: d,
                    users: A,
                    size: l.AvatarSizes.SIZE_16,
                    hideOverflowCount: !0,
                    disableUsernameTooltip: !0
                })), i.createElement(l.Text, {
                    className: v.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal"
                }, F))
            })) : i.createElement("div", {
                className: v.skeleton
            })
        }),
        U = i.memo(function(e) {
            var t = e.user,
                n = e.mutualFriends,
                r = e.mutualGuilds,
                o = e.hasFetchedFriends,
                a = e.onClose,
                s = e.analyticsLocation,
                _ = e.maxIcons,
                p = void 0 === _ ? 3 : _,
                m = (0, c.default)().analyticsLocations,
                I = (0, y.useUserProfileAnalyticsContext)(),
                h = I.guildId,
                g = I.channelId,
                A = I.messageId,
                b = I.roleId,
                P = i.useMemo(function() {
                    var e;
                    return null !== (e = null == n ? void 0 : n.map(function(e) {
                        return e.user
                    })) && void 0 !== e ? e : []
                }, [n]),
                D = i.useMemo(function() {
                    var e;
                    return null !== (e = null == r ? void 0 : r.map(function(e) {
                        return e.guild
                    })) && void 0 !== e ? e : []
                }, [r]),
                L = i.useMemo(function() {
                    return S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
                        count: P.length
                    })
                }, [P]),
                M = i.useMemo(function() {
                    return S.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
                        count: D.length
                    })
                }, [D]),
                U = i.useRef(null),
                w = C(i.useState(!1), 2),
                k = w[0],
                G = w[1],
                B = C(i.useState(!1), 2),
                j = B[0],
                F = B[1],
                V = i.useCallback(function() {
                    if (null != U.current) {
                        var e;
                        F((null === (e = U.current) || void 0 === e ? void 0 : e.clientHeight) > 19), G(!0)
                    }
                }, []),
                H = i.useCallback(function(e) {
                    return function() {
                        (0, O.openUserProfileModal)({
                            userId: t.id,
                            sourceAnalyticsLocations: m,
                            guildId: null != h ? h : void 0,
                            channelId: null != g ? g : void 0,
                            messageId: null != A ? A : void 0,
                            roleId: null != b ? b : void 0,
                            section: e,
                            analyticsLocation: s
                        }), null == a || a()
                    }
                }, [s, m, a, t.id, h, g, A, b]);
            i.useEffect(function() {
                V()
            }, [V, L]);
            var x = P.length > 0,
                Y = D.length > 0;
            return o ? i.createElement("div", {
                className: u()(v.compactItemContainer, !k && v.hideElement),
                ref: U
            }, x && i.createElement(l.Tooltip, {
                text: S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP
            }, function(e) {
                return i.createElement(l.Clickable, R(N({}, e), {
                    onClick: H(T.UserProfileSections.MUTUAL_FRIENDS),
                    className: u()(v.avatarAndTextContainer, v.__invalid_friendsContainer)
                }), i.createElement("div", {
                    className: v.__invalid_avatars
                }, i.createElement(f.default, {
                    maxUsers: p,
                    users: P,
                    size: l.AvatarSizes.SIZE_16,
                    hideOverflowCount: !0,
                    disableUsernameTooltip: !0
                })), i.createElement(l.Text, {
                    className: v.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal"
                }, L))
            }), x && Y && i.createElement("div", {
                "aria-hidden": "true",
                className: v.dotSpacer
            }), Y && i.createElement(l.Tooltip, {
                text: S.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP
            }, function(e) {
                return i.createElement(l.Clickable, R(N({}, e), {
                    onClick: H(T.UserProfileSections.MUTUAL_GUILDS),
                    className: u()(v.avatarAndTextContainer, v.serverContainer)
                }), !j && i.createElement("div", {
                    className: v.__invalid_avatars
                }, i.createElement(d.default, {
                    maxGuilds: p,
                    guilds: D,
                    size: E.default.Sizes.SMOL,
                    hideOverflowCount: !0,
                    disableGuildNameTooltip: !0
                })), i.createElement(l.Text, {
                    className: v.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal"
                }, M))
            })) : i.createElement("div", {
                className: v.skeleton
            })
        });
    t.default = i.memo(function(e) {
        var t, n, r = e.user,
            o = e.onClose,
            a = e.className,
            f = e.sourceAnaylticsLocations,
            d = (0, c.default)().analyticsLocations,
            E = null !== (n = null !== (t = null == f ? void 0 : f[0]) && void 0 !== t ? t : null == d ? void 0 : d[0]) && void 0 !== n ? n : null,
            p = (0, s.useStateFromStores)([_.default], function() {
                return _.default.getId()
            }),
            y = r.id === p,
            O = r.bot || y,
            T = (0, m.useProfileMutualsExperiment)({
                autoTrackExposure: !1,
                location: E,
                disable: O
            }),
            g = T.compact,
            A = T.enabled,
            b = (0, h.useMutualGuilds)(r),
            N = C((0, I.useMutualFriends)(r), 2),
            R = N[0],
            P = N[1];
        if (!A || O) return null;
        var D = (null == P || 0 === P.length) && 0 === b.length;
        return R && D ? null : i.createElement("div", {
            className: u()(v.mainContainer, a)
        }, i.createElement(l.Heading, {
            variant: "eyebrow",
            className: v.__invalid_title
        }, S.default.Messages.USER_PROFILE_MUTUALS_TITLE), g && i.createElement(U, {
            user: r,
            mutualFriends: P,
            hasFetchedFriends: R,
            mutualGuilds: b,
            onClose: o
        }), !g && i.createElement(i.Fragment, null, i.createElement(M, {
            user: r,
            mutualFriends: P,
            hasFetchedFriends: R,
            onClose: o
        }), i.createElement(L, {
            user: r,
            mutualGuilds: b,
            onClose: o
        })))
    })
}