function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_PROMPT_TITLE_LENGTH: function() {
            return _
        },
        MAX_PROMPT_OPTION_TITLE_LENGTH: function() {
            return f
        },
        MAX_PROMPT_OPTION_DESCRIPTION_LENGTH: function() {
            return E
        },
        MAX_NUM_PROMPTS: function() {
            return h
        },
        MULTIPLE_CHOICE_MAX_NUM_OPTIONS: function() {
            return g
        },
        DROPDOWN_MAX_NUM_OPTIONS: function() {
            return m
        },
        MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING: function() {
            return p
        },
        MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING: function() {
            return S
        },
        NUM_DEFAULT_CHATTABLE_CHANNELS_MIN: function() {
            return T
        },
        ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD: function() {
            return v
        },
        GuildOnboardingTab: function() {
            return a
        },
        OnboardingPromptType: function() {
            return o
        },
        GuildOnboardingMode: function() {
            return l
        },
        isDefaultPrompt: function() {
            return I
        },
        getDefaultPrompt: function() {
            return A
        },
        getEmptyPrompt: function() {
            return C
        },
        clientPromptToServerPrompt: function() {
            return y
        },
        serverApiResponseToClientState: function() {
            return R
        },
        isEmojiEmpty: function() {
            return O
        }
    });
    var i, s, r, a, o, l, u = n("714617"),
        d = n.n(u),
        c = n("782340");
    let _ = 100,
        f = 50,
        E = 100,
        h = 15,
        g = 12,
        m = 50,
        p = 4,
        S = 7,
        T = 5,
        v = 13;

    function I(e) {
        if (e.options.length > 0) return !1;
        let {
            id: t,
            ...n
        } = A(), {
            id: i,
            ...s
        } = e;
        return d(n, s)
    }

    function A() {
        return {
            id: String(Date.now()),
            title: c.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
            options: [],
            singleSelect: !1,
            required: !1,
            inOnboarding: !0,
            type: 0
        }
    }

    function C(e) {
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

    function y(e) {
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

    function N(e) {
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

    function R(e) {
        var t, n, i;
        return {
            prompts: e.prompts.map(N),
            defaultChannelIds: e.default_channel_ids,
            responses: null !== (t = e.responses) && void 0 !== t ? t : [],
            mode: e.mode,
            enabled: e.enabled,
            onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
            onboardingResponsesSeen: null !== (i = e.onboarding_responses_seen) && void 0 !== i ? i : {},
            belowRequirements: e.below_requirements
        }
    }

    function O(e) {
        return null == e || null == e.id && null == e.name
    }(i = a || (a = {}))[i.CUSTOMIZE = 0] = "CUSTOMIZE", i[i.BROWSE = 1] = "BROWSE", (s = o || (o = {}))[s.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", s[s.DROPDOWN = 1] = "DROPDOWN", (r = l || (l = {}))[r.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", r[r.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
}