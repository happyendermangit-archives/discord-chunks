function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
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
        p = n("461380"),
        m = n("713135"),
        h = n("824140"),
        x = n("401642"),
        E = n("777003"),
        y = n("590456"),
        g = n("49111"),
        S = n("782340"),
        C = n("715392"),
        T = n("862939");

    function _(e) {
        var t, n;
        let a, _, {
                userId: I,
                channelId: v,
                guild: N,
                theme: A,
                onClose: O,
                className: R
            } = e,
            M = (0, d.default)(N, I, v),
            [k, L] = l.useState(new Set),
            P = (0, r.useStateFromStores)([m.default], () => m.default.getUserProfile(I)),
            b = null !== (t = null == P ? void 0 : P.connectedAccounts) && void 0 !== t ? t : [],
            j = null !== (n = null == P ? void 0 : P.applicationRoleConnections) && void 0 !== n ? n : [],
            U = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
            D = (0, r.useStateFromStores)([c.default], () => c.default.locale);
        if (l.useEffect(() => {
                (null == N ? void 0 : N.id) != null && (null == M ? void 0 : M.id) != null && u.default.fetchGuildRoleConnectionsEligibility(N.id, M.id).then(e => {
                    let t = new Set;
                    for (let n of e)
                        for (let {
                                connection_type: e
                            }
                            of n) t.add(e);
                    L(t)
                })
            }, [null == N ? void 0 : N.id, null == M ? void 0 : M.id]), U || null == M) return null;
        let w = Array.from(k).map(e => {
            let t = b.find(t => t.type === e);
            return null == t ? null : (0, i.jsx)(h.ConnectedUserAccount, {
                connectedAccount: t,
                theme: A,
                locale: D,
                userId: I
            }, "".concat(t.type, ":").concat(t.id))
        }).filter(e => null != e);
        return (w.length > 0 && (a = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Heading, {
                variant: "eyebrow",
                className: T.title,
                children: S.default.Messages.CONNECTIONS
            }), (0, i.jsxs)("div", {
                className: s(C.connectionsContainer, R),
                children: [w, (0, i.jsxs)(o.Clickable, {
                    onClick: function() {
                        (0, x.openUserProfileModal)({
                            userId: I,
                            guildId: null == N ? void 0 : N.id,
                            channelId: v,
                            section: y.UserProfileSections.USER_INFO_CONNECTIONS,
                            analyticsLocation: {
                                section: g.AnalyticsSections.PROFILE_POPOUT
                            }
                        }), null == O || O()
                    },
                    className: C.connections,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        className: C.connectionsText,
                        children: S.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
                    }), (0, i.jsx)(p.default, {
                        direction: p.default.Directions.RIGHT,
                        className: C.connectionsCaret
                    })]
                })]
            })]
        })), j.length > 0 && (_ = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Heading, {
                variant: "eyebrow",
                className: T.title,
                children: S.default.Messages.APPS
            }), (0, i.jsx)("div", {
                className: s(C.connectionsContainer, R),
                children: j.map(e => (0, i.jsx)(h.ConnectedApplicationUserRoleAccount, {
                    applicationRoleConnection: e,
                    locale: D
                }, e.application.id))
            })]
        })), null == a && null == _) ? null : (0, i.jsxs)(E.default, {
            children: [_, a]
        })
    }
}