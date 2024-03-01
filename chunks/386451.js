function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_RANGES: function() {
            return r.DEFAULT_RANGES
        },
        default: function() {
            return i
        }
    }), n("222007");
    var i, a = n("917351"),
        l = n.n(a),
        s = n("862337"),
        r = n("696605"),
        u = n("623053"),
        d = n("6850"),
        o = n("49111");

    function c(e) {
        return null != e && "null" !== e && e !== o.ME && "undefined" !== e && e !== o.FAVORITES
    }
    i = class {
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
            l.forEach(this._pending, (e, t) => {
                this._subscribed.add(t)
            }), this._onChange(this._pending), this._pending = {}
        }
        subscribeUser(e, t) {
            c(e) && this._members.subscribe(e, t)
        }
        unsubscribeUser(e, t) {
            c(e) && this._members.unsubscribe(e, t)
        }
        subscribeChannel(e, t, n) {
            return !!c(e) && this._channels.subscribe(e, t, n)
        }
        subscribeToMemberUpdates(e) {
            if (!c(e)) return !1;
            this._enqueue(e, {
                member_updates: !0
            }), this._memberUpdates.add(e)
        }
        unsubscribeFromMemberUpdates(e) {
            if (!c(e)) return !1;
            this._enqueue(e, {
                member_updates: !1
            })
        }
        subscribeThreadMemberList(e, t, n) {
            return !!c(e) && this._threadMemberLists.subscribe(e, t, n)
        }
        unsubscribeThreadMemberList(e, t) {
            return !!c(e) && this._threadMemberLists.unsubscribe(e, t)
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
            if (!!c(e)) !t.has(e) && (t.add(e), this._enqueue(e, n))
        }
        constructor(e) {
            this._members = new u.default((e, t) => this._enqueue(e, {
                members: t
            })), this._channels = new r.default((e, t) => this._enqueue(e, {
                channels: t
            })), this._threadMemberLists = new d.default((e, t) => this._enqueue(e, {
                thread_member_lists: t
            })), this._typing = new Set, this._threads = new Set, this._activities = new Set, this._memberUpdates = new Set, this._subscribed = new Set, this._pending = {}, this._flush = new s.DelayedCall(0, () => this.flush()), this._onChange = e
        }
    }
}