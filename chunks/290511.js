function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DROPDOWN_MAX_NUM_OPTIONS: function() {
            return S
        },
        GuildOnboardingMode: function() {
            return l
        },
        GuildOnboardingTab: function() {
            return a
        },
        MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING: function() {
            return h
        },
        MAX_NUM_PROMPTS: function() {
            return T
        },
        MAX_PROMPT_OPTION_DESCRIPTION_LENGTH: function() {
            return I
        },
        MAX_PROMPT_OPTION_TITLE_LENGTH: function() {
            return E
        },
        MAX_PROMPT_TITLE_LENGTH: function() {
            return c
        },
        MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING: function() {
            return A
        },
        MULTIPLE_CHOICE_MAX_NUM_OPTIONS: function() {
            return f
        },
        NUM_DEFAULT_CHATTABLE_CHANNELS_MIN: function() {
            return m
        },
        ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD: function() {
            return N
        },
        OnboardingPromptType: function() {
            return o
        },
        clientPromptToServerPrompt: function() {
            return C
        },
        getDefaultPrompt: function() {
            return p
        },
        getEmptyPrompt: function() {
            return R
        },
        isDefaultPrompt: function() {
            return O
        },
        isEmojiEmpty: function() {
            return D
        },
        serverApiResponseToClientState: function() {
            return L
        }
    });
    var i, r, s, a, o, l, u = n("348327"),
        d = n.n(u),
        _ = n("689938");
    let c = 100,
        E = 50,
        I = 100,
        T = 15,
        f = 12,
        S = 50,
        h = 4,
        A = 7,
        m = 5,
        N = 13;

    function O(e) {
        if (e.options.length > 0) return !1;
        let {
            id: t,
            ...n
        } = p(), {
            id: i,
            ...r
        } = e;
        return d()(n, r)
    }

    function p() {
        return {
            id: String(Date.now()),
            title: _.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
            options: [],
            singleSelect: !1,
            required: !1,
            inOnboarding: !0,
            type: 0
        }
    }

    function R(e) {
        return {
            id: String(Date.now()),
            title: "",
            options: [],
            singleSelect: !1,
            required: !1,
            inOnboarding: e,
            type: 0
        }
    }

    function C(e) {
        return {
            id: e.id,
            options: e.options.map(e => {
                var t, n, i;
                return {
                    id: e.id,
                    channel_ids: e.channelIds,
                    role_ids: e.roleIds,
                    emoji: e.emoji,
                    emoji_id: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                    emoji_name: null === (n = e.emoji) || void 0 === n ? void 0 : n.name,
                    emoji_animated: null === (i = e.emoji) || void 0 === i ? void 0 : i.animated,
                    title: e.title,
                    description: e.description
                }
            }),
            title: e.title,
            single_select: e.singleSelect,
            disabled: e.disabled,
            required: e.required,
            in_onboarding: e.inOnboarding,
            type: e.type
        }
    }

    function g(e) {
        return {
            id: e.id,
            options: e.options.map(e => {
                var t;
                return {
                    id: e.id,
                    channelIds: e.channel_ids,
                    roleIds: e.role_ids,
                    emoji: e.emoji,
                    title: e.title,
                    description: null !== (t = e.description) && void 0 !== t ? t : ""
                }
            }),
            title: e.title,
            singleSelect: e.single_select,
            disabled: e.disabled,
            required: e.required,
            inOnboarding: e.in_onboarding,
            type: e.type
        }
    }

    function L(e) {
        var t, n, i;
        return {
            prompts: e.prompts.map(g),
            defaultChannelIds: e.default_channel_ids,
            responses: null !== (t = e.responses) && void 0 !== t ? t : [],
            mode: e.mode,
            enabled: e.enabled,
            onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
            onboardingResponsesSeen: null !== (i = e.onboarding_responses_seen) && void 0 !== i ? i : {},
            belowRequirements: e.below_requirements
        }
    }

    function D(e) {
        return null == e || null == e.id && null == e.name
    }(i = a || (a = {}))[i.CUSTOMIZE = 0] = "CUSTOMIZE", i[i.BROWSE = 1] = "BROWSE", (r = o || (o = {}))[r.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", r[r.DROPDOWN = 1] = "DROPDOWN", (s = l || (l = {}))[s.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", s[s.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
}