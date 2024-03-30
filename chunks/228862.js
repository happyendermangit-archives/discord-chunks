function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CREATOR_REVENUE_PORTAL_URL: function() {
            return y
        },
        CREATOR_REVENUE_SHARE_PERCENTAGE: function() {
            return I
        },
        GuildRoleSubscriptionBenefitTypes: function() {
            return s
        },
        GuildRoleSubscriptionFormat: function() {
            return l
        },
        MAX_SUBSCRIPTION_TIERS: function() {
            return _
        },
        RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY: function() {
            return p
        },
        RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY: function() {
            return E
        },
        SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS: function() {
            return h
        },
        TIER_TRIAL_INTERVALS: function() {
            return m
        },
        UserGuildRoleSubscriptionRelationship: function() {
            return c
        }
    });
    var r, o, i, a, u, s, l, c, f = n("868615"),
        d = n("563090"),
        _ = 3,
        E = "(max-width: 485px)",
        p = "(max-height: 450px)";
    (r = u || (u = {})).GATING = "GATING", r.GROUP = "GROUP", r.DETAILS = "DETAILS", r.BENEFITS = "BENEFITS", r.CHANNEL_BENEFITS = "CHANNEL_BENEFITS", r.INTANGIBLE_BENEFITS = "INTANGIBLE_BENEFITS ", r.DESIGN = "DESIGN", r.CONFIRMATION = "CONFIRMATION", r.MEMBERS = "MEMBERS", (o = s || (s = {}))[o.CHANNEL = 1] = "CHANNEL", o[o.INTANGIBLE = 2] = "INTANGIBLE", (i = l || (l = {}))[i.SOME_CHANNELS = 0] = "SOME_CHANNELS", i[i.ALL_CHANNELS = 1] = "ALL_CHANNELS";
    var m = [{
        interval: f.SubscriptionIntervalTypes.DAY,
        interval_count: 1
    }, {
        interval: f.SubscriptionIntervalTypes.DAY,
        interval_count: 7
    }];
    (a = c || (c = {}))[a.NONE = 0] = "NONE", a[a.IN_SUBSCRIPTION_SERVER = 1] = "IN_SUBSCRIPTION_SERVER", a[a.SUBSCRIBED = 2] = "SUBSCRIBED";
    var y = "https://".concat(d.PRIMARY_DOMAIN, "/creators"),
        I = 90,
        h = Object.freeze({
            PROMO_PAGE_GUIDE: "https://discord.com/creators/say-hello-to-promo-pages-our-new-server-subscriptions-feature",
            CASE_STUDIES: "https://discord.com/creator-portal/learn-from-creators?tab=creator-case-studies",
            SUBSCRIPTION_OFFERING_GUIDE: "https://discord.com/creators/offering-inspiration-",
            TIER_STRUCTURE_GUIDE: "https://discord.com/creators/server-subs-102-to-tier-or-not-to-tier"
        })
}