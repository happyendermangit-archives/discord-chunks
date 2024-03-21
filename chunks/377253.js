function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return B
        }
    }), n("222007"), n("702976"), n("424973"), n("860677");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("408062"),
        l = n("979911"),
        u = n("605250"),
        d = n("447435"),
        c = n("10853"),
        _ = n("38654"),
        f = n("692038"),
        E = n("61400");
    n("574073");
    var h = n("432173"),
        g = n("915639"),
        m = n("568734"),
        p = n("299039"),
        S = n("271938"),
        v = n("42203"),
        T = n("162805"),
        I = n("923959"),
        A = n("26989"),
        C = n("305961"),
        y = n("957255"),
        N = n("27618"),
        R = n("18494"),
        O = n("162771"),
        D = n("697218"),
        P = n("49111");
    let L = new Set,
        M = new u.default("MessageStore"),
        b = !1;

    function U() {
        o.default.forEach(e => {
            o.default.commit(e.mutate({
                ready: !1,
                loadingMore: !1
            }))
        }), L.clear()
    }

    function w() {
        o.default.forEach(e => {
            let {
                channelId: t
            } = e;
            null == v.default.getChannel(t) && o.default.clear(t)
        })
    }

    function k() {
        o.default.forEach(e => {
            o.default.commit(e.reset(e.map(e => e.set("blocked", N.default.isBlocked(e.author.id)))))
        })
    }

    function V(e) {}

    function G(e) {
        let {
            type: t,
            channelId: n,
            messageId: i,
            userId: s,
            emoji: r,
            reactionType: a
        } = e, l = o.default.get(n);
        if (null == l || !(0, h.shouldApplyReaction)(e)) return !1;
        let u = S.default.getId() === s;
        l = l.update(i, n => "MESSAGE_REACTION_ADD" === t ? n.addReaction(r, u, e.colors, a) : n.removeReaction(r, u, a)), o.default.commit(l)
    }

    function F(e) {
        let {
            type: t,
            messageData: n
        } = e, {
            message: i
        } = n, s = (0, l.getFailedMessageId)(n), r = i.channelId, a = o.default.getOrCreate(r);
        if (!a.has(s)) return !1;
        a = a.update(s, e => {
            var n;
            return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(c.isNotAutomodEmbed).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, m.addFlag)(e.flags, P.MessageFlags.EPHEMERAL))), e
        }), o.default.commit(a)
    }
    class x extends r.default.Store {
        initialize() {
            this.waitFor(D.default, v.default, T.default, A.default, g.default, R.default, O.default, C.default, N.default, I.default), this.syncWith([_.default], () => {})
        }
        getMessages(e) {
            if (_.default.hasViewingRoles()) {
                let t = v.default.getChannel(e),
                    n = null == t ? void 0 : t.getGuildId();
                if (_.default.isViewingRoles(n) && !y.default.can(P.Permissions.VIEW_CHANNEL, t)) return new o.default(e)
            }
            return o.default.getOrCreate(e)
        }
        getMessage(e, t) {
            return o.default.getOrCreate(e).get(t)
        }
        getLastEditableMessage(e) {
            let t = D.default.getCurrentUser();
            return s(this.getMessages(e).toArray()).reverse().find(e => (0, E.default)(e, null == t ? void 0 : t.id))
        }
        getLastCommandMessage(e) {
            let t = D.default.getCurrentUser();
            return this.getMessages(e).toArray().reverse().find(e => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id))
        }
        getLastMessage(e) {
            return s(this.getMessages(e).toArray()).reverse().get(0)
        }
        getLastNonCurrentUserMessage(e) {
            let t = D.default.getCurrentUser();
            return s(this.getMessages(e).toArray()).reverse().find(e => e.author.id !== (null == t ? void 0 : t.id))
        }
        jumpedMessageId(e) {
            let t = o.default.get(e);
            return null == t ? void 0 : t.jumpTargetId
        }
        focusedMessageId(e) {
            let t = o.default.get(e);
            return null == t ? void 0 : t.focusTargetId
        }
        hasPresent(e) {
            let t = o.default.get(e);
            return null != t && t.ready && t.hasPresent()
        }
        isReady(e) {
            return o.default.getOrCreate(e).ready
        }
        whenReady(e, t) {
            this.addConditionalChangeListener(() => {
                if (this.isReady(e)) return setImmediate(t), !1
            })
        }
        isLoadingMessages(e) {
            let t = o.default.getOrCreate(e);
            return t.loadingMore
        }
        hasCurrentUserSentMessage(e) {
            let t = D.default.getCurrentUser();
            return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
        }
        hasCurrentUserSentMessageSinceAppStart() {
            return b
        }
    }
    x.displayName = "MessageStore";
    var B = new x(a.default, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
            let {
                changesByChannelId: t
            } = e;
            for (let e in t) {
                let n = o.default.get(e);
                if (null == n) continue;
                let i = n.cached || true;
                if (!i) {
                    M.log("Skipping background message sync for ".concat(e, " cached:").concat(n.cached, " ") + "ready:".concat(n.ready, " hasMoreAfter:").concat(n.hasMoreAfter, " ") + "isConnected:".concat(!1));
                    continue
                }
                n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
            }
        },
        CONNECTION_OPEN: U,
        OVERLAY_INITIALIZE: U,
        CACHE_LOADED: function(e) {
            for (let [t, n] of p.default.entries(e.messages)) {
                let e = o.default.getOrCreate(t).addCachedMessages(n, !0);
                o.default.commit(e)
            }
        },
        LOAD_MESSAGES: function() {
            return !0
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t,
                isBefore: n,
                isAfter: i,
                jump: s,
                hasMoreBefore: r,
                hasMoreAfter: a,
                messages: l,
                isStale: u,
                truncate: d
            } = e, c = o.default.getOrCreate(t);
            c = c.loadComplete({
                newMessages: l,
                isBefore: n,
                isAfter: i,
                jump: s,
                hasMoreBefore: r,
                hasMoreAfter: a,
                cached: u,
                hasFetched: !0
            }), null != d && (n || i) && (!n || !i) && (c = c.truncate(n, i)), o.default.commit(c)
        },
        LOAD_MESSAGES_FAILURE: function(e) {
            let {
                channelId: t
            } = e, n = o.default.getOrCreate(t);
            o.default.commit(n.mutate({
                loadingMore: !1,
                error: !0
            }))
        },
        LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
            let {
                channelId: t,
                jump: n,
                focus: i,
                before: s,
                after: r,
                limit: a,
                truncate: l
            } = e, u = o.default.getOrCreate(t);
            (null == n ? void 0 : n.present) ? u = u.jumpToPresent(a): (null == i ? void 0 : i.messageId) != null ? u = u.focusOnMessage(i.messageId) : (null == n ? void 0 : n.messageId) != null ? u = u.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != s || null != r) && (u = u.loadFromCache(null != s, a)), null != l && (null != s || null != r) && (null == s || null == r) && (u = u.truncate(null != s, null != r)), o.default.commit(u)
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            let t = o.default.getOrCreate(e.channelId);
            (t.cached || !t.ready) && o.default.commit(t.addCachedMessages(e.messages, e.stale))
        },
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
            let t = e.messageId,
                n = e.channelId,
                i = o.default.get(n);
            if (null == i || !i.has(t)) return !1;
            i = i.update(t, t => t.set("interactionData", e.interactionData)), o.default.commit(i)
        },
        TRUNCATE_MESSAGES: function(e) {
            let {
                channelId: t,
                truncateBottom: n,
                truncateTop: i
            } = e;
            M.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(i));
            let s = o.default.getOrCreate(t);
            s = s.truncate(n, i), o.default.commit(s)
        },
        CLEAR_MESSAGES: function(e) {
            let {
                channelId: t
            } = e;
            M.log("Clearing messages for ".concat(t)), o.default.clear(t), L.clear()
        },
        MESSAGE_CREATE: function(e) {
            let {
                channelId: t,
                message: n,
                isPushNotification: i
            } = e, s = o.default.getOrCreate(t);
            if (i) {
                M.log("Inserting message tapped on from a push notification", n.id, n.channel_id), o.default.commit(s.receivePushNotification(n));
                return
            }
            if (!s.ready) return !1;
            null != n.nonce && n.state !== P.MessageStates.SENDING && L.has(n.nonce) && (s = s.remove(n.nonce), L.delete(n.nonce)), s = s.receiveMessage(n, T.default.isAtBottom(t)), o.default.commit(s)
        },
        MESSAGE_SEND_FAILED: function(e) {
            let {
                channelId: t,
                messageId: n,
                reason: i
            } = e, s = o.default.getOrCreate(t);
            if (null == s || !s.has(n)) return !1;
            let r = s.get(n, !0);
            s = (null == r ? void 0 : r.isPoll()) === !0 ? s.remove(n) : s.update(n, e => ((e = e.set("state", P.MessageStates.SEND_FAILED)).isCommandType() && (e = (e = e.set("interactionError", null != i ? i : "")).set("flags", (0, m.addFlag)(e.flags, P.MessageFlags.EPHEMERAL))), e)), o.default.commit(s)
        },
        MESSAGE_SEND_FAILED_AUTOMOD: F,
        MESSAGE_EDIT_FAILED_AUTOMOD: F,
        MESSAGE_UPDATE: function(e) {
            let t = e.message.id,
                n = e.message.channel_id,
                i = o.default.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            i = i.update(t, t => (0, f.updateMessageRecord)(t, e.message)), o.default.commit(i)
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            let {
                messageId: t,
                channelId: n
            } = e, i = o.default.get(n);
            if (null == i || !i.has(t)) return !1;
            i = i.update(t, d.handleExplicitMediaScanTimeoutForMessage), o.default.commit(i)
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e, i = o.default.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            if (i.revealedMessageId === t) {
                let e = i.getAfter(t);
                i = null != e && e.blocked ? i.mutate({
                    revealedMessageId: e.id
                }) : i.mutate({
                    revealedMessageId: null
                })
            }
            i = i.remove(t), o.default.commit(i), L.delete(t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e, i = o.default.getOrCreate(n);
            if (null == i) return !1;
            let r = i.removeMany(t);
            if (i === r) return !1;
            if (null != r.revealedMessageId && s.some(t, e => r.revealedMessageId === e)) {
                let e = r.getAfter(r.revealedMessageId);
                r = null != e && e.blocked ? r.mutate({
                    revealedMessageId: e.id
                }) : r.mutate({
                    revealedMessageId: null
                })
            }
            o.default.commit(r), t.forEach(e => {
                L.delete(e)
            })
        },
        MESSAGE_REVEAL: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = o.default.getOrCreate(t);
            o.default.commit(i.mutate({
                revealedMessageId: n
            }))
        },
        THREAD_CREATE_LOCAL: function(e) {
            let {
                channelId: t
            } = e, n = o.default.getOrCreate(t);
            n = n.loadComplete({
                newMessages: [],
                hasMoreAfter: !1,
                hasMoreBefore: !1
            }), o.default.commit(n)
        },
        CHANNEL_DELETE: w,
        THREAD_DELETE: w,
        GUILD_DELETE: w,
        RELATIONSHIP_ADD: k,
        RELATIONSHIP_REMOVE: k,
        GUILD_MEMBERS_CHUNK: V,
        THREAD_MEMBER_LIST_UPDATE: V,
        MESSAGE_REACTION_ADD: G,
        MESSAGE_REACTION_ADD_MANY: function(e) {
            let {
                channelId: t,
                messageId: n,
                reactions: i
            } = e, s = o.default.get(t);
            if (null == s) return !1;
            s = s.update(n, e => {
                var t;
                return e.addReactionBatch(i, null === (t = D.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
            }), o.default.commit(s)
        },
        MESSAGE_REACTION_REMOVE: G,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = o.default.get(t);
            if (null == i) return !1;
            i = i.update(n, e => e.set("reactions", [])), o.default.commit(i)
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: i
            } = e, s = o.default.get(t);
            if (null == s) return !1;
            s = s.update(n, e => e.removeReactionsForEmoji(i)), o.default.commit(s)
        },
        LOGOUT: function() {
            o.default.forEach(e => {
                o.default.clear(e.channelId)
            }), L.clear()
        },
        UPLOAD_START: function(e) {
            let {
                message: t
            } = e;
            null != t.nonce && L.add(t.nonce)
        },
        UPLOAD_FAIL: function(e) {
            let {
                channelId: t,
                messageRecord: n
            } = e, i = null == n ? void 0 : n.nonce;
            if (null != i && L.has(i)) {
                let e = o.default.getOrCreate(t),
                    n = e.get(i);
                if (null == n) return;
                e = (e = e.remove(i)).merge([n]), L.delete(i), o.default.commit(e)
            }
        },
        LOCAL_MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e, n = D.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (b = !0)
        }
    })
}