function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return B
        }
    });
    var t = E("37983"),
        o = E("884691"),
        n = E("414456"),
        r = E.n(n),
        i = E("446674"),
        a = E("77078"),
        I = E("913144"),
        s = E("79112"),
        T = E("206625"),
        S = E("206230"),
        N = E("812204"),
        O = E("685665"),
        A = E("917247"),
        R = E("635956"),
        l = E("891653"),
        u = E("697218"),
        L = E("381546"),
        C = E("599110"),
        D = E("719923"),
        c = E("805199"),
        d = E("433724"),
        U = E("49111"),
        M = E("994428"),
        h = E("646718"),
        P = E("782340"),
        m = E("739471");
    let G = () => {
            I.default.dispatch({
                type: "APP_ICON_EDITOR_CLOSE"
            })
        },
        p = () => {
            var e, _, E;
            let o = (0, i.useStateFromStores)([u.default], () => D.default.isPremium(u.default.getCurrentUser())),
                n = (0, A.usePremiumTrialOffer)(),
                r = (null == n ? void 0 : null === (e = n.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === h.PremiumSubscriptionSKUs.TIER_2;
            return (0, t.jsx)(R.default, {
                size: a.Button.Sizes.MEDIUM,
                buttonText: o ? P.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : r ? (0, D.formatTrialCtaIntervalDuration)({
                    intervalType: null == n ? void 0 : null === (_ = n.subscription_trial) || void 0 === _ ? void 0 : _.interval,
                    intervalCount: null == n ? void 0 : null === (E = n.subscription_trial) || void 0 === E ? void 0 : E.interval_count
                }) : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2
            })
        },
        g = e => {
            let {
                markAsDismissed: _
            } = e, E = () => {
                null == _ || _(M.ContentDismissActionType.DISMISS), G()
            };
            return (0, t.jsxs)("div", {
                className: m.editorHeader,
                children: [(0, t.jsx)(a.Clickable, {
                    className: m.closeCircleButton,
                    onClick: () => E(),
                    children: (0, t.jsx)(L.default, {
                        className: m.closeCircle
                    })
                }), (0, t.jsxs)("div", {
                    className: m.title,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "heading-lg/extrabold",
                        children: P.default.Messages.APP_ICON_PREVIEW_TITLE
                    }), (0, t.jsx)(l.default, {
                        className: m.premiumIcon
                    })]
                })]
            })
        },
        y = e => {
            let {
                isCoachmark: _,
                markAsDismissed: E
            } = e, o = (0, i.useStateFromStores)([c.default], () => c.default.isUpsellPreview);
            return (0, t.jsxs)("div", {
                className: m.editorFooter,
                children: [o && (0, t.jsx)(p, {}), (0, t.jsx)(a.Button, {
                    className: m.footerButton,
                    onClick: () => {
                        null == E || E(M.ContentDismissActionType.DISMISS), G(), !_ && s.default.open()
                    },
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.MEDIUM,
                    children: o || _ ? P.default.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW : P.default.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS
                })]
            })
        };

    function B(e) {
        let {
            isCoachmark: _,
            markAsDismissed: E
        } = e, {
            analyticsLocations: n,
            AnalyticsLocationProvider: I
        } = (0, O.default)(N.default.APP_ICON_EDITOR), s = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser()), {
            isUpsellPreview: A,
            isEditorOpen: R,
            shouldEditorAnimate: l
        } = (0, i.useStateFromStoresObject)([c.default, S.default], () => ({
            isUpsellPreview: c.default.isUpsellPreview,
            isEditorOpen: c.default.isEditorOpen,
            shouldEditorAnimate: _ && !S.default.useReducedMotion
        }));
        o.useEffect(() => {
            A && C.default.track(U.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: h.PremiumUpsellTypes.APP_ICON_UPSELL,
                location_stack: n
            })
        }, [A, n]);
        let L = (0, T.default)(null, A ? G : U.NOOP);
        return (o.useEffect(() => {
            if (A && !R) return G
        }, [A, R]), null == s) ? null : (0, t.jsx)(I, {
            children: (0, t.jsx)("div", {
                ref: L,
                className: r(m.editor, l ? m.editorAnimate : null),
                children: (0, t.jsxs)(a.HeadingLevel, {
                    children: [(0, t.jsx)(g, {
                        markAsDismissed: E
                    }), (0, t.jsx)(a.Scroller, {
                        className: m.editorBody,
                        children: (0, t.jsx)(d.default, {
                            className: m.selectionGroup
                        })
                    }), (0, t.jsx)(y, {
                        markAsDismissed: E,
                        isCoachmark: _
                    })]
                })
            })
        })
    }
}