function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoButtonWrapper: function() {
            return c
        },
        default: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("75735"),
        l = n("40851"),
        u = n("67844"),
        d = n("871499"),
        _ = n("914668");

    function c(e) {
        let t = (0, u.getVideoButtonLabel)(e),
            {
                enabled: n,
                cameraUnavailable: s,
                onChange: a,
                onCameraUnavailable: d,
                hasPermission: _,
                children: c,
                channelLimitReached: E = !1,
                join: I
            } = e,
            T = (0, l.useAppContext)(),
            f = s ? () => d() : () => a(!e.enabled, T),
            {
                Component: S,
                play: h,
                events: A
            } = (0, o.useVideoLottie)(I || n ? "disable" : "enable");
        return r.useEffect(() => () => h(), [n, h]), (0, i.jsx)(i.Fragment, {
            children: c({
                onClick: f,
                active: n,
                disabled: !n && (!_ || E),
                iconComponent: S,
                label: t,
                unavailable: s,
                onMouseEnter: I ? void 0 : A.onMouseEnter,
                onMouseLeave: I ? void 0 : A.onMouseLeave
            })
        })
    }

    function E(e) {
        let {
            enabled: t,
            join: n,
            channel: r,
            onChange: s,
            onCameraUnavailable: o,
            cameraUnavailable: l,
            hasPermission: u,
            className: E,
            channelLimitReached: I,
            channelLimit: T,
            centerButton: f = !1,
            onPopoutClick: S,
            ...h
        } = e, A = f ? d.CenterControlButton : d.default;
        return (0, i.jsx)(c, {
            enabled: t,
            join: n,
            channel: r,
            onChange: s,
            onCameraUnavailable: o,
            cameraUnavailable: l,
            hasPermission: u,
            channelLimitReached: I,
            channelLimit: T,
            children: e => {
                let {
                    unavailable: n,
                    onMouseEnter: r,
                    onMouseLeave: s,
                    ...o
                } = e;
                return (0, i.jsx)(A, {
                    ...o,
                    ...h,
                    onMouseEnter: e => {
                        var t;
                        null === (t = h.onMouseEnter) || void 0 === t || t.call(h, e), null == r || r()
                    },
                    onMouseLeave: e => {
                        var t;
                        null === (t = h.onMouseLeave) || void 0 === t || t.call(h, e), null == s || s()
                    },
                    isActive: t,
                    className: a()(E, {
                        [_.fauxDisabled]: n
                    }),
                    onPopoutClick: S
                })
            }
        })
    }
}