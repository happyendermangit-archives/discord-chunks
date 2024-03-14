function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        shouldBadgeMessage: function() {
            return eC
        },
        default: function() {
            return eZ
        }
    }), n("222007"), n("70102"), n("424973"), n("702976");
    var s, r, a = n("627445"),
        o = n.n(a),
        l = n("866227"),
        u = n.n(l),
        d = n("446674"),
        c = n("872717"),
        f = n("862337"),
        _ = n("627929"),
        E = n("913144"),
        h = n("191225"),
        g = n("191145"),
        m = n("203288"),
        p = n("605250"),
        S = n("398604"),
        v = n("21121"),
        T = n("288518"),
        I = n("415435"),
        C = n("486503"),
        A = n("406297"),
        y = n("136511"),
        N = n("342176"),
        R = n("512395"),
        O = n("614305"),
        D = n("689275"),
        P = n("755624"),
        L = n("526311"),
        M = n("374363"),
        b = n("233069"),
        U = n("845078"),
        w = n("718517"),
        k = n("568734"),
        V = n("449008"),
        G = n("35468"),
        F = n("299039"),
        x = n("271938"),
        B = n("982108"),
        H = n("42203"),
        Y = n("162805"),
        j = n("760190"),
        W = n("341542"),
        K = n("305961"),
        z = n("603699"),
        q = n("377253"),
        X = n("957255"),
        Q = n("27618"),
        Z = n("18494"),
        J = n("282109"),
        $ = n("697218"),
        ee = n("471671"),
        et = n("49111"),
        en = n("272505"),
        ei = n("724210"),
        es = n("745049"),
        er = n("133335");
    let ea = new p.default("ReadStateStore");
    __OVERLAY__ && (i = n("901165").default);
    let eo = et.BasicPermissions.VIEW_CHANNEL | et.BasicPermissions.READ_MESSAGE_HISTORY,
        el = null,
        eu = null,
        ed = null,
        ec = !1,
        ef = [],
        e_ = !1,
        eE = null,
        eh = {},
        eg = 30 * w.default.Millis.DAY;

    function em() {
        return F.default.fromTimestamp(Date.now() - eg)
    }
    let ep = 0,
        eS = 0,
        ev = null;

    function eT() {
        ep = Date.now() - 7 * w.default.Millis.DAY, eS = Date.now() - 3 * w.default.Millis.DAY, clearTimeout(ev), ev = setTimeout(() => {
            E.default.dispatch({
                type: "DECAY_READ_STATES"
            })
        }, 1 * w.default.Millis.HOUR)
    }

    function eI(e) {
        if (null == e) return 0;
        let t = Date.parse(e);
        return isNaN(t) ? 0 : t
    }

    function eC(e, t) {
        let n = H.default.getChannel(e.channel_id);
        return !(null == n || Q.default.isBlocked(e.author.id)) && (!!((0, A.default)({
            message: e,
            userId: t.id,
            suppressEveryone: J.default.isSuppressEveryoneEnabled(n.guild_id),
            suppressRoles: J.default.isSuppressRolesEnabled(n.guild_id)
        }) || eA(n)) || !1)
    }

    function eA(e) {
        return null != e && e.isPrivate() && !J.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
    }
    async function ey(e) {
        if (0 === ef.length) {
            e_ = !1, null == e || e();
            return
        }
        e_ = !0;
        let t = ef.splice(0, 100);
        await eN(() => c.default.post({
            url: et.Endpoints.BULK_ACK,
            body: {
                read_states: t
            },
            oldFormErrors: !0
        })), await (0, f.timeoutPromise)(1e3), ey(e)
    }
    async function eN(e) {
        let t = x.default.getId();
        for (let n = 0; n < 3; n++) try {
            return await e()
        } catch (e) {
            if (ea.error("", e), n + 1 < 3 && (await (0, f.timeoutPromise)((n + 1) * 2e3), await G.default.awaitOnline(), t !== x.default.getId())) return Promise.reject(Error("User changed."))
        }
    }

    function eR(e) {
        if (e.type !== er.ReadStateTypes.CHANNEL) return !1;
        let t = H.default.getChannel(e.channelId),
            n = null != t && t.isForumPost();
        if (null != h.default.getConnectedActivityChannelId() && h.default.getActivityPanelMode() === en.ActivityPanelModes.PANEL && h.default.getFocusedLayout() === en.FocusedActivityLayouts.NO_CHAT || z.default.isIdle() || !e.canTrackUnreads()) return !1;
        if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
            let t = eh[e.channelId],
                n = null != t && ee.default.isFocused(t),
                s = null != i && i.isInstanceFocused() && i.isPinned(et.OverlayWidgets.TEXT);
            if (!n && !s) return !1
        }
        if (n && !e._persisted) return !0;
        let s = e.hasUnreadOrMentions();
        if (!s || (null == t ? void 0 : t.isForumLikeChannel()) === !0) return !1;
        let r = n && !e._isJoinedThread;
        if (!r && !Y.default.isAtBottom(e.channelId)) return !1;
        let a = g.default.getLayout(e.channelId),
            o = g.default.getChatOpen(e.channelId);
        if (!o && (a === et.ChannelLayouts.NO_CHAT || a === et.ChannelLayouts.FULL_SCREEN) || null == eh[e.channelId]) return !1;
        let l = q.default.getMessages(e.channelId);
        return !(null == l || !l.ready || l.loadingMore || (0, O.default)() && !o) && !0
    }(r = s || (s = {}))[r.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", r[r.IS_THREAD = 2] = "IS_THREAD";
    class eO {
        static forEach(e) {
            for (let n of Object.keys(eO._readStates)) {
                var t;
                let i = null !== (t = eO._readStates[parseInt(n)]) && void 0 !== t ? t : {};
                for (let t of Object.keys(i))
                    if (!1 === e(i[t])) break
            }
        }
        static get(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL,
                i = null === (t = eO._readStates[n]) || void 0 === t ? void 0 : t[e];
            return null == i && (i = new eO(e, n), null == eO._readStates[n] && (eO._readStates[n] = {}), eO._readStates[n][e] = i), i
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
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return null === (t = eO._readStates[n]) || void 0 === t ? void 0 : t[e]
        }
        static getMentionChannelIds() {
            let e = [];
            for (let t of eO._mentionChannels) {
                let n = eO.getIfExists(t);
                null != n && n.canHaveMentions() ? e.push(t) : eO._mentionChannels.delete(t)
            }
            return e
        }
        static getValue(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL,
                i = arguments.length > 2 ? arguments[2] : void 0,
                s = arguments.length > 3 ? arguments[3] : void 0,
                r = null === (t = eO._readStates[n]) || void 0 === t ? void 0 : t[e];
            return null == r ? s : i(r)
        }
        static clear(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return (null === (t = eO._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eO._readStates[n][e], eO._mentionChannels.delete(e), !0)
        }
        static clearAll() {
            eO._readStates = {}, eO._mentionChannels.clear()
        }
        serialize(e) {
            let {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: s,
                _isActiveThread: r,
                _isJoinedThread: a,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: d,
                _ackMessageId: c,
                _ackMessageTimestamp: f,
                ackPinTimestamp: _,
                isManualAck: E,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: g,
                oldestUnreadMessageIdStale: m,
                estimated: p,
                _mentionCount: S,
                flags: v,
                lastViewed: T
            } = this;
            if (e) return {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: s,
                _isActiveThread: r,
                _isJoinedThread: a,
                _persisted: o,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: d,
                _ackMessageId: c,
                _ackMessageTimestamp: f,
                ackPinTimestamp: _,
                isManualAck: E,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: g,
                oldestUnreadMessageIdStale: m,
                estimated: p,
                _mentionCount: S,
                flags: v,
                lastViewed: T
            };
            let I = {
                channelId: t,
                type: n,
                _guildId: i,
                _persisted: o,
                _lastMessageId: u,
                _lastMessageTimestamp: d,
                _ackMessageId: c,
                _ackMessageTimestamp: f,
                ackPinTimestamp: _,
                lastPinTimestamp: h,
                _mentionCount: S,
                flags: v
            };
            return null != T && T > 0 && (I.lastViewed = T), s && (I._isThread = s, I._isActiveThread = r, I._isJoinedThread = a), I
        }
        deserializeForOverlay(e) {
            let {
                channelId: t,
                type: n,
                _guildId: i,
                _isThread: s,
                _isActiveJoinedThread: r,
                _isActiveThread: a,
                _isJoinedThread: o,
                _persisted: l,
                loadedMessages: u,
                _lastMessageId: d,
                _lastMessageTimestamp: c,
                _ackMessageId: f,
                _ackMessageTimestamp: _,
                ackPinTimestamp: E,
                isManualAck: h,
                lastPinTimestamp: g,
                _oldestUnreadMessageId: m,
                oldestUnreadMessageIdStale: p,
                estimated: S,
                _unreadCount: v,
                _mentionCount: T,
                flags: I,
                lastViewed: C
            } = e;
            this.channelId = t, this.type = null != n ? n : er.ReadStateTypes.CHANNEL, this._guildId = i, this._isThread = null != s && s, null != r ? (this._isActiveThread = r, this._isJoinedThread = r) : (this._isActiveThread = null != a && a, this._isJoinedThread = null != o && o), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = d, this._lastMessageTimestamp = c, this._ackMessageId = f, this._ackMessageTimestamp = _, this.ackPinTimestamp = E, this.isManualAck = null != h && h, this.lastPinTimestamp = g, this._oldestUnreadMessageId = m, this.oldestUnreadMessageIdStale = null != p && p, this.estimated = null != S && S, this._unreadCount = null != v ? v : 0, this._mentionCount = T, this.flags = I, this.lastViewed = C, eO._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eO._mentionChannels.add(this.channelId)
        }
        incrementGuildUnreadsSentinel() {
            null != this._guildId && eO.getGuildSentinels(this._guildId).unreadsSentinel++
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
            (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eO._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eO._mentionChannels.add(this.channelId)
        }
        guessAckMessageId() {
            let e = q.default.getMessages(this.channelId);
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
            if (this.type !== er.ReadStateTypes.CHANNEL) return !1;
            let e = H.default.getChannel(this.channelId);
            return null != e && e.isPrivate()
        }
        rebuildChannelState(e) {
            var t, n;
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                s = arguments.length > 2 ? arguments[2] : void 0;
            if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, i && (this.mentionCount = 0), this.hasUnread()) {
                let e = $.default.getCurrentUser(),
                    t = this.getAckTimestamp(),
                    s = !1,
                    r = !1,
                    a = null,
                    o = q.default.getMessages(this.channelId);
                o.forAll(n => {
                    if (s) {
                        var o;
                        this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : n.id
                    } else s = n.id === this._ackMessageId;
                    F.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eC(n, e) && this.mentionCount++, a = null != a ? a : n.id) : r = !0
                }), this.estimated = !o.hasPresent() || !(s || r) && o.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : a
            }
            null != s && (this.mentionCount = s)
        }
        handleGuildEventRemoval(e, t) {
            var n;
            if (F.default.compare(this.ackMessageId, t) >= 0) return;
            let i = S.default.getGuildScheduledEventsForGuild(e),
                s = this.getAckTimestamp();
            if (isNaN(s)) return;
            let r = null !== (n = this._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(s),
                a = null,
                o = 0;
            i.forEach(e => {
                (0, S.isEventUpcoming)(e) && (F.default.compare(e.id, a) > 0 && (a = e.id), F.default.compare(e.id, r) > 0 && o++)
            }), this.lastMessageId = a, this.mentionCount = o
        }
        canTrackUnreads() {
            if (this.type !== er.ReadStateTypes.CHANNEL) return !0;
            if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
            let e = H.default.getBasicChannel(this.channelId);
            return null != e && ("basicPermissions" in e ? U.default.has(e.basicPermissions, et.BasicPermissions.VIEW_CHANNEL) : !m.default.isChannelGated(this.guildId, this.channelId) || X.default.can(et.Permissions.VIEW_CHANNEL, e))
        }
        canBeUnread() {
            return !(this._isThread && !this._isJoinedThread || (0, I.isMessageRequestOrSpamRequest)(this.channelId, [T.default, C.default]) || !this._isThread && (0, R.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < ep || !J.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
        }
        canHaveMentions() {
            return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, I.isMessageRequestOrSpamRequest)(this.channelId, [T.default, C.default]) || (0, R.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < ep) && this.canTrackUnreads()
        }
        getGuildChannelUnreadState(e, t, n, i, s) {
            if (t && (this._lastMessageTimestamp < ep || !J.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
                mentionCount: 0,
                unread: !1
            };
            if ("basicPermissions" in e) {
                if (!U.default.has(e.basicPermissions, et.BasicPermissions.VIEW_CHANNEL)) return {
                    mentionCount: 0,
                    unread: !1
                }
            } else if (m.default.isChannelGated(this.guildId, this.channelId) && !X.default.can(et.Permissions.VIEW_CHANNEL, e)) return {
                mentionCount: 0,
                unread: !1
            };
            return i || s ? {
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
            return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eS && M.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
            if (this.type !== er.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
            if (null == e) {
                if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                this._persisted = !0, eN(() => c.default.post({
                    url: et.Endpoints.PINS_ACK(this.channelId),
                    oldFormErrors: !0
                }))
            }
            let t = eI(e);
            return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
        }
        ack(e) {
            let {
                messageId: t,
                local: n = !1,
                immediate: i = !1,
                force: s = !1,
                isExplicitUserAction: r = !1,
                location: a = {
                    section: et.AnalyticsSections.CHANNEL
                },
                trackAnalytics: o = !0
            } = e;
            if (!this._shouldAck(s, n, r) || !s && !this.canTrackUnreads()) return !1;
            let l = this.hasMentions();
            return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, ec && (this.ackedWhileCached = !0), function(e) {
                if (null == e) return;
                let t = eO.get(e);
                if (t.type !== er.ReadStateTypes.CHANNEL) return;
                let n = H.default.getChannel(t.channelId);
                if (null == n || !n.isForumPost() || null == n.parent_id) return;
                let i = n.parent_id,
                    s = eO.get(i);
                D.default.hasLoaded(n.guild_id) && F.default.keys(D.default.getThreadsForParent(n.guild_id, i)).every(e => eQ.hasOpenedThread(e) || 0 > F.default.compare(e, s.ackMessageId)) && s.ack({})
            }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
                this.type === er.ReadStateTypes.CHANNEL ? this._ack(a, o) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
            }, l || i ? 0 : 3e3)), this.outgoingAck = t), !0)
        }
        takeSnapshot() {
            let {
                default: e
            } = n("952451"), t = this.guildId;
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
            return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== er.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (i = H.default.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1
        }
        _ack(e, t) {
            let {
                outgoingAck: i
            } = this;
            if (null == i) return;
            let s = x.default.getId(),
                r = ed;
            this._persisted = !0;
            let a = this.recalculateFlags(),
                o = a === this.flags ? void 0 : a;
            eN(() => c.default.post({
                url: et.Endpoints.MESSAGE_ACK(this.channelId, i),
                body: {
                    token: ed,
                    last_viewed: this.lastViewed,
                    flags: o
                },
                oldFormErrors: !0
            })).then(e => {
                null != e && (ed === r && s === x.default.getId() && (ed = e.body.token), E.default.dispatch({
                    type: "MESSAGE_ACKED"
                }), t && n.el("199808").then(n.bind(n, "199808")).then(e => {
                    let {
                        default: t
                    } = e;
                    t(this.channelId)
                }))
            })
        }
        recalculateFlags() {
            if (this.type !== er.ReadStateTypes.CHANNEL) return;
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
                    case er.ReadStateTypes.GUILD_HOME:
                    case er.ReadStateTypes.GUILD_EVENT:
                    case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        e = et.Endpoints.GUILD_FEATURE_ACK(n, t, i);
                        break;
                    case er.ReadStateTypes.NOTIFICATION_CENTER:
                        e = et.Endpoints.USER_NON_CHANNEL_ACK(t, i);
                        break;
                    default:
                        return
                }
                this._persisted = !0, eN(() => c.default.post({
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
            ea.log("Deleting ReadState", this.channelId, this.type, {
                remote: t,
                persisted: this._persisted,
                channelMissing: null == n,
                isOld: eU(this, em()),
                validType: null != n && b.ALL_CHANNEL_TYPES.has(n.type),
                readableType: null != n && (0, b.isReadableType)(n.type),
                oldThreadCutoff: em(),
                mentionCount: this.mentionCount,
                channelId: this.channelId,
                ackMessageId: this._ackMessageId,
                lastMessageId: this._lastMessageId
            }), t && this._persisted && c.default.delete({
                url: et.Endpoints.CHANNEL_ACK(this.channelId),
                body: {
                    version: 2,
                    read_state_type: this.type
                },
                oldFormErrors: !0
            }), null === (e = eO._readStates[this.type]) || void 0 === e || delete e[this.channelId], eO._mentionChannels.delete(this.channelId)
        }
        shouldDeleteReadState(e) {
            if (0 !== W.default.totalUnavailableGuilds) return !1;
            if (null != this.type && this.type !== er.ReadStateTypes.CHANNEL) return ! function(e) {
                switch (e.type) {
                    case er.ReadStateTypes.GUILD_HOME:
                    case er.ReadStateTypes.GUILD_EVENT:
                    case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        return null != K.default.getGuild(e.channelId);
                    case er.ReadStateTypes.NOTIFICATION_CENTER:
                        var t;
                        return F.default.cast(null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                    default:
                        return !0
                }
            }(this);
            let t = H.default.getBasicChannel(this.channelId);
            if (null == t) return !!eU(this, e) || !1;
            return !!b.ALL_CHANNEL_TYPES.has(t.type) && (!(0, b.isReadableType)(t.type) || !(0, b.isPrivate)(t.type) && (!!(b.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
                let i = e.guildId,
                    s = null != i && D.default.isActive(i, t.parent_id, e.channelId);
                return !s && eU(e, n)
            }(this, t, e)) || !!(this.mentionCount > 0) && !X.default.canBasicChannel(eo, t) || !1))
        }
        getAckTimestamp() {
            let e, t;
            if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
            if (this._isThread) return this._ackMessageTimestamp = eM(this.guildId, this.channelId), this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
            if (this.type === er.ReadStateTypes.GUILD_EVENT || this.type === er.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = K.default.getGuild(this.channelId);
            else if ((0, ei.isStaticChannelRoute)(this.channelId)) e = K.default.getGuild(this.guildId);
            else {
                let t = H.default.getChannel(this.channelId);
                if (null != t) {
                    let n = t.getGuildId();
                    e = K.default.getGuild(n)
                }
            }
            return t = null != e ? eb(e) : F.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
        }
        get oldestUnreadTimestamp() {
            return null != this.oldestUnreadMessageId ? F.default.extractTimestamp(this.oldestUnreadMessageId) : 0
        }
        syncThreadSettings() {
            this._isThread = !0;
            let e = H.default.getChannel(this.channelId);
            if (null == e) return ea.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
            let t = this.guildId,
                n = null != t && D.default.isActive(t, e.parent_id, this.channelId),
                i = P.default.hasJoined(this.channelId);
            return (this._isActiveThread !== n || this._isJoinedThread !== i) && (this._isActiveThread = n, this._isJoinedThread = i, !0)
        }
        recordLastViewedTime() {
            let e = Math.ceil((Date.now() - F.DISCORD_EPOCH) / w.default.Millis.DAY);
            e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
                force: !0,
                trackAnalytics: !1
            }))
        }
        constructor(e, t = er.ReadStateTypes.CHANNEL) {
            this.type = er.ReadStateTypes.CHANNEL, this.outgoingAckTimer = null, this.ackMessageIdAtChannelSelect = null, this.ackedWhileCached = void 0, this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
        }
    }

    function eD(e) {
        e.forEach(e => {
            if ((0, b.isReadableType)(e.type)) {
                let t = eO.get(e.id);
                t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eI(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(ei.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), b.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
            }
        })
    }

    function eP(e) {
        e.forEach(e => {
            if ((0, b.isReadableType)(e.type)) {
                var t;
                let n = eO.get(e.id);
                n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eI(e.last_pin_timestamp), n._isResourceChannel = (0, k.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, ei.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), b.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
            }
        })
    }

    function eL(e) {
        (function(e) {
            var t;
            null === (t = e.threads) || void 0 === t || t.forEach(t => {
                if (!b.ALL_CHANNEL_TYPES.has(t.type)) return;
                let n = eO.get(t.id);
                n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eI(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(eM(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eM(e.id, t.id))
            })
        })(e),
        function(e) {
            var t, n;
            if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eO.getIfExists(e.id, er.ReadStateTypes.GUILD_EVENT)) return;
            let i = eO.get(e.id, er.ReadStateTypes.GUILD_EVENT);
            i._guildId = e.id;
            let s = 0,
                r = null,
                a = null !== (n = i._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(i.getAckTimestamp());
            e.guild_scheduled_events.forEach(e => {
                F.default.compare(e.id, r) > 0 && (r = e.id), F.default.compare(e.id, a) > 0 && s++
            }), i.lastMessageId = r, i.mentionCount = s
        }(e),
        function(e) {
            let t = eO.get(e.id, er.ReadStateTypes.GUILD_HOME);
            t.lastMessageId = F.default.fromTimestamp(u(Date.now()).subtract(24, "h").valueOf())
        }(e),
        function(e) {
            let t = K.default.getGuild(e.id);
            if (null == t) return;
            let n = null == t ? void 0 : t.latestOnboardingQuestionId;
            if (null == n) return;
            let i = eO.get(t.id, er.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
            i._guildId = t.id, i.lastMessageId = n
        }(e)
    }
    eO._guildReadStateSentinels = {}, eO._readStates = {}, eO._mentionChannels = new Set;

    function eM(e, t) {
        var n, i, s;
        let r = H.default.getChannel(t),
            a = K.default.getGuild(null != e ? e : null == r ? void 0 : r.guild_id),
            o = (null == r ? void 0 : r.isForumPost()) ? 0 : eb(a),
            l = (null !== (s = null === (n = P.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== s ? s : 0) - 5e3,
            u = null == r ? void 0 : null === (i = r.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
            d = null != u ? new Date(u).getTime() - 1 : 0,
            c = Math.max(l, d);
        return c <= 0 && (c = F.default.extractTimestamp(t) - 1), isNaN(o) ? c : Math.max(o, c)
    }

    function eb(e) {
        if (null != e && null != e.joinedAt) {
            if (e.joinedAt instanceof Date) return e.joinedAt.getTime();
            if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
            else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
        }
        return Date.now()
    }

    function eU(e, t) {
        return !!(e.mentionCount > 0) || !(F.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && F.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && F.default.compare(e._lastMessageId, t) > 0) && !0
    }

    function ew(e) {
        if (null != e) {
            let t = eO.get(e);
            if (eR(t)) return t.ack({})
        }
        return !1
    }

    function ek() {
        null != eE && clearTimeout(eE)
    }

    function eV(e) {
        if (null != e.channelUpdates) {
            var t;
            eD(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
        }
        if (null != e.channelTimestampUpdates)
            for (let t of e.channelTimestampUpdates) {
                let e = eO.get(t.id);
                null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eI(t.last_pin_timestamp))
            }
    }

    function eG(e) {
        let {
            channelId: t
        } = e, n = eO.get(t);
        n.rebuildChannelState()
    }

    function eF(e) {
        let {
            threads: t
        } = e;
        eP(t)
    }

    function ex(e) {
        let {
            messages: t,
            threads: n
        } = e;
        for (let e of t) eP(e.map(e => {
            let {
                thread: t
            } = e;
            return t
        }).filter(V.isNotNullish));
        eP(n)
    }

    function eB(e) {
        let t = $.default.getCurrentUser();
        return null != e.creator_id && null != t && e.creator_id === t.id
    }

    function eH(e) {
        let {
            channel: t
        } = e;
        return eO.clear(t.id)
    }

    function eY() {
        let e = B.default.getCurrentSidebarChannelId(el),
            t = !1;
        return eu !== e ? (t = eW(eu), eu = e) : t = ew(e) || t, t
    }

    function ej(e) {
        if (null == e) return;
        let t = eO.get(e);
        t.isManualAck = !1
    }

    function eW(e) {
        if (null == e) return !1;
        let t = eO.get(e);
        return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
    }

    function eK(e) {
        let {
            channelId: t,
            messageId: n,
            manual: i,
            newMentionCount: s
        } = e, r = eO.get(t);
        return i ? (r.rebuildChannelState(n, !0, s), !0) : n !== r._ackMessageId && r.ack({
            messageId: n,
            local: !0
        })
    }

    function ez(e) {
        let {
            id: t,
            ackType: n,
            ackedId: i,
            local: s
        } = e;
        return eq(t, n, i, s)
    }

    function eq(e, t, n, i) {
        var s;
        let r = eO.get(e, t);
        return n !== r.ackMessageId && r.lastMessageId !== r.ackMessageId && (null != r.lastMessageId || 0 !== r.mentionCount) && (n = null !== (s = null != n ? n : r.lastMessageId) && void 0 !== s ? s : F.default.fromTimestamp(r.getAckTimestamp()), r.ack({
            messageId: n,
            local: null == i || i
        }))
    }
    class eX extends d.default.Store {
        initialize() {
            this.waitFor(Y.default, $.default, K.default, W.default, H.default, Z.default, q.default, X.default, g.default, D.default, P.default, B.default, S.default, j.default, m.default, J.default, ee.default, y.default, T.default, M.default, C.default), this.syncWith([B.default], eY)
        }
        getReadStatesByChannel() {
            var e;
            return null !== (e = eO._readStates[er.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
        }
        getForDebugging(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getIfExists(e, t)
        }
        getNotifCenterReadState(e) {
            var t;
            return null === (t = eO._readStates[er.ReadStateTypes.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e]
        }
        hasUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
        }
        hasTrackedUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
        }
        isForumPostUnread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.isForumPostUnread(), !1)
        }
        getUnreadCount(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
        }
        getMentionCount(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0)
        }
        getGuildChannelUnreadState(e, t, n, i, s) {
            return eO.getValue(e.id, er.ReadStateTypes.CHANNEL, r => r.getGuildChannelUnreadState(e, t, n, i, s), {
                mentionCount: 0,
                unread: !1
            })
        }
        hasRecentlyVisitedAndRead(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
        }
        ackMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
        }
        getTrackedAckMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
        }
        lastMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.lastMessageId, null)
        }
        lastMessageTimestamp(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.lastMessageTimestamp, 0)
        }
        lastPinTimestamp(e) {
            return eO.getValue(e, er.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
        }
        getOldestUnreadMessageId(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
        }
        getOldestUnreadTimestamp(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
        }
        isEstimated(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e.estimated, !1)
        }
        hasOpenedThread(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
            return eO.getValue(e, t, e => e._persisted, !1)
        }
        hasUnreadPins(e) {
            return eO.getValue(e, er.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
        }
        isNewForumThread(e, t, n) {
            let i = eO.get(t),
                s = eO.get(e);
            if (!0 === s._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= F.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
            let r = eb(n),
                a = F.default.extractTimestamp(e);
            return a > r
        }
        getAllReadStates(e) {
            let t = [];
            return eO.forEach(n => {
                switch (n.type) {
                    case er.ReadStateTypes.GUILD_HOME:
                    case er.ReadStateTypes.GUILD_EVENT:
                    case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                        let i = K.default.getGuild(n.channelId);
                        null != i && t.push(n.serialize(e));
                        break;
                    case er.ReadStateTypes.NOTIFICATION_CENTER:
                        var s;
                        let r = F.default.cast(null === (s = $.default.getCurrentUser()) || void 0 === s ? void 0 : s.id);
                        r === n.channelId && t.push(n.serialize(e));
                        break;
                    default:
                        t.push(n.serialize(e))
                }
            }), t
        }
        getGuildUnreadsSentinel(e) {
            return eO.getGuildSentinels(e).unreadsSentinel
        }
        getMentionChannelIds() {
            return eO.getMentionChannelIds()
        }
        getSnapshot(e, t) {
            let n = eO.get(e);
            return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
        }
    }
    eX.displayName = "ReadStateStore";
    let eQ = new eX(E.default, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
            let {
                changesByChannelId: t
            } = e;
            for (let e in t) {
                var n, i;
                let s = t[e],
                    r = eO.getIfExists(e);
                if (null == r) continue;
                let a = [null === (n = s.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (i = s.modified_messages) && void 0 !== i ? i : []).filter(V.isNotNullish);
                for (let e of a) 1 === F.default.compare(e.id, r.lastMessageId) && (r.lastMessageId = e.id)
            }
        },
        CONNECTION_OPEN: function(e) {
            var t, n;
            let {
                guilds: i,
                relationships: s,
                initialPrivateChannels: r,
                readState: a
            } = e;
            eT(), ed = null, !ec && !a.partial && eO.clearAll(), ec = !1, a.entries.forEach(e => {
                var t, n, i;
                let s = null !== (t = e.read_state_type) && void 0 !== t ? t : er.ReadStateTypes.CHANNEL;
                if (s !== er.ReadStateTypes.CHANNEL) {
                    ;
                    e = {
                        id: (i = e).id,
                        read_state_type: i.read_state_type,
                        mention_count: i.badge_count,
                        last_message_id: i.last_acked_id
                    }
                }
                let r = eO.get(e.id, s);
                r._persisted = !0, r._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, r.flags = e.flags, r.lastViewed = e.last_viewed;
                let a = H.default.getBasicChannel(e.id);
                null != a && (0, b.isThread)(a.type) && (null == e.last_message_id || 0 === e.last_message_id) ? r.ackMessageId = F.default.fromTimestamp(eM(a.guild_id, a.id)) : r.ackedWhileCached ? -1 === F.default.compare(r.ackMessageId, e.last_message_id) && (r.ackMessageId = e.last_message_id) : r.ackMessageId = e.last_message_id, r.ackedWhileCached = void 0, r.ackPinTimestamp = eI(e.last_pin_timestamp), eO._mentionChannels.delete(r.channelId), r._mentionCount > 0 && r.canHaveMentions() && eO._mentionChannels.add(r.channelId)
            }), eO.resetGuildSentinels();
            let o = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null != o) {
                let e = eO.get(o, er.ReadStateTypes.NOTIFICATION_CENTER);
                e.lastMessageId = F.default.fromTimestamp(Date.now())
            }
            for (let e of (function(e) {
                    let t = $.default.getCurrentUser();
                    if (!(0, N.inNotificationCenterEnabled)() || null == t) return 0;
                    let n = eO.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER);
                    e.forEach(e => {
                        if (null == e.since || e.type !== et.RelationshipTypes.PENDING_INCOMING) return;
                        let t = new Date(e.since).getTime(),
                            i = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
                        i < t && (n.mentionCount++, n.lastMessageId = F.default.fromTimestamp(t))
                    })
                }(s), eD(r), i)) eD(null !== (n = e.channels) && void 0 !== n ? n : []), eV(e), eL(e);
            ek(), eE = setTimeout(() => (function(e) {
                let t = em();
                for (let i of e) {
                    var n;
                    let e = null !== (n = i.read_state_type) && void 0 !== n ? n : er.ReadStateTypes.CHANNEL,
                        s = eO.get(i.id, e);
                    s.shouldDeleteReadState(t) && s.delete()
                }
            })(a.entries), 10 * w.default.Millis.SECOND)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                lazyPrivateChannels: t
            } = e;
            eD(t)
        },
        LOGOUT: ek,
        OVERLAY_INITIALIZE: function(e) {
            let {
                readStates: t,
                selectedChannelId: n
            } = e;
            eT(), ed = null, el = n, eu = B.default.getCurrentSidebarChannelId(el), eO.clearAll(), t.forEach(e => {
                let t = eO.get(e.channelId);
                t.deserializeForOverlay(e), t.type === er.ReadStateTypes.CHANNEL && t.rebuildChannelState()
            })
        },
        CACHE_LOADED: function(e) {
            let {
                readStates: t
            } = e;
            ec = !0, eT(), t.forEach(e => {
                var t;
                let n = null !== (t = e.type) && void 0 !== t ? t : er.ReadStateTypes.CHANNEL;
                e.type = n, null == eO._readStates[n] && (eO._readStates[n] = {}), eO._readStates[n][e.channelId] = (0, _.dangerouslyCast)(e, eO)
            })
        },
        GUILD_CREATE: function(e) {
            var t;
            let {
                guild: n
            } = e, i = em();
            eO.forEach(e => {
                e.guildId === n.id && e.shouldDeleteReadState(i) && e.delete(!1)
            }), eD(null !== (t = n.channels) && void 0 !== t ? t : []), eV(n), eL(n)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t,
                isAfter: n,
                messages: i
            } = e, s = eO.get(t);
            s.loadedMessages = !0;
            let r = q.default.getMessages(t);
            null != r && (i.length > 0 && 1 === F.default.compare(i[0].id, s.ackMessageId) && 0 === s.unreadCount ? s.rebuildChannelState() : r.hasPresent() || r.jumpTargetId === s.ackMessageId ? s.rebuildChannelState() : n && null != s.ackMessageId && r.has(s.ackMessageId, !0) && (s.unreadCount += i.length, null == s.oldestUnreadMessageId && s.rebuildChannelState())), eP(i.map(e => e.thread).filter(V.isNotNullish))
        },
        MESSAGE_CREATE: function(e) {
            let t, n, {
                    channelId: s,
                    message: r,
                    isPushNotification: a
                } = e,
                o = eO.get(s);
            o.lastMessageId = r.id;
            let l = $.default.getCurrentUser(),
                u = H.default.getBasicChannel(s);
            if (null != r.author && null != l && r.author.id === l.id) return null != o.outgoingAck && o.clearOutgoingAck(), eK({
                channelId: s,
                messageId: r.id,
                manual: !1
            });
            let d = (0, v.getRootNavigationRefIfInExperiment)();
            if ((null == d ? void 0 : d.isReady()) === !0) {
                let e = d.getCurrentRoute(),
                    n = g.default.getChatOpen(o.channelId);
                if (n) t = o.channelId;
                else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
                else if ((null == e ? void 0 : e.name) === "guilds") {
                    var c;
                    t = null === (c = e.params) || void 0 === c ? void 0 : c.channelId
                }
            } else null == d && (t = Z.default.getChannelId(), n = B.default.getCurrentSidebarChannelId(t));
            let f = t === s || n === s;
            if (f && eR(o) && !a || null != i && i.isInstanceFocused() && f && i.isInstanceUILocked() && i.isPinned(et.OverlayWidgets.TEXT)) return o.ack({
                messageId: r.id
            });
            (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale) && (o.oldestUnreadMessageId = r.id), o.unreadCount++;
            let _ = null != r.author && Q.default.isBlocked(r.author.id) || r.type === et.MessageTypes.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === et.ChannelTypes.GROUP_DM;
            !_ && function(e, t, n) {
                if (null != t && (0, A.isRawMessageMentioned)({
                        rawMessage: e,
                        userId: t.id,
                        suppressEveryone: J.default.isSuppressEveryoneEnabled(n.guildId),
                        suppressRoles: J.default.isSuppressRolesEnabled(n.guildId)
                    })) return !0;
                let i = H.default.getChannel(e.channel_id);
                return !!eA(i) || !!J.default.mentionOnAllMessages && null != i && !i.isVocal() && !J.default.isChannelMuted(i.guild_id, i.id) && J.default.resolvedMessageNotifications(i) === et.UserNotificationSettings.ALL_MESSAGES || !1
            }(r, l, o) && o.mentionCount++
        },
        MESSAGE_DELETE: eG,
        MESSAGE_DELETE_BULK: eG,
        MESSAGE_ACK: eK,
        CHANNEL_ACK: function(e) {
            let {
                channelId: t,
                messageId: n,
                immediate: i = !1,
                force: s = !1,
                context: r,
                location: a
            } = e, o = eO.get(t), l = o.ack({
                messageId: n,
                local: r !== et.CURRENT_APP_CONTEXT,
                immediate: i,
                force: s,
                isExplicitUserAction: !0,
                location: a
            });
            return null != n ? (o.rebuildChannelState(), !0) : l
        },
        CHANNEL_LOCAL_ACK: function(e) {
            let {
                channelId: t
            } = e, n = eO.get(t);
            return n.ack({
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
            } = e, i = eO.get(t);
            return i.ackPins(n)
        },
        CHANNEL_PINS_UPDATE: function(e) {
            let {
                channelId: t,
                lastPinTimestamp: n
            } = e, i = eO.get(t), s = eI(n);
            return i.lastPinTimestamp !== s && (i.lastPinTimestamp = s, !0)
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e, n = B.default.getCurrentSidebarChannelId(t), i = H.default.getChannel(t);
            if (null != i) {
                var s;
                let e = eO.get(i.id);
                e.ackMessageIdAtChannelSelect = null !== (s = e.ackMessageId) && void 0 !== s ? s : F.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
            }
            ej(el), ej(eu);
            let r = !1;
            return el !== t && (r = eW(el) || r, r = eW(eu) || r), (el === t || (null == i ? void 0 : i.type) != null && et.ChannelTypesSets.GUILD_THREADS_ONLY.has(i.type)) && (r = ew(t) || r), el === t && (r = ew(n) || r), el = t, eu = n, r
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t) return;
            let n = eO.get(t);
            if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
                isExplicitUserAction: !0
            })
        },
        CHANNEL_CREATE: function(e) {
            let {
                channel: t
            } = e;
            if (!(0, b.isReadableType)(t.type)) return !1;
            let n = eO.get(t.id);
            n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eI(t.lastPinTimestamp)
        },
        THREAD_CREATE: function(e) {
            let {
                channel: t
            } = e;
            (function(e) {
                if (!b.ALL_CHANNEL_TYPES.has(e.type)) return 0;
                let t = eO.get(e.id);
                t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eI(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === x.default.getId() && (t.loadedMessages = !0)
            })(t),
            function(e) {
                let t = e.parent_id,
                    n = eO.get(t);
                n.lastMessageId = e.id;
                let i = $.default.getCurrentUser();
                if (e.ownerId === (null == i ? void 0 : i.id)) {
                    let n = eO.get(e.id);
                    n._persisted = !0, eK({
                        channelId: t,
                        messageId: e.id,
                        manual: !1
                    })
                }
            }(t)
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            return !!b.ALL_CHANNEL_TYPES.has(t.type) && eO.get(t.id).syncThreadSettings()
        },
        THREAD_LIST_SYNC: function(e) {
            let {
                threads: t
            } = e;
            t.forEach(e => {
                if (!b.ALL_CHANNEL_TYPES.has(e.type)) return;
                let t = eO.get(e.id);
                if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eI(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = P.default.hasJoined(e.id), e.isForumPost()) {
                    let t = eO.get(e.parent_id);
                    0 > F.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
                }
            })
        },
        LOAD_THREADS_SUCCESS: eF,
        LOAD_ARCHIVED_THREADS_SUCCESS: eF,
        SEARCH_FINISH: ex,
        MOD_VIEW_SEARCH_FINISH: ex,
        THREAD_MEMBER_UPDATE: function(e) {
            let {
                id: t
            } = e;
            return eO.get(t).syncThreadSettings()
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            return (0, L.doesThreadMembersActionAffectMe)(e) && eO.get(e.id).syncThreadSettings()
        },
        CHANNEL_DELETE: eH,
        THREAD_DELETE: eH,
        WINDOW_FOCUS: function(e) {
            let t = !1;
            for (let [n, i] of F.default.entries(eh)) i === e.windowId && (t = function(e, t) {
                if (null == e) return !1;
                let n = eO.get(e);
                return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), ew(e)
            }(n, e.focused) || t);
            return t
        },
        UPDATE_CHANNEL_DIMENSIONS: function(e) {
            let {
                channelId: t
            } = e;
            return ew(t)
        },
        CURRENT_USER_UPDATE: function() {
            ed = null
        },
        DRAWER_OPEN: function() {
            if (null != el) {
                let e = eO.get(el);
                !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
            }
            return !1
        },
        DRAWER_CLOSE: function() {
            return ew(el)
        },
        BULK_ACK: function(e) {
            var t, n, i;
            let {
                channels: s,
                context: r,
                onFinished: a
            } = e, o = s.filter(e => null != e.messageId && eQ.hasUnread(e.channelId, e.readStateType));
            t = o, n = r, i = a, t.forEach(e => {
                let {
                    channelId: t,
                    messageId: n,
                    readStateType: i
                } = e, s = eO.get(t, i);
                s.ack({
                    messageId: n,
                    local: !0,
                    immediate: void 0,
                    force: void 0,
                    isExplicitUserAction: !0
                })
            }), n !== et.CURRENT_APP_CONTEXT || (ef.push(...t.map(e => ({
                channel_id: e.channelId,
                message_id: e.messageId,
                read_state_type: e.readStateType
            }))), e_ || ey(i))
        },
        ENABLE_AUTOMATIC_ACK: function(e) {
            let {
                channelId: t,
                windowId: n
            } = e;
            return eh[t] !== n && (o(void 0 === eh[t], "handleEnableAutomaticAck: channel already visible in another window"), eh[t] = n, ew(t))
        },
        DISABLE_AUTOMATIC_ACK: function(e) {
            let {
                channelId: t
            } = e;
            return eh[t] = void 0, !1
        },
        GUILD_FEATURE_ACK: ez,
        GUILD_SCHEDULED_EVENT_CREATE: function(e) {
            let {
                guildScheduledEvent: t
            } = e, n = t.guild_id, i = eO.get(t.guild_id, er.ReadStateTypes.GUILD_EVENT);
            if (i.lastMessageId = t.id, eB(t)) {
                ez({
                    type: "GUILD_FEATURE_ACK",
                    id: n,
                    ackType: er.ReadStateTypes.GUILD_EVENT,
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
            if (eB(t) || ![es.GuildScheduledEventStatus.CANCELED, es.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
            let i = eO.get(n, er.ReadStateTypes.GUILD_EVENT);
            i.handleGuildEventRemoval(n, t.id)
        },
        GUILD_SCHEDULED_EVENT_DELETE: function(e) {
            let {
                guildScheduledEvent: t
            } = e, n = t.guild_id;
            if (eB(t)) return !1;
            let i = eO.get(t.guild_id, er.ReadStateTypes.GUILD_EVENT);
            i.handleGuildEventRemoval(n, t.id)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            return eO.clear(t.id, er.ReadStateTypes.GUILD_EVENT)
        },
        GUILD_UPDATE: function(e) {
            let {
                guild: t
            } = e, n = t.latest_onboarding_question_id;
            if (null == n) return;
            let i = eO.get(t.id, er.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
            i._guildId = t.id, i.lastMessageId = n
        },
        RESORT_THREADS: function(e) {
            let {
                channelId: t
            } = e;
            return ew(t)
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
            let {
                channelId: t,
                chatOpen: n
            } = e
        },
        DECAY_READ_STATES: eT,
        NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
            var t;
            let {
                item: n
            } = e;
            if (!(0, N.inNotificationCenterEnabled)()) return !1;
            let i = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == i) return !1;
            let s = eO.get(i, er.ReadStateTypes.NOTIFICATION_CENTER);
            s.lastMessageId = n.id;
            if (0, y.default.active) {
                eq(i, er.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
                return
            }
            s.mentionCount++
        },
        RELATIONSHIP_ADD: function(e) {
            let t = $.default.getCurrentUser();
            if (!(0, N.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== et.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== et.RelationshipTypes.FRIEND) return !1;
            let n = eO.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER),
                i = e.relationship.type === et.RelationshipTypes.FRIEND,
                s = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                r = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
            r < s && (n.lastMessageId = F.default.fromTimestamp(s), (0, y.default.active) ? eq(t.id, er.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++)
        },
        RELATIONSHIP_REMOVE: function(e) {
            let t = $.default.getCurrentUser();
            if (!(0, N.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== et.RelationshipTypes.PENDING_INCOMING) return !1;
            let n = eO.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER),
                i = new Date(e.relationship.since).getTime(),
                s = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
            s <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1))
        },
        NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
            var t;
            let {
                ids: n,
                optimistic: i
            } = e;
            if (i || !(0, N.inNotificationCenterEnabled)() || y.default.active) return !1;
            let s = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == s) return !1;
            let r = eO.get(s, er.ReadStateTypes.NOTIFICATION_CENTER);
            n.forEach(e => {
                0 > F.default.compare(r.ackMessageId, e) && (r.mentionCount = Math.max(r.mentionCount - 1, 0))
            })
        },
        USER_NON_CHANNEL_ACK: function(e) {
            var t;
            let {
                ackType: n,
                ackedId: i,
                local: s
            } = e, r = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            return null != r && eq(r, n, i, s)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t;
            let n = !1;
            for (let i of null !== (t = e.channels) && void 0 !== t ? t : []) {
                let e = eO.get(i.id),
                    t = eI(i.lastPinTimestamp);
                (e.lastMessageId !== i.lastMessageId || e.lastPinTimestamp !== t) && (n = !0, e.lastMessageId = i.lastMessageId, e.lastPinTimestamp = t)
            }
            return n
        },
        CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
            let {
                channelId: t
            } = e;
            return eW(t)
        },
        TRY_ACK: function(e) {
            let {
                channelId: t
            } = e;
            return ew(t)
        }
    });
    var eZ = eQ
}