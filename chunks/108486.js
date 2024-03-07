function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SeasonalGiftIcon: function() {
            return G
        },
        default: function() {
            return B
        }
    }), n("222007"), n("424973");
    var l = n("37983"),
        i = n("884691"),
        a = n("907002"),
        s = n("446674"),
        r = n("151426"),
        o = n("819855"),
        u = n("77078"),
        d = n("150077"),
        c = n("841098"),
        f = n("812204"),
        m = n("685665"),
        p = n("10641"),
        h = n("384997"),
        E = n("649844"),
        g = n("53253"),
        S = n("778588"),
        C = n("697218"),
        T = n("551305"),
        v = n("978679"),
        I = n("953957"),
        _ = n("762974"),
        N = n("718517"),
        A = n("299039"),
        x = n("158998"),
        y = n("49111"),
        O = n("994428"),
        R = n("646718"),
        M = n("782340"),
        L = n("240497"),
        P = n("350583");
    let b = [{
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
        j = [{
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
        U = 1 / 300,
        D = N.default.Millis.DAYS_30,
        k = (0, a.animated)(I.default),
        w = (0, a.animated)(_.default),
        F = (0, a.animated)(v.default);

    function G(e) {
        let {
            themeOverride: t,
            hovered: n,
            isContentDismissed: s,
            boxColors: r = {
                dark: b,
                light: j
            }
        } = e, u = (0, c.default)(), [d, f] = function(e) {
            let [t, n] = i.useState(!1), [l, a] = i.useState(Math.floor(7 * Math.random()));
            return i.useEffect(() => {
                if (e) return;
                let t = Math.random() <= U;
                if (n(t), !t) {
                    let e;
                    do e = Math.floor(7 * Math.random()); while (e === l);
                    a(e)
                }
            }, [e]), [t, l]
        }(n), m = (0, a.useSpring)({
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
        }), p = s ? f : 0, h = (0, o.isThemeDark)(null != t ? t : u) ? r.dark[p] : r.light[p];
        return !n && s ? (0, l.jsx)(F, {}) : s && d ? (0, l.jsx)(w, {
            isDark: (0, o.isThemeDark)(u),
            style: m
        }) : (0, l.jsx)(k, {
            boxColor: h.box,
            ribbonColor: h.ribbon,
            style: m
        })
    }
    var B = i.memo(function(e) {
        let {
            disabled: t,
            channel: n
        } = e, {
            analyticsLocations: a
        } = (0, m.default)(f.default.GIFT_BUTTON), [o, c] = i.useState(!1), v = (0, s.useStateFromStores)([S.default], () => !(null === S.default || void 0 === S.default ? void 0 : S.default.hasLayers())), I = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), _ = null != I ? A.default.age(I.id) : 0, N = !t && v && _ >= D, {
            enabled: b
        } = g.SeasonalGiftingMarketingExperiment.useExperiment({
            location: "ChannelPremiumGiftButton"
        }, {
            autoTrackExposure: N
        }), j = [];
        b && N && j.push(r.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023);
        let [U, k] = (0, h.useSelectedDismissibleContent)(j), w = null != U, F = (0, x.useDirectMessageRecipient)(n), B = null != F;
        if (t) return null;
        let H = () => {
                (0, E.default)({
                    isGift: !0,
                    giftRecipient: null == F ? void 0 : F,
                    initialPlanId: null,
                    subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: a,
                    analyticsObject: {
                        page: n.isPrivate() ? y.AnalyticsPages.DM_CHANNEL : y.AnalyticsPages.GUILD_CHANNEL,
                        section: y.AnalyticsSections.CHANNEL_TEXT_AREA,
                        object: y.AnalyticsObjects.SEASONAL_BUTTON_ICON,
                        objectType: y.AnalyticsObjectTypes.GIFT
                    }
                })
            },
            V = (0, l.jsxs)("div", {
                className: L.container,
                onMouseEnter: () => {
                    !o && c(!0)
                },
                onMouseLeave: () => {
                    c(!1)
                },
                children: [w && (0, l.jsx)(d.default, {
                    onComplete: () => c(!1),
                    onDMCheckItOutClick: H,
                    markAsDismissed: k,
                    isDM: B
                }), (0, l.jsx)(T.default, {
                    innerClassName: P.button,
                    "aria-label": M.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                    isActive: !1,
                    onClick: () => {
                        c(!1), (0, p.markDismissibleContentAsDismissed)(r.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023, {
                            dismissAction: O.ContentDismissActionType.TAKE_ACTION
                        }), H()
                    },
                    children: (0, l.jsx)("div", {
                        className: L.noPointerEvents,
                        children: (0, l.jsx)(G, {
                            hovered: o,
                            isContentDismissed: !w
                        })
                    })
                })]
            });
        return w ? V : (0, l.jsx)(u.TooltipContainer, {
            className: L.container,
            text: (0, d.getSeasonalGiftingBody)(B),
            children: V
        })
    })
}