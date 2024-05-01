function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        shouldBadgeMessage: function() {
            return eC
        }
    }), n("47120"), n("411104"), n("653041"), n("789020");
    var r, a, s, o = n("512722"),
        l = n.n(o),
        u = n("913527"),
        d = n.n(u),
        _ = n("442837"),
        c = n("544891"),
        E = n("846519"),
        I = n("283693"),
        T = n("570140"),
        f = n("317381"),
        S = n("358221"),
        h = n("430198"),
        A = n("710845"),
        m = n("924301"),
        N = n("57132"),
        p = n("355298"),
        O = n("869404"),
        R = n("333984"),
        C = n("572804"),
        g = n("140155"),
        L = n("178480"),
        v = n("398758"),
        D = n("344185"),
        M = n("569471"),
        y = n("195663"),
        P = n("581883"),
        U = n("131704"),
        b = n("386438"),
        G = n("70956"),
        w = n("630388"),
        B = n("823379"),
        k = n("931619"),
        V = n("709054"),
        x = n("314897"),
        F = n("433355"),
        H = n("592125"),
        Y = n("796974"),
        j = n("828695"),
        W = n("486472"),
        K = n("430824"),
        z = n("517100"),
        Z = n("375954"),
        X = n("496675"),
        Q = n("699516"),
        q = n("944486"),
        J = n("9156"),
        $ = n("594174"),
        ee = n("451478"),
        et = n("981631"),
        en = n("918559"),
        ei = n("176505"),
        er = n("765305"),
        ea = n("490897");

    function es(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let eo = new A.default("ReadStateStore");
    __OVERLAY__ && (i = n("237997").default);
    let el = et.BasicPermissions.VIEW_CHANNEL | et.BasicPermissions.READ_MESSAGE_HISTORY,
        eu = null,
        ed = null,
        e_ = null,
        ec = !1,
        eE = [],
        eI = !1,
        eT = null,
        ef = {},
        eS = !1,
        eh = 30 * G.default.Millis.DAY;

    function eA() {
        return V.default.fromTimestamp(Date.now() - eh)
    }
    let em = 0,
        eN = 0,
        ep = null;

    function eO() {
        em = Date.now() - 7 * G.default.Millis.DAY, eN = Date.now() - 3 * G.default.Millis.DAY, clearTimeout(ep), ep = setTimeout(() => {
            T.default.dispatch({
                type: "DECAY_READ_STATES"
            })
        }, 1 * G.default.Millis.HOUR)
    }

    function eR(e) {
        if (null == e) return 0;
        let t = Date.parse(e);
        return isNaN(t) ? 0 : t
    }

    function eC(e, t) {
        let n = H.default.getChannel(e.channel_id);
        return !(null == n || Q.default.isBlocked(e.author.id)) && (!!((0, C.default)({
            message: e,
            userId: t.id,
            suppressEveryone: J.default.isSuppressEveryoneEnabled(n.guild_id),
            suppressRoles: J.default.isSuppressRolesEnabled(n.guild_id)
        }) || eg(n)) || !1)
    }

    function eg(e) {
        return null != e && e.isPrivate() && !J.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
    }
    async function eL(e) {
        if (0 === eE.length) {
            eI = !1, null == e || e();
            return
        }
        eI = !0;
        let t = eE.splice(0, 100);
        await ev(() => c.HTTP.post({
            url: et.Endpoints.BULK_ACK,
            body: {
                read_states: t
            },
            oldFormErrors: !0
        })), await (0, E.timeoutPromise)(1e3), eL(e)
    }
    async function ev(e) {
        let t = x.default.getId();
        for (let n = 0; n < 3; n++) try {
            return await e()
        } catch (e) {
            if (eo.error("", e), n + 1 < 3 && (await (0, E.timeoutPromise)((n + 1) * 2e3), await k.default.awaitOnline(), t !== x.default.getId())) return Promise.reject(Error("User changed."))
        }
    }

    function eD(e) {
        if (e.type !== ea.ReadStateTypes.CHANNEL) return !1;
        let t = H.default.getChannel(e.channelId),
            n = null != t && t.isForumPost();
        if (null != f.default.getConnectedActivityChannelId() && f.default.getActivityPanelMode() === en.ActivityPanelModes.PANEL && f.default.getFocusedLayout() === en.FocusedActivityLayouts.NO_CHAT || z.default.isIdle() || !e.canTrackUnreads()) return !1;
        if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
            let t = ef[e.channelId],
                n = null != t && ee.default.isFocused(t),
                r = null != i && i.isInstanceFocused() && i.isPinned(et.OverlayWidgets.TEXT);
            if (!n && !r) return !1
        }
        if (n && !e._persisted) return !0;
        if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || !(n && !e._isJoinedThread) && !Y.default.isAtBottom(e.channelId)) return !1;
        let r = S.default.getLayout(e.channelId),
            a = S.default.getChatOpen(e.channelId);
        if (!a && (r === et.ChannelLayouts.NO_CHAT || r === et.ChannelLayouts.FULL_SCREEN) || null == ef[e.channelId]) return !1;
        let s = Z.default.getMessages(e.channelId);
        return null != s && !!s.ready && !s.loadingMore && (!eS || !!a) && !0
    }(s = r || (r = {}))[s.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", s[s.IS_THREAD = 2] = "IS_THREAD";
    class eM {
        static forEach(e) {
            for (let n of Object.keys(eM._readStates)) {
                var t;
                let i = null !== (t = eM._readStates[parseInt(n)]) && void 0 !== t ? t : {};
                for (let t of Object.keys(i))
                    if (!1 === e(i[t])) break
            }
        }
        static get(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL,
                i = null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e];
            return null == i && (i = new eM(e, n), null == eM._readStates[n] && (eM._readStates[n] = {}), eM._readStates[n][e] = i), i
        }
        static getGuildSentinels(e) {
            return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
                unreadsSentinel: 0
            }), this._guildReadStateSentinels[e]
        }
        static resetGuildSentinels() {
            this._guildReadStateSentinels = {}
        }
        static getIfExists(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e]
        }
        static getMentionChannelIds() {
            let e = [];
            for (let t of eM._mentionChannels) {
                let n = eM.getIfExists(t);
                null != n && n.canHaveMentions() ? e.push(t) : eM._mentionChannels.delete(t)
            }
            return e
        }
        static getValue(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL,
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                a = null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e];
            return null == a ? r : i(a)
        }
        static clear(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return (null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eM._readStates[n][e], eM._mentionChannels.delete(e), !0)
        }
        static clearAll() {
            eM._readStates = {}, eM._mentionChannels.clear()
        }
        serialize(e) {
            let {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: r,
                _isActiveThread: a,
                _isJoinedThread: s,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: d,
                _ackMessageId: _,
                _ackMessageTimestamp: c,
                ackPinTimestamp: E,
                isManualAck: I,
                lastPinTimestamp: T,
                _oldestUnreadMessageId: f,
                oldestUnreadMessageIdStale: S,
                estimated: h,
                _mentionCount: A,
                flags: m,
                lastViewed: N
            } = this;
            if (e) return {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: r,
                _isActiveThread: a,
                _isJoinedThread: s,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: d,
                _ackMessageId: _,
                _ackMessageTimestamp: c,
                ackPinTimestamp: E,
                isManualAck: I,
                lastPinTimestamp: T,
                _oldestUnreadMessageId: f,
                oldestUnreadMessageIdStale: S,
                estimated: h,
                _mentionCount: A,
                flags: m,
                lastViewed: N
            };
            let p = {
                channelId: t,
                type: n,
                _guildId: i,
                _persisted: o,
                _lastMessageId: u,
                _lastMessageTimestamp: d,
                _ackMessageId: _,
                _ackMessageTimestamp: c,
                ackPinTimestamp: E,
                lastPinTimestamp: T,
                _mentionCount: A,
                flags: m
            };
            return null != N && N > 0 && (p.lastViewed = N), r && (p._isThread = r, p._isActiveThread = a, p._isJoinedThread = s), p
        }
        deserializeForOverlay(e) {
            let {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: r,
                _isActiveJoinedThread: a,
                _isActiveThread: s,
                _isJoinedThread: o,
                _persisted: l,
                loadedMessages: u,
                _lastMessageId: d,
                _lastMessageTimestamp: _,
                _ackMessageId: c,
                _ackMessageTimestamp: E,
                ackPinTimestamp: I,
                isManualAck: T,
                lastPinTimestamp: f,
                _oldestUnreadMessageId: S,
                oldestUnreadMessageIdStale: h,
                estimated: A,
                _unreadCount: m,
                _mentionCount: N,
                flags: p,
                lastViewed: O
            } = e;
            this.channelId = t, this.type = null != n ? n : ea.ReadStateTypes.CHANNEL, this._guildId = i, this._isThread = null != r && r, null != a ? (this._isActiveThread = a, this._isJoinedThread = a) : (this._isActiveThread = null != s && s, this._isJoinedThread = null != o && o), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = d, this._lastMessageTimestamp = _, this._ackMessageId = c, this._ackMessageTimestamp = E, this.ackPinTimestamp = I, this.isManualAck = null != T && T, this.lastPinTimestamp = f, this._oldestUnreadMessageId = S, this.oldestUnreadMessageIdStale = null != h && h, this.estimated = null != A && A, this._unreadCount = null != m ? m : 0, this._mentionCount = N, this.flags = p, this.lastViewed = O, eM._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eM._mentionChannels.add(this.channelId)
        }
        incrementGuildUnreadsSentinel() {
            null != this._guildId && eM.getGuildSentinels(this._guildId).unreadsSentinel++
        }
        get oldestUnreadMessageId() {
            return this._oldestUnreadMessageId
        }
        set oldestUnreadMessageId(e) {
            this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1
        }
        get lastMessageId() {
            return this._lastMessageId
        }
        set lastMessageId(e) {
            this._lastMessageId = e, this._lastMessageTimestamp = null != e ? V.default.extractTimestamp(e) : 0
        }
        get lastMessageTimestamp() {
            return this._lastMessageTimestamp
        }
        get ackMessageId() {
            return this._ackMessageId
        }
        set ackMessageId(e) {
            this._ackMessageId = e, this._ackMessageTimestamp = null != e ? V.default.extractTimestamp(e) : 0
        }
        get unreadCount() {
            var e;
            return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
        }
        set unreadCount(e) {
            (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e
        }
        get mentionCount() {
            return this._mentionCount
        }
        set mentionCount(e) {
            (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eM._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eM._mentionChannels.add(this.channelId)
        }
        guessAckMessageId() {
            let e = Z.default.getMessages(this.channelId);
            if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
            if (!this.hasMentions()) return this.lastMessageId;
            let t = null,
                n = this.mentionCount,
                i = $.default.getCurrentUser();
            return e.forEach(e => {
                if (n > 0 && e.author.id !== (null == i ? void 0 : i.id)) --n;
                else if (0 === n) return t = e.id, !1
            }, this, !0), t
        }
        get guildId() {
            if (null != this._guildId) return this._guildId;
            let e = H.default.getChannel(this.channelId);
            return this._guildId = null != e ? e.getGuildId() : null
        }
        isPrivate() {
            if (this.type !== ea.ReadStateTypes.CHANNEL) return !1;
            let e = H.default.getChannel(this.channelId);
            return null != e && e.isPrivate()
        }
        rebuildChannelState(e) {
            var t, n;
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = arguments.length > 2 ? arguments[2] : void 0;
            if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, i && (this.mentionCount = 0), this.hasUnread()) {
                let e = $.default.getCurrentUser(),
                    t = this.getAckTimestamp(),
                    r = !1,
                    a = !1,
                    s = null,
                    o = Z.default.getMessages(this.channelId);
                o.forAll(n => {
                    if (r) {
                        var o;
                        this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : n.id
                    } else r = n.id === this._ackMessageId;
                    V.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eC(n, e) && this.mentionCount++, s = null != s ? s : n.id) : a = !0
                }), this.estimated = !o.hasPresent() || !(r || a) && o.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : s
            }
            null != r && (this.mentionCount = r)
        }
        handleGuildEventRemoval(e, t) {
            var n;
            if (V.default.compare(this.ackMessageId, t) >= 0) return;
            let i = m.default.getGuildScheduledEventsForGuild(e),
                r = this.getAckTimestamp();
            if (isNaN(r)) return;
            let a = null !== (n = this._ackMessageId) && void 0 !== n ? n : V.default.fromTimestamp(r),
                s = null,
                o = 0;
            i.forEach(e => {
                (0, m.isEventUpcoming)(e) && (V.default.compare(e.id, s) > 0 && (s = e.id), V.default.compare(e.id, a) > 0 && o++)
            }), this.lastMessageId = s, this.mentionCount = o
        }
        canTrackUnreads() {
            if (this.type !== ea.ReadStateTypes.CHANNEL) return !0;
            if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
            let e = H.default.getBasicChannel(this.channelId);
            return null != e && ("basicPermissions" in e ? b.default.has(e.basicPermissions, et.BasicPermissions.VIEW_CHANNEL) : !h.default.isChannelGated(this.guildId, this.channelId) || X.default.can(et.Permissions.VIEW_CHANNEL, e))
        }
        canBeUnread() {
            return !(this._isThread && !this._isJoinedThread || (0, O.isMessageRequestOrSpamRequest)(this.channelId, [p.default, R.default]) || !this._isThread && (0, v.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < em || !J.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
        }
        canHaveMentions() {
            return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, O.isMessageRequestOrSpamRequest)(this.channelId, [p.default, R.default]) || (0, v.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < em) && this.canTrackUnreads()
        }
        getGuildChannelUnreadState(e, t, n, i, r) {
            if (t && (this._lastMessageTimestamp < em || !J.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
                mentionCount: 0,
                unread: !1
            };
            if ("basicPermissions" in e) {
                if (!b.default.has(e.basicPermissions, et.BasicPermissions.VIEW_CHANNEL)) return {
                    mentionCount: 0,
                    unread: !1
                }
            } else if (h.default.isChannelGated(this.guildId, this.channelId) && !X.default.can(et.Permissions.VIEW_CHANNEL, e)) return {
                mentionCount: 0,
                unread: !1
            };
            return i || r ? {
                mentionCount: this.mentionCount,
                unread: !1
            } : {
                mentionCount: this.mentionCount,
                unread: this.getAckTimestamp() < this._lastMessageTimestamp
            }
        }
        hasUnread() {
            return this.getAckTimestamp() < this._lastMessageTimestamp
        }
        hasRecentlyVisitedAndRead() {
            return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eN && P.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
        }
        isForumPostUnread() {
            return !!this._isActiveThread && this.hasUnread()
        }
        hasMentions() {
            return this.getMentionCount() > 0
        }
        getMentionCount() {
            return this.mentionCount
        }
        hasUnreadOrMentions() {
            return this.hasMentions() || this.hasUnread()
        }
        ackPins() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (this.type !== ea.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
            if (null == e) {
                if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                this._persisted = !0, ev(() => c.HTTP.post({
                    url: et.Endpoints.PINS_ACK(this.channelId),
                    oldFormErrors: !0
                }))
            }
            let t = eR(e);
            return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
        }
        ack(e) {
            let {
                messageId: t,
                local: n = !1,
                immediate: i = !1,
                force: r = !1,
                isExplicitUserAction: a = !1,
                location: s = {
                    section: et.AnalyticsSections.CHANNEL
                },
                trackAnalytics: o = !0
            } = e;
            if (!this._shouldAck(r, n, a) || !r && !this.canTrackUnreads()) return !1;
            let l = this.hasMentions();
            return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, ec && (this.ackedWhileCached = !0), function(e) {
                if (null == e) return;
                let t = eM.get(e);
                if (t.type !== ea.ReadStateTypes.CHANNEL) return;
                let n = H.default.getChannel(t.channelId);
                if (null == n || !n.isForumPost() || null == n.parent_id) return;
                let i = n.parent_id,
                    r = eM.get(i);
                D.default.hasLoaded(n.guild_id) && V.default.keys(D.default.getThreadsForParent(n.guild_id, i)).every(e => eJ.hasOpenedThread(e) || 0 > V.default.compare(e, r.ackMessageId)) && r.ack({})
            }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
                this.type === ea.ReadStateTypes.CHANNEL ? this._ack(s, o) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
            }, l || i ? 0 : 3e3)), this.outgoingAck = t), !0)
        }
        takeSnapshot() {
            let {
                default: e
            } = n("888369"), t = this.guildId;
            return {
                unread: this.hasUnread(),
                mentionCount: this.mentionCount,
                guildUnread: null == t ? null : e.hasUnread(t),
                guildMentionCount: null == t ? null : e.getMentionCount(t),
                takenAt: Date.now()
            }
        }
        clearOutgoingAck() {
            this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
        }
        _shouldAck(e, t, n) {
            var i;
            return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== ea.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (i = H.default.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1
        }
        _ack(e, t) {
            let {
                outgoingAck: i
            } = this;
            if (null == i) return;
            let r = x.default.getId(),
                a = e_;
            this._persisted = !0;
            let s = this.recalculateFlags(),
                o = s === this.flags ? void 0 : s;
            ev(() => c.HTTP.post({
                url: et.Endpoints.MESSAGE_ACK(this.channelId, i),
                body: {
                    token: e_,
                    last_viewed: this.lastViewed,
                    flags: o
                },
                oldFormErrors: !0
            })).then(e => {
                null != e && (e_ === a && r === x.default.getId() && (e_ = e.body.token), T.default.dispatch({
                    type: "MESSAGE_ACKED"
                }), t && n.e("54076").then(n.bind(n, "189229")).then(e => {
                    let {
                        default: t
                    } = e;
                    t(this.channelId)
                }))
            })
        }
        recalculateFlags() {
            if (this.type !== ea.ReadStateTypes.CHANNEL) return;
            let e = H.default.getChannel(this.channelId);
            if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0
        }
        _nonChannelAck() {
            let e;
            let {
                outgoingAck: t,
                channelId: n,
                type: i
            } = this;
            if (null != t) {
                switch (i) {
                    case ea.ReadStateTypes.GUILD_HOME:
                    case ea.ReadStateTypes.GUILD_EVENT:
                    case ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        e = et.Endpoints.GUILD_FEATURE_ACK(n, t, i);
                        break;
                    case ea.ReadStateTypes.NOTIFICATION_CENTER:
                        e = et.Endpoints.USER_NON_CHANNEL_ACK(t, i);
                        break;
                    default:
                        return
                }
                this._persisted = !0, ev(() => c.HTTP.post({
                    url: e,
                    body: {},
                    oldFormErrors: !0
                }))
            }
        }
        delete() {
            var e;
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                n = H.default.getBasicChannel(this.channelId);
            eo.log("Deleting ReadState", this.channelId, this.type, {
                remote: t,
                persisted: this._persisted,
                channelMissing: null == n,
                isOld: ew(this, eA()),
                validType: null != n && U.ALL_CHANNEL_TYPES.has(n.type),
                readableType: null != n && (0, U.isReadableType)(n.type),
                oldThreadCutoff: eA(),
                mentionCount: this.mentionCount,
                channelId: this.channelId,
                ackMessageId: this._ackMessageId,
                lastMessageId: this._lastMessageId
            }), t && this._persisted && c.HTTP.del({
                url: et.Endpoints.CHANNEL_ACK(this.channelId),
                body: {
                    version: 2,
                    read_state_type: this.type
                },
                oldFormErrors: !0
            }), null === (e = eM._readStates[this.type]) || void 0 === e || delete e[this.channelId], eM._mentionChannels.delete(this.channelId)
        }
        shouldDeleteReadState(e) {
            if (0 !== W.default.totalUnavailableGuilds) return !1;
            if (null != this.type && this.type !== ea.ReadStateTypes.CHANNEL) return ! function(e) {
                switch (e.type) {
                    case ea.ReadStateTypes.GUILD_HOME:
                    case ea.ReadStateTypes.GUILD_EVENT:
                    case ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        return null != K.default.getGuild(e.channelId);
                    case ea.ReadStateTypes.NOTIFICATION_CENTER:
                        var t;
                        return V.default.cast(null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                    default:
                        return !0
                }
            }(this);
            let t = H.default.getBasicChannel(this.channelId);
            if (null == t) return !!ew(this, e) || !1;
            return !!U.ALL_CHANNEL_TYPES.has(t.type) && (!(0, U.isReadableType)(t.type) || !(0, U.isPrivate)(t.type) && (!!(U.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
                let i = e.guildId;
                return !(null != i && D.default.isActive(i, t.parent_id, e.channelId)) && ew(e, n)
            }(this, t, e)) || !!(this.mentionCount > 0) && !X.default.canBasicChannel(el, t) || !1))
        }
        getAckTimestamp() {
            let e, t;
            if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
            if (this._isThread) return this._ackMessageTimestamp = eb(this.guildId, this.channelId), this._ackMessageId = V.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
            if (this.type === ea.ReadStateTypes.GUILD_EVENT || this.type === ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = K.default.getGuild(this.channelId);
            else if ((0, ei.isStaticChannelRoute)(this.channelId)) e = K.default.getGuild(this.guildId);
            else {
                let t = H.default.getChannel(this.channelId);
                if (null != t) {
                    let n = t.getGuildId();
                    e = K.default.getGuild(n)
                }
            }
            return t = null != e ? eG(e) : V.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
        }
        get oldestUnreadTimestamp() {
            return null != this.oldestUnreadMessageId ? V.default.extractTimestamp(this.oldestUnreadMessageId) : 0
        }
        syncThreadSettings() {
            this._isThread = !0;
            let e = H.default.getChannel(this.channelId);
            if (null == e) return eo.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
            let t = this.guildId,
                n = null != t && D.default.isActive(t, e.parent_id, this.channelId),
                i = M.default.hasJoined(this.channelId);
            return (this._isActiveThread !== n || this._isJoinedThread !== i) && (this._isActiveThread = n, this._isJoinedThread = i, !0)
        }
        recordLastViewedTime() {
            let e = Math.ceil((Date.now() - V.DISCORD_EPOCH) / G.default.Millis.DAY);
            e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
                force: !0,
                trackAnalytics: !1
            }))
        }
        constructor(e, t = ea.ReadStateTypes.CHANNEL) {
            es(this, "channelId", void 0), es(this, "type", ea.ReadStateTypes.CHANNEL), es(this, "_guildId", void 0), es(this, "_isThread", void 0), es(this, "_isActiveThread", void 0), es(this, "_isJoinedThread", void 0), es(this, "_isResourceChannel", void 0), es(this, "_persisted", void 0), es(this, "loadedMessages", void 0), es(this, "_lastMessageId", void 0), es(this, "_lastMessageTimestamp", void 0), es(this, "_ackMessageId", void 0), es(this, "_ackMessageTimestamp", void 0), es(this, "isManualAck", void 0), es(this, "ackPinTimestamp", void 0), es(this, "lastPinTimestamp", void 0), es(this, "_oldestUnreadMessageId", void 0), es(this, "oldestUnreadMessageIdStale", void 0), es(this, "estimated", void 0), es(this, "_unreadCount", void 0), es(this, "_mentionCount", void 0), es(this, "flags", void 0), es(this, "lastViewed", void 0), es(this, "outgoingAck", void 0), es(this, "outgoingAckTimer", null), es(this, "ackMessageIdAtChannelSelect", null), es(this, "ackedWhileCached", void 0), es(this, "snapshot", void 0), this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
        }
    }

    function ey(e) {
        e.forEach(e => {
            if ((0, U.isReadableType)(e.type)) {
                let t = eM.get(e.id);
                t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(ei.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), U.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
            }
        })
    }

    function eP(e) {
        e.forEach(e => {
            if ((0, U.isReadableType)(e.type)) {
                var t;
                let n = eM.get(e.id);
                n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eR(e.last_pin_timestamp), n._isResourceChannel = (0, w.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, ei.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), U.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
            }
        })
    }

    function eU(e) {
        (function(e) {
            var t;
            null === (t = e.threads) || void 0 === t || t.forEach(t => {
                if (!U.ALL_CHANNEL_TYPES.has(t.type)) return;
                let n = eM.get(t.id);
                n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eR(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = V.default.fromTimestamp(eb(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eb(e.id, t.id))
            })
        })(e),
        function(e) {
            var t, n;
            if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eM.getIfExists(e.id, ea.ReadStateTypes.GUILD_EVENT)) return;
            let i = eM.get(e.id, ea.ReadStateTypes.GUILD_EVENT);
            i._guildId = e.id;
            let r = 0,
                a = null,
                s = null !== (n = i._ackMessageId) && void 0 !== n ? n : V.default.fromTimestamp(i.getAckTimestamp());
            e.guild_scheduled_events.forEach(e => {
                V.default.compare(e.id, a) > 0 && (a = e.id), V.default.compare(e.id, s) > 0 && r++
            }), i.lastMessageId = a, i.mentionCount = r
        }(e),
        function(e) {
            eM.get(e.id, ea.ReadStateTypes.GUILD_HOME).lastMessageId = V.default.fromTimestamp(d()(Date.now()).subtract(24, "h").valueOf())
        }(e),
        function(e) {
            let t = K.default.getGuild(e.id);
            if (null == t) return;
            let n = null == t ? void 0 : t.latestOnboardingQuestionId;
            if (null == n) return;
            let i = eM.get(t.id, ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
            i._guildId = t.id, i.lastMessageId = n
        }(e)
    }
    es(eM, "_guildReadStateSentinels", {}), es(eM, "_readStates", {}), es(eM, "_mentionChannels", new Set);

    function eb(e, t) {
        var n, i, r;
        let a = H.default.getChannel(t),
            s = K.default.getGuild(null != e ? e : null == a ? void 0 : a.guild_id),
            o = (null == a ? void 0 : a.isForumPost()) ? 0 : eG(s),
            l = (null !== (r = null === (n = M.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0) - 5e3,
            u = null == a ? void 0 : null === (i = a.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
            d = Math.max(l, null != u ? new Date(u).getTime() - 1 : 0);
        return d <= 0 && (d = V.default.extractTimestamp(t) - 1), isNaN(o) ? d : Math.max(o, d)
    }

    function eG(e) {
        if (null != e && null != e.joinedAt) {
            if (e.joinedAt instanceof Date) return e.joinedAt.getTime();
            if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
            else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
        }
        return Date.now()
    }

    function ew(e, t) {
        return !!(e.mentionCount > 0) || !(V.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && V.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && V.default.compare(e._lastMessageId, t) > 0) && !0
    }

    function eB(e) {
        if (null != e) {
            let t = eM.get(e);
            if (eD(t)) return t.ack({})
        }
        return !1
    }

    function ek() {
        null != eT && clearTimeout(eT)
    }

    function eV(e) {
        if (null != e.channelUpdates) {
            var t;
            ey(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
        }
        if (null != e.channelTimestampUpdates)
            for (let t of e.channelTimestampUpdates) {
                let e = eM.get(t.id);
                null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eR(t.last_pin_timestamp))
            }
    }

    function ex(e) {
        let {
            channelId: t
        } = e;
        eM.get(t).rebuildChannelState()
    }

    function eF(e) {
        let {
            threads: t
        } = e;
        eP(t)
    }

    function eH(e) {
        let {
            messages: t,
            threads: n
        } = e;
        for (let e of t) eP(e.map(e => {
            let {
                thread: t
            } = e;
            return t
        }).filter(B.isNotNullish));
        eP(n)
    }

    function eY(e) {
        let t = $.default.getCurrentUser();
        return null != e.creator_id && null != t && e.creator_id === t.id
    }

    function ej(e) {
        let {
            channel: t
        } = e;
        return eM.clear(t.id)
    }

    function eW() {
        let e = F.default.getCurrentSidebarChannelId(eu),
            t = !1;
        return ed !== e ? (t = ez(ed), ed = e) : t = eB(e) || t, t
    }

    function eK(e) {
        if (null != e) eM.get(e).isManualAck = !1
    }

    function ez(e) {
        if (null == e) return !1;
        let t = eM.get(e);
        return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
    }

    function eZ(e) {
        let {
            channelId: t,
            messageId: n,
            manual: i,
            newMentionCount: r
        } = e, a = eM.get(t);
        return i ? (a.rebuildChannelState(n, !0, r), !0) : n !== a._ackMessageId && a.ack({
            messageId: n,
            local: !0
        })
    }

    function eX(e) {
        let {
            id: t,
            ackType: n,
            ackedId: i,
            local: r
        } = e;
        return eQ(t, n, i, r)
    }

    function eQ(e, t, n, i) {
        var r;
        let a = eM.get(e, t);
        return n !== a.ackMessageId && a.lastMessageId !== a.ackMessageId && (null != a.lastMessageId || 0 !== a.mentionCount) && (n = null !== (r = null != n ? n : a.lastMessageId) && void 0 !== r ? r : V.default.fromTimestamp(a.getAckTimestamp()), a.ack({
            messageId: n,
            local: null == i || i
        }))
    }
    class eq extends(a = _.default.Store) {
        initialize() {
            this.waitFor(Y.default, $.default, K.default, W.default, H.default, q.default, Z.default, X.default, S.default, D.default, M.default, F.default, m.default, j.default, h.default, J.default, ee.default, g.default, p.default, P.default, R.default), this.syncWith([F.default], eW)
        }
        getReadStatesByChannel() {
            var e;
            return null !== (e = eM._readStates[ea.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
        }
        getForDebugging(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getIfExists(e, t)
        }
        getNotifCenterReadState(e) {
            var t;
            return null === (t = eM._readStates[ea.ReadStateTypes.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e]
        }
        hasUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
        }
        hasTrackedUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
        }
        isForumPostUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.isForumPostUnread(), !1)
        }
        getUnreadCount(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
        }
        getMentionCount(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0)
        }
        getGuildChannelUnreadState(e, t, n, i, r) {
            return eM.getValue(e.id, ea.ReadStateTypes.CHANNEL, a => a.getGuildChannelUnreadState(e, t, n, i, r), {
                mentionCount: 0,
                unread: !1
            })
        }
        hasRecentlyVisitedAndRead(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
        }
        ackMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
        }
        getTrackedAckMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
        }
        lastMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.lastMessageId, null)
        }
        lastMessageTimestamp(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.lastMessageTimestamp, 0)
        }
        lastPinTimestamp(e) {
            return eM.getValue(e, ea.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
        }
        getOldestUnreadMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
        }
        getOldestUnreadTimestamp(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
        }
        isEstimated(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.estimated, !1)
        }
        hasOpenedThread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e._persisted, !1)
        }
        hasUnreadPins(e) {
            return eM.getValue(e, ea.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
        }
        isNewForumThread(e, t, n) {
            let i = eM.get(t);
            if (!0 === eM.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= V.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
            let r = eG(n);
            return V.default.extractTimestamp(e) > r
        }
        getAllReadStates(e) {
            let t = [];
            return eM.forEach(n => {
                switch (n.type) {
                    case ea.ReadStateTypes.GUILD_HOME:
                    case ea.ReadStateTypes.GUILD_EVENT:
                    case ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        null != K.default.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case ea.ReadStateTypes.NOTIFICATION_CENTER:
                        var i;
                        V.default.cast(null === (i = $.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === n.channelId && t.push(n.serialize(e));
                        break;
                    default:
                        t.push(n.serialize(e))
                }
            }), t
        }
        getGuildUnreadsSentinel(e) {
            return eM.getGuildSentinels(e).unreadsSentinel
        }
        getMentionChannelIds() {
            return eM.getMentionChannelIds()
        }
        getSnapshot(e, t) {
            let n = eM.get(e);
            return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
        }
    }
    es(eq, "displayName", "ReadStateStore");
    let eJ = new eq(T.default, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
            let {
                changesByChannelId: t
            } = e;
            for (let e in t) {
                var n, i;
                let r = t[e],
                    a = eM.getIfExists(e);
                if (null != a)
                    for (let e of [null === (n = r.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (i = r.modified_messages) && void 0 !== i ? i : []).filter(B.isNotNullish)) 1 === V.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id)
            }
        },
        CONNECTION_OPEN: function(e) {
            var t, n;
            let {
                guilds: i,
                relationships: r,
                initialPrivateChannels: a,
                readState: s
            } = e;
            eO(), e_ = null, !ec && !s.partial && eM.clearAll(), ec = !1, s.entries.forEach(e => {
                var t, n, i;
                let r = null !== (t = e.read_state_type) && void 0 !== t ? t : ea.ReadStateTypes.CHANNEL;
                if (r !== ea.ReadStateTypes.CHANNEL) {
                    ;
                    e = {
                        id: (i = e).id,
                        read_state_type: i.read_state_type,
                        mention_count: i.badge_count,
                        last_message_id: i.last_acked_id
                    }
                }
                let a = eM.get(e.id, r);
                a._persisted = !0, a._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, a.flags = e.flags, a.lastViewed = e.last_viewed;
                let s = H.default.getBasicChannel(e.id);
                null != s && (0, U.isThread)(s.type) && (null == e.last_message_id || 0 === e.last_message_id) ? a.ackMessageId = V.default.fromTimestamp(eb(s.guild_id, s.id)) : a.ackedWhileCached ? -1 === V.default.compare(a.ackMessageId, e.last_message_id) && (a.ackMessageId = e.last_message_id) : a.ackMessageId = e.last_message_id, a.ackedWhileCached = void 0, a.ackPinTimestamp = eR(e.last_pin_timestamp), eM._mentionChannels.delete(a.channelId), a._mentionCount > 0 && a.canHaveMentions() && eM._mentionChannels.add(a.channelId)
            }), eM.resetGuildSentinels();
            let o = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            for (let e of (null != o && (eM.get(o, ea.ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = V.default.fromTimestamp(Date.now())), function(e) {
                    let t = $.default.getCurrentUser();
                    if (!(0, L.inNotificationCenterEnabled)() || null == t) return 0;
                    let n = eM.get(t.id, ea.ReadStateTypes.NOTIFICATION_CENTER);
                    e.forEach(e => {
                        if (null == e.since || e.type !== et.RelationshipTypes.PENDING_INCOMING) return;
                        let t = new Date(e.since).getTime();
                        (null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = V.default.fromTimestamp(t))
                    })
                }(r), ey(a), i)) ey(null !== (n = e.channels) && void 0 !== n ? n : []), eV(e), eU(e);
            ek(), eT = setTimeout(() => (function(e) {
                let t = eA();
                for (let i of e) {
                    var n;
                    let e = null !== (n = i.read_state_type) && void 0 !== n ? n : ea.ReadStateTypes.CHANNEL,
                        r = eM.get(i.id, e);
                    r.shouldDeleteReadState(t) && r.delete()
                }
            })(s.entries), 10 * G.default.Millis.SECOND)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                lazyPrivateChannels: t
            } = e;
            ey(t)
        },
        LOGOUT: ek,
        OVERLAY_INITIALIZE: function(e) {
            let {
                readStates: t,
                selectedChannelId: n
            } = e;
            eO(), e_ = null, eu = n, ed = F.default.getCurrentSidebarChannelId(eu), eM.clearAll(), t.forEach(e => {
                let t = eM.get(e.channelId);
                t.deserializeForOverlay(e), t.type === ea.ReadStateTypes.CHANNEL && t.rebuildChannelState()
            })
        },
        CACHE_LOADED: function(e) {
            let {
                readStates: t
            } = e;
            ec = !0, eO(), t.forEach(e => {
                var t;
                let n = null !== (t = e.type) && void 0 !== t ? t : ea.ReadStateTypes.CHANNEL;
                e.type = n, null == eM._readStates[n] && (eM._readStates[n] = {}), eM._readStates[n][e.channelId] = (0, I.dangerouslyCast)(e, eM)
            })
        },
        GUILD_CREATE: function(e) {
            var t;
            let {
                guild: n
            } = e, i = eA();
            eM.forEach(e => {
                e.guildId === n.id && e.shouldDeleteReadState(i) && e.delete(!1)
            }), ey(null !== (t = n.channels) && void 0 !== t ? t : []), eV(n), eU(n)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t,
                isAfter: n,
                messages: i
            } = e, r = eM.get(t);
            r.loadedMessages = !0;
            let a = Z.default.getMessages(t);
            null != a && (i.length > 0 && 1 === V.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount ? r.rebuildChannelState() : a.hasPresent() || a.jumpTargetId === r.ackMessageId ? r.rebuildChannelState() : n && null != r.ackMessageId && a.has(r.ackMessageId, !0) && (r.unreadCount += i.length, null == r.oldestUnreadMessageId && r.rebuildChannelState())), eP(i.map(e => e.thread).filter(B.isNotNullish))
        },
        MESSAGE_CREATE: function(e) {
            let t, n, {
                    channelId: r,
                    message: a,
                    isPushNotification: s
                } = e,
                o = eM.get(r);
            o.lastMessageId = a.id;
            let l = $.default.getCurrentUser(),
                u = H.default.getBasicChannel(r);
            if (null != a.author && null != l && a.author.id === l.id) return null != o.outgoingAck && o.clearOutgoingAck(), eZ({
                channelId: r,
                messageId: a.id,
                manual: !1
            });
            let d = (0, N.getRootNavigationRefIfInExperiment)();
            if ((null == d ? void 0 : d.isReady()) === !0) {
                let e = d.getCurrentRoute();
                if (S.default.getChatOpen(o.channelId)) t = o.channelId;
                else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
                else if ((null == e ? void 0 : e.name) === "guilds") {
                    var _;
                    t = null === (_ = e.params) || void 0 === _ ? void 0 : _.channelId
                }
            } else null == d && (t = q.default.getChannelId(), n = F.default.getCurrentSidebarChannelId(t));
            let c = t === r || n === r;
            if (c && eD(o) && !s || null != i && i.isInstanceFocused() && c && i.isInstanceUILocked() && i.isPinned(et.OverlayWidgets.TEXT)) return o.ack({
                messageId: a.id
            });
            (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale) && (o.oldestUnreadMessageId = a.id), o.unreadCount++, !(null != a.author && Q.default.isBlocked(a.author.id) || a.type === et.MessageTypes.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === et.ChannelTypes.GROUP_DM) && function(e, t, n) {
                if (null != t && (0, C.isRawMessageMentioned)({
                        rawMessage: e,
                        userId: t.id,
                        suppressEveryone: J.default.isSuppressEveryoneEnabled(n.guildId),
                        suppressRoles: J.default.isSuppressRolesEnabled(n.guildId)
                    })) return !0;
                let i = H.default.getChannel(e.channel_id);
                return !!eg(i) || !!J.default.mentionOnAllMessages && null != i && !i.isVocal() && !J.default.isChannelMuted(i.guild_id, i.id) && J.default.resolvedMessageNotifications(i) === et.UserNotificationSettings.ALL_MESSAGES || !1
            }(a, l, o) && o.mentionCount++
        },
        MESSAGE_DELETE: ex,
        MESSAGE_DELETE_BULK: ex,
        MESSAGE_ACK: eZ,
        CHANNEL_ACK: function(e) {
            let {
                channelId: t,
                messageId: n,
                immediate: i = !1,
                force: r = !1,
                context: a,
                location: s
            } = e, o = eM.get(t), l = o.ack({
                messageId: n,
                local: a !== et.CURRENT_APP_CONTEXT,
                immediate: i,
                force: r,
                isExplicitUserAction: !0,
                location: s
            });
            return null != n ? (o.rebuildChannelState(), !0) : l
        },
        CHANNEL_LOCAL_ACK: function(e) {
            let {
                channelId: t
            } = e;
            return eM.get(t).ack({
                messageId: void 0,
                local: !0,
                immediate: void 0,
                force: void 0,
                isExplicitUserAction: !0
            })
        },
        CHANNEL_PINS_ACK: function(e) {
            let {
                channelId: t,
                timestamp: n
            } = e;
            return eM.get(t).ackPins(n)
        },
        CHANNEL_PINS_UPDATE: function(e) {
            let {
                channelId: t,
                lastPinTimestamp: n
            } = e, i = eM.get(t), r = eR(n);
            return i.lastPinTimestamp !== r && (i.lastPinTimestamp = r, !0)
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e, n = F.default.getCurrentSidebarChannelId(t), i = H.default.getChannel(t);
            if (null != i) {
                var r;
                let e = eM.get(i.id);
                e.ackMessageIdAtChannelSelect = null !== (r = e.ackMessageId) && void 0 !== r ? r : V.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
            }
            eK(eu), eK(ed);
            let a = !1;
            return eu !== t && (a = ez(eu) || a, a = ez(ed) || a), (eu === t || (null == i ? void 0 : i.type) != null && et.ChannelTypesSets.GUILD_THREADS_ONLY.has(i.type)) && (a = eB(t) || a), eu === t && (a = eB(n) || a), eu = t, ed = n, a
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t) return;
            let n = eM.get(t);
            if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
                isExplicitUserAction: !0
            })
        },
        CHANNEL_CREATE: function(e) {
            let {
                channel: t
            } = e;
            if (!(0, U.isReadableType)(t.type)) return !1;
            let n = eM.get(t.id);
            n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eR(t.lastPinTimestamp)
        },
        THREAD_CREATE: function(e) {
            let {
                channel: t
            } = e;
            (function(e) {
                if (!U.ALL_CHANNEL_TYPES.has(e.type)) return 0;
                let t = eM.get(e.id);
                t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === x.default.getId() && (t.loadedMessages = !0)
            })(t),
            function(e) {
                let t = e.parent_id;
                eM.get(t).lastMessageId = e.id;
                let n = $.default.getCurrentUser();
                if (e.ownerId === (null == n ? void 0 : n.id)) eM.get(e.id)._persisted = !0, eZ({
                    channelId: t,
                    messageId: e.id,
                    manual: !1
                })
            }(t)
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            return !!U.ALL_CHANNEL_TYPES.has(t.type) && eM.get(t.id).syncThreadSettings()
        },
        THREAD_LIST_SYNC: function(e) {
            let {
                threads: t
            } = e;
            t.forEach(e => {
                if (!U.ALL_CHANNEL_TYPES.has(e.type)) return;
                let t = eM.get(e.id);
                if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = M.default.hasJoined(e.id), e.isForumPost()) {
                    let t = eM.get(e.parent_id);
                    0 > V.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
                }
            })
        },
        LOAD_THREADS_SUCCESS: eF,
        LOAD_ARCHIVED_THREADS_SUCCESS: eF,
        SEARCH_FINISH: eH,
        MOD_VIEW_SEARCH_FINISH: eH,
        THREAD_MEMBER_UPDATE: function(e) {
            let {
                id: t
            } = e;
            return eM.get(t).syncThreadSettings()
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            return (0, y.doesThreadMembersActionAffectMe)(e) && eM.get(e.id).syncThreadSettings()
        },
        CHANNEL_DELETE: ej,
        THREAD_DELETE: ej,
        WINDOW_FOCUS: function(e) {
            let t = !1;
            for (let [n, i] of V.default.entries(ef)) i === e.windowId && (t = function(e, t) {
                if (null == e) return !1;
                let n = eM.get(e);
                return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eB(e)
            }(n, e.focused) || t);
            return t
        },
        UPDATE_CHANNEL_DIMENSIONS: function(e) {
            let {
                channelId: t
            } = e;
            return eB(t)
        },
        CURRENT_USER_UPDATE: function() {
            e_ = null
        },
        DRAWER_OPEN: function(e) {
            let {
                drawer: t
            } = e;
            if (null != eu) {
                let e = eM.get(eu);
                !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
            }
            return eS = null != t, !1
        },
        DRAWER_CLOSE: function() {
            return eS = !1, eB(eu)
        },
        BULK_ACK: function(e) {
            var t, n, i;
            let {
                channels: r,
                context: a,
                onFinished: s
            } = e;
            t = r.filter(e => null != e.messageId && eJ.hasUnread(e.channelId, e.readStateType)), n = a, i = s, t.forEach(e => {
                let {
                    channelId: t,
                    messageId: n,
                    readStateType: i
                } = e;
                eM.get(t, i).ack({
                    messageId: n,
                    local: !0,
                    immediate: void 0,
                    force: void 0,
                    isExplicitUserAction: !0
                })
            }), n !== et.CURRENT_APP_CONTEXT || (eE.push(...t.map(e => ({
                channel_id: e.channelId,
                message_id: e.messageId,
                read_state_type: e.readStateType
            }))), eI || eL(i))
        },
        ENABLE_AUTOMATIC_ACK: function(e) {
            let {
                channelId: t,
                windowId: n
            } = e;
            return ef[t] !== n && (l()(void 0 === ef[t], "handleEnableAutomaticAck: channel already visible in another window"), ef[t] = n, eB(t))
        },
        DISABLE_AUTOMATIC_ACK: function(e) {
            let {
                channelId: t
            } = e;
            return ef[t] = void 0, !1
        },
        GUILD_FEATURE_ACK: eX,
        GUILD_SCHEDULED_EVENT_CREATE: function(e) {
            let {
                guildScheduledEvent: t
            } = e, n = t.guild_id, i = eM.get(t.guild_id, ea.ReadStateTypes.GUILD_EVENT);
            if (i.lastMessageId = t.id, eY(t)) {
                eX({
                    type: "GUILD_FEATURE_ACK",
                    id: n,
                    ackType: ea.ReadStateTypes.GUILD_EVENT,
                    ackedId: t.id,
                    local: !1
                });
                return
            }!J.default.isMuteScheduledEventsEnabled(n) && i.mentionCount++
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
            let {
                guildScheduledEvent: t
            } = e, n = t.guild_id;
            if (eY(t) || ![er.GuildScheduledEventStatus.CANCELED, er.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
            eM.get(n, ea.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
        },
        GUILD_SCHEDULED_EVENT_DELETE: function(e) {
            let {
                guildScheduledEvent: t
            } = e, n = t.guild_id;
            if (eY(t)) return !1;
            eM.get(t.guild_id, ea.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            return eM.clear(t.id, ea.ReadStateTypes.GUILD_EVENT)
        },
        GUILD_UPDATE: function(e) {
            let {
                guild: t
            } = e, n = t.latest_onboarding_question_id;
            if (null == n) return;
            let i = eM.get(t.id, ea.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
            i._guildId = t.id, i.lastMessageId = n
        },
        RESORT_THREADS: function(e) {
            let {
                channelId: t
            } = e;
            return eB(t)
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
            let {
                channelId: t,
                chatOpen: n
            } = e
        },
        DECAY_READ_STATES: eO,
        NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
            var t;
            let {
                item: n
            } = e;
            if (!(0, L.inNotificationCenterEnabled)()) return !1;
            let i = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == i) return !1;
            let r = eM.get(i, ea.ReadStateTypes.NOTIFICATION_CENTER);
            r.lastMessageId = n.id;
            if (0, g.default.active) {
                eQ(i, ea.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
                return
            }
            r.mentionCount++
        },
        RELATIONSHIP_ADD: function(e) {
            let t = $.default.getCurrentUser();
            if (!(0, L.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== et.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== et.RelationshipTypes.FRIEND) return !1;
            let n = eM.get(t.id, ea.ReadStateTypes.NOTIFICATION_CENTER),
                i = e.relationship.type === et.RelationshipTypes.FRIEND,
                r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                a = null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0;
            a < r && (n.lastMessageId = V.default.fromTimestamp(r), (0, g.default.active) ? eQ(t.id, ea.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++)
        },
        RELATIONSHIP_REMOVE: function(e) {
            let t = $.default.getCurrentUser();
            if (!(0, L.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== et.RelationshipTypes.PENDING_INCOMING) return !1;
            let n = eM.get(t.id, ea.ReadStateTypes.NOTIFICATION_CENTER),
                i = new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0) <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1))
        },
        NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
            var t;
            let {
                ids: n,
                optimistic: i
            } = e;
            if (i || !(0, L.inNotificationCenterEnabled)() || g.default.active) return !1;
            let r = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == r) return !1;
            let a = eM.get(r, ea.ReadStateTypes.NOTIFICATION_CENTER);
            n.forEach(e => {
                0 > V.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0))
            })
        },
        USER_NON_CHANNEL_ACK: function(e) {
            var t;
            let {
                ackType: n,
                ackedId: i,
                local: r
            } = e, a = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            return null != a && eQ(a, n, i, r)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t;
            let n = !1;
            for (let i of null !== (t = e.channels) && void 0 !== t ? t : []) {
                let e = eM.get(i.id),
                    t = eR(i.lastPinTimestamp);
                (e.lastMessageId !== i.lastMessageId || e.lastPinTimestamp !== t) && (n = !0, e.lastMessageId = i.lastMessageId, e.lastPinTimestamp = t)
            }
            return n
        },
        CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
            let {
                channelId: t
            } = e;
            return ez(t)
        },
        TRY_ACK: function(e) {
            let {
                channelId: t
            } = e;
            return eB(t)
        }
    });
    t.default = eJ
}