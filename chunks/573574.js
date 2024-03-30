function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionLocations: function() {
            return o
        },
        addReaction: function() {
            return N
        },
        getReactors: function() {
            return A
        },
        playBurstReaction: function() {
            return C
        },
        removeAllReactions: function() {
            return P
        },
        removeEmojiReactions: function() {
            return L
        },
        removeReaction: function() {
            return U
        },
        removeReactionWithConfirmation: function() {
            return B
        }
    });
    var r, o, i = n("967888"),
        a = n("751848"),
        u = n("629815"),
        s = n("483587"),
        l = n("796205"),
        c = n("741471"),
        f = n("217014"),
        d = n("204394"),
        _ = n("120447"),
        E = n("388990"),
        p = n("739226"),
        m = n("278778"),
        y = n("281767"),
        I = n("941504");

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function O(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    h(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    h(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function T(e, t) {
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

    function S(e, t, n) {
        var r = e.status,
            o = e.body;
        if (429 === r) return setTimeout(t, e.body.retry_after * E.default.Millis.SECOND), !1;
        if (403 === r) switch (o && o.code) {
            case y.AbortCodes.TOO_MANY_REACTIONS:
                s.default.show({
                    title: I.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                    body: I.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                    confirmText: I.default.Messages.OKAY
                });
                break;
            case y.AbortCodes.REACTION_BLOCKED:
                _.ComponentDispatch.dispatch(y.ComponentActions.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                })
        } else if (!n.isRetry) return t(), !1;
        return !0
    }

    function v(e, t, n, r, o) {
        var i, a;
        u.default.dispatch({
            type: e,
            channelId: t,
            messageId: n,
            userId: null !== (i = null == o ? void 0 : o.userId) && void 0 !== i ? i : f.default.getId(),
            emoji: r,
            optimistic: !0,
            colors: null !== (a = null == o ? void 0 : o.colors) && void 0 !== a ? a : [],
            reactionType: (null == o ? void 0 : o.burst) ? l.ReactionTypes.BURST : l.ReactionTypes.NORMAL
        })
    }

    function g(e) {
        var t = e.channelId,
            n = e.messageId,
            r = e.emoji,
            o = e.userId,
            i = e.useTypeEndpoint,
            a = e.type,
            u = void 0 === a ? l.ReactionTypes.NORMAL : a,
            s = null != r.id ? "".concat(r.name, ":").concat(r.id) : r.name;
        return null == o ? y.Endpoints.REACTIONS(t, n, s) : void 0 !== i && i ? y.Endpoints.REACTION_WITH_TYPE(t, n, s, o, u) : y.Endpoints.REACTION(t, n, s, o)
    }(r = o || (o = {})).MESSAGE = "Message", r.FORUM_TOOLBAR = "Forum Toolbar", r.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";

    function A(e) {
        return b.apply(this, arguments)
    }

    function b() {
        return (b = O(function(e) {
            var t, n, r, o, a, s, c, f, d;
            return T(this, function(_) {
                switch (_.label) {
                    case 0:
                        var E, p, m, I, h;
                        return t = e.channelId, n = e.messageId, r = e.emoji, o = e.limit, a = e.after, c = (s = e.type) === l.ReactionTypes.VOTE ? (E = t, p = n, h = null !== (I = (m = r).id) && void 0 !== I ? I : m.name, y.Endpoints.POLL_ANSWER_VOTERS(E, p, h)) : g({
                            channelId: t,
                            messageId: n,
                            emoji: r
                        }), [4, i.HTTP.get({
                            url: c,
                            query: {
                                limit: o,
                                after: a,
                                type: s
                            },
                            oldFormErrors: !0
                        })];
                    case 1:
                        return f = _.sent(), d = s === l.ReactionTypes.VOTE ? f.body.users : f.body, u.default.dispatch({
                            type: "MESSAGE_REACTION_ADD_USERS",
                            channelId: t,
                            messageId: n,
                            users: d,
                            emoji: r,
                            reactionType: s
                        }), [2, d]
                }
            })
        })).apply(this, arguments)
    }

    function N(e, t, n) {
        return R.apply(this, arguments)
    }

    function R() {
        return (R = O(function(e, t, n) {
            var r, o, u, f, _, E = arguments;
            return T(this, function(p) {
                switch (p.label) {
                    case 0:
                        if (r = E.length > 3 && void 0 !== E[3] ? E[3] : "Message", u = null != (o = E.length > 4 ? E[4] : void 0) && !!o.burst, !(f = null != o && !!o.isRetry) && function(e, t, n, r) {
                                var o = d.default.getMessage(e, t);
                                return null != o && o.userHasReactedWithEmoji(n, r)
                            }(e, t, n, u)) return s.default.show({
                            title: I.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                            body: I.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                            confirmText: I.default.Messages.GOT_IT
                        }), [2];
                        return [4, k(n, u)];
                    case 1:
                        return _ = p.sent(), v("MESSAGE_REACTION_ADD", e, t, n, {
                            burst: u,
                            colors: _
                        }), [4, c.default.unarchiveThreadIfNecessary(e)];
                    case 2:
                        return p.sent(), [2, i.HTTP.put({
                            url: g({
                                channelId: e,
                                messageId: t,
                                emoji: n,
                                userId: "@me"
                            }),
                            query: {
                                location: r,
                                type: u ? l.ReactionTypes.BURST : l.ReactionTypes.NORMAL
                            },
                            oldFormErrors: !0
                        }).then(function() {
                            if (u) {
                                var r, o;
                                a.AccessibilityAnnouncer.announce(I.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                                    name: n.name
                                })), m.default.triggerFullscreenAnimation({
                                    channelId: e,
                                    messageId: t,
                                    emoji: (r = function(e) {
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
                                    }({}, n), o = (o = {
                                        animated: !1
                                    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    })(Object(o)).forEach(function(e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                                    }), r)
                                })
                            } else a.AccessibilityAnnouncer.announce(I.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                                name: n.name
                            }))
                        }).catch(function(o) {
                            S(o, function() {
                                return N(e, t, n, r, {
                                    burst: u,
                                    isRetry: !0
                                })
                            }, {
                                isRetry: f
                            }) && (v("MESSAGE_REACTION_REMOVE", e, t, n, {
                                burst: u
                            }), u ? a.AccessibilityAnnouncer.announce(I.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                                name: n.name
                            })) : a.AccessibilityAnnouncer.announce(I.default.Messages.REACTION_ADD_ERROR_A11Y.format({
                                name: n.name
                            })))
                        })]
                }
            })
        })).apply(this, arguments)
    }

    function C(e) {
        var t = e.channelId,
            n = e.messageId,
            r = e.emoji,
            o = e.key;
        u.default.dispatch({
            type: "BURST_REACTION_EFFECT_PLAY",
            channelId: t,
            messageId: n,
            emoji: r,
            key: o
        })
    }

    function P(e, t, n) {
        return D.apply(this, arguments)
    }

    function D() {
        return (D = O(function(e, t, n) {
            var r;
            return T(this, function(o) {
                switch (o.label) {
                    case 0:
                        return r = null != n && !!n.isRetry, [4, c.default.unarchiveThreadIfNecessary(e)];
                    case 1:
                        return o.sent(), i.HTTP.del({
                            url: y.Endpoints.REMOVE_REACTIONS(e, t),
                            oldFormErrors: !0
                        }).catch(function(n) {
                            S(n, function() {
                                return P(e, t, {
                                    isRetry: !0
                                })
                            }, {
                                isRetry: r
                            })
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function L(e, t, n, r) {
        return M.apply(this, arguments)
    }

    function M() {
        return (M = O(function(e, t, n, r) {
            var o, a;
            return T(this, function(u) {
                switch (u.label) {
                    case 0:
                        return o = null != r && !!r.isRetry, [4, c.default.unarchiveThreadIfNecessary(e)];
                    case 1:
                        return u.sent(), a = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id), i.HTTP.del({
                            url: y.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, a),
                            oldFormErrors: !0
                        }).catch(function(r) {
                            S(r, function() {
                                return L(e, t, n, {
                                    isRetry: !0
                                })
                            }, {
                                isRetry: o
                            })
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function U(e, t, n, r) {
        return w.apply(this, arguments)
    }

    function w() {
        return (w = O(function(e, t, n, r) {
            var o, u, s, f, d = arguments;
            return T(this, function(_) {
                switch (_.label) {
                    case 0:
                        return o = d.length > 4 && void 0 !== d[4] ? d[4] : "Message", s = null != (u = d.length > 5 ? d[5] : void 0) && !!u.burst, f = null != u && !!u.isRetry, v("MESSAGE_REACTION_REMOVE", e, t, n, {
                            userId: r,
                            burst: s
                        }), [4, c.default.unarchiveThreadIfNecessary(e)];
                    case 1:
                        var E;
                        return _.sent(), i.HTTP.del({
                            url: g({
                                channelId: e,
                                messageId: t,
                                emoji: n,
                                userId: null != r ? r : "@me",
                                type: s ? l.ReactionTypes.BURST : l.ReactionTypes.NORMAL,
                                useTypeEndpoint: !0
                            }),
                            query: {
                                location: o,
                                burst: s
                            },
                            oldFormErrors: !0
                        }).then(function() {
                            (null == u ? void 0 : u.burst) ? a.AccessibilityAnnouncer.announce(I.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                                name: n.name
                            })): a.AccessibilityAnnouncer.announce(I.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                                name: n.name
                            }))
                        }).catch((E = O(function(i) {
                            var l;
                            return T(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!S(i, function() {
                                                return U(e, t, n, r, o, {
                                                    burst: s,
                                                    isRetry: !0
                                                })
                                            }, {
                                                isRetry: f
                                            })) return [3, 2];
                                        return [4, k(n, s)];
                                    case 1:
                                        l = c.sent(), v("MESSAGE_REACTION_ADD", e, t, n, {
                                            userId: r,
                                            burst: s,
                                            colors: l
                                        }), (null == u ? void 0 : u.burst) ? a.AccessibilityAnnouncer.announce(I.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                                            name: n.name
                                        })) : a.AccessibilityAnnouncer.announce(I.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                                            name: n.name
                                        })), c.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        }), function(e) {
                            return E.apply(this, arguments)
                        })), [2]
                }
            })
        })).apply(this, arguments)
    }

    function k(e, t) {
        return G.apply(this, arguments)
    }

    function G() {
        return (G = O(function(e, t) {
            var n, r;
            return T(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (n = [], !t) return [3, 4];
                        r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, (0, p.getEmojiColors)(e)];
                    case 2:
                        return n = r.sent(), [3, 4];
                    case 3:
                        return r.sent(), [3, 4];
                    case 4:
                        return [2, n]
                }
            })
        })).apply(this, arguments)
    }

    function B(e) {
        var t = e.channelId,
            n = e.messageId,
            r = e.emoji,
            o = e.reactionType;
        U(t, n, r, e.userId, e.location, {
            burst: o === l.ReactionTypes.BURST
        })
    }
}