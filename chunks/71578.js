function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("312239"),
        a = n("660939"),
        u = n("925513"),
        s = n("35523"),
        l = n("273829"),
        c = n("523018"),
        f = n("319231"),
        d = n("281767");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t && p(e.prototype, t), n && p(e, n), e
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
            })
        }
        return e
    }

    function h(e) {
        return function(e) {
            if (Array.isArray(e)) return _(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var O = new s.default("ChannelMessages");

    function T(e, t) {
        var n, r, o, i, a, u = e.get(t.id);
        return null == u || (n = u, r = t, a = null != n.editedTimestamp ? +n.editedTimestamp : 0, (null != r.edited_timestamp ? +new Date(r.edited_timestamp) : 0) > a || n.embeds.length < (null !== (i = null === (o = r.embeds) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0) || n.content !== r.content) || e.cached ? (0, l.createMessageRecord)(t) : u
    }
    var S = function() {
            function e(t) {
                E(this, e), y(this, "_messages", void 0), y(this, "_map", void 0), y(this, "_wasAtEdge", void 0), y(this, "_isCacheBefore", void 0), this._messages = [], this._map = {}, this._wasAtEdge = !1, this._isCacheBefore = t
            }
            return m(e, [{
                key: "clone",
                value: function() {
                    var t = new e(this._isCacheBefore);
                    return t._map = I({}, this._map), t._messages = h(this._messages), t._wasAtEdge = this._wasAtEdge, t
                }
            }, {
                key: "wasAtEdge",
                get: function() {
                    return this._wasAtEdge
                },
                set: function(e) {
                    this._wasAtEdge = e
                }
            }, {
                key: "length",
                get: function() {
                    return this._messages.length
                }
            }, {
                key: "clear",
                value: function() {
                    this._map = {}, this._messages = [], this._wasAtEdge = !1
                }
            }, {
                key: "remove",
                value: function(e) {
                    this._messages = o().filter(this._messages, function(t) {
                        return t.id !== e
                    }), delete this._map[e]
                }
            }, {
                key: "removeMany",
                value: function(e) {
                    var t = this;
                    o().each(e, function(e) {
                        delete t._map[e]
                    }), this._messages = this._messages.filter(function(t) {
                        return -1 === e.indexOf(t.id)
                    })
                }
            }, {
                key: "replace",
                value: function(e, t) {
                    var n = this._map[e];
                    null != n && (delete this._map[e], this._map[t.id] = t, this._messages[this._messages.indexOf(n)] = t)
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = this._map[e];
                    if (null != n) {
                        var r = t(n);
                        this._map[n.id] = r, this._messages[this._messages.indexOf(n)] = r
                    }
                }
            }, {
                key: "has",
                value: function(e) {
                    return null != this._map[e]
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._map[e]
                }
            }, {
                key: "forEach",
                value: function(e, t) {
                    this._messages.forEach(e, t)
                }
            }, {
                key: "cache",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (0 === this.length && (this._wasAtEdge = n), this._messages.length + e.length > d.MAX_MESSAGE_CACHE_SIZE) {
                        if (this._wasAtEdge = !1, e.length > d.MAX_MESSAGE_CACHE_SIZE) {
                            this._isCacheBefore ? this._messages = e.slice(e.length - d.MAX_MESSAGE_CACHE_SIZE) : this._messages = e.slice(0, d.MAX_MESSAGE_CACHE_SIZE), this._map = {}, this._messages.forEach(function(e) {
                                return t._map[e.id] = e
                            });
                            return
                        }
                        var r = d.MAX_MESSAGE_CACHE_SIZE - e.length;
                        this._isCacheBefore ? this._messages = this._messages.slice(Math.max(this._messages.length - r, 0)) : this._messages = this._messages.slice(0, r)
                    }
                    this._messages = this._isCacheBefore ? h(this._messages).concat(h(e)) : h(e).concat(h(this._messages)), this._map = {}, this._messages.forEach(function(e) {
                        return t._map[e.id] = e
                    })
                }
            }, {
                key: "extractAll",
                value: function() {
                    var e = this._messages;
                    return this._messages = [], this._map = {}, e
                }
            }, {
                key: "extract",
                value: function(e) {
                    var t, n = this;
                    if (this._isCacheBefore) {
                        var r = Math.max(this.length - e, 0),
                            o = this.length;
                        t = this._messages.slice(r, o), this._messages.splice(r)
                    } else {
                        var i = Math.min(e, this.length);
                        t = this._messages.slice(0, i), this._messages.splice(0, e)
                    }
                    return t.forEach(function(e) {
                        return delete n._map[e.id]
                    }), t
                }
            }]), e
        }(),
        v = function() {
            function e(t) {
                E(this, e), y(this, "channelId", void 0), y(this, "ready", void 0), y(this, "jumpType", void 0), y(this, "jumpTargetId", void 0), y(this, "jumpTargetOffset", void 0), y(this, "jumpSequenceId", void 0), y(this, "jumped", void 0), y(this, "jumpedToPresent", void 0), y(this, "jumpFlash", void 0), y(this, "jumpReturnTargetId", void 0), y(this, "focusTargetId", void 0), y(this, "hasMoreBefore", void 0), y(this, "hasMoreAfter", void 0), y(this, "loadingMore", void 0), y(this, "revealedMessageId", void 0), y(this, "cached", void 0), y(this, "hasFetched", void 0), y(this, "error", void 0), y(this, "_array", []), y(this, "_before", void 0), y(this, "_after", void 0), y(this, "_map", {}), this.channelId = t, this.ready = !1, this.jumpTargetId = null, this.jumpTargetOffset = 0, this.jumpSequenceId = 1, this.jumped = !1, this.jumpedToPresent = !1, this.jumpType = a.JumpTypes.ANIMATED, this.jumpFlash = !0, this.jumpReturnTargetId = null, this.hasMoreBefore = !0, this.hasMoreAfter = !1, this.loadingMore = !1, this.revealedMessageId = null, this._clearMessages(), this._before = new S(!0), this._after = new S(!1), this.cached = !1, this.hasFetched = !1, this.error = !1
            }
            return m(e, [{
                key: "mutate",
                value: function(t) {
                    var n, r, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = new e(this.channelId);
                    if (i._array = o ? h(this._array) : this._array, i._map = o ? I({}, this._map) : this._map, i._after = o ? this._after.clone() : this._after, i._before = o ? this._before.clone() : this._before, n = t, null != (r = Function) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r) i.ready = this.ready, i.jumpType = this.jumpType, i.jumpTargetId = this.jumpTargetId, i.jumpTargetOffset = this.jumpTargetOffset, i.jumpSequenceId = this.jumpSequenceId, i.jumped = this.jumped, i.jumpedToPresent = this.jumpedToPresent, i.jumpFlash = this.jumpFlash, i.jumpReturnTargetId = this.jumpReturnTargetId, i.focusTargetId = this.focusTargetId, i.hasMoreBefore = this.hasMoreBefore, i.hasMoreAfter = this.hasMoreAfter, i.loadingMore = this.loadingMore, i.revealedMessageId = this.revealedMessageId, i.cached = this.cached, i.hasFetched = this.hasFetched, i.error = this.error, t(i);
                    else "object" == typeof t && (i.ready = void 0 !== t.ready ? !0 === t.ready : this.ready, i.jumpType = void 0 !== t.jumpType ? t.jumpType : this.jumpType, i.jumpTargetId = void 0 !== t.jumpTargetId ? t.jumpTargetId : this.jumpTargetId, i.jumpTargetOffset = void 0 !== t.jumpTargetOffset ? t.jumpTargetOffset : this.jumpTargetOffset, i.jumpSequenceId = void 0 !== t.jumpSequenceId ? t.jumpSequenceId : this.jumpSequenceId, i.jumped = void 0 !== t.jumped ? !0 === t.jumped : this.jumped, i.jumpedToPresent = void 0 !== t.jumpedToPresent ? !0 === t.jumpedToPresent : this.jumpedToPresent, i.jumpFlash = void 0 !== t.jumpFlash ? !0 === t.jumpFlash : this.jumpFlash, i.jumpReturnTargetId = void 0 !== t.jumpReturnTargetId ? t.jumpReturnTargetId : this.jumpReturnTargetId, i.focusTargetId = void 0 !== t.focusTargetId ? t.focusTargetId : this.focusTargetId, i.hasMoreBefore = void 0 !== t.hasMoreBefore ? !0 === t.hasMoreBefore : this.hasMoreBefore, i.hasMoreAfter = void 0 !== t.hasMoreAfter ? !0 === t.hasMoreAfter : this.hasMoreAfter, i.loadingMore = void 0 !== t.loadingMore ? t.loadingMore : this.loadingMore, i.revealedMessageId = void 0 !== t.revealedMessageId ? t.revealedMessageId : this.revealedMessageId, i.cached = void 0 !== t.cached ? t.cached : this.cached, i.hasFetched = void 0 !== t.hasFetched ? t.hasFetched : this.hasFetched, i.error = void 0 !== t.error ? t.error : this.error);
                    return i
                }
            }, {
                key: "length",
                get: function() {
                    return this._array.length
                }
            }, {
                key: "toArray",
                value: function() {
                    return h(this._array)
                }
            }, {
                key: "forEach",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (n) {
                        for (var r = this._array, o = r.length - 1; o >= 0 && !1 !== e.call(t, r[o], o); o--);
                    } else this._array.forEach(e, t)
                }
            }, {
                key: "reduce",
                value: function(e, t) {
                    return this._array.reduce(e, t)
                }
            }, {
                key: "some",
                value: function(e, t) {
                    return this._array.some(e, t)
                }
            }, {
                key: "filter",
                value: function(e, t) {
                    return this._array.filter(e, t)
                }
            }, {
                key: "forAll",
                value: function(e, t) {
                    this._before.forEach(e, t), this._array.forEach(e, t), this._after.forEach(e, t)
                }
            }, {
                key: "findOldest",
                value: function(e) {
                    var t, n;
                    return null !== (n = null !== (t = o().find(this._before._messages, e)) && void 0 !== t ? t : o().find(this._array, e)) && void 0 !== n ? n : o().find(this._after._messages, e)
                }
            }, {
                key: "findNewest",
                value: function(e) {
                    var t, n;
                    return null !== (n = null !== (t = o().findLast(this._after._messages, e)) && void 0 !== t ? t : o().findLast(this._array, e)) && void 0 !== n ? n : o().findLast(this._before._messages, e)
                }
            }, {
                key: "map",
                value: function(e, t) {
                    return this._array.map(e, t)
                }
            }, {
                key: "first",
                value: function() {
                    return this._array[0]
                }
            }, {
                key: "last",
                value: function() {
                    return this._array[this._array.length - 1]
                }
            }, {
                key: "get",
                value: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = this._map[e];
                    return null == r && n ? null !== (t = this._before.get(e)) && void 0 !== t ? t : this._after.get(e) : r
                }
            }, {
                key: "getByIndex",
                value: function(e) {
                    return this._array[e]
                }
            }, {
                key: "getAfter",
                value: function(e) {
                    var t = this.get(e);
                    if (null == t) return null;
                    var n = this._array.indexOf(t);
                    return -1 === n || n === this.length - 1 ? null : this._array[n + 1]
                }
            }, {
                key: "getManyAfter",
                value: function(e, t, n) {
                    var r = this.get(e);
                    if (null == r) return null;
                    var o = this._array.indexOf(r);
                    if (-1 === o) return null;
                    for (var i = [], a = o + 1; a < this.length && (-1 === t || i.length < t); a++)(null == n || n(this._array[a])) && i.push(this._array[a]);
                    return i
                }
            }, {
                key: "getManyBefore",
                value: function(e, t, n) {
                    var r = this.get(e);
                    if (null == r) return null;
                    var o = this._array.indexOf(r);
                    if (-1 === o) return null;
                    for (var i = [], a = o - 1; a >= 0 && (-1 === t || i.length < t); a--)(null == n || n(this._array[a])) && i.unshift(this._array[a]);
                    return i
                }
            }, {
                key: "has",
                value: function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return null != this._map[e] || t && (this._before.has(e) || this._after.has(e))
                }
            }, {
                key: "indexOf",
                value: function(e) {
                    var t = -1;
                    return this._array.find(function(n, r) {
                        return n.id === e && (t = r, !0)
                    }), t
                }
            }, {
                key: "hasPresent",
                value: function() {
                    return this._after.length > 0 && this._after.wasAtEdge || !this.hasMoreAfter
                }
            }, {
                key: "hasBeforeCached",
                value: function(e) {
                    if (this.length > 0 && this._before.length > 0) {
                        var t = this.first();
                        return null != t && t.id === e
                    }
                    return !1
                }
            }, {
                key: "hasAfterCached",
                value: function(e) {
                    if (this.length > 0 && this._after.length > 0) {
                        var t = this.last();
                        return null != t && t.id === e
                    }
                    return !1
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = this._map[e];
                    if (null == n) return this._before.has(e) ? this.mutate(function(n) {
                        return n._before.update(e, t)
                    }, !0) : this._after.has(e) ? this.mutate(function(n) {
                        return n._after.update(e, t)
                    }, !0) : this;
                    var r = t(n);
                    return this.mutate(function(e) {
                        e._map[n.id] = r, e._array[e._array.indexOf(n)] = r
                    }, !0)
                }
            }, {
                key: "replace",
                value: function(e, t) {
                    var n = this._map[e];
                    if (null == n) return this._before.has(e) ? this.mutate(function(n) {
                        return n._before.replace(e, t)
                    }, !0) : this._after.has(e) ? this.mutate(function(n) {
                        return n._after.replace(e, t)
                    }, !0) : this;
                    return this.mutate(function(r) {
                        delete r._map[e], r._map[t.id] = t, r._array[r._array.indexOf(n)] = t
                    }, !0)
                }
            }, {
                key: "remove",
                value: function(e) {
                    return this.mutate(function(t) {
                        delete t._map[e], t._array = t._array.filter(function(t) {
                            return t.id !== e
                        }), t._before.remove(e), t._after.remove(e)
                    }, !0)
                }
            }, {
                key: "removeMany",
                value: function(e) {
                    var t = this;
                    return e.some(function(e) {
                        return t.has(e)
                    }) ? this.mutate(function(t) {
                        o().each(e, function(e) {
                            delete t._map[e]
                        }), t._array = t._array.filter(function(t) {
                            return -1 === e.indexOf(t.id)
                        }), t._before.removeMany(e), t._after.removeMany(e)
                    }, !0) : this
                }
            }, {
                key: "merge",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return this.mutate(function(r) {
                        r._merge(e, t, n)
                    }, !0)
                }
            }, {
                key: "_merge",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    e = e.filter(function(e) {
                        var n = t._map[e.id];
                        return t._map[e.id] = e, null == n || (t._array[t._array.indexOf(n)] = e, !1)
                    }), r && (n ? this._before : this._after).clear(), this._array = n ? h(e).concat(h(this._array)) : h(this._array).concat(h(e))
                }
            }, {
                key: "mergeDelta",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return this.mutate(function(r) {
                        r._before.clear(), r._after.clear();
                        var o = new Set(n);
                        e.forEach(function(e) {
                            return o.add(e.id)
                        }), t.forEach(function(e) {
                            return o.add(e.id)
                        }), r._array = r._array.filter(function(e) {
                            return !o.has(e.id)
                        }).concat(e.map(function(e) {
                            return (0, l.createMessageRecord)(e)
                        }), t.map(function(e) {
                            return (0, l.createMessageRecord)(e)
                        })).sort(function(e, t) {
                            return c.default.compare(e.id, t.id)
                        })
                    })
                }
            }, {
                key: "_clearMessages",
                value: function() {
                    this._array = [], this._map = {}
                }
            }, {
                key: "reset",
                value: function(e) {
                    return this.mutate(function(t) {
                        t._array = e, t._map = {}, e.forEach(function(e) {
                            return t._map[e.id] = e
                        }), t._before.clear(), t._after.clear()
                    })
                }
            }, {
                key: "truncateTop",
                value: function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = this._array.length - e;
                    return n <= 0 ? this : this.mutate(function(e) {
                        for (var t = 0; t < n; t++) delete e._map[e._array[t].id];
                        e._before.cache(e._array.slice(0, n), !e.hasMoreBefore), e._array = e._array.slice(n), e.hasMoreBefore = !0
                    }, t)
                }
            }, {
                key: "truncateBottom",
                value: function(e) {
                    var t = this,
                        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return this._array.length <= e ? this : this.mutate(function(n) {
                        for (var r = e; r < t._array.length; r++) delete n._map[n._array[r].id];
                        n._after.cache(n._array.slice(e, t._array.length), !n.hasMoreAfter), n._array = n._array.slice(0, e), n.hasMoreAfter = !0
                    }, n)
                }
            }, {
                key: "jumpToPresent",
                value: function(e) {
                    return this.mutate(function(t) {
                        var n = t._after.extractAll();
                        t.hasMoreAfter = !1;
                        var r = Math.max(n.length - e, 0),
                            o = n.slice(r);
                        n.splice(r), t._before.cache(t._array), t._before.cache(n), t._clearMessages(), t._merge(o), t.hasMoreBefore = t._before.length > 0, t.jumped = !0, t.jumpTargetId = null, t.jumpTargetOffset = 0, t.jumpedToPresent = !0, t.jumpFlash = !1, t.jumpReturnTargetId = null, t.jumpSequenceId = t.jumpSequenceId + 1, t.ready = !0, t.loadingMore = !1
                    }, !0)
                }
            }, {
                key: "jumpToMessage",
                value: function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        o = arguments.length > 4 ? arguments[4] : void 0;
                    return this.mutate(function(i) {
                        i.jumped = !0, i.jumpedToPresent = !1, i.jumpType = null != o ? o : a.JumpTypes.ANIMATED, i.jumpTargetId = e, i.jumpTargetOffset = null != e && null != n ? n : 0, i.jumpSequenceId = i.jumpSequenceId + 1, i.jumpFlash = t, i.jumpReturnTargetId = r, i.ready = !0, i.loadingMore = !1
                    }, !1)
                }
            }, {
                key: "focusOnMessage",
                value: function(e) {
                    return this.mutate(function(t) {
                        t.focusTargetId = e, t.ready = !0, t.loadingMore = !1
                    }, !1)
                }
            }, {
                key: "loadFromCache",
                value: function(e, t) {
                    return this.mutate(function(n) {
                        var r = e ? n._before : n._after;
                        n._merge(r.extract(t), e);
                        var o = r.length > 0 || !r.wasAtEdge;
                        e ? n.hasMoreBefore = o : n.hasMoreAfter = o, n.ready = !0, n.loadingMore = !1
                    }, !0)
                }
            }, {
                key: "truncate",
                value: function(e, t) {
                    return this.length <= d.MAX_LOADED_MESSAGES ? this : e ? this.truncateBottom(d.TRUNCATED_MESSAGE_VIEW_SIZE) : t ? this.truncateTop(d.TRUNCATED_MESSAGE_VIEW_SIZE) : this
                }
            }, {
                key: "receiveMessage",
                value: function(e) {
                    var t, n, r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        o = null == e.nonce ? null : this.get(e.nonce, !0);
                    if (null != o && ((null === (t = e.author) || void 0 === t ? void 0 : t.id) === (null === (n = o.author) || void 0 === n ? void 0 : n.id) || null != e.interaction && e.interaction.user.id === o.author.id) && null != e.nonce && o.id === e.nonce) {
                        var a = (0, l.createMessageRecord)(e);
                        return null != o.interactionData && (a.interactionData = o.interactionData), this.replace(e.nonce, a)
                    }
                    if (this.hasMoreAfter) this._after.wasAtEdge && (this._after.wasAtEdge = !1);
                    else {
                        var u = i.default.getCurrentConfig({
                                location: "2ecb25_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled ? (0, l.createMessageRecord)(e) : T(this, e),
                            s = this.merge([u]);
                        return r ? s.truncateTop(d.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : this.length > d.MAX_LOADED_MESSAGES ? s.truncateBottom(d.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : s
                    }
                    return this
                }
            }, {
                key: "receivePushNotification",
                value: function(e) {
                    return null != (null == e.nonce ? null : this.get(e.nonce, !0)) ? this : this.mutate({
                        ready: !0,
                        cached: !0
                    }).merge([T(this, e)])
                }
            }, {
                key: "loadStart",
                value: function(e) {
                    var t, n, r, o;
                    return this.mutate({
                        loadingMore: !0,
                        jumped: null != e,
                        jumpedToPresent: null !== (t = null == e ? void 0 : e.present) && void 0 !== t && t,
                        jumpTargetId: null !== (n = null == e ? void 0 : e.messageId) && void 0 !== n ? n : null,
                        jumpTargetOffset: null !== (r = null == e ? void 0 : e.offset) && void 0 !== r ? r : 0,
                        jumpReturnTargetId: null !== (o = null == e ? void 0 : e.returnMessageId) && void 0 !== o ? o : null,
                        ready: null == e && this.ready
                    })
                }
            }, {
                key: "loadComplete",
                value: function(e) {
                    var t, n, r, u, s, c, f, _, E, p, m, y = this,
                        I = h(e.newMessages),
                        S = null !== (t = e.isBefore) && void 0 !== t && t,
                        v = null !== (n = e.isAfter) && void 0 !== n && n,
                        g = null !== (r = e.jump) && void 0 !== r ? r : null,
                        A = null !== (u = e.hasMoreBefore) && void 0 !== u && u,
                        b = null !== (s = e.hasMoreAfter) && void 0 !== s && s,
                        N = null !== (c = e.cached) && void 0 !== c && c,
                        R = o()(I).reverse().map(i.default.getCurrentConfig({
                            location: "2ecb25_2"
                        }, {
                            autoTrackExposure: !1
                        }).enabled ? function(e) {
                            return (0, l.createMessageRecord)(e)
                        } : function(e) {
                            return T(y, e)
                        }).value(),
                        C = null;
                    if ((S || v) && null == g && this.ready) C = this.merge(R, S, !0);
                    else {
                        var P = this._array.filter(function(e) {
                            return e.state === d.MessageStates.SENDING
                        });
                        C = this.reset(R), !(P.length > 0) || S || v || (null == g ? void 0 : g.messageId) != null || (null == g ? void 0 : g.offset) != null ? O.info("loadComplete: resetting state for channelId=".concat(this.channelId, ", sending.length=").concat(P.length)) : (O.info("loadComplete: merging with SENDING messages for channelId=".concat(this.channelId)), C = C.merge(P))
                    }
                    return C = C.mutate({
                        ready: !0,
                        loadingMore: !1,
                        jumpType: null !== (f = null == g ? void 0 : g.jumpType) && void 0 !== f ? f : a.JumpTypes.ANIMATED,
                        jumpFlash: null !== (_ = null == g ? void 0 : g.flash) && void 0 !== _ && _,
                        jumped: null != g,
                        jumpedToPresent: null !== (E = null == g ? void 0 : g.present) && void 0 !== E && E,
                        jumpTargetId: null !== (p = null == g ? void 0 : g.messageId) && void 0 !== p ? p : null,
                        jumpTargetOffset: null != g && null != g.messageId && null != g.offset ? g.offset : 0,
                        jumpSequenceId: null != g ? C.jumpSequenceId + 1 : C.jumpSequenceId,
                        jumpReturnTargetId: null !== (m = null == g ? void 0 : g.returnMessageId) && void 0 !== m ? m : null,
                        hasMoreBefore: null == g && v ? C.hasMoreBefore : A,
                        hasMoreAfter: null == g && S ? C.hasMoreAfter : b,
                        cached: N,
                        hasFetched: e.hasFetched,
                        error: !1
                    })
                }
            }, {
                key: "addCachedMessages",
                value: function(e, t) {
                    var n = this;
                    (0, u.requireSortedDescending)(e);
                    var r = e.map(function(e) {
                        return T(n, e)
                    }).reverse();
                    return this._array.filter(function(e) {
                        return !r.some(function(t) {
                            return t.id === e.id
                        })
                    }).forEach(function(e) {
                        return f.insert(r, e, function(e, t) {
                            return c.default.compare(e.id, t.id)
                        })
                    }), this.reset(r).mutate({
                        ready: !0,
                        cached: t,
                        error: !1
                    })
                }
            }], [{
                key: "forEach",
                value: function(t) {
                    o().forEach(e._channelMessages, t)
                }
            }, {
                key: "get",
                value: function(t) {
                    return e._channelMessages[t]
                }
            }, {
                key: "hasPresent",
                value: function(t) {
                    var n = e.get(t);
                    return null != n && n.hasPresent()
                }
            }, {
                key: "getOrCreate",
                value: function(t) {
                    var n = e._channelMessages[t];
                    return null == n && (n = new e(t), e._channelMessages[t] = n), n
                }
            }, {
                key: "clear",
                value: function(t) {
                    delete e._channelMessages[t]
                }
            }, {
                key: "clearCache",
                value: function(t) {
                    var n = e._channelMessages[t];
                    null != n && (n._before.clear(), n._after.clear(), this.commit(n))
                }
            }, {
                key: "commit",
                value: function(t) {
                    e._channelMessages[t.channelId] = t
                }
            }]), e
        }();
    y(v, "_channelMessages", {}), t.default = v
}