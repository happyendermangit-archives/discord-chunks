function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        },
        useOtherStreams: function() {
            return O
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("410575"),
        o = n("358221"),
        l = n("418469"),
        u = n("776031"),
        d = n("803647"),
        _ = n("199902"),
        c = n("131951"),
        E = n("594174"),
        I = n("645284"),
        T = n("990138"),
        f = n("948573"),
        S = n("5192"),
        A = n("358085"),
        h = n("981631"),
        m = n("65154"),
        N = n("689938");

    function O(e, t, n) {
        let i = (0, r.useStateFromStores)([o.default], () => o.default.getSelectedParticipantId(e.id)),
            s = (0, r.useStateFromStores)([_.default], () => null != i ? _.default.getActiveStreamForStreamKey(i) : null, [i]);
        return (0, r.useStateFromStoresArray)([E.default], () => {
            let i = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                stream: t,
                username: S.default.getName(e.getGuildId(), e.id, E.default.getUser(t.ownerId))
            }));
            return 1 === i.length && i[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : i
        }, [e, s, n, t])
    }

    function p(e) {
        var t;
        let {
            channel: n,
            currentUser: r,
            activeStreams: o,
            hideSelfOptions: _ = !1,
            showReportOption: E = !1,
            handleGoLive: S,
            onClose: p,
            onSelect: R,
            appContext: C = h.AppContext.APP
        } = e, g = c.default.supports(m.Features.DESKTOP_CAPTURE_APPLICATIONS), L = null !== (t = o.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, D = O(n, r, o), v = (0, u.default)(L, C), M = (0, l.default)(L, C, h.NOOP_NULL), y = null == L ? (0, i.jsx)(s.MenuItem, {
            id: "share-your-screen",
            label: N.default.Messages.SHARE_YOUR_SCREEN,
            icon: I.default,
            action: S
        }) : (0, i.jsxs)(i.Fragment, {
            children: [A.isPlatformEmbedded ? (0, i.jsx)(s.MenuItem, {
                id: "stream-settings",
                label: N.default.Messages.SCREENSHARE_STREAM_QUALITY,
                children: v
            }) : null, E ? M : null, g ? (0, i.jsx)(s.MenuItem, {
                id: "change-windows",
                label: N.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                icon: I.default,
                action: S
            }) : null, (0, i.jsx)(s.MenuItem, {
                id: "stop-streaming",
                label: N.default.Messages.STOP_STREAMING,
                icon: T.default,
                action: () => (0, d.default)(L)
            })]
        });
        return (0, i.jsx)(a.default, {
            section: h.AnalyticsSections.CONTEXT_MENU,
            children: (0, i.jsxs)(s.Menu, {
                onSelect: R,
                navId: "manage-streams",
                onClose: p,
                "aria-label": null != L ? N.default.Messages.STOP_STREAMING : N.default.Messages.SHARE_YOUR_SCREEN,
                children: [(0, i.jsx)(s.MenuGroup, {
                    children: D.map(e => {
                        let {
                            stream: t,
                            username: n
                        } = e;
                        return (0, i.jsx)(s.MenuItem, {
                            id: t.ownerId,
                            label: N.default.Messages.STOP_WATCHING_USER.format({
                                username: n
                            }),
                            icon: f.default,
                            action: () => (0, d.default)(t)
                        }, "manage-stream-menu".concat(t.ownerId))
                    })
                }), _ ? null : y]
            })
        })
    }
}