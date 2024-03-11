function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144");
    let r = !1,
        a = new Map,
        o = 0,
        l = new Set,
        u = new Set,
        d = new Set,
        c = new Set,
        f = new Map,
        _ = new Map;

    function h(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            updateProgress: !1
        };
        a = new Map(a);
        let i = a.get(e);
        if (null != i) {
            var s;
            let r = null === (s = i.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds,
                o = {
                    ...i,
                    ...t
                },
                l = n.updateProgress || null == o.userStatus || null == r || null != o.userStatus.completedAt || null == o.userStatus.enrolledAt;
            !l && null != o.userStatus && (o.userStatus = {
                ...o.userStatus,
                streamProgressSeconds: r
            }), a.set(e, o)
        }
    }

    function E(e, t) {
        let n = new Map(f);
        n.set(e, t), f = n;
        let i = a.get(e),
            s = null == i ? void 0 : i.userStatus;
        if (null != s && null == s.claimedAt) {
            let n = {
                userStatus: {
                    ...s,
                    claimedAt: t.claimedAt
                }
            };
            h(e, n)
        }
    }

    function g(e) {
        null != _.get(e) && (_ = new Map(_)).delete(e)
    }

    function m(e) {
        let t = new Set(l);
        t.delete(e), l = t
    }

    function p(e) {
        let t = new Set(c);
        t.delete(e), c = t
    }
    class S extends i.default.Store {
        get quests() {
            return a
        }
        get isFetchingCurrentQuests() {
            return r
        }
        get lastFetchedCurrentQuests() {
            return o
        }
        isEnrolling(e) {
            return l.has(e)
        }
        isClaimingRewardCode(e) {
            return u.has(e)
        }
        isFetchingRewardCode(e) {
            return d.has(e)
        }
        isDismissingContent(e) {
            return c.has(e)
        }
        getRewardCode(e) {
            return f.get(e)
        }
        getStreamHeartbeatFailure(e) {
            return _.get(e)
        }
    }
    S.displayName = "QuestsStore";
    var v = new S(s.default, {
        LOGOUT: function() {
            r = !1, a = new Map, o = 0, l = new Set, _ = new Map
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
            o = Date.now(), r = !0
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
            let {
                quests: t
            } = e;
            for (let e of (r = !1, a = new Map, t)) a.set(e.id, e)
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
            o = 0, r = !1
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
            }), g(n)
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
            let {
                questId: t,
                streamKey: n
            } = e, i = _.get(n);
            null == i && (_ = new Map(_)).set(n, {
                questId: t,
                streamKey: n,
                firstFailedAt: Date.now()
            })
        },
        QUESTS_ENROLL_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(l);
            n.add(t), l = n
        },
        QUESTS_ENROLL_SUCCESS: function(e) {
            let {
                enrolledQuestUserStatus: t
            } = e;
            h(t.questId, {
                userStatus: t
            }), m(t.questId)
        },
        QUESTS_ENROLL_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            m(t)
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(d);
            n.add(t), d = n
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(d);
            i.delete(t), d = i, E(t, n)
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(d);
            n.delete(t), d = n
        },
        QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(u);
            n.add(t), u = n
        },
        QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, i = new Set(u);
            i.delete(t), u = i, E(t, n)
        },
        QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(u);
            n.delete(t), u = n
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(c);
            n.add(t), c = n
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
            let {
                dismissedQuestUserStatus: t
            } = e;
            h(t.questId, {
                userStatus: t
            }), p(t.questId)
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            p(t)
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