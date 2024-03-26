function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQuestByApplicationId: function() {
            return u
        },
        isQuestExpired: function() {
            return d
        },
        questUserStatusFromServer: function() {
            return c
        },
        questWithUserStatusFromServer: function() {
            return f
        },
        questsRewardCodeFromServer: function() {
            return p
        },
        getRewardAssetUrl: function() {
            return m
        },
        getHeroStaticAssetUrl: function() {
            return h
        },
        getHeroAnimatedAssetUrl: function() {
            return x
        },
        getQuestBarStaticHeroAssetUrl: function() {
            return E
        },
        getQuestBarAnimatedHeroAssetUrl: function() {
            return y
        },
        getGameTileAssetUrl: function() {
            return g
        },
        getGameLogotypeAssetUrl: function() {
            return S
        },
        getQuestUrl: function() {
            return C
        },
        getQuestForTargetedContent: function() {
            return _
        },
        getPlatformString: function() {
            return T
        },
        calculatePercentComplete: function() {
            return I
        },
        getContextualEntrypointHeading: function() {
            return v
        },
        isDismissible: function() {
            return N
        },
        isDismissed: function() {
            return A
        },
        includesTarget: function() {
            return O
        },
        captureQuestsException: function() {
            return R
        },
        getQuestsFromActivities: function() {
            return M
        }
    }), n("222007");
    var i = n("568734"),
        l = n("286235"),
        a = n("588025"),
        s = n("166604"),
        r = n("782340");
    let o = "https://cdn.discordapp.com/assets/quests/";

    function u(e, t) {
        let n;
        for (let [i, l] of e)
            if (l.config.applicationId === t && !d(l)) {
                n = l;
                break
            } return n
    }

    function d(e) {
        let t = new Date(e.config.expiresAt);
        return t.valueOf() <= Date.now()
    }

    function c(e) {
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

    function f(e) {
        var t, n, i;
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
                            a.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
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
                rewardCodePlatforms: t.reward_code_platforms.filter(e => a.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
                videoAssets: t.video_assets
            },
            userStatus: null == e.user_status ? null : c(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function p(e) {
        return {
            userId: e.user_id,
            questId: e.quest_id,
            code: e.code,
            platform: e.platform,
            claimedAt: e.claimed_at
        }
    }
    let m = e => "".concat(o).concat(e).concat("/reward.png"),
        h = e => "".concat(o).concat(e).concat("/hero.png"),
        x = e => "".concat(o).concat(e).concat("/hero.webm"),
        E = e => "".concat(o).concat(e).concat("/quests_bar_hero.png"),
        y = e => "".concat(o).concat(e).concat("/quests_bar_hero.webm"),
        g = e => "".concat(o).concat(e).concat("/game_tile.png"),
        S = (e, t) => "".concat(o).concat(e, "/").concat(t).concat("/game_logotype.png"),
        C = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function _(e, t) {
        for (let [n, i] of e)
            if (i.targetedContent.includes(t)) return i;
        return null
    }
    let T = e => {
        switch (e) {
            case a.QuestRewardCodePlatforms.XBOX:
                return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
            case a.QuestRewardCodePlatforms.PLAYSTATION:
                return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
            case a.QuestRewardCodePlatforms.SWITCH:
                return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
            case a.QuestRewardCodePlatforms.PC:
                return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
            case a.QuestRewardCodePlatforms.CROSS_PLATFORM:
                return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
        }
    };

    function I(e) {
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

    function v(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return r.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = I(e);
            return t >= .75 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : r.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return r.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function N(e) {
        return Object.keys(s.DismissibleQuestContentFlags).includes(a.QuestContent[e])
    }

    function A(e, t) {
        if (!N(t)) return !1;
        let n = a.QuestContent[t];
        return (0, i.hasFlag)(e.dismissedQuestContent, s.DismissibleQuestContentFlags[n])
    }

    function O(e, t) {
        return e.targetedContent.includes(t)
    }

    function R(e, t) {
        l.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }

    function M(e, t) {
        if (null == t || null == e) return null;
        for (let n of t) {
            if (null == n.application_id) continue;
            let t = u(e, n.application_id);
            if (null != t) return t
        }
        return null
    }
}