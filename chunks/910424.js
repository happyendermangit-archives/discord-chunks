function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("481060"),
        s = n("572691"),
        o = n("287734"),
        l = n("872810"),
        u = n("40851"),
        d = n("102172"),
        _ = n("199902"),
        c = n("592125"),
        E = n("167580"),
        I = n("761374"),
        T = n("585483"),
        f = n("915863"),
        S = n("981631"),
        h = n("689938"),
        A = n("483462");

    function m(e) {
        let {
            isCurrentUser: t,
            color: n,
            look: m,
            applicationStream: N
        } = e, {
            activeStream: p,
            watchingOtherStream: O
        } = (0, r.useStateFromStoresObject)([_.default], () => ({
            activeStream: _.default.getActiveStreamForApplicationStream(N),
            watchingOtherStream: null != N && _.default.getAllActiveStreamsForChannel(N.channelId).filter(e => {
                let {
                    ownerId: t
                } = e;
                return t !== N.ownerId
            }).length > 0
        })), R = (0, r.useStateFromStores)([c.default], () => c.default.getChannel(null == N ? void 0 : N.channelId)), [C, g] = (0, d.useCanWatchStream)(R), L = (0, u.useWindowDispatch)(), v = null != p && null != N && p.state !== S.ApplicationStreamStates.ENDED && p.ownerId === N.ownerId, D = e => {
            null != N && (o.default.selectVoiceChannel(N.channelId), !v && (0, l.watchStreamAndTransitionToStream)(N, {
                forceMultiple: e
            }), L.dispatch(S.ComponentActions.POPOUT_CLOSE), T.ComponentDispatch.dispatch(S.ComponentActions.MODAL_CLOSE), s.default.popAll())
        };
        if (null == N) return null;
        let M = (0, d.getStreamCTAString)(g);
        t ? M = h.default.Messages.WATCH_STREAM_STREAMING : v && (M = h.default.Messages.WATCH_STREAM_WATCHING);
        let y = {
            color: n,
            look: m
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(f.default, {
                disabled: t || v || !C,
                onClick: () => D(!1),
                ...y,
                fullWidth: !0,
                children: [(0, i.jsx)(I.default, {
                    className: A.streamIcon
                }), M]
            }, "play"), O && !v ? (0, i.jsx)(a.Tooltip, {
                text: h.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                children: e => (0, i.jsx)(f.default, {
                    ...e,
                    onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e), D(!0)
                    },
                    ...y,
                    className: A.iconButton,
                    size: A.iconButtonSize,
                    children: (0, i.jsx)(E.default, {
                        className: A.iconSize
                    })
                })
            }) : null]
        })
    }
}