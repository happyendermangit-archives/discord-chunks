function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQuestByApplicationId: function() {
            return d
        },
        isQuestExpired: function() {
            return c
        },
        questUserStatusFromServer: function() {
            return f
        },
        questWithUserStatusFromServer: function() {
            return E
        },
        questsRewardCodeFromServer: function() {
            return _
        },
        getRewardAssetUrl: function() {
            return S
        },
        getHeroStaticAssetUrl: function() {
            return T
        },
        getHeroAnimatedAssetUrl: function() {
            return p
        },
        getQuestBarStaticHeroAssetUrl: function() {
            return C
        },
        getQuestBarAnimatedHeroAssetUrl: function() {
            return g
        },
        getGameTileAssetUrl: function() {
            return h
        },
        getGameLogotypeAssetUrl: function() {
            return A
        },
        getQuestUrl: function() {
            return m
        },
        getQuestForTargetedContent: function() {
            return I
        },
        getPlatformString: function() {
            return y
        },
        calculatePercentComplete: function() {
            return R
        },
        getContextualEntrypointHeading: function() {
            return U
        },
        isDismissible: function() {
            return N
        },
        isDismissed: function() {
            return b
        },
        includesTarget: function() {
            return L
        },
        captureQuestsException: function() {
            return O
        }
    }), n("222007");
    var s = n("313989"),
        i = n("568734"),
        r = n("286235"),
        a = n("588025"),
        u = n("166604"),
        l = n("782340");
    let o = "https://cdn.discordapp.com/assets/quests/";

    function d(e, t) {
        let n;
        for (let [s, i] of e)
            if (i.config.applicationId === t && !c(i)) {
                n = i;
                break
            } return n
    }

    function c(e) {
        let t = new Date(e.config.expiresAt);
        return t.valueOf() <= Date.now()
    }

    function f(e) {
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

    function E(e) {
        var t, n, s;
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
                            let s = parseInt(n);
                            a.QUEST_REWARD_CODE_PLATFORMS_SET.has(s) && (t[s] = e[n])
                        }
                        return t
                    }(n.reward_redemption_instructions_by_platform),
                    gameTitle: n.game_title,
                    gamePublisher: n.game_publisher
                },
                colors: {
                    primary: (s = t.colors).primary,
                    secondary: s.secondary
                },
                rewardCodeExpiresAt: t.reward_code_expires_at,
                rewardCodePlatforms: t.reward_code_platforms.filter(e => a.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
                videoAssets: t.video_assets
            },
            userStatus: null == e.user_status ? null : f(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function _(e) {
        return {
            userId: e.user_id,
            questId: e.quest_id,
            code: e.code,
            platform: e.platform,
            claimedAt: e.claimed_at
        }
    }
    let S = e => "".concat(o).concat(e).concat("/reward.png"),
        T = e => "".concat(o).concat(e).concat("/hero.png"),
        p = e => "".concat(o).concat(e).concat("/hero.webm"),
        C = e => "".concat(o).concat(e).concat("/quests_bar_hero.png"),
        g = e => "".concat(o).concat(e).concat("/quests_bar_hero.webm"),
        h = e => "".concat(o).concat(e).concat("/game_tile.png"),
        A = (e, t) => "".concat(o).concat(e, "/").concat(t).concat("/game_logotype.png"),
        m = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function I(e, t) {
        for (let [n, s] of e)
            if (s.targetedContent.includes(t)) return s;
        return null
    }
    let y = e => {
        switch (e) {
            case s.QuestRewardCodePlatforms.XBOX:
                return l.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
            case s.QuestRewardCodePlatforms.PLAYSTATION:
                return l.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
            case s.QuestRewardCodePlatforms.SWITCH:
                return l.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
            case s.QuestRewardCodePlatforms.PC:
                return l.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
            case s.QuestRewardCodePlatforms.CROSS_PLATFORM:
                return l.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
        }
    };

    function R(e) {
        if (null == e.userStatus) return 0;
        let {
            streamProgressSeconds: t,
            completedAt: n
        } = e.userStatus;
        if (null != n) return 1;
        let {
            streamDurationRequirementMinutes: s
        } = e.config;
        return Math.min(t / 60 / s, 1)
    }

    function U(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return l.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = R(e);
            return t >= .75 ? l.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? l.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? l.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : l.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return l.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function N(e) {
        return e in u.DismissibleQuestContentFlags
    }

    function b(e, t) {
        return (0, i.hasFlag)(e.dismissedQuestContent, u.DismissibleQuestContentFlags[t])
    }

    function L(e, t) {
        return e.targetedContent.includes(t)
    }

    function O(e, t) {
        r.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }
}