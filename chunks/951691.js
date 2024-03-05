function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOtherStreams: function() {
            return v
        },
        default: function() {
            return I
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("446674"),
        s = n("77078"),
        i = n("901582"),
        l = n("191145"),
        u = n("976074"),
        o = n("856343"),
        d = n("16916"),
        c = n("373469"),
        f = n("42887"),
        h = n("697218"),
        E = n("394832"),
        p = n("985622"),
        C = n("356553"),
        m = n("387111"),
        S = n("773336"),
        g = n("49111"),
        _ = n("353927"),
        T = n("782340");

    function v(e, t, n) {
        let a = (0, r.useStateFromStores)([l.default], () => l.default.getSelectedParticipantId(e.id)),
            s = (0, r.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
            i = (0, r.useStateFromStoresArray)([h.default], () => {
                let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                    stream: t,
                    username: m.default.getName(e.getGuildId(), e.id, h.default.getUser(t.ownerId))
                }));
                return 1 === a.length && a[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : a
            }, [e, s, n, t]);
        return i
    }

    function I(e) {
        var t;
        let {
            channel: n,
            currentUser: r,
            activeStreams: l,
            hideSelfOptions: c = !1,
            showReportOption: h = !1,
            handleGoLive: m,
            onClose: I,
            onSelect: A,
            appContext: M = g.AppContext.APP
        } = e, x = f.default.supports(_.Features.DESKTOP_CAPTURE_APPLICATIONS), N = null !== (t = l.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, R = v(n, r, l), L = (0, o.default)(N, M), O = (0, u.default)(N, M, g.NOOP_NULL), y = null == N ? (0, a.jsx)(s.MenuItem, {
            id: "share-your-screen",
            label: T.default.Messages.SHARE_YOUR_SCREEN,
            icon: E.default,
            action: m
        }) : (0, a.jsxs)(a.Fragment, {
            children: [S.isPlatformEmbedded ? (0, a.jsx)(s.MenuItem, {
                id: "stream-settings",
                label: T.default.Messages.SCREENSHARE_STREAM_QUALITY,
                children: L
            }) : null, h ? O : null, x ? (0, a.jsx)(s.MenuItem, {
                id: "change-windows",
                label: T.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                icon: E.default,
                action: m
            }) : null, (0, a.jsx)(s.MenuItem, {
                id: "stop-streaming",
                label: T.default.Messages.STOP_STREAMING,
                icon: p.default,
                action: () => (0, d.default)(N)
            })]
        });
        return (0, a.jsx)(i.default, {
            section: g.AnalyticsSections.CONTEXT_MENU,
            children: (0, a.jsxs)(s.Menu, {
                onSelect: A,
                navId: "manage-streams",
                onClose: I,
                "aria-label": null != N ? T.default.Messages.STOP_STREAMING : T.default.Messages.SHARE_YOUR_SCREEN,
                children: [(0, a.jsx)(s.MenuGroup, {
                    children: R.map(e => {
                        let {
                            stream: t,
                            username: n
                        } = e;
                        return (0, a.jsx)(s.MenuItem, {
                            id: t.ownerId,
                            label: T.default.Messages.STOP_WATCHING_USER.format({
                                username: n
                            }),
                            icon: C.default,
                            action: () => (0, d.default)(t)
                        }, "manage-stream-menu".concat(t.ownerId))
                    })
                }), c ? null : y]
            })
        })
    }
}