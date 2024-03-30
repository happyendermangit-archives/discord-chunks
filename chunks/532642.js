function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        claimQuestRewardCode: function() {
            return h
        },
        completeQuestPreview: function() {
            return b
        },
        dismissProgressTrackingFailureNotice: function() {
            return A
        },
        dismissQuestContent: function() {
            return v
        },
        enrollInQuest: function() {
            return y
        },
        fetchCurrentQuests: function() {
            return _
        },
        fetchQuestRewardCode: function() {
            return T
        },
        optimisticallyUpdateQuestProgress: function() {
            return L
        },
        resetQuestDismissibilityStatus: function() {
            return P
        },
        resetQuestPreviewStatus: function() {
            return R
        },
        sendHeartbeat: function() {
            return p
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("375314"),
        a = n("867339"),
        u = n("995389"),
        s = n("710765"),
        l = n("281767");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function f(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    c(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    c(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function d(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function _() {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = f(function() {
            var e, t;
            return d(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (u.default.isFetchingCurrentQuests) return [2];
                        o.default.dispatch({
                            type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
                        }), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                            url: l.Endpoints.QUESTS_CURRENT_QUESTS
                        })];
                    case 2:
                        return e = n.sent().body.quests.map(function(e) {
                            return (0, s.questWithUserStatusFromServer)(e)
                        }).filter(function(e) {
                            var t;
                            return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || e.config.rewardCodePlatforms.length > 0
                        }), o.default.dispatch({
                            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                            quests: e
                        }), [3, 4];
                    case 3:
                        return t = n.sent(), o.default.dispatch({
                            type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                            error: new i.default(t)
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function p(e) {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = f(function(e) {
            var t, n, a, u, c, f;
            return d(this, function(d) {
                switch (d.label) {
                    case 0:
                        t = e.questId, n = e.streamKey, u = void 0 !== (a = e.terminal) && a, d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]), [4, r.HTTP.post({
                            url: l.Endpoints.QUESTS_HEARTBEAT(t),
                            body: {
                                stream_key: n,
                                terminal: u
                            }
                        })];
                    case 2:
                        return c = d.sent(), o.default.dispatch({
                            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                            userStatus: (0, s.questUserStatusFromServer)(c.body),
                            questId: t,
                            streamKey: n
                        }), [3, 4];
                    case 3:
                        return f = d.sent(), o.default.dispatch({
                            type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                            error: new i.default(f),
                            questId: t,
                            streamKey: n
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function y(e, t) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = f(function(e, t) {
            var n, i;
            return d(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (null != t.questContentCTA && (0, a.trackQuestContentClicked)({
                                questId: e,
                                questContent: t.questContent,
                                questContentCTA: t.questContentCTA
                            }), u.default.isEnrolling(e)) return [2];
                        o.default.dispatch({
                            type: "QUESTS_ENROLL_BEGIN",
                            questId: e
                        }), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, r.HTTP.post({
                            url: l.Endpoints.QUESTS_ENROLL(e),
                            body: {
                                location: t.questContent
                            }
                        })];
                    case 2:
                        return n = i.sent(), o.default.dispatch({
                            type: "QUESTS_ENROLL_SUCCESS",
                            enrolledQuestUserStatus: (0, s.questUserStatusFromServer)(n.body)
                        }), [3, 4];
                    case 3:
                        return i.sent(), o.default.dispatch({
                            type: "QUESTS_ENROLL_FAILURE",
                            questId: e
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function h(e, t, n) {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = f(function(e, t, n) {
            var a, c;
            return d(this, function(f) {
                switch (f.label) {
                    case 0:
                        if (u.default.isClaimingRewardCode(e)) return [2];
                        o.default.dispatch({
                            type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
                            questId: e
                        }), f.label = 1;
                    case 1:
                        return f.trys.push([1, 3, , 4]), [4, r.HTTP.post({
                            url: l.Endpoints.QUESTS_REWARD_CODE(e),
                            body: {
                                platform: t,
                                location: n
                            }
                        })];
                    case 2:
                        return a = f.sent(), o.default.dispatch({
                            type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
                            questId: e,
                            rewardCode: (0, s.questsRewardCodeFromServer)(a.body)
                        }), [3, 4];
                    case 3:
                        throw c = f.sent(), o.default.dispatch({
                            type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
                            error: new i.default(c),
                            questId: e
                        }), c;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function T(e) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = f(function(e) {
            var t, n;
            return d(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (u.default.isFetchingRewardCode(e)) return [2];
                        o.default.dispatch({
                            type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
                            questId: e
                        }), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                            url: l.Endpoints.QUESTS_REWARD_CODE(e)
                        })];
                    case 2:
                        return t = a.sent(), o.default.dispatch({
                            type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                            questId: e,
                            rewardCode: (0, s.questsRewardCodeFromServer)(t.body)
                        }), [3, 4];
                    case 3:
                        throw n = a.sent(), o.default.dispatch({
                            type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                            error: new i.default(n),
                            questId: e
                        }), n;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function v(e, t) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = f(function(e, t) {
            var n, a, c, f;
            return d(this, function(d) {
                switch (d.label) {
                    case 0:
                        if (n = u.default.isDismissingContent(e), a = (0, s.isDismissible)(t), n || !a) return [2];
                        o.default.dispatch({
                            type: "QUESTS_DISMISS_CONTENT_BEGIN",
                            questId: e,
                            content: t
                        }), d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]), [4, r.HTTP.post({
                            url: l.Endpoints.QUESTS_DISMISS_CONTENT(e, t),
                            body: {}
                        })];
                    case 2:
                        return c = d.sent(), o.default.dispatch({
                            type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                            dismissedQuestUserStatus: (0, s.questUserStatusFromServer)(c.body)
                        }), [3, 4];
                    case 3:
                        return f = d.sent(), o.default.dispatch({
                            type: "QUESTS_DISMISS_CONTENT_FAILURE",
                            error: new i.default(f),
                            questId: e
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function A(e) {
        o.default.dispatch({
            type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
            streamKey: e
        })
    }

    function b(e) {
        return N.apply(this, arguments)
    }

    function N() {
        return (N = f(function(e) {
            var t, n;
            return d(this, function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 2, , 3]), [4, r.HTTP.post({
                            url: l.Endpoints.QUESTS_PREVIEW_COMPLETE(e),
                            body: {}
                        })];
                    case 1:
                        return t = a.sent(), o.default.dispatch({
                            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                            previewQuestUserStatus: (0, s.questUserStatusFromServer)(t.body)
                        }), [3, 3];
                    case 2:
                        return n = a.sent(), o.default.dispatch({
                            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                            error: new i.default(n),
                            questId: e
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function R(e) {
        return C.apply(this, arguments)
    }

    function C() {
        return (C = f(function(e) {
            var t, n;
            return d(this, function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 2, , 3]), [4, r.HTTP.del({
                            url: l.Endpoints.QUESTS_PREVIEW_STATUS(e),
                            body: {}
                        })];
                    case 1:
                        return t = a.sent(), o.default.dispatch({
                            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                            previewQuestUserStatus: (0, s.questUserStatusFromServer)(t.body)
                        }), [3, 3];
                    case 2:
                        return n = a.sent(), o.default.dispatch({
                            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                            error: new i.default(n),
                            questId: e
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function P(e) {
        return D.apply(this, arguments)
    }

    function D() {
        return (D = f(function(e) {
            var t, n;
            return d(this, function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 2, , 3]), [4, r.HTTP.del({
                            url: l.Endpoints.QUESTS_PREVIEW_DISMISSIBILITY(e),
                            body: {}
                        })];
                    case 1:
                        return t = a.sent(), o.default.dispatch({
                            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                            previewQuestUserStatus: (0, s.questUserStatusFromServer)(t.body)
                        }), [3, 3];
                    case 2:
                        return n = a.sent(), o.default.dispatch({
                            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                            error: new i.default(n),
                            questId: e
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function L(e) {
        o.default.dispatch({
            type: "QUESTS_OPTIMISTIC_PROGRESS_UPDATE",
            userStatus: e
        })
    }
}