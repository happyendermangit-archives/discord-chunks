function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return G
        }
    }), s("222007");
    var i = s("37983"),
        r = s("884691"),
        a = s("775560"),
        l = s("290381"),
        o = s("77078"),
        n = s("304580"),
        u = s("685665"),
        d = s("599110"),
        c = s("677591"),
        E = s("890800"),
        _ = s("904519"),
        T = s("738463"),
        I = s("141075"),
        N = s("706081"),
        f = s("695561"),
        R = s("56186"),
        g = s("390604"),
        m = s("49111"),
        S = s("782340"),
        M = s("76996"),
        G = function(e) {
            let {
                analyticsLocation: t,
                guild: s,
                onClose: G
            } = e, [h, O] = r.useState(!0), p = r.useRef(!1), C = (0, a.useLazyValue)(() => Date.now()), {
                analyticsLocations: A
            } = (0, u.default)(), B = r.useCallback(() => {
                G(), d.default.track(m.AnalyticEvents.MODAL_DISMISSED, {
                    type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_stack: A,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: s.id,
                    duration_open_ms: Date.now() - C
                })
            }, [G, t, A, C, s.id]), x = r.useCallback(e => {
                e && !p.current && (d.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                    type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_stack: A,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: s.id
                }), p.current = !0)
            }, [t, A, s.id]);
            return r.useEffect(() => {
                d.default.track(m.AnalyticEvents.OPEN_MODAL, {
                    type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_stack: A,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: s.id
                })
            }, [s.id, t, A]), r.useEffect(() => {
                function e(e) {
                    "Escape" === e.key && B()
                }
                return window.addEventListener("keydown", e), () => {
                    window.removeEventListener("keydown", e)
                }
            }, [B]), (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: M.closeIconWrapper,
                    children: (0, i.jsx)(n.default, {
                        className: M.closeIcon,
                        closeAction: B,
                        keybind: "ESC",
                        variant: n.default.Variants.SOLID
                    })
                }), (0, i.jsxs)(o.AdvancedScrollerAuto, {
                    className: M.scroller,
                    children: [(0, i.jsxs)("div", {
                        className: M.header,
                        children: [(0, i.jsxs)("div", {
                            className: M.headerContentWrapper,
                            children: [(0, i.jsx)(o.Heading, {
                                className: M.heading,
                                color: "always-white",
                                variant: "display-lg",
                                children: S.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING
                            }), (0, i.jsx)(E.default, {
                                guild: s,
                                closeLayer: B,
                                onCtaVisibilityChange: O
                            }), (0, i.jsx)(I.default, {
                                guild: s
                            }), (0, i.jsx)(N.default, {
                                guild: s
                            })]
                        }), (0, i.jsx)(g.HeaderWave, {})]
                    }), (0, i.jsx)("div", {
                        className: M.middleBodyContentWrapper,
                        children: (0, i.jsx)(R.default, {})
                    }), (0, i.jsxs)("div", {
                        className: M.lowerBody,
                        children: [(0, i.jsxs)("div", {
                            className: M.lowerBodyContentWrapper,
                            children: [(0, i.jsx)(f.default, {
                                className: M.tierComparisonTable,
                                guild: s
                            }), (0, i.jsx)(c.default, {}), (0, i.jsx)(_.default, {})]
                        }), (0, i.jsx)(g.BodyWave, {}), (0, i.jsx)("div", {
                            className: M.lowerBodyBackgroundImage
                        })]
                    }), (0, i.jsx)(l.VisibilitySensor, {
                        onChange: x,
                        children: (0, i.jsx)("div", {
                            className: M.persistentCtaSpacer
                        })
                    })]
                }), (0, i.jsx)(T.default, {
                    guild: s,
                    isVisible: !h,
                    closeLayer: B
                })]
            })
        }
}