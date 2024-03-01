function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOtherStreams: function() {
            return T
        },
        default: function() {
            return I
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("446674"),
        s = n("77078"),
        l = n("901582"),
        i = n("191145"),
        u = n("976074"),
        o = n("856343"),
        d = n("16916"),
        c = n("373469"),
        f = n("42887"),
        h = n("697218"),
        E = n("394832"),
        p = n("985622"),
        m = n("356553"),
        C = n("387111"),
        S = n("773336"),
        g = n("49111"),
        _ = n("353927"),
        v = n("782340");

    function T(e, t, n) {
        let a = (0, r.useStateFromStores)([i.default], () => i.default.getSelectedParticipantId(e.id)),
            s = (0, r.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
            l = (0, r.useStateFromStoresArray)([h.default], () => {
                let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                    stream: t,
                    username: C.default.getName(e.getGuildId(), e.id, h.default.getUser(t.ownerId))
                }));
                return 1 === a.length && a[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : a
            }, [e, s, n, t]);
        return l
    }

    function I(e) {
        var t;
        let {
            channel: n,
            currentUser: r,
            activeStreams: i,
            hideSelfOptions: c = !1,
            showReportOption: h = !1,
            handleGoLive: C,
            onClose: I,
            onSelect: A,
            appContext: M = g.AppContext.APP
        } = e, x = f.default.supports(_.Features.DESKTOP_CAPTURE_APPLICATIONS), y = null !== (t = i.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, N = T(n, r, i), R = (0, o.default)(y, M), L = (0, u.default)(y, M, g.NOOP_NULL), O = null == y ? (0, a.jsx)(s.MenuItem, {
            id: "share-your-screen",
            label: v.default.Messages.SHARE_YOUR_SCREEN,
            icon: E.default,
            action: C
        }) : (0, a.jsxs)(a.Fragment, {
            children: [S.isPlatformEmbedded ? (0, a.jsx)(s.MenuItem, {
                id: "stream-settings",
                label: v.default.Messages.SCREENSHARE_STREAM_QUALITY,
                children: R
            }) : null, h ? L : null, x ? (0, a.jsx)(s.MenuItem, {
                id: "change-windows",
                label: v.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                icon: E.default,
                action: C
            }) : null, (0, a.jsx)(s.MenuItem, {
                id: "stop-streaming",
                label: v.default.Messages.STOP_STREAMING,
                icon: p.default,
                action: () => (0, d.default)(y)
            })]
        });
        return (0, a.jsx)(l.default, {
            section: g.AnalyticsSections.CONTEXT_MENU,
            children: (0, a.jsxs)(s.Menu, {
                onSelect: A,
                navId: "manage-streams",
                onClose: I,
                "aria-label": null != y ? v.default.Messages.STOP_STREAMING : v.default.Messages.SHARE_YOUR_SCREEN,
                children: [(0, a.jsx)(s.MenuGroup, {
                    children: N.map(e => {
                        let {
                            stream: t,
                            username: n
                        } = e;
                        return (0, a.jsx)(s.MenuItem, {
                            id: t.ownerId,
                            label: v.default.Messages.STOP_WATCHING_USER.format({
                                username: n
                            }),
                            icon: m.default,
                            action: () => (0, d.default)(t)
                        }, "manage-stream-menu".concat(t.ownerId))
                    })
                }), c ? null : O]
            })
        })
    }
}