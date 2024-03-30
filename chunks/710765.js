function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculatePercentComplete: function() {
            return b
        },
        captureQuestsException: function() {
            return D
        },
        getContextualEntrypointHeading: function() {
            return N
        },
        getGameLogotypeAssetUrl: function() {
            return S
        },
        getGameTileAssetUrl: function() {
            return T
        },
        getHeroAssetUrl: function() {
            return h
        },
        getPlatformString: function() {
            return A
        },
        getQuestBarHeroAssetUrl: function() {
            return O
        },
        getQuestByApplicationId: function() {
            return _
        },
        getQuestForTargetedContent: function() {
            return g
        },
        getQuestUrl: function() {
            return v
        },
        getQuestsFromActivities: function() {
            return L
        },
        getRewardAssetUrl: function() {
            return I
        },
        getVideoAssetMimeType: function() {
            return w
        },
        includesTarget: function() {
            return P
        },
        isAssetAnimated: function() {
            return M
        },
        isDismissed: function() {
            return C
        },
        isDismissible: function() {
            return R
        },
        isQuestExpired: function() {
            return E
        },
        questUserStatusFromServer: function() {
            return p
        },
        questWithUserStatusFromServer: function() {
            return m
        },
        questsRewardCodeFromServer: function() {
            return y
        }
    });
    var r = n("947248"),
        o = n("285910"),
        i = n("118"),
        a = n("961338"),
        u = n("941504");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function c(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function f(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var d = "https://cdn.discordapp.com/assets/quests/";

    function _(e, t) {
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a, u = e[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                var s = f(a.value, 2),
                    l = (s[0], s[1]);
                if (l.config.applicationId === t && !E(l)) {
                    i = l;
                    break
                }
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != u.return && u.return()
            } finally {
                if (r) throw o
            }
        }
        return i
    }

    function E(e) {
        return new Date(e.config.expiresAt).valueOf() <= Date.now()
    }

    function p(e) {
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

    function m(e) {
        var t, n, r, o;
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
                        var t = {};
                        for (var n in e) {
                            var r = parseInt(n);
                            i.QUEST_REWARD_CODE_PLATFORMS_SET.has(r) && (t[r] = e[n])
                        }
                        return t
                    }(n.reward_redemption_instructions_by_platform),
                    gameTitle: n.game_title,
                    gamePublisher: n.game_publisher
                },
                colors: {
                    primary: (r = t.colors).primary,
                    secondary: r.secondary
                },
                rewardCodeExpiresAt: t.reward_code_expires_at,
                rewardCodePlatforms: t.reward_code_platforms.filter(function(e) {
                    return i.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)
                }),
                assets: {
                    rewardTile: (o = t.assets).reward_tile,
                    hero: o.hero,
                    questBarHero: o.quest_bar_hero,
                    gameTile: o.game_tile,
                    logotype: o.logotype
                }
            },
            userStatus: null == e.user_status ? null : p(e.user_status),
            targetedContent: e.targeted_content
        }
    }

    function y(e) {
        return {
            userId: e.user_id,
            questId: e.quest_id,
            code: e.code,
            platform: e.platform,
            claimedAt: e.claimed_at
        }
    }
    var I = function(e) {
            return "".concat(d).concat(e.id, "/").concat(e.config.assets.rewardTile)
        },
        h = function(e) {
            return "".concat(d).concat(e.id, "/").concat(e.config.assets.hero)
        },
        O = function(e) {
            return "".concat(d).concat(e.id, "/").concat(e.config.assets.questBarHero)
        },
        T = function(e) {
            return "".concat(d).concat(e.id, "/").concat(e.config.assets.gameTile)
        },
        S = function(e, t) {
            return "".concat(d).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)
        },
        v = function(e) {
            return "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e)
        };

    function g(e, t) {
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = f(i.value, 2),
                    s = (u[0], u[1]);
                if (s.targetedContent.includes(t)) return s
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return null
    }
    var A = function(e) {
        switch (e) {
            case i.QuestRewardCodePlatforms.XBOX:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
            case i.QuestRewardCodePlatforms.PLAYSTATION:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
            case i.QuestRewardCodePlatforms.SWITCH:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
            case i.QuestRewardCodePlatforms.PC:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
            case i.QuestRewardCodePlatforms.CROSS_PLATFORM:
                return u.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
        }
    };

    function b(e) {
        if (null == e.userStatus) return 0;
        var t = e.userStatus,
            n = t.streamProgressSeconds;
        if (null != t.completedAt) return 1;
        var r = e.config.streamDurationRequirementMinutes;
        return Math.min(n / 60 / r, 1)
    }

    function N(e) {
        var t, n;
        if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return u.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
            var r = b(e);
            return r >= .75 ? u.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : r >= .45 && r <= .55 ? u.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : r > 0 ? u.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : u.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        }
        return u.default.Messages.QUESTS_TITLE.format({
            questName: e.config.messages.questName
        })
    }

    function R(e) {
        return Object.keys(a.DismissibleQuestContentFlags).includes(i.QuestContent[e])
    }

    function C(e, t) {
        if (!R(t)) return !1;
        var n = i.QuestContent[t];
        return (0, r.hasFlag)(e.dismissedQuestContent, a.DismissibleQuestContentFlags[n])
    }

    function P(e, t) {
        return e.targetedContent.includes(t)
    }

    function D(e, t) {
        o.default.captureException(e, c(l({}, t), {
            tags: c(l({}, null == t ? void 0 : t.tags), {
                app_context: "quests"
            })
        }))
    }

    function L(e, t) {
        if (null == t || null == e) return null;
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                if (null != u.application_id) {
                    var s = _(e, u.application_id);
                    if (null != s) return s
                }
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return null
    }

    function M(e) {
        return e.endsWith(".webm") || e.endsWith(".mp4")
    }
    var U = /\.([a-zA-Z]+)$/;

    function w(e) {
        var t, n;
        switch (null === (n = U.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
            case "webm":
                return "video/webm";
            case "mp4":
                return "video/mp4";
            default:
                throw Error("Unexpected file extension: ".concat(e))
        }
    }
}