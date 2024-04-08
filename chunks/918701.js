function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculatePercentComplete: function() {
            return L
        },
        captureQuestsException: function() {
            return G
        },
        getContextualEntrypointHeading: function() {
            return D
        },
        getGameLogotypeAssetUrl: function() {
            return O
        },
        getGameTileAssetUrl: function() {
            return N
        },
        getHeroAssetUrl: function() {
            return h
        },
        getPlatformString: function() {
            return g
        },
        getQuestBarHeroAssetUrl: function() {
            return m
        },
        getQuestByApplicationId: function() {
            return c
        },
        getQuestCollectibleRewardItem: function() {
            return U
        },
        getQuestForTargetedContent: function() {
            return R
        },
        getQuestUrl: function() {
            return p
        },
        getQuestsFromActivities: function() {
            return w
        },
        getRewardAssetUrl: function() {
            return A
        },
        getVideoAssetMimeType: function() {
            return V
        },
        hasQuestCollectibleRewards: function() {
            return P
        },
        includesTarget: function() {
            return b
        },
        isAssetAnimated: function() {
            return B
        },
        isCollectibleReward: function() {
            return y
        },
        isDismissed: function() {
            return M
        },
        isDismissible: function() {
            return v
        },
        isQuestExpired: function() {
            return E
        },
        isTargetedForContent: function() {
            return C
        },
        questUserStatusFromServer: function() {
            return I
        },
        questWithUserStatusFromServer: function() {
            return T
        },
        questsEntitlementsFromServer: function() {
            return S
        },
        questsRewardCodeFromServer: function() {
            return f
        }
    }), n("47120"), n("411104");
    var i = n("887003"),
        r = n("597688"),
        s = n("630388"),
        a = n("960048"),
        o = n("687744"),
        l = n("497505"),
        u = n("46140"),
        d = n("689938");
    let _ = "https://cdn.discordapp.com/assets/quests/";

    function c(e, t) {
        let n;
        for (let [i, r] of e)
            if (r.config.applicationId === t && !E(r)) {
                n = r;
                break
            } return n
    }

    function E(e) {
        return new Date(e.config.expiresAt).valueOf() <= Date.now()
    }

    function I(e) {
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

    function T(e) {
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
                            l.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
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
                rewardsConfig: (0, o.questRewardsConfigFromServer)(t.rewards_config),
                rewardCodeExpiresAt: t.reward_code_expires_at,
                rewardCodePlatforms: t.reward_code_platforms.filter(e => l.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
                assets: {
                    rewardTile: (r = t.assets).reward_tile,
                    hero: r.hero,
                    questBarHero: r.quest_bar_hero,
                    gameTile: r.game_tile,
                    logotype: r.logotype
                }
            },
            userStatus: null == e.user_status ? null : I(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function f(e) {
        return {
            userId: e.user_id,
            questId: e.quest_id,
            code: e.code,
            platform: e.platform,
            claimedAt: e.claimed_at
        }
    }

    function S(e) {
        return {
            claimedAt: e.claimed_at,
            items: e.entitlements.map(e => ({
                skuId: e.sku_id
            })),
            errors: e.errors
        }
    }
    let A = e => "".concat(_).concat(e.id, "/").concat(e.config.assets.rewardTile),
        h = e => "".concat(_).concat(e.id, "/").concat(e.config.assets.hero),
        m = e => "".concat(_).concat(e.id, "/").concat(e.config.assets.questBarHero),
        N = e => "".concat(_).concat(e.id, "/").concat(e.config.assets.gameTile),
        O = (e, t) => "".concat(_).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype),
        p = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function R(e, t) {
        for (let [n, i] of e)
            if (i.targetedContent.includes(t)) return i;
        return null
    }

    function C(e, t) {
        return e.targetedContent.includes(t)
    }
    let g = e => {
        switch (e) {
            case l.QuestRewardCodePlatforms.XBOX:
                return d.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
            case l.QuestRewardCodePlatforms.PLAYSTATION:
                return d.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
            case l.QuestRewardCodePlatforms.SWITCH:
                return d.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
            case l.QuestRewardCodePlatforms.PC:
                return d.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
            case l.QuestRewardCodePlatforms.CROSS_PLATFORM:
                return d.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
        }
    };

    function L(e) {
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

    function D(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return d.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = L(e);
            return t >= .75 ? d.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? d.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? d.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : d.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return d.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function v(e) {
        return Object.keys(u.DismissibleQuestContentFlags).includes(l.QuestContent[e])
    }

    function M(e, t) {
        if (!v(t)) return !1;
        let n = l.QuestContent[t];
        return (0, s.hasFlag)(e.dismissedQuestContent, u.DismissibleQuestContentFlags[n])
    }

    function y(e) {
        return e.tag === i.QuestRewardTypes.COLLECTIBLE
    }

    function P(e) {
        return e.rewardsConfig.rewards.some(y)
    }

    function U(e) {
        var t, n;
        let i = null === (t = e.rewardsConfig.rewards.find(y)) || void 0 === t ? void 0 : t.skuId,
            s = r.default.getProduct(i);
        return null == s ? void 0 : null === (n = s.items) || void 0 === n ? void 0 : n[0]
    }

    function b(e, t) {
        return e.targetedContent.includes(t)
    }

    function G(e, t) {
        a.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }

    function w(e, t) {
        if (null == t || null == e) return null;
        for (let n of t) {
            if (null == n.application_id) continue;
            let t = c(e, n.application_id);
            if (null != t) return t
        }
        return null
    }

    function B(e) {
        return e.endsWith(".webm") || e.endsWith(".mp4")
    }
    let k = /\.([a-zA-Z]+)$/;

    function V(e) {
        var t, n;
        switch (null === (n = k.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
            case "webm":
                return "video/webm";
            case "mp4":
                return "video/mp4";
            default:
                throw Error("Unexpected file extension: ".concat(e))
        }
    }
}