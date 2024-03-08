function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("446674"),
        a = n("472861"),
        s = n("77078"),
        r = n("150216"),
        o = n("129408"),
        u = n("777053"),
        d = n("375010"),
        c = n("191814"),
        f = n("8161"),
        p = n("613676"),
        m = n("713135"),
        h = n("999203"),
        x = n("609734"),
        E = n("777003"),
        y = n("49111"),
        g = n("782340"),
        S = n("44492");

    function C(e) {
        let {
            user: t,
            guildId: n
        } = e, a = (0, l.useStateFromStores)([m.default], () => {
            var e;
            return null === (e = m.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), s = null != a && (0, p.canInstallApplication)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig
        }), {
            botUpgradeable: o,
            subscriptionGroupListing: u
        } = (0, h.default)({
            user: t,
            guildId: n
        }), {
            enabled: d
        } = r.appStorefrontExperiment.useExperiment({
            location: "BotButtonsSection"
        });
        return s || o ? (0, i.jsx)(E.default, {
            children: (0, i.jsxs)("div", {
                className: S.buttonsContainer,
                children: [(0, i.jsx)(x.default, {
                    application: a,
                    className: S.button
                }), o && (d ? (0, i.jsx)(T, {
                    app: a,
                    listing: null != u ? u : void 0,
                    guildId: n
                }) : (0, i.jsx)(I, {
                    guildId: n,
                    listing: u
                }))]
            })
        }) : null
    }

    function I(e) {
        let {
            listing: t,
            guildId: n
        } = e, l = null != t ? (0, o.getPayableSubscriptionListing)(t) : null, {
            openModal: a
        } = (0, d.default)({
            listing: l,
            guildId: n,
            groupListingId: null == t ? void 0 : t.id,
            showBenefitsFirst: !0,
            analyticsLocation: y.AnalyticsLocations.BOT_PROFILE_POPOUT
        });
        return (0, i.jsx)(u.default, {
            onClick: a,
            className: S.button,
            children: (0, i.jsxs)("div", {
                className: S.botUpgradeButtonContent,
                children: [(0, i.jsx)(f.default, {
                    width: 16,
                    height: 16
                }), (0, i.jsx)(c.default, {
                    size: 4,
                    horizontal: !0
                }), g.default.Messages.BOT_PROFILE_UPGRADE_CTA]
            })
        })
    }

    function T(e) {
        let {
            app: t,
            listing: l,
            guildId: r
        } = e;
        return null == t || null == r ? null : (0, i.jsx)(u.default, {
            onClick: () => (function(e, t, l) {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("474956").then(n.bind(n, "474956"));
                    return n => (0, i.jsx)(a, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: e.id,
                        subscriptionGroupListing: t,
                        guildId: l
                    })
                })
            })(t, l, r),
            className: S.button,
            children: (0, i.jsxs)("div", {
                className: S.botUpgradeButtonContent,
                children: [(0, i.jsx)(a.ShopSparkleIcon, {
                    width: 16,
                    height: 16,
                    color: "#fff"
                }), (0, i.jsx)(c.default, {
                    size: 4,
                    horizontal: !0
                }), g.default.Messages.STOREFRONT]
            })
        })
    }
}