function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return b
        }
    }), E("222007"), E("794252");
    var t = E("37983"),
        o = E("884691"),
        n = E("414456"),
        r = E.n(n),
        a = E("506838"),
        i = E("446674"),
        I = E("151426"),
        T = E("77078"),
        s = E("452804"),
        S = E("79112"),
        N = E("206625"),
        O = E("206230"),
        A = E("812204"),
        R = E("685665"),
        l = E("917247"),
        u = E("635956"),
        L = E("891653"),
        C = E("697218"),
        D = E("381546"),
        c = E("599110"),
        d = E("719923"),
        U = E("32531"),
        M = E("714657"),
        h = E("770867"),
        P = E("648114"),
        m = E("49111"),
        G = E("994428"),
        p = E("646718"),
        g = E("782340"),
        y = E("537167");
    let B = () => (0, t.jsx)("div", {
            className: y.editorHeader,
            children: (0, t.jsxs)("div", {
                className: y.bannerUpsell,
                children: [(0, t.jsx)(L.default, {
                    className: y.premiumIcon
                }), (0, t.jsx)(T.Heading, {
                    variant: "heading-md/bold",
                    color: "always-white",
                    children: g.default.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
                })]
            })
        }),
        f = e => {
            let {
                markAsDismissed: _
            } = e, E = (0, h.useTrackClientThemePreviewEvent)();
            return (0, t.jsxs)("div", {
                className: y.editorHeader,
                children: [(0, t.jsx)(T.Clickable, {
                    className: y.closeCircleButton,
                    onClick: () => {
                        null != _ && _(G.ContentDismissActionType.DISMISS), E(m.AnalyticEvents.CLIENT_THEME_PREVIEW_CLOSED), (0, U.closeEditor)()
                    },
                    children: (0, t.jsx)(D.default, {
                        className: y.closeCircle
                    })
                }), (0, t.jsx)(T.Heading, {
                    variant: "heading-lg/extrabold",
                    children: g.default.Messages.CLIENT_THEMES_EDITOR_HEADER
                })]
            })
        },
        H = e => {
            var _, E, o;
            let {
                onSubscribeSuccess: n,
                markAsDismissed: r
            } = e, {
                analyticsLocations: a
            } = (0, R.default)(A.default.CLIENT_THEMES_EDITOR), [S, N] = (0, i.useStateFromStoresArray)([C.default, M.default], () => [M.default.gradientPreset, d.default.isPremium(C.default.getCurrentUser())]), O = (0, l.usePremiumTrialOffer)(), L = (0, d.formatTrialCtaIntervalDuration)({
                intervalType: null == O ? void 0 : null === (_ = O.subscription_trial) || void 0 === _ ? void 0 : _.interval,
                intervalCount: null == O ? void 0 : null === (E = O.subscription_trial) || void 0 === E ? void 0 : E.interval_count
            });
            return (0, t.jsx)(u.default, {
                size: T.Button.Sizes.MEDIUM,
                buttonText: N ? g.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : (null == O ? void 0 : null === (o = O.subscription_trial) || void 0 === o ? void 0 : o.sku_id) === p.PremiumSubscriptionSKUs.TIER_2 ? L : g.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
                onSubscribeModalClose: e => {
                    if (!!e) null == n || n(), null != r && r(G.ContentDismissActionType.PRIMARY), null != S && ((0, P.trackClientThemeUpdated)({
                        isPersisted: !0,
                        themeName: I.BackgroundGradientPresetId[S.id],
                        analyticsLocations: a
                    }), (0, s.saveClientTheme)({
                        backgroundGradientPresetId: S.id,
                        theme: S.theme
                    }))
                }
            })
        },
        v = e => {
            let {
                markAsDismissed: _
            } = e, {
                isPreview: E,
                isCoachmark: n
            } = (0, i.useStateFromStoresObject)([M.default], () => ({
                isPreview: M.default.isPreview,
                isCoachmark: M.default.isCoachmark
            })), [r, I] = o.useState(!1), s = (0, h.useTrackClientThemePreviewEvent)(), N = (0, a.match)({
                isPreview: E,
                isCoachmark: n,
                forceShowCloseButton: r
            }).with({
                isCoachmark: !0
            }, {
                forceShowCloseButton: !0
            }, () => g.default.Messages.CLOSE).with({
                isPreview: !0
            }, () => g.default.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW).otherwise(() => g.default.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS);
            return (0, t.jsxs)("div", {
                className: y.editorFooter,
                children: [E && (0, t.jsx)(H, {
                    onSubscribeSuccess: () => {
                        I(!0)
                    },
                    markAsDismissed: _
                }), (0, t.jsx)(T.Button, {
                    className: y.footerButton,
                    onClick: () => {
                        null != _ && _(G.ContentDismissActionType.DISMISS), s(m.AnalyticEvents.CLIENT_THEME_PREVIEW_CLOSED), (0, U.closeEditor)(), !n && S.default.open()
                    },
                    color: T.Button.Colors.PRIMARY,
                    size: T.Button.Sizes.MEDIUM,
                    children: N
                })]
            })
        };

    function b(e) {
        let {
            markAsDismissed: _
        } = e, {
            analyticsLocations: E,
            AnalyticsLocationProvider: n
        } = (0, R.default)(A.default.CLIENT_THEMES_EDITOR), {
            isPreview: a,
            isCoachmark: I,
            isEditorOpen: s,
            shouldEditorAnimate: S
        } = (0, i.useStateFromStoresObject)([M.default, O.default], () => ({
            isPreview: M.default.isPreview,
            isCoachmark: M.default.isCoachmark,
            isEditorOpen: M.default.isEditorOpen,
            shouldEditorAnimate: M.default.isCoachmark && !O.default.useReducedMotion
        })), l = (0, h.useTrackClientThemePreviewEvent)();
        o.useEffect(() => l(m.AnalyticEvents.CLIENT_THEME_PREVIEW_VIEWED), [l]), o.useEffect(() => {
            a && c.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: p.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: E
            })
        }, [a, E]);
        let u = (0, h.useResetClientThemePreview)(),
            L = (0, N.default)(null, a ? u : m.NOOP);
        return o.useEffect(() => {
            if (a && !s) return u
        }, [a, s, u]), (0, t.jsx)(n, {
            children: (0, t.jsx)("div", {
                ref: L,
                className: r(y.themeEditor, S ? y.editorAnimate : null),
                children: (0, t.jsxs)(T.HeadingLevel, {
                    children: [I ? (0, t.jsx)(B, {}) : (0, t.jsx)(f, {
                        markAsDismissed: _
                    }), (0, t.jsx)(T.Scroller, {
                        className: y.editorBody,
                        children: (0, t.jsxs)(P.default, {
                            type: P.ThemeSelectionGroupType.EDITOR,
                            children: [!a && (0, t.jsx)(P.default.Basic, {
                                className: y.selectionGroup
                            }), (0, t.jsx)(P.default.Gradient, {
                                className: y.selectionGroup
                            })]
                        })
                    }), (0, t.jsx)(v, {
                        markAsDismissed: _
                    })]
                })
            })
        })
    }
}