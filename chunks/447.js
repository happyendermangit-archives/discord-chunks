function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("629815"),
        l = n("482644"),
        c = n("9010"),
        f = n("622780"),
        d = n("649455"),
        _ = n("396586"),
        E = n("844615"),
        p = n("742971"),
        m = n("118197"),
        y = n("208454"),
        I = n("437404"),
        h = n("870331"),
        O = n("830721"),
        T = n("738223"),
        S = n("52081"),
        v = n("281767"),
        g = n("348201"),
        A = n("868615"),
        b = n("941504"),
        N = n("366133"),
        R = function() {
            s.default.dispatch({
                type: "APP_ICON_EDITOR_CLOSE"
            })
        },
        C = function() {
            var e, t, n, o = (0, a.useStateFromStores)([y.default], function() {
                    return O.default.isPremium(y.default.getCurrentUser())
                }),
                i = (0, E.usePremiumTrialOffer)(),
                s = (null == i ? void 0 : null === (e = i.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === A.PremiumSubscriptionSKUs.TIER_2;
            return r.createElement(p.default, {
                size: u.Button.Sizes.MEDIUM,
                buttonText: o ? b.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : s ? (0, O.formatTrialCtaIntervalDuration)({
                    intervalType: null == i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == i ? void 0 : null === (n = i.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                }) : b.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2
            })
        },
        P = function(e) {
            var t = e.markAsDismissed,
                n = function() {
                    null == t || t(g.ContentDismissActionType.DISMISS), R()
                };
            return r.createElement("div", {
                className: N.editorHeader
            }, r.createElement(u.Clickable, {
                className: N.closeCircleButton,
                onClick: function() {
                    return n()
                }
            }, r.createElement(I.default, {
                className: N.closeCircle
            })), r.createElement("div", {
                className: N.title
            }, r.createElement(u.Heading, {
                variant: "heading-lg/extrabold"
            }, b.default.Messages.APP_ICON_PREVIEW_TITLE), r.createElement(m.default, {
                className: N.premiumIcon
            })))
        },
        D = function(e) {
            var t = e.isCoachmark,
                n = e.markAsDismissed,
                o = (0, a.useStateFromStores)([T.default], function() {
                    return T.default.isUpsellPreview
                });
            return r.createElement("div", {
                className: N.editorFooter
            }, o && r.createElement(C, null), r.createElement(u.Button, {
                className: N.footerButton,
                onClick: function() {
                    null == n || n(g.ContentDismissActionType.DISMISS), R(), !t && l.default.open()
                },
                color: u.Button.Colors.PRIMARY,
                size: u.Button.Sizes.MEDIUM
            }, o || t ? b.default.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW : b.default.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS))
        };

    function L(e) {
        var t = e.isCoachmark,
            n = e.markAsDismissed,
            o = (0, _.default)(d.default.APP_ICON_EDITOR).analyticsLocations,
            s = (0, a.useStateFromStores)([y.default], function() {
                return y.default.getCurrentUser()
            }),
            l = (0, a.useStateFromStoresObject)([T.default, f.default], function() {
                return {
                    isUpsellPreview: T.default.isUpsellPreview,
                    isEditorOpen: T.default.isEditorOpen,
                    shouldEditorAnimate: t && !f.default.useReducedMotion
                }
            }),
            E = l.isUpsellPreview,
            p = l.isEditorOpen,
            m = l.shouldEditorAnimate;
        r.useEffect(function() {
            E && h.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: A.PremiumUpsellTypes.APP_ICON_UPSELL,
                location_stack: o
            })
        }, [E, o]);
        var I = (0, c.default)(null, E ? R : v.NOOP);
        return (r.useEffect(function() {
            if (E && !p) return R
        }, [E, p]), null == s) ? null : r.createElement(_.AnalyticsLocationProvider, {
            value: o
        }, r.createElement("div", {
            ref: I,
            className: i()(N.editor, m ? N.editorAnimate : null)
        }, r.createElement(u.HeadingLevel, null, r.createElement(P, {
            markAsDismissed: n
        }), r.createElement(u.Scroller, {
            className: N.editorBody
        }, r.createElement(S.default, {
            className: N.selectionGroup
        })), r.createElement(D, {
            markAsDismissed: n,
            isCoachmark: t
        }))))
    }
}