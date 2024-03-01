function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("669491"),
        l = n("77078"),
        i = n("462274"),
        u = n("181832"),
        o = n("981184"),
        d = n("506885"),
        c = n("217513"),
        f = n("845579"),
        h = n("49111"),
        E = n("491595"),
        p = function(e) {
            let {
                style: t,
                src: n,
                backgroundSrc: p,
                userId: m,
                pulseSpeakingIndicator: C = !1,
                speaking: S = !1,
                ...g
            } = e, _ = null != p ? p : n, v = (0, i.default)(_, s.default.unsafe_rawColors.PRIMARY_800.css), T = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, I = (0, c.default)(null != m ? m : h.EMPTY_STRING_SNOWFLAKE_ID), A = null == I ? void 0 : I.getBannerURL({
                size: 1024,
                canAnimate: f.GifAutoPlay.getSetting()
            });
            if (r.useEffect(() => {
                    null != m && T && (0, d.default)(m, void 0, {
                        dispatchWait: !0
                    })
                }, [T, m]), null == n) return null;
            let M = (0, a.jsx)(l.Avatar, {
                    className: E.avatarWrapper,
                    src: n,
                    ...g
                }),
                x = {
                    ...t,
                    backgroundColor: v
                };
            return null != A && S && T && (x.backgroundImage = "url(".concat(A, ")"), x.backgroundSize = "cover"), (0, a.jsx)("div", {
                style: x,
                className: E.background,
                children: C ? (0, a.jsx)(o.default, {
                    shouldAnimate: S,
                    children: M
                }) : M
            })
        }
}