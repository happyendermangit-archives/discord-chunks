function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("424973"), n("834022");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("38654"),
        l = n("42203"),
        u = n("718517"),
        d = n("299039"),
        c = n("648747"),
        f = n("471706"),
        _ = n("653138");
    let E = {},
        h = {},
        g = {},
        m = !1;

    function p(e, t, n) {
        return e.map(e => (function(e, t, n) {
            let i = !1,
                s = [];
            for (let t = 0; t < e.options.length; t++) {
                let r = e.options[t],
                    a = null == n[r.id];
                a && (i = !0), s.push({
                    ...r,
                    isUnseen: a
                })
            }
            return {
                ...e,
                options: s,
                hasNewAnswers: i,
                isNew: null == t[e.id]
            }
        })(e, t, n))
    }

    function S(e) {
        var t, n, i, s, r, a, o, l, u;
        let {
            guildId: d,
            updates: c
        } = e, f = null !== (r = null !== (s = c.onboardingPromptsSeen) && void 0 !== s ? s : null === (t = E[d]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== r ? r : {}, _ = null !== (o = null !== (a = c.onboardingResponsesSeen) && void 0 !== a ? a : null === (n = E[d]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== o ? o : {}, h = p(null !== (u = null !== (l = c.prompts) && void 0 !== l ? l : null === (i = E[d]) || void 0 === i ? void 0 : i.prompts) && void 0 !== u ? u : [], f, _);
        E[d] = {
            ...E[d],
            ...c,
            prompts: h
        }
    }

    function v(e, t) {
        if (null == h[e]) return;
        let n = {};
        Object.keys(h[e]).forEach(i => {
            !t.includes(i) && h[e][i] ? n[i] = !0 : t.includes(i) && !1 === h[e][i] && (n[i] = !1)
        }), h[e] = n;
        let i = t.filter(e => null == n[e] || !0 === n[e]);
        Object.keys(n).forEach(e => {
            !0 === n[e] && !t.includes(e) && i.push(e)
        }), E[e] = {
            ...E[e],
            responses: i
        }
    }
    let T = [],
        I = [],
        C = [];
    class A extends r.default.Store {
        initialize() {
            this.waitFor(l.default, f.default, o.default)
        }
        getOnboardingPromptsForOnboarding(e) {
            var t, n;
            return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : T
        }
        getOnboardingPrompts(e) {
            var t, n;
            return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : T
        }
        getOnboardingResponses(e) {
            var t, n, i;
            return o.default.isFullServerPreview(e) ? Array.from(null !== (n = o.default.getOnboardingResponses(e)) && void 0 !== n ? n : I) : null !== (i = null === (t = E[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== i ? i : I
        }
        getSelectedOptions(e) {
            let t = this.getOnboardingResponses(e),
                n = this.getOnboardingPrompts(e).map(e => e.options).flat();
            return n.filter(e => t.includes(e.id))
        }
        getOnboardingResponsesForPrompt(e, t) {
            let n = E[e];
            if (null == n) return I;
            let i = n.prompts.find(e => e.id === t);
            return null == i ? I : s.intersection(i.options.map(e => e.id), this.getOnboardingResponses(e))
        }
        getEnabledOnboardingPrompts(e) {
            var t, n;
            let i = E[e];
            return o.default.isFullServerPreview(e) ? null !== (t = null == i ? void 0 : i.prompts) && void 0 !== t ? t : T : null != i && i.enabled ? null !== (n = i.prompts) && void 0 !== n ? n : T : T
        }
        getDefaultChannelIds(e) {
            var t, n;
            return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : C
        }
        getEnabled(e) {
            var t, n;
            return o.default.isFullServerPreview(e) ? null != E[e] : null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
        }
        getOnboardingPrompt(e) {
            return Object.values(E).map(e => e.prompts).flat().find(t => t.id === e)
        }
        isLoading() {
            return m
        }
        shouldFetchPrompts(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default.Millis.HOUR;
            if (m) return !1;
            let n = g[e];
            return null == n || Date.now() - n > t
        }
        getPendingResponseOptions(e) {
            return h[e]
        }
        ackIdForGuild(e) {
            let t = this.getEnabledOnboardingPrompts(e),
                n = "0";
            return t.forEach(e => {
                e.options.forEach(e => {
                    d.default.compare(e.id, n) > 0 && (n = e.id)
                }), d.default.compare(e.id, n) > 0 && (n = e.id)
            }), n
        }
        lastFetchedAt(e) {
            return g[e]
        }
        isAdvancedMode(e) {
            var t;
            return null != e && (null === (t = E[e]) || void 0 === t ? void 0 : t.mode) === _.GuildOnboardingMode.ONBOARDING_ADVANCED
        }
    }
    A.displayName = "GuildOnboardingPromptsStore";
    var y = new A(a.default, {
        CONNECTION_OPEN: function() {
            m = !1, E = {}
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
            m = !0
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                prompts: n,
                defaultChannelIds: i,
                enabled: s,
                responses: r,
                onboardingPromptsSeen: a,
                onboardingResponsesSeen: o,
                mode: l,
                belowRequirements: u
            } = e;
            m = !1;
            let d = f.default.getOnboardingStatus(t) === f.GuildOnboardingStatus.READY,
                _ = p(n, a, o);
            E[t] = {
                enabled: s,
                mode: l,
                belowRequirements: u,
                prompts: _,
                onboardingPrompts: _.filter(e => e.inOnboarding),
                defaultChannelIds: i.filter(e => (0, c.canChannelBeDefault)(t, e)),
                responses: d ? [] : r,
                onboardingPromptsSeen: a,
                onboardingResponsesSeen: o
            }, !d && v(t, r), g[t] = Date.now()
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
            m = !1
        },
        GUILD_ONBOARDING_SELECT_OPTION: function(e) {
            let {
                guildId: t,
                optionId: n,
                selected: i,
                removedOptionIds: r
            } = e;
            return !!o.default.isFullServerPreview(t) || null != E[t] && (null != r && r.length > 0 && s.pullAll(E[t].responses, r), i ? E[t].responses.push(n) : s.pull(E[t].responses, n), null == h[t] && (h[t] = {}), h[t][n] = i, null != r && r.forEach(e => h[t][e] = !1), h[t] = {
                ...h[t]
            }, !0)
        },
        GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
            let {
                guildId: t,
                options: n,
                prompts_seen: i,
                options_seen: s
            } = e;
            v(t, n);
            let r = E[t];
            if (null == r) return !1;
            let a = p(r.prompts, i, s);
            E[t] = {
                ...r,
                prompts: a,
                onboardingPrompts: a.filter(e => e.inOnboarding),
                onboardingPromptsSeen: i,
                onboardingResponsesSeen: s
            }
        },
        GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: S,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: S,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
            let {
                guildId: t,
                channelIds: n
            } = e;
            E[t] = {
                ...E[t],
                defaultChannelIds: n
            }
        },
        GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
            let {
                guildId: t,
                mode: n
            } = e, i = E[t];
            null != i && (i.mode = n)
        }
    })
}