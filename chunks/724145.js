function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return B
        }
    }), n("47120"), n("627341");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("278074"),
        l = n("442837"),
        u = n("524437"),
        d = n("481060"),
        _ = n("153867"),
        c = n("230711"),
        E = n("351773"),
        I = n("607070"),
        T = n("100527"),
        f = n("906732"),
        S = n("639119"),
        A = n("197115"),
        h = n("587446"),
        m = n("594174"),
        N = n("696202"),
        O = n("626135"),
        p = n("74538"),
        R = n("238302"),
        C = n("514361"),
        g = n("572397"),
        L = n("705262"),
        D = n("981631"),
        v = n("921944"),
        M = n("474936"),
        y = n("689938"),
        P = n("802212");
    let U = () => (0, i.jsx)("div", {
            className: P.editorHeader,
            children: (0, i.jsxs)("div", {
                className: P.bannerUpsell,
                children: [(0, i.jsx)(h.default, {
                    className: P.premiumIcon
                }), (0, i.jsx)(d.Heading, {
                    variant: "heading-md/bold",
                    color: "always-white",
                    children: y.default.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
                })]
            })
        }),
        b = e => {
            let {
                markAsDismissed: t
            } = e, n = (0, g.useTrackClientThemePreviewEvent)();
            return (0, i.jsxs)("div", {
                className: P.editorHeader,
                children: [(0, i.jsx)(d.Clickable, {
                    className: P.closeCircleButton,
                    onClick: () => {
                        null != t && t(v.ContentDismissActionType.DISMISS), n(D.AnalyticEvents.CLIENT_THEME_PREVIEW_CLOSED), (0, R.closeEditor)()
                    },
                    children: (0, i.jsx)(N.default, {
                        className: P.closeCircle
                    })
                }), (0, i.jsx)(d.Heading, {
                    variant: "heading-lg/extrabold",
                    children: y.default.Messages.CLIENT_THEMES_EDITOR_HEADER
                })]
            })
        },
        G = e => {
            var t, n, r;
            let {
                onSubscribeSuccess: s,
                markAsDismissed: a
            } = e, {
                analyticsLocations: o
            } = (0, f.default)(T.default.CLIENT_THEMES_EDITOR), [c, E] = (0, l.useStateFromStoresArray)([m.default, C.default], () => [C.default.gradientPreset, p.default.isPremium(m.default.getCurrentUser())]), I = (0, S.usePremiumTrialOffer)(), h = (0, p.formatTrialCtaIntervalDuration)({
                intervalType: null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null == I ? void 0 : null === (n = I.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            });
            return (0, i.jsx)(A.default, {
                size: d.Button.Sizes.MEDIUM,
                buttonText: E ? y.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : (null == I ? void 0 : null === (r = I.subscription_trial) || void 0 === r ? void 0 : r.sku_id) === M.PremiumSubscriptionSKUs.TIER_2 ? h : y.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
                onSubscribeModalClose: e => {
                    if (!!e) null == s || s(), null != a && a(v.ContentDismissActionType.PRIMARY), null != c && ((0, L.trackClientThemeUpdated)({
                        isPersisted: !0,
                        themeName: u.BackgroundGradientPresetId[c.id],
                        analyticsLocations: o
                    }), (0, _.saveClientTheme)({
                        backgroundGradientPresetId: c.id,
                        theme: c.theme
                    }))
                }
            })
        },
        w = e => {
            let {
                markAsDismissed: t
            } = e, {
                isPreview: n,
                isCoachmark: s
            } = (0, l.useStateFromStoresObject)([C.default], () => ({
                isPreview: C.default.isPreview,
                isCoachmark: C.default.isCoachmark
            })), [a, u] = r.useState(!1), _ = (0, g.useTrackClientThemePreviewEvent)(), E = (0, o.match)({
                isPreview: n,
                isCoachmark: s,
                forceShowCloseButton: a
            }).with({
                isCoachmark: !0
            }, {
                forceShowCloseButton: !0
            }, () => y.default.Messages.CLOSE).with({
                isPreview: !0
            }, () => y.default.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW).otherwise(() => y.default.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS);
            return (0, i.jsxs)("div", {
                className: P.editorFooter,
                children: [n && (0, i.jsx)(G, {
                    onSubscribeSuccess: () => {
                        u(!0)
                    },
                    markAsDismissed: t
                }), (0, i.jsx)(d.Button, {
                    className: P.footerButton,
                    onClick: () => {
                        null != t && t(v.ContentDismissActionType.DISMISS), _(D.AnalyticEvents.CLIENT_THEME_PREVIEW_CLOSED), (0, R.closeEditor)(), !s && c.default.open()
                    },
                    color: d.Button.Colors.PRIMARY,
                    size: d.Button.Sizes.MEDIUM,
                    children: E
                })]
            })
        };

    function B(e) {
        let {
            markAsDismissed: t
        } = e, {
            analyticsLocations: n
        } = (0, f.default)(T.default.CLIENT_THEMES_EDITOR), {
            isPreview: s,
            isCoachmark: o,
            isEditorOpen: u,
            shouldEditorAnimate: _
        } = (0, l.useStateFromStoresObject)([C.default, I.default], () => ({
            isPreview: C.default.isPreview,
            isCoachmark: C.default.isCoachmark,
            isEditorOpen: C.default.isEditorOpen,
            shouldEditorAnimate: C.default.isCoachmark && !I.default.useReducedMotion
        })), c = (0, g.useTrackClientThemePreviewEvent)();
        r.useEffect(() => c(D.AnalyticEvents.CLIENT_THEME_PREVIEW_VIEWED), [c]), r.useEffect(() => {
            s && O.default.track(D.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: M.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: n
            })
        }, [s, n]);
        let S = (0, g.useResetClientThemePreview)(),
            A = (0, E.default)(null, s ? S : D.NOOP);
        return r.useEffect(() => {
            if (s && !u) return S
        }, [s, u, S]), (0, i.jsx)(f.AnalyticsLocationProvider, {
            value: n,
            children: (0, i.jsx)("div", {
                ref: A,
                className: a()(P.themeEditor, _ ? P.editorAnimate : null),
                children: (0, i.jsxs)(d.HeadingLevel, {
                    children: [o ? (0, i.jsx)(U, {}) : (0, i.jsx)(b, {
                        markAsDismissed: t
                    }), (0, i.jsx)(d.Scroller, {
                        className: P.editorBody,
                        children: (0, i.jsxs)(L.default, {
                            type: L.ThemeSelectionGroupType.EDITOR,
                            children: [!s && (0, i.jsx)(L.default.Basic, {
                                className: P.selectionGroup
                            }), (0, i.jsx)(L.default.Gradient, {
                                className: P.selectionGroup
                            })]
                        })
                    }), (0, i.jsx)(w, {
                        markAsDismissed: t
                    })]
                })
            })
        })
    }
}