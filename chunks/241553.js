function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SeasonalGiftIcon: function() {
            return V
        }
    }), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("718017"),
        a = n("442837"),
        o = n("524437"),
        l = n("780384"),
        u = n("481060"),
        d = n("845538"),
        _ = n("410030"),
        c = n("100527"),
        E = n("906732"),
        I = n("605236"),
        T = n("243778"),
        f = n("963249"),
        S = n("646476"),
        h = n("819640"),
        A = n("594174"),
        m = n("147915"),
        N = n("559629"),
        p = n("965645"),
        O = n("362061"),
        R = n("70956"),
        C = n("709054"),
        g = n("51144"),
        L = n("981631"),
        D = n("921944"),
        v = n("474936"),
        M = n("689938"),
        y = n("865615"),
        P = n("23383");
    let U = [{
            box: "#FFD89E",
            ribbon: "#FF7476"
        }, {
            box: "#17B5E2",
            ribbon: "#FFFFFF"
        }, {
            box: "#EED169",
            ribbon: "#51A1EB"
        }, {
            box: "#509C65",
            ribbon: "#FFC96E"
        }, {
            box: "#E4578A",
            ribbon: "#BEC4FF"
        }, {
            box: "#AFE0FC",
            ribbon: "#FF9356"
        }, {
            box: "#DB6D6D",
            ribbon: "#67DA9C"
        }],
        b = [{
            box: "#EABB75",
            ribbon: "#E4595C"
        }, {
            box: "#2D7AA5",
            ribbon: "#64C7C2"
        }, {
            box: "#ECBF21",
            ribbon: "#51A1EB"
        }, {
            box: "#439359",
            ribbon: "#D5A24C"
        }, {
            box: "#FC90C4",
            ribbon: "#777FCE"
        }, {
            box: "#549DC6",
            ribbon: "#FF9356"
        }, {
            box: "#DB6F6F",
            ribbon: "#81C29F"
        }],
        G = 1 / 300,
        w = R.default.Millis.DAYS_30,
        k = (0, s.animated)(p.default),
        B = (0, s.animated)(O.default),
        F = (0, s.animated)(N.default);

    function V(e) {
        let {
            themeOverride: t,
            hovered: n,
            isContentDismissed: a,
            boxColors: o = {
                dark: U,
                light: b
            }
        } = e, u = (0, _.default)(), [d, c] = function(e) {
            let [t, n] = r.useState(!1), [i, s] = r.useState(Math.floor(7 * Math.random()));
            return r.useEffect(() => {
                if (e) return;
                let t = Math.random() <= G;
                if (n(t), !t) {
                    let e;
                    do e = Math.floor(7 * Math.random()); while (e === i);
                    s(e)
                }
            }, [e]), [t, i]
        }(n), E = (0, s.useSpring)({
            reverse: !n,
            reset: !0,
            from: {
                scale: 1
            },
            to: {
                scale: 1.14
            },
            config: {
                tension: 800,
                friction: 24
            }
        }), I = a ? c : 0, T = (0, l.isThemeDark)(null != t ? t : u) ? o.dark[I] : o.light[I];
        return !n && a ? (0, i.jsx)(F, {}) : a && d ? (0, i.jsx)(B, {
            isDark: (0, l.isThemeDark)(u),
            style: E
        }) : (0, i.jsx)(k, {
            boxColor: T.box,
            ribbonColor: T.ribbon,
            style: E
        })
    }
    t.default = r.memo(function(e) {
        let {
            disabled: t,
            channel: n
        } = e, {
            analyticsLocations: s
        } = (0, E.default)(c.default.GIFT_BUTTON), [l, _] = r.useState(!1), N = (0, a.useStateFromStores)([h.default], () => !(null === h.default || void 0 === h.default ? void 0 : h.default.hasLayers())), p = (0, a.useStateFromStores)([A.default], () => A.default.getCurrentUser()), O = null != p ? C.default.age(p.id) : 0, R = !t && N && O >= w, {
            enabled: U
        } = S.SeasonalGiftingMarketingExperiment.useExperiment({
            location: "ChannelPremiumGiftButton"
        }, {
            autoTrackExposure: R
        }), b = [];
        U && R && b.push(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023);
        let [G, k] = (0, T.useSelectedDismissibleContent)(b), B = null != G, F = (0, g.useDirectMessageRecipient)(n), x = null != F;
        if (t) return null;
        let H = () => {
                (0, f.default)({
                    isGift: !0,
                    giftRecipient: null == F ? void 0 : F,
                    initialPlanId: null,
                    subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: s,
                    analyticsObject: {
                        page: n.isPrivate() ? L.AnalyticsPages.DM_CHANNEL : L.AnalyticsPages.GUILD_CHANNEL,
                        section: L.AnalyticsSections.CHANNEL_TEXT_AREA,
                        object: L.AnalyticsObjects.SEASONAL_BUTTON_ICON,
                        objectType: L.AnalyticsObjectTypes.GIFT
                    }
                })
            },
            Y = (0, i.jsxs)("div", {
                className: y.container,
                onMouseEnter: () => {
                    !l && _(!0)
                },
                onMouseLeave: () => {
                    _(!1)
                },
                children: [B && (0, i.jsx)(d.default, {
                    onComplete: () => _(!1),
                    onDMCheckItOutClick: H,
                    markAsDismissed: k,
                    isDM: x
                }), (0, i.jsx)(m.default, {
                    innerClassName: P.button,
                    "aria-label": M.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                    isActive: !1,
                    onClick: () => {
                        _(!1), (0, I.markDismissibleContentAsDismissed)(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023, {
                            dismissAction: D.ContentDismissActionType.TAKE_ACTION
                        }), H()
                    },
                    children: (0, i.jsx)("div", {
                        className: y.noPointerEvents,
                        children: (0, i.jsx)(V, {
                            hovered: l,
                            isContentDismissed: !B
                        })
                    })
                })]
            });
        return B ? Y : (0, i.jsx)(u.TooltipContainer, {
            className: y.container,
            text: (0, d.getSeasonalGiftingBody)(x),
            children: Y
        })
    })
}