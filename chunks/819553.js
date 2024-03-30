function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildOnboardingStatus: function() {
            return o
        },
        isOnboarding: function() {
            return c
        }
    });
    var i, r, s, a, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("981631");

    function c(e) {
        return null != e && ["started", "ready"].includes(e)
    }(i = o || (o = {})).STARTED = "started", i.READY = "ready", i.COMPLETED = "completed", i.NOT_APPLICABLE = "not_applicable";
    let E = {},
        I = {};
    class T extends(l = u.default.Store) {
        shouldShowOnboarding(e) {
            return !!(e !== _.ME && e !== _.FAVORITES && c(E[e])) || !1
        }
        getOnboardingStatus(e) {
            return E[e]
        }
        resetOnboardingStatus(e) {
            E[e] = "started", I[e] = "cover"
        }
        getCurrentOnboardingStep(e) {
            var t;
            return null !== (t = I[e]) && void 0 !== t ? t : "cover"
        }
    }
    a = "GuildOnboardingStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new T(d.default, {
        LOGOUT: function() {
            E = {}, I = {}
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete E[t.id], delete I[t.id]
        },
        GUILD_ONBOARDING_START: function(e) {
            let {
                guildId: t
            } = e;
            E[t] = "started"
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                enabled: n
            } = e;
            if ("started" !== E[t]) return !1;
            n ? E[t] = "ready" : E[t] = "not_applicable"
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function(e) {
            let {
                guildId: t
            } = e;
            E[t] = "not_applicable"
        },
        GUILD_ONBOARDING_COMPLETE: function(e) {
            let {
                guildId: t
            } = e;
            E[t] = "completed"
        },
        GUILD_ONBOARDING_SET_STEP: function(e) {
            let {
                guildId: t,
                step: n
            } = e;
            I[t] = n
        },
        CONNECTION_OPEN: function() {
            I = {}
        }
    })
}