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
    let A = {},
        h = {},
        m = {},
        N = !1;

    function O(e, t, n) {
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

    function p(e) {
        var t, n, i, r, s, a, o, l, u;
        let {
            guildId: d,
            updates: _
        } = e, c = null !== (s = null !== (r = _.onboardingPromptsSeen) && void 0 !== r ? r : null === (t = A[d]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== s ? s : {}, E = null !== (o = null !== (a = _.onboardingResponsesSeen) && void 0 !== a ? a : null === (n = A[d]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== o ? o : {}, I = O(null !== (u = null !== (l = _.prompts) && void 0 !== l ? l : null === (i = A[d]) || void 0 === i ? void 0 : i.prompts) && void 0 !== u ? u : [], c, E);
        A[d] = {
            ...A[d],
            ..._,
            prompts: I
        }
    }

    function R(e, t) {
        if (null == h[e]) return;
        let n = {};
        Object.keys(h[e]).forEach(i => {
            !t.includes(i) && h[e][i] ? n[i] = !0 : t.includes(i) && !1 === h[e][i] && (n[i] = !1)
        }), h[e] = n;
        let i = t.filter(e => null == n[e] || !0 === n[e]);
        Object.keys(n).forEach(e => {
            !0 === n[e] && !t.includes(e) && i.push(e)
        }), A[e] = {
            ...A[e],
            responses: i
        }
    }
    let C = [],
        g = [],
        L = [];
    class D extends(i = u.default.Store) {
        initialize() {
            this.waitFor(c.default, f.default, _.default)
        }
        getOnboardingPromptsForOnboarding(e) {
            var t, n;
            return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : C
        }
        getOnboardingPrompts(e) {
            var t, n;
            return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : C
        }
        getOnboardingResponses(e) {
            var t, n, i;
            return _.default.isFullServerPreview(e) ? Array.from(null !== (n = _.default.getOnboardingResponses(e)) && void 0 !== n ? n : g) : null !== (i = null === (t = A[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== i ? i : g
        }
        getSelectedOptions(e) {
            let t = this.getOnboardingResponses(e);
            return this.getOnboardingPrompts(e).map(e => e.options).flat().filter(e => t.includes(e.id))
        }
        getOnboardingResponsesForPrompt(e, t) {
            let n = A[e];
            if (null == n) return g;
            let i = n.prompts.find(e => e.id === t);
            return null == i ? g : l().intersection(i.options.map(e => e.id), this.getOnboardingResponses(e))
        }
        getEnabledOnboardingPrompts(e) {
            var t, n;
            let i = A[e];
            return _.default.isFullServerPreview(e) ? null !== (t = null == i ? void 0 : i.prompts) && void 0 !== t ? t : C : null != i && i.enabled ? null !== (n = i.prompts) && void 0 !== n ? n : C : C
        }
        getDefaultChannelIds(e) {
            var t, n;
            return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : L
        }
        getEnabled(e) {
            var t, n;
            return _.default.isFullServerPreview(e) ? null != A[e] : null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
        }
        getOnboardingPrompt(e) {
            return Object.values(A).map(e => e.prompts).flat().find(t => t.id === e)
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
            return h[e]
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
            return null != e && (null === (t = A[e]) || void 0 === t ? void 0 : t.mode) === S.GuildOnboardingMode.ONBOARDING_ADVANCED
        }
    }
    a = "GuildOnboardingPromptsStore", (s = "displayName") in(r = D) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new D(d.default, {
        CONNECTION_OPEN: function() {
            N = !1, A = {}
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
                _ = O(n, a, o);
            A[t] = {
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
            return !!_.default.isFullServerPreview(t) || null != A[t] && (null != r && r.length > 0 && l().pullAll(A[t].responses, r), i ? A[t].responses.push(n) : l().pull(A[t].responses, n), null == h[t] && (h[t] = {}), h[t][n] = i, null != r && r.forEach(e => h[t][e] = !1), h[t] = {
                ...h[t]
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
            let s = A[t];
            if (null == s) return !1;
            let a = O(s.prompts, i, r);
            A[t] = {
                ...s,
                prompts: a,
                onboardingPrompts: a.filter(e => e.inOnboarding),
                onboardingPromptsSeen: i,
                onboardingResponsesSeen: r
            }
        },
        GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: p,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: p,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
            let {
                guildId: t,
                channelIds: n
            } = e;
            A[t] = {
                ...A[t],
                defaultChannelIds: n
            }
        },
        GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
            let {
                guildId: t,
                mode: n
            } = e, i = A[t];
            null != i && (i.mode = n)
        }
    })
}