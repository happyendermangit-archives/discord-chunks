function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007"), n("808653"), n("700225"), n("424973"), n("843762"), n("781738");
    var s = n("917351"),
        i = n.n(s),
        r = n("389806"),
        a = n("115718"),
        o = n("280468"),
        d = n("605250"),
        u = n("692038"),
        l = n("299039"),
        f = n("35013"),
        _ = n("49111");
    let c = new d.default("ChannelMessages");

    function g(e, t) {
        let n = e.get(t.id);
        return null == n || function(e, t) {
            var n, s;
            let i = null != e.editedTimestamp ? +e.editedTimestamp : 0,
                r = null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0;
            return !!(r > i) || !!(e.embeds.length < (null !== (s = null === (n = t.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0)) || e.content !== t.content
        }(n, t) || e.cached ? (0, u.createMessageRecord)(t) : n
    }
    class m {
        clone() {
            let e = new m(this._isCacheBefore);
            return e._map = {
                ...this._map
            }, e._messages = [...this._messages], e._wasAtEdge = this._wasAtEdge, e
        }
        get wasAtEdge() {
            return this._wasAtEdge
        }
        set wasAtEdge(e) {
            this._wasAtEdge = e
        }
        get length() {
            return this._messages.length
        }
        clear() {
            this._map = {}, this._messages = [], this._wasAtEdge = !1
        }
        remove(e) {
            this._messages = i.filter(this._messages, t => {
                let {
                    id: n
                } = t;
                return n !== e
            }), delete this._map[e]
        }
        removeMany(e) {
            i.each(e, e => {
                delete this._map[e]
            }), this._messages = this._messages.filter(t => -1 === e.indexOf(t.id))
        }
        replace(e, t) {
            let n = this._map[e];
            null != n && (delete this._map[e], this._map[t.id] = t, this._messages[this._messages.indexOf(n)] = t)
        }
        update(e, t) {
            let n = this._map[e];
            if (null == n) return;
            let s = t(n);
            this._map[n.id] = s, this._messages[this._messages.indexOf(n)] = s
        }
        has(e) {
            return null != this._map[e]
        }
        get(e) {
            return this._map[e]
        }
        forEach(e, t) {
            this._messages.forEach(e, t)
        }
        cache(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            0 === this.length && (this._wasAtEdge = t);
            let n = this._messages.length + e.length;
            if (n > _.MAX_MESSAGE_CACHE_SIZE) {
                if (this._wasAtEdge = !1, e.length > _.MAX_MESSAGE_CACHE_SIZE) {
                    this._isCacheBefore ? this._messages = e.slice(e.length - _.MAX_MESSAGE_CACHE_SIZE) : this._messages = e.slice(0, _.MAX_MESSAGE_CACHE_SIZE), this._map = {}, this._messages.forEach(e => this._map[e.id] = e);
                    return
                }
                let t = _.MAX_MESSAGE_CACHE_SIZE - e.length;
                this._isCacheBefore ? this._messages = this._messages.slice(Math.max(this._messages.length - t, 0)) : this._messages = this._messages.slice(0, t)
            }
            this._messages = this._isCacheBefore ? [...this._messages, ...e] : [...e, ...this._messages], this._map = {}, this._messages.forEach(e => this._map[e.id] = e)
        }
        extractAll() {
            let e = this._messages;
            return this._messages = [], this._map = {}, e
        }
        extract(e) {
            let t;
            if (this._isCacheBefore) {
                let n = Math.max(this.length - e, 0),
                    s = this.length;
                t = this._messages.slice(n, s), this._messages.splice(n)
            } else {
                let n = Math.min(e, this.length);
                t = this._messages.slice(0, n), this._messages.splice(0, e)
            }
            return t.forEach(e => delete this._map[e.id]), t
        }
        constructor(e) {
            this._messages = [], this._map = {}, this._wasAtEdge = !1, this._isCacheBefore = e
        }
    }
    class h {
        static forEach(e) {
            i.forEach(h._channelMessages, e)
        }
        static get(e) {
            return h._channelMessages[e]
        }
        static hasPresent(e) {
            let t = h.get(e);
            return null != t && t.hasPresent()
        }
        static getOrCreate(e) {
            let t = h._channelMessages[e];
            return null == t && (t = new h(e), h._channelMessages[e] = t), t
        }
        static clear(e) {
            delete h._channelMessages[e]
        }
        static clearCache(e) {
            let t = h._channelMessages[e];
            null != t && (t._before.clear(), t._after.clear(), this.commit(t))
        }
        static commit(e) {
            h._channelMessages[e.channelId] = e
        }
        mutate(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = new h(this.channelId);
            return n._array = t ? [...this._array] : this._array, n._map = t ? {
                ...this._map
            } : this._map, n._after = t ? this._after.clone() : this._after, n._before = t ? this._before.clone() : this._before, e instanceof Function ? (n.ready = this.ready, n.jumpType = this.jumpType, n.jumpTargetId = this.jumpTargetId, n.jumpTargetOffset = this.jumpTargetOffset, n.jumpSequenceId = this.jumpSequenceId, n.jumped = this.jumped, n.jumpedToPresent = this.jumpedToPresent, n.jumpFlash = this.jumpFlash, n.jumpReturnTargetId = this.jumpReturnTargetId, n.focusTargetId = this.focusTargetId, n.hasMoreBefore = this.hasMoreBefore, n.hasMoreAfter = this.hasMoreAfter, n.loadingMore = this.loadingMore, n.revealedMessageId = this.revealedMessageId, n.cached = this.cached, n.hasFetched = this.hasFetched, n.error = this.error, e(n)) : "object" == typeof e && (n.ready = void 0 !== e.ready ? !0 === e.ready : this.ready, n.jumpType = void 0 !== e.jumpType ? e.jumpType : this.jumpType, n.jumpTargetId = void 0 !== e.jumpTargetId ? e.jumpTargetId : this.jumpTargetId, n.jumpTargetOffset = void 0 !== e.jumpTargetOffset ? e.jumpTargetOffset : this.jumpTargetOffset, n.jumpSequenceId = void 0 !== e.jumpSequenceId ? e.jumpSequenceId : this.jumpSequenceId, n.jumped = void 0 !== e.jumped ? !0 === e.jumped : this.jumped, n.jumpedToPresent = void 0 !== e.jumpedToPresent ? !0 === e.jumpedToPresent : this.jumpedToPresent, n.jumpFlash = void 0 !== e.jumpFlash ? !0 === e.jumpFlash : this.jumpFlash, n.jumpReturnTargetId = void 0 !== e.jumpReturnTargetId ? e.jumpReturnTargetId : this.jumpReturnTargetId, n.focusTargetId = void 0 !== e.focusTargetId ? e.focusTargetId : this.focusTargetId, n.hasMoreBefore = void 0 !== e.hasMoreBefore ? !0 === e.hasMoreBefore : this.hasMoreBefore, n.hasMoreAfter = void 0 !== e.hasMoreAfter ? !0 === e.hasMoreAfter : this.hasMoreAfter, n.loadingMore = void 0 !== e.loadingMore ? e.loadingMore : this.loadingMore, n.revealedMessageId = void 0 !== e.revealedMessageId ? e.revealedMessageId : this.revealedMessageId, n.cached = void 0 !== e.cached ? e.cached : this.cached, n.hasFetched = void 0 !== e.hasFetched ? e.hasFetched : this.hasFetched, n.error = void 0 !== e.error ? e.error : this.error), n
        }
        get length() {
            return this._array.length
        }
        toArray() {
            return [...this._array]
        }
        forEach(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (n) {
                let n = this._array;
                for (let s = n.length - 1; s >= 0 && !1 !== e.call(t, n[s], s); s--);
            } else this._array.forEach(e, t)
        }
        reduce(e, t) {
            return this._array.reduce(e, t)
        }
        some(e, t) {
            return this._array.some(e, t)
        }
        filter(e, t) {
            return this._array.filter(e, t)
        }
        forAll(e, t) {
            this._before.forEach(e, t), this._array.forEach(e, t), this._after.forEach(e, t)
        }
        findOldest(e) {
            var t, n;
            return null !== (n = null !== (t = i.find(this._before._messages, e)) && void 0 !== t ? t : i.find(this._array, e)) && void 0 !== n ? n : i.find(this._after._messages, e)
        }
        findNewest(e) {
            var t, n;
            return null !== (n = null !== (t = i.findLast(this._after._messages, e)) && void 0 !== t ? t : i.findLast(this._array, e)) && void 0 !== n ? n : i.findLast(this._before._messages, e)
        }
        map(e, t) {
            return this._array.map(e, t)
        }
        first() {
            return this._array[0]
        }
        last() {
            return this._array[this._array.length - 1]
        }
        get(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                s = this._map[e];
            return null == s && n ? null !== (t = this._before.get(e)) && void 0 !== t ? t : this._after.get(e) : s
        }
        getByIndex(e) {
            return this._array[e]
        }
        getAfter(e) {
            let t = this.get(e);
            if (null == t) return null;
            let n = this._array.indexOf(t);
            return -1 === n || n === this.length - 1 ? null : this._array[n + 1]
        }
        getManyAfter(e, t, n) {
            let s = this.get(e);
            if (null == s) return null;
            let i = this._array.indexOf(s);
            if (-1 === i) return null;
            let r = [];
            for (let e = i + 1; e < this.length && (-1 === t || r.length < t); e++)(null == n || n(this._array[e])) && r.push(this._array[e]);
            return r
        }
        getManyBefore(e, t, n) {
            let s = this.get(e);
            if (null == s) return null;
            let i = this._array.indexOf(s);
            if (-1 === i) return null;
            let r = [];
            for (let e = i - 1; e >= 0 && (-1 === t || r.length < t); e--)(null == n || n(this._array[e])) && r.unshift(this._array[e]);
            return r
        }
        has(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return null != this._map[e] || t && (this._before.has(e) || this._after.has(e))
        }
        indexOf(e) {
            let t = -1;
            return this._array.find((n, s) => n.id === e && (t = s, !0)), t
        }
        hasPresent() {
            return this._after.length > 0 && this._after.wasAtEdge || !this.hasMoreAfter
        }
        hasBeforeCached(e) {
            if (this.length > 0 && this._before.length > 0) {
                let t = this.first();
                return null != t && t.id === e
            }
            return !1
        }
        hasAfterCached(e) {
            if (this.length > 0 && this._after.length > 0) {
                let t = this.last();
                return null != t && t.id === e
            }
            return !1
        }
        update(e, t) {
            let n = this._map[e];
            if (null == n) return this._before.has(e) ? this.mutate(n => n._before.update(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.update(e, t), !0) : this;
            let s = t(n);
            return this.mutate(e => {
                e._map[n.id] = s, e._array[e._array.indexOf(n)] = s
            }, !0)
        }
        replace(e, t) {
            let n = this._map[e];
            if (null == n) return this._before.has(e) ? this.mutate(n => n._before.replace(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.replace(e, t), !0) : this;
            return this.mutate(s => {
                delete s._map[e], s._map[t.id] = t, s._array[s._array.indexOf(n)] = t
            }, !0)
        }
        remove(e) {
            return this.mutate(t => {
                delete t._map[e], t._array = t._array.filter(t => t.id !== e), t._before.remove(e), t._after.remove(e)
            }, !0)
        }
        removeMany(e) {
            return e.some(e => this.has(e)) ? this.mutate(t => {
                i.each(e, e => {
                    delete t._map[e]
                }), t._array = t._array.filter(t => -1 === e.indexOf(t.id)), t._before.removeMany(e), t._after.removeMany(e)
            }, !0) : this
        }
        merge(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return this.mutate(s => {
                s._merge(e, t, n)
            }, !0)
        }
        _merge(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (e = e.filter(e => {
                    let t = this._map[e.id];
                    return this._map[e.id] = e, null == t || (this._array[this._array.indexOf(t)] = e, !1)
                }), n) {
                let e = t ? this._before : this._after;
                e.clear()
            }
            this._array = t ? [...e, ...this._array] : [...this._array, ...e]
        }
        mergeDelta() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            return this.mutate(s => {
                s._before.clear(), s._after.clear();
                let i = new Set(n);
                e.forEach(e => i.add(e.id)), t.forEach(e => i.add(e.id)), s._array = s._array.filter(e => !i.has(e.id)).concat(e.map(e => (0, u.createMessageRecord)(e)), t.map(e => (0, u.createMessageRecord)(e))).sort((e, t) => l.default.compare(e.id, t.id))
            })
        }
        _clearMessages() {
            this._array = [], this._map = {}
        }
        reset(e) {
            return this.mutate(t => {
                t._array = e, t._map = {}, e.forEach(e => t._map[e.id] = e), t._before.clear(), t._after.clear()
            })
        }
        truncateTop(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = this._array.length - e;
            return n <= 0 ? this : this.mutate(e => {
                for (let t = 0; t < n; t++) delete e._map[e._array[t].id];
                e._before.cache(e._array.slice(0, n), !e.hasMoreBefore), e._array = e._array.slice(n), e.hasMoreBefore = !0
            }, t)
        }
        truncateBottom(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return this._array.length <= e ? this : this.mutate(t => {
                for (let n = e; n < this._array.length; n++) delete t._map[t._array[n].id];
                t._after.cache(t._array.slice(e, this._array.length), !t.hasMoreAfter), t._array = t._array.slice(0, e), t.hasMoreAfter = !0
            }, t)
        }
        jumpToPresent(e) {
            return this.mutate(t => {
                let n = t._after.extractAll();
                t.hasMoreAfter = !1;
                let s = Math.max(n.length - e, 0),
                    i = n.slice(s);
                n.splice(s), t._before.cache(t._array), t._before.cache(n), t._clearMessages(), t._merge(i), t.hasMoreBefore = t._before.length > 0, t.jumped = !0, t.jumpTargetId = null, t.jumpTargetOffset = 0, t.jumpedToPresent = !0, t.jumpFlash = !1, t.jumpReturnTargetId = null, t.jumpSequenceId = t.jumpSequenceId + 1, t.ready = !0, t.loadingMore = !1
            }, !0)
        }
        jumpToMessage(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                s = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 ? arguments[4] : void 0;
            return this.mutate(r => {
                r.jumped = !0, r.jumpedToPresent = !1, r.jumpType = null != i ? i : a.JumpTypes.ANIMATED, r.jumpTargetId = e, r.jumpTargetOffset = null != e && null != n ? n : 0, r.jumpSequenceId = r.jumpSequenceId + 1, r.jumpFlash = t, r.jumpReturnTargetId = s, r.ready = !0, r.loadingMore = !1
            }, !1)
        }
        focusOnMessage(e) {
            return this.mutate(t => {
                t.focusTargetId = e, t.ready = !0, t.loadingMore = !1
            }, !1)
        }
        loadFromCache(e, t) {
            return this.mutate(n => {
                let s = e ? n._before : n._after;
                n._merge(s.extract(t), e);
                let i = s.length > 0 || !s.wasAtEdge;
                e ? n.hasMoreBefore = i : n.hasMoreAfter = i, n.ready = !0, n.loadingMore = !1
            }, !0)
        }
        truncate(e, t) {
            return this.length <= _.MAX_LOADED_MESSAGES ? this : e ? this.truncateBottom(_.TRUNCATED_MESSAGE_VIEW_SIZE) : t ? this.truncateTop(_.TRUNCATED_MESSAGE_VIEW_SIZE) : this
        }
        receiveMessage(e) {
            var t, n;
            let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = null == e.nonce ? null : this.get(e.nonce, !0);
            if (null != i && ((null === (t = e.author) || void 0 === t ? void 0 : t.id) === (null === (n = i.author) || void 0 === n ? void 0 : n.id) || null != e.interaction && e.interaction.user.id === i.author.id) && null != e.nonce && i.id === e.nonce) {
                let t = (0, u.createMessageRecord)(e);
                return null != i.interactionData && (t.interactionData = i.interactionData), this.replace(e.nonce, t)
            }
            if (this.hasMoreAfter) this._after.wasAtEdge && (this._after.wasAtEdge = !1);
            else {
                let t = r.default.getCurrentConfig({
                        location: "2ecb25_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled ? (0, u.createMessageRecord)(e) : g(this, e),
                    n = this.merge([t]);
                return s ? n.truncateTop(_.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : this.length > _.MAX_LOADED_MESSAGES ? n.truncateBottom(_.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : n
            }
            return this
        }
        receivePushNotification(e) {
            let t = null == e.nonce ? null : this.get(e.nonce, !0);
            return null != t ? this : this.mutate({
                ready: !0,
                cached: !0
            }).merge([g(this, e)])
        }
        loadStart(e) {
            var t, n, s, i;
            return this.mutate({
                loadingMore: !0,
                jumped: null != e,
                jumpedToPresent: null !== (t = null == e ? void 0 : e.present) && void 0 !== t && t,
                jumpTargetId: null !== (n = null == e ? void 0 : e.messageId) && void 0 !== n ? n : null,
                jumpTargetOffset: null !== (s = null == e ? void 0 : e.offset) && void 0 !== s ? s : 0,
                jumpReturnTargetId: null !== (i = null == e ? void 0 : e.returnMessageId) && void 0 !== i ? i : null,
                ready: null == e && this.ready
            })
        }
        loadComplete(e) {
            var t, n, s, o, d, l, f, m, h, v, E;
            let p = [...e.newMessages],
                y = null !== (t = e.isBefore) && void 0 !== t && t,
                T = null !== (n = e.isAfter) && void 0 !== n && n,
                C = null !== (s = e.jump) && void 0 !== s ? s : null,
                I = null !== (o = e.hasMoreBefore) && void 0 !== o && o,
                S = null !== (d = e.hasMoreAfter) && void 0 !== d && d,
                A = null !== (l = e.cached) && void 0 !== l && l,
                D = i(p).reverse().map(r.default.getCurrentConfig({
                    location: "2ecb25_2"
                }, {
                    autoTrackExposure: !1
                }).enabled ? e => (0, u.createMessageRecord)(e) : e => g(this, e)).value(),
                N = null;
            if ((y || T) && null == C && this.ready) N = this.merge(D, y, !0);
            else {
                let e = this._array.filter(e => e.state === _.MessageStates.SENDING);
                N = this.reset(D), !(e.length > 0) || y || T || (null == C ? void 0 : C.messageId) != null || (null == C ? void 0 : C.offset) != null ? c.info("loadComplete: resetting state for channelId=".concat(this.channelId, ", sending.length=").concat(e.length)) : (c.info("loadComplete: merging with SENDING messages for channelId=".concat(this.channelId)), N = N.merge(e))
            }
            return N = N.mutate({
                ready: !0,
                loadingMore: !1,
                jumpType: null !== (f = null == C ? void 0 : C.jumpType) && void 0 !== f ? f : a.JumpTypes.ANIMATED,
                jumpFlash: null !== (m = null == C ? void 0 : C.flash) && void 0 !== m && m,
                jumped: null != C,
                jumpedToPresent: null !== (h = null == C ? void 0 : C.present) && void 0 !== h && h,
                jumpTargetId: null !== (v = null == C ? void 0 : C.messageId) && void 0 !== v ? v : null,
                jumpTargetOffset: null != C && null != C.messageId && null != C.offset ? C.offset : 0,
                jumpSequenceId: null != C ? N.jumpSequenceId + 1 : N.jumpSequenceId,
                jumpReturnTargetId: null !== (E = null == C ? void 0 : C.returnMessageId) && void 0 !== E ? E : null,
                hasMoreBefore: null == C && T ? N.hasMoreBefore : I,
                hasMoreAfter: null == C && y ? N.hasMoreAfter : S,
                cached: A,
                hasFetched: e.hasFetched,
                error: !1
            })
        }
        addCachedMessages(e, t) {
            (0, o.requireSortedDescending)(e);
            let n = e.map(e => g(this, e)).reverse();
            return this._array.filter(e => !n.some(t => t.id === e.id)).forEach(e => f.insert(n, e, (e, t) => l.default.compare(e.id, t.id))), this.reset(n).mutate({
                ready: !0,
                cached: t,
                error: !1
            })
        }
        constructor(e) {
            this._array = [], this._map = {}, this.channelId = e, this.ready = !1, this.jumpTargetId = null, this.jumpTargetOffset = 0, this.jumpSequenceId = 1, this.jumped = !1, this.jumpedToPresent = !1, this.jumpType = a.JumpTypes.ANIMATED, this.jumpFlash = !0, this.jumpReturnTargetId = null, this.hasMoreBefore = !0, this.hasMoreAfter = !1, this.loadingMore = !1, this.revealedMessageId = null, this._clearMessages(), this._before = new m(!0), this._after = new m(!1), this.cached = !1, this.hasFetched = !1, this.error = !1
        }
    }
    h._channelMessages = {};
    var v = h
}