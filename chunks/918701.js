function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculatePercentComplete: function() {
            return v
        },
        captureQuestsException: function() {
            return w
        },
        getContextualEntrypointHeading: function() {
            return M
        },
        getGameLogotypeAssetUrl: function() {
            return R
        },
        getGameTileAssetUrl: function() {
            return p
        },
        getHeroAssetUrl: function() {
            return N
        },
        getPlatformString: function() {
            return D
        },
        getQuestBarHeroAssetUrl: function() {
            return O
        },
        getQuestByApplicationId: function() {
            return E
        },
        getQuestForTargetedContent: function() {
            return g
        },
        getQuestUrl: function() {
            return C
        },
        getQuestsFromActivities: function() {
            return k
        },
        getQuestsInstructionsToWinReward: function() {
            return Y
        },
        getRewardAssetUrl: function() {
            return m
        },
        getRewardCodeQuestReward: function() {
            return H
        },
        getVideoAssetMimeType: function() {
            return V
        },
        hasQuestCollectibleRewards: function() {
            return b
        },
        includesTarget: function() {
            return G
        },
        isAssetAnimated: function() {
            return B
        },
        isCollectibleReward: function() {
            return U
        },
        isDismissed: function() {
            return P
        },
        isDismissible: function() {
            return y
        },
        isQuestExpired: function() {
            return I
        },
        isQuestWithKnownConfigVersion: function() {
            return c
        },
        isTargetedForContent: function() {
            return L
        },
        isTieredRewardCodeQuest: function() {
            return x
        },
        questUserStatusFromServer: function() {
            return T
        },
        questWithUserStatusFromServer: function() {
            return f
        },
        questsEntitlementsFromServer: function() {
            return h
        },
        questsRewardCodeFromServer: function() {
            return S
        }
    }), n("47120"), n("411104");
    var i = n("551910"),
        r = n("887003");
    n("597688");
    var s = n("630388"),
        a = n("960048"),
        o = n("687744"),
        l = n("497505"),
        u = n("46140"),
        d = n("689938");
    let _ = "https://cdn.discordapp.com/assets/quests/";

    function c(e) {
        if (1 === e.config.config_version) return !0;
        return e.config.config_version, !1
    }

    function E(e, t) {
        let n;
        for (let [i, r] of e)
            if (r.config.applicationId === t && !I(r)) {
                n = r;
                break
            } return n
    }

    function I(e) {
        return new Date(e.config.expiresAt).valueOf() <= Date.now()
    }

    function T(e) {
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

    function f(e) {
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
            userStatus: null == e.user_status ? null : T(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function S(e) {
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
                    case r.QuestRewardTypes.IN_GAME:
                        return {
                            questRewards: {
                                reward: {
                                    tag: t.reward.tag
                                }
                            }
                        };
                    case r.QuestRewardTypes.REWARD_CODE:
                        return {
                            questRewards: {
                                reward: {
                                    tag: t.reward.tag,
                                    rewardCode: S(t.reward.reward_code)
                                }
                            }
                        }
                }
            }(e.tenant_metadata)
        }
    }

    function h(e) {
        return {
            claimedAt: e.claimed_at,
            items: e.entitlements.map(A),
            errors: e.errors
        }
    }
    let m = e => {
            var t, n;
            let i = x({
                    quest: e
                }) ? H({
                    quest: e,
                    idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
                }) : null,
                r = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : e.config.assets.rewardTile;
            return "".concat(_).concat(e.id, "/").concat(r)
        },
        N = e => "".concat(_).concat(e.id, "/").concat(e.config.assets.hero),
        O = e => "".concat(_).concat(e.id, "/").concat(e.config.assets.questBarHero),
        p = e => "".concat(_).concat(e.id, "/").concat(e.config.assets.gameTile),
        R = (e, t) => "".concat(_).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype),
        C = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

    function g(e, t) {
        for (let [n, i] of e)
            if (i.targetedContent.includes(t)) return i;
        return null
    }

    function L(e, t) {
        return e.targetedContent.includes(t)
    }
    let D = e => {
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

    function v(e) {
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

    function M(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return d.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            let t = v(e);
            return t >= .75 ? d.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? d.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? d.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : d.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return d.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function y(e) {
        return Object.keys(u.DismissibleQuestContentFlags).includes(l.QuestContent[e])
    }

    function P(e, t) {
        if (!y(t)) return !1;
        let n = l.QuestContent[t];
        return (0, s.hasFlag)(e.dismissedQuestContent, u.DismissibleQuestContentFlags[n])
    }

    function U(e) {
        return e.tag === r.QuestRewardTypes.COLLECTIBLE
    }

    function b(e) {
        return e.rewardsConfig.rewards.some(U)
    }

    function G(e, t) {
        return e.targetedContent.includes(t)
    }

    function w(e, t) {
        a.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "quests"
            }
        })
    }

    function k(e, t) {
        if (null == t || null == e) return null;
        for (let n of t) {
            if (null == n.application_id) continue;
            let t = E(e, n.application_id);
            if (null != t) return t
        }
        return null
    }

    function B(e) {
        return e.endsWith(".webm") || e.endsWith(".mp4")
    }
    let F = /\.([a-zA-Z]+)$/;

    function V(e) {
        var t, n;
        switch (null === (n = F.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
            case "webm":
                return "video/webm";
            case "mp4":
                return "video/mp4";
            default:
                throw Error("Unexpected file extension: ".concat(e))
        }
    }

    function x(e) {
        let {
            quest: t
        } = e, n = t.config.rewardsConfig;
        return n.assignmentMethod === i.QuestRewardAssignmentMethods.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.tag === r.QuestRewardTypes.REWARD_CODE)
    }

    function H(e) {
        let {
            quest: t,
            idx: n
        } = e;
        if (null == n) return null;
        let i = t.config.rewardsConfig.rewards[n];
        if (null == i);
        else if (i.tag === r.QuestRewardTypes.REWARD_CODE) return i;
        return null
    }

    function Y(e) {
        let {
            quest: t
        } = e;
        return x({
            quest: t
        }) ? d.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED.format({
            gameTitle: t.config.messages.gameTitle,
            streamingDurationRequirement: t.config.streamDurationRequirementMinutes
        }) : d.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
            gameTitle: t.config.messages.gameTitle,
            questReward: t.config.messages.rewardNameWithArticle,
            streamingDurationRequirement: t.config.streamDurationRequirementMinutes
        })
    }
}