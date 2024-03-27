function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addAppliedGuildBoosts: function() {
            return T
        }
    }), n("653041"), n("998459"), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("355467"),
        a = n("179360"),
        o = n("821849"),
        l = n("594174"),
        u = n("314884"),
        d = n("509545"),
        _ = n("626135"),
        c = n("267642"),
        E = n("852679"),
        I = n("981631");
    async function T(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: T,
            analyticsSourceLocation: f,
            numberOfBoostsToAdd: S,
            onClose: h,
            closeLayer: A,
            onSubscriptionConfirmation: m,
            guild: N,
            handleSubscribeModalClose: O,
            disablePremiumUpsell: p,
            inPopout: R,
            applicationId: C
        } = e, g = R ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, L = l.default.getCurrentUser();
        if (null == L) return;
        if (!L.verified) {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("35822")]).then(n.bind(n, "444688"));
                return t => {
                    let {
                        onClose: n,
                        ...r
                    } = t;
                    return (0, i.jsx)(e, {
                        ...r,
                        onClose: n
                    })
                }
            }, {
                contextKey: g
            });
            return
        }
        let D = [];
        !d.default.isLoadedForPremiumSKUs() && D.push((0, o.fetchPremiumSubscriptionPlans)()), !u.default.hasFetched && (D.push(s.fetchSubscriptions()), D.push((0, a.fetchGuildBoostSlots)())), D.length > 0 && await Promise.allSettled(D);
        let v = (0, c.getAvailableGuildBoostSlots)(u.default.boostSlots),
            M = v.length,
            y = e => {
                null == h || h(), null == O || O(e)
            };
        if (M > 0 && (null == S || M >= S)) {
            let e;
            1 === M ? e = v.slice(0, 1) : null != S && (e = v.slice(0, S));
            let t = await (0, r.openModalLazy)(async () => {
                let {
                    default: t
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("58625"), n.e("63438"), n.e("62511"), n.e("8016"), n.e("22646"), n.e("68451"), n.e("72966")]).then(n.bind(n, "760558"));
                return n => {
                    let {
                        onClose: r,
                        ...s
                    } = n;
                    return (0, i.jsx)(t, {
                        ...s,
                        onClose: e => {
                            r(), y(e)
                        },
                        selectedGuild: N,
                        locationSection: I.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        guildBoostSlots: e
                    })
                }
            }, {
                onCloseRequest: () => {
                    null != t && (0, r.closeModal)(t), y(!1)
                },
                contextKey: g
            })
        } else(0, E.default)({
            analyticsLocations: t,
            analyticsLocation: T,
            analyticsSourceLocation: f,
            guildId: N.id,
            closeLayer: () => {
                null == h || h(), null == A || A(), _.default.track(I.AnalyticEvents.MODAL_DISMISSED, {
                    type: I.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_section: T.section
                })
            },
            totalNumberOfSlotsToAssign: null != S ? S : 1,
            onCloseModal: y,
            disablePremiumUpsell: p,
            onSubscriptionConfirmation: m,
            inPopout: R,
            applicationId: C
        })
    }
}