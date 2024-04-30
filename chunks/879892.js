function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addAppliedGuildBoosts: function() {
            return f
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
    let T = "apply-guild-boost-modal";
    async function f(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: f,
            analyticsSourceLocation: S,
            numberOfBoostsToAdd: h,
            onClose: A,
            closeLayer: m,
            onSubscriptionConfirmation: N,
            guild: p,
            handleSubscribeModalClose: O,
            disablePremiumUpsell: R,
            inPopout: C,
            applicationId: g
        } = e, L = C ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, D = l.default.getCurrentUser();
        if (null == D) return;
        if (!D.verified) {
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
                contextKey: L
            });
            return
        }
        let v = [];
        !d.default.isLoadedForPremiumSKUs() && v.push((0, o.fetchPremiumSubscriptionPlans)()), !u.default.hasFetched && (v.push(s.fetchSubscriptions()), v.push((0, a.fetchGuildBoostSlots)())), v.length > 0 && await Promise.allSettled(v);
        let M = (0, c.getAvailableGuildBoostSlots)(u.default.boostSlots),
            y = M.length,
            P = e => {
                null == A || A(), null == O || O(e)
            };
        if (y > 0 && (null == h || y >= h)) {
            let e;
            1 === y ? e = M.slice(0, 1) : null != h && (e = M.slice(0, h)), await (0, r.openModalLazy)(async () => {
                let {
                    default: t
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("63438"), n.e("62511"), n.e("8016"), n.e("22646"), n.e("68451"), n.e("25220")]).then(n.bind(n, "760558"));
                return n => {
                    let {
                        onClose: r,
                        ...s
                    } = n;
                    return (0, i.jsx)(t, {
                        ...s,
                        onClose: e => {
                            r(), P(e)
                        },
                        selectedGuild: p,
                        locationSection: I.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        guildBoostSlots: e
                    })
                }
            }, {
                modalKey: T,
                onCloseRequest: () => {
                    (0, r.closeModal)(T), P(!1)
                },
                contextKey: L
            })
        } else(0, E.default)({
            analyticsLocations: t,
            analyticsLocation: f,
            analyticsSourceLocation: S,
            guildId: p.id,
            closeLayer: () => {
                null == A || A(), null == m || m(), _.default.track(I.AnalyticEvents.MODAL_DISMISSED, {
                    type: I.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_section: f.section
                })
            },
            totalNumberOfSlotsToAssign: null != h ? h : 1,
            onCloseModal: P,
            disablePremiumUpsell: R,
            onSubscriptionConfirmation: N,
            inPopout: C,
            applicationId: g
        })
    }
}