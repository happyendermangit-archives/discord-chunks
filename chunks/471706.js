function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildOnboardingStatus: function() {
            return s
        },
        isOnboarding: function() {
            return l
        },
        default: function() {
            return f
        }
    });
    var i, s, r = n("446674"),
        a = n("913144"),
        o = n("49111");

    function l(e) {
        return null != e && ["started", "ready"].includes(e)
    }(i = s || (s = {})).STARTED = "started", i.READY = "ready", i.COMPLETED = "completed", i.NOT_APPLICABLE = "not_applicable";
    let u = {},
        d = {};
    class c extends r.default.Store {
        shouldShowOnboarding(e) {
            if (e === o.ME || e === o.FAVORITES) return !1;
            let t = u[e];
            return !!l(t) || !1
        }
        getOnboardingStatus(e) {
            return u[e]
        }
        resetOnboardingStatus(e) {
            u[e] = "started", d[e] = "cover"
        }
        getCurrentOnboardingStep(e) {
            var t;
            return null !== (t = d[e]) && void 0 !== t ? t : "cover"
        }
    }
    c.displayName = "GuildOnboardingStore";
    var f = new c(a.default, {
        LOGOUT: function() {
            u = {}, d = {}
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete u[t.id], delete d[t.id]
        },
        GUILD_ONBOARDING_START: function(e) {
            let {
                guildId: t
            } = e;
            u[t] = "started"
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                enabled: n
            } = e;
            if ("started" !== u[t]) return !1;
            n ? u[t] = "ready" : u[t] = "not_applicable"
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function(e) {
            let {
                guildId: t
            } = e;
            u[t] = "not_applicable"
        },
        GUILD_ONBOARDING_COMPLETE: function(e) {
            let {
                guildId: t
            } = e;
            u[t] = "completed"
        },
        GUILD_ONBOARDING_SET_STEP: function(e) {
            let {
                guildId: t,
                step: n
            } = e;
            d[t] = n
        },
        CONNECTION_OPEN: function() {
            d = {}
        }
    })
}