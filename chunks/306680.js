function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        shouldBadgeMessage: function() {
            return eC
        }
    }), n("47120"), n("411104"), n("653041"), n("789020");
    var r, s, a, o = n("512722"),
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
        D = n("398758"),
        v = n("344185"),
        M = n("569471"),
        y = n("195663"),
        P = n("581883"),
        U = n("131704"),
        b = n("386438"),
        G = n("70956"),
        w = n("630388"),
        k = n("823379"),
        B = n("931619"),
        F = n("709054"),
        V = n("314897"),
        x = n("433355"),
        H = n("592125"),
        Y = n("796974"),
        j = n("828695"),
        W = n("486472"),
        K = n("430824"),
        z = n("517100"),
        X = n("375954"),
        Q = n("496675"),
        q = n("699516"),
        Z = n("944486"),
        J = n("9156"),
        $ = n("594174"),
        ee = n("451478"),
        et = n("981631"),
        en = n("918559"),
        ei = n("176505"),
        er = n("765305"),
        es = n("490897");

    function ea(e, t, n) {
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
        return F.default.fromTimestamp(Date.now() - eh)
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
        return !(null == n || q.default.isBlocked(e.author.id)) && (!!((0, C.default)({
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
        await eD(() => c.HTTP.post({
            url: et.Endpoints.BULK_ACK,
            body: {
                read_states: t
            },
            oldFormErrors: !0
        })), await (0, E.timeoutPromise)(1e3), eL(e)
    }
    async function eD(e) {
        let t = V.default.getId();
        for (let n = 0; n < 3; n++) try {
            return await e()
        } catch (e) {
            if (eo.error("", e), n + 1 < 3 && (await (0, E.timeoutPromise)((n + 1) * 2e3), await B.default.awaitOnline(), t !== V.default.getId())) return Promise.reject(Error("User changed."))
        }
    }

    function ev(e) {
        if (e.type !== es.ReadStateTypes.CHANNEL) return !1;
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
            s = S.default.getChatOpen(e.channelId);
        if (!s && (r === et.ChannelLayouts.NO_CHAT || r === et.ChannelLayouts.FULL_SCREEN) || null == ef[e.channelId]) return !1;
        let a = X.default.getMessages(e.channelId);
        return null != a && !!a.ready && !a.loadingMore && (!eS || !!s) && !0
    }(a = r || (r = {}))[a.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", a[a.IS_THREAD = 2] = "IS_THREAD";
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
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL,
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
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
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
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL,
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                s = null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e];
            return null == s ? r : i(s)
        }
        static clear(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
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
                _isActiveThread: s,
                _isJoinedThread: a,
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
                _isActiveThread: s,
                _isJoinedThread: a,
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
            return null != N && N > 0 && (p.lastViewed = N), r && (p._isThread = r, p._isActiveThread = s, p._isJoinedThread = a), p
        }
        deserializeForOverlay(e) {
            let {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: r,
                _isActiveJoinedThread: s,
                _isActiveThread: a,
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
            this.channelId = t, this.type = null != n ? n : es.ReadStateTypes.CHANNEL, this._guildId = i, this._isThread = null != r && r, null != s ? (this._isActiveThread = s, this._isJoinedThread = s) : (this._isActiveThread = null != a && a, this._isJoinedThread = null != o && o), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = d, this._lastMessageTimestamp = _, this._ackMessageId = c, this._ackMessageTimestamp = E, this.ackPinTimestamp = I, this.isManualAck = null != T && T, this.lastPinTimestamp = f, this._oldestUnreadMessageId = S, this.oldestUnreadMessageIdStale = null != h && h, this.estimated = null != A && A, this._unreadCount = null != m ? m : 0, this._mentionCount = N, this.flags = p, this.lastViewed = O, eM._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eM._mentionChannels.add(this.channelId)
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
            this._lastMessageId = e, this._lastMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0
        }
        get lastMessageTimestamp() {
            return this._lastMessageTimestamp
        }
        get ackMessageId() {
            return this._ackMessageId
        }
        set ackMessageId(e) {
            this._ackMessageId = e, this._ackMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0
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
            let e = X.default.getMessages(this.channelId);
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
            if (this.type !== es.ReadStateTypes.CHANNEL) return !1;
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
                    s = !1,
                    a = null,
                    o = X.default.getMessages(this.channelId);
                o.forAll(n => {
                    if (r) {
                        var o;
                        this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : n.id
                    } else r = n.id === this._ackMessageId;
                    F.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eC(n, e) && this.mentionCount++, a = null != a ? a : n.id) : s = !0
                }), this.estimated = !o.hasPresent() || !(r || s) && o.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : a
            }
            null != r && (this.mentionCount = r)
        }
        handleGuildEventRemoval(e, t) {
            var n;
            if (F.default.compare(this.ackMessageId, t) >= 0) return;
            let i = m.default.getGuildScheduledEventsForGuild(e),
                r = this.getAckTimestamp();
            if (isNaN(r)) return;
            let s = null !== (n = this._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(r),
                a = null,
                o = 0;
            i.forEach(e => {
                (0, m.isEventUpcoming)(e) && (F.default.compare(e.id, a) > 0 && (a = e.id), F.default.compare(e.id, s) > 0 && o++)
            }), this.lastMessageId = a, this.mentionCount = o
        }
        canTrackUnreads() {
            if (this.type !== es.ReadStateTypes.CHANNEL) return !0;
            if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
            let e = H.default.getBasicChannel(this.channelId);
            return null != e && ("basicPermissions" in e ? b.default.has(e.basicPermissions, et.BasicPermissions.VIEW_CHANNEL) : !h.default.isChannelGated(this.guildId, this.channelId) || Q.default.can(et.Permissions.VIEW_CHANNEL, e))
        }
        canBeUnread() {
            return !(this._isThread && !this._isJoinedThread || (0, O.isMessageRequestOrSpamRequest)(this.channelId, [p.default, R.default]) || !this._isThread && (0, D.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < em || !J.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
        }
        canHaveMentions() {
            return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, O.isMessageRequestOrSpamRequest)(this.channelId, [p.default, R.default]) || (0, D.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < em) && this.canTrackUnreads()
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
            } else if (h.default.isChannelGated(this.guildId, this.channelId) && !Q.default.can(et.Permissions.VIEW_CHANNEL, e)) return {
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
            if (this.type !== es.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
            if (null == e) {
                if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                this._persisted = !0, eD(() => c.HTTP.post({
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
                isExplicitUserAction: s = !1,
                location: a = {
                    section: et.AnalyticsSections.CHANNEL
                },
                trackAnalytics: o = !0
            } = e;
            if (!this._shouldAck(r, n, s) || !r && !this.canTrackUnreads()) return !1;
            let l = this.hasMentions();
            return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, ec && (this.ackedWhileCached = !0), function(e) {
                if (null == e) return;
                let t = eM.get(e);
                if (t.type !== es.ReadStateTypes.CHANNEL) return;
                let n = H.default.getChannel(t.channelId);
                if (null == n || !n.isForumPost() || null == n.parent_id) return;
                let i = n.parent_id,
                    r = eM.get(i);
                v.default.hasLoaded(n.guild_id) && F.default.keys(v.default.getThreadsForParent(n.guild_id, i)).every(e => eJ.hasOpenedThread(e) || 0 > F.default.compare(e, r.ackMessageId)) && r.ack({})
            }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
                this.type === es.ReadStateTypes.CHANNEL ? this._ack(a, o) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
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
            return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== es.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (i = H.default.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1
        }
        _ack(e, t) {
            let {
                outgoingAck: i
            } = this;
            if (null == i) return;
            let r = V.default.getId(),
                s = e_;
            this._persisted = !0;
            let a = this.recalculateFlags(),
                o = a === this.flags ? void 0 : a;
            eD(() => c.HTTP.post({
                url: et.Endpoints.MESSAGE_ACK(this.channelId, i),
                body: {
                    token: e_,
                    last_viewed: this.lastViewed,
                    flags: o
                },
                oldFormErrors: !0
            })).then(e => {
                null != e && (e_ === s && r === V.default.getId() && (e_ = e.body.token), T.default.dispatch({
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
            if (this.type !== es.ReadStateTypes.CHANNEL) return;
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
                    case es.ReadStateTypes.GUILD_HOME:
                    case es.ReadStateTypes.GUILD_EVENT:
                    case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        e = et.Endpoints.GUILD_FEATURE_ACK(n, t, i);
                        break;
                    case es.ReadStateTypes.NOTIFICATION_CENTER:
                        e = et.Endpoints.USER_NON_CHANNEL_ACK(t, i);
                        break;
                    default:
                        return
                }
                this._persisted = !0, eD(() => c.HTTP.post({
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
            if (null != this.type && this.type !== es.ReadStateTypes.CHANNEL) return ! function(e) {
                switch (e.type) {
                    case es.ReadStateTypes.GUILD_HOME:
                    case es.ReadStateTypes.GUILD_EVENT:
                    case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        return null != K.default.getGuild(e.channelId);
                    case es.ReadStateTypes.NOTIFICATION_CENTER:
                        var t;
                        return F.default.cast(null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                    default:
                        return !0
                }
            }(this);
            let t = H.default.getBasicChannel(this.channelId);
            if (null == t) return !!ew(this, e) || !1;
            return !!U.ALL_CHANNEL_TYPES.has(t.type) && (!(0, U.isReadableType)(t.type) || !(0, U.isPrivate)(t.type) && (!!(U.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
                let i = e.guildId;
                return !(null != i && v.default.isActive(i, t.parent_id, e.channelId)) && ew(e, n)
            }(this, t, e)) || !!(this.mentionCount > 0) && !Q.default.canBasicChannel(el, t) || !1))
        }
        getAckTimestamp() {
            let e, t;
            if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
            if (this._isThread) return this._ackMessageTimestamp = eb(this.guildId, this.channelId), this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
            if (this.type === es.ReadStateTypes.GUILD_EVENT || this.type === es.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = K.default.getGuild(this.channelId);
            else if ((0, ei.isStaticChannelRoute)(this.channelId)) e = K.default.getGuild(this.guildId);
            else {
                let t = H.default.getChannel(this.channelId);
                if (null != t) {
                    let n = t.getGuildId();
                    e = K.default.getGuild(n)
                }
            }
            return t = null != e ? eG(e) : F.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
        }
        get oldestUnreadTimestamp() {
            return null != this.oldestUnreadMessageId ? F.default.extractTimestamp(this.oldestUnreadMessageId) : 0
        }
        syncThreadSettings() {
            this._isThread = !0;
            let e = H.default.getChannel(this.channelId);
            if (null == e) return eo.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
            let t = this.guildId,
                n = null != t && v.default.isActive(t, e.parent_id, this.channelId),
                i = M.default.hasJoined(this.channelId);
            return (this._isActiveThread !== n || this._isJoinedThread !== i) && (this._isActiveThread = n, this._isJoinedThread = i, !0)
        }
        recordLastViewedTime() {
            let e = Math.ceil((Date.now() - F.DISCORD_EPOCH) / G.default.Millis.DAY);
            e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
                force: !0,
                trackAnalytics: !1
            }))
        }
        constructor(e, t = es.ReadStateTypes.CHANNEL) {
            ea(this, "channelId", void 0), ea(this, "type", es.ReadStateTypes.CHANNEL), ea(this, "_guildId", void 0), ea(this, "_isThread", void 0), ea(this, "_isActiveThread", void 0), ea(this, "_isJoinedThread", void 0), ea(this, "_isResourceChannel", void 0), ea(this, "_persisted", void 0), ea(this, "loadedMessages", void 0), ea(this, "_lastMessageId", void 0), ea(this, "_lastMessageTimestamp", void 0), ea(this, "_ackMessageId", void 0), ea(this, "_ackMessageTimestamp", void 0), ea(this, "isManualAck", void 0), ea(this, "ackPinTimestamp", void 0), ea(this, "lastPinTimestamp", void 0), ea(this, "_oldestUnreadMessageId", void 0), ea(this, "oldestUnreadMessageIdStale", void 0), ea(this, "estimated", void 0), ea(this, "_unreadCount", void 0), ea(this, "_mentionCount", void 0), ea(this, "flags", void 0), ea(this, "lastViewed", void 0), ea(this, "outgoingAck", void 0), ea(this, "outgoingAckTimer", null), ea(this, "ackMessageIdAtChannelSelect", null), ea(this, "ackedWhileCached", void 0), ea(this, "snapshot", void 0), this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
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
                n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eR(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(eb(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eb(e.id, t.id))
            })
        })(e),
        function(e) {
            var t, n;
            if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eM.getIfExists(e.id, es.ReadStateTypes.GUILD_EVENT)) return;
            let i = eM.get(e.id, es.ReadStateTypes.GUILD_EVENT);
            i._guildId = e.id;
            let r = 0,
                s = null,
                a = null !== (n = i._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(i.getAckTimestamp());
            e.guild_scheduled_events.forEach(e => {
                F.default.compare(e.id, s) > 0 && (s = e.id), F.default.compare(e.id, a) > 0 && r++
            }), i.lastMessageId = s, i.mentionCount = r
        }(e),
        function(e) {
            eM.get(e.id, es.ReadStateTypes.GUILD_HOME).lastMessageId = F.default.fromTimestamp(d()(Date.now()).subtract(24, "h").valueOf())
        }(e),
        function(e) {
            let t = K.default.getGuild(e.id);
            if (null == t) return;
            let n = null == t ? void 0 : t.latestOnboardingQuestionId;
            if (null == n) return;
            let i = eM.get(t.id, es.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
            i._guildId = t.id, i.lastMessageId = n
        }(e)
    }
    ea(eM, "_guildReadStateSentinels", {}), ea(eM, "_readStates", {}), ea(eM, "_mentionChannels", new Set);

    function eb(e, t) {
        var n, i, r;
        let s = H.default.getChannel(t),
            a = K.default.getGuild(null != e ? e : null == s ? void 0 : s.guild_id),
            o = (null == s ? void 0 : s.isForumPost()) ? 0 : eG(a),
            l = (null !== (r = null === (n = M.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0) - 5e3,
            u = null == s ? void 0 : null === (i = s.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
            d = Math.max(l, null != u ? new Date(u).getTime() - 1 : 0);
        return d <= 0 && (d = F.default.extractTimestamp(t) - 1), isNaN(o) ? d : Math.max(o, d)
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
        return !!(e.mentionCount > 0) || !(F.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && F.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && F.default.compare(e._lastMessageId, t) > 0) && !0
    }

    function ek(e) {
        if (null != e) {
            let t = eM.get(e);
            if (ev(t)) return t.ack({})
        }
        return !1
    }

    function eB() {
        null != eT && clearTimeout(eT)
    }

    function eF(e) {
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

    function eV(e) {
        let {
            channelId: t
        } = e;
        eM.get(t).rebuildChannelState()
    }

    function ex(e) {
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
        }).filter(k.isNotNullish));
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
        let e = x.default.getCurrentSidebarChannelId(eu),
            t = !1;
        return ed !== e ? (t = ez(ed), ed = e) : t = ek(e) || t, t
    }

    function eK(e) {
        if (null != e) eM.get(e).isManualAck = !1
    }

    function ez(e) {
        if (null == e) return !1;
        let t = eM.get(e);
        return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
    }

    function eX(e) {
        let {
            channelId: t,
            messageId: n,
            manual: i,
            newMentionCount: r
        } = e, s = eM.get(t);
        return i ? (s.rebuildChannelState(n, !0, r), !0) : n !== s._ackMessageId && s.ack({
            messageId: n,
            local: !0
        })
    }

    function eQ(e) {
        let {
            id: t,
            ackType: n,
            ackedId: i,
            local: r
        } = e;
        return eq(t, n, i, r)
    }

    function eq(e, t, n, i) {
        var r;
        let s = eM.get(e, t);
        return n !== s.ackMessageId && s.lastMessageId !== s.ackMessageId && (null != s.lastMessageId || 0 !== s.mentionCount) && (n = null !== (r = null != n ? n : s.lastMessageId) && void 0 !== r ? r : F.default.fromTimestamp(s.getAckTimestamp()), s.ack({
            messageId: n,
            local: null == i || i
        }))
    }
    class eZ extends(s = _.default.Store) {
        initialize() {
            this.waitFor(Y.default, $.default, K.default, W.default, H.default, Z.default, X.default, Q.default, S.default, v.default, M.default, x.default, m.default, j.default, h.default, J.default, ee.default, g.default, p.default, P.default, R.default), this.syncWith([x.default], eW)
        }
        getReadStatesByChannel() {
            var e;
            return null !== (e = eM._readStates[es.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
        }
        getForDebugging(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getIfExists(e, t)
        }
        getNotifCenterReadState(e) {
            var t;
            return null === (t = eM._readStates[es.ReadStateTypes.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e]
        }
        hasUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
        }
        hasTrackedUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
        }
        isForumPostUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.isForumPostUnread(), !1)
        }
        getUnreadCount(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
        }
        getMentionCount(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0)
        }
        getGuildChannelUnreadState(e, t, n, i, r) {
            return eM.getValue(e.id, es.ReadStateTypes.CHANNEL, s => s.getGuildChannelUnreadState(e, t, n, i, r), {
                mentionCount: 0,
                unread: !1
            })
        }
        hasRecentlyVisitedAndRead(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
        }
        ackMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
        }
        getTrackedAckMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
        }
        lastMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.lastMessageId, null)
        }
        lastMessageTimestamp(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.lastMessageTimestamp, 0)
        }
        lastPinTimestamp(e) {
            return eM.getValue(e, es.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
        }
        getOldestUnreadMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
        }
        getOldestUnreadTimestamp(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
        }
        isEstimated(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e.estimated, !1)
        }
        hasOpenedThread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
            return eM.getValue(e, t, e => e._persisted, !1)
        }
        hasUnreadPins(e) {
            return eM.getValue(e, es.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
        }
        isNewForumThread(e, t, n) {
            let i = eM.get(t);
            if (!0 === eM.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= F.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
            let r = eG(n);
            return F.default.extractTimestamp(e) > r
        }
        getAllReadStates(e) {
            let t = [];
            return eM.forEach(n => {
                switch (n.type) {
                    case es.ReadStateTypes.GUILD_HOME:
                    case es.ReadStateTypes.GUILD_EVENT:
                    case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        null != K.default.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case es.ReadStateTypes.NOTIFICATION_CENTER:
                        var i;
                        F.default.cast(null === (i = $.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === n.channelId && t.push(n.serialize(e));
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
    ea(eZ, "displayName", "ReadStateStore");
    let eJ = new eZ(T.default, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
            let {
                changesByChannelId: t
            } = e;
            for (let e in t) {
                var n, i;
                let r = t[e],
                    s = eM.getIfExists(e);
                if (null != s)
                    for (let e of [null === (n = r.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (i = r.modified_messages) && void 0 !== i ? i : []).filter(k.isNotNullish)) 1 === F.default.compare(e.id, s.lastMessageId) && (s.lastMessageId = e.id)
            }
        },
        CONNECTION_OPEN: function(e) {
            var t, n;
            let {
                guilds: i,
                relationships: r,
                initialPrivateChannels: s,
                readState: a
            } = e;
            eO(), e_ = null, !ec && !a.partial && eM.clearAll(), ec = !1, a.entries.forEach(e => {
                var t, n, i;
                let r = null !== (t = e.read_state_type) && void 0 !== t ? t : es.ReadStateTypes.CHANNEL;
                if (r !== es.ReadStateTypes.CHANNEL) {
                    ;
                    e = {
                        id: (i = e).id,
                        read_state_type: i.read_state_type,
                        mention_count: i.badge_count,
                        last_message_id: i.last_acked_id
                    }
                }
                let s = eM.get(e.id, r);
                s._persisted = !0, s._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, s.flags = e.flags, s.lastViewed = e.last_viewed;
                let a = H.default.getBasicChannel(e.id);
                null != a && (0, U.isThread)(a.type) && (null == e.last_message_id || 0 === e.last_message_id) ? s.ackMessageId = F.default.fromTimestamp(eb(a.guild_id, a.id)) : s.ackedWhileCached ? -1 === F.default.compare(s.ackMessageId, e.last_message_id) && (s.ackMessageId = e.last_message_id) : s.ackMessageId = e.last_message_id, s.ackedWhileCached = void 0, s.ackPinTimestamp = eR(e.last_pin_timestamp), eM._mentionChannels.delete(s.channelId), s._mentionCount > 0 && s.canHaveMentions() && eM._mentionChannels.add(s.channelId)
            }), eM.resetGuildSentinels();
            let o = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            for (let e of (null != o && (eM.get(o, es.ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = F.default.fromTimestamp(Date.now())), function(e) {
                    let t = $.default.getCurrentUser();
                    if (!(0, L.inNotificationCenterEnabled)() || null == t) return 0;
                    let n = eM.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER);
                    e.forEach(e => {
                        if (null == e.since || e.type !== et.RelationshipTypes.PENDING_INCOMING) return;
                        let t = new Date(e.since).getTime();
                        (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = F.default.fromTimestamp(t))
                    })
                }(r), ey(s), i)) ey(null !== (n = e.channels) && void 0 !== n ? n : []), eF(e), eU(e);
            eB(), eT = setTimeout(() => (function(e) {
                let t = eA();
                for (let i of e) {
                    var n;
                    let e = null !== (n = i.read_state_type) && void 0 !== n ? n : es.ReadStateTypes.CHANNEL,
                        r = eM.get(i.id, e);
                    r.shouldDeleteReadState(t) && r.delete()
                }
            })(a.entries), 10 * G.default.Millis.SECOND)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                lazyPrivateChannels: t
            } = e;
            ey(t)
        },
        LOGOUT: eB,
        OVERLAY_INITIALIZE: function(e) {
            let {
                readStates: t,
                selectedChannelId: n
            } = e;
            eO(), e_ = null, eu = n, ed = x.default.getCurrentSidebarChannelId(eu), eM.clearAll(), t.forEach(e => {
                let t = eM.get(e.channelId);
                t.deserializeForOverlay(e), t.type === es.ReadStateTypes.CHANNEL && t.rebuildChannelState()
            })
        },
        CACHE_LOADED: function(e) {
            let {
                readStates: t
            } = e;
            ec = !0, eO(), t.forEach(e => {
                var t;
                let n = null !== (t = e.type) && void 0 !== t ? t : es.ReadStateTypes.CHANNEL;
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
            }), ey(null !== (t = n.channels) && void 0 !== t ? t : []), eF(n), eU(n)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t,
                isAfter: n,
                messages: i
            } = e, r = eM.get(t);
            r.loadedMessages = !0;
            let s = X.default.getMessages(t);
            null != s && (i.length > 0 && 1 === F.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount ? r.rebuildChannelState() : s.hasPresent() || s.jumpTargetId === r.ackMessageId ? r.rebuildChannelState() : n && null != r.ackMessageId && s.has(r.ackMessageId, !0) && (r.unreadCount += i.length, null == r.oldestUnreadMessageId && r.rebuildChannelState())), eP(i.map(e => e.thread).filter(k.isNotNullish))
        },
        MESSAGE_CREATE: function(e) {
            let t, n, {
                    channelId: r,
                    message: s,
                    isPushNotification: a
                } = e,
                o = eM.get(r);
            o.lastMessageId = s.id;
            let l = $.default.getCurrentUser(),
                u = H.default.getBasicChannel(r);
            if (null != s.author && null != l && s.author.id === l.id) return null != o.outgoingAck && o.clearOutgoingAck(), eX({
                channelId: r,
                messageId: s.id,
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
            } else null == d && (t = Z.default.getChannelId(), n = x.default.getCurrentSidebarChannelId(t));
            let c = t === r || n === r;
            if (c && ev(o) && !a || null != i && i.isInstanceFocused() && c && i.isInstanceUILocked() && i.isPinned(et.OverlayWidgets.TEXT)) return o.ack({
                messageId: s.id
            });
            (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale) && (o.oldestUnreadMessageId = s.id), o.unreadCount++, !(null != s.author && q.default.isBlocked(s.author.id) || s.type === et.MessageTypes.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === et.ChannelTypes.GROUP_DM) && function(e, t, n) {
                if (null != t && (0, C.isRawMessageMentioned)({
                        rawMessage: e,
                        userId: t.id,
                        suppressEveryone: J.default.isSuppressEveryoneEnabled(n.guildId),
                        suppressRoles: J.default.isSuppressRolesEnabled(n.guildId)
                    })) return !0;
                let i = H.default.getChannel(e.channel_id);
                return !!eg(i) || !!J.default.mentionOnAllMessages && null != i && !i.isVocal() && !J.default.isChannelMuted(i.guild_id, i.id) && J.default.resolvedMessageNotifications(i) === et.UserNotificationSettings.ALL_MESSAGES || !1
            }(s, l, o) && o.mentionCount++
        },
        MESSAGE_DELETE: eV,
        MESSAGE_DELETE_BULK: eV,
        MESSAGE_ACK: eX,
        CHANNEL_ACK: function(e) {
            let {
                channelId: t,
                messageId: n,
                immediate: i = !1,
                force: r = !1,
                context: s,
                location: a
            } = e, o = eM.get(t), l = o.ack({
                messageId: n,
                local: s !== et.CURRENT_APP_CONTEXT,
                immediate: i,
                force: r,
                isExplicitUserAction: !0,
                location: a
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
            } = e, n = x.default.getCurrentSidebarChannelId(t), i = H.default.getChannel(t);
            if (null != i) {
                var r;
                let e = eM.get(i.id);
                e.ackMessageIdAtChannelSelect = null !== (r = e.ackMessageId) && void 0 !== r ? r : F.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
            }
            eK(eu), eK(ed);
            let s = !1;
            return eu !== t && (s = ez(eu) || s, s = ez(ed) || s), (eu === t || (null == i ? void 0 : i.type) != null && et.ChannelTypesSets.GUILD_THREADS_ONLY.has(i.type)) && (s = ek(t) || s), eu === t && (s = ek(n) || s), eu = t, ed = n, s
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
                t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === V.default.getId() && (t.loadedMessages = !0)
            })(t),
            function(e) {
                let t = e.parent_id;
                eM.get(t).lastMessageId = e.id;
                let n = $.default.getCurrentUser();
                if (e.ownerId === (null == n ? void 0 : n.id)) eM.get(e.id)._persisted = !0, eX({
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
                    0 > F.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
                }
            })
        },
        LOAD_THREADS_SUCCESS: ex,
        LOAD_ARCHIVED_THREADS_SUCCESS: ex,
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
            for (let [n, i] of F.default.entries(ef)) i === e.windowId && (t = function(e, t) {
                if (null == e) return !1;
                let n = eM.get(e);
                return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), ek(e)
            }(n, e.focused) || t);
            return t
        },
        UPDATE_CHANNEL_DIMENSIONS: function(e) {
            let {
                channelId: t
            } = e;
            return ek(t)
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
            return eS = !1, ek(eu)
        },
        BULK_ACK: function(e) {
            var t, n, i;
            let {
                channels: r,
                context: s,
                onFinished: a
            } = e;
            t = r.filter(e => null != e.messageId && eJ.hasUnread(e.channelId, e.readStateType)), n = s, i = a, t.forEach(e => {
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
            return ef[t] !== n && (l()(void 0 === ef[t], "handleEnableAutomaticAck: channel already visible in another window"), ef[t] = n, ek(t))
        },
        DISABLE_AUTOMATIC_ACK: function(e) {
            let {
                channelId: t
            } = e;
            return ef[t] = void 0, !1
        },
        GUILD_FEATURE_ACK: eQ,
        GUILD_SCHEDULED_EVENT_CREATE: function(e) {
            let {
                guildScheduledEvent: t
            } = e, n = t.guild_id, i = eM.get(t.guild_id, es.ReadStateTypes.GUILD_EVENT);
            if (i.lastMessageId = t.id, eY(t)) {
                eQ({
                    type: "GUILD_FEATURE_ACK",
                    id: n,
                    ackType: es.ReadStateTypes.GUILD_EVENT,
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
            eM.get(n, es.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
        },
        GUILD_SCHEDULED_EVENT_DELETE: function(e) {
            let {
                guildScheduledEvent: t
            } = e, n = t.guild_id;
            if (eY(t)) return !1;
            eM.get(t.guild_id, es.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            return eM.clear(t.id, es.ReadStateTypes.GUILD_EVENT)
        },
        GUILD_UPDATE: function(e) {
            let {
                guild: t
            } = e, n = t.latest_onboarding_question_id;
            if (null == n) return;
            let i = eM.get(t.id, es.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
            i._guildId = t.id, i.lastMessageId = n
        },
        RESORT_THREADS: function(e) {
            let {
                channelId: t
            } = e;
            return ek(t)
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
            let r = eM.get(i, es.ReadStateTypes.NOTIFICATION_CENTER);
            r.lastMessageId = n.id;
            if (0, g.default.active) {
                eq(i, es.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
                return
            }
            r.mentionCount++
        },
        RELATIONSHIP_ADD: function(e) {
            let t = $.default.getCurrentUser();
            if (!(0, L.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== et.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== et.RelationshipTypes.FRIEND) return !1;
            let n = eM.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER),
                i = e.relationship.type === et.RelationshipTypes.FRIEND,
                r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                s = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
            s < r && (n.lastMessageId = F.default.fromTimestamp(r), (0, g.default.active) ? eq(t.id, es.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++)
        },
        RELATIONSHIP_REMOVE: function(e) {
            let t = $.default.getCurrentUser();
            if (!(0, L.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== et.RelationshipTypes.PENDING_INCOMING) return !1;
            let n = eM.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER),
                i = new Date(e.relationship.since).getTime();
            (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1))
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
            let s = eM.get(r, es.ReadStateTypes.NOTIFICATION_CENTER);
            n.forEach(e => {
                0 > F.default.compare(s.ackMessageId, e) && (s.mentionCount = Math.max(s.mentionCount - 1, 0))
            })
        },
        USER_NON_CHANNEL_ACK: function(e) {
            var t;
            let {
                ackType: n,
                ackedId: i,
                local: r
            } = e, s = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            return null != s && eq(s, n, i, r)
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
            return ek(t)
        }
    });
    t.default = eJ
}