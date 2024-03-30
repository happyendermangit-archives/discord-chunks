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
        f = new Map,
        S = new Map;

    function h(e, t) {
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

    function A(e, t) {
        let n = new Map(f);
        n.set(e, t), f = n;
        let i = d.get(e),
            r = null == i ? void 0 : i.userStatus;
        null != r && null == r.claimedAt && h(e, {
            userStatus: {
                ...r,
                claimedAt: t.claimedAt
            }
        })
    }

    function m(e) {
        null != S.get(e) && (S = new Map(S)).delete(e)
    }

    function N(e) {
        let t = new Set(c);
        t.delete(e), c = t
    }

    function O(e) {
        let t = new Set(T);
        t.delete(e), T = t
    }
    class p extends(i = o.default.Store) {
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
        isFetchingRewardCode(e) {
            return I.has(e)
        }
        isDismissingContent(e) {
            return T.has(e)
        }
        getRewardCode(e) {
            return f.get(e)
        }
        getStreamHeartbeatFailure(e) {
            return S.get(e)
        }
    }
    a = "QuestsStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new p(l.default, {
        LOGOUT: function() {
            u = !1, d = new Map, _ = 0, c = new Set, S = new Map
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
            h(t, {
                userStatus: i
            }, {
                updateProgress: !0
            }), m(n)
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
            let {
                questId: t,
                streamKey: n
            } = e;
            null == S.get(n) && (S = new Map(S)).set(n, {
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
            h(t.questId, {
                userStatus: t
            }), N(t.questId)
        },
        QUESTS_ENROLL_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            N(t)
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(I);
            n.add(t), I = n
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(I);
            i.delete(t), I = i, A(t, n)
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(I);
            n.delete(t), I = n
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
            i.delete(t), E = i, A(t, n)
        },
        QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(E);
            n.delete(t), E = n
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(T);
            n.add(t), T = n
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
            let {
                dismissedQuestUserStatus: t
            } = e;
            h(t.questId, {
                userStatus: t
            }), O(t.questId)
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            O(t)
        },
        STREAM_CLOSE: function(e) {
            let {
                streamKey: t
            } = e;
            m(t)
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
            let {
                streamKey: t
            } = e;
            m(t)
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
            let {
                previewQuestUserStatus: t
            } = e;
            h(t.questId, {
                userStatus: t
            }), null == t.claimedAt && (f = new Map(f)).delete(t.questId)
        },
        QUESTS_OPTIMISTIC_PROGRESS_UPDATE: function(e) {
            let {
                userStatus: t
            } = e;
            h(t.questId, {
                userStatus: t
            }, {
                updateProgress: !0
            })
        }
    })
}