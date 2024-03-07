function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("446674"),
        a = n("472861"),
        s = n("77078"),
        r = n("150216"),
        o = n("129408"),
        u = n("777053"),
        d = n("375010"),
        c = n("191814"),
        f = n("8161"),
        m = n("613676"),
        p = n("713135"),
        h = n("999203"),
        E = n("609734"),
        g = n("777003"),
        S = n("49111"),
        C = n("782340"),
        T = n("44492");

    function v(e) {
        let {
            user: t,
            guildId: n
        } = e, a = (0, i.useStateFromStores)([p.default], () => {
            var e;
            return null === (e = p.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), s = null != a && (0, m.canInstallApplication)({
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
        return s || o ? (0, l.jsx)(g.default, {
            children: (0, l.jsxs)("div", {
                className: T.buttonsContainer,
                children: [(0, l.jsx)(E.default, {
                    application: a,
                    className: T.button
                }), o && (d ? (0, l.jsx)(_, {
                    app: a,
                    listing: u,
                    guildId: n
                }) : (0, l.jsx)(I, {
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
        } = e, i = null != t ? (0, o.getPayableSubscriptionListing)(t) : null, {
            openModal: a
        } = (0, d.default)({
            listing: i,
            guildId: n,
            groupListingId: null == t ? void 0 : t.id,
            showBenefitsFirst: !0,
            analyticsLocation: S.AnalyticsLocations.BOT_PROFILE_POPOUT
        });
        return (0, l.jsx)(u.default, {
            onClick: a,
            className: T.button,
            children: (0, l.jsxs)("div", {
                className: T.botUpgradeButtonContent,
                children: [(0, l.jsx)(f.default, {
                    width: 16,
                    height: 16
                }), (0, l.jsx)(c.default, {
                    size: 4,
                    horizontal: !0
                }), C.default.Messages.BOT_PROFILE_UPGRADE_CTA]
            })
        })
    }

    function _(e) {
        let {
            app: t,
            listing: i,
            guildId: r
        } = e;
        return null == t || null == i || null == r ? null : (0, l.jsx)(u.default, {
            onClick: () => (function(e, t, i) {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("474956").then(n.bind(n, "474956"));
                    return n => (0, l.jsx)(a, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: e.id,
                        subscriptionGroupListing: t,
                        guildId: i
                    })
                })
            })(t, i, r),
            className: T.button,
            children: (0, l.jsxs)("div", {
                className: T.botUpgradeButtonContent,
                children: [(0, l.jsx)(a.ShopSparkleIcon, {
                    width: 16,
                    height: 16,
                    color: "#fff"
                }), (0, l.jsx)(c.default, {
                    size: 4,
                    horizontal: !0
                }), C.default.Messages.STOREFRONT]
            })
        })
    }
}