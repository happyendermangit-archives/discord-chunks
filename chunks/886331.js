function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        },
        useOtherStreams: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("286601"),
        u = n("390579"),
        s = n("867188"),
        l = n("955297"),
        c = n("739213"),
        f = n("73013"),
        d = n("335911"),
        _ = n("208454"),
        E = n("350073"),
        p = n("639425"),
        m = n("512762"),
        y = n("62957"),
        I = n("374550"),
        h = n("281767"),
        O = n("439386"),
        T = n("941504");

    function S(e, t, n) {
        var r = (0, o.useStateFromStores)([u.default], function() {
                return u.default.getSelectedParticipantId(e.id)
            }),
            i = (0, o.useStateFromStores)([f.default], function() {
                return null != r ? f.default.getActiveStreamForStreamKey(r) : null
            }, [r]);
        return (0, o.useStateFromStoresArray)([_.default], function() {
            var r = n.filter(function(e) {
                return e.ownerId !== (null == t ? void 0 : t.id)
            }).map(function(t) {
                return {
                    stream: t,
                    username: y.default.getName(e.getGuildId(), e.id, _.default.getUser(t.ownerId))
                }
            });
            return 1 === r.length && r[0].stream.ownerId === (null == i ? void 0 : i.ownerId) ? [] : r
        }, [e, i, n, t])
    }

    function v(e) {
        var t, n = e.channel,
            o = e.currentUser,
            u = e.activeStreams,
            f = e.hideSelfOptions,
            _ = e.showReportOption,
            y = e.handleGoLive,
            v = e.onClose,
            g = e.onSelect,
            A = e.appContext,
            b = void 0 === A ? h.AppContext.APP : A,
            N = d.default.supports(O.Features.DESKTOP_CAPTURE_APPLICATIONS),
            R = null !== (t = u.find(function(e) {
                return e.ownerId === (null == o ? void 0 : o.id)
            })) && void 0 !== t ? t : null,
            C = S(n, o, u),
            P = (0, l.default)(R, b),
            D = (0, s.default)(R, b, h.NOOP_NULL),
            L = null == R ? r.createElement(i.MenuItem, {
                id: "share-your-screen",
                label: T.default.Messages.SHARE_YOUR_SCREEN,
                icon: E.default,
                action: y
            }) : r.createElement(r.Fragment, null, I.isPlatformEmbedded ? r.createElement(i.MenuItem, {
                id: "stream-settings",
                label: T.default.Messages.SCREENSHARE_STREAM_QUALITY
            }, P) : null, void 0 !== _ && _ ? D : null, N ? r.createElement(i.MenuItem, {
                id: "change-windows",
                label: T.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                icon: E.default,
                action: y
            }) : null, r.createElement(i.MenuItem, {
                id: "stop-streaming",
                label: T.default.Messages.STOP_STREAMING,
                icon: p.default,
                action: function() {
                    return (0, c.default)(R)
                }
            }));
        return r.createElement(a.default, {
            section: h.AnalyticsSections.CONTEXT_MENU
        }, r.createElement(i.Menu, {
            onSelect: g,
            navId: "manage-streams",
            onClose: v,
            "aria-label": null != R ? T.default.Messages.STOP_STREAMING : T.default.Messages.SHARE_YOUR_SCREEN
        }, r.createElement(i.MenuGroup, null, C.map(function(e) {
            var t = e.stream,
                n = e.username;
            return r.createElement(i.MenuItem, {
                id: t.ownerId,
                key: "manage-stream-menu".concat(t.ownerId),
                label: T.default.Messages.STOP_WATCHING_USER.format({
                    username: n
                }),
                icon: m.default,
                action: function() {
                    return (0, c.default)(t)
                }
            })
        })), void 0 !== f && f ? null : L))
    }
}