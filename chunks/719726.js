function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createGuildRoleSubscriptionGroupListing: function() {
            return o
        },
        createGuildRoleSubscriptionListing: function() {
            return l
        },
        updateGuildRoleSubscriptionListing: function() {
            return u
        },
        getGuildRoleSubscriptionGroupListingsForGuild: function() {
            return d
        },
        getGuildRoleSubscriptionsSettings: function() {
            return c
        },
        updateGuildRoleSubscriptionsSettings: function() {
            return f
        },
        getPriceTiers: function() {
            return _
        },
        getGuildRoleSubscriptionGroupListing: function() {
            return E
        },
        getGuildRoleSubscriptionGroupForSubscriptionPlan: function() {
            return h
        },
        deleteGuildRoleSubscriptionListing: function() {
            return g
        },
        archiveGuildRoleSubscriptionListing: function() {
            return m
        },
        getGuildRoleSubscriptionTrials: function() {
            return p
        },
        updateGuildRoleSubscriptionsTrial: function() {
            return S
        },
        getGuildRoleSubscriptionTrialEligibility: function() {
            return v
        },
        getGuildMonetizationRestrictions: function() {
            return T
        },
        fetchHighlightedCreatorGuildDetails: function() {
            return I
        }
    });
    var i = n("872717"),
        s = n("448993"),
        r = n("49111"),
        a = n("843455");
    let o = async (e, t) => {
        try {
            let n = await i.default.post({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                body: t
            });
            return n.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, l = async (e, t, n) => {
        let {
            priceTier: a,
            ...o
        } = n;
        try {
            let n = await i.default.post({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                body: {
                    ...o,
                    price_tier: a
                }
            });
            return n.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, u = async (e, t, n, a) => {
        let {
            priceTier: o,
            ...l
        } = a;
        try {
            let s = await i.default.patch({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                body: {
                    ...l,
                    price_tier: o
                }
            });
            return s.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, d = async function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                includeSoftDeleted: !1
            },
            n = {
                include_soft_deleted: t.includeSoftDeleted,
                country_code: t.countryCode
            };
        try {
            let t = await i.default.get({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                query: n
            });
            return t.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, c = async e => {
        let t = await i.default.get({
            url: r.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e)
        });
        return t.body
    }, f = async (e, t) => {
        try {
            let n = await i.default.patch({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                body: t
            });
            return n.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, _ = async e => {
        try {
            let t = await i.default.get({
                url: r.Endpoints.PRICE_TIERS,
                query: {
                    price_tier_type: a.PriceTierTypes.GUILD_ROLE_SUBSCRIPTIONS,
                    guild_id: e
                }
            });
            return t.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, E = async function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            let s = await i.default.get({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                query: {
                    include_draft_listings: n.includeDraftListings,
                    include_archived_listings: n.includeArchivedListings
                }
            });
            return s.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, h = async e => {
        try {
            let t = await i.default.get({
                url: r.Endpoints.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e)
            });
            return t.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, g = async (e, t, n) => {
        try {
            await i.default.delete({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n)
            })
        } catch (e) {
            throw new s.APIError(e)
        }
    }, m = async (e, t, n) => {
        try {
            let s = await i.default.post({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n)
            });
            return s.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, p = async e => {
        try {
            let t = await i.default.get({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIALS(e)
            });
            return t.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, S = async (e, t, n) => {
        try {
            let s = await i.default.patch({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                body: n
            });
            return s.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, v = async (e, t, n) => {
        try {
            let s = await i.default.get({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n)
            });
            return s.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, T = async function(e) {
        let {
            signal: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            let n = await i.default.get({
                url: r.Endpoints.CREATOR_MONETIZATION_RESTRICTIONS(e),
                signal: t
            });
            return n.body
        } catch (e) {
            throw new s.APIError(e)
        }
    }, I = async e => {
        try {
            var t;
            let n = await i.default.get({
                url: r.Endpoints.GUILD_DISCOVERY_SLUG(e)
            });
            return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text)
        } catch (e) {
            throw new s.APIError(e)
        }
    }
}