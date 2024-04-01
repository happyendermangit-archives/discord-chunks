function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CREATOR_REVENUE_PORTAL_URL: function() {
            return S
        },
        CREATOR_REVENUE_SHARE_PERCENTAGE: function() {
            return A
        },
        GuildRoleSubscriptionBenefitTypes: function() {
            return l
        },
        GuildRoleSubscriptionFormat: function() {
            return u
        },
        MAX_SUBSCRIPTION_TIERS: function() {
            return E
        },
        RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY: function() {
            return T
        },
        RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY: function() {
            return I
        },
        SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS: function() {
            return h
        },
        TIER_TRIAL_INTERVALS: function() {
            return f
        },
        UserGuildRoleSubscriptionRelationship: function() {
            return d
        }
    });
    var i, r, s, a, o, l, u, d, _ = n("474936"),
        c = n("231338");
    let E = 3,
        I = "(max-width: 485px)",
        T = "(max-height: 450px)";
    (i = o || (o = {})).GATING = "GATING", i.GROUP = "GROUP", i.DETAILS = "DETAILS", i.BENEFITS = "BENEFITS", i.CHANNEL_BENEFITS = "CHANNEL_BENEFITS", i.INTANGIBLE_BENEFITS = "INTANGIBLE_BENEFITS ", i.DESIGN = "DESIGN", i.CONFIRMATION = "CONFIRMATION", i.MEMBERS = "MEMBERS", (r = l || (l = {}))[r.CHANNEL = 1] = "CHANNEL", r[r.INTANGIBLE = 2] = "INTANGIBLE", (s = u || (u = {}))[s.SOME_CHANNELS = 0] = "SOME_CHANNELS", s[s.ALL_CHANNELS = 1] = "ALL_CHANNELS";
    let f = [{
        interval: _.SubscriptionIntervalTypes.DAY,
        interval_count: 1
    }, {
        interval: _.SubscriptionIntervalTypes.DAY,
        interval_count: 7
    }];
    (a = d || (d = {}))[a.NONE = 0] = "NONE", a[a.IN_SUBSCRIPTION_SERVER = 1] = "IN_SUBSCRIPTION_SERVER", a[a.SUBSCRIBED = 2] = "SUBSCRIBED";
    let S = "https://".concat(c.PRIMARY_DOMAIN, "/creators"),
        A = 90,
        h = Object.freeze({
            PROMO_PAGE_GUIDE: "https://discord.com/creators/say-hello-to-promo-pages-our-new-server-subscriptions-feature",
            CASE_STUDIES: "https://discord.com/creator-portal/learn-from-creators?tab=creator-case-studies",
            SUBSCRIPTION_OFFERING_GUIDE: "https://discord.com/creators/offering-inspiration-",
            TIER_STRUCTURE_GUIDE: "https://discord.com/creators/server-subs-102-to-tier-or-not-to-tier"
        })
}