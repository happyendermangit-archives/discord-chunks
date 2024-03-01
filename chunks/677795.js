function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_SUBSCRIPTION_TIERS: function() {
            return E
        },
        RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY: function() {
            return p
        },
        RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY: function() {
            return h
        },
        GuildRoleSubscriptionBenefitTypes: function() {
            return l
        },
        GuildRoleSubscriptionFormat: function() {
            return u
        },
        TIER_TRIAL_INTERVALS: function() {
            return _
        },
        UserGuildRoleSubscriptionRelationship: function() {
            return c
        },
        CREATOR_REVENUE_PORTAL_URL: function() {
            return S
        },
        CREATOR_REVENUE_SHARE_PERCENTAGE: function() {
            return m
        },
        SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS: function() {
            return T
        }
    });
    var i, r, s, a, o, l, u, c, d = n("646718"),
        f = n("843455");
    let E = 3,
        p = "(max-width: 485px)",
        h = "(max-height: 450px)";
    (i = o || (o = {})).GATING = "GATING", i.GROUP = "GROUP", i.DETAILS = "DETAILS", i.BENEFITS = "BENEFITS", i.CHANNEL_BENEFITS = "CHANNEL_BENEFITS", i.INTANGIBLE_BENEFITS = "INTANGIBLE_BENEFITS ", i.DESIGN = "DESIGN", i.CONFIRMATION = "CONFIRMATION", i.MEMBERS = "MEMBERS", (r = l || (l = {}))[r.CHANNEL = 1] = "CHANNEL", r[r.INTANGIBLE = 2] = "INTANGIBLE", (s = u || (u = {}))[s.SOME_CHANNELS = 0] = "SOME_CHANNELS", s[s.ALL_CHANNELS = 1] = "ALL_CHANNELS";
    let _ = [{
        interval: d.SubscriptionIntervalTypes.DAY,
        interval_count: 1
    }, {
        interval: d.SubscriptionIntervalTypes.DAY,
        interval_count: 7
    }];
    (a = c || (c = {}))[a.NONE = 0] = "NONE", a[a.IN_SUBSCRIPTION_SERVER = 1] = "IN_SUBSCRIPTION_SERVER", a[a.SUBSCRIBED = 2] = "SUBSCRIBED";
    let S = "https://".concat(f.PRIMARY_DOMAIN, "/creators"),
        m = 90,
        T = Object.freeze({
            PROMO_PAGE_GUIDE: "https://discord.com/creators/say-hello-to-promo-pages-our-new-server-subscriptions-feature",
            CASE_STUDIES: "https://discord.com/creator-portal/learn-from-creators?tab=creator-case-studies",
            SUBSCRIPTION_OFFERING_GUIDE: "https://discord.com/creators/offering-inspiration-",
            TIER_STRUCTURE_GUIDE: "https://discord.com/creators/server-subs-102-to-tier-or-not-to-tier"
        })
}