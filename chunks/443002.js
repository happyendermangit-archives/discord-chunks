function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("207561"),
        a = n("622535"),
        o = n("481060"),
        l = n("425493"),
        u = n("906732"),
        d = n("626135"),
        _ = n("724884"),
        c = n("355045"),
        E = n("290799"),
        I = n("394769"),
        T = n("555932"),
        f = n("808189"),
        S = n("362948"),
        h = n("245004"),
        A = n("383881"),
        m = n("981631"),
        N = n("689938"),
        p = n("923048");
    t.default = function(e) {
        let {
            analyticsLocation: t,
            guild: n,
            onClose: O
        } = e, [R, C] = r.useState(!0), g = r.useRef(!1), L = (0, s.useLazyValue)(() => Date.now()), {
            analyticsLocations: D
        } = (0, u.default)(), v = r.useCallback(() => {
            O(), d.default.track(m.AnalyticEvents.MODAL_DISMISSED, {
                type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                location_stack: D,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id,
                duration_open_ms: Date.now() - L
            })
        }, [O, t, D, L, n.id]), M = r.useCallback(e => {
            e && !g.current && (d.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                location_stack: D,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            }), g.current = !0)
        }, [t, D, n.id]);
        return r.useEffect(() => {
            d.default.track(m.AnalyticEvents.OPEN_MODAL, {
                type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                location_stack: D,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            })
        }, [n.id, t, D]), r.useEffect(() => {
            function e(e) {
                "Escape" === e.key && v()
            }
            return window.addEventListener("keydown", e), () => {
                window.removeEventListener("keydown", e)
            }
        }, [v]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: p.closeIconWrapper,
                children: (0, i.jsx)(l.default, {
                    className: p.closeIcon,
                    closeAction: v,
                    keybind: "ESC",
                    variant: l.default.Variants.SOLID
                })
            }), (0, i.jsxs)(o.AdvancedScrollerAuto, {
                className: p.scroller,
                children: [(0, i.jsxs)("div", {
                    className: p.header,
                    children: [(0, i.jsxs)("div", {
                        className: p.headerContentWrapper,
                        children: [(0, i.jsx)(o.Heading, {
                            className: p.heading,
                            color: "always-white",
                            variant: "display-lg",
                            children: N.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING
                        }), (0, i.jsx)(c.default, {
                            guild: n,
                            closeLayer: v,
                            onCtaVisibilityChange: C
                        }), (0, i.jsx)(T.default, {
                            guild: n
                        }), (0, i.jsx)(f.default, {
                            guild: n
                        })]
                    }), (0, i.jsx)(A.HeaderWave, {})]
                }), (0, i.jsx)("div", {
                    className: p.middleBodyContentWrapper,
                    children: (0, i.jsx)(h.default, {})
                }), (0, i.jsxs)("div", {
                    className: p.lowerBody,
                    children: [(0, i.jsxs)("div", {
                        className: p.lowerBodyContentWrapper,
                        children: [(0, i.jsx)(S.default, {
                            className: p.tierComparisonTable,
                            guild: n
                        }), (0, i.jsx)(_.default, {}), (0, i.jsx)(E.default, {})]
                    }), (0, i.jsx)(A.BodyWave, {}), (0, i.jsx)("div", {
                        className: p.lowerBodyBackgroundImage
                    })]
                }), (0, i.jsx)(a.VisibilitySensor, {
                    onChange: M,
                    children: (0, i.jsx)("div", {
                        className: p.persistentCtaSpacer
                    })
                })]
            }), (0, i.jsx)(I.default, {
                guild: n,
                isVisible: !R,
                closeLayer: v
            })]
        })
    }
}