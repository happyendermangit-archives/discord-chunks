function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionLocations: function() {
            return s
        },
        getReactors: function() {
            return I
        },
        addReaction: function() {
            return A
        },
        playBurstReaction: function() {
            return C
        },
        removeAllReactions: function() {
            return y
        },
        removeEmojiReactions: function() {
            return N
        },
        removeReaction: function() {
            return R
        },
        removeReactionWithConfirmation: function() {
            return D
        }
    });
    var i, s, r = n("872717"),
        a = n("819855"),
        o = n("913144"),
        l = n("404118"),
        u = n("875978"),
        d = n("263024"),
        c = n("271938"),
        _ = n("377253"),
        f = n("659500"),
        E = n("718517"),
        h = n("402671"),
        g = n("61069"),
        m = n("49111"),
        p = n("782340");

    function S(e, t, n) {
        let {
            status: i,
            body: s
        } = e;
        if (429 === i) return setTimeout(t, e.body.retry_after * E.default.Millis.SECOND), !1;
        if (403 === i) switch (s && s.code) {
            case m.AbortCodes.TOO_MANY_REACTIONS:
                l.default.show({
                    title: p.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                    body: p.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                    confirmText: p.default.Messages.OKAY
                });
                break;
            case m.AbortCodes.REACTION_BLOCKED:
                f.ComponentDispatch.dispatch(m.ComponentActions.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                })
        } else if (!n.isRetry) return t(), !1;
        return !0
    }

    function v(e, t, n, i, s) {
        var r, a;
        o.default.dispatch({
            type: e,
            channelId: t,
            messageId: n,
            userId: null !== (r = null == s ? void 0 : s.userId) && void 0 !== r ? r : c.default.getId(),
            emoji: i,
            optimistic: !0,
            colors: null !== (a = null == s ? void 0 : s.colors) && void 0 !== a ? a : [],
            reactionType: (null == s ? void 0 : s.burst) ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL
        })
    }

    function T(e) {
        let {
            channelId: t,
            messageId: n,
            emoji: i,
            userId: s,
            useTypeEndpoint: r = !1,
            type: a = u.ReactionTypes.NORMAL
        } = e, o = null != i.id ? "".concat(i.name, ":").concat(i.id) : i.name;
        return null == s ? m.Endpoints.REACTIONS(t, n, o) : r ? m.Endpoints.REACTION_WITH_TYPE(t, n, o, s, a) : m.Endpoints.REACTION(t, n, o, s)
    }(i = s || (s = {})).MESSAGE = "Message", i.FORUM_TOOLBAR = "Forum Toolbar", i.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";
    async function I(e) {
        let {
            channelId: t,
            messageId: n,
            emoji: i,
            limit: s,
            after: a,
            type: l
        } = e, d = l === u.ReactionTypes.VOTE ? function(e, t, n) {
            var i;
            let s = null !== (i = n.id) && void 0 !== i ? i : n.name;
            return m.Endpoints.POLL_ANSWER_VOTERS(e, t, s)
        }(t, n, i) : T({
            channelId: t,
            messageId: n,
            emoji: i
        }), c = await r.default.get({
            url: d,
            query: {
                limit: s,
                after: a,
                type: l
            },
            oldFormErrors: !0
        }), _ = l === u.ReactionTypes.VOTE ? c.body.users : c.body;
        return o.default.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: t,
            messageId: n,
            users: _,
            emoji: i,
            reactionType: l
        }), _
    }
    async function A(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
            s = arguments.length > 4 ? arguments[4] : void 0,
            o = null != s && !!s.burst,
            c = null != s && !!s.isRetry;
        if (!c && function(e, t, n, i) {
                let s = _.default.getMessage(e, t);
                return null != s && s.userHasReactedWithEmoji(n, i)
            }(e, t, n, o)) {
            l.default.show({
                title: p.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                body: p.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                confirmText: p.default.Messages.GOT_IT
            });
            return
        }
        let f = await O(n, o);
        return v("MESSAGE_REACTION_ADD", e, t, n, {
            burst: o,
            colors: f
        }), await d.default.unarchiveThreadIfNecessary(e), r.default.put({
            url: T({
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
            o ? (a.AccessibilityAnnouncer.announce(p.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                name: n.name
            })), g.default.triggerFullscreenAnimation({
                channelId: e,
                messageId: t,
                emoji: {
                    ...n,
                    animated: !1
                }
            })) : a.AccessibilityAnnouncer.announce(p.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                name: n.name
            }))
        }).catch(s => {
            S(s, () => A(e, t, n, i, {
                burst: o,
                isRetry: !0
            }), {
                isRetry: c
            }) && (v("MESSAGE_REACTION_REMOVE", e, t, n, {
                burst: o
            }), o ? a.AccessibilityAnnouncer.announce(p.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                name: n.name
            })) : a.AccessibilityAnnouncer.announce(p.default.Messages.REACTION_ADD_ERROR_A11Y.format({
                name: n.name
            })))
        })
    }

    function C(e) {
        let {
            channelId: t,
            messageId: n,
            emoji: i,
            key: s
        } = e;
        o.default.dispatch({
            type: "BURST_REACTION_EFFECT_PLAY",
            channelId: t,
            messageId: n,
            emoji: i,
            key: s
        })
    }
    async function y(e, t, n) {
        let i = null != n && !!n.isRetry;
        await d.default.unarchiveThreadIfNecessary(e), r.default.delete({
            url: m.Endpoints.REMOVE_REACTIONS(e, t),
            oldFormErrors: !0
        }).catch(n => {
            S(n, () => y(e, t, {
                isRetry: !0
            }), {
                isRetry: i
            })
        })
    }
    async function N(e, t, n, i) {
        let s = null != i && !!i.isRetry;
        await d.default.unarchiveThreadIfNecessary(e);
        let a = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
        r.default.delete({
            url: m.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, a),
            oldFormErrors: !0
        }).catch(i => {
            S(i, () => N(e, t, n, {
                isRetry: !0
            }), {
                isRetry: s
            })
        })
    }
    async function R(e, t, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
            o = arguments.length > 5 ? arguments[5] : void 0,
            l = null != o && !!o.burst,
            c = null != o && !!o.isRetry;
        v("MESSAGE_REACTION_REMOVE", e, t, n, {
            userId: i,
            burst: l
        }), await d.default.unarchiveThreadIfNecessary(e), r.default.delete({
            url: T({
                channelId: e,
                messageId: t,
                emoji: n,
                userId: null != i ? i : "@me",
                type: l ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL,
                useTypeEndpoint: !0
            }),
            query: {
                location: s,
                burst: l
            },
            oldFormErrors: !0
        }).then(() => {
            (null == o ? void 0 : o.burst) ? a.AccessibilityAnnouncer.announce(p.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                name: n.name
            })): a.AccessibilityAnnouncer.announce(p.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                name: n.name
            }))
        }).catch(async r => {
            if (S(r, () => R(e, t, n, i, s, {
                    burst: l,
                    isRetry: !0
                }), {
                    isRetry: c
                })) {
                let s = await O(n, l);
                v("MESSAGE_REACTION_ADD", e, t, n, {
                    userId: i,
                    burst: l,
                    colors: s
                }), (null == o ? void 0 : o.burst) ? a.AccessibilityAnnouncer.announce(p.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                    name: n.name
                })) : a.AccessibilityAnnouncer.announce(p.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                    name: n.name
                }))
            }
        })
    }
    async function O(e, t) {
        let n = [];
        if (t) try {
            n = await (0, h.getEmojiColors)(e)
        } catch {}
        return n
    }

    function D(e) {
        let {
            channelId: t,
            messageId: n,
            emoji: i,
            reactionType: s,
            userId: r,
            location: a
        } = e, o = s === u.ReactionTypes.BURST;
        R(t, n, i, r, a, {
            burst: o
        })
    }
}