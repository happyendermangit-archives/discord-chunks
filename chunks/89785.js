function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileRecentGamesSection: function() {
            return v
        },
        UserProfileRecentGamesThemedSection: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("447515"),
        s = n("231718"),
        l = n("784184"),
        c = n("342942"),
        f = n("61711"),
        d = n("802989"),
        _ = n("217014"),
        E = n("299529"),
        p = n("906885"),
        m = n("877987"),
        y = n("941504"),
        I = n("458186");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e) {
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

    function T(e) {
        var t, n, o = e.game,
            i = e.isSharedGame,
            d = (0, a.useStateFromStores)([c.default], function() {
                return c.default.getApplication(o.applicationId)
            }),
            _ = r.useMemo(function() {
                return null == o.duration || 0 === o.duration ? (0, f.getLastPlayedTimestamp)(o, !0) : "".concat((0, f.getLastPlayedTimestamp)(o, !0), " — ").concat((0, f.getTimePlayedLastWeek)(o))
            }, [o]),
            p = r.useRef(null);
        var m = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            T = m[0],
            S = m[1];
        if (r.useEffect(function() {
                var e = p.current;
                null != e && null != e.offsetWidth && null != e.scrollWidth && S(e.offsetWidth < e.scrollWidth)
            }, []), null == d) return null;
        var v = E.default.getApplicationIconURL({
            id: d.id,
            icon: d.icon,
            size: 40
        });
        return r.createElement("div", {
            className: I.recentGameContainer
        }, r.createElement("div", {
            className: I.recentGameIcon
        }, null != v && r.createElement("img", {
            alt: "",
            "aria-hidden": !0,
            src: v,
            width: 40,
            height: 40
        })), r.createElement("div", {
            className: I.recentGameDetails
        }, r.createElement("div", {
            className: I.recentGameTitleContainer
        }, r.createElement(l.Tooltip, {
            text: d.name,
            color: l.Tooltip.Colors.PRIMARY,
            shouldShow: T
        }, function(e) {
            var t, n;
            return r.createElement("span", (t = O({
                ref: p
            }, e), n = (n = {
                className: I.recentGameTitle
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), d.name)
        }), i && r.createElement(l.Tooltip, {
            text: y.default.Messages.USER_RECENT_GAMES_YOU_BOTH_PLAY,
            color: l.Tooltip.Colors.PRIMARY
        }, function(e) {
            return r.createElement("div", O({
                className: I.sharedGameIcon
            }, e), r.createElement(s.SparklesIcon, {
                height: 16,
                width: 16,
                color: u.default.colors.INTERACTIVE_MUTED
            }))
        })), r.createElement(l.Text, {
            variant: "text-sm/normal",
            color: "header-secondary"
        }, _)))
    }
    var S = r.memo(function(e) {
        var t = e.userId,
            n = e.containerClassName,
            o = e.wrapChildren,
            a = (0, d.useUserRecentGames)(t),
            u = a.recentGames,
            s = a.currentUserApplicationIds,
            l = a.isFetching,
            c = a.isError;
        if (l || c || null == u || 0 === u.length) return null;
        var f = r.createElement("div", {
            className: i()(I.recentGames, n)
        }, null == u ? void 0 : u.map(function(e) {
            var n, o, i;
            return r.createElement(T, {
                key: e.lastSessionId,
                game: e,
                isSharedGame: (n = t, o = s, i = e.applicationId, n !== _.default.getId() && o.has(i))
            })
        }));
        return null != o ? r.createElement(r.Fragment, null, o(f)) : f
    });

    function v(e) {
        var t = e.userId,
            n = e.containerClassName,
            o = r.useCallback(function(e) {
                return r.createElement(m.default, null, r.createElement(l.Heading, {
                    variant: "eyebrow",
                    className: I.recentGamesHeading
                }, y.default.Messages.RECENT_GAMES), e)
            }, []);
        return r.createElement(S, {
            userId: t,
            containerClassName: n,
            wrapChildren: o
        })
    }

    function g(e) {
        var t = e.userId,
            n = e.containerClassName,
            o = r.useCallback(function(e) {
                return r.createElement(p.default.Inner, null, r.createElement(m.default, null, r.createElement(l.Heading, {
                    variant: "eyebrow",
                    className: I.recentGamesHeading
                }, y.default.Messages.RECENT_GAMES), e))
            }, []);
        return r.createElement(S, {
            userId: t,
            containerClassName: n,
            wrapChildren: o
        })
    }
    t.default = S
}