function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        loadOnboardingPrompts: function() {
            return E
        },
        fetchOnboardingPrompts: function() {
            return g
        },
        maybeFetchOnboardingPrompts: function() {
            return m
        },
        startOnboarding: function() {
            return p
        }
    }), n("702976");
    var i = n("872717"),
        s = n("913144"),
        r = n("716241"),
        a = n("271938"),
        o = n("26989"),
        l = n("305961"),
        u = n("599110"),
        d = n("568734"),
        c = n("863636"),
        f = n("653138"),
        _ = n("49111"),
        h = n("657944");

    function E(e) {
        u.default.track(_.AnalyticEvents.GUILD_ONBOARDING_LOADED, {
            ...(0, r.collectGuildAnalyticsMetadata)(e),
            has_new_prompts: !1,
            number_of_prompts: 0
        })
    }

    function g(e) {
        return s.default.dispatch({
            type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
            guildId: e
        }), i.default.get({
            url: _.Endpoints.GUILD_ONBOARDING(e)
        }).then(t => {
            let {
                body: n
            } = t, i = (0, f.serverApiResponseToClientState)(n);
            return s.default.dispatch({
                type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                guildId: e,
                ...i
            }).then(() => i.prompts)
        }, t => (s.default.dispatch({
            type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
            guildId: e
        }), t))
    }
    async function m(e) {
        var t, n;
        let i = a.default.getId(),
            s = (0, d.hasFlag)(null !== (n = null === (t = o.default.getMember(e, i)) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0, h.GuildMemberFlags.COMPLETED_ONBOARDING),
            r = l.default.getGuild(e);
        if (null == r || !r.hasFeature(_.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
        let u = c.default.shouldFetchPrompts(e),
            f = c.default.getOnboardingPrompts(e);
        if (!u && f.length > 0) return f.every(e => !e.inOnboarding) ? (S(e), Promise.resolve()) : (!s && p(e), Promise.resolve());
        let E = await g(e);
        return Array.isArray(E) && E.every(e => !e.inOnboarding) ? (S(e), Promise.resolve()) : (!s && p(e), E)
    }

    function p(e) {
        s.default.dispatch({
            type: "GUILD_ONBOARDING_START",
            guildId: e
        })
    }

    function S(e) {
        u.default.track(_.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, r.collectGuildAnalyticsMetadata)(e),
            step: -2,
            required: !0
        }), u.default.track(_.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, r.collectGuildAnalyticsMetadata)(e),
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0
        })
    }
}