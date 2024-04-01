function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculatePercentComplete: function() {
            return O
        },
        captureQuestsException: function() {
            return L
        },
        getContextualEntrypointHeading: function() {
            return p
        },
        getGameLogotypeAssetUrl: function() {
            return A
        },
        getGameTileAssetUrl: function() {
            return S
        },
        getHeroAssetUrl: function() {
            return T
        },
        getPlatformString: function() {
            return N
        },
        getQuestBarHeroAssetUrl: function() {
            return f
        },
        getQuestByApplicationId: function() {
            return u
        },
        getQuestForTargetedContent: function() {
            return m
        },
        getQuestUrl: function() {
            return h
        },
        getQuestsFromActivities: function() {
            return D
        },
        getRewardAssetUrl: function() {
            return I
        },
        getVideoAssetMimeType: function() {
            return y
        },
        includesTarget: function() {
            return g
        },
        isAssetAnimated: function() {
            return v
        },
        isDismissed: function() {
            return C
        },
        isDismissible: function() {
            return R
        },
        isQuestExpired: function() {
            return d
        },
        questUserStatusFromServer: function() {
            return _
        },
        questWithUserStatusFromServer: function() {
            return c
        },
        questsRewardCodeFromServer: function() {
            return E
        }
    }), n("47120"), n("411104");
    var i = n("630388"),
        r = n("960048"),
        s = n("497505"),
        a = n("46140"),
        o = n("689938");
    let l = "https://cdn.discordapp.com/assets/quests/";

    function u(e, t) {
        let n;
        for (let [i, r] of e)
            if (r.config.applicationId === t && !d(r)) {
                n = r;
                break
            } return n
    }

    function d(e) {
        return new Date(e.config.expiresAt).valueOf() <= Date.now()
    }

    function _(e) {
        return {
            userId: e.user_id,
            questId: e.quest_id,
            enrolledAt: e.enrolled_at,
            completedAt: e.completed_at,
            claimedAt: e.claimed_at,
            lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
            streamProgressSeconds: e.stream_progress_seconds,
            dismissedQuestContent: e.dismissed_quest_content
        }
    }

    function c(e) {
        var t, n, i, r;
        return {
            id: e.id,
            preview: e.preview,
            config: {
                expiresAt: (t = e.config).expires_at,
                streamDurationRequirementMinutes: t.stream_duration_requirement_minutes,
                gameTitle: t.game_title,
                getGameLink: t.get_game_link,
                applicationId: t.application_id,
                applicationName: t.application_name,
                messages: {
                    questName: (n = t.messages).quest_name,
                    rewardName: n.reward_name,
                    rewardNameWithArticle: n.reward_name_with_article,
                    rewardRedemptionInstructionsByPlatform: function(e) {
                        let t = {};
                        for (let n in e) {
                            let i = parseInt(n);
                            s.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
                        }
                        return t
                    }(n.reward_redemption_instructions_by_platform),
                    gameTitle: n.game_title,
                    gamePublisher: n.game_publisher
                },
                colors: {
                    primary: (i = t.colors).primary,
                    secondary: i.secondary
                },
                rewardCodeExpiresAt: t.reward_code_expires_at,
                rewardCodePlatforms: t.reward_code_platforms.filter(e => s.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
                assets: {
                    rewardTile: (r = t.assets).reward_tile,
                    hero: r.hero,
                    questBarHero: r.quest_bar_hero,
                    gameTile: r.game_tile,
                    logotype: r.logotype
                }
            },
            userStatus: null == e.user_status ? null : _(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function E(e) {
        return {
            userId: e.user_id,
            questId: e.quest_id,
            code: e.code,
            platform: e.platform,
            claimedAt: e.claimed_at
        }
    }
    let I = e => "".concat(l).concat(e.id, "/").concat(e.config.assets.rewardTile),
        T = e => "".concat(l).concat(e.id, "/").concat(e.config.assets.hero),
        f = e => "".concat(l).concat(e.id, "/").concat(e.config.assets.questBarHero),
        S = e => "".concat(l).concat(e.id, "/").concat(e.config.assets.gameTile),
        A = (e, t) => "".concat(l).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype),
        h = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function m(e, t) {
        for (let [n, i] of e)
            if (i.targetedContent.includes(t)) return i;
        return null
    }
    let N = e => {
        switch (e) {
            case s.QuestRewardCodePlatforms.XBOX:
                return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
            case s.QuestRewardCodePlatforms.PLAYSTATION:
                return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
            case s.QuestRewardCodePlatforms.SWITCH:
                return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
            case s.QuestRewardCodePlatforms.PC:
                return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
            case s.QuestRewardCodePlatforms.CROSS_PLATFORM:
                return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
        }
    };

    function O(e) {
        if (null == e.userStatus) return 0;
        let {
            streamProgressSeconds: t,
            completedAt: n
        } = e.userStatus;
        if (null != n) return 1;
        let {
            streamDurationRequirementMinutes: i
        } = e.config;
        return Math.min(t / 60 / i, 1)
    }

    function p(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return o.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = O(e);
            return t >= .75 ? o.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? o.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? o.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : o.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return o.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function R(e) {
        return Object.keys(a.DismissibleQuestContentFlags).includes(s.QuestContent[e])
    }

    function C(e, t) {
        if (!R(t)) return !1;
        let n = s.QuestContent[t];
        return (0, i.hasFlag)(e.dismissedQuestContent, a.DismissibleQuestContentFlags[n])
    }

    function g(e, t) {
        return e.targetedContent.includes(t)
    }

    function L(e, t) {
        r.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }

    function D(e, t) {
        if (null == t || null == e) return null;
        for (let n of t) {
            if (null == n.application_id) continue;
            let t = u(e, n.application_id);
            if (null != t) return t
        }
        return null
    }

    function v(e) {
        return e.endsWith(".webm") || e.endsWith(".mp4")
    }
    let M = /\.([a-zA-Z]+)$/;

    function y(e) {
        var t, n;
        switch (null === (n = M.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
            case "webm":
                return "video/webm";
            case "mp4":
                return "video/mp4";
            default:
                throw Error("Unexpected file extension: ".concat(e))
        }
    }
}