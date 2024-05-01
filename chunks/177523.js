function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_RANGES: function() {
            return s.DEFAULT_RANGES
        },
        default: function() {
            return c
        }
    }), n("47120");
    var i = n("392711"),
        r = n.n(i),
        a = n("846519"),
        s = n("509848"),
        o = n("483019"),
        l = n("945689"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return null != e && "null" !== e && e !== u.ME && "undefined" !== e && e !== u.FAVORITES
    }
    class c {
        _enqueue(e, t) {
            this._pending[e] = {
                ...this._pending[e],
                ...t
            }, this._flush.delay()
        }
        reset() {
            this._subscribed.clear(), this._pending = {}, this._members.reset(), this._memberUpdates.clear(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
        }
        get(e) {
            return {
                typing: this._typing.has(e),
                threads: this._threads.has(e),
                activities: this._activities.has(e),
                members: this._members.get(e),
                member_updates: this._memberUpdates.has(e),
                channels: this._channels.get(e),
                thread_member_lists: this._threadMemberLists.get(e)
            }
        }
        getSubscribedThreadIds() {
            return this._threadMemberLists.getSubscribedThreadIds()
        }
        isSubscribedToThreads(e) {
            return this._threads.has(e)
        }
        isSubscribedToAnyMember(e) {
            var t;
            return null !== (t = this._members.isSubscribedToAnyMember(e)) && void 0 !== t && t
        }
        isSubscribedToMemberUpdates(e) {
            var t;
            return null !== (t = this.get(e).member_updates) && void 0 !== t && t
        }
        forEach(e) {
            this._subscribed.forEach(e)
        }
        clearWithoutFlushing(e, t) {
            (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), this._memberUpdates.delete(e), t && this._threads.delete(e), this._activities.delete(e)
        }
        flush() {
            r().forEach(this._pending, (e, t) => {
                this._subscribed.add(t)
            }), this._onChange(this._pending), this._pending = {}
        }
        subscribeUser(e, t) {
            _(e) && this._members.subscribe(e, t)
        }
        unsubscribeUser(e, t) {
            _(e) && this._members.unsubscribe(e, t)
        }
        subscribeChannel(e, t, n) {
            return !!_(e) && this._channels.subscribe(e, t, n)
        }
        subscribeToMemberUpdates(e) {
            if (!_(e)) return !1;
            this._enqueue(e, {
                member_updates: !0
            }), this._memberUpdates.add(e)
        }
        unsubscribeFromMemberUpdates(e) {
            if (!_(e)) return !1;
            this._enqueue(e, {
                member_updates: !1
            })
        }
        subscribeThreadMemberList(e, t, n) {
            return !!_(e) && this._threadMemberLists.subscribe(e, t, n)
        }
        unsubscribeThreadMemberList(e, t) {
            return !!_(e) && this._threadMemberLists.unsubscribe(e, t)
        }
        subscribeToGuild(e) {
            this._subscribeToFeature(e, this._typing, {
                typing: !0
            }), this._subscribeToFeature(e, this._activities, {
                activities: !0
            }), this._subscribeToFeature(e, this._threads, {
                threads: !0
            })
        }
        _subscribeToFeature(e, t, n) {
            if (!!_(e)) !t.has(e) && (t.add(e), this._enqueue(e, n))
        }
        constructor(e) {
            d(this, "_members", new o.default((e, t) => this._enqueue(e, {
                members: t
            }))), d(this, "_channels", new s.default((e, t) => this._enqueue(e, {
                channels: t
            }))), d(this, "_threadMemberLists", new l.default((e, t) => this._enqueue(e, {
                thread_member_lists: t
            }))), d(this, "_typing", new Set), d(this, "_threads", new Set), d(this, "_activities", new Set), d(this, "_memberUpdates", new Set), d(this, "_subscribed", new Set), d(this, "_pending", {}), d(this, "_flush", new a.DelayedCall(0, () => this.flush())), d(this, "_onChange", void 0), this._onChange = e
        }
    }
}