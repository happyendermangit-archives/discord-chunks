function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        archiveGuildRoleSubscriptionListing: function() {
            return S
        },
        createGuildRoleSubscriptionGroupListing: function() {
            return o
        },
        createGuildRoleSubscriptionListing: function() {
            return l
        },
        deleteGuildRoleSubscriptionListing: function() {
            return f
        },
        fetchHighlightedCreatorGuildDetails: function() {
            return O
        },
        getGuildMonetizationRestrictions: function() {
            return N
        },
        getGuildRoleSubscriptionGroupForSubscriptionPlan: function() {
            return T
        },
        getGuildRoleSubscriptionGroupListing: function() {
            return I
        },
        getGuildRoleSubscriptionGroupListingsForGuild: function() {
            return d
        },
        getGuildRoleSubscriptionTrialEligibility: function() {
            return m
        },
        getGuildRoleSubscriptionTrials: function() {
            return A
        },
        getGuildRoleSubscriptionsSettings: function() {
            return _
        },
        getPriceTiers: function() {
            return E
        },
        updateGuildRoleSubscriptionListing: function() {
            return u
        },
        updateGuildRoleSubscriptionsSettings: function() {
            return c
        },
        updateGuildRoleSubscriptionsTrial: function() {
            return h
        }
    });
    var i = n("544891"),
        r = n("881052"),
        s = n("981631"),
        a = n("231338");
    let o = async (e, t) => {
        try {
            return (await i.HTTP.post({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                body: t
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, l = async (e, t, n) => {
        let {
            priceTier: a,
            ...o
        } = n;
        try {
            return (await i.HTTP.post({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                body: {
                    ...o,
                    price_tier: a
                }
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, u = async (e, t, n, a) => {
        let {
            priceTier: o,
            ...l
        } = a;
        try {
            return (await i.HTTP.patch({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                body: {
                    ...l,
                    price_tier: o
                }
            })).body
        } catch (e) {
            throw new r.APIError(e)
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
            return (await i.HTTP.get({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                query: n
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, _ = async e => (await i.HTTP.get({
        url: s.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e)
    })).body, c = async (e, t) => {
        try {
            return (await i.HTTP.patch({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                body: t
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, E = async e => {
        try {
            return (await i.HTTP.get({
                url: s.Endpoints.PRICE_TIERS,
                query: {
                    price_tier_type: a.PriceTierTypes.GUILD_ROLE_SUBSCRIPTIONS,
                    guild_id: e
                }
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, I = async function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            return (await i.HTTP.get({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                query: {
                    include_draft_listings: n.includeDraftListings,
                    include_archived_listings: n.includeArchivedListings
                }
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, T = async e => {
        try {
            return (await i.HTTP.get({
                url: s.Endpoints.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e)
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, f = async (e, t, n) => {
        try {
            await i.HTTP.del({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n)
            })
        } catch (e) {
            throw new r.APIError(e)
        }
    }, S = async (e, t, n) => {
        try {
            return (await i.HTTP.post({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n)
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, A = async e => {
        try {
            return (await i.HTTP.get({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIALS(e)
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, h = async (e, t, n) => {
        try {
            return (await i.HTTP.patch({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                body: n
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, m = async (e, t, n) => {
        try {
            return (await i.HTTP.get({
                url: s.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n)
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, N = async function(e) {
        let {
            signal: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            return (await i.HTTP.get({
                url: s.Endpoints.CREATOR_MONETIZATION_RESTRICTIONS(e),
                signal: t
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }, O = async e => {
        try {
            var t;
            let n = await i.HTTP.get({
                url: s.Endpoints.GUILD_DISCOVERY_SLUG(e)
            });
            return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text)
        } catch (e) {
            throw new r.APIError(e)
        }
    }
}