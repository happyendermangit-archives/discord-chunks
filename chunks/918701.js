function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculatePercentComplete: function() {
            return y
        },
        captureQuestsException: function() {
            return B
        },
        getContextualEntrypointHeading: function() {
            return P
        },
        getGameLogotypeAssetUrl: function() {
            return g
        },
        getGameTileAssetUrl: function() {
            return C
        },
        getHeroAssetUrl: function() {
            return O
        },
        getPlatformString: function() {
            return M
        },
        getQuestBarHeroAssetUrl: function() {
            return R
        },
        getQuestByApplicationId: function() {
            return I
        },
        getQuestForTargetedContent: function() {
            return D
        },
        getQuestUrl: function() {
            return L
        },
        getQuestsFromActivities: function() {
            return F
        },
        getQuestsInstructionsToWinReward: function() {
            return K
        },
        getRewardAssetUrl: function() {
            return p
        },
        getRewardCodeQuestReward: function() {
            return W
        },
        getVideoAssetMimeType: function() {
            return Y
        },
        hasQuestCollectibleRewards: function() {
            return w
        },
        includesTarget: function() {
            return k
        },
        isAssetAnimated: function() {
            return V
        },
        isCollectibleReward: function() {
            return G
        },
        isDismissed: function() {
            return b
        },
        isDismissible: function() {
            return U
        },
        isQuestExpired: function() {
            return T
        },
        isQuestWithKnownConfigVersion: function() {
            return E
        },
        isTargetedForContent: function() {
            return v
        },
        isTieredRewardCodeQuest: function() {
            return j
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

    function N(e, t) {
        return e.startsWith("data") ? e : t
    }
    let p = e => {
            var t, n;
            let i = j({
                    quest: e
                }) ? W({
                    quest: e,
                    idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
                }) : null,
                r = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : e.config.assets.rewardTile;
            return N(r, "".concat(c).concat(e.id, "/").concat(r))
        },
        O = e => N(e.config.assets.hero, "".concat(c).concat(e.id, "/").concat(e.config.assets.hero)),
        R = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : N(e.config.assets.questBarHero, "".concat(c).concat(e.id, "/").concat(e.config.assets.questBarHero)),
        C = (e, t) => N(e.config.assets.gameTile, "".concat(c).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
        g = (e, t) => N(e.config.assets.logotype, "".concat(c).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
        L = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function D(e, t) {
        for (let [n, i] of e)
            if (!T(i) && i.targetedContent.includes(t)) return i;
        return null
    }

    function v(e, t) {
        return e.targetedContent.includes(t)
    }
    let M = e => {
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

    function y(e) {
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

    function P(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return _.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = y(e);
            return t >= .75 ? _.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? _.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? _.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : _.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return _.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function U(e) {
        return Object.keys(d.DismissibleQuestContentFlags).includes(u.QuestContent[e])
    }

    function b(e, t) {
        if (!U(t)) return !1;
        let n = u.QuestContent[t];
        return (0, a.hasFlag)(e.dismissedQuestContent, d.DismissibleQuestContentFlags[n])
    }

    function G(e) {
        return e.tag === s.QuestRewardTypes.COLLECTIBLE
    }

    function w(e) {
        return e.rewardsConfig.rewards.some(G)
    }

    function k(e, t) {
        return e.targetedContent.includes(t)
    }

    function B(e, t) {
        o.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }

    function F(e, t) {
        if (null == t || null == e) return null;
        for (let n of t) {
            if (null == n.application_id) continue;
            let t = I(e, n.application_id);
            if (null != t) return t
        }
        return null
    }

    function V(e) {
        return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
    }
    let x = /\.([a-zA-Z0-9]+)$/,
        H = /^data:video\/([a-zA-Z0-9]+)\;/;

    function Y(e) {
        var t, n, i, r, s;
        switch (null !== (s = null === (n = x.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = H.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
            case "webm":
                return "video/webm";
            case "mp4":
                return "video/mp4";
            default:
                throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
        }
    }

    function j(e) {
        let {
            quest: t
        } = e, n = t.config.rewardsConfig;
        return n.assignmentMethod === r.QuestRewardAssignmentMethods.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.tag === s.QuestRewardTypes.REWARD_CODE)
    }

    function W(e) {
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

    function K(e) {
        let {
            quest: t
        } = e;
        return j({
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