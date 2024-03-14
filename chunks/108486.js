function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SeasonalGiftIcon: function() {
            return B
        },
        default: function() {
            return G
        }
    }), n("222007"), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("907002"),
        s = n("446674"),
        r = n("151426"),
        o = n("819855"),
        u = n("77078"),
        d = n("150077"),
        c = n("841098"),
        f = n("812204"),
        p = n("685665"),
        m = n("10641"),
        h = n("384997"),
        x = n("649844"),
        E = n("53253"),
        y = n("778588"),
        g = n("697218"),
        S = n("551305"),
        C = n("978679"),
        I = n("953957"),
        T = n("762974"),
        _ = n("718517"),
        v = n("299039"),
        N = n("158998"),
        A = n("49111"),
        O = n("994428"),
        M = n("646718"),
        R = n("782340"),
        k = n("240497"),
        L = n("350583");
    let P = [{
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
        j = 1 / 300,
        U = _.default.Millis.DAYS_30,
        D = (0, a.animated)(I.default),
        w = (0, a.animated)(T.default),
        F = (0, a.animated)(C.default);

    function B(e) {
        let {
            themeOverride: t,
            hovered: n,
            isContentDismissed: s,
            boxColors: r = {
                dark: P,
                light: b
            }
        } = e, u = (0, c.default)(), [d, f] = function(e) {
            let [t, n] = l.useState(!1), [i, a] = l.useState(Math.floor(7 * Math.random()));
            return l.useEffect(() => {
                if (e) return;
                let t = Math.random() <= j;
                if (n(t), !t) {
                    let e;
                    do e = Math.floor(7 * Math.random()); while (e === i);
                    a(e)
                }
            }, [e]), [t, i]
        }(n), p = (0, a.useSpring)({
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
        }), m = s ? f : 0, h = (0, o.isThemeDark)(null != t ? t : u) ? r.dark[m] : r.light[m];
        return !n && s ? (0, i.jsx)(F, {}) : s && d ? (0, i.jsx)(w, {
            isDark: (0, o.isThemeDark)(u),
            style: p
        }) : (0, i.jsx)(D, {
            boxColor: h.box,
            ribbonColor: h.ribbon,
            style: p
        })
    }
    var G = l.memo(function(e) {
        let {
            disabled: t,
            channel: n
        } = e, {
            analyticsLocations: a
        } = (0, p.default)(f.default.GIFT_BUTTON), [o, c] = l.useState(!1), C = (0, s.useStateFromStores)([y.default], () => !(null === y.default || void 0 === y.default ? void 0 : y.default.hasLayers())), I = (0, s.useStateFromStores)([g.default], () => g.default.getCurrentUser()), T = null != I ? v.default.age(I.id) : 0, _ = !t && C && T >= U, {
            enabled: P
        } = E.SeasonalGiftingMarketingExperiment.useExperiment({
            location: "ChannelPremiumGiftButton"
        }, {
            autoTrackExposure: _
        }), b = [];
        P && _ && b.push(r.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023);
        let [j, D] = (0, h.useSelectedDismissibleContent)(b), w = null != j, F = (0, N.useDirectMessageRecipient)(n), G = null != F;
        if (t) return null;
        let H = () => {
                (0, x.default)({
                    isGift: !0,
                    giftRecipient: null == F ? void 0 : F,
                    initialPlanId: null,
                    subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: a,
                    analyticsObject: {
                        page: n.isPrivate() ? A.AnalyticsPages.DM_CHANNEL : A.AnalyticsPages.GUILD_CHANNEL,
                        section: A.AnalyticsSections.CHANNEL_TEXT_AREA,
                        object: A.AnalyticsObjects.SEASONAL_BUTTON_ICON,
                        objectType: A.AnalyticsObjectTypes.GIFT
                    }
                })
            },
            V = (0, i.jsxs)("div", {
                className: k.container,
                onMouseEnter: () => {
                    !o && c(!0)
                },
                onMouseLeave: () => {
                    c(!1)
                },
                children: [w && (0, i.jsx)(d.default, {
                    onComplete: () => c(!1),
                    onDMCheckItOutClick: H,
                    markAsDismissed: D,
                    isDM: G
                }), (0, i.jsx)(S.default, {
                    innerClassName: L.button,
                    "aria-label": R.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                    isActive: !1,
                    onClick: () => {
                        c(!1), (0, m.markDismissibleContentAsDismissed)(r.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023, {
                            dismissAction: O.ContentDismissActionType.TAKE_ACTION
                        }), H()
                    },
                    children: (0, i.jsx)("div", {
                        className: k.noPointerEvents,
                        children: (0, i.jsx)(B, {
                            hovered: o,
                            isContentDismissed: !w
                        })
                    })
                })]
            });
        return w ? V : (0, i.jsx)(u.TooltipContainer, {
            className: k.container,
            text: (0, d.getSeasonalGiftingBody)(G),
            children: V
        })
    })
}