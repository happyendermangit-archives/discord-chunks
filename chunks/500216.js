function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SeasonalGiftIcon: function() {
            return V
        }
    });
    var r = n("470079"),
        o = n("718017"),
        i = n("898511"),
        a = n("14782"),
        u = n("751848"),
        s = n("784184"),
        l = n("564203"),
        c = n("523263"),
        f = n("649455"),
        d = n("396586"),
        _ = n("510077"),
        E = n("177770"),
        p = n("78074"),
        m = n("348380"),
        y = n("854106"),
        I = n("208454"),
        h = n("813571"),
        O = n("588954"),
        T = n("454372"),
        S = n("123805"),
        v = n("388990"),
        g = n("523018"),
        A = n("830567"),
        b = n("281767"),
        N = n("348201"),
        R = n("868615"),
        C = n("941504"),
        P = n("865615"),
        D = n("23383");

    function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function M(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return L(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var U = [{
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
        w = [{
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
        k = 1 / 300,
        G = v.default.Millis.DAYS_30,
        B = (0, o.animated)(T.default),
        j = (0, o.animated)(S.default),
        F = (0, o.animated)(O.default);

    function V(e) {
        var t, n, i, a, s, l, f, d = e.themeOverride,
            _ = e.hovered,
            E = e.isContentDismissed,
            p = e.boxColors,
            m = void 0 === p ? {
                dark: U,
                light: w
            } : p,
            y = (0, c.default)();
        var I = M((t = _, i = (n = M(r.useState(!1), 2))[0], a = n[1], l = (s = M(r.useState(Math.floor(7 * Math.random())), 2))[0], f = s[1], r.useEffect(function() {
                if (!t) {
                    var e, n = Math.random() <= k;
                    if (a(n), !n) {
                        do e = Math.floor(7 * Math.random()); while (e === l);
                        f(e)
                    }
                }
            }, [t]), [i, l]), 2),
            h = I[0],
            O = I[1],
            T = (0, o.useSpring)({
                reverse: !_,
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
            }),
            S = E ? O : 0,
            v = (0, u.isThemeDark)(null != d ? d : y) ? m.dark[S] : m.light[S];
        return !_ && E ? r.createElement(F, null) : E && h ? r.createElement(j, {
            isDark: (0, u.isThemeDark)(y),
            style: T
        }) : r.createElement(B, {
            boxColor: v.box,
            ribbonColor: v.ribbon,
            style: T
        })
    }
    t.default = r.memo(function(e) {
        var t = e.disabled,
            n = e.channel,
            o = (0, d.default)(f.default.GIFT_BUTTON).analyticsLocations,
            u = M(r.useState(!1), 2),
            c = u[0],
            O = u[1],
            T = (0, i.useStateFromStores)([y.default], function() {
                return !(null === y.default || void 0 === y.default ? void 0 : y.default.hasLayers())
            }),
            S = (0, i.useStateFromStores)([I.default], function() {
                return I.default.getCurrentUser()
            }),
            v = null != S ? g.default.age(S.id) : 0,
            L = !t && T && v >= G,
            U = m.SeasonalGiftingMarketingExperiment.useExperiment({
                location: "ChannelPremiumGiftButton"
            }, {
                autoTrackExposure: L
            }).enabled,
            w = [];
        U && L && w.push(a.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023);
        var k = M((0, E.useSelectedDismissibleContent)(w), 2),
            B = k[0],
            j = k[1],
            F = null != B,
            H = (0, A.useDirectMessageRecipient)(n),
            x = null != H;
        if (t) return null;
        var Y = function() {
                (0, p.default)({
                    isGift: !0,
                    giftRecipient: null == H ? void 0 : H,
                    initialPlanId: null,
                    subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: o,
                    analyticsObject: {
                        page: n.isPrivate() ? b.AnalyticsPages.DM_CHANNEL : b.AnalyticsPages.GUILD_CHANNEL,
                        section: b.AnalyticsSections.CHANNEL_TEXT_AREA,
                        object: b.AnalyticsObjects.SEASONAL_BUTTON_ICON,
                        objectType: b.AnalyticsObjectTypes.GIFT
                    }
                })
            },
            W = r.createElement("div", {
                className: P.container,
                onMouseEnter: function() {
                    !c && O(!0)
                },
                onMouseLeave: function() {
                    O(!1)
                }
            }, F && r.createElement(l.default, {
                onComplete: function() {
                    return O(!1)
                },
                onDMCheckItOutClick: Y,
                markAsDismissed: j,
                isDM: x
            }), r.createElement(h.default, {
                innerClassName: D.button,
                "aria-label": C.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                isActive: !1,
                onClick: function() {
                    O(!1), (0, _.markDismissibleContentAsDismissed)(a.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023, {
                        dismissAction: N.ContentDismissActionType.TAKE_ACTION
                    }), Y()
                }
            }, r.createElement("div", {
                className: P.noPointerEvents
            }, r.createElement(V, {
                hovered: c,
                isContentDismissed: !F
            }))));
        return F ? W : r.createElement(s.TooltipContainer, {
            className: P.container,
            text: (0, l.getSeasonalGiftingBody)(x)
        }, W)
    })
}