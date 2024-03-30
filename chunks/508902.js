function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("322997"),
        l = n("396586"),
        c = n("894538"),
        f = n("225098"),
        d = n("930949"),
        _ = n("701958"),
        E = n("264437"),
        p = n("903716"),
        m = n("671764"),
        y = n("899517"),
        I = n("877987"),
        h = n("731616"),
        O = n("281767"),
        T = n("941504"),
        S = n("424860"),
        v = n("989171");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e) {
        var t, n, o, A, b, N, R = e.userId,
            C = e.channelId,
            P = e.guild,
            D = e.theme,
            L = e.onClose,
            M = e.className,
            U = (0, l.default)().analyticsLocations,
            w = (0, E.useUserProfileAnalyticsContext)(),
            k = w.messageId,
            G = w.roleId,
            B = (0, c.default)(P, R, C);
        var j = (t = r.useState(new Set), n = 2, function(e) {
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
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            F = j[0],
            V = j[1],
            H = (0, a.useStateFromStores)([p.default], function() {
                return p.default.getUserProfile(R)
            }),
            x = null !== (o = null == H ? void 0 : H.connectedAccounts) && void 0 !== o ? o : [],
            Y = null !== (A = null == H ? void 0 : H.applicationRoleConnections) && void 0 !== A ? A : [],
            W = (0, a.useStateFromStores)([d.default], function() {
                return d.default.hidePersonalInformation
            }),
            K = (0, a.useStateFromStores)([f.default], function() {
                return f.default.locale
            });
        if (r.useEffect(function() {
                (null == P ? void 0 : P.id) != null && (null == B ? void 0 : B.id) != null && s.default.fetchGuildRoleConnectionsEligibility(P.id, B.id).then(function(e) {
                    var t = new Set,
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value,
                                s = !0,
                                l = !1,
                                c = void 0;
                            try {
                                for (var f, d = u[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                                    var _ = f.value.connection_type;
                                    t.add(_)
                                }
                            } catch (e) {
                                l = !0, c = e
                            } finally {
                                try {
                                    !s && null != d.return && d.return()
                                } finally {
                                    if (l) throw c
                                }
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
                    V(t)
                })
            }, [null == P ? void 0 : P.id, null == B ? void 0 : B.id]), W || null == B) return null;
        var z = Array.from(F).map(function(e) {
            var t = x.find(function(t) {
                return t.type === e
            });
            return null == t ? null : r.createElement(m.ConnectedUserAccount, {
                key: "".concat(t.type, ":").concat(t.id),
                connectedAccount: t,
                theme: D,
                locale: K,
                userId: R
            })
        }).filter(function(e) {
            return null != e
        });
        return (z.length > 0 && (b = r.createElement(r.Fragment, null, r.createElement(u.Heading, {
            variant: "eyebrow",
            className: v.title
        }, T.default.Messages.CONNECTIONS), r.createElement("div", {
            className: i()(S.connectionsContainer, M)
        }, z, r.createElement(u.Clickable, {
            onClick: function() {
                (0, y.openUserProfileModal)({
                    userId: R,
                    channelId: C,
                    guildId: null == P ? void 0 : P.id,
                    messageId: null != k ? k : void 0,
                    roleId: null != G ? G : void 0,
                    section: h.UserProfileSections.USER_INFO_CONNECTIONS,
                    sourceAnalyticsLocations: U,
                    analyticsLocation: {
                        section: O.AnalyticsSections.PROFILE_POPOUT
                    }
                }), null == L || L()
            },
            className: S.connections
        }, r.createElement(u.Text, {
            variant: "text-md/semibold",
            color: "interactive-active",
            className: S.connectionsText
        }, T.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL), r.createElement(_.default, {
            direction: _.default.Directions.RIGHT,
            className: S.connectionsCaret
        }))))), Y.length > 0 && (N = r.createElement(r.Fragment, null, r.createElement(u.Heading, {
            variant: "eyebrow",
            className: v.title
        }, T.default.Messages.APPS), r.createElement("div", {
            className: i()(S.connectionsContainer, M)
        }, Y.map(function(e) {
            return r.createElement(m.ConnectedApplicationUserRoleAccount, {
                applicationRoleConnection: e,
                key: e.application.id,
                locale: K
            })
        })))), null == b && null == N) ? null : r.createElement(I.default, null, N, b)
    }
}