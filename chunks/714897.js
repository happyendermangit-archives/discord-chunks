function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_RANGES: function() {
            return a.DEFAULT_RANGES
        },
        default: function() {
            return _
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("945816"),
        a = n("127926"),
        u = n("262145"),
        s = n("320124"),
        l = n("281767");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return null != e && "null" !== e && e !== l.ME && "undefined" !== e && e !== l.FAVORITES
    }
    var _ = function() {
        var e, t, n;

        function r(e) {
            var t = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), f(this, "_members", new u.default(function(e, n) {
                return t._enqueue(e, {
                    members: n
                })
            })), f(this, "_channels", new a.default(function(e, n) {
                return t._enqueue(e, {
                    channels: n
                })
            })), f(this, "_threadMemberLists", new s.default(function(e, n) {
                return t._enqueue(e, {
                    thread_member_lists: n
                })
            })), f(this, "_typing", new Set), f(this, "_threads", new Set), f(this, "_activities", new Set), f(this, "_memberUpdates", new Set), f(this, "_subscribed", new Set), f(this, "_pending", {}), f(this, "_flush", new i.DelayedCall(0, function() {
                return t.flush()
            })), f(this, "_onChange", void 0), this._onChange = e
        }
        return e = r, t = [{
            key: "_enqueue",
            value: function(e, t) {
                this._pending[e] = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            f(e, t, n[t])
                        })
                    }
                    return e
                }({}, this._pending[e], t), this._flush.delay()
            }
        }, {
            key: "reset",
            value: function() {
                this._subscribed.clear(), this._pending = {}, this._members.reset(), this._memberUpdates.clear(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
            }
        }, {
            key: "get",
            value: function(e) {
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
        }, {
            key: "getSubscribedThreadIds",
            value: function() {
                return this._threadMemberLists.getSubscribedThreadIds()
            }
        }, {
            key: "isSubscribedToThreads",
            value: function(e) {
                return this._threads.has(e)
            }
        }, {
            key: "isSubscribedToAnyMember",
            value: function(e) {
                var t;
                return null !== (t = this._members.isSubscribedToAnyMember(e)) && void 0 !== t && t
            }
        }, {
            key: "isSubscribedToMemberUpdates",
            value: function(e) {
                var t;
                return null !== (t = this.get(e).member_updates) && void 0 !== t && t
            }
        }, {
            key: "forEach",
            value: function(e) {
                this._subscribed.forEach(e)
            }
        }, {
            key: "clearWithoutFlushing",
            value: function(e, t) {
                (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), this._memberUpdates.delete(e), t && this._threads.delete(e), this._activities.delete(e)
            }
        }, {
            key: "flush",
            value: function() {
                var e = this;
                o().forEach(this._pending, function(t, n) {
                    e._subscribed.add(n)
                }), this._onChange(this._pending), this._pending = {}
            }
        }, {
            key: "subscribeUser",
            value: function(e, t) {
                d(e) && this._members.subscribe(e, t)
            }
        }, {
            key: "unsubscribeUser",
            value: function(e, t) {
                d(e) && this._members.unsubscribe(e, t)
            }
        }, {
            key: "subscribeChannel",
            value: function(e, t, n) {
                return !!d(e) && this._channels.subscribe(e, t, n)
            }
        }, {
            key: "subscribeToMemberUpdates",
            value: function(e) {
                if (!d(e)) return !1;
                this._enqueue(e, {
                    member_updates: !0
                }), this._memberUpdates.add(e)
            }
        }, {
            key: "unsubscribeFromMemberUpdates",
            value: function(e) {
                if (!d(e)) return !1;
                this._enqueue(e, {
                    member_updates: !1
                })
            }
        }, {
            key: "subscribeThreadMemberList",
            value: function(e, t, n) {
                return !!d(e) && this._threadMemberLists.subscribe(e, t, n)
            }
        }, {
            key: "unsubscribeThreadMemberList",
            value: function(e, t) {
                return !!d(e) && this._threadMemberLists.unsubscribe(e, t)
            }
        }, {
            key: "subscribeToGuild",
            value: function(e) {
                this._subscribeToFeature(e, this._typing, {
                    typing: !0
                }), this._subscribeToFeature(e, this._activities, {
                    activities: !0
                }), this._subscribeToFeature(e, this._threads, {
                    threads: !0
                })
            }
        }, {
            key: "_subscribeToFeature",
            value: function(e, t, n) {
                if (!!d(e)) !t.has(e) && (t.add(e), this._enqueue(e, n))
            }
        }], c(e.prototype, t), n && c(e, n), r
    }()
}