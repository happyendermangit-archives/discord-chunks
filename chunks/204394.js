function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("71578"),
        d = n("749055"),
        _ = n("35523"),
        E = n("411372"),
        p = n("201614"),
        m = n("717744"),
        y = n("273829"),
        I = n("208233");
    n("970930");
    var h = n("83710"),
        O = n("225098"),
        T = n("947248"),
        S = n("523018"),
        v = n("217014"),
        g = n("935741"),
        A = n("110016"),
        b = n("29604"),
        N = n("957808"),
        R = n("306912"),
        C = n("29884"),
        P = n("776982"),
        D = n("894288"),
        L = n("63116"),
        M = n("208454"),
        U = n("281767");

    function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function k(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function G(e) {
        return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function B(e, t) {
        return (B = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var j = new Set,
        F = new _.default("MessageStore"),
        V = !1;

    function H() {
        f.default.forEach(function(e) {
            f.default.commit(e.mutate({
                ready: !1,
                loadingMore: !1
            }))
        }), j.clear()
    }

    function x() {
        f.default.forEach(function(e) {
            var t = e.channelId;
            null == g.default.getChannel(t) && f.default.clear(t)
        })
    }

    function Y() {
        f.default.forEach(function(e) {
            f.default.commit(e.reset(e.map(function(e) {
                return e.set("blocked", P.default.isBlocked(e.author.id))
            })))
        })
    }

    function W(e) {}

    function K(e) {
        var t = e.type,
            n = e.channelId,
            r = e.messageId,
            o = e.userId,
            i = e.emoji,
            a = e.reactionType,
            u = f.default.get(n);
        if (null == u || !(0, h.shouldApplyReaction)(e)) return !1;
        var s = v.default.getId() === o;
        u = u.update(r, function(n) {
            return "MESSAGE_REACTION_ADD" === t ? n.addReaction(i, s, e.colors, a) : n.removeReaction(i, s, a)
        }), f.default.commit(u)
    }

    function z(e) {
        var t = e.type,
            n = e.messageData,
            r = n.message,
            o = (0, d.getFailedMessageId)(n),
            i = r.channelId,
            a = f.default.getOrCreate(i);
        if (!a.has(o)) return !1;
        a = a.update(o, function(e) {
            var n;
            return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(p.isNotAutomodEmbed).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, T.addFlag)(e.flags, U.MessageFlags.EPHEMERAL))), e
        }), f.default.commit(a)
    }
    var X = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && B(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = G(t);
            if (n) {
                var a = G(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(M.default, g.default, A.default, N.default, O.default, D.default, L.default, R.default, P.default, b.default), this.syncWith([m.default], function() {})
            }
        }, {
            key: "getMessages",
            value: function(e) {
                if (m.default.hasViewingRoles()) {
                    var t = g.default.getChannel(e),
                        n = null == t ? void 0 : t.getGuildId();
                    if (m.default.isViewingRoles(n) && !C.default.can(U.Permissions.VIEW_CHANNEL, t)) return new f.default(e)
                }
                return f.default.getOrCreate(e)
            }
        }, {
            key: "getMessage",
            value: function(e, t) {
                return f.default.getOrCreate(e).get(t)
            }
        }, {
            key: "getLastEditableMessage",
            value: function(e) {
                var t = M.default.getCurrentUser();
                return s()(this.getMessages(e).toArray()).reverse().find(function(e) {
                    return (0, I.default)(e, null == t ? void 0 : t.id)
                })
            }
        }, {
            key: "getLastCommandMessage",
            value: function(e) {
                var t = M.default.getCurrentUser();
                return this.getMessages(e).toArray().reverse().find(function(e) {
                    return null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id)
                })
            }
        }, {
            key: "getLastMessage",
            value: function(e) {
                return s()(this.getMessages(e).toArray()).reverse().get(0)
            }
        }, {
            key: "getLastNonCurrentUserMessage",
            value: function(e) {
                var t = M.default.getCurrentUser();
                return s()(this.getMessages(e).toArray()).reverse().find(function(e) {
                    return e.author.id !== (null == t ? void 0 : t.id)
                })
            }
        }, {
            key: "jumpedMessageId",
            value: function(e) {
                var t = f.default.get(e);
                return null == t ? void 0 : t.jumpTargetId
            }
        }, {
            key: "focusedMessageId",
            value: function(e) {
                var t = f.default.get(e);
                return null == t ? void 0 : t.focusTargetId
            }
        }, {
            key: "hasPresent",
            value: function(e) {
                var t = f.default.get(e);
                return null != t && t.ready && t.hasPresent()
            }
        }, {
            key: "isReady",
            value: function(e) {
                return f.default.getOrCreate(e).ready
            }
        }, {
            key: "whenReady",
            value: function(e, t) {
                var n = this;
                this.addConditionalChangeListener(function() {
                    if (n.isReady(e)) return setImmediate(t), !1
                })
            }
        }, {
            key: "isLoadingMessages",
            value: function(e) {
                return f.default.getOrCreate(e).loadingMore
            }
        }, {
            key: "hasCurrentUserSentMessage",
            value: function(e) {
                var t = M.default.getCurrentUser();
                return null != this.getMessages(e).findNewest(function(e) {
                    return e.author.id === (null == t ? void 0 : t.id)
                })
            }
        }, {
            key: "hasCurrentUserSentMessageSinceAppStart",
            value: function() {
                return V
            }
        }], k(r.prototype, o), i && k(r, i), u
    }(l.default.Store);
    i = "MessageStore", (o = "displayName") in(r = X) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new X(c.default, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
            var t = e.changesByChannelId;
            for (var n in t) {
                var r = f.default.get(n);
                if (null != r) {
                    r.cached;
                    r.mergeDelta(t[n].new_messages, t[n].modified_messages, t[n].deleted_message_ids)
                }
            }
        },
        CONNECTION_OPEN: H,
        OVERLAY_INITIALIZE: H,
        CACHE_LOADED: function(e) {
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = S.default.entries(e.messages)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a, u, s = (a = o.value, u = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(a) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(a, u) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return w(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                            }
                        }(a, u) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        l = s[0],
                        c = s[1],
                        d = f.default.getOrCreate(l).addCachedMessages(c, !0);
                    f.default.commit(d)
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
        },
        LOAD_MESSAGES: function() {
            return !0
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            var t = e.channelId,
                n = e.isBefore,
                r = e.isAfter,
                o = e.jump,
                i = e.hasMoreBefore,
                a = e.hasMoreAfter,
                u = e.messages,
                s = e.isStale,
                l = e.truncate,
                c = f.default.getOrCreate(t);
            c = c.loadComplete({
                newMessages: u,
                isBefore: n,
                isAfter: r,
                jump: o,
                hasMoreBefore: i,
                hasMoreAfter: a,
                cached: s,
                hasFetched: !0
            }), null != l && (n || r) && (!n || !r) && (c = c.truncate(n, r)), f.default.commit(c)
        },
        LOAD_MESSAGES_FAILURE: function(e) {
            var t = e.channelId,
                n = f.default.getOrCreate(t);
            f.default.commit(n.mutate({
                loadingMore: !1,
                error: !0
            }))
        },
        LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
            var t = e.channelId,
                n = e.jump,
                r = e.focus,
                o = e.before,
                i = e.after,
                a = e.limit,
                u = e.truncate,
                s = f.default.getOrCreate(t);
            (null == n ? void 0 : n.present) ? s = s.jumpToPresent(a): (null == r ? void 0 : r.messageId) != null ? s = s.focusOnMessage(r.messageId) : (null == n ? void 0 : n.messageId) != null ? s = s.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != o || null != i) && (s = s.loadFromCache(null != o, a)), null != u && (null != o || null != i) && (null == o || null == i) && (s = s.truncate(null != o, null != i)), f.default.commit(s)
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            var t = f.default.getOrCreate(e.channelId);
            (t.cached || !t.ready) && f.default.commit(t.addCachedMessages(e.messages, e.stale))
        },
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
            var t = e.messageId,
                n = e.channelId,
                r = f.default.get(n);
            if (null == r || !r.has(t)) return !1;
            r = r.update(t, function(t) {
                return t.set("interactionData", e.interactionData)
            }), f.default.commit(r)
        },
        TRUNCATE_MESSAGES: function(e) {
            var t = e.channelId,
                n = e.truncateBottom,
                r = e.truncateTop;
            F.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(r));
            var o = f.default.getOrCreate(t);
            o = o.truncate(n, r), f.default.commit(o)
        },
        CLEAR_MESSAGES: function(e) {
            var t = e.channelId;
            F.log("Clearing messages for ".concat(t)), f.default.clear(t), j.clear()
        },
        MESSAGE_CREATE: function(e) {
            var t = e.channelId,
                n = e.message,
                r = e.isPushNotification,
                o = f.default.getOrCreate(t);
            if (r) {
                F.log("Inserting message tapped on from a push notification", n.id, n.channel_id), f.default.commit(o.receivePushNotification(n));
                return
            }
            if (!o.ready) return !1;
            null != n.nonce && n.state !== U.MessageStates.SENDING && j.has(n.nonce) && (o = o.remove(n.nonce), j.delete(n.nonce)), o = o.receiveMessage(n, A.default.isAtBottom(t)), f.default.commit(o)
        },
        MESSAGE_SEND_FAILED: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.reason,
                o = f.default.getOrCreate(t);
            if (null == o || !o.has(n)) return !1;
            var i = o.get(n, !0);
            o = (null == i ? void 0 : i.isPoll()) === !0 ? o.remove(n) : o.update(n, function(e) {
                return (e = e.set("state", U.MessageStates.SEND_FAILED)).isCommandType() ? e = (e = e.set("interactionError", null != r ? r : "")).set("flags", (0, T.addFlag)(e.flags, U.MessageFlags.EPHEMERAL)) : null != r && (e = e.set("interactionError", null != r ? r : "")), e
            }), f.default.commit(o)
        },
        MESSAGE_SEND_FAILED_AUTOMOD: z,
        MESSAGE_EDIT_FAILED_AUTOMOD: z,
        MESSAGE_UPDATE: function(e) {
            var t = e.message.id,
                n = e.message.channel_id,
                r = f.default.getOrCreate(n);
            if (null == r || !r.has(t)) return !1;
            r = r.update(t, function(t) {
                return (0, y.updateMessageRecord)(t, e.message)
            }), f.default.commit(r)
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            var t = e.messageId,
                n = e.channelId,
                r = f.default.get(n);
            if (null == r || !r.has(t)) return !1;
            r = r.update(t, E.handleExplicitMediaScanTimeoutForMessage), f.default.commit(r)
        },
        MESSAGE_DELETE: function(e) {
            var t = e.id,
                n = e.channelId,
                r = f.default.getOrCreate(n);
            if (null == r || !r.has(t)) return !1;
            if (r.revealedMessageId === t) {
                var o = r.getAfter(t);
                r = null != o && o.blocked ? r.mutate({
                    revealedMessageId: o.id
                }) : r.mutate({
                    revealedMessageId: null
                })
            }
            r = r.remove(t), f.default.commit(r), j.delete(t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            var t = e.ids,
                n = e.channelId,
                r = f.default.getOrCreate(n);
            if (null == r) return !1;
            var o = r.removeMany(t);
            if (r === o) return !1;
            if (null != o.revealedMessageId && s().some(t, function(e) {
                    return o.revealedMessageId === e
                })) {
                var i = o.getAfter(o.revealedMessageId);
                o = null != i && i.blocked ? o.mutate({
                    revealedMessageId: i.id
                }) : o.mutate({
                    revealedMessageId: null
                })
            }
            f.default.commit(o), t.forEach(function(e) {
                j.delete(e)
            })
        },
        MESSAGE_REVEAL: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = f.default.getOrCreate(t);
            f.default.commit(r.mutate({
                revealedMessageId: n
            }))
        },
        THREAD_CREATE_LOCAL: function(e) {
            var t = e.channelId,
                n = f.default.getOrCreate(t);
            n = n.loadComplete({
                newMessages: [],
                hasMoreAfter: !1,
                hasMoreBefore: !1
            }), f.default.commit(n)
        },
        CHANNEL_DELETE: x,
        THREAD_DELETE: x,
        GUILD_DELETE: x,
        RELATIONSHIP_ADD: Y,
        RELATIONSHIP_REMOVE: Y,
        GUILD_MEMBERS_CHUNK: W,
        THREAD_MEMBER_LIST_UPDATE: W,
        MESSAGE_REACTION_ADD: K,
        MESSAGE_REACTION_ADD_MANY: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.reactions,
                o = f.default.get(t);
            if (null == o) return !1;
            o = o.update(n, function(e) {
                var t;
                return e.addReactionBatch(r, null === (t = M.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
            }), f.default.commit(o)
        },
        MESSAGE_REACTION_REMOVE: K,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = f.default.get(t);
            if (null == r) return !1;
            r = r.update(n, function(e) {
                return e.set("reactions", [])
            }), f.default.commit(r)
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.emoji,
                o = f.default.get(t);
            if (null == o) return !1;
            o = o.update(n, function(e) {
                return e.removeReactionsForEmoji(r)
            }), f.default.commit(o)
        },
        LOGOUT: function() {
            f.default.forEach(function(e) {
                f.default.clear(e.channelId)
            }), j.clear()
        },
        UPLOAD_START: function(e) {
            var t = e.message;
            null != t.nonce && j.add(t.nonce)
        },
        UPLOAD_FAIL: function(e) {
            var t = e.channelId,
                n = e.messageRecord,
                r = null == n ? void 0 : n.nonce;
            if (null != r && j.has(r)) {
                var o = f.default.getOrCreate(t),
                    i = o.get(r);
                if (null == i) return;
                o = (o = o.remove(r)).merge([i]), j.delete(r), f.default.commit(o)
            }
        },
        LOCAL_MESSAGE_CREATE: function(e) {
            var t = e.message,
                n = M.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (V = !0)
        }
    })
}