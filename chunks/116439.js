function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoButtonWrapper: function() {
            return f
        },
        default: function() {
            return h
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414456"),
        l = n.n(s),
        i = n("881913"),
        u = n("244201"),
        o = n("289656"),
        d = n("981913"),
        c = n("423725");

    function f(e) {
        let t = (0, o.getVideoButtonLabel)(e),
            {
                enabled: n,
                cameraUnavailable: s,
                onChange: l,
                onCameraUnavailable: d,
                hasPermission: c,
                children: f,
                channelLimitReached: h = !1,
                join: E
            } = e,
            p = (0, u.useAppContext)(),
            C = s ? () => d() : () => l(!e.enabled, p),
            {
                Component: m,
                play: S,
                events: g
            } = (0, i.useVideoLottie)(E || n ? "disable" : "enable");
        return r.useEffect(() => () => S(), [n, S]), (0, a.jsx)(a.Fragment, {
            children: f({
                onClick: C,
                active: n,
                disabled: !n && (!c || h),
                iconComponent: m,
                label: t,
                unavailable: s,
                onMouseEnter: E ? void 0 : g.onMouseEnter,
                onMouseLeave: E ? void 0 : g.onMouseLeave
            })
        })
    }

    function h(e) {
        let {
            enabled: t,
            join: n,
            channel: r,
            onChange: s,
            onCameraUnavailable: i,
            cameraUnavailable: u,
            hasPermission: o,
            className: h,
            channelLimitReached: E,
            channelLimit: p,
            centerButton: C = !1,
            onPopoutClick: m,
            ...S
        } = e, g = C ? d.CenterControlButton : d.default;
        return (0, a.jsx)(f, {
            enabled: t,
            join: n,
            channel: r,
            onChange: s,
            onCameraUnavailable: i,
            cameraUnavailable: u,
            hasPermission: o,
            channelLimitReached: E,
            channelLimit: p,
            children: e => {
                let {
                    unavailable: n,
                    onMouseEnter: r,
                    onMouseLeave: s,
                    ...i
                } = e;
                return (0, a.jsx)(g, {
                    ...i,
                    ...S,
                    onMouseEnter: e => {
                        var t;
                        null === (t = S.onMouseEnter) || void 0 === t || t.call(S, e), null == r || r()
                    },
                    onMouseLeave: e => {
                        var t;
                        null === (t = S.onMouseLeave) || void 0 === t || t.call(S, e), null == s || s()
                    },
                    isActive: t,
                    className: l(h, {
                        [c.fauxDisabled]: n
                    }),
                    onPopoutClick: m
                })
            }
        })
    }
}