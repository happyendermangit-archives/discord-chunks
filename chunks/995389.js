function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                u(e, t, n[t])
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
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = !1,
        _ = new Map,
        E = 0,
        p = new Set,
        m = new Set,
        y = new Set,
        I = new Set,
        h = new Map,
        O = new Map;

    function T(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                updateProgress: !1
            },
            r = (_ = new Map(_)).get(e);
        if (null != r) {
            var o, i = null === (o = r.userStatus) || void 0 === o ? void 0 : o.streamProgressSeconds,
                a = l({}, r, t);
            !(n.updateProgress || null == a.userStatus || null == i || null != a.userStatus.completedAt || null == a.userStatus.enrolledAt) && null != a.userStatus && (a.userStatus = c(l({}, a.userStatus), {
                streamProgressSeconds: i
            })), _.set(e, a)
        }
    }

    function S(e, t) {
        var n = new Map(h);
        n.set(e, t), h = n;
        var r = _.get(e),
            o = null == r ? void 0 : r.userStatus;
        null != o && null == o.claimedAt && T(e, {
            userStatus: c(l({}, o), {
                claimedAt: t.claimedAt
            })
        })
    }

    function v(e) {
        null != O.get(e) && (O = new Map(O)).delete(e)
    }

    function g(e) {
        var t = new Set(p);
        t.delete(e), p = t
    }

    function A(e) {
        var t = new Set(I);
        t.delete(e), I = t
    }
    var b = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(l, e);
        var t, n, r, o, i, u = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = s(t);
            if (n) {
                var a = s(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), u.apply(this, arguments)
        }
        return r = l, o = [{
            key: "quests",
            get: function() {
                return _
            }
        }, {
            key: "isFetchingCurrentQuests",
            get: function() {
                return d
            }
        }, {
            key: "lastFetchedCurrentQuests",
            get: function() {
                return E
            }
        }, {
            key: "isEnrolling",
            value: function(e) {
                return p.has(e)
            }
        }, {
            key: "isClaimingRewardCode",
            value: function(e) {
                return m.has(e)
            }
        }, {
            key: "isFetchingRewardCode",
            value: function(e) {
                return y.has(e)
            }
        }, {
            key: "isDismissingContent",
            value: function(e) {
                return I.has(e)
            }
        }, {
            key: "getRewardCode",
            value: function(e) {
                return h.get(e)
            }
        }, {
            key: "getStreamHeartbeatFailure",
            value: function(e) {
                return O.get(e)
            }
        }], a(r.prototype, o), i && a(r, i), l
    }(o.default.Store);
    u(b, "displayName", "QuestsStore"), t.default = new b(i.default, {
        LOGOUT: function() {
            d = !1, _ = new Map, E = 0, p = new Set, O = new Map
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
            E = Date.now(), d = !0
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
            var t = e.quests;
            d = !1, _ = new Map;
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    _.set(u.id, u)
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
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
            E = 0, d = !1
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
            var t = e.questId,
                n = e.streamKey;
            T(t, {
                userStatus: e.userStatus
            }, {
                updateProgress: !0
            }), v(n)
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
            var t = e.questId,
                n = e.streamKey;
            null == O.get(n) && (O = new Map(O)).set(n, {
                questId: t,
                streamKey: n,
                firstFailedAt: Date.now()
            })
        },
        QUESTS_ENROLL_BEGIN: function(e) {
            var t = e.questId,
                n = new Set(p);
            n.add(t), p = n
        },
        QUESTS_ENROLL_SUCCESS: function(e) {
            var t = e.enrolledQuestUserStatus;
            T(t.questId, {
                userStatus: t
            }), g(t.questId)
        },
        QUESTS_ENROLL_FAILURE: function(e) {
            g(e.questId)
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
            var t = e.questId,
                n = new Set(y);
            n.add(t), y = n
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
            var t = e.questId,
                n = e.rewardCode,
                r = new Set(y);
            r.delete(t), y = r, S(t, n)
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
            var t = e.questId,
                n = new Set(y);
            n.delete(t), y = n
        },
        QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
            var t = e.questId,
                n = new Set(m);
            n.add(t), m = n
        },
        QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
            var t = e.questId,
                n = e.rewardCode,
                r = new Set(m);
            r.delete(t), m = r, S(t, n)
        },
        QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
            var t = e.questId,
                n = new Set(m);
            n.delete(t), m = n
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
            var t = e.questId,
                n = new Set(I);
            n.add(t), I = n
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
            var t = e.dismissedQuestUserStatus;
            T(t.questId, {
                userStatus: t
            }), A(t.questId)
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
            A(e.questId)
        },
        STREAM_CLOSE: function(e) {
            v(e.streamKey)
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
            v(e.streamKey)
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
            var t = e.previewQuestUserStatus;
            T(t.questId, {
                userStatus: t
            }), null == t.claimedAt && (h = new Map(h)).delete(t.questId)
        },
        QUESTS_OPTIMISTIC_PROGRESS_UPDATE: function(e) {
            var t = e.userStatus;
            T(t.questId, {
                userStatus: t
            }, {
                updateProgress: !0
            })
        }
    })
}