function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        WowMomentTypes: function() {
            return a
        },
        prefetch: function() {
            return b
        },
        default: function() {
            return F
        }
    }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var a, o, s = n("37983"),
        r = n("884691"),
        u = n("414456"),
        d = n.n(u),
        c = n("146606"),
        m = n("446674"),
        l = n("913144"),
        M = n("206230"),
        w = n("58608"),
        p = n("599110"),
        _ = n("560528"),
        f = n("659500"),
        h = n("676379"),
        E = n("23377"),
        W = n("895497"),
        S = n("604448"),
        T = n("833572"),
        I = n("170486"),
        g = n("49111"),
        y = n("17301"),
        C = n("788936"),
        P = n("90976"),
        x = n("664182");
    async function b(e) {
        try {
            l.default.dispatch({
                type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
                value: !0
            });
            let t = e ? S : C;
            window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? t = e ? T : P : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (t = e ? I : x);
            let n = await fetch(t).then(async e => {
                let t = await e.blob(),
                    n = window.URL.createObjectURL(t);
                return n
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
    var F = function() {
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
            [o, u] = r.useState(!1),
            l = (0, _.getChromeVersion)(),
            S = (0, _.supportsHEVCAlpha)(),
            T = l > 52 || -1 === l || S,
            I = S ? "video/mp4" : "video/webm",
            C = T && !e && a && null === t && !1 === n;
        C && b(S), r.useEffect(() => {
            function t() {
                let {
                    enabled: t
                } = W.NitroStandardWowMomentExperiment.getCurrentConfig({
                    location: "PremumSubscriptionWowMoment.tsx"
                });
                t && (u(!0), i = setTimeout(() => {
                    u(!1), x(!0), p.default.track(g.AnalyticEvents.PREMIUM_WOW_MOMENT_VIEWED, {
                        wow_moment_type: "gradient_highlight"
                    })
                }, 2e3), e && (0, h.setCanPlayWowMoment)(!1))
            }
            return f.ComponentDispatch.subscribe(g.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
                f.ComponentDispatch.unsubscribe(g.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t)
            }
        }, [e, T]);
        let [P, x] = r.useState(!1), [F, N] = r.useState(!1), U = (0, c.useSpring)({
            opacity: P ? .2 : 0,
            config: {
                duration: 100
            },
            immediate: e
        }), v = (0, c.useSpring)({
            x: F ? "100%" : "-100%",
            config: {
                duration: 500
            },
            immediate: e || !F
        });
        r.useEffect(() => {
            let e = -1;
            return P && (e = window.setTimeout(() => {
                N(!0)
            }, 1e3)), () => {
                window.clearTimeout(e)
            }
        }, [P]), r.useEffect(() => {
            let e = -1;
            return F && (e = window.setTimeout(() => {
                N(!1), x(!1)
            }, 1e3)), () => {
                window.clearTimeout(e)
            }
        }, [F]);
        let O = o && null !== t,
            A = O || P;
        return (0, s.jsxs)("div", {
            className: d({
                [y.wrapper]: !A,
                [y.activeWrapper]: A
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
                    u(!1)
                },
                children: (0, s.jsx)("source", {
                    src: t,
                    type: I
                })
            }), (0, s.jsx)(c.animated.div, {
                className: y.gadientHighlight,
                style: U
            }), (0, s.jsx)(c.animated.div, {
                className: y.swipeWrapper,
                style: v,
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