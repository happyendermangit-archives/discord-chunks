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
        a = n("481060"),
        s = n("395661"),
        o = n("970321"),
        l = n("171246"),
        u = n("359610"),
        d = n("886491"),
        _ = n("696906"),
        c = n("682864"),
        E = n("191741"),
        I = n("621853"),
        T = n("873572"),
        f = n("520978"),
        S = n("659101"),
        h = n("981631"),
        A = n("689938"),
        m = n("198197");

    function N(e) {
        var t;
        let {
            user: n,
            guildId: a
        } = e, l = (0, r.useStateFromStores)([I.default], () => {
            var e;
            return null === (e = I.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
        }), {
            enabled: u
        } = s.appStorefrontExperiment.useExperiment({
            location: "BotButtonsSection"
        }), d = (0, o.useAppStorefrontAvailable)(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "");
        return (0, i.jsx)(S.default, {
            children: (0, i.jsxs)("div", {
                className: m.buttonsContainer,
                children: [(0, i.jsx)(f.default, {
                    application: l,
                    className: m.button
                }), u && d ? (0, i.jsx)(O, {
                    app: l,
                    user: n,
                    guildId: a
                }) : (0, i.jsx)(p, {
                    guildId: a,
                    user: n
                })]
            })
        })
    }

    function p(e) {
        let {
            user: t,
            guildId: n
        } = e, {
            botUpgradeable: r,
            subscriptionGroupListing: a
        } = (0, T.default)({
            user: t,
            guildId: n
        }), s = null != a ? (0, l.getPayableSubscriptionListing)(a) : null, {
            openModal: o
        } = (0, _.default)({
            listing: s,
            guildId: n,
            groupListingId: null == a ? void 0 : a.id,
            showBenefitsFirst: !0,
            analyticsLocation: h.AnalyticsLocations.BOT_PROFILE_POPOUT
        });
        return r && null != s ? (0, i.jsx)(u.default, {
            onClick: o,
            className: m.button,
            children: (0, i.jsxs)("div", {
                className: m.botUpgradeButtonContent,
                children: [(0, i.jsx)(E.default, {
                    width: 16,
                    height: 16
                }), (0, i.jsx)(c.default, {
                    size: 4,
                    horizontal: !0
                }), A.default.Messages.BOT_PROFILE_UPGRADE_CTA]
            })
        }) : null
    }

    function O(e) {
        var t;
        let {
            app: r,
            user: s,
            guildId: o
        } = e, l = null !== (t = (0, T.default)({
            user: s,
            guildId: o
        }).subscriptionGroupListing) && void 0 !== t ? t : void 0;
        return null == r || null == o ? null : (0, i.jsx)(d.StorefrontButton, {
            onClick: () => (function(e, t, r) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("98538"), n.e("44516")]).then(n.bind(n, "7225"));
                    return n => (0, i.jsx)(a, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: e.id,
                        subscriptionGroupListing: t,
                        guildId: r
                    })
                })
            })(r, l, o),
            className: m.button,
            size: a.ButtonSizes.SMALL
        })
    }
}