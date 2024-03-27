function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("851387"),
        d = n("216049"),
        c = n("915639"),
        f = n("102985"),
        m = n("461380"),
        p = n("756507"),
        h = n("713135"),
        x = n("824140"),
        E = n("401642"),
        y = n("777003"),
        g = n("590456"),
        S = n("49111"),
        C = n("782340"),
        T = n("715392"),
        _ = n("862939");

    function I(e) {
        var t, n;
        let a, I, {
                userId: v,
                channelId: A,
                guild: N,
                theme: R,
                onClose: O,
                className: M
            } = e,
            {
                analyticsLocations: k,
                messageId: L,
                roleId: P
            } = (0, p.useUserProfileAnalyticsContext)(),
            b = (0, d.default)(N, v, A),
            [j, U] = l.useState(new Set),
            D = (0, r.useStateFromStores)([h.default], () => h.default.getUserProfile(v)),
            w = null !== (t = null == D ? void 0 : D.connectedAccounts) && void 0 !== t ? t : [],
            F = null !== (n = null == D ? void 0 : D.applicationRoleConnections) && void 0 !== n ? n : [],
            G = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
            H = (0, r.useStateFromStores)([c.default], () => c.default.locale);
        if (l.useEffect(() => {
                (null == N ? void 0 : N.id) != null && (null == b ? void 0 : b.id) != null && u.default.fetchGuildRoleConnectionsEligibility(N.id, b.id).then(e => {
                    let t = new Set;
                    for (let n of e)
                        for (let {
                                connection_type: e
                            }
                            of n) t.add(e);
                    U(t)
                })
            }, [null == N ? void 0 : N.id, null == b ? void 0 : b.id]), G || null == b) return null;
        let B = Array.from(j).map(e => {
            let t = w.find(t => t.type === e);
            return null == t ? null : (0, i.jsx)(x.ConnectedUserAccount, {
                connectedAccount: t,
                theme: R,
                locale: H,
                userId: v
            }, "".concat(t.type, ":").concat(t.id))
        }).filter(e => null != e);
        return (B.length > 0 && (a = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Heading, {
                variant: "eyebrow",
                className: _.title,
                children: C.default.Messages.CONNECTIONS
            }), (0, i.jsxs)("div", {
                className: s(T.connectionsContainer, M),
                children: [B, (0, i.jsxs)(o.Clickable, {
                    onClick: function() {
                        (0, E.openUserProfileModal)({
                            userId: v,
                            channelId: A,
                            guildId: null == N ? void 0 : N.id,
                            messageId: null != L ? L : void 0,
                            roleId: null != P ? P : void 0,
                            section: g.UserProfileSections.USER_INFO_CONNECTIONS,
                            sourceAnalyticsLocations: k,
                            analyticsLocation: {
                                section: S.AnalyticsSections.PROFILE_POPOUT
                            }
                        }), null == O || O()
                    },
                    className: T.connections,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        className: T.connectionsText,
                        children: C.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
                    }), (0, i.jsx)(m.default, {
                        direction: m.default.Directions.RIGHT,
                        className: T.connectionsCaret
                    })]
                })]
            })]
        })), F.length > 0 && (I = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Heading, {
                variant: "eyebrow",
                className: _.title,
                children: C.default.Messages.APPS
            }), (0, i.jsx)("div", {
                className: s(T.connectionsContainer, M),
                children: F.map(e => (0, i.jsx)(x.ConnectedApplicationUserRoleAccount, {
                    applicationRoleConnection: e,
                    locale: H
                }, e.application.id))
            })]
        })), null == a && null == I) ? null : (0, i.jsxs)(y.default, {
            children: [I, a]
        })
    }
}