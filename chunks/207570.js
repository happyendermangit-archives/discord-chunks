function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("395661"),
        o = n("171246"),
        l = n("359610"),
        u = n("886491"),
        d = n("696906"),
        _ = n("682864"),
        c = n("191741"),
        E = n("135431"),
        I = n("621853"),
        T = n("873572"),
        f = n("520978"),
        S = n("659101"),
        h = n("981631"),
        A = n("689938"),
        m = n("220862");

    function N(e) {
        let {
            user: t,
            guildId: n
        } = e, s = (0, r.useStateFromStores)([I.default], () => {
            var e;
            return null === (e = I.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), o = null != s && (0, E.canInstallApplication)({
            customInstallUrl: s.customInstallUrl,
            installParams: s.installParams,
            integrationTypesConfig: s.integrationTypesConfig
        }), {
            botUpgradeable: l,
            subscriptionGroupListing: u
        } = (0, T.default)({
            user: t,
            guildId: n
        }), {
            enabled: d
        } = a.appStorefrontExperiment.useExperiment({
            location: "BotButtonsSection"
        });
        return o || l ? (0, i.jsx)(S.default, {
            children: (0, i.jsxs)("div", {
                className: m.buttonsContainer,
                children: [(0, i.jsx)(f.default, {
                    application: s,
                    className: m.button
                }), l && (d ? (0, i.jsx)(O, {
                    app: s,
                    listing: null != u ? u : void 0,
                    guildId: n
                }) : (0, i.jsx)(p, {
                    guildId: n,
                    listing: u
                }))]
            })
        }) : null
    }

    function p(e) {
        let {
            listing: t,
            guildId: n
        } = e, r = null != t ? (0, o.getPayableSubscriptionListing)(t) : null, {
            openModal: s
        } = (0, d.default)({
            listing: r,
            guildId: n,
            groupListingId: null == t ? void 0 : t.id,
            showBenefitsFirst: !0,
            analyticsLocation: h.AnalyticsLocations.BOT_PROFILE_POPOUT
        });
        return (0, i.jsx)(l.default, {
            onClick: s,
            className: m.button,
            children: (0, i.jsxs)("div", {
                className: m.botUpgradeButtonContent,
                children: [(0, i.jsx)(c.default, {
                    width: 16,
                    height: 16
                }), (0, i.jsx)(_.default, {
                    size: 4,
                    horizontal: !0
                }), A.default.Messages.BOT_PROFILE_UPGRADE_CTA]
            })
        })
    }

    function O(e) {
        let {
            app: t,
            listing: r,
            guildId: a
        } = e;
        return null == t || null == a ? null : (0, i.jsx)(u.StorefrontButton, {
            onClick: () => (function(e, t, r) {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: s
                    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("98538"), n.e("44516")]).then(n.bind(n, "7225"));
                    return n => (0, i.jsx)(s, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: e.id,
                        subscriptionGroupListing: t,
                        guildId: r
                    })
                })
            })(t, r, a),
            className: m.button,
            size: s.ButtonSizes.SMALL
        })
    }
}