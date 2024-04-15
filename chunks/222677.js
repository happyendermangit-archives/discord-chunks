function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionLocations: function() {
            return r
        },
        addReaction: function() {
            return O
        },
        getReactors: function() {
            return p
        },
        playBurstReaction: function() {
            return R
        },
        removeAllReactions: function() {
            return C
        },
        removeEmojiReactions: function() {
            return g
        },
        removeReaction: function() {
            return L
        },
        removeReactionWithConfirmation: function() {
            return v
        }
    });
    var i, r, s = n("544891"),
        a = n("780384"),
        o = n("570140"),
        l = n("668781"),
        u = n("566006"),
        d = n("346479"),
        _ = n("314897"),
        c = n("375954"),
        E = n("585483"),
        I = n("70956"),
        T = n("176354"),
        f = n("563114"),
        S = n("981631"),
        h = n("689938");

    function A(e, t, n) {
        let {
            status: i,
            body: r
        } = e;
        if (429 === i) return setTimeout(t, e.body.retry_after * I.default.Millis.SECOND), !1;
        if (403 === i) switch (r && r.code) {
            case S.AbortCodes.TOO_MANY_REACTIONS:
                l.default.show({
                    title: h.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                    body: h.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                    confirmText: h.default.Messages.OKAY
                });
                break;
            case S.AbortCodes.REACTION_BLOCKED:
                E.ComponentDispatch.dispatch(S.ComponentActions.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                })
        } else if (!n.isRetry) return t(), !1;
        return !0
    }

    function m(e, t, n, i, r) {
        var s, a;
        o.default.dispatch({
            type: e,
            channelId: t,
            messageId: n,
            userId: null !== (s = null == r ? void 0 : r.userId) && void 0 !== s ? s : _.default.getId(),
            emoji: i,
            optimistic: !0,
            colors: null !== (a = null == r ? void 0 : r.colors) && void 0 !== a ? a : [],
            reactionType: (null == r ? void 0 : r.burst) ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL
        })
    }

    function N(e) {
        let {
            channelId: t,
            messageId: n,
            emoji: i,
            userId: r,
            useTypeEndpoint: s = !1,
            type: a = u.ReactionTypes.NORMAL
        } = e, o = null != i.id ? "".concat(i.name, ":").concat(i.id) : i.name;
        return null == r ? S.Endpoints.REACTIONS(t, n, o) : s ? S.Endpoints.REACTION_WITH_TYPE(t, n, o, r, a) : S.Endpoints.REACTION(t, n, o, r)
    }(i = r || (r = {})).MESSAGE = "Message", i.FORUM_TOOLBAR = "Forum Toolbar", i.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";
    async function p(e) {
        let {
            channelId: t,
            messageId: n,
            emoji: i,
            limit: r,
            after: a,
            type: l
        } = e, d = l === u.ReactionTypes.VOTE ? function(e, t, n) {
            var i;
            let r = null !== (i = n.id) && void 0 !== i ? i : n.name;
            return S.Endpoints.POLL_ANSWER_VOTERS(e, t, r)
        }(t, n, i) : N({
            channelId: t,
            messageId: n,
            emoji: i
        }), _ = await s.HTTP.get({
            url: d,
            query: {
                limit: r,
                after: a,
                type: l
            },
            oldFormErrors: !0
        }), c = l === u.ReactionTypes.VOTE ? _.body.users : _.body;
        return o.default.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: t,
            messageId: n,
            users: c,
            emoji: i,
            reactionType: l
        }), c
    }
    async function O(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
            r = arguments.length > 4 ? arguments[4] : void 0,
            o = null != r && !!r.burst,
            _ = null != r && !!r.isRetry;
        if (!_ && function(e, t, n, i) {
                let r = c.default.getMessage(e, t);
                return null != r && r.userHasReactedWithEmoji(n, i)
            }(e, t, n, o)) {
            l.default.show({
                title: h.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                body: h.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                confirmText: h.default.Messages.GOT_IT
            });
            return
        }
        let E = await D(n, o);
        return m("MESSAGE_REACTION_ADD", e, t, n, {
            burst: o,
            colors: E
        }), await d.default.unarchiveThreadIfNecessary(e), s.HTTP.put({
            url: N({
                channelId: e,
                messageId: t,
                emoji: n,
                userId: "@me"
            }),
            query: {
                location: i,
                type: o ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL
            },
            oldFormErrors: !0
        }).then(() => {
            o ? (a.AccessibilityAnnouncer.announce(h.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                name: n.name
            })), f.default.triggerFullscreenAnimation({
                channelId: e,
                messageId: t,
                emoji: {
                    ...n,
                    animated: !1
                }
            })) : a.AccessibilityAnnouncer.announce(h.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                name: n.name
            }))
        }).catch(r => {
            A(r, () => O(e, t, n, i, {
                burst: o,
                isRetry: !0
            }), {
                isRetry: _
            }) && (m("MESSAGE_REACTION_REMOVE", e, t, n, {
                burst: o
            }), o ? a.AccessibilityAnnouncer.announce(h.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                name: n.name
            })) : a.AccessibilityAnnouncer.announce(h.default.Messages.REACTION_ADD_ERROR_A11Y.format({
                name: n.name
            })))
        })
    }

    function R(e) {
        let {
            channelId: t,
            messageId: n,
            emoji: i,
            key: r
        } = e;
        o.default.dispatch({
            type: "BURST_REACTION_EFFECT_PLAY",
            channelId: t,
            messageId: n,
            emoji: i,
            key: r
        })
    }
    async function C(e, t, n) {
        let i = null != n && !!n.isRetry;
        await d.default.unarchiveThreadIfNecessary(e), s.HTTP.del({
            url: S.Endpoints.REMOVE_REACTIONS(e, t),
            oldFormErrors: !0
        }).catch(n => {
            A(n, () => C(e, t, {
                isRetry: !0
            }), {
                isRetry: i
            })
        })
    }
    async function g(e, t, n, i) {
        let r = null != i && !!i.isRetry;
        await d.default.unarchiveThreadIfNecessary(e);
        let a = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
        s.HTTP.del({
            url: S.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, a),
            oldFormErrors: !0
        }).catch(i => {
            A(i, () => g(e, t, n, {
                isRetry: !0
            }), {
                isRetry: r
            })
        })
    }
    async function L(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
            o = arguments.length > 5 ? arguments[5] : void 0,
            l = null != o && !!o.burst,
            _ = null != o && !!o.isRetry;
        m("MESSAGE_REACTION_REMOVE", e, t, n, {
            userId: i,
            burst: l
        }), await d.default.unarchiveThreadIfNecessary(e), s.HTTP.del({
            url: N({
                channelId: e,
                messageId: t,
                emoji: n,
                userId: null != i ? i : "@me",
                type: l ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL,
                useTypeEndpoint: !0
            }),
            query: {
                location: r,
                burst: l
            },
            oldFormErrors: !0
        }).then(() => {
            (null == o ? void 0 : o.burst) ? a.AccessibilityAnnouncer.announce(h.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                name: n.name
            })): a.AccessibilityAnnouncer.announce(h.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                name: n.name
            }))
        }).catch(async s => {
            if (A(s, () => L(e, t, n, i, r, {
                    burst: l,
                    isRetry: !0
                }), {
                    isRetry: _
                })) {
                let r = await D(n, l);
                m("MESSAGE_REACTION_ADD", e, t, n, {
                    userId: i,
                    burst: l,
                    colors: r
                }), (null == o ? void 0 : o.burst) ? a.AccessibilityAnnouncer.announce(h.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                    name: n.name
                })) : a.AccessibilityAnnouncer.announce(h.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                    name: n.name
                }))
            }
        })
    }
    async function D(e, t) {
        let n = [];
        if (t) try {
            n = await (0, T.getEmojiColors)(e)
        } catch {}
        return n
    }

    function v(e) {
        let {
            channelId: t,
            messageId: n,
            emoji: i,
            reactionType: r,
            userId: s,
            location: a
        } = e;
        L(t, n, i, s, a, {
            burst: r === u.ReactionTypes.BURST
        })
    }
}