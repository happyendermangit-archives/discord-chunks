function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DROPDOWN_MAX_NUM_OPTIONS: function() {
            return I
        },
        GuildOnboardingMode: function() {
            return s
        },
        GuildOnboardingTab: function() {
            return a
        },
        MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING: function() {
            return h
        },
        MAX_NUM_PROMPTS: function() {
            return m
        },
        MAX_PROMPT_OPTION_DESCRIPTION_LENGTH: function() {
            return p
        },
        MAX_PROMPT_OPTION_TITLE_LENGTH: function() {
            return E
        },
        MAX_PROMPT_TITLE_LENGTH: function() {
            return _
        },
        MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING: function() {
            return O
        },
        MULTIPLE_CHOICE_MAX_NUM_OPTIONS: function() {
            return y
        },
        NUM_DEFAULT_CHATTABLE_CHANNELS_MIN: function() {
            return T
        },
        ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD: function() {
            return S
        },
        OnboardingPromptType: function() {
            return u
        },
        clientPromptToServerPrompt: function() {
            return b
        },
        getDefaultPrompt: function() {
            return g
        },
        getEmptyPrompt: function() {
            return A
        },
        isDefaultPrompt: function() {
            return v
        },
        isEmojiEmpty: function() {
            return C
        },
        serverApiResponseToClientState: function() {
            return R
        }
    });
    var r, o, i, a, u, s, l = n("348327"),
        c = n.n(l),
        f = n("941504");

    function d(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }
    var _ = 100,
        E = 50,
        p = 100,
        m = 15,
        y = 12,
        I = 50,
        h = 4,
        O = 7,
        T = 5,
        S = 13;

    function v(e) {
        if (e.options.length > 0) return !1;
        var t = g(),
            n = (t.id, d(t, ["id"]));
        e.id;
        var r = d(e, ["id"]);
        return c()(n, r)
    }

    function g() {
        return {
            id: String(Date.now()),
            title: f.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
            options: [],
            singleSelect: !1,
            required: !1,
            inOnboarding: !0,
            type: 0
        }
    }

    function A(e) {
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

    function b(e) {
        return {
            id: e.id,
            options: e.options.map(function(e) {
                var t, n, r;
                return {
                    id: e.id,
                    channel_ids: e.channelIds,
                    role_ids: e.roleIds,
                    emoji: e.emoji,
                    emoji_id: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                    emoji_name: null === (n = e.emoji) || void 0 === n ? void 0 : n.name,
                    emoji_animated: null === (r = e.emoji) || void 0 === r ? void 0 : r.animated,
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
            options: e.options.map(function(e) {
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
        var t, n, r;
        return {
            prompts: e.prompts.map(N),
            defaultChannelIds: e.default_channel_ids,
            responses: null !== (t = e.responses) && void 0 !== t ? t : [],
            mode: e.mode,
            enabled: e.enabled,
            onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
            onboardingResponsesSeen: null !== (r = e.onboarding_responses_seen) && void 0 !== r ? r : {},
            belowRequirements: e.below_requirements
        }
    }

    function C(e) {
        return null == e || null == e.id && null == e.name
    }(r = a || (a = {}))[r.CUSTOMIZE = 0] = "CUSTOMIZE", r[r.BROWSE = 1] = "BROWSE", (o = u || (u = {}))[o.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", o[o.DROPDOWN = 1] = "DROPDOWN", (i = s || (s = {}))[i.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", i[i.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
}