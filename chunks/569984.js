function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("887003"),
        l = n("442837"),
        u = n("570140"),
        d = n("918701");
    let _ = !1,
        c = new Map,
        E = 0,
        I = new Set,
        T = new Set,
        f = new Set,
        S = new Set,
        h = new Set,
        A = new Map,
        m = new Map,
        N = new Map;

    function O(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                updateProgress: !1
            },
            i = (c = new Map(c)).get(e);
        if (null != i) {
            var r;
            let s = null === (r = i.userStatus) || void 0 === r ? void 0 : r.streamProgressSeconds,
                a = {
                    ...i,
                    ...t
                };
            !(n.updateProgress || null == a.userStatus || null == s || null != a.userStatus.completedAt || null == a.userStatus.enrolledAt) && null != a.userStatus && (a.userStatus = {
                ...a.userStatus,
                streamProgressSeconds: s
            }), c.set(e, a)
        }
    }

    function p(e, t) {
        let n = new Map(A);
        n.set(e, t), A = n
    }

    function R(e, t) {
        p(e, t);
        let n = c.get(e),
            i = null == n ? void 0 : n.userStatus;
        null != i && null == i.claimedAt && O(e, {
            userStatus: {
                ...i,
                claimedAt: t.claimedAt
            }
        })
    }

    function C(e) {
        null != N.get(e) && (N = new Map(N)).delete(e)
    }

    function g(e) {
        let t = new Set(I);
        t.delete(e), I = t
    }

    function L(e) {
        let t = new Set(h);
        t.delete(e), h = t
    }
    class D extends(i = l.default.Store) {
        get quests() {
            return c
        }
        get isFetchingCurrentQuests() {
            return _
        }
        get lastFetchedCurrentQuests() {
            return E
        }
        isEnrolling(e) {
            return I.has(e)
        }
        isClaimingRewardCode(e) {
            return T.has(e)
        }
        isClaimingReward(e) {
            return f.has(e)
        }
        isFetchingRewardCode(e) {
            return S.has(e)
        }
        isDismissingContent(e) {
            return h.has(e)
        }
        getRewardCode(e) {
            return A.get(e)
        }
        getRewards(e) {
            return m.get(e)
        }
        getStreamHeartbeatFailure(e) {
            return N.get(e)
        }
        getQuest(e) {
            return c.get(e)
        }
    }
    a = "QuestsStore", (s = "displayName") in(r = D) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new D(u.default, {
        LOGOUT: function() {
            _ = !1, c = new Map, E = 0, I = new Set, N = new Map
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
            E = Date.now(), _ = !0
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
            let {
                quests: t
            } = e;
            for (let e of (_ = !1, c = new Map, t)) c.set(e.id, e)
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
            E = 0, _ = !1
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
            }), C(n)
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
            let {
                questId: t,
                streamKey: n
            } = e;
            null == N.get(n) && (N = new Map(N)).set(n, {
                questId: t,
                streamKey: n,
                firstFailedAt: Date.now()
            })
        },
        QUESTS_ENROLL_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(I);
            n.add(t), I = n
        },
        QUESTS_ENROLL_SUCCESS: function(e) {
            let {
                enrolledQuestUserStatus: t
            } = e;
            O(t.questId, {
                userStatus: t
            }), g(t.questId)
        },
        QUESTS_ENROLL_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            g(t)
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(S);
            n.add(t), S = n
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(S);
            i.delete(t), S = i, R(t, n)
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(S);
            n.delete(t), S = n
        },
        QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(T);
            n.add(t), T = n
        },
        QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(T);
            i.delete(t), T = i, R(t, n)
        },
        QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(T);
            n.delete(t), T = n
        },
        QUESTS_CLAIM_REWARD_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(f);
            n.add(t), f = n
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function(e) {
            let {
                questId: t,
                entitlements: n
            } = e, i = new Set(f);
            i.delete(t), f = i, ! function(e, t) {
                let n = new Map(m);
                n.set(e, t.items), m = n;
                let i = c.get(e),
                    r = null == i ? void 0 : i.userStatus;
                if (null != i && null != r && null == r.claimedAt) {
                    var s;
                    let n = function(e) {
                        var t;
                        let {
                            quest: n,
                            entitlements: i
                        } = e;
                        if (!(0, d.isTieredRewardCodeQuest)({
                                quest: n
                            })) return null;
                        let r = null === (t = i.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
                        return (null == r ? void 0 : r.tag) !== o.QuestRewardTypes.REWARD_CODE ? null : r.rewardCode
                    }({
                        quest: i,
                        entitlements: t
                    });
                    null != n && p(e, n), O(e, {
                        userStatus: {
                            ...r,
                            claimedAt: t.claimedAt,
                            claimedTier: null !== (s = null == n ? void 0 : n.tier) && void 0 !== s ? s : null
                        }
                    })
                }
            }(t, n)
        },
        QUESTS_CLAIM_REWARD_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(f);
            n.delete(t), f = n
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(h);
            n.add(t), h = n
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
            let {
                dismissedQuestUserStatus: t
            } = e;
            O(t.questId, {
                userStatus: t
            }), L(t.questId)
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            L(t)
        },
        STREAM_CLOSE: function(e) {
            let {
                streamKey: t
            } = e;
            C(t)
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
            let {
                streamKey: t
            } = e;
            C(t)
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
            let {
                previewQuestUserStatus: t
            } = e;
            O(t.questId, {
                userStatus: t
            }), null == t.claimedAt && (A = new Map(A)).delete(t.questId)
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