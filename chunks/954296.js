function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addAppliedGuildBoosts: function() {
            return S
        }
    }), n("424973"), n("462568"), n("222007");
    var l = n("37983");
    n("884691");
    var r = n("77078"),
        a = n("850068"),
        s = n("583367"),
        o = n("775433"),
        i = n("697218"),
        u = n("625634"),
        d = n("10514"),
        c = n("599110"),
        f = n("427459"),
        _ = n("163732"),
        p = n("49111");
    async function S(t) {
        let {
            analyticsLocations: e,
            analyticsLocation: S,
            analyticsSourceLocation: L,
            numberOfBoostsToAdd: C,
            onClose: h,
            closeLayer: T,
            onSubscriptionConfirmation: y,
            guild: E,
            handleSubscribeModalClose: m,
            disablePremiumUpsell: O,
            inPopout: A,
            applicationId: I
        } = t, g = A ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, U = i.default.getCurrentUser();
        if (null == U) return;
        if (!U.verified) {
            (0, r.openModalLazy)(async () => {
                let {
                    default: t
                } = await n.el("899917").then(n.bind(n, "899917"));
                return e => {
                    let {
                        onClose: n,
                        ...r
                    } = e;
                    return (0, l.jsx)(t, {
                        ...r,
                        onClose: n
                    })
                }
            }, {
                contextKey: g
            });
            return
        }
        let P = [];
        !d.default.isLoadedForPremiumSKUs() && P.push((0, o.fetchPremiumSubscriptionPlans)()), !u.default.hasFetched && (P.push(a.fetchSubscriptions()), P.push((0, s.fetchGuildBoostSlots)())), P.length > 0 && await Promise.allSettled(P);
        let M = (0, f.getAvailableGuildBoostSlots)(u.default.boostSlots),
            w = M.length,
            B = t => {
                null == h || h(), null == m || m(t)
            };
        if (w > 0 && (null == C || w >= C)) {
            let t;
            1 === w ? t = M.slice(0, 1) : null != C && (t = M.slice(0, C));
            let e = await (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.el("247760").then(n.bind(n, "247760"));
                return n => {
                    let {
                        onClose: r,
                        ...a
                    } = n;
                    return (0, l.jsx)(e, {
                        ...a,
                        onClose: t => {
                            r(), B(t)
                        },
                        selectedGuild: E,
                        locationSection: p.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        guildBoostSlots: t
                    })
                }
            }, {
                onCloseRequest: () => {
                    null != e && (0, r.closeModal)(e), B(!1)
                },
                contextKey: g
            })
        } else(0, _.default)({
            analyticsLocations: e,
            analyticsLocation: S,
            analyticsSourceLocation: L,
            guildId: E.id,
            closeLayer: () => {
                null == h || h(), null == T || T(), c.default.track(p.AnalyticEvents.MODAL_DISMISSED, {
                    type: p.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_section: S.section
                })
            },
            totalNumberOfSlotsToAssign: null != C ? C : 1,
            onCloseModal: B,
            disablePremiumUpsell: O,
            onSubscriptionConfirmation: y,
            inPopout: A,
            applicationId: I
        })
    }
}