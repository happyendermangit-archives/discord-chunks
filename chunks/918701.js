function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculatePercentComplete: function() {
            return g
        },
        captureQuestsException: function() {
            return U
        },
        getContextualEntrypointHeading: function() {
            return L
        },
        getGameLogotypeAssetUrl: function() {
            return N
        },
        getGameTileAssetUrl: function() {
            return m
        },
        getHeroAssetUrl: function() {
            return A
        },
        getPlatformString: function() {
            return C
        },
        getQuestBarHeroAssetUrl: function() {
            return h
        },
        getQuestByApplicationId: function() {
            return _
        },
        getQuestForTargetedContent: function() {
            return p
        },
        getQuestUrl: function() {
            return O
        },
        getQuestsFromActivities: function() {
            return b
        },
        getRewardAssetUrl: function() {
            return S
        },
        getVideoAssetMimeType: function() {
            return B
        },
        hasQuestCollectibleRewards: function() {
            return y
        },
        includesTarget: function() {
            return P
        },
        isAssetAnimated: function() {
            return G
        },
        isCollectibleReward: function() {
            return M
        },
        isDismissed: function() {
            return v
        },
        isDismissible: function() {
            return D
        },
        isQuestExpired: function() {
            return c
        },
        isTargetedForContent: function() {
            return R
        },
        questUserStatusFromServer: function() {
            return E
        },
        questWithUserStatusFromServer: function() {
            return I
        },
        questsEntitlementsFromServer: function() {
            return f
        },
        questsRewardCodeFromServer: function() {
            return T
        }
    }), n("47120"), n("411104");
    var i = n("887003");
    n("597688");
    var r = n("630388"),
        s = n("960048"),
        a = n("687744"),
        o = n("497505"),
        l = n("46140"),
        u = n("689938");
    let d = "https://cdn.discordapp.com/assets/quests/";

    function _(e, t) {
        let n;
        for (let [i, r] of e)
            if (r.config.applicationId === t && !c(r)) {
                n = r;
                break
            } return n
    }

    function c(e) {
        return new Date(e.config.expiresAt).valueOf() <= Date.now()
    }

    function E(e) {
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

    function I(e) {
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
                            o.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
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
                rewardsConfig: (0, a.questRewardsConfigFromServer)(t.rewards_config),
                rewardCodeExpiresAt: t.reward_code_expires_at,
                rewardCodePlatforms: t.reward_code_platforms.filter(e => o.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
                assets: {
                    rewardTile: (r = t.assets).reward_tile,
                    hero: r.hero,
                    questBarHero: r.quest_bar_hero,
                    gameTile: r.game_tile,
                    logotype: r.logotype
                }
            },
            userStatus: null == e.user_status ? null : E(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function T(e) {
        return {
            userId: e.user_id,
            questId: e.quest_id,
            code: e.code,
            platform: e.platform,
            claimedAt: e.claimed_at
        }
    }

    function f(e) {
        return {
            claimedAt: e.claimed_at,
            items: e.entitlements.map(e => ({
                skuId: e.sku_id
            })),
            errors: e.errors
        }
    }
    let S = e => "".concat(d).concat(e.id, "/").concat(e.config.assets.rewardTile),
        A = e => "".concat(d).concat(e.id, "/").concat(e.config.assets.hero),
        h = e => "".concat(d).concat(e.id, "/").concat(e.config.assets.questBarHero),
        m = e => "".concat(d).concat(e.id, "/").concat(e.config.assets.gameTile),
        N = (e, t) => "".concat(d).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype),
        O = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function p(e, t) {
        for (let [n, i] of e)
            if (i.targetedContent.includes(t)) return i;
        return null
    }

    function R(e, t) {
        return e.targetedContent.includes(t)
    }
    let C = e => {
        switch (e) {
            case o.QuestRewardCodePlatforms.XBOX:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
            case o.QuestRewardCodePlatforms.PLAYSTATION:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
            case o.QuestRewardCodePlatforms.SWITCH:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
            case o.QuestRewardCodePlatforms.PC:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
            case o.QuestRewardCodePlatforms.CROSS_PLATFORM:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
        }
    };

    function g(e) {
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

    function L(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return u.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = g(e);
            return t >= .75 ? u.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? u.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? u.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : u.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return u.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function D(e) {
        return Object.keys(l.DismissibleQuestContentFlags).includes(o.QuestContent[e])
    }

    function v(e, t) {
        if (!D(t)) return !1;
        let n = o.QuestContent[t];
        return (0, r.hasFlag)(e.dismissedQuestContent, l.DismissibleQuestContentFlags[n])
    }

    function M(e) {
        return e.tag === i.QuestRewardTypes.COLLECTIBLE
    }

    function y(e) {
        return e.rewardsConfig.rewards.some(M)
    }

    function P(e, t) {
        return e.targetedContent.includes(t)
    }

    function U(e, t) {
        s.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }

    function b(e, t) {
        if (null == t || null == e) return null;
        for (let n of t) {
            if (null == n.application_id) continue;
            let t = _(e, n.application_id);
            if (null != t) return t
        }
        return null
    }

    function G(e) {
        return e.endsWith(".webm") || e.endsWith(".mp4")
    }
    let w = /\.([a-zA-Z]+)$/;

    function B(e) {
        var t, n;
        switch (null === (n = w.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
            case "webm":
                return "video/webm";
            case "mp4":
                return "video/mp4";
            default:
                throw Error("Unexpected file extension: ".concat(e))
        }
    }
}