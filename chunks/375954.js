function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020"), n("653041"), n("177593");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("89892"),
        c = n("673750"),
        E = n("710845"),
        I = n("163268"),
        T = n("723352"),
        f = n("160404"),
        S = n("786761"),
        h = n("418476");
    n("739566");
    var A = n("995774"),
        m = n("706454"),
        N = n("630388"),
        p = n("709054"),
        O = n("314897"),
        R = n("592125"),
        C = n("796974"),
        g = n("984933"),
        L = n("271383"),
        D = n("430824"),
        v = n("496675"),
        M = n("699516"),
        y = n("944486"),
        P = n("914010"),
        U = n("594174"),
        b = n("981631");
    let G = new Set,
        w = new E.default("MessageStore"),
        B = !1;

    function k() {
        _.default.forEach(e => {
            _.default.commit(e.mutate({
                ready: !1,
                loadingMore: !1
            }))
        }), G.clear()
    }

    function V() {
        _.default.forEach(e => {
            let {
                channelId: t
            } = e;
            null == R.default.getChannel(t) && _.default.clear(t)
        })
    }

    function x() {
        _.default.forEach(e => {
            _.default.commit(e.reset(e.map(e => e.set("blocked", M.default.isBlocked(e.author.id)))))
        })
    }

    function F(e) {
        let {
            type: t,
            channelId: n,
            messageId: i,
            userId: r,
            emoji: s,
            reactionType: a
        } = e, o = _.default.get(n);
        if (null == o || !(0, A.shouldApplyReaction)(e)) return !1;
        let l = O.default.getId() === r;
        o = o.update(i, n => "MESSAGE_REACTION_ADD" === t ? n.addReaction(s, l, e.colors, a) : n.removeReaction(s, l, a)), _.default.commit(o)
    }

    function H(e) {
        let {
            type: t,
            messageData: n
        } = e, {
            message: i
        } = n, r = (0, c.getFailedMessageId)(n), s = i.channelId, a = _.default.getOrCreate(s);
        if (!a.has(r)) return !1;
        a = a.update(r, e => {
            var n;
            return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(T.isNotAutomodEmbed).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, N.addFlag)(e.flags, b.MessageFlags.EPHEMERAL))), e
        }), _.default.commit(a)
    }
    class Y extends(i = u.default.Store) {
        initialize() {
            this.waitFor(U.default, R.default, C.default, L.default, m.default, y.default, P.default, D.default, M.default, g.default), this.syncWith([f.default], () => {})
        }
        getMessages(e) {
            if (f.default.hasViewingRoles()) {
                let t = R.default.getChannel(e),
                    n = null == t ? void 0 : t.getGuildId();
                if (f.default.isViewingRoles(n) && !v.default.can(b.Permissions.VIEW_CHANNEL, t)) return new _.default(e)
            }
            return _.default.getOrCreate(e)
        }
        getMessage(e, t) {
            return _.default.getOrCreate(e).get(t)
        }
        getLastEditableMessage(e) {
            let t = U.default.getCurrentUser();
            return l()(this.getMessages(e).toArray()).reverse().find(e => (0, h.default)(e, null == t ? void 0 : t.id))
        }
        getLastCommandMessage(e) {
            let t = U.default.getCurrentUser();
            return this.getMessages(e).toArray().reverse().find(e => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id))
        }
        getLastMessage(e) {
            return l()(this.getMessages(e).toArray()).reverse().get(0)
        }
        getLastNonCurrentUserMessage(e) {
            let t = U.default.getCurrentUser();
            return l()(this.getMessages(e).toArray()).reverse().find(e => e.author.id !== (null == t ? void 0 : t.id))
        }
        jumpedMessageId(e) {
            let t = _.default.get(e);
            return null == t ? void 0 : t.jumpTargetId
        }
        focusedMessageId(e) {
            let t = _.default.get(e);
            return null == t ? void 0 : t.focusTargetId
        }
        hasPresent(e) {
            let t = _.default.get(e);
            return null != t && t.ready && t.hasPresent()
        }
        isReady(e) {
            return _.default.getOrCreate(e).ready
        }
        whenReady(e, t) {
            this.addConditionalChangeListener(() => {
                if (this.isReady(e)) return setImmediate(t), !1
            })
        }
        isLoadingMessages(e) {
            return _.default.getOrCreate(e).loadingMore
        }
        hasCurrentUserSentMessage(e) {
            let t = U.default.getCurrentUser();
            return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
        }
        hasCurrentUserSentMessageSinceAppStart() {
            return B
        }
    }
    a = "MessageStore", (s = "displayName") in(r = Y) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new Y(d.default, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
            let {
                changesByChannelId: t
            } = e;
            for (let e in t) {
                let n = _.default.get(e);
                if (null != n) {
                    n.cached;
                    n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
                }
            }
        },
        CONNECTION_OPEN: k,
        OVERLAY_INITIALIZE: k,
        CACHE_LOADED: function(e) {
            for (let [t, n] of p.default.entries(e.messages)) {
                let e = _.default.getOrCreate(t).addCachedMessages(n, !0);
                _.default.commit(e)
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
                jump: r,
                hasMoreBefore: s,
                hasMoreAfter: a,
                messages: o,
                isStale: l,
                truncate: u
            } = e, d = _.default.getOrCreate(t);
            d = d.loadComplete({
                newMessages: o,
                isBefore: n,
                isAfter: i,
                jump: r,
                hasMoreBefore: s,
                hasMoreAfter: a,
                cached: l,
                hasFetched: !0
            }), null != u && (n || i) && (!n || !i) && (d = d.truncate(n, i)), _.default.commit(d)
        },
        LOAD_MESSAGES_FAILURE: function(e) {
            let {
                channelId: t
            } = e, n = _.default.getOrCreate(t);
            _.default.commit(n.mutate({
                loadingMore: !1,
                error: !0
            }))
        },
        LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
            let {
                channelId: t,
                jump: n,
                focus: i,
                before: r,
                after: s,
                limit: a,
                truncate: o
            } = e, l = _.default.getOrCreate(t);
            (null == n ? void 0 : n.present) ? l = l.jumpToPresent(a): (null == i ? void 0 : i.messageId) != null ? l = l.focusOnMessage(i.messageId) : (null == n ? void 0 : n.messageId) != null ? l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != r || null != s) && (l = l.loadFromCache(null != r, a)), null != o && (null != r || null != s) && (null == r || null == s) && (l = l.truncate(null != r, null != s)), _.default.commit(l)
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            let t = _.default.getOrCreate(e.channelId);
            (t.cached || !t.ready) && _.default.commit(t.addCachedMessages(e.messages, e.stale))
        },
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
            let t = e.messageId,
                n = e.channelId,
                i = _.default.get(n);
            if (null == i || !i.has(t)) return !1;
            i = i.update(t, t => t.set("interactionData", e.interactionData)), _.default.commit(i)
        },
        TRUNCATE_MESSAGES: function(e) {
            let {
                channelId: t,
                truncateBottom: n,
                truncateTop: i
            } = e;
            w.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(i));
            let r = _.default.getOrCreate(t);
            r = r.truncate(n, i), _.default.commit(r)
        },
        CLEAR_MESSAGES: function(e) {
            let {
                channelId: t
            } = e;
            w.log("Clearing messages for ".concat(t)), _.default.clear(t), G.clear()
        },
        MESSAGE_CREATE: function(e) {
            let {
                channelId: t,
                message: n,
                isPushNotification: i
            } = e, r = _.default.getOrCreate(t);
            if (i) {
                w.log("Inserting message tapped on from a push notification", n.id, n.channel_id), _.default.commit(r.receivePushNotification(n));
                return
            }
            if (!r.ready) return !1;
            null != n.nonce && n.state !== b.MessageStates.SENDING && G.has(n.nonce) && (r = r.remove(n.nonce), G.delete(n.nonce)), r = r.receiveMessage(n, C.default.isAtBottom(t)), _.default.commit(r)
        },
        MESSAGE_SEND_FAILED: function(e) {
            let {
                channelId: t,
                messageId: n,
                reason: i
            } = e, r = _.default.getOrCreate(t);
            if (null == r || !r.has(n)) return !1;
            let s = r.get(n, !0);
            r = (null == s ? void 0 : s.isPoll()) === !0 ? r.remove(n) : r.update(n, e => ((e = e.set("state", b.MessageStates.SEND_FAILED)).isCommandType() ? e = (e = e.set("interactionError", null != i ? i : "")).set("flags", (0, N.addFlag)(e.flags, b.MessageFlags.EPHEMERAL)) : null != i && (e = e.set("interactionError", null != i ? i : "")), e)), _.default.commit(r)
        },
        MESSAGE_SEND_FAILED_AUTOMOD: H,
        MESSAGE_EDIT_FAILED_AUTOMOD: H,
        MESSAGE_UPDATE: function(e) {
            let t = e.message.id,
                n = e.message.channel_id,
                i = _.default.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            i = i.update(t, t => (0, S.updateMessageRecord)(t, e.message)), _.default.commit(i)
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            let {
                messageId: t,
                channelId: n
            } = e, i = _.default.get(n);
            if (null == i || !i.has(t)) return !1;
            i = i.update(t, I.handleExplicitMediaScanTimeoutForMessage), _.default.commit(i)
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e, i = _.default.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            if (i.revealedMessageId === t) {
                let e = i.getAfter(t);
                i = null != e && e.blocked ? i.mutate({
                    revealedMessageId: e.id
                }) : i.mutate({
                    revealedMessageId: null
                })
            }
            i = i.remove(t), _.default.commit(i), G.delete(t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e, i = _.default.getOrCreate(n);
            if (null == i) return !1;
            let r = i.removeMany(t);
            if (i === r) return !1;
            if (null != r.revealedMessageId && l().some(t, e => r.revealedMessageId === e)) {
                let e = r.getAfter(r.revealedMessageId);
                r = null != e && e.blocked ? r.mutate({
                    revealedMessageId: e.id
                }) : r.mutate({
                    revealedMessageId: null
                })
            }
            _.default.commit(r), t.forEach(e => {
                G.delete(e)
            })
        },
        MESSAGE_REVEAL: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = _.default.getOrCreate(t);
            _.default.commit(i.mutate({
                revealedMessageId: n
            }))
        },
        THREAD_CREATE_LOCAL: function(e) {
            let {
                channelId: t
            } = e, n = _.default.getOrCreate(t);
            n = n.loadComplete({
                newMessages: [],
                hasMoreAfter: !1,
                hasMoreBefore: !1
            }), _.default.commit(n)
        },
        CHANNEL_DELETE: V,
        THREAD_DELETE: V,
        GUILD_DELETE: V,
        RELATIONSHIP_ADD: x,
        RELATIONSHIP_REMOVE: x,
        GUILD_MEMBERS_CHUNK_BATCH: function(e) {},
        THREAD_MEMBER_LIST_UPDATE: function(e) {},
        MESSAGE_REACTION_ADD: F,
        MESSAGE_REACTION_ADD_MANY: function(e) {
            let {
                channelId: t,
                messageId: n,
                reactions: i
            } = e, r = _.default.get(t);
            if (null == r) return !1;
            r = r.update(n, e => {
                var t;
                return e.addReactionBatch(i, null === (t = U.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
            }), _.default.commit(r)
        },
        MESSAGE_REACTION_REMOVE: F,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = _.default.get(t);
            if (null == i) return !1;
            i = i.update(n, e => e.set("reactions", [])), _.default.commit(i)
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: i
            } = e, r = _.default.get(t);
            if (null == r) return !1;
            r = r.update(n, e => e.removeReactionsForEmoji(i)), _.default.commit(r)
        },
        LOGOUT: function() {
            _.default.forEach(e => {
                _.default.clear(e.channelId)
            }), G.clear()
        },
        UPLOAD_START: function(e) {
            let {
                message: t
            } = e;
            null != t.nonce && G.add(t.nonce)
        },
        UPLOAD_FAIL: function(e) {
            let {
                channelId: t,
                messageRecord: n
            } = e, i = null == n ? void 0 : n.nonce;
            if (null != i && G.has(i)) {
                let e = _.default.getOrCreate(t),
                    n = e.get(i);
                if (null == n) return;
                e = (e = e.remove(i)).merge([n]), G.delete(i), _.default.commit(e)
            }
        },
        LOCAL_MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e, n = U.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (B = !0)
        }
    })
}