function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = !1,
        d = new Map,
        _ = 0,
        c = new Set,
        E = new Set,
        I = new Set,
        T = new Set,
        f = new Set,
        S = new Map,
        A = new Map,
        h = new Map;

    function m(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                updateProgress: !1
            },
            i = (d = new Map(d)).get(e);
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
            }), d.set(e, a)
        }
    }

    function N(e, t) {
        let n = new Map(S);
        n.set(e, t), S = n;
        let i = d.get(e),
            r = null == i ? void 0 : i.userStatus;
        null != r && null == r.claimedAt && m(e, {
            userStatus: {
                ...r,
                claimedAt: t.claimedAt
            }
        })
    }

    function O(e) {
        null != h.get(e) && (h = new Map(h)).delete(e)
    }

    function p(e) {
        let t = new Set(c);
        t.delete(e), c = t
    }

    function R(e) {
        let t = new Set(f);
        t.delete(e), f = t
    }
    class C extends(i = o.default.Store) {
        get quests() {
            return d
        }
        get isFetchingCurrentQuests() {
            return u
        }
        get lastFetchedCurrentQuests() {
            return _
        }
        isEnrolling(e) {
            return c.has(e)
        }
        isClaimingRewardCode(e) {
            return E.has(e)
        }
        isClaimingReward(e) {
            return I.has(e)
        }
        isFetchingRewardCode(e) {
            return T.has(e)
        }
        isDismissingContent(e) {
            return f.has(e)
        }
        getRewardCode(e) {
            return S.get(e)
        }
        getRewards(e) {
            return A.get(e)
        }
        getStreamHeartbeatFailure(e) {
            return h.get(e)
        }
    }
    a = "QuestsStore", (s = "displayName") in(r = C) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new C(l.default, {
        LOGOUT: function() {
            u = !1, d = new Map, _ = 0, c = new Set, h = new Map
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
            _ = Date.now(), u = !0
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
            let {
                quests: t
            } = e;
            for (let e of (u = !1, d = new Map, t)) d.set(e.id, e)
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
            _ = 0, u = !1
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
            let {
                questId: t,
                streamKey: n,
                userStatus: i
            } = e;
            m(t, {
                userStatus: i
            }, {
                updateProgress: !0
            }), O(n)
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
            let {
                questId: t,
                streamKey: n
            } = e;
            null == h.get(n) && (h = new Map(h)).set(n, {
                questId: t,
                streamKey: n,
                firstFailedAt: Date.now()
            })
        },
        QUESTS_ENROLL_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(c);
            n.add(t), c = n
        },
        QUESTS_ENROLL_SUCCESS: function(e) {
            let {
                enrolledQuestUserStatus: t
            } = e;
            m(t.questId, {
                userStatus: t
            }), p(t.questId)
        },
        QUESTS_ENROLL_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            p(t)
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(T);
            n.add(t), T = n
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(T);
            i.delete(t), T = i, N(t, n)
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(T);
            n.delete(t), T = n
        },
        QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(E);
            n.add(t), E = n
        },
        QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(E);
            i.delete(t), E = i, N(t, n)
        },
        QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(E);
            n.delete(t), E = n
        },
        QUESTS_CLAIM_REWARD_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(I);
            n.add(t), I = n
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function(e) {
            let {
                questId: t,
                entitlements: n
            } = e, i = new Set(I);
            i.delete(t), I = i, ! function(e, t) {
                let n = new Map(A);
                n.set(e, t.items), A = n;
                let i = d.get(e),
                    r = null == i ? void 0 : i.userStatus;
                null != r && null == r.claimedAt && m(e, {
                    userStatus: {
                        ...r,
                        claimedAt: t.claimedAt
                    }
                })
            }(t, n)
        },
        QUESTS_CLAIM_REWARD_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(I);
            n.delete(t), I = n
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(f);
            n.add(t), f = n
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
            let {
                dismissedQuestUserStatus: t
            } = e;
            m(t.questId, {
                userStatus: t
            }), R(t.questId)
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            R(t)
        },
        STREAM_CLOSE: function(e) {
            let {
                streamKey: t
            } = e;
            O(t)
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
            let {
                streamKey: t
            } = e;
            O(t)
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
            let {
                previewQuestUserStatus: t
            } = e;
            m(t.questId, {
                userStatus: t
            }), null == t.claimedAt && (S = new Map(S)).delete(t.questId)
        },
        QUESTS_OPTIMISTIC_PROGRESS_UPDATE: function(e) {
            let {
                userStatus: t
            } = e;
            m(t.questId, {
                userStatus: t
            }, {
                updateProgress: !0
            })
        }
    })
}