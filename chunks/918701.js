function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculatePercentComplete: function() {
            return M
        },
        captureQuestsException: function() {
            return k
        },
        getContextualEntrypointHeading: function() {
            return y
        },
        getGameLogotypeAssetUrl: function() {
            return C
        },
        getGameTileAssetUrl: function() {
            return R
        },
        getHeroAssetUrl: function() {
            return p
        },
        getPlatformString: function() {
            return v
        },
        getQuestBarHeroAssetUrl: function() {
            return O
        },
        getQuestByApplicationId: function() {
            return I
        },
        getQuestForTargetedContent: function() {
            return L
        },
        getQuestUrl: function() {
            return g
        },
        getQuestsFromActivities: function() {
            return B
        },
        getQuestsInstructionsToWinReward: function() {
            return j
        },
        getRewardAssetUrl: function() {
            return N
        },
        getRewardCodeQuestReward: function() {
            return Y
        },
        getVideoAssetMimeType: function() {
            return x
        },
        hasQuestCollectibleRewards: function() {
            return G
        },
        includesTarget: function() {
            return w
        },
        isAssetAnimated: function() {
            return F
        },
        isCollectibleReward: function() {
            return b
        },
        isDismissed: function() {
            return U
        },
        isDismissible: function() {
            return P
        },
        isQuestExpired: function() {
            return T
        },
        isQuestWithKnownConfigVersion: function() {
            return E
        },
        isTargetedForContent: function() {
            return D
        },
        isTieredRewardCodeQuest: function() {
            return H
        },
        questUserStatusFromServer: function() {
            return f
        },
        questWithUserStatusFromServer: function() {
            return S
        },
        questsEntitlementsFromServer: function() {
            return m
        },
        questsRewardCodeFromServer: function() {
            return h
        }
    }), n("627341"), n("47120"), n("411104");
    var i = n("278074"),
        r = n("551910"),
        s = n("887003");
    n("597688");
    var a = n("630388"),
        o = n("960048"),
        l = n("687744"),
        u = n("497505"),
        d = n("46140"),
        _ = n("689938");
    let c = "https://cdn.discordapp.com/assets/quests/";

    function E(e) {
        try {
            return (0, i.match)(e.config).with({
                config_version: 1
            }, () => !0).with({
                config_version: 2
            }, () => !0).exhaustive()
        } catch (n) {
            var t;
            return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1
        }
    }

    function I(e, t) {
        let n;
        for (let [i, r] of e)
            if (r.config.applicationId === t && !T(r)) {
                n = r;
                break
            } return n
    }

    function T(e) {
        return new Date(e.config.expiresAt).valueOf() <= Date.now()
    }

    function f(e) {
        var t;
        return {
            userId: e.user_id,
            questId: e.quest_id,
            enrolledAt: e.enrolled_at,
            completedAt: e.completed_at,
            claimedAt: e.claimed_at,
            claimedTier: null !== (t = e.claimed_tier) && void 0 !== t ? t : null,
            lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
            streamProgressSeconds: e.stream_progress_seconds,
            dismissedQuestContent: e.dismissed_quest_content,
            progress: function(e) {
                let t = {};
                for (let [n, i] of Object.entries(e)) t[n] = {
                    eventName: i.event_name,
                    value: i.value,
                    updatedAt: i.updated_at,
                    completedAt: i.completed_at
                };
                return t
            }(e.progress)
        }
    }

    function S(e) {
        var t;
        return {
            id: e.id,
            preview: e.preview,
            config: (t = e.config, (0, i.match)(t).with({
                config_version: 1
            }, e => {
                var t, n, i;
                return {
                    configVersion: 1,
                    expiresAt: e.expires_at,
                    streamDurationRequirementMinutes: e.stream_duration_requirement_minutes,
                    gameTitle: e.game_title,
                    getGameLink: e.get_game_link,
                    applicationId: e.application_id,
                    applicationName: e.application_name,
                    messages: {
                        questName: (t = e.messages).quest_name,
                        rewardName: t.reward_name,
                        rewardNameWithArticle: t.reward_name_with_article,
                        rewardRedemptionInstructionsByPlatform: function(e) {
                            let t = {};
                            for (let n in e) {
                                let i = parseInt(n);
                                u.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
                            }
                            return t
                        }(t.reward_redemption_instructions_by_platform),
                        gameTitle: t.game_title,
                        gamePublisher: t.game_publisher
                    },
                    colors: {
                        primary: (n = e.colors).primary,
                        secondary: n.secondary
                    },
                    rewardsConfig: (0, l.questRewardsConfigFromServer)(e.rewards_config),
                    rewardCodeExpiresAt: e.reward_code_expires_at,
                    rewardCodePlatforms: e.reward_code_platforms.filter(e => u.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
                    assets: {
                        rewardTile: (i = e.assets).reward_tile,
                        hero: i.hero,
                        questBarHero: i.quest_bar_hero,
                        gameTile: i.game_tile,
                        logotype: i.logotype
                    },
                    inGameQuestConfig: null
                }
            }).with({
                config_version: 2
            }, e => ({
                configVersion: 2,
                expiresAt: e.expires_at,
                getGameLink: e.get_game_link,
                applicationId: e.application_id,
                applicationName: e.application_name,
                streamDurationRequirementMinutes: 0,
                rewardCodeExpiresAt: "",
                gameTitle: "",
                messages: {
                    questName: "",
                    rewardName: "",
                    rewardNameWithArticle: "",
                    rewardRedemptionInstructionsByPlatform: {},
                    gameTitle: "",
                    gamePublisher: ""
                },
                colors: {
                    primary: "",
                    secondary: ""
                },
                rewardsConfig: {
                    assignmentMethod: r.QuestRewardAssignmentMethods.ALL,
                    rewards: []
                },
                rewardCodePlatforms: [],
                assets: {
                    rewardTile: "",
                    hero: "",
                    questBarHero: "",
                    gameTile: "",
                    logotype: ""
                },
                inGameQuestConfig: null
            })).exhaustive()),
            userStatus: null == e.user_status ? null : f(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function h(e) {
        var t;
        return {
            userId: e.user_id,
            questId: e.quest_id,
            code: e.code,
            platform: e.platform,
            claimedAt: e.claimed_at,
            tier: null !== (t = e.tier) && void 0 !== t ? t : null
        }
    }

    function A(e) {
        return {
            skuId: e.sku_id,
            tenantMetadata: function(e) {
                if ((null == e ? void 0 : e.quest_rewards) == null) return null;
                let t = e.quest_rewards;
                switch (t.reward.tag) {
                    case s.QuestRewardTypes.IN_GAME:
                        return {
                            questRewards: {
                                reward: {
                                    tag: t.reward.tag
                                }
                            }
                        };
                    case s.QuestRewardTypes.REWARD_CODE:
                        return {
                            questRewards: {
                                reward: {
                                    tag: t.reward.tag,
                                    rewardCode: h(t.reward.reward_code)
                                }
                            }
                        }
                }
            }(e.tenant_metadata)
        }
    }

    function m(e) {
        return {
            claimedAt: e.claimed_at,
            items: e.entitlements.map(A),
            errors: e.errors
        }
    }
    let N = e => {
            var t, n;
            let i = H({
                    quest: e
                }) ? Y({
                    quest: e,
                    idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
                }) : null,
                r = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : e.config.assets.rewardTile;
            return "".concat(c).concat(e.id, "/").concat(r)
        },
        p = e => "".concat(c).concat(e.id, "/").concat(e.config.assets.hero),
        O = e => "".concat(c).concat(e.id, "/").concat(e.config.assets.questBarHero),
        R = (e, t) => "".concat(c).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile),
        C = (e, t) => "".concat(c).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype),
        g = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function L(e, t) {
        for (let [n, i] of e)
            if (!T(i) && i.targetedContent.includes(t)) return i;
        return null
    }

    function D(e, t) {
        return e.targetedContent.includes(t)
    }
    let v = e => {
        switch (e) {
            case u.QuestRewardCodePlatforms.XBOX:
                return _.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
            case u.QuestRewardCodePlatforms.PLAYSTATION:
                return _.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
            case u.QuestRewardCodePlatforms.SWITCH:
                return _.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
            case u.QuestRewardCodePlatforms.PC:
                return _.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
            case u.QuestRewardCodePlatforms.CROSS_PLATFORM:
                return _.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
        }
    };

    function M(e) {
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

    function y(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return _.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = M(e);
            return t >= .75 ? _.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? _.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? _.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : _.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return _.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function P(e) {
        return Object.keys(d.DismissibleQuestContentFlags).includes(u.QuestContent[e])
    }

    function U(e, t) {
        if (!P(t)) return !1;
        let n = u.QuestContent[t];
        return (0, a.hasFlag)(e.dismissedQuestContent, d.DismissibleQuestContentFlags[n])
    }

    function b(e) {
        return e.tag === s.QuestRewardTypes.COLLECTIBLE
    }

    function G(e) {
        return e.rewardsConfig.rewards.some(b)
    }

    function w(e, t) {
        return e.targetedContent.includes(t)
    }

    function k(e, t) {
        o.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }

    function B(e, t) {
        if (null == t || null == e) return null;
        for (let n of t) {
            if (null == n.application_id) continue;
            let t = I(e, n.application_id);
            if (null != t) return t
        }
        return null
    }

    function F(e) {
        return e.endsWith(".webm") || e.endsWith(".mp4")
    }
    let V = /\.([a-zA-Z]+)$/;

    function x(e) {
        var t, n;
        switch (null === (n = V.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
            case "webm":
                return "video/webm";
            case "mp4":
                return "video/mp4";
            default:
                throw Error("Unexpected file extension: ".concat(e))
        }
    }

    function H(e) {
        let {
            quest: t
        } = e, n = t.config.rewardsConfig;
        return n.assignmentMethod === r.QuestRewardAssignmentMethods.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.tag === s.QuestRewardTypes.REWARD_CODE)
    }

    function Y(e) {
        let {
            quest: t,
            idx: n
        } = e;
        if (null == n) return null;
        let i = t.config.rewardsConfig.rewards[n];
        if (null == i);
        else if (i.tag === s.QuestRewardTypes.REWARD_CODE) return i;
        return null
    }

    function j(e) {
        let {
            quest: t
        } = e;
        return H({
            quest: t
        }) ? _.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED.format({
            gameTitle: t.config.messages.gameTitle,
            streamingDurationRequirement: t.config.streamDurationRequirementMinutes
        }) : _.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
            gameTitle: t.config.messages.gameTitle,
            questReward: t.config.messages.rewardNameWithArticle,
            streamingDurationRequirement: t.config.streamDurationRequirementMinutes
        })
    }
}