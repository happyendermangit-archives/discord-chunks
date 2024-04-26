function(e, t, n) {
    "use strict";
    let i, r, s, a, o, l, u, d, _, c, E;
    n.r(t), n("47120");
    var I, T, f, S, h = n("887003"),
        A = n("442837"),
        m = n("570140"),
        N = n("918701");

    function p() {
        i = !1, r = new Map, s = 0, a = new Set, o = new Set, l = new Set, u = new Set, d = new Set, _ = new Map, c = new Map, E = new Map
    }

    function O(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                updateProgress: !1
            },
            i = (r = new Map(r)).get(e);
        if (null != i) {
            var s;
            let a = null === (s = i.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds,
                o = {
                    ...i,
                    ...t
                };
            !(n.updateProgress || null == o.userStatus || null == a || null != o.userStatus.completedAt || null == o.userStatus.enrolledAt) && null != o.userStatus && (o.userStatus = {
                ...o.userStatus,
                streamProgressSeconds: a
            }), r.set(e, o)
        }
    }

    function R(e, t) {
        let n = new Map(_);
        n.set(e, t), _ = n
    }

    function C(e, t) {
        R(e, t);
        let n = r.get(e),
            i = null == n ? void 0 : n.userStatus;
        null != i && null == i.claimedAt && O(e, {
            userStatus: {
                ...i,
                claimedAt: t.claimedAt
            }
        })
    }
    p();

    function g(e) {
        null != E.get(e) && (E = new Map(E)).delete(e)
    }

    function L(e) {
        let t = new Set(a);
        t.delete(e), a = t
    }

    function D(e) {
        let t = new Set(d);
        t.delete(e), d = t
    }
    class v extends(I = A.default.Store) {
        get quests() {
            return r
        }
        get isFetchingCurrentQuests() {
            return i
        }
        get lastFetchedCurrentQuests() {
            return s
        }
        isEnrolling(e) {
            return a.has(e)
        }
        isClaimingRewardCode(e) {
            return o.has(e)
        }
        isClaimingReward(e) {
            return l.has(e)
        }
        isFetchingRewardCode(e) {
            return u.has(e)
        }
        isDismissingContent(e) {
            return d.has(e)
        }
        getRewardCode(e) {
            return _.get(e)
        }
        getRewards(e) {
            return c.get(e)
        }
        getStreamHeartbeatFailure(e) {
            return E.get(e)
        }
        getQuest(e) {
            return r.get(e)
        }
    }
    S = "QuestsStore", (f = "displayName") in(T = v) ? Object.defineProperty(T, f, {
        value: S,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : T[f] = S, t.default = new v(m.default, {
        LOGOUT: function() {
            p()
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
            s = Date.now(), i = !0
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
            let {
                quests: t
            } = e;
            for (let e of (i = !1, r = new Map, t)) r.set(e.id, e)
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
            s = 0, i = !1
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
            let {
                questId: t,
                streamKey: n,
                userStatus: i
            } = e;
            O(t, {
                userStatus: i
            }, {
                updateProgress: !0
            }), g(n)
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
            let {
                questId: t,
                streamKey: n
            } = e;
            null == E.get(n) && (E = new Map(E)).set(n, {
                questId: t,
                streamKey: n,
                firstFailedAt: Date.now()
            })
        },
        QUESTS_ENROLL_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(a);
            n.add(t), a = n
        },
        QUESTS_ENROLL_SUCCESS: function(e) {
            let {
                enrolledQuestUserStatus: t
            } = e;
            O(t.questId, {
                userStatus: t
            }), L(t.questId)
        },
        QUESTS_ENROLL_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            L(t)
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(u);
            n.add(t), u = n
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(u);
            i.delete(t), u = i, C(t, n)
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(u);
            n.delete(t), u = n
        },
        QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(o);
            n.add(t), o = n
        },
        QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(o);
            i.delete(t), o = i, C(t, n)
        },
        QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(o);
            n.delete(t), o = n
        },
        QUESTS_CLAIM_REWARD_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(l);
            n.add(t), l = n
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function(e) {
            let {
                questId: t,
                entitlements: n
            } = e, i = new Set(l);
            i.delete(t), l = i, ! function(e, t) {
                let n = new Map(c);
                n.set(e, t.items), c = n;
                let i = r.get(e),
                    s = null == i ? void 0 : i.userStatus;
                if (null != i && null != s && null == s.claimedAt) {
                    var a;
                    let n = function(e) {
                        var t;
                        let {
                            quest: n,
                            entitlements: i
                        } = e;
                        if (!(0, N.isTieredRewardCodeQuest)({
                                quest: n
                            })) return null;
                        let r = null === (t = i.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
                        return (null == r ? void 0 : r.tag) !== h.QuestRewardTypes.REWARD_CODE ? null : r.rewardCode
                    }({
                        quest: i,
                        entitlements: t
                    });
                    null != n && R(e, n), O(e, {
                        userStatus: {
                            ...s,
                            claimedAt: t.claimedAt,
                            claimedTier: null !== (a = null == n ? void 0 : n.tier) && void 0 !== a ? a : null
                        }
                    })
                }
            }(t, n)
        },
        QUESTS_CLAIM_REWARD_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(l);
            n.delete(t), l = n
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(d);
            n.add(t), d = n
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
            let {
                dismissedQuestUserStatus: t
            } = e;
            O(t.questId, {
                userStatus: t
            }), D(t.questId)
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            D(t)
        },
        STREAM_CLOSE: function(e) {
            let {
                streamKey: t
            } = e;
            g(t)
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
            let {
                streamKey: t
            } = e;
            g(t)
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
            let {
                previewQuestUserStatus: t
            } = e;
            O(t.questId, {
                userStatus: t
            }), null == t.claimedAt && (_ = new Map(_)).delete(t.questId)
        },
        QUESTS_OPTIMISTIC_PROGRESS_UPDATE: function(e) {
            let {
                userStatus: t
            } = e;
            O(t.questId, {
                userStatus: t
            }, {
                updateProgress: !0
            })
        }
    })
}