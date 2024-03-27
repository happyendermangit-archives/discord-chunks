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
            return m
        },
        getRewardAssetUrl: function() {
            return p
        },
        getHeroAssetUrl: function() {
            return h
        },
        getQuestBarHeroAssetUrl: function() {
            return x
        },
        getGameTileAssetUrl: function() {
            return E
        },
        getGameLogotypeAssetUrl: function() {
            return y
        },
        getQuestUrl: function() {
            return g
        },
        getQuestForTargetedContent: function() {
            return S
        },
        getPlatformString: function() {
            return C
        },
        calculatePercentComplete: function() {
            return T
        },
        getContextualEntrypointHeading: function() {
            return _
        },
        isDismissible: function() {
            return I
        },
        isDismissed: function() {
            return v
        },
        includesTarget: function() {
            return A
        },
        captureQuestsException: function() {
            return N
        },
        getQuestsFromActivities: function() {
            return R
        },
        isAssetAnimated: function() {
            return O
        },
        getVideoAssetMimeType: function() {
            return k
        }
    }), n("222007"), n("70102");
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
        var t, n, i, l;
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
                assets: {
                    rewardTile: (l = t.assets).reward_tile,
                    hero: l.hero,
                    questBarHero: l.quest_bar_hero,
                    gameTile: l.game_tile,
                    logotype: l.logotype
                }
            },
            userStatus: null == e.user_status ? null : c(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function m(e) {
        return {
            userId: e.user_id,
            questId: e.quest_id,
            code: e.code,
            platform: e.platform,
            claimedAt: e.claimed_at
        }
    }
    let p = e => "".concat(o).concat(e.id, "/").concat(e.config.assets.rewardTile),
        h = e => "".concat(o).concat(e.id, "/").concat(e.config.assets.hero),
        x = e => "".concat(o).concat(e.id, "/").concat(e.config.assets.questBarHero),
        E = e => "".concat(o).concat(e.id, "/").concat(e.config.assets.gameTile),
        y = (e, t) => "".concat(o).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype),
        g = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function S(e, t) {
        for (let [n, i] of e)
            if (i.targetedContent.includes(t)) return i;
        return null
    }
    let C = e => {
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

    function T(e) {
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

    function _(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return r.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = T(e);
            return t >= .75 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : r.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return r.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function I(e) {
        return Object.keys(s.DismissibleQuestContentFlags).includes(a.QuestContent[e])
    }

    function v(e, t) {
        if (!I(t)) return !1;
        let n = a.QuestContent[t];
        return (0, i.hasFlag)(e.dismissedQuestContent, s.DismissibleQuestContentFlags[n])
    }

    function A(e, t) {
        return e.targetedContent.includes(t)
    }

    function N(e, t) {
        l.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }

    function R(e, t) {
        if (null == t || null == e) return null;
        for (let n of t) {
            if (null == n.application_id) continue;
            let t = u(e, n.application_id);
            if (null != t) return t
        }
        return null
    }

    function O(e) {
        return e.endsWith(".webm") || e.endsWith(".mp4")
    }
    let M = /\.([a-zA-Z]+)$/;

    function k(e) {
        var t, n;
        let i = null === (n = M.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase();
        switch (i) {
            case "webm":
                return "video/webm";
            case "mp4":
                return "video/mp4";
            default:
                throw Error("Unexpected file extension: ".concat(e))
        }
    }
}