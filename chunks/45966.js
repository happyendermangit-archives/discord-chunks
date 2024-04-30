function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("536091");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("160404"),
        c = n("592125"),
        E = n("70956"),
        I = n("709054"),
        T = n("977258"),
        f = n("819553"),
        S = n("290511");
    let h = {},
        A = {},
        m = {},
        N = !1;

    function p(e, t, n) {
        return e.map(e => (function(e, t, n) {
            let i = !1,
                r = [];
            for (let t = 0; t < e.options.length; t++) {
                let s = e.options[t],
                    a = null == n[s.id];
                a && (i = !0), r.push({
                    ...s,
                    isUnseen: a
                })
            }
            return {
                ...e,
                options: r,
                hasNewAnswers: i,
                isNew: null == t[e.id]
            }
        })(e, t, n))
    }

    function O(e) {
        var t, n, i, r, s, a, o, l, u;
        let {
            guildId: d,
            updates: _
        } = e, c = null !== (s = null !== (r = _.onboardingPromptsSeen) && void 0 !== r ? r : null === (t = h[d]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== s ? s : {}, E = null !== (o = null !== (a = _.onboardingResponsesSeen) && void 0 !== a ? a : null === (n = h[d]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== o ? o : {}, I = p(null !== (u = null !== (l = _.prompts) && void 0 !== l ? l : null === (i = h[d]) || void 0 === i ? void 0 : i.prompts) && void 0 !== u ? u : [], c, E);
        h[d] = {
            ...h[d],
            ..._,
            prompts: I
        }
    }

    function R(e, t) {
        if (null == A[e]) return;
        let n = {};
        Object.keys(A[e]).forEach(i => {
            !t.includes(i) && A[e][i] ? n[i] = !0 : t.includes(i) && !1 === A[e][i] && (n[i] = !1)
        }), A[e] = n;
        let i = t.filter(e => null == n[e] || !0 === n[e]);
        Object.keys(n).forEach(e => {
            !0 === n[e] && !t.includes(e) && i.push(e)
        }), h[e] = {
            ...h[e],
            responses: i
        }
    }
    let C = [],
        g = [],
        L = [];
    class v extends(i = u.default.Store) {
        initialize() {
            this.waitFor(c.default, f.default, _.default)
        }
        getOnboardingPromptsForOnboarding(e) {
            var t, n;
            return null !== (n = null === (t = h[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : C
        }
        getOnboardingPrompts(e) {
            var t, n;
            return null !== (n = null === (t = h[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : C
        }
        getOnboardingResponses(e) {
            var t, n, i;
            return _.default.isFullServerPreview(e) ? Array.from(null !== (n = _.default.getOnboardingResponses(e)) && void 0 !== n ? n : g) : null !== (i = null === (t = h[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== i ? i : g
        }
        getSelectedOptions(e) {
            let t = this.getOnboardingResponses(e);
            return this.getOnboardingPrompts(e).map(e => e.options).flat().filter(e => t.includes(e.id))
        }
        getOnboardingResponsesForPrompt(e, t) {
            let n = h[e];
            if (null == n) return g;
            let i = n.prompts.find(e => e.id === t);
            return null == i ? g : l().intersection(i.options.map(e => e.id), this.getOnboardingResponses(e))
        }
        getEnabledOnboardingPrompts(e) {
            var t, n;
            let i = h[e];
            return _.default.isFullServerPreview(e) ? null !== (t = null == i ? void 0 : i.prompts) && void 0 !== t ? t : C : null != i && i.enabled ? null !== (n = i.prompts) && void 0 !== n ? n : C : C
        }
        getDefaultChannelIds(e) {
            var t, n;
            return null !== (n = null === (t = h[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : L
        }
        getEnabled(e) {
            var t, n;
            return _.default.isFullServerPreview(e) ? null != h[e] : null !== (n = null === (t = h[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
        }
        getOnboardingPrompt(e) {
            return Object.values(h).map(e => e.prompts).flat().find(t => t.id === e)
        }
        isLoading() {
            return N
        }
        shouldFetchPrompts(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.default.Millis.HOUR;
            if (N) return !1;
            let n = m[e];
            return null == n || Date.now() - n > t
        }
        getPendingResponseOptions(e) {
            return A[e]
        }
        ackIdForGuild(e) {
            let t = this.getEnabledOnboardingPrompts(e),
                n = "0";
            return t.forEach(e => {
                e.options.forEach(e => {
                    I.default.compare(e.id, n) > 0 && (n = e.id)
                }), I.default.compare(e.id, n) > 0 && (n = e.id)
            }), n
        }
        lastFetchedAt(e) {
            return m[e]
        }
        isAdvancedMode(e) {
            var t;
            return null != e && (null === (t = h[e]) || void 0 === t ? void 0 : t.mode) === S.GuildOnboardingMode.ONBOARDING_ADVANCED
        }
    }
    a = "GuildOnboardingPromptsStore", (s = "displayName") in(r = v) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new v(d.default, {
        CONNECTION_OPEN: function() {
            N = !1, h = {}
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
            N = !0
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                prompts: n,
                defaultChannelIds: i,
                enabled: r,
                responses: s,
                onboardingPromptsSeen: a,
                onboardingResponsesSeen: o,
                mode: l,
                belowRequirements: u
            } = e;
            N = !1;
            let d = f.default.getOnboardingStatus(t) === f.GuildOnboardingStatus.READY,
                _ = p(n, a, o);
            h[t] = {
                enabled: r,
                mode: l,
                belowRequirements: u,
                prompts: _,
                onboardingPrompts: _.filter(e => e.inOnboarding),
                defaultChannelIds: i.filter(e => (0, T.canChannelBeDefault)(t, e)),
                responses: d ? [] : s,
                onboardingPromptsSeen: a,
                onboardingResponsesSeen: o
            }, !d && R(t, s), m[t] = Date.now()
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
            N = !1
        },
        GUILD_ONBOARDING_SELECT_OPTION: function(e) {
            let {
                guildId: t,
                optionId: n,
                selected: i,
                removedOptionIds: r
            } = e;
            return !!_.default.isFullServerPreview(t) || null != h[t] && (null != r && r.length > 0 && l().pullAll(h[t].responses, r), i ? h[t].responses.push(n) : l().pull(h[t].responses, n), null == A[t] && (A[t] = {}), A[t][n] = i, null != r && r.forEach(e => A[t][e] = !1), A[t] = {
                ...A[t]
            }, !0)
        },
        GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
            let {
                guildId: t,
                options: n,
                prompts_seen: i,
                options_seen: r
            } = e;
            R(t, n);
            let s = h[t];
            if (null == s) return !1;
            let a = p(s.prompts, i, r);
            h[t] = {
                ...s,
                prompts: a,
                onboardingPrompts: a.filter(e => e.inOnboarding),
                onboardingPromptsSeen: i,
                onboardingResponsesSeen: r
            }
        },
        GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: O,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: O,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
            let {
                guildId: t,
                channelIds: n
            } = e;
            h[t] = {
                ...h[t],
                defaultChannelIds: n
            }
        },
        GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
            let {
                guildId: t,
                mode: n
            } = e, i = h[t];
            null != i && (i.mode = n)
        }
    })
}