function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchSubscriptionsSettings: function() {
            return _
        },
        updateSubscriptionsSettings: function() {
            return f
        },
        fetchAllSubscriptionListingsDataForGuild: function() {
            return E
        },
        createSubscriptionGroupListing: function() {
            return h
        },
        fetchSubscriptionListingForPlan: function() {
            return g
        },
        deleteSubscriptionListing: function() {
            return m
        },
        archiveSubscriptionListing: function() {
            return p
        },
        updateSubscriptionTrial: function() {
            return S
        },
        createSubscriptionListing: function() {
            return v
        },
        updateSubscriptionListing: function() {
            return I
        },
        fetchMonetizationRestrictions: function() {
            return A
        }
    }), n("222007");
    var i = n("398183"),
        s = n("913144"),
        r = n("850068"),
        a = n("775433"),
        o = n("716241"),
        l = n("599110"),
        u = n("718517"),
        d = n("719726"),
        c = n("49111");
    async function _(e) {
        let t = await d.getGuildRoleSubscriptionsSettings(e);
        s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
            settings: t
        })
    }
    async function f(e, t) {
        let n = await d.updateGuildRoleSubscriptionsSettings(e, t);
        s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
            settings: n
        })
    }
    async function E(e) {
        let {
            includeSoftDeleted: t = !0,
            countryCode: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
            guildId: e
        });
        try {
            let [i, a, o] = await Promise.all([d.getGuildRoleSubscriptionGroupListingsForGuild(e, {
                includeSoftDeleted: t,
                countryCode: n
            }), d.getGuildRoleSubscriptionsSettings(e), d.getGuildRoleSubscriptionTrials(e), (0, r.fetchSubscriptions)()]);
            s.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                guildId: e,
                groupListings: i,
                settings: a,
                subscriptionTrials: o
            })
        } catch (t) {
            s.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                guildId: e
            })
        }
    }
    async function h(e, t) {
        let n = await d.createGuildRoleSubscriptionGroupListing(e, t);
        return s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
            listing: n
        }), n
    }
    async function g(e) {
        var t;
        s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
            planId: e
        });
        let n = await d.getGuildRoleSubscriptionGroupForSubscriptionPlan(e);
        s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n
        });
        let i = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
        for (let t of i) t.subscription_plans[0].id === e && await a.fetchSubscriptionPlansForSKU(t.id, void 0, void 0, !0)
    }
    async function m(e, t, n) {
        await d.deleteGuildRoleSubscriptionListing(e, t, n), s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
            listingId: n
        })
    }
    async function p(e, t, n) {
        let i = await d.archiveGuildRoleSubscriptionListing(e, t, n);
        s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: i
        })
    }
    async function S(e, t, n) {
        let i = await d.updateGuildRoleSubscriptionsTrial(e, t, n);
        s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
            subscriptionTrial: i
        })
    }
    async function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = await d.getGuildRoleSubscriptionGroupListing(e, t, n);
        return s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
            listing: i
        }), i
    }
    async function v(e) {
        let {
            guildId: t,
            groupListingId: n,
            data: i,
            analyticsContext: r,
            onBeforeDispatchNewListing: a
        } = e, u = await d.createGuildRoleSubscriptionListing(t, n, i);
        return l.default.track(c.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: u.id,
            role_subscription_group_listing_id: n,
            template_name: r.templateCategory,
            has_change_from_template: r.hasChangeFromTemplate,
            ...(0, o.collectGuildAnalyticsMetadata)(t)
        }), await T(t, n, {
            includeArchivedListings: !0
        }), null == a || a(u), s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: u
        }), u
    }
    async function I(e) {
        let {
            guildId: t,
            listingId: n,
            groupListingId: i,
            data: r
        } = e, a = await d.updateGuildRoleSubscriptionListing(t, i, n, r);
        return s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: a
        }), await T(t, i, {
            includeArchivedListings: !0
        }), a
    }
    async function A(e) {
        let {
            signal: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1;
        for (let r = 0; r < 3; r++) try {
            if (null == t ? void 0 : t.aborted) {
                s.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
                    guildId: e
                });
                return
            }
            s.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
                guildId: e
            });
            let {
                restrictions: i
            } = await d.getGuildMonetizationRestrictions(e, {
                signal: t
            });
            s.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                guildId: e,
                restrictions: null != i ? i : []
            }), n = !0;
            break
        } catch (e) {
            await (0, i.sleep)((r + 1) * u.default.Millis.SECOND)
        }!n && s.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
            guildId: e
        })
    }
}