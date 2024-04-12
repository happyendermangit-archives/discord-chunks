function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        WowMomentTypes: function() {
            return a
        },
        prefetch: function() {
            return x
        }
    }), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
    var a, o, s = n("735250"),
        u = n("470079"),
        r = n("803997"),
        d = n.n(r),
        c = n("718017"),
        m = n("442837"),
        l = n("570140"),
        M = n("607070"),
        w = n("810090"),
        p = n("626135"),
        _ = n("526167"),
        f = n("585483"),
        h = n("138464"),
        E = n("438820"),
        W = n("831474"),
        S = n("631274"),
        T = n("194077"),
        I = n("724688"),
        g = n("981631"),
        y = n("816155"),
        C = n("422138"),
        P = n("113386"),
        b = n("48547");
    async function x(e) {
        try {
            l.default.dispatch({
                type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
                value: !0
            });
            let t = e ? S : C;
            window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? t = e ? T : P : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (t = e ? I : b);
            let n = await fetch(t).then(async e => {
                let t = await e.blob();
                return window.URL.createObjectURL(t)
            });
            l.default.dispatch({
                type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
                wumpusMedia: n
            })
        } catch (e) {
            l.default.dispatch({
                type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
                value: !1
            })
        }
    }(o = a || (a = {})).WUMPUS_FLIGHT = "wumpus_flight", o.GRADIENT_HIGHLIGHT = "gradient_highlight";
    t.default = function() {
        let e = (0, m.useStateFromStores)([M.default], () => M.default.useReducedMotion),
            {
                wumpusMedia: t,
                isFetchingMedia: n,
                canPlayWowMoment: a
            } = (0, m.useStateFromStoresObject)([E.default], () => ({
                wumpusMedia: E.default.wowMomentWumpusMedia,
                isFetchingMedia: E.default.isFetchingWowMomentMedia,
                canPlayWowMoment: E.default.canPlayWowMoment
            })),
            [o, r] = u.useState(!1),
            l = (0, _.getChromeVersion)(),
            S = (0, _.supportsHEVCAlpha)(),
            T = l > 52 || -1 === l || S,
            I = S ? "video/mp4" : "video/webm";
        T && !e && a && null === t && !1 === n && x(S), u.useEffect(() => {
            function t() {
                let {
                    enabled: t
                } = W.NitroStandardWowMomentExperiment.getCurrentConfig({
                    location: "PremumSubscriptionWowMoment.tsx"
                });
                t && (r(!0), i = setTimeout(() => {
                    r(!1), P(!0), p.default.track(g.AnalyticEvents.PREMIUM_WOW_MOMENT_VIEWED, {
                        wow_moment_type: "gradient_highlight"
                    })
                }, 2e3), e && (0, h.setCanPlayWowMoment)(!1))
            }
            return f.ComponentDispatch.subscribe(g.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
                f.ComponentDispatch.unsubscribe(g.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t)
            }
        }, [e, T]);
        let [C, P] = u.useState(!1), [b, F] = u.useState(!1), N = (0, c.useSpring)({
            opacity: C ? .2 : 0,
            config: {
                duration: 100
            },
            immediate: e
        }), U = (0, c.useSpring)({
            x: b ? "100%" : "-100%",
            config: {
                duration: 500
            },
            immediate: e || !b
        });
        u.useEffect(() => {
            let e = -1;
            return C && (e = window.setTimeout(() => {
                F(!0)
            }, 1e3)), () => {
                window.clearTimeout(e)
            }
        }, [C]), u.useEffect(() => {
            let e = -1;
            return b && (e = window.setTimeout(() => {
                F(!1), P(!1)
            }, 1e3)), () => {
                window.clearTimeout(e)
            }
        }, [b]);
        let O = o && null !== t,
            v = O || C;
        return (0, s.jsxs)("div", {
            className: d()({
                [y.wrapper]: !v,
                [y.activeWrapper]: v
            }),
            children: [O && (0, s.jsx)(w.default, {
                autoPlay: !0,
                className: y.videoWrapper,
                onPlay: () => {
                    clearTimeout(i), p.default.track(g.AnalyticEvents.PREMIUM_WOW_MOMENT_VIEWED, {
                        wow_moment_type: "wumpus_flight"
                    })
                },
                onTimeUpdate: e => {
                    e.currentTarget.currentTime > 4 && (0, h.setCanPlayWowMoment)(!0)
                },
                onEnded: () => {
                    r(!1)
                },
                children: (0, s.jsx)("source", {
                    src: t,
                    type: I
                })
            }), (0, s.jsx)(c.animated.div, {
                className: y.gadientHighlight,
                style: N
            }), (0, s.jsx)(c.animated.div, {
                className: y.swipeWrapper,
                style: U,
                children: (0, s.jsxs)("svg", {
                    className: y.swipe,
                    viewBox: "0 0 848 1024",
                    fill: "none",
                    children: [(0, s.jsx)("path", {
                        d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
                        fill: "white"
                    }), (0, s.jsx)("path", {
                        d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                        fill: "white"
                    })]
                })
            })]
        })
    }
}