function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchSubscriptionsSettings: function() {
            return _
        },
        updateSubscriptionsSettings: function() {
            return c
        },
        fetchAllSubscriptionListingsDataForGuild: function() {
            return g
        },
        createSubscriptionGroupListing: function() {
            return m
        },
        fetchSubscriptionListingForPlan: function() {
            return h
        },
        deleteSubscriptionListing: function() {
            return v
        },
        archiveSubscriptionListing: function() {
            return E
        },
        updateSubscriptionTrial: function() {
            return p
        },
        createSubscriptionListing: function() {
            return T
        },
        updateSubscriptionListing: function() {
            return C
        },
        fetchMonetizationRestrictions: function() {
            return I
        }
    }), n("222007");
    var s = n("398183"),
        i = n("913144"),
        r = n("850068"),
        a = n("775433"),
        o = n("716241"),
        d = n("599110"),
        u = n("718517"),
        l = n("719726"),
        f = n("49111");
    async function _(e) {
        let t = await l.getGuildRoleSubscriptionsSettings(e);
        i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
            settings: t
        })
    }
    async function c(e, t) {
        let n = await l.updateGuildRoleSubscriptionsSettings(e, t);
        i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
            settings: n
        })
    }
    async function g(e) {
        let {
            includeSoftDeleted: t = !0,
            countryCode: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
            guildId: e
        });
        try {
            let [s, a, o] = await Promise.all([l.getGuildRoleSubscriptionGroupListingsForGuild(e, {
                includeSoftDeleted: t,
                countryCode: n
            }), l.getGuildRoleSubscriptionsSettings(e), l.getGuildRoleSubscriptionTrials(e), (0, r.fetchSubscriptions)()]);
            i.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                guildId: e,
                groupListings: s,
                settings: a,
                subscriptionTrials: o
            })
        } catch (t) {
            i.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                guildId: e
            })
        }
    }
    async function m(e, t) {
        let n = await l.createGuildRoleSubscriptionGroupListing(e, t);
        return i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
            listing: n
        }), n
    }
    async function h(e) {
        var t;
        i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
            planId: e
        });
        let n = await l.getGuildRoleSubscriptionGroupForSubscriptionPlan(e);
        i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n
        });
        let s = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
        for (let t of s) t.subscription_plans[0].id === e && await a.fetchSubscriptionPlansForSKU(t.id, void 0, void 0, !0)
    }
    async function v(e, t, n) {
        await l.deleteGuildRoleSubscriptionListing(e, t, n), i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
            listingId: n
        })
    }
    async function E(e, t, n) {
        let s = await l.archiveGuildRoleSubscriptionListing(e, t, n);
        i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: s
        })
    }
    async function p(e, t, n) {
        let s = await l.updateGuildRoleSubscriptionsTrial(e, t, n);
        i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
            subscriptionTrial: s
        })
    }
    async function y(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            s = await l.getGuildRoleSubscriptionGroupListing(e, t, n);
        return i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
            listing: s
        }), s
    }
    async function T(e) {
        let {
            guildId: t,
            groupListingId: n,
            data: s,
            analyticsContext: r,
            onBeforeDispatchNewListing: a
        } = e, u = await l.createGuildRoleSubscriptionListing(t, n, s);
        return d.default.track(f.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: u.id,
            role_subscription_group_listing_id: n,
            template_name: r.templateCategory,
            has_change_from_template: r.hasChangeFromTemplate,
            ...(0, o.collectGuildAnalyticsMetadata)(t)
        }), await y(t, n, {
            includeArchivedListings: !0
        }), null == a || a(u), i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: u
        }), u
    }
    async function C(e) {
        let {
            guildId: t,
            listingId: n,
            groupListingId: s,
            data: r
        } = e, a = await l.updateGuildRoleSubscriptionListing(t, s, n, r);
        return i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: a
        }), await y(t, s, {
            includeArchivedListings: !0
        }), a
    }
    async function I(e) {
        let {
            signal: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1;
        for (let r = 0; r < 3; r++) try {
            if (null == t ? void 0 : t.aborted) {
                i.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
                    guildId: e
                });
                return
            }
            i.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
                guildId: e
            });
            let {
                restrictions: s
            } = await l.getGuildMonetizationRestrictions(e, {
                signal: t
            });
            i.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                guildId: e,
                restrictions: null != s ? s : []
            }), n = !0;
            break
        } catch (e) {
            await (0, s.sleep)((r + 1) * u.default.Millis.SECOND)
        }!n && i.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
            guildId: e
        })
    }
}