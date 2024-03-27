function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("749210"),
        d = n("977392"),
        _ = n("706454"),
        c = n("246946"),
        E = n("259580"),
        I = n("785717"),
        T = n("621853"),
        f = n("335191"),
        S = n("171368"),
        h = n("659101"),
        A = n("228168"),
        m = n("981631"),
        N = n("689938"),
        O = n("424860"),
        p = n("989171");

    function R(e) {
        var t, n;
        let s, R, {
                userId: C,
                channelId: g,
                guild: L,
                theme: D,
                onClose: v,
                className: M
            } = e,
            {
                analyticsLocations: y,
                messageId: P,
                roleId: U
            } = (0, I.useUserProfileAnalyticsContext)(),
            b = (0, d.default)(L, C, g),
            [G, w] = r.useState(new Set),
            k = (0, o.useStateFromStores)([T.default], () => T.default.getUserProfile(C)),
            B = null !== (t = null == k ? void 0 : k.connectedAccounts) && void 0 !== t ? t : [],
            V = null !== (n = null == k ? void 0 : k.applicationRoleConnections) && void 0 !== n ? n : [],
            F = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation),
            x = (0, o.useStateFromStores)([_.default], () => _.default.locale);
        if (r.useEffect(() => {
                (null == L ? void 0 : L.id) != null && (null == b ? void 0 : b.id) != null && u.default.fetchGuildRoleConnectionsEligibility(L.id, b.id).then(e => {
                    let t = new Set;
                    for (let n of e)
                        for (let {
                                connection_type: e
                            }
                            of n) t.add(e);
                    w(t)
                })
            }, [null == L ? void 0 : L.id, null == b ? void 0 : b.id]), F || null == b) return null;
        let H = Array.from(G).map(e => {
            let t = B.find(t => t.type === e);
            return null == t ? null : (0, i.jsx)(f.ConnectedUserAccount, {
                connectedAccount: t,
                theme: D,
                locale: x,
                userId: C
            }, "".concat(t.type, ":").concat(t.id))
        }).filter(e => null != e);
        return (H.length > 0 && (s = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Heading, {
                variant: "eyebrow",
                className: p.title,
                children: N.default.Messages.CONNECTIONS
            }), (0, i.jsxs)("div", {
                className: a()(O.connectionsContainer, M),
                children: [H, (0, i.jsxs)(l.Clickable, {
                    onClick: function() {
                        (0, S.openUserProfileModal)({
                            userId: C,
                            channelId: g,
                            guildId: null == L ? void 0 : L.id,
                            messageId: null != P ? P : void 0,
                            roleId: null != U ? U : void 0,
                            section: A.UserProfileSections.USER_INFO_CONNECTIONS,
                            sourceAnalyticsLocations: y,
                            analyticsLocation: {
                                section: m.AnalyticsSections.PROFILE_POPOUT
                            }
                        }), null == v || v()
                    },
                    className: O.connections,
                    children: [(0, i.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        className: O.connectionsText,
                        children: N.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
                    }), (0, i.jsx)(E.default, {
                        direction: E.default.Directions.RIGHT,
                        className: O.connectionsCaret
                    })]
                })]
            })]
        })), V.length > 0 && (R = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Heading, {
                variant: "eyebrow",
                className: p.title,
                children: N.default.Messages.APPS
            }), (0, i.jsx)("div", {
                className: a()(O.connectionsContainer, M),
                children: V.map(e => (0, i.jsx)(f.ConnectedApplicationUserRoleAccount, {
                    applicationRoleConnection: e,
                    locale: x
                }, e.application.id))
            })]
        })), null == s && null == R) ? null : (0, i.jsxs)(h.default, {
            children: [R, s]
        })
    }
}