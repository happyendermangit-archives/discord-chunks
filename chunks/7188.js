function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("158631"),
        l = n("709369"),
        u = n("544384"),
        d = n("76021"),
        _ = n("592125"),
        c = n("594174"),
        E = n("937482"),
        I = n("834348"),
        T = n("806519"),
        f = n("74538"),
        S = n("618158"),
        h = n("871499"),
        A = n("981631"),
        m = n("474936"),
        N = n("689938"),
        p = n("126161");

    function O(e) {
        let {
            className: t
        } = e;
        return (0, i.jsx)(E.default, {
            className: t
        })
    }

    function R(e) {
        let {
            className: t
        } = e;
        return (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(T.default, {
                className: t,
                mask: T.default.Masks.HEADER_BAR_BADGE,
                children: (0, i.jsx)(O, {})
            }), (0, i.jsx)(I.default, {
                className: p.badgeUpgrade
            })]
        })
    }

    function C(e) {
        let {
            hideBadges: t = !1,
            stream: n,
            ...E
        } = e, I = (0, s.useStateFromStores)([c.default], () => f.default.isPremium(c.default.getCurrentUser(), m.PremiumTypes.TIER_1)), T = (0, s.useStateFromStores)([_.default], () => _.default.getChannel(null == n ? void 0 : n.channelId)), p = r.useMemo(() => null != n ? [n] : [], [n]), C = (0, o.useIsBroadcastingInChannel)(null == T ? void 0 : T.id), g = r.useCallback(() => {
            null != T && (0, d.default)(T.getGuildId(), T.id, A.AnalyticsSections.STREAM_SETTINGS)
        }, [T]);
        if (null == n || null == T) return null;
        let L = O;
        return !t && !I && (L = R), (0, i.jsx)(a.Popout, {
            position: "top",
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, i.jsx)(S.default, {
                    children: C ? (0, i.jsx)(l.default, {
                        onClose: t
                    }) : (0, i.jsx)(u.default, {
                        channel: T,
                        currentUser: c.default.getCurrentUser(),
                        activeStreams: p,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: g
                    })
                })
            },
            animation: a.Popout.Animation.FADE,
            children: e => (0, i.jsx)(h.default, {
                ...e,
                label: N.default.Messages.STREAMER_SETTINGS_TITLE,
                iconComponent: L,
                ...E
            })
        })
    }
}