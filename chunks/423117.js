function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        archiveSubscriptionListing: function() {
            return h
        },
        createSubscriptionGroupListing: function() {
            return T
        },
        createSubscriptionListing: function() {
            return N
        },
        deleteSubscriptionListing: function() {
            return S
        },
        fetchAllSubscriptionListingsDataForGuild: function() {
            return I
        },
        fetchMonetizationRestrictions: function() {
            return O
        },
        fetchSubscriptionListingForPlan: function() {
            return f
        },
        fetchSubscriptionsSettings: function() {
            return c
        },
        updateSubscriptionListing: function() {
            return p
        },
        updateSubscriptionTrial: function() {
            return A
        },
        updateSubscriptionsSettings: function() {
            return E
        }
    }), n("47120");
    var i = n("379649"),
        r = n("570140"),
        a = n("355467"),
        s = n("821849"),
        o = n("367907"),
        l = n("626135"),
        u = n("70956"),
        d = n("295141"),
        _ = n("981631");
    async function c(e) {
        let t = await d.getGuildRoleSubscriptionsSettings(e);
        r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
            settings: t
        })
    }
    async function E(e, t) {
        let n = await d.updateGuildRoleSubscriptionsSettings(e, t);
        r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
            settings: n
        })
    }
    async function I(e) {
        let {
            includeSoftDeleted: t = !0,
            countryCode: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
            guildId: e
        });
        try {
            let [i, s, o] = await Promise.all([d.getGuildRoleSubscriptionGroupListingsForGuild(e, {
                includeSoftDeleted: t,
                countryCode: n
            }), d.getGuildRoleSubscriptionsSettings(e), d.getGuildRoleSubscriptionTrials(e), (0, a.fetchSubscriptions)()]);
            r.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                guildId: e,
                groupListings: i,
                settings: s,
                subscriptionTrials: o
            })
        } catch (t) {
            r.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                guildId: e
            })
        }
    }
    async function T(e, t) {
        let n = await d.createGuildRoleSubscriptionGroupListing(e, t);
        return r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
            listing: n
        }), n
    }
    async function f(e) {
        var t;
        r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
            planId: e
        });
        let n = await d.getGuildRoleSubscriptionGroupForSubscriptionPlan(e);
        for (let i of (r.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                groupListing: n
            }), null !== (t = n.subscription_listings) && void 0 !== t ? t : [])) i.subscription_plans[0].id === e && await s.fetchSubscriptionPlansForSKU(i.id, void 0, void 0, !0)
    }
    async function S(e, t, n) {
        await d.deleteGuildRoleSubscriptionListing(e, t, n), r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
            listingId: n
        })
    }
    async function h(e, t, n) {
        let i = await d.archiveGuildRoleSubscriptionListing(e, t, n);
        r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: i
        })
    }
    async function A(e, t, n) {
        let i = await d.updateGuildRoleSubscriptionsTrial(e, t, n);
        r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
            subscriptionTrial: i
        })
    }
    async function m(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = await d.getGuildRoleSubscriptionGroupListing(e, t, n);
        return r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
            listing: i
        }), i
    }
    async function N(e) {
        let {
            guildId: t,
            groupListingId: n,
            data: i,
            analyticsContext: a,
            onBeforeDispatchNewListing: s
        } = e, u = await d.createGuildRoleSubscriptionListing(t, n, i);
        return l.default.track(_.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: u.id,
            role_subscription_group_listing_id: n,
            template_name: a.templateCategory,
            has_change_from_template: a.hasChangeFromTemplate,
            ...(0, o.collectGuildAnalyticsMetadata)(t)
        }), await m(t, n, {
            includeArchivedListings: !0
        }), null == s || s(u), r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: u
        }), u
    }
    async function p(e) {
        let {
            guildId: t,
            listingId: n,
            groupListingId: i,
            data: a
        } = e, s = await d.updateGuildRoleSubscriptionListing(t, i, n, a);
        return r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: s
        }), await m(t, i, {
            includeArchivedListings: !0
        }), s
    }
    async function O(e) {
        let {
            signal: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1;
        for (let a = 0; a < 3; a++) try {
            if (null == t ? void 0 : t.aborted) {
                r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
                    guildId: e
                });
                return
            }
            r.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
                guildId: e
            });
            let {
                restrictions: i
            } = await d.getGuildMonetizationRestrictions(e, {
                signal: t
            });
            r.default.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                guildId: e,
                restrictions: null != i ? i : []
            }), n = !0;
            break
        } catch (e) {
            await (0, i.sleep)((a + 1) * u.default.Millis.SECOND)
        }!n && r.default.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
            guildId: e
        })
    }
}