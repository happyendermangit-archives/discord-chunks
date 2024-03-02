function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var l = n("37983");
    n("884691");
    var i = n("446674"),
        a = n("77078"),
        s = n("772017"),
        r = n("987317"),
        o = n("990766"),
        u = n("244201"),
        d = n("223913"),
        c = n("373469"),
        f = n("42203"),
        m = n("30672"),
        p = n("619911"),
        h = n("659500"),
        E = n("295999"),
        g = n("49111"),
        C = n("782340"),
        S = n("570075");

    function T(e) {
        let {
            isCurrentUser: t,
            color: n,
            look: T,
            applicationStream: I
        } = e, {
            activeStream: v,
            watchingOtherStream: _
        } = (0, i.useStateFromStoresObject)([c.default], () => ({
            activeStream: c.default.getActiveStreamForApplicationStream(I),
            watchingOtherStream: null != I && c.default.getAllActiveStreamsForChannel(I.channelId).filter(e => {
                let {
                    ownerId: t
                } = e;
                return t !== I.ownerId
            }).length > 0
        })), N = (0, i.useStateFromStores)([f.default], () => f.default.getChannel(null == I ? void 0 : I.channelId)), [A, x] = (0, d.useCanWatchStream)(N), y = (0, u.useWindowDispatch)(), O = null != v && null != I && v.state !== g.ApplicationStreamStates.ENDED && v.ownerId === I.ownerId, R = e => {
            null != I && (r.default.selectVoiceChannel(I.channelId), !O && (0, o.watchStreamAndTransitionToStream)(I, {
                forceMultiple: e
            }), y.dispatch(g.ComponentActions.POPOUT_CLOSE), h.ComponentDispatch.dispatch(g.ComponentActions.MODAL_CLOSE), s.default.popAll())
        };
        if (null == I) return null;
        let M = (0, d.getStreamCTAString)(x);
        t ? M = C.default.Messages.WATCH_STREAM_STREAMING : O && (M = C.default.Messages.WATCH_STREAM_WATCHING);
        let L = {
            color: n,
            look: T
        };
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(E.default, {
                disabled: t || O || !A,
                onClick: () => R(!1),
                ...L,
                fullWidth: !0,
                children: [(0, l.jsx)(p.default, {
                    className: S.streamIcon
                }), M]
            }, "play"), _ && !O ? (0, l.jsx)(a.Tooltip, {
                text: C.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                children: e => (0, l.jsx)(E.default, {
                    ...e,
                    onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e), R(!0)
                    },
                    ...L,
                    className: S.iconButton,
                    size: S.iconButtonSize,
                    children: (0, l.jsx)(m.default, {
                        className: S.iconSize
                    })
                })
            }) : null]
        })
    }
}