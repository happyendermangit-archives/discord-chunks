function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchOnboardingPrompts: function() {
            return f
        },
        loadOnboardingPrompts: function() {
            return T
        },
        maybeFetchOnboardingPrompts: function() {
            return S
        },
        startOnboarding: function() {
            return A
        }
    }), n("789020");
    var i = n("544891"),
        r = n("570140"),
        s = n("367907"),
        a = n("314897"),
        o = n("271383"),
        l = n("430824"),
        u = n("626135"),
        d = n("630388"),
        _ = n("45966"),
        c = n("290511"),
        E = n("981631"),
        I = n("372897");

    function T(e) {
        u.default.track(E.AnalyticEvents.GUILD_ONBOARDING_LOADED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            has_new_prompts: !1,
            number_of_prompts: 0
        })
    }

    function f(e) {
        return r.default.dispatch({
            type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
            guildId: e
        }), i.HTTP.get({
            url: E.Endpoints.GUILD_ONBOARDING(e)
        }).then(t => {
            let {
                body: n
            } = t, i = (0, c.serverApiResponseToClientState)(n);
            return r.default.dispatch({
                type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                guildId: e,
                ...i
            }).then(() => i.prompts)
        }, t => (r.default.dispatch({
            type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
            guildId: e
        }), t))
    }
    async function S(e) {
        var t, n;
        let i = a.default.getId(),
            r = (0, d.hasFlag)(null !== (n = null === (t = o.default.getMember(e, i)) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0, I.GuildMemberFlags.COMPLETED_ONBOARDING),
            s = l.default.getGuild(e);
        if (null == s || !s.hasFeature(E.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
        let u = _.default.shouldFetchPrompts(e),
            c = _.default.getOnboardingPrompts(e);
        if (!u && c.length > 0) return c.every(e => !e.inOnboarding) ? (h(e), Promise.resolve()) : (!r && A(e), Promise.resolve());
        let T = await f(e);
        return Array.isArray(T) && T.every(e => !e.inOnboarding) ? (h(e), Promise.resolve()) : (!r && A(e), T)
    }

    function A(e) {
        r.default.dispatch({
            type: "GUILD_ONBOARDING_START",
            guildId: e
        })
    }

    function h(e) {
        u.default.track(E.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            step: -2,
            required: !0
        }), u.default.track(E.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0
        })
    }
}