function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_SUBSCRIPTION_TIERS: function() {
            return _
        },
        RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY: function() {
            return E
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
            return g
        },
        UserGuildRoleSubscriptionRelationship: function() {
            return d
        },
        CREATOR_REVENUE_PORTAL_URL: function() {
            return m
        },
        CREATOR_REVENUE_SHARE_PERCENTAGE: function() {
            return p
        },
        SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS: function() {
            return S
        }
    });
    var i, s, r, a, o, l, u, d, c = n("646718"),
        f = n("843455");
    let _ = 3,
        E = "(max-width: 485px)",
        h = "(max-height: 450px)";
    (i = o || (o = {})).GATING = "GATING", i.GROUP = "GROUP", i.DETAILS = "DETAILS", i.BENEFITS = "BENEFITS", i.CHANNEL_BENEFITS = "CHANNEL_BENEFITS", i.INTANGIBLE_BENEFITS = "INTANGIBLE_BENEFITS ", i.DESIGN = "DESIGN", i.CONFIRMATION = "CONFIRMATION", i.MEMBERS = "MEMBERS", (s = l || (l = {}))[s.CHANNEL = 1] = "CHANNEL", s[s.INTANGIBLE = 2] = "INTANGIBLE", (r = u || (u = {}))[r.SOME_CHANNELS = 0] = "SOME_CHANNELS", r[r.ALL_CHANNELS = 1] = "ALL_CHANNELS";
    let g = [{
        interval: c.SubscriptionIntervalTypes.DAY,
        interval_count: 1
    }, {
        interval: c.SubscriptionIntervalTypes.DAY,
        interval_count: 7
    }];
    (a = d || (d = {}))[a.NONE = 0] = "NONE", a[a.IN_SUBSCRIPTION_SERVER = 1] = "IN_SUBSCRIPTION_SERVER", a[a.SUBSCRIBED = 2] = "SUBSCRIBED";
    let m = "https://".concat(f.PRIMARY_DOMAIN, "/creators"),
        p = 90,
        S = Object.freeze({
            PROMO_PAGE_GUIDE: "https://discord.com/creators/say-hello-to-promo-pages-our-new-server-subscriptions-feature",
            CASE_STUDIES: "https://discord.com/creator-portal/learn-from-creators?tab=creator-case-studies",
            SUBSCRIPTION_OFFERING_GUIDE: "https://discord.com/creators/offering-inspiration-",
            TIER_STRUCTURE_GUIDE: "https://discord.com/creators/server-subs-102-to-tier-or-not-to-tier"
        })
}