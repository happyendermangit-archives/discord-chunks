function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldBadgeMessage: function() {
            return ew
        }
    });
    var r, o, i, a, u = n("512722"),
        s = n.n(u),
        l = n("913527"),
        c = n.n(l),
        f = n("898511"),
        d = n("967888"),
        _ = n("945816"),
        E = n("774300"),
        p = n("629815"),
        m = n("632142"),
        y = n("390579"),
        I = n("291178"),
        h = n("35523"),
        O = n("89536"),
        T = n("895517"),
        S = n("334025"),
        v = n("528795"),
        g = n("386044"),
        A = n("645339"),
        b = n("735579"),
        N = n("271492"),
        R = n("656719"),
        C = n("208050"),
        P = n("147071"),
        D = n("956774"),
        L = n("526514"),
        M = n("851285"),
        U = n("569492"),
        w = n("181994"),
        k = n("388990"),
        G = n("947248"),
        B = n("162677"),
        j = n("637052"),
        F = n("523018"),
        V = n("217014"),
        H = n("248579"),
        x = n("935741"),
        Y = n("110016"),
        W = n("139890"),
        K = n("489763"),
        z = n("306912"),
        X = n("517088"),
        q = n("204394"),
        Q = n("29884"),
        J = n("776982"),
        Z = n("894288"),
        $ = n("848957"),
        ee = n("208454"),
        et = n("290976"),
        en = n("281767"),
        er = n("698007"),
        eo = n("928204"),
        ei = n("713653"),
        ea = n("24729");

    function eu(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function es(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function el(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    es(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    es(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function ec(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function ef(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ed(e, t, n) {
        return t && ef(e.prototype, t), n && ef(e, n), e
    }

    function e_(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function eE(e) {
        return (eE = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ep(e, t) {
        return (ep = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function em(e, t) {
        if (e) {
            if ("string" == typeof e) return eu(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eu(e, t)
        }
    }

    function ey(e, t) {
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
    var eI = new h.default("ReadStateStore");
    __OVERLAY__ && (o = n("391083").default);
    var eh = en.BasicPermissions.VIEW_CHANNEL | en.BasicPermissions.READ_MESSAGE_HISTORY,
        eO = null,
        eT = null,
        eS = null,
        ev = !1,
        eg = [],
        eA = !1,
        eb = null,
        eN = {},
        eR = 30 * k.default.Millis.DAY;

    function eC() {
        return F.default.fromTimestamp(Date.now() - eR)
    }
    var eP = 0,
        eD = 0,
        eL = null;

    function eM() {
        eP = Date.now() - 7 * k.default.Millis.DAY, eD = Date.now() - 3 * k.default.Millis.DAY, clearTimeout(eL), eL = setTimeout(function() {
            p.default.dispatch({
                type: "DECAY_READ_STATES"
            })
        }, 1 * k.default.Millis.HOUR)
    }

    function eU(e) {
        if (null == e) return 0;
        var t = Date.parse(e);
        return isNaN(t) ? 0 : t
    }

    function ew(e, t) {
        var n = x.default.getChannel(e.channel_id);
        return !(null == n || J.default.isBlocked(e.author.id)) && (!!((0, A.default)({
            message: e,
            userId: t.id,
            suppressEveryone: $.default.isSuppressEveryoneEnabled(n.guild_id),
            suppressRoles: $.default.isSuppressRolesEnabled(n.guild_id)
        }) || ek(n)) || !1)
    }

    function ek(e) {
        return null != e && e.isPrivate() && !$.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
    }

    function eG(e) {
        return eB.apply(this, arguments)
    }

    function eB() {
        return (eB = el(function(e) {
            var t;
            return ey(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (0 === eg.length) return eA = !1, null == e || e(), [2];
                        return eA = !0, t = eg.splice(0, 100), [4, ej(function() {
                            return d.HTTP.post({
                                url: en.Endpoints.BULK_ACK,
                                body: {
                                    read_states: t
                                },
                                oldFormErrors: !0
                            })
                        })];
                    case 1:
                        return n.sent(), [4, (0, _.timeoutPromise)(1e3)];
                    case 2:
                        return n.sent(), eG(e), [2]
                }
            })
        })).apply(this, arguments)
    }

    function ej(e) {
        return eF.apply(this, arguments)
    }

    function eF() {
        return (eF = el(function(e) {
            var t, n, r;
            return ey(this, function(o) {
                switch (o.label) {
                    case 0:
                        t = V.default.getId(), n = 0, o.label = 1;
                    case 1:
                        if (!(n < 3)) return [3, 9];
                        o.label = 2;
                    case 2:
                        return o.trys.push([2, 4, , 8]), [4, e()];
                    case 3:
                        return [2, o.sent()];
                    case 4:
                        if (r = o.sent(), eI.error("", r), !(n + 1 < 3)) return [3, 7];
                        return [4, (0, _.timeoutPromise)((n + 1) * 2e3)];
                    case 5:
                        return o.sent(), [4, j.default.awaitOnline()];
                    case 6:
                        if (o.sent(), t !== V.default.getId()) return [2, Promise.reject(Error("User changed."))];
                        o.label = 7;
                    case 7:
                        return [3, 8];
                    case 8:
                        return n++, [3, 1];
                    case 9:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function eV(e) {
        if (e.type !== ea.ReadStateTypes.CHANNEL) return !1;
        var t = x.default.getChannel(e.channelId),
            n = null != t && t.isForumPost();
        if (null != m.default.getConnectedActivityChannelId() && m.default.getActivityPanelMode() === er.ActivityPanelModes.PANEL && m.default.getFocusedLayout() === er.FocusedActivityLayouts.NO_CHAT || X.default.isIdle() || !e.canTrackUnreads()) return !1;
        if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
            var r = eN[e.channelId],
                i = null != r && et.default.isFocused(r),
                a = null != o && o.isInstanceFocused() && o.isPinned(en.OverlayWidgets.TEXT);
            if (!i && !a) return !1
        }
        if (n && !e._persisted) return !0;
        if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || !(n && !e._isJoinedThread) && !Y.default.isAtBottom(e.channelId)) return !1;
        var u = y.default.getLayout(e.channelId),
            s = y.default.getChatOpen(e.channelId);
        if (!s && (u === en.ChannelLayouts.NO_CHAT || u === en.ChannelLayouts.FULL_SCREEN) || null == eN[e.channelId]) return !1;
        var l = q.default.getMessages(e.channelId);
        return !(null == l || !l.ready || l.loadingMore || (0, C.default)() && !s) && !0
    }(r = i || (i = {}))[r.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", r[r.IS_THREAD = 2] = "IS_THREAD";
    var eH = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            ec(this, e), e_(this, "channelId", void 0), e_(this, "type", ea.ReadStateTypes.CHANNEL), e_(this, "_guildId", void 0), e_(this, "_isThread", void 0), e_(this, "_isActiveThread", void 0), e_(this, "_isJoinedThread", void 0), e_(this, "_isResourceChannel", void 0), e_(this, "_persisted", void 0), e_(this, "loadedMessages", void 0), e_(this, "_lastMessageId", void 0), e_(this, "_lastMessageTimestamp", void 0), e_(this, "_ackMessageId", void 0), e_(this, "_ackMessageTimestamp", void 0), e_(this, "isManualAck", void 0), e_(this, "ackPinTimestamp", void 0), e_(this, "lastPinTimestamp", void 0), e_(this, "_oldestUnreadMessageId", void 0), e_(this, "oldestUnreadMessageIdStale", void 0), e_(this, "estimated", void 0), e_(this, "_unreadCount", void 0), e_(this, "_mentionCount", void 0), e_(this, "flags", void 0), e_(this, "lastViewed", void 0), e_(this, "outgoingAck", void 0), e_(this, "outgoingAckTimer", null), e_(this, "ackMessageIdAtChannelSelect", null), e_(this, "ackedWhileCached", void 0), e_(this, "snapshot", void 0), this.channelId = t, this.type = n, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
        }
        return ed(e, [{
            key: "serialize",
            value: function(e) {
                var t = this.channelId,
                    n = this.type,
                    r = this._guildId,
                    o = this._isThread,
                    i = this._isActiveThread,
                    a = this._isJoinedThread,
                    u = this._persisted,
                    s = this.loadedMessages,
                    l = this._lastMessageId,
                    c = this._lastMessageTimestamp,
                    f = this._ackMessageId,
                    d = this._ackMessageTimestamp,
                    _ = this.ackPinTimestamp,
                    E = this.isManualAck,
                    p = this.lastPinTimestamp,
                    m = this._oldestUnreadMessageId,
                    y = this.oldestUnreadMessageIdStale,
                    I = this.estimated,
                    h = this._mentionCount,
                    O = this.flags,
                    T = this.lastViewed;
                if (e) return {
                    channelId: t,
                    type: n,
                    _guildId: r,
                    _isThread: o,
                    _isActiveThread: i,
                    _isJoinedThread: a,
                    _persisted: u,
                    loadedMessages: s,
                    _lastMessageId: l,
                    _lastMessageTimestamp: c,
                    _ackMessageId: f,
                    _ackMessageTimestamp: d,
                    ackPinTimestamp: _,
                    isManualAck: E,
                    lastPinTimestamp: p,
                    _oldestUnreadMessageId: m,
                    oldestUnreadMessageIdStale: y,
                    estimated: I,
                    _mentionCount: h,
                    flags: O,
                    lastViewed: T
                };
                var S = {
                    channelId: t,
                    type: n,
                    _guildId: r,
                    _persisted: u,
                    _lastMessageId: l,
                    _lastMessageTimestamp: c,
                    _ackMessageId: f,
                    _ackMessageTimestamp: d,
                    ackPinTimestamp: _,
                    lastPinTimestamp: p,
                    _mentionCount: h,
                    flags: O
                };
                return null != T && T > 0 && (S.lastViewed = T), o && (S._isThread = o, S._isActiveThread = i, S._isJoinedThread = a), S
            }
        }, {
            key: "deserializeForOverlay",
            value: function(t) {
                var n = t.channelId,
                    r = t.type,
                    o = t._guildId,
                    i = t._isThread,
                    a = t._isActiveJoinedThread,
                    u = t._isActiveThread,
                    s = t._isJoinedThread,
                    l = t._persisted,
                    c = t.loadedMessages,
                    f = t._lastMessageId,
                    d = t._lastMessageTimestamp,
                    _ = t._ackMessageId,
                    E = t._ackMessageTimestamp,
                    p = t.ackPinTimestamp,
                    m = t.isManualAck,
                    y = t.lastPinTimestamp,
                    I = t._oldestUnreadMessageId,
                    h = t.oldestUnreadMessageIdStale,
                    O = t.estimated,
                    T = t._unreadCount,
                    S = t._mentionCount,
                    v = t.flags,
                    g = t.lastViewed;
                this.channelId = n, this.type = null != r ? r : ea.ReadStateTypes.CHANNEL, this._guildId = o, this._isThread = null != i && i, null != a ? (this._isActiveThread = a, this._isJoinedThread = a) : (this._isActiveThread = null != u && u, this._isJoinedThread = null != s && s), this._persisted = !1 !== l, this.loadedMessages = null != c && c, this._lastMessageId = f, this._lastMessageTimestamp = d, this._ackMessageId = _, this._ackMessageTimestamp = E, this.ackPinTimestamp = p, this.isManualAck = null != m && m, this.lastPinTimestamp = y, this._oldestUnreadMessageId = I, this.oldestUnreadMessageIdStale = null != h && h, this.estimated = null != O && O, this._unreadCount = null != T ? T : 0, this._mentionCount = S, this.flags = v, this.lastViewed = g, e._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && e._mentionChannels.add(this.channelId)
            }
        }, {
            key: "incrementGuildUnreadsSentinel",
            value: function() {
                null != this._guildId && e.getGuildSentinels(this._guildId).unreadsSentinel++
            }
        }, {
            key: "oldestUnreadMessageId",
            get: function() {
                return this._oldestUnreadMessageId
            },
            set: function(e) {
                this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1
            }
        }, {
            key: "lastMessageId",
            get: function() {
                return this._lastMessageId
            },
            set: function(e) {
                this._lastMessageId = e, this._lastMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0
            }
        }, {
            key: "lastMessageTimestamp",
            get: function() {
                return this._lastMessageTimestamp
            }
        }, {
            key: "ackMessageId",
            get: function() {
                return this._ackMessageId
            },
            set: function(e) {
                this._ackMessageId = e, this._ackMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0
            }
        }, {
            key: "unreadCount",
            get: function() {
                var e;
                return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
            },
            set: function(e) {
                (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e
            }
        }, {
            key: "mentionCount",
            get: function() {
                return this._mentionCount
            },
            set: function(t) {
                (0 === this._mentionCount || 0 === t) && this._mentionCount !== t && this.incrementGuildUnreadsSentinel(), this._mentionCount = t, e._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && e._mentionChannels.add(this.channelId)
            }
        }, {
            key: "guessAckMessageId",
            value: function() {
                var e = q.default.getMessages(this.channelId);
                if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
                if (!this.hasMentions()) return this.lastMessageId;
                var t = null,
                    n = this.mentionCount,
                    r = ee.default.getCurrentUser();
                return e.forEach(function(e) {
                    if (n > 0 && e.author.id !== (null == r ? void 0 : r.id)) --n;
                    else if (0 === n) return t = e.id, !1
                }, this, !0), t
            }
        }, {
            key: "guildId",
            get: function() {
                if (null != this._guildId) return this._guildId;
                var e = x.default.getChannel(this.channelId);
                return this._guildId = null != e ? e.getGuildId() : null
            }
        }, {
            key: "isPrivate",
            value: function() {
                if (this.type !== ea.ReadStateTypes.CHANNEL) return !1;
                var e = x.default.getChannel(this.channelId);
                return null != e && e.isPrivate()
            }
        }, {
            key: "rebuildChannelState",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 ? arguments[2] : void 0;
                if (this.ackMessageId = null !== (o = null != e ? e : this._ackMessageId) && void 0 !== o ? o : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, n && (this.mentionCount = 0), this.hasUnread()) {
                    var o, i, a = ee.default.getCurrentUser(),
                        u = this.getAckTimestamp(),
                        s = !1,
                        l = !1,
                        c = null,
                        f = q.default.getMessages(this.channelId);
                    f.forAll(function(e) {
                        if (s) {
                            var r;
                            t.oldestUnreadMessageId = null !== (r = t._oldestUnreadMessageId) && void 0 !== r ? r : e.id
                        } else s = e.id === t._ackMessageId;
                        F.default.extractTimestamp(e.id) > u ? (t.unreadCount++, n && ew(e, a) && t.mentionCount++, c = null != c ? c : e.id) : l = !0
                    }), this.estimated = !f.hasPresent() || !(s || l) && f.length === this.unreadCount, this.oldestUnreadMessageId = null !== (i = this._oldestUnreadMessageId) && void 0 !== i ? i : c
                }
                null != r && (this.mentionCount = r)
            }
        }, {
            key: "handleGuildEventRemoval",
            value: function(e, t) {
                if (!(F.default.compare(this.ackMessageId, t) >= 0)) {
                    var n, r = O.default.getGuildScheduledEventsForGuild(e),
                        o = this.getAckTimestamp();
                    if (!isNaN(o)) {
                        var i = null !== (n = this._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(o),
                            a = null,
                            u = 0;
                        r.forEach(function(e) {
                            (0, O.isEventUpcoming)(e) && (F.default.compare(e.id, a) > 0 && (a = e.id), F.default.compare(e.id, i) > 0 && u++)
                        }), this.lastMessageId = a, this.mentionCount = u
                    }
                }
            }
        }, {
            key: "canTrackUnreads",
            value: function() {
                if (this.type !== ea.ReadStateTypes.CHANNEL) return !0;
                if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
                var e = x.default.getBasicChannel(this.channelId);
                return null != e && ("basicPermissions" in e ? w.default.has(e.basicPermissions, en.BasicPermissions.VIEW_CHANNEL) : !I.default.isChannelGated(this.guildId, this.channelId) || Q.default.can(en.Permissions.VIEW_CHANNEL, e))
            }
        }, {
            key: "canBeUnread",
            value: function() {
                return !(this._isThread && !this._isJoinedThread || (0, v.isMessageRequestOrSpamRequest)(this.channelId, [S.default, g.default]) || !this._isThread && (0, R.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < eP || !$.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
            }
        }, {
            key: "canHaveMentions",
            value: function() {
                return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, v.isMessageRequestOrSpamRequest)(this.channelId, [S.default, g.default]) || (0, R.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < eP) && this.canTrackUnreads()
            }
        }, {
            key: "getGuildChannelUnreadState",
            value: function(e, t, n, r, o) {
                if (t && (this._lastMessageTimestamp < eP || !$.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
                    mentionCount: 0,
                    unread: !1
                };
                if ("basicPermissions" in e) {
                    if (!w.default.has(e.basicPermissions, en.BasicPermissions.VIEW_CHANNEL)) return {
                        mentionCount: 0,
                        unread: !1
                    }
                } else if (I.default.isChannelGated(this.guildId, this.channelId) && !Q.default.can(en.Permissions.VIEW_CHANNEL, e)) return {
                    mentionCount: 0,
                    unread: !1
                };
                return r || o ? {
                    mentionCount: this.mentionCount,
                    unread: !1
                } : {
                    mentionCount: this.mentionCount,
                    unread: this.getAckTimestamp() < this._lastMessageTimestamp
                }
            }
        }, {
            key: "hasUnread",
            value: function() {
                return this.getAckTimestamp() < this._lastMessageTimestamp
            }
        }, {
            key: "hasRecentlyVisitedAndRead",
            value: function() {
                return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eD && M.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
            }
        }, {
            key: "isForumPostUnread",
            value: function() {
                return !!this._isActiveThread && this.hasUnread()
            }
        }, {
            key: "hasMentions",
            value: function() {
                return this.getMentionCount() > 0
            }
        }, {
            key: "getMentionCount",
            value: function() {
                return this.mentionCount
            }
        }, {
            key: "hasUnreadOrMentions",
            value: function() {
                return this.hasMentions() || this.hasUnread()
            }
        }, {
            key: "ackPins",
            value: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (this.type !== ea.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
                if (null == t) {
                    if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                    this._persisted = !0, ej(function() {
                        return d.HTTP.post({
                            url: en.Endpoints.PINS_ACK(e.channelId),
                            oldFormErrors: !0
                        })
                    })
                }
                var n = eU(t);
                return this.ackPinTimestamp = 0 !== n ? n : this.lastPinTimestamp, !0
            }
        }, {
            key: "ack",
            value: function(e) {
                var t = this,
                    n = e.messageId,
                    r = e.local,
                    o = void 0 !== r && r,
                    i = e.immediate,
                    a = e.force,
                    u = void 0 !== a && a,
                    s = e.isExplicitUserAction,
                    l = e.location,
                    c = void 0 === l ? {
                        section: en.AnalyticsSections.CHANNEL
                    } : l,
                    f = e.trackAnalytics,
                    d = void 0 === f || f;
                if (!this._shouldAck(u, o, void 0 !== s && s) || !u && !this.canTrackUnreads()) return !1;
                var _ = this.hasMentions();
                return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != n || null != (n = this.lastMessageId)) && (this.ackMessageId = n, this.isManualAck = !1, this._persisted = !0, ev && (this.ackedWhileCached = !0), function(e) {
                    if (null == e) return;
                    var t = eH.get(e);
                    if (t.type === ea.ReadStateTypes.CHANNEL) {
                        var n = x.default.getChannel(t.channelId);
                        if (null != n && n.isForumPost() && null != n.parent_id) {
                            var r = n.parent_id,
                                o = eH.get(r);
                            P.default.hasLoaded(n.guild_id) && F.default.keys(P.default.getThreadsForParent(n.guild_id, r)).every(function(e) {
                                return te.hasOpenedThread(e) || 0 > F.default.compare(e, o.ackMessageId)
                            }) && o.ack({})
                        }
                    }
                }(this.channelId), o ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(function() {
                    t.type === ea.ReadStateTypes.CHANNEL ? t._ack(c, d) : t._nonChannelAck(), t.outgoingAck = null, t.outgoingAckTimer = null
                }, _ || void 0 !== i && i ? 0 : 3e3)), this.outgoingAck = n), !0)
            }
        }, {
            key: "takeSnapshot",
            value: function() {
                var e = n("318667").default,
                    t = this.guildId;
                return {
                    unread: this.hasUnread(),
                    mentionCount: this.mentionCount,
                    guildUnread: null == t ? null : e.hasUnread(t),
                    guildMentionCount: null == t ? null : e.getMentionCount(t),
                    takenAt: Date.now()
                }
            }
        }, {
            key: "clearOutgoingAck",
            value: function() {
                this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
            }
        }, {
            key: "_shouldAck",
            value: function(e, t, n) {
                var r;
                return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== ea.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (r = x.default.getChannel(this.channelId)) || void 0 === r ? void 0 : r.isForumLikeChannel()))) || !1
            }
        }, {
            key: "_ack",
            value: function(e, t) {
                var r = this,
                    o = this.outgoingAck;
                if (null != o) {
                    var i = V.default.getId(),
                        a = eS;
                    this._persisted = !0;
                    var u = this.recalculateFlags(),
                        s = u === this.flags ? void 0 : u;
                    ej(function() {
                        return d.HTTP.post({
                            url: en.Endpoints.MESSAGE_ACK(r.channelId, o),
                            body: {
                                token: eS,
                                last_viewed: r.lastViewed,
                                flags: s
                            },
                            oldFormErrors: !0
                        })
                    }).then(function(e) {
                        null != e && (eS === a && i === V.default.getId() && (eS = e.body.token), p.default.dispatch({
                            type: "MESSAGE_ACKED"
                        }), t && n.e("99000").then(n.bind(n, "422820")).then(function(e) {
                            (0, e.default)(r.channelId)
                        }))
                    })
                }
            }
        }, {
            key: "recalculateFlags",
            value: function() {
                if (this.type === ea.ReadStateTypes.CHANNEL) {
                    var e = x.default.getChannel(this.channelId);
                    if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0
                }
            }
        }, {
            key: "_nonChannelAck",
            value: function() {
                var e, t = this.outgoingAck,
                    n = this.channelId,
                    r = this.type;
                if (null != t) {
                    switch (r) {
                        case ea.ReadStateTypes.GUILD_HOME:
                        case ea.ReadStateTypes.GUILD_EVENT:
                        case ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                            e = en.Endpoints.GUILD_FEATURE_ACK(n, t, r);
                            break;
                        case ea.ReadStateTypes.NOTIFICATION_CENTER:
                            e = en.Endpoints.USER_NON_CHANNEL_ACK(t, r);
                            break;
                        default:
                            return
                    }
                    this._persisted = !0, ej(function() {
                        return d.HTTP.post({
                            url: e,
                            body: {},
                            oldFormErrors: !0
                        })
                    })
                }
            }
        }, {
            key: "delete",
            value: function() {
                var t, n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    r = x.default.getBasicChannel(this.channelId);
                eI.log("Deleting ReadState", this.channelId, this.type, {
                    remote: n,
                    persisted: this._persisted,
                    channelMissing: null == r,
                    isOld: eX(this, eC()),
                    validType: null != r && U.ALL_CHANNEL_TYPES.has(r.type),
                    readableType: null != r && (0, U.isReadableType)(r.type),
                    oldThreadCutoff: eC(),
                    mentionCount: this.mentionCount,
                    channelId: this.channelId,
                    ackMessageId: this._ackMessageId,
                    lastMessageId: this._lastMessageId
                }), n && this._persisted && d.HTTP.del({
                    url: en.Endpoints.CHANNEL_ACK(this.channelId),
                    body: {
                        version: 2,
                        read_state_type: this.type
                    },
                    oldFormErrors: !0
                }), null === (t = e._readStates[this.type]) || void 0 === t || delete t[this.channelId], e._mentionChannels.delete(this.channelId)
            }
        }, {
            key: "shouldDeleteReadState",
            value: function(e) {
                if (0 !== K.default.totalUnavailableGuilds) return !1;
                if (null != this.type && this.type !== ea.ReadStateTypes.CHANNEL) return ! function(e) {
                    switch (e.type) {
                        case ea.ReadStateTypes.GUILD_HOME:
                        case ea.ReadStateTypes.GUILD_EVENT:
                        case ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                            return null != z.default.getGuild(e.channelId);
                        case ea.ReadStateTypes.NOTIFICATION_CENTER:
                            var t;
                            return F.default.cast(null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                        default:
                            return !0
                    }
                }(this);
                var t = x.default.getBasicChannel(this.channelId);
                if (null == t) return !!eX(this, e) || !1;
                return !!U.ALL_CHANNEL_TYPES.has(t.type) && (!(0, U.isReadableType)(t.type) || !(0, U.isPrivate)(t.type) && (!!(U.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
                    var r = e.guildId;
                    return !(null != r && P.default.isActive(r, t.parent_id, e.channelId)) && eX(e, n)
                }(this, t, e)) || !!(this.mentionCount > 0) && !Q.default.canBasicChannel(eh, t) || !1))
            }
        }, {
            key: "getAckTimestamp",
            value: function() {
                if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
                if (this._isThread) return this._ackMessageTimestamp = eK(this.guildId, this.channelId), this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
                if (this.type === ea.ReadStateTypes.GUILD_EVENT || this.type === ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = z.default.getGuild(this.channelId);
                else if ((0, eo.isStaticChannelRoute)(this.channelId)) e = z.default.getGuild(this.guildId);
                else {
                    var e, t, n = x.default.getChannel(this.channelId);
                    if (null != n) {
                        var r = n.getGuildId();
                        e = z.default.getGuild(r)
                    }
                }
                return t = null != e ? ez(e) : F.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
            }
        }, {
            key: "oldestUnreadTimestamp",
            get: function() {
                return null != this.oldestUnreadMessageId ? F.default.extractTimestamp(this.oldestUnreadMessageId) : 0
            }
        }, {
            key: "syncThreadSettings",
            value: function() {
                this._isThread = !0;
                var e = x.default.getChannel(this.channelId);
                if (null == e) return eI.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
                var t = this.guildId,
                    n = null != t && P.default.isActive(t, e.parent_id, this.channelId),
                    r = D.default.hasJoined(this.channelId);
                return (this._isActiveThread !== n || this._isJoinedThread !== r) && (this._isActiveThread = n, this._isJoinedThread = r, !0)
            }
        }, {
            key: "recordLastViewedTime",
            value: function() {
                var e = Math.ceil((Date.now() - F.DISCORD_EPOCH) / k.default.Millis.DAY);
                e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
                    force: !0,
                    trackAnalytics: !1
                }))
            }
        }], [{
            key: "forEach",
            value: function(t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = Object.keys(e._readStates)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = i.value,
                            s = null !== (d = e._readStates[parseInt(u)]) && void 0 !== d ? d : {},
                            l = !0,
                            c = !1,
                            f = void 0;
                        try {
                            for (var d, _, E = Object.keys(s)[Symbol.iterator](); !(l = (_ = E.next()).done); l = !0) {
                                var p = _.value;
                                if (!1 === t(s[p])) break
                            }
                        } catch (e) {
                            c = !0, f = e
                        } finally {
                            try {
                                !l && null != E.return && E.return()
                            } finally {
                                if (c) throw f
                            }
                        }
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
            }
        }, {
            key: "get",
            value: function(t) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL,
                    o = null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t];
                return null == o && (o = new e(t, r), null == e._readStates[r] && (e._readStates[r] = {}), e._readStates[r][t] = o), o
            }
        }, {
            key: "getGuildSentinels",
            value: function(e) {
                return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
                    unreadsSentinel: 0
                }), this._guildReadStateSentinels[e]
            }
        }, {
            key: "resetGuildSentinels",
            value: function() {
                this._guildReadStateSentinels = {}
            }
        }, {
            key: "getIfExists",
            value: function(t) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t]
            }
        }, {
            key: "getMentionChannelIds",
            value: function() {
                var t = [],
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = e._mentionChannels[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = i.value,
                            s = e.getIfExists(u);
                        null != s && s.canHaveMentions() ? t.push(u) : e._mentionChannels.delete(u)
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
                return t
            }
        }, {
            key: "getValue",
            value: function(t) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL,
                    o = arguments.length > 2 ? arguments[2] : void 0,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    a = null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t];
                return null == a ? i : o(a)
            }
        }, {
            key: "clear",
            value: function(t) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return (null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t]) != null && (delete e._readStates[r][t], e._mentionChannels.delete(t), !0)
            }
        }, {
            key: "clearAll",
            value: function() {
                e._readStates = {}, e._mentionChannels.clear()
            }
        }]), e
    }();

    function ex(e) {
        e.forEach(function(e) {
            if ((0, U.isReadableType)(e.type)) {
                var t = eH.get(e.id);
                t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eU(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(eo.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), U.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
            }
        })
    }

    function eY(e) {
        e.forEach(function(e) {
            if ((0, U.isReadableType)(e.type)) {
                var t, n = eH.get(e.id);
                n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eU(e.last_pin_timestamp), n._isResourceChannel = (0, G.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, eo.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), U.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
            }
        })
    }

    function eW(e) {
        (function(e) {
            var t;
            null === (t = e.threads) || void 0 === t || t.forEach(function(t) {
                if (U.ALL_CHANNEL_TYPES.has(t.type)) {
                    var n = eH.get(t.id);
                    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eU(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(eK(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eK(e.id, t.id))
                }
            })
        })(e),
        function(e) {
            if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) !== 0 || null != eH.getIfExists(e.id, ea.ReadStateTypes.GUILD_EVENT)) {
                var t, n, r = eH.get(e.id, ea.ReadStateTypes.GUILD_EVENT);
                r._guildId = e.id;
                var o = 0,
                    i = null,
                    a = null !== (n = r._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(r.getAckTimestamp());
                e.guild_scheduled_events.forEach(function(e) {
                    F.default.compare(e.id, i) > 0 && (i = e.id), F.default.compare(e.id, a) > 0 && o++
                }), r.lastMessageId = i, r.mentionCount = o
            }
        }(e),
        function(e) {
            eH.get(e.id, ea.ReadStateTypes.GUILD_HOME).lastMessageId = F.default.fromTimestamp(c()(Date.now()).subtract(24, "h").valueOf())
        }(e),
        function(e) {
            var t = z.default.getGuild(e.id);
            if (null != t) {
                var n = null == t ? void 0 : t.latestOnboardingQuestionId;
                if (null != n) {
                    var r = eH.get(t.id, ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                    r._guildId = t.id, r.lastMessageId = n
                }
            }
        }(e)
    }
    e_(eH, "_guildReadStateSentinels", {}), e_(eH, "_readStates", {}), e_(eH, "_mentionChannels", new Set);

    function eK(e, t) {
        var n, r, o, i = x.default.getChannel(t),
            a = z.default.getGuild(null != e ? e : null == i ? void 0 : i.guild_id),
            u = (null == i ? void 0 : i.isForumPost()) ? 0 : ez(a),
            s = (null !== (o = null === (n = D.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== o ? o : 0) - 5e3,
            l = null == i ? void 0 : null === (r = i.threadMetadata) || void 0 === r ? void 0 : r.archiveTimestamp,
            c = Math.max(s, null != l ? new Date(l).getTime() - 1 : 0);
        return c <= 0 && (c = F.default.extractTimestamp(t) - 1), isNaN(u) ? c : Math.max(u, c)
    }

    function ez(e) {
        if (null != e && null != e.joinedAt) {
            var t, n;
            if (t = e.joinedAt, null != (n = Date) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n) return e.joinedAt.getTime();
            if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
            else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
        }
        return Date.now()
    }

    function eX(e, t) {
        return !!(e.mentionCount > 0) || !(F.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && F.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && F.default.compare(e._lastMessageId, t) > 0) && !0
    }

    function eq(e) {
        if (null != e) {
            var t = eH.get(e);
            if (eV(t)) return t.ack({})
        }
        return !1
    }

    function eQ() {
        null != eb && clearTimeout(eb)
    }

    function eJ(e) {
        if (null != e.channelUpdates) {
            var t;
            ex(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
        }
        if (null != e.channelTimestampUpdates) {
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e.channelTimestampUpdates[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value,
                        s = eH.get(u.id);
                    null != u.last_message_id && (s.lastMessageId = u.last_message_id), null != u.last_pin_timestamp && (s.lastPinTimestamp = eU(u.last_pin_timestamp))
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
        }
    }

    function eZ(e) {
        var t = e.channelId;
        eH.get(t).rebuildChannelState()
    }

    function e$(e) {
        eY(e.threads)
    }

    function e0(e) {
        var t = e.messages,
            n = e.threads,
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value;
                eY(s.map(function(e) {
                    return e.thread
                }).filter(B.isNotNullish))
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != u.return && u.return()
            } finally {
                if (o) throw i
            }
        }
        eY(n)
    }

    function e1(e) {
        var t = ee.default.getCurrentUser();
        return null != e.creator_id && null != t && e.creator_id === t.id
    }

    function e2(e) {
        var t = e.channel;
        return eH.clear(t.id)
    }

    function e3() {
        var e = H.default.getCurrentSidebarChannelId(eO),
            t = !1;
        return eT !== e ? (t = e6(eT), eT = e) : t = eq(e) || t, t
    }

    function e4(e) {
        null != e && (eH.get(e).isManualAck = !1)
    }

    function e6(e) {
        if (null == e) return !1;
        var t = eH.get(e);
        return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
    }

    function e8(e) {
        var t = e.channelId,
            n = e.messageId,
            r = e.manual,
            o = e.newMentionCount,
            i = eH.get(t);
        return r ? (i.rebuildChannelState(n, !0, o), !0) : n !== i._ackMessageId && i.ack({
            messageId: n,
            local: !0
        })
    }

    function e7(e) {
        return e9(e.id, e.ackType, e.ackedId, e.local)
    }

    function e9(e, t, n, r) {
        var o, i = eH.get(e, t);
        return n !== i.ackMessageId && i.lastMessageId !== i.ackMessageId && (null != i.lastMessageId || 0 !== i.mentionCount) && (n = null !== (o = null != n ? n : i.lastMessageId) && void 0 !== o ? o : F.default.fromTimestamp(i.getAckTimestamp()), i.ack({
            messageId: n,
            local: null == r || r
        }))
    }
    var e5 = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ep(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = eE(t);
            if (n) {
                var a = eE(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function o() {
            return ec(this, o), r.apply(this, arguments)
        }
        return ed(o, [{
            key: "initialize",
            value: function() {
                this.waitFor(Y.default, ee.default, z.default, K.default, x.default, Z.default, q.default, Q.default, y.default, P.default, D.default, H.default, O.default, W.default, I.default, $.default, et.default, b.default, S.default, M.default, g.default), this.syncWith([H.default], e3)
            }
        }, {
            key: "getReadStatesByChannel",
            value: function() {
                var e;
                return null !== (e = eH._readStates[ea.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
            }
        }, {
            key: "getForDebugging",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getIfExists(e, t)
            }
        }, {
            key: "getNotifCenterReadState",
            value: function(e) {
                var t;
                return null === (t = eH._readStates[ea.ReadStateTypes.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e]
            }
        }, {
            key: "hasUnread",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.canBeUnread() && e.hasUnread()
                }, !1)
            }
        }, {
            key: "hasTrackedUnread",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.canTrackUnreads() && e.hasUnread()
                }, !1)
            }
        }, {
            key: "isForumPostUnread",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.isForumPostUnread()
                }, !1)
            }
        }, {
            key: "getUnreadCount",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.canBeUnread() ? e.unreadCount : 0
                }, 0)
            }
        }, {
            key: "getMentionCount",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.canHaveMentions() ? e.getMentionCount() : 0
                }, 0)
            }
        }, {
            key: "getGuildChannelUnreadState",
            value: function(e, t, n, r, o) {
                return eH.getValue(e.id, ea.ReadStateTypes.CHANNEL, function(i) {
                    return i.getGuildChannelUnreadState(e, t, n, r, o)
                }, {
                    mentionCount: 0,
                    unread: !1
                })
            }
        }, {
            key: "hasRecentlyVisitedAndRead",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.hasRecentlyVisitedAndRead()
                }, !1)
            }
        }, {
            key: "ackMessageId",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.canBeUnread() ? e.ackMessageId : null
                }, null)
            }
        }, {
            key: "getTrackedAckMessageId",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.canTrackUnreads() ? e._ackMessageId : null
                }, null)
            }
        }, {
            key: "lastMessageId",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.lastMessageId
                }, null)
            }
        }, {
            key: "lastMessageTimestamp",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.lastMessageTimestamp
                }, 0)
            }
        }, {
            key: "lastPinTimestamp",
            value: function(e) {
                return eH.getValue(e, ea.ReadStateTypes.CHANNEL, function(e) {
                    return e.lastPinTimestamp
                }, null)
            }
        }, {
            key: "getOldestUnreadMessageId",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.canTrackUnreads() ? e.oldestUnreadMessageId : null
                }, null)
            }
        }, {
            key: "getOldestUnreadTimestamp",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0
                }, 0)
            }
        }, {
            key: "isEstimated",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e.estimated
                }, !1)
            }
        }, {
            key: "hasOpenedThread",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
                return eH.getValue(e, t, function(e) {
                    return e._persisted
                }, !1)
            }
        }, {
            key: "hasUnreadPins",
            value: function(e) {
                return eH.getValue(e, ea.ReadStateTypes.CHANNEL, function(e) {
                    return e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp
                }, !1)
            }
        }, {
            key: "isNewForumThread",
            value: function(e, t, n) {
                var r = eH.get(t);
                if (!0 === eH.get(e)._persisted || null == r.ackMessageIdAtChannelSelect || 0 >= F.default.compare(e, r.ackMessageIdAtChannelSelect)) return !1;
                var o = ez(n);
                return F.default.extractTimestamp(e) > o
            }
        }, {
            key: "getAllReadStates",
            value: function(e) {
                var t = [];
                return eH.forEach(function(n) {
                    switch (n.type) {
                        case ea.ReadStateTypes.GUILD_HOME:
                        case ea.ReadStateTypes.GUILD_EVENT:
                        case ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                            null != z.default.getGuild(n.channelId) && t.push(n.serialize(e));
                            break;
                        case ea.ReadStateTypes.NOTIFICATION_CENTER:
                            var r;
                            F.default.cast(null === (r = ee.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) === n.channelId && t.push(n.serialize(e));
                            break;
                        default:
                            t.push(n.serialize(e))
                    }
                }), t
            }
        }, {
            key: "getGuildUnreadsSentinel",
            value: function(e) {
                return eH.getGuildSentinels(e).unreadsSentinel
            }
        }, {
            key: "getMentionChannelIds",
            value: function() {
                return eH.getMentionChannelIds()
            }
        }, {
            key: "getSnapshot",
            value: function(e, t) {
                var n = eH.get(e);
                return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
            }
        }]), o
    }(f.default.Store);
    e_(e5, "displayName", "ReadStateStore");
    var te = new e5(p.default, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
            var t = e.changesByChannelId;
            for (var n in t) {
                var r = t[n],
                    o = eH.getIfExists(n);
                if (null != o) {
                    var i = [null === (l = r.new_messages) || void 0 === l ? void 0 : l[0]].concat(null !== (c = r.modified_messages) && void 0 !== c ? c : []).filter(B.isNotNullish),
                        a = !0,
                        u = !1,
                        s = void 0;
                    try {
                        for (var l, c, f, d = i[Symbol.iterator](); !(a = (f = d.next()).done); a = !0) {
                            var _ = f.value;
                            1 === F.default.compare(_.id, o.lastMessageId) && (o.lastMessageId = _.id)
                        }
                    } catch (e) {
                        u = !0, s = e
                    } finally {
                        try {
                            !a && null != d.return && d.return()
                        } finally {
                            if (u) throw s
                        }
                    }
                }
            }
        },
        CONNECTION_OPEN: function(e) {
            var t = e.guilds,
                n = e.relationships,
                r = e.initialPrivateChannels,
                o = e.readState;
            eM(), eS = null, !ev && !o.partial && eH.clearAll(), ev = !1, o.entries.forEach(function(e) {
                var t, n, r, o = null !== (n = e.read_state_type) && void 0 !== n ? n : ea.ReadStateTypes.CHANNEL;
                if (o !== ea.ReadStateTypes.CHANNEL) {
                    ;
                    e = {
                        id: (t = e).id,
                        read_state_type: t.read_state_type,
                        mention_count: t.badge_count,
                        last_message_id: t.last_acked_id
                    }
                }
                var i = eH.get(e.id, o);
                i._persisted = !0, i._mentionCount = null !== (r = e.mention_count) && void 0 !== r ? r : 0, i.flags = e.flags, i.lastViewed = e.last_viewed;
                var a = x.default.getBasicChannel(e.id);
                null != a && (0, U.isThread)(a.type) && (null == e.last_message_id || 0 === e.last_message_id) ? i.ackMessageId = F.default.fromTimestamp(eK(a.guild_id, a.id)) : i.ackedWhileCached ? -1 === F.default.compare(i.ackMessageId, e.last_message_id) && (i.ackMessageId = e.last_message_id) : i.ackMessageId = e.last_message_id, i.ackedWhileCached = void 0, i.ackPinTimestamp = eU(e.last_pin_timestamp), eH._mentionChannels.delete(i.channelId), i._mentionCount > 0 && i.canHaveMentions() && eH._mentionChannels.add(i.channelId)
            }), eH.resetGuildSentinels();
            var i = null === (l = ee.default.getCurrentUser()) || void 0 === l ? void 0 : l.id;
            null != i && (eH.get(i, ea.ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = F.default.fromTimestamp(Date.now())),
                function(e) {
                    var t = ee.default.getCurrentUser();
                    if (!(0, N.inNotificationCenterEnabled)() || null == t) return 0;
                    var n = eH.get(t.id, ea.ReadStateTypes.NOTIFICATION_CENTER);
                    e.forEach(function(e) {
                        if (null != e.since) {
                            if (e.type === en.RelationshipTypes.PENDING_INCOMING) {
                                var t = new Date(e.since).getTime();
                                (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = F.default.fromTimestamp(t))
                            }
                        }
                    })
                }(n), ex(r);
            var a = !0,
                u = !1,
                s = void 0;
            try {
                for (var l, c, f = t[Symbol.iterator](); !(a = (c = f.next()).done); a = !0) {
                    var d, _ = c.value;
                    ex(null !== (d = _.channels) && void 0 !== d ? d : []), eJ(_), eW(_)
                }
            } catch (e) {
                u = !0, s = e
            } finally {
                try {
                    !a && null != f.return && f.return()
                } finally {
                    if (u) throw s
                }
            }
            eQ(), eb = setTimeout(function() {
                return function(e) {
                    var t = eC(),
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u, s = i.value,
                                l = null !== (u = s.read_state_type) && void 0 !== u ? u : ea.ReadStateTypes.CHANNEL,
                                c = eH.get(s.id, l);
                            c.shouldDeleteReadState(t) && c.delete()
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
                }(o.entries)
            }, 10 * k.default.Millis.SECOND)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            ex(e.lazyPrivateChannels)
        },
        LOGOUT: eQ,
        OVERLAY_INITIALIZE: function(e) {
            var t = e.readStates,
                n = e.selectedChannelId;
            eM(), eS = null, eO = n, eT = H.default.getCurrentSidebarChannelId(eO), eH.clearAll(), t.forEach(function(e) {
                var t = eH.get(e.channelId);
                t.deserializeForOverlay(e), t.type === ea.ReadStateTypes.CHANNEL && t.rebuildChannelState()
            })
        },
        CACHE_LOADED: function(e) {
            var t = e.readStates;
            ev = !0, eM(), t.forEach(function(e) {
                var t, n = null !== (t = e.type) && void 0 !== t ? t : ea.ReadStateTypes.CHANNEL;
                e.type = n, null == eH._readStates[n] && (eH._readStates[n] = {}), eH._readStates[n][e.channelId] = (0, E.dangerouslyCast)(e, eH)
            })
        },
        GUILD_CREATE: function(e) {
            var t, n = e.guild,
                r = eC();
            eH.forEach(function(e) {
                e.guildId === n.id && e.shouldDeleteReadState(r) && e.delete(!1)
            }), ex(null !== (t = n.channels) && void 0 !== t ? t : []), eJ(n), eW(n)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            var t = e.channelId,
                n = e.isAfter,
                r = e.messages,
                o = eH.get(t);
            o.loadedMessages = !0;
            var i = q.default.getMessages(t);
            null != i && (r.length > 0 && 1 === F.default.compare(r[0].id, o.ackMessageId) && 0 === o.unreadCount ? o.rebuildChannelState() : i.hasPresent() || i.jumpTargetId === o.ackMessageId ? o.rebuildChannelState() : n && null != o.ackMessageId && i.has(o.ackMessageId, !0) && (o.unreadCount += r.length, null == o.oldestUnreadMessageId && o.rebuildChannelState())), eY(r.map(function(e) {
                return e.thread
            }).filter(B.isNotNullish))
        },
        MESSAGE_CREATE: function(e) {
            var t = e.channelId,
                n = e.message,
                r = e.isPushNotification,
                i = eH.get(t);
            i.lastMessageId = n.id;
            var a = ee.default.getCurrentUser(),
                u = x.default.getBasicChannel(t);
            if (null != n.author && null != a && n.author.id === a.id) return null != i.outgoingAck && i.clearOutgoingAck(), e8({
                channelId: t,
                messageId: n.id,
                manual: !1
            });
            var s = (0, T.getRootNavigationRefIfInExperiment)();
            if ((null == s ? void 0 : s.isReady()) === !0) {
                var l, c, f, d = s.getCurrentRoute();
                y.default.getChatOpen(i.channelId) ? l = i.channelId : (null == d ? void 0 : d.name) === "channel" ? l = d.params.channelId : (null == d ? void 0 : d.name) === "guilds" && (l = null === (f = d.params) || void 0 === f ? void 0 : f.channelId)
            } else null == s && (l = Z.default.getChannelId(), c = H.default.getCurrentSidebarChannelId(l));
            var _ = l === t || c === t;
            if (_ && eV(i) && !r || null != o && o.isInstanceFocused() && _ && o.isInstanceUILocked() && o.isPinned(en.OverlayWidgets.TEXT)) return i.ack({
                messageId: n.id
            });
            (null == i.oldestUnreadMessageId || i.oldestUnreadMessageIdStale) && (i.oldestUnreadMessageId = n.id), i.unreadCount++, !(null != n.author && J.default.isBlocked(n.author.id) || n.type === en.MessageTypes.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === en.ChannelTypes.GROUP_DM) && function(e, t, n) {
                if (null != t && (0, A.isRawMessageMentioned)({
                        rawMessage: e,
                        userId: t.id,
                        suppressEveryone: $.default.isSuppressEveryoneEnabled(n.guildId),
                        suppressRoles: $.default.isSuppressRolesEnabled(n.guildId)
                    })) return !0;
                var r = x.default.getChannel(e.channel_id);
                return !!ek(r) || !!$.default.mentionOnAllMessages && null != r && !r.isVocal() && !$.default.isChannelMuted(r.guild_id, r.id) && $.default.resolvedMessageNotifications(r) === en.UserNotificationSettings.ALL_MESSAGES || !1
            }(n, a, i) && i.mentionCount++
        },
        MESSAGE_DELETE: eZ,
        MESSAGE_DELETE_BULK: eZ,
        MESSAGE_ACK: e8,
        CHANNEL_ACK: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = void 0 === n ? void 0 : n,
                o = e.immediate,
                i = e.force,
                a = e.context,
                u = e.location,
                s = eH.get(t),
                l = s.ack({
                    messageId: r,
                    local: a !== en.CURRENT_APP_CONTEXT,
                    immediate: void 0 !== o && o,
                    force: void 0 !== i && i,
                    isExplicitUserAction: !0,
                    location: u
                });
            return null != r ? (s.rebuildChannelState(), !0) : l
        },
        CHANNEL_LOCAL_ACK: function(e) {
            var t = e.channelId;
            return eH.get(t).ack({
                messageId: void 0,
                local: !0,
                immediate: void 0,
                force: void 0,
                isExplicitUserAction: !0
            })
        },
        CHANNEL_PINS_ACK: function(e) {
            var t = e.channelId,
                n = e.timestamp;
            return eH.get(t).ackPins(n)
        },
        CHANNEL_PINS_UPDATE: function(e) {
            var t = e.channelId,
                n = e.lastPinTimestamp,
                r = eH.get(t),
                o = eU(n);
            return r.lastPinTimestamp !== o && (r.lastPinTimestamp = o, !0)
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId,
                n = H.default.getCurrentSidebarChannelId(t),
                r = x.default.getChannel(t);
            if (null != r) {
                var o, i = eH.get(r.id);
                i.ackMessageIdAtChannelSelect = null !== (o = i.ackMessageId) && void 0 !== o ? o : F.default.fromTimestamp(i.getAckTimestamp()), i.recordLastViewedTime()
            }
            e4(eO), e4(eT);
            var a = !1;
            return eO !== t && (a = e6(eO) || a, a = e6(eT) || a), (eO === t || (null == r ? void 0 : r.type) != null && en.ChannelTypesSets.GUILD_THREADS_ONLY.has(r.type)) && (a = eq(t) || a), eO === t && (a = eq(n) || a), eO = t, eT = n, a
        },
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            if (null != t) {
                var n = eH.get(t);
                if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
                    isExplicitUserAction: !0
                })
            }
        },
        CHANNEL_CREATE: function(e) {
            var t = e.channel;
            if (!(0, U.isReadableType)(t.type)) return !1;
            var n = eH.get(t.id);
            n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eU(t.lastPinTimestamp)
        },
        THREAD_CREATE: function(e) {
            var t = e.channel;
            (function(e) {
                if (!U.ALL_CHANNEL_TYPES.has(e.type)) return 0;
                var t = eH.get(e.id);
                t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eU(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === V.default.getId() && (t.loadedMessages = !0)
            })(t),
            function(e) {
                var t = e.parent_id;
                eH.get(t).lastMessageId = e.id;
                var n = ee.default.getCurrentUser();
                if (e.ownerId === (null == n ? void 0 : n.id)) eH.get(e.id)._persisted = !0, e8({
                    channelId: t,
                    messageId: e.id,
                    manual: !1
                })
            }(t)
        },
        THREAD_UPDATE: function(e) {
            var t = e.channel;
            return !!U.ALL_CHANNEL_TYPES.has(t.type) && eH.get(t.id).syncThreadSettings()
        },
        THREAD_LIST_SYNC: function(e) {
            e.threads.forEach(function(e) {
                if (U.ALL_CHANNEL_TYPES.has(e.type)) {
                    var t = eH.get(e.id);
                    if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eU(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = D.default.hasJoined(e.id), e.isForumPost()) {
                        var n = eH.get(e.parent_id);
                        0 > F.default.compare(n.lastMessageId, e.id) && (n.lastMessageId = e.id)
                    }
                }
            })
        },
        LOAD_THREADS_SUCCESS: e$,
        LOAD_ARCHIVED_THREADS_SUCCESS: e$,
        SEARCH_FINISH: e0,
        MOD_VIEW_SEARCH_FINISH: e0,
        THREAD_MEMBER_UPDATE: function(e) {
            var t = e.id;
            return eH.get(t).syncThreadSettings()
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            return (0, L.doesThreadMembersActionAffectMe)(e) && eH.get(e.id).syncThreadSettings()
        },
        CHANNEL_DELETE: e2,
        THREAD_DELETE: e2,
        WINDOW_FOCUS: function(e) {
            var t = !1,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = F.default.entries(eN)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u, s, l = (u = i.value, s = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(u) || function(e, t) {
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
                        }(u, s) || em(u, s) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        c = l[0];
                    l[1] === e.windowId && (t = function(e, t) {
                        if (null == e) return !1;
                        var n = eH.get(e);
                        return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eq(e)
                    }(c, e.focused) || t)
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
            return t
        },
        UPDATE_CHANNEL_DIMENSIONS: function(e) {
            return eq(e.channelId)
        },
        CURRENT_USER_UPDATE: function() {
            eS = null
        },
        DRAWER_OPEN: function() {
            if (null != eO) {
                var e = eH.get(eO);
                !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
            }
            return !1
        },
        DRAWER_CLOSE: function() {
            return eq(eO)
        },
        BULK_ACK: function(e) {
            var t = e.channels,
                n = e.context,
                r = e.onFinished;
            ! function(e, t, n) {
                if (e.forEach(function(e) {
                        var t = e.channelId,
                            n = e.messageId,
                            r = e.readStateType;
                        eH.get(t, r).ack({
                            messageId: n,
                            local: !0,
                            immediate: void 0,
                            force: void 0,
                            isExplicitUserAction: !0
                        })
                    }), t === en.CURRENT_APP_CONTEXT) {
                    var r;
                    eg.push.apply(eg, function(e) {
                        if (Array.isArray(e)) return eu(e)
                    }(r = e.map(function(e) {
                        return {
                            channel_id: e.channelId,
                            message_id: e.messageId,
                            read_state_type: e.readStateType
                        }
                    })) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(r) || em(r) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()), !eA && eG(n)
                }
            }(t.filter(function(e) {
                return null != e.messageId && te.hasUnread(e.channelId, e.readStateType)
            }), n, r)
        },
        ENABLE_AUTOMATIC_ACK: function(e) {
            var t = e.channelId,
                n = e.windowId;
            return eN[t] !== n && (s()(void 0 === eN[t], "handleEnableAutomaticAck: channel already visible in another window"), eN[t] = n, eq(t))
        },
        DISABLE_AUTOMATIC_ACK: function(e) {
            return eN[e.channelId] = void 0, !1
        },
        GUILD_FEATURE_ACK: e7,
        GUILD_SCHEDULED_EVENT_CREATE: function(e) {
            var t = e.guildScheduledEvent,
                n = t.guild_id,
                r = eH.get(t.guild_id, ea.ReadStateTypes.GUILD_EVENT);
            if (r.lastMessageId = t.id, e1(t)) {
                e7({
                    type: "GUILD_FEATURE_ACK",
                    id: n,
                    ackType: ea.ReadStateTypes.GUILD_EVENT,
                    ackedId: t.id,
                    local: !1
                });
                return
            }!$.default.isMuteScheduledEventsEnabled(n) && r.mentionCount++
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
            var t = e.guildScheduledEvent,
                n = t.guild_id;
            if (e1(t) || ![ei.GuildScheduledEventStatus.CANCELED, ei.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
            eH.get(n, ea.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
        },
        GUILD_SCHEDULED_EVENT_DELETE: function(e) {
            var t = e.guildScheduledEvent,
                n = t.guild_id;
            if (e1(t)) return !1;
            eH.get(t.guild_id, ea.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            return eH.clear(t.id, ea.ReadStateTypes.GUILD_EVENT)
        },
        GUILD_UPDATE: function(e) {
            var t = e.guild,
                n = t.latest_onboarding_question_id;
            if (null != n) {
                var r = eH.get(t.id, ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                r._guildId = t.id, r.lastMessageId = n
            }
        },
        RESORT_THREADS: function(e) {
            return eq(e.channelId)
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
            e.channelId, e.chatOpen
        },
        DECAY_READ_STATES: eM,
        NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
            var t, n = e.item;
            if (!(0, N.inNotificationCenterEnabled)()) return !1;
            var r = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == r) return !1;
            var o = eH.get(r, ea.ReadStateTypes.NOTIFICATION_CENTER);
            o.lastMessageId = n.id;
            if (0, b.default.active) {
                e9(r, ea.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
                return
            }
            o.mentionCount++
        },
        RELATIONSHIP_ADD: function(e) {
            var t = ee.default.getCurrentUser();
            if (!(0, N.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== en.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== en.RelationshipTypes.FRIEND) return !1;
            var n = eH.get(t.id, ea.ReadStateTypes.NOTIFICATION_CENTER),
                r = e.relationship.type === en.RelationshipTypes.FRIEND,
                o = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                i = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
            i < o && (n.lastMessageId = F.default.fromTimestamp(o), (0, b.default.active) ? e9(t.id, ea.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++)
        },
        RELATIONSHIP_REMOVE: function(e) {
            var t = ee.default.getCurrentUser();
            if (!(0, N.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== en.RelationshipTypes.PENDING_INCOMING) return !1;
            var n = eH.get(t.id, ea.ReadStateTypes.NOTIFICATION_CENTER),
                r = new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) <= r && (n.mentionCount = Math.max(0, n.mentionCount - 1))
        },
        NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
            var t, n = e.ids;
            if (e.optimistic || !(0, N.inNotificationCenterEnabled)() || b.default.active) return !1;
            var r = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == r) return !1;
            var o = eH.get(r, ea.ReadStateTypes.NOTIFICATION_CENTER);
            n.forEach(function(e) {
                0 > F.default.compare(o.ackMessageId, e) && (o.mentionCount = Math.max(o.mentionCount - 1, 0))
            })
        },
        USER_NON_CHANNEL_ACK: function(e) {
            var t, n = e.ackType,
                r = e.ackedId,
                o = e.local,
                i = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            return null != i && e9(i, n, r, o)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t = !1,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a, u = (null !== (i = e.channels) && void 0 !== i ? i : [])[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                    var s = a.value,
                        l = eH.get(s.id),
                        c = eU(s.lastPinTimestamp);
                    (l.lastMessageId !== s.lastMessageId || l.lastPinTimestamp !== c) && (t = !0, l.lastMessageId = s.lastMessageId, l.lastPinTimestamp = c)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != u.return && u.return()
                } finally {
                    if (r) throw o
                }
            }
            return t
        },
        CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
            return e6(e.channelId)
        },
        TRY_ACK: function(e) {
            return eq(e.channelId)
        }
    });
    t.default = te
}