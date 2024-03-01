function(i, x, t) {
    "use strict";
    t.r(x), t.d(x, {
        ReactionLocations: function() {
            return a
        },
        getReactors: function() {
            return w
        },
        addReaction: function() {
            return E
        },
        playBurstReaction: function() {
            return g
        },
        removeAllReactions: function() {
            return A
        },
        removeEmojiReactions: function() {
            return R
        },
        removeReaction: function() {
            return O
        },
        removeReactionWithConfirmation: function() {
            return T
        }
    });
    var s, a, o = t("872717"),
        y = t("819855"),
        d = t("913144"),
        k = t("404118"),
        r = t("875978"),
        e = t("263024"),
        p = t("271938"),
        n = t("377253"),
        m = t("659500"),
        c = t("718517"),
        l = t("402671"),
        f = t("61069"),
        _ = t("49111"),
        u = t("782340");

    function h(i, x, t) {
        let {
            status: s,
            body: a
        } = i;
        if (429 === s) return setTimeout(x, i.body.retry_after * c.default.Millis.SECOND), !1;
        if (403 === s) switch (a && a.code) {
            case _.AbortCodes.TOO_MANY_REACTIONS:
                k.default.show({
                    title: u.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                    body: u.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                    confirmText: u.default.Messages.OKAY
                });
                break;
            case _.AbortCodes.REACTION_BLOCKED:
                m.ComponentDispatch.dispatch(_.ComponentActions.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                })
        } else if (!t.isRetry) return x(), !1;
        return !0
    }

    function I(i, x, t, s, a) {
        var o, y;
        d.default.dispatch({
            type: i,
            channelId: x,
            messageId: t,
            userId: null !== (o = null == a ? void 0 : a.userId) && void 0 !== o ? o : p.default.getId(),
            emoji: s,
            optimistic: !0,
            colors: null !== (y = null == a ? void 0 : a.colors) && void 0 !== y ? y : [],
            reactionType: (null == a ? void 0 : a.burst) ? r.ReactionTypes.BURST : r.ReactionTypes.NORMAL
        })
    }

    function b(i) {
        let {
            channelId: x,
            messageId: t,
            emoji: s,
            userId: a,
            useTypeEndpoint: o = !1,
            type: y = r.ReactionTypes.NORMAL
        } = i, d = null != s.id ? "".concat(s.name, ":").concat(s.id) : s.name;
        return null == a ? _.Endpoints.REACTIONS(x, t, d) : o ? _.Endpoints.REACTION_WITH_TYPE(x, t, d, a, y) : _.Endpoints.REACTION(x, t, d, a)
    }(s = a || (a = {})).MESSAGE = "Message", s.FORUM_TOOLBAR = "Forum Toolbar", s.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";
    async function w(i) {
        let {
            channelId: x,
            messageId: t,
            emoji: s,
            limit: a,
            after: y,
            type: k
        } = i, e = k === r.ReactionTypes.VOTE ? function(i, x, t) {
            var s;
            let a = null !== (s = t.id) && void 0 !== s ? s : t.name;
            return _.Endpoints.POLL_ANSWER_VOTERS(i, x, a)
        }(x, t, s) : b({
            channelId: x,
            messageId: t,
            emoji: s
        }), p = await o.default.get({
            url: e,
            query: {
                limit: a,
                after: y,
                type: k
            },
            oldFormErrors: !0
        }), n = k === r.ReactionTypes.VOTE ? p.body.users : p.body;
        return d.default.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: x,
            messageId: t,
            users: n,
            emoji: s,
            reactionType: k
        }), n
    }
    async function E(i, x, t) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
            a = arguments.length > 4 ? arguments[4] : void 0,
            d = null != a && !!a.burst,
            p = null != a && !!a.isRetry;
        if (!p && function(i, x, t, s) {
                let a = n.default.getMessage(i, x);
                return null != a && a.userHasReactedWithEmoji(t, s)
            }(i, x, t, d)) {
            k.default.show({
                title: u.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                body: u.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                confirmText: u.default.Messages.GOT_IT
            });
            return
        }
        let m = await v(t, d);
        I("MESSAGE_REACTION_ADD", i, x, t, {
            burst: d,
            colors: m
        }), await e.default.unarchiveThreadIfNecessary(i), o.default.put({
            url: b({
                channelId: i,
                messageId: x,
                emoji: t,
                userId: "@me"
            }),
            query: {
                location: s,
                type: d ? r.ReactionTypes.BURST : r.ReactionTypes.NORMAL
            },
            oldFormErrors: !0
        }).then(() => {
            d ? (y.AccessibilityAnnouncer.announce(u.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                name: t.name
            })), f.default.triggerFullscreenAnimation({
                channelId: i,
                messageId: x,
                emoji: {
                    ...t,
                    animated: !1
                }
            })) : y.AccessibilityAnnouncer.announce(u.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                name: t.name
            }))
        }).catch(a => {
            h(a, () => E(i, x, t, s, {
                burst: d,
                isRetry: !0
            }), {
                isRetry: p
            }) && (I("MESSAGE_REACTION_REMOVE", i, x, t, {
                burst: d
            }), d ? y.AccessibilityAnnouncer.announce(u.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                name: t.name
            })) : y.AccessibilityAnnouncer.announce(u.default.Messages.REACTION_ADD_ERROR_A11Y.format({
                name: t.name
            })))
        })
    }

    function g(i) {
        let {
            channelId: x,
            messageId: t,
            emoji: s,
            key: a
        } = i;
        d.default.dispatch({
            type: "BURST_REACTION_EFFECT_PLAY",
            channelId: x,
            messageId: t,
            emoji: s,
            key: a
        })
    }
    async function A(i, x, t) {
        let s = null != t && !!t.isRetry;
        await e.default.unarchiveThreadIfNecessary(i), o.default.delete({
            url: _.Endpoints.REMOVE_REACTIONS(i, x),
            oldFormErrors: !0
        }).catch(t => {
            h(t, () => A(i, x, {
                isRetry: !0
            }), {
                isRetry: s
            })
        })
    }
    async function R(i, x, t, s) {
        let a = null != s && !!s.isRetry;
        await e.default.unarchiveThreadIfNecessary(i);
        let y = null === t.id ? t.name : "".concat(t.name, ":").concat(t.id);
        o.default.delete({
            url: _.Endpoints.REMOVE_EMOJI_REACTIONS(i, x, y),
            oldFormErrors: !0
        }).catch(s => {
            h(s, () => R(i, x, t, {
                isRetry: !0
            }), {
                isRetry: a
            })
        })
    }
    async function O(i, x, t, s) {
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
            d = arguments.length > 5 ? arguments[5] : void 0,
            k = null != d && !!d.burst,
            p = null != d && !!d.isRetry;
        I("MESSAGE_REACTION_REMOVE", i, x, t, {
            userId: s,
            burst: k
        }), await e.default.unarchiveThreadIfNecessary(i), o.default.delete({
            url: b({
                channelId: i,
                messageId: x,
                emoji: t,
                userId: null != s ? s : "@me",
                type: k ? r.ReactionTypes.BURST : r.ReactionTypes.NORMAL,
                useTypeEndpoint: !0
            }),
            query: {
                location: a,
                burst: k
            },
            oldFormErrors: !0
        }).then(() => {
            (null == d ? void 0 : d.burst) ? y.AccessibilityAnnouncer.announce(u.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                name: t.name
            })): y.AccessibilityAnnouncer.announce(u.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                name: t.name
            }))
        }).catch(async o => {
            if (h(o, () => O(i, x, t, s, a, {
                    burst: k,
                    isRetry: !0
                }), {
                    isRetry: p
                })) {
                let a = await v(t, k);
                I("MESSAGE_REACTION_ADD", i, x, t, {
                    userId: s,
                    burst: k,
                    colors: a
                }), (null == d ? void 0 : d.burst) ? y.AccessibilityAnnouncer.announce(u.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                    name: t.name
                })) : y.AccessibilityAnnouncer.announce(u.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                    name: t.name
                }))
            }
        })
    }
    async function v(i, x) {
        let t = [];
        if (x) try {
            t = await (0, l.getEmojiColors)(i)
        } catch {}
        return t
    }

    function T(i) {
        let {
            channelId: x,
            messageId: t,
            emoji: s,
            reactionType: a,
            userId: o,
            location: y
        } = i, d = a === r.ReactionTypes.BURST;
        O(x, t, s, o, y, {
            burst: d
        })
    }
}