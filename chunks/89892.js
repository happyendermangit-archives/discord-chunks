function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458"), n("852437"), n("653041"), n("733860"), n("757143");
    var i = n("392711"),
        r = n.n(i),
        s = n("612002"),
        a = n("593472"),
        o = n("513418"),
        l = n("710845"),
        u = n("786761"),
        d = n("709054"),
        _ = n("697479"),
        c = n("981631");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = new l.default("ChannelMessages");

    function T(e, t) {
        let n = e.get(t.id);
        return null == n || function(e, t) {
            var n, i;
            let r = null != e.editedTimestamp ? +e.editedTimestamp : 0;
            return !!((null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0) > r) || !!(e.embeds.length < (null !== (i = null === (n = t.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0)) || e.content !== t.content
        }(n, t) || e.cached ? (0, u.createMessageRecord)(t) : n
    }
    class f {
        clone() {
            let e = new f(this._isCacheBefore);
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
            this._messages = r().filter(this._messages, t => {
                let {
                    id: n
                } = t;
                return n !== e
            }), delete this._map[e]
        }
        removeMany(e) {
            r().each(e, e => {
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
            let i = t(n);
            this._map[n.id] = i, this._messages[this._messages.indexOf(n)] = i
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
            if (0 === this.length && (this._wasAtEdge = t), this._messages.length + e.length > c.MAX_MESSAGE_CACHE_SIZE) {
                if (this._wasAtEdge = !1, e.length > c.MAX_MESSAGE_CACHE_SIZE) {
                    this._isCacheBefore ? this._messages = e.slice(e.length - c.MAX_MESSAGE_CACHE_SIZE) : this._messages = e.slice(0, c.MAX_MESSAGE_CACHE_SIZE), this._map = {}, this._messages.forEach(e => this._map[e.id] = e);
                    return
                }
                let t = c.MAX_MESSAGE_CACHE_SIZE - e.length;
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
                    i = this.length;
                t = this._messages.slice(n, i), this._messages.splice(n)
            } else {
                let n = Math.min(e, this.length);
                t = this._messages.slice(0, n), this._messages.splice(0, e)
            }
            return t.forEach(e => delete this._map[e.id]), t
        }
        constructor(e) {
            E(this, "_messages", void 0), E(this, "_map", void 0), E(this, "_wasAtEdge", void 0), E(this, "_isCacheBefore", void 0), this._messages = [], this._map = {}, this._wasAtEdge = !1, this._isCacheBefore = e
        }
    }
    class S {
        static forEach(e) {
            r().forEach(S._channelMessages, e)
        }
        static get(e) {
            return S._channelMessages[e]
        }
        static hasPresent(e) {
            let t = S.get(e);
            return null != t && t.hasPresent()
        }
        static getOrCreate(e) {
            let t = S._channelMessages[e];
            return null == t && (t = new S(e), S._channelMessages[e] = t), t
        }
        static clear(e) {
            delete S._channelMessages[e]
        }
        static clearCache(e) {
            let t = S._channelMessages[e];
            null != t && (t._before.clear(), t._after.clear(), this.commit(t))
        }
        static commit(e) {
            S._channelMessages[e.channelId] = e
        }
        mutate(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = new S(this.channelId);
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
                for (let i = n.length - 1; i >= 0 && !1 !== e.call(t, n[i], i); i--);
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
            return null !== (n = null !== (t = r().find(this._before._messages, e)) && void 0 !== t ? t : r().find(this._array, e)) && void 0 !== n ? n : r().find(this._after._messages, e)
        }
        findNewest(e) {
            var t, n;
            return null !== (n = null !== (t = r().findLast(this._after._messages, e)) && void 0 !== t ? t : r().findLast(this._array, e)) && void 0 !== n ? n : r().findLast(this._before._messages, e)
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
                i = this._map[e];
            return null == i && n ? null !== (t = this._before.get(e)) && void 0 !== t ? t : this._after.get(e) : i
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
            let i = this.get(e);
            if (null == i) return null;
            let r = this._array.indexOf(i);
            if (-1 === r) return null;
            let s = [];
            for (let e = r + 1; e < this.length && (-1 === t || s.length < t); e++)(null == n || n(this._array[e])) && s.push(this._array[e]);
            return s
        }
        getManyBefore(e, t, n) {
            let i = this.get(e);
            if (null == i) return null;
            let r = this._array.indexOf(i);
            if (-1 === r) return null;
            let s = [];
            for (let e = r - 1; e >= 0 && (-1 === t || s.length < t); e--)(null == n || n(this._array[e])) && s.unshift(this._array[e]);
            return s
        }
        has(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return null != this._map[e] || t && (this._before.has(e) || this._after.has(e))
        }
        indexOf(e) {
            let t = -1;
            return this._array.find((n, i) => n.id === e && (t = i, !0)), t
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
            let i = t(n);
            return this.mutate(e => {
                e._map[n.id] = i, e._array[e._array.indexOf(n)] = i
            }, !0)
        }
        replace(e, t) {
            let n = this._map[e];
            if (null == n) return this._before.has(e) ? this.mutate(n => n._before.replace(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.replace(e, t), !0) : this;
            return this.mutate(i => {
                delete i._map[e], i._map[t.id] = t, i._array[i._array.indexOf(n)] = t
            }, !0)
        }
        remove(e) {
            return this.mutate(t => {
                delete t._map[e], t._array = t._array.filter(t => t.id !== e), t._before.remove(e), t._after.remove(e)
            }, !0)
        }
        removeMany(e) {
            return e.some(e => this.has(e)) ? this.mutate(t => {
                r().each(e, e => {
                    delete t._map[e]
                }), t._array = t._array.filter(t => -1 === e.indexOf(t.id)), t._before.removeMany(e), t._after.removeMany(e)
            }, !0) : this
        }
        merge(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return this.mutate(i => {
                i._merge(e, t, n)
            }, !0)
        }
        _merge(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e = e.filter(e => {
                let t = this._map[e.id];
                return this._map[e.id] = e, null == t || (this._array[this._array.indexOf(t)] = e, !1)
            }), n && (t ? this._before : this._after).clear(), this._array = t ? [...e, ...this._array] : [...this._array, ...e]
        }
        mergeDelta() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            return this.mutate(i => {
                i._before.clear(), i._after.clear();
                let r = new Set(n);
                e.forEach(e => r.add(e.id)), t.forEach(e => r.add(e.id)), i._array = i._array.filter(e => !r.has(e.id)).concat(e.map(e => (0, u.createMessageRecord)(e)), t.map(e => (0, u.createMessageRecord)(e))).sort((e, t) => d.default.compare(e.id, t.id))
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
                let i = Math.max(n.length - e, 0),
                    r = n.slice(i);
                n.splice(i), t._before.cache(t._array), t._before.cache(n), t._clearMessages(), t._merge(r), t.hasMoreBefore = t._before.length > 0, t.jumped = !0, t.jumpTargetId = null, t.jumpTargetOffset = 0, t.jumpedToPresent = !0, t.jumpFlash = !1, t.jumpReturnTargetId = null, t.jumpSequenceId = t.jumpSequenceId + 1, t.ready = !0, t.loadingMore = !1
            }, !0)
        }
        jumpToMessage(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 4 ? arguments[4] : void 0;
            return this.mutate(s => {
                s.jumped = !0, s.jumpedToPresent = !1, s.jumpType = null != r ? r : a.JumpTypes.ANIMATED, s.jumpTargetId = e, s.jumpTargetOffset = null != e && null != n ? n : 0, s.jumpSequenceId = s.jumpSequenceId + 1, s.jumpFlash = t, s.jumpReturnTargetId = i, s.ready = !0, s.loadingMore = !1
            }, !1)
        }
        focusOnMessage(e) {
            return this.mutate(t => {
                t.focusTargetId = e, t.ready = !0, t.loadingMore = !1
            }, !1)
        }
        loadFromCache(e, t) {
            return this.mutate(n => {
                let i = e ? n._before : n._after;
                n._merge(i.extract(t), e);
                let r = i.length > 0 || !i.wasAtEdge;
                e ? n.hasMoreBefore = r : n.hasMoreAfter = r, n.ready = !0, n.loadingMore = !1
            }, !0)
        }
        truncate(e, t) {
            return this.length <= c.MAX_LOADED_MESSAGES ? this : e ? this.truncateBottom(c.TRUNCATED_MESSAGE_VIEW_SIZE) : t ? this.truncateTop(c.TRUNCATED_MESSAGE_VIEW_SIZE) : this
        }
        receiveMessage(e) {
            var t, n;
            let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                r = null == e.nonce ? null : this.get(e.nonce, !0);
            if (null != r && ((null === (t = e.author) || void 0 === t ? void 0 : t.id) === (null === (n = r.author) || void 0 === n ? void 0 : n.id) || null != e.interaction && e.interaction.user.id === r.author.id) && null != e.nonce && r.id === e.nonce) {
                let t = (0, u.createMessageRecord)(e);
                return null != r.interactionData && (t.interactionData = r.interactionData), this.replace(e.nonce, t)
            }
            if (this.hasMoreAfter) this._after.wasAtEdge && (this._after.wasAtEdge = !1);
            else {
                let t = s.default.getCurrentConfig({
                        location: "2ecb25_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled ? (0, u.createMessageRecord)(e) : T(this, e),
                    n = this.merge([t]);
                return i ? n.truncateTop(c.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : this.length > c.MAX_LOADED_MESSAGES ? n.truncateBottom(c.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : n
            }
            return this
        }
        receivePushNotification(e) {
            return null != (null == e.nonce ? null : this.get(e.nonce, !0)) ? this : this.mutate({
                ready: !0,
                cached: !0
            }).merge([T(this, e)])
        }
        loadStart(e) {
            var t, n, i, r;
            return this.mutate({
                loadingMore: !0,
                jumped: null != e,
                jumpedToPresent: null !== (t = null == e ? void 0 : e.present) && void 0 !== t && t,
                jumpTargetId: null !== (n = null == e ? void 0 : e.messageId) && void 0 !== n ? n : null,
                jumpTargetOffset: null !== (i = null == e ? void 0 : e.offset) && void 0 !== i ? i : 0,
                jumpReturnTargetId: null !== (r = null == e ? void 0 : e.returnMessageId) && void 0 !== r ? r : null,
                ready: null == e && this.ready
            })
        }
        loadComplete(e) {
            var t, n, i, o, l, d, _, E, f, S, h;
            let A = [...e.newMessages],
                m = null !== (t = e.isBefore) && void 0 !== t && t,
                N = null !== (n = e.isAfter) && void 0 !== n && n,
                p = null !== (i = e.jump) && void 0 !== i ? i : null,
                O = null !== (o = e.hasMoreBefore) && void 0 !== o && o,
                R = null !== (l = e.hasMoreAfter) && void 0 !== l && l,
                C = null !== (d = e.cached) && void 0 !== d && d,
                g = r()(A).reverse().map(s.default.getCurrentConfig({
                    location: "2ecb25_2"
                }, {
                    autoTrackExposure: !1
                }).enabled ? e => (0, u.createMessageRecord)(e) : e => T(this, e)).value(),
                L = null;
            if ((m || N) && null == p && this.ready) L = this.merge(g, m, !0);
            else {
                let e = this._array.filter(e => e.state === c.MessageStates.SENDING);
                L = this.reset(g), !(e.length > 0) || m || N || (null == p ? void 0 : p.messageId) != null || (null == p ? void 0 : p.offset) != null ? I.info("loadComplete: resetting state for channelId=".concat(this.channelId, ", sending.length=").concat(e.length)) : (I.info("loadComplete: merging with SENDING messages for channelId=".concat(this.channelId)), L = L.merge(e))
            }
            return L = L.mutate({
                ready: !0,
                loadingMore: !1,
                jumpType: null !== (_ = null == p ? void 0 : p.jumpType) && void 0 !== _ ? _ : a.JumpTypes.ANIMATED,
                jumpFlash: null !== (E = null == p ? void 0 : p.flash) && void 0 !== E && E,
                jumped: null != p,
                jumpedToPresent: null !== (f = null == p ? void 0 : p.present) && void 0 !== f && f,
                jumpTargetId: null !== (S = null == p ? void 0 : p.messageId) && void 0 !== S ? S : null,
                jumpTargetOffset: null != p && null != p.messageId && null != p.offset ? p.offset : 0,
                jumpSequenceId: null != p ? L.jumpSequenceId + 1 : L.jumpSequenceId,
                jumpReturnTargetId: null !== (h = null == p ? void 0 : p.returnMessageId) && void 0 !== h ? h : null,
                hasMoreBefore: null == p && N ? L.hasMoreBefore : O,
                hasMoreAfter: null == p && m ? L.hasMoreAfter : R,
                cached: C,
                hasFetched: e.hasFetched,
                error: !1
            })
        }
        addCachedMessages(e, t) {
            (0, o.requireSortedDescending)(e);
            let n = e.map(e => T(this, e)).reverse();
            return this._array.filter(e => !n.some(t => t.id === e.id)).forEach(e => _.insert(n, e, (e, t) => d.default.compare(e.id, t.id))), this.reset(n).mutate({
                ready: !0,
                cached: t,
                error: !1
            })
        }
        constructor(e) {
            E(this, "channelId", void 0), E(this, "ready", void 0), E(this, "jumpType", void 0), E(this, "jumpTargetId", void 0), E(this, "jumpTargetOffset", void 0), E(this, "jumpSequenceId", void 0), E(this, "jumped", void 0), E(this, "jumpedToPresent", void 0), E(this, "jumpFlash", void 0), E(this, "jumpReturnTargetId", void 0), E(this, "focusTargetId", void 0), E(this, "hasMoreBefore", void 0), E(this, "hasMoreAfter", void 0), E(this, "loadingMore", void 0), E(this, "revealedMessageId", void 0), E(this, "cached", void 0), E(this, "hasFetched", void 0), E(this, "error", void 0), E(this, "_array", []), E(this, "_before", void 0), E(this, "_after", void 0), E(this, "_map", {}), this.channelId = e, this.ready = !1, this.jumpTargetId = null, this.jumpTargetOffset = 0, this.jumpSequenceId = 1, this.jumped = !1, this.jumpedToPresent = !1, this.jumpType = a.JumpTypes.ANIMATED, this.jumpFlash = !0, this.jumpReturnTargetId = null, this.hasMoreBefore = !0, this.hasMoreAfter = !1, this.loadingMore = !1, this.revealedMessageId = null, this._clearMessages(), this._before = new f(!0), this._after = new f(!1), this.cached = !1, this.hasFetched = !1, this.error = !1
        }
    }
    E(S, "_channelMessages", {}), t.default = S
}