function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("851387"),
        d = n("216049"),
        c = n("915639"),
        f = n("102985"),
        m = n("461380"),
        p = n("713135"),
        h = n("824140"),
        E = n("401642"),
        g = n("777003"),
        C = n("590456"),
        S = n("49111"),
        T = n("782340"),
        I = n("715392"),
        v = n("862939");

    function _(e) {
        var t, n;
        let a, _, {
                userId: N,
                channelId: A,
                guild: x,
                theme: y,
                onClose: O,
                className: R
            } = e,
            M = (0, d.default)(x, N, A),
            [L, P] = i.useState(new Set),
            b = (0, r.useStateFromStores)([p.default], () => p.default.getUserProfile(N)),
            j = null !== (t = null == b ? void 0 : b.connectedAccounts) && void 0 !== t ? t : [],
            U = null !== (n = null == b ? void 0 : b.applicationRoleConnections) && void 0 !== n ? n : [],
            D = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
            k = (0, r.useStateFromStores)([c.default], () => c.default.locale);
        if (i.useEffect(() => {
                (null == x ? void 0 : x.id) != null && (null == M ? void 0 : M.id) != null && u.default.fetchGuildRoleConnectionsEligibility(x.id, M.id).then(e => {
                    let t = new Set;
                    for (let n of e)
                        for (let {
                                connection_type: e
                            }
                            of n) t.add(e);
                    P(t)
                })
            }, [null == x ? void 0 : x.id, null == M ? void 0 : M.id]), D || null == M) return null;
        let w = Array.from(L).map(e => {
            let t = j.find(t => t.type === e);
            return null == t ? null : (0, l.jsx)(h.ConnectedUserAccount, {
                connectedAccount: t,
                theme: y,
                locale: k,
                userId: N
            }, "".concat(t.type, ":").concat(t.id))
        }).filter(e => null != e);
        return (w.length > 0 && (a = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Heading, {
                variant: "eyebrow",
                className: v.title,
                children: T.default.Messages.CONNECTIONS
            }), (0, l.jsxs)("div", {
                className: s(I.connectionsContainer, R),
                children: [w, (0, l.jsxs)(o.Clickable, {
                    onClick: function() {
                        (0, E.openUserProfileModal)({
                            userId: N,
                            guildId: null == x ? void 0 : x.id,
                            channelId: A,
                            section: C.UserProfileSections.USER_INFO_CONNECTIONS,
                            analyticsLocation: {
                                section: S.AnalyticsSections.PROFILE_POPOUT
                            }
                        }), null == O || O()
                    },
                    className: I.connections,
                    children: [(0, l.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        className: I.connectionsText,
                        children: T.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
                    }), (0, l.jsx)(m.default, {
                        direction: m.default.Directions.RIGHT,
                        className: I.connectionsCaret
                    })]
                })]
            })]
        })), U.length > 0 && (_ = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Heading, {
                variant: "eyebrow",
                className: v.title,
                children: T.default.Messages.APPS
            }), (0, l.jsx)("div", {
                className: s(I.connectionsContainer, R),
                children: U.map(e => (0, l.jsx)(h.ConnectedApplicationUserRoleAccount, {
                    applicationRoleConnection: e,
                    locale: k
                }, e.application.id))
            })]
        })), null == a && null == _) ? null : (0, l.jsxs)(g.default, {
            children: [_, a]
        })
    }
}