function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return U
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("570140"),
        d = n("230711"),
        _ = n("351773"),
        c = n("607070"),
        E = n("100527"),
        I = n("906732"),
        T = n("639119"),
        f = n("197115"),
        S = n("587446"),
        A = n("594174"),
        h = n("696202"),
        m = n("626135"),
        N = n("74538"),
        O = n("327943"),
        p = n("539873"),
        R = n("981631"),
        C = n("921944"),
        g = n("474936"),
        L = n("689938"),
        D = n("366133");
    let v = () => {
            u.default.dispatch({
                type: "APP_ICON_EDITOR_CLOSE"
            })
        },
        M = () => {
            var e, t, n;
            let r = (0, o.useStateFromStores)([A.default], () => N.default.isPremium(A.default.getCurrentUser())),
                s = (0, T.usePremiumTrialOffer)(),
                a = (null == s ? void 0 : null === (e = s.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === g.PremiumSubscriptionSKUs.TIER_2;
            return (0, i.jsx)(f.default, {
                size: l.Button.Sizes.MEDIUM,
                buttonText: r ? L.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : a ? (0, N.formatTrialCtaIntervalDuration)({
                    intervalType: null == s ? void 0 : null === (t = s.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == s ? void 0 : null === (n = s.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                }) : L.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2
            })
        },
        y = e => {
            let {
                markAsDismissed: t
            } = e, n = () => {
                null == t || t(C.ContentDismissActionType.DISMISS), v()
            };
            return (0, i.jsxs)("div", {
                className: D.editorHeader,
                children: [(0, i.jsx)(l.Clickable, {
                    className: D.closeCircleButton,
                    onClick: () => n(),
                    children: (0, i.jsx)(h.default, {
                        className: D.closeCircle
                    })
                }), (0, i.jsxs)("div", {
                    className: D.title,
                    children: [(0, i.jsx)(l.Heading, {
                        variant: "heading-lg/extrabold",
                        children: L.default.Messages.APP_ICON_PREVIEW_TITLE
                    }), (0, i.jsx)(S.default, {
                        className: D.premiumIcon
                    })]
                })]
            })
        },
        P = e => {
            let {
                isCoachmark: t,
                markAsDismissed: n
            } = e, r = (0, o.useStateFromStores)([O.default], () => O.default.isUpsellPreview);
            return (0, i.jsxs)("div", {
                className: D.editorFooter,
                children: [r && (0, i.jsx)(M, {}), (0, i.jsx)(l.Button, {
                    className: D.footerButton,
                    onClick: () => {
                        null == n || n(C.ContentDismissActionType.DISMISS), v(), !t && d.default.open()
                    },
                    color: l.Button.Colors.PRIMARY,
                    size: l.Button.Sizes.MEDIUM,
                    children: r || t ? L.default.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW : L.default.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS
                })]
            })
        };

    function U(e) {
        let {
            isCoachmark: t,
            markAsDismissed: n
        } = e, {
            analyticsLocations: s
        } = (0, I.default)(E.default.APP_ICON_EDITOR), u = (0, o.useStateFromStores)([A.default], () => A.default.getCurrentUser()), {
            isUpsellPreview: d,
            isEditorOpen: T,
            shouldEditorAnimate: f
        } = (0, o.useStateFromStoresObject)([O.default, c.default], () => ({
            isUpsellPreview: O.default.isUpsellPreview,
            isEditorOpen: O.default.isEditorOpen,
            shouldEditorAnimate: t && !c.default.useReducedMotion
        }));
        r.useEffect(() => {
            d && m.default.track(R.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: g.PremiumUpsellTypes.APP_ICON_UPSELL,
                location_stack: s
            })
        }, [d, s]);
        let S = (0, _.default)(null, d ? v : R.NOOP);
        return (r.useEffect(() => {
            if (d && !T) return v
        }, [d, T]), null == u) ? null : (0, i.jsx)(I.AnalyticsLocationProvider, {
            value: s,
            children: (0, i.jsx)("div", {
                ref: S,
                className: a()(D.editor, f ? D.editorAnimate : null),
                children: (0, i.jsxs)(l.HeadingLevel, {
                    children: [(0, i.jsx)(y, {
                        markAsDismissed: n
                    }), (0, i.jsx)(l.Scroller, {
                        className: D.editorBody,
                        children: (0, i.jsx)(p.default, {
                            className: D.selectionGroup
                        })
                    }), (0, i.jsx)(P, {
                        markAsDismissed: n,
                        isCoachmark: t
                    })]
                })
            })
        })
    }
}