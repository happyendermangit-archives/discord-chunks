function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("749210"),
        d = n("906732"),
        _ = n("977392"),
        c = n("706454"),
        E = n("246946"),
        I = n("259580"),
        T = n("785717"),
        f = n("621853"),
        S = n("335191"),
        A = n("171368"),
        h = n("659101"),
        m = n("228168"),
        N = n("981631"),
        O = n("689938"),
        p = n("424860"),
        R = n("989171");

    function C(e) {
        var t, n;
        let s, C, {
                userId: g,
                channelId: L,
                guild: D,
                theme: v,
                onClose: M,
                className: y
            } = e,
            {
                analyticsLocations: P
            } = (0, d.default)(),
            {
                messageId: U,
                roleId: b
            } = (0, T.useUserProfileAnalyticsContext)(),
            G = (0, _.default)(D, g, L),
            [w, B] = r.useState(new Set),
            k = (0, o.useStateFromStores)([f.default], () => f.default.getUserProfile(g)),
            V = null !== (t = null == k ? void 0 : k.connectedAccounts) && void 0 !== t ? t : [],
            F = null !== (n = null == k ? void 0 : k.applicationRoleConnections) && void 0 !== n ? n : [],
            x = (0, o.useStateFromStores)([E.default], () => E.default.hidePersonalInformation),
            H = (0, o.useStateFromStores)([c.default], () => c.default.locale);
        if (r.useEffect(() => {
                (null == D ? void 0 : D.id) != null && (null == G ? void 0 : G.id) != null && u.default.fetchGuildRoleConnectionsEligibility(D.id, G.id).then(e => {
                    let t = new Set;
                    for (let n of e)
                        for (let {
                                connection_type: e
                            }
                            of n) t.add(e);
                    B(t)
                })
            }, [null == D ? void 0 : D.id, null == G ? void 0 : G.id]), x || null == G) return null;
        let Y = Array.from(w).map(e => {
            let t = V.find(t => t.type === e);
            return null == t ? null : (0, i.jsx)(S.ConnectedUserAccount, {
                connectedAccount: t,
                theme: v,
                locale: H,
                userId: g
            }, "".concat(t.type, ":").concat(t.id))
        }).filter(e => null != e);
        return (Y.length > 0 && (s = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Heading, {
                variant: "eyebrow",
                className: R.title,
                children: O.default.Messages.CONNECTIONS
            }), (0, i.jsxs)("div", {
                className: a()(p.connectionsContainer, y),
                children: [Y, (0, i.jsxs)(l.Clickable, {
                    onClick: function() {
                        (0, A.openUserProfileModal)({
                            userId: g,
                            channelId: L,
                            guildId: null == D ? void 0 : D.id,
                            messageId: U,
                            roleId: b,
                            section: m.UserProfileSections.USER_INFO_CONNECTIONS,
                            sourceAnalyticsLocations: P,
                            analyticsLocation: {
                                section: N.AnalyticsSections.PROFILE_POPOUT
                            }
                        }), null == M || M()
                    },
                    className: p.connections,
                    children: [(0, i.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        className: p.connectionsText,
                        children: O.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
                    }), (0, i.jsx)(I.default, {
                        direction: I.default.Directions.RIGHT,
                        className: p.connectionsCaret
                    })]
                })]
            })]
        })), F.length > 0 && (C = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Heading, {
                variant: "eyebrow",
                className: R.title,
                children: O.default.Messages.APPS
            }), (0, i.jsx)("div", {
                className: a()(p.connectionsContainer, y),
                children: F.map(e => (0, i.jsx)(S.ConnectedApplicationUserRoleAccount, {
                    applicationRoleConnection: e,
                    locale: H
                }, e.application.id))
            })]
        })), null == s && null == C) ? null : (0, i.jsxs)(h.default, {
            children: [C, s]
        })
    }
}