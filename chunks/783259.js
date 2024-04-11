function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("692547"),
        a = n("481060"),
        o = n("220082"),
        l = n("420596"),
        u = n("880563"),
        d = n("484459"),
        _ = n("318661"),
        c = n("695346"),
        E = n("981631"),
        I = n("971867");
    t.default = function(e) {
        let {
            style: t,
            src: n,
            backgroundSrc: T,
            userId: f,
            pulseSpeakingIndicator: S = !1,
            speaking: A = !1,
            ...h
        } = e, m = null != T ? T : n, N = (0, o.default)(m, s.default.unsafe_rawColors.PRIMARY_800.css), O = (0, l.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, p = (0, _.default)(null != f ? f : E.EMPTY_STRING_SNOWFLAKE_ID), R = null == p ? void 0 : p.getBannerURL({
            size: 1024,
            canAnimate: c.GifAutoPlay.getSetting()
        });
        if (r.useEffect(() => {
                null != f && O && (0, d.default)(f, void 0, {
                    dispatchWait: !0
                })
            }, [O, f]), null == n) return null;
        let C = (0, i.jsx)(a.Avatar, {
                className: I.avatarWrapper,
                src: n,
                ...h
            }),
            g = {
                ...t,
                backgroundColor: N
            };
        return null != R && A && O && (g.backgroundImage = "url(".concat(R, ")"), g.backgroundSize = "cover"), (0, i.jsx)("div", {
            style: g,
            className: I.background,
            children: S ? (0, i.jsx)(u.default, {
                shouldAnimate: A,
                children: C
            }) : C
        })
    }
}