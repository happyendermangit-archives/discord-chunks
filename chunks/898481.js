function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("446674"),
        a = n("77078"),
        s = n("772017"),
        r = n("987317"),
        o = n("990766"),
        u = n("244201"),
        d = n("223913"),
        c = n("373469"),
        f = n("42203"),
        p = n("30672"),
        m = n("619911"),
        h = n("659500"),
        x = n("295999"),
        E = n("49111"),
        y = n("782340"),
        g = n("570075");

    function S(e) {
        let {
            isCurrentUser: t,
            color: n,
            look: S,
            applicationStream: C
        } = e, {
            activeStream: I,
            watchingOtherStream: T
        } = (0, l.useStateFromStoresObject)([c.default], () => ({
            activeStream: c.default.getActiveStreamForApplicationStream(C),
            watchingOtherStream: null != C && c.default.getAllActiveStreamsForChannel(C.channelId).filter(e => {
                let {
                    ownerId: t
                } = e;
                return t !== C.ownerId
            }).length > 0
        })), _ = (0, l.useStateFromStores)([f.default], () => f.default.getChannel(null == C ? void 0 : C.channelId)), [v, N] = (0, d.useCanWatchStream)(_), A = (0, u.useWindowDispatch)(), O = null != I && null != C && I.state !== E.ApplicationStreamStates.ENDED && I.ownerId === C.ownerId, M = e => {
            null != C && (r.default.selectVoiceChannel(C.channelId), !O && (0, o.watchStreamAndTransitionToStream)(C, {
                forceMultiple: e
            }), A.dispatch(E.ComponentActions.POPOUT_CLOSE), h.ComponentDispatch.dispatch(E.ComponentActions.MODAL_CLOSE), s.default.popAll())
        };
        if (null == C) return null;
        let R = (0, d.getStreamCTAString)(N);
        t ? R = y.default.Messages.WATCH_STREAM_STREAMING : O && (R = y.default.Messages.WATCH_STREAM_WATCHING);
        let k = {
            color: n,
            look: S
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(x.default, {
                disabled: t || O || !v,
                onClick: () => M(!1),
                ...k,
                fullWidth: !0,
                children: [(0, i.jsx)(m.default, {
                    className: g.streamIcon
                }), R]
            }, "play"), T && !O ? (0, i.jsx)(a.Tooltip, {
                text: y.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                children: e => (0, i.jsx)(x.default, {
                    ...e,
                    onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e), M(!0)
                    },
                    ...k,
                    className: g.iconButton,
                    size: g.iconButtonSize,
                    children: (0, i.jsx)(p.default, {
                        className: g.iconSize
                    })
                })
            }) : null]
        })
    }
}