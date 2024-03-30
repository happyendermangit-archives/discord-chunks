function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferencedMessageState: function() {
            return o
        }
    });
    var r, o, i, a = n("31775"),
        u = n.n(a),
        s = n("898511"),
        l = n("629815"),
        c = n("411372"),
        f = n("56449"),
        d = n("273829"),
        _ = n("935741"),
        E = n("204394"),
        p = n("281767");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t && I(e.prototype, t), n && I(e, n), e
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {}))[r.LOADED = 0] = "LOADED", r[r.NOT_LOADED = 1] = "NOT_LOADED", r[r.DELETED = 2] = "DELETED";
    var v = Object.freeze({
            state: 1
        }),
        g = new Set,
        A = function() {
            function e() {
                var t = this;
                y(this, e), O(this, "_cachedMessages", new(u())({
                    max: 100,
                    dispose: function(e, n) {
                        return t.handleCacheDisposed(e, n)
                    }
                })), O(this, "_cachedMessageIds", new Set)
            }
            return h(e, [{
                key: "handleCacheDisposed",
                value: function(e, t) {
                    this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e))
                }
            }, {
                key: "set",
                value: function(e, t) {
                    this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e))
                }
            }, {
                key: "has",
                value: function(e) {
                    return this._cachedMessageIds.has(e)
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._cachedMessages.get(e)
                }
            }, {
                key: "getCachedMessageIds",
                value: function() {
                    return this._cachedMessageIds
                }
            }]), e
        }(),
        b = new(function() {
            function e() {
                y(this, e), O(this, "_channelCaches", new Map)
            }
            return h(e, [{
                key: "has",
                value: function(e, t) {
                    var n, r;
                    return null !== (r = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== r && r
                }
            }, {
                key: "get",
                value: function(e, t) {
                    var n;
                    return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
                }
            }, {
                key: "set",
                value: function(e, t, n) {
                    var r = this._channelCaches.get(e);
                    null == r && (r = new A, this._channelCaches.set(e, r)), r.set(t, n)
                }
            }, {
                key: "updateExistingMessageIfCached",
                value: function(e) {
                    var t = this._channelCaches.get(e.channel_id);
                    return !!(null != t && t.has(e.id)) && (t.set(e.id, {
                        state: 0,
                        message: (0, d.createMessageRecord)(e)
                    }), !0)
                }
            }, {
                key: "deleteChannelCache",
                value: function(e) {
                    return this._channelCaches.delete(e)
                }
            }, {
                key: "retainWhere",
                value: function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = this._channelCaches[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u, s, l = (u = i.value, s = 1, function(e) {
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
                            }(u, s) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return m(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                                }
                            }(u, s) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())[0];
                            !e(l) && t.push(l)
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
                    var c = !0,
                        f = !1,
                        d = void 0;
                    try {
                        for (var _, E = t[Symbol.iterator](); !(c = (_ = E.next()).done); c = !0) {
                            var p = _.value;
                            this.deleteChannelCache(p)
                        }
                    } catch (e) {
                        f = !0, d = e
                    } finally {
                        try {
                            !c && null != E.return && E.return()
                        } finally {
                            if (f) throw d
                        }
                    }
                    return t.length
                }
            }, {
                key: "getCachedMessageIdsForChannel",
                value: function(e) {
                    var t = this._channelCaches.get(e);
                    return null == t ? null : t.getCachedMessageIds()
                }
            }, {
                key: "clear",
                value: function() {
                    this._channelCaches.clear()
                }
            }]), e
        }());

    function N(e) {
        var t = !1;
        if (b.updateExistingMessageIfCached(e) && (t = !0), p.MessageTypesWithLazyLoadedReferences.has(e.type)) {
            var n = e.message_reference;
            if (null == n) return t;
            var r = n.message_id;
            if (null == r) return t;
            if ("referenced_message" in e) {
                var o = e.referenced_message;
                null != o ? (b.set(o.channel_id, o.id, {
                    state: 0,
                    message: (0, d.createMessageRecord)(o)
                }), e.type === p.MessageTypes.THREAD_STARTER_MESSAGE && N(o)) : b.set(e.channel_id, r, {
                    state: 2
                })
            } else {
                var i = E.default.getMessage(n.channel_id, r);
                null != i ? b.set(n.channel_id, r, {
                    state: 0,
                    message: i
                }) : b.set(n.channel_id, r, v)
            }
            t = !0
        }
        return t
    }

    function R(e, t) {
        var n = !1,
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value;
                n = !1 !== t(s) || n
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
        return n
    }

    function C(e) {
        return R(e.messages, function(e) {
            return N(e)
        })
    }

    function P(e) {
        return R(e.messages, function(e) {
            return R(e, function(e) {
                return N(e)
            })
        })
    }

    function D(e) {
        return b.deleteChannelCache(e.channel.id)
    }

    function L(e, t) {
        if (!b.has(e, t)) return !1;
        b.set(e, t, {
            state: 2
        })
    }

    function M() {
        b.clear()
    }

    function U(e) {
        var t = e.firstMessages;
        return null != t && R(t, function(e) {
            return N(e)
        })
    }
    var w = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
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
            var e, r, o, i = T(t);
            if (n) {
                var a = T(this).constructor;
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
            return y(this, o), r.apply(this, arguments)
        }
        return h(o, [{
            key: "initialize",
            value: function() {
                this.waitFor(E.default, _.default)
            }
        }, {
            key: "getMessageByReference",
            value: function(e) {
                var t;
                return null != e && (t = b.get(e.channel_id, e.message_id)), null != t ? t : v
            }
        }, {
            key: "getMessage",
            value: function(e, t) {
                var n;
                return null !== (n = b.get(e, t)) && void 0 !== n ? n : v
            }
        }, {
            key: "getReplyIdsForChannel",
            value: function(e) {
                var t;
                return null != e && (t = b.getCachedMessageIdsForChannel(e)), null != t ? t : g
            }
        }]), o
    }(s.default.Store);
    O(w, "displayName", "ReferencedMessageStore"), t.default = new w(l.default, {
        CACHE_LOADED: function(e) {
            return R(Object.values(e.messages), function(e) {
                return R(Object.values(e), function(e) {
                    return N(e)
                })
            })
        },
        LOCAL_MESSAGES_LOADED: C,
        LOAD_MESSAGES_SUCCESS: C,
        LOAD_MESSAGES_AROUND_SUCCESS: C,
        SEARCH_FINISH: P,
        MOD_VIEW_SEARCH_FINISH: P,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t = e.data;
            return R((0, f.getMessagesFromGuildFeedFetch)(t), function(e) {
                return N(e)
            })
        },
        LOAD_THREADS_SUCCESS: U,
        LOAD_ARCHIVED_THREADS_SUCCESS: U,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            var t = e.messageId,
                n = e.channelId;
            if (!b.has(n, t)) return !1;
            var r = b.get(n, t);
            if (null == r || 0 !== r.state) return !1;
            b.set(n, t, {
                state: 0,
                message: (0, c.handleExplicitMediaScanTimeoutForMessage)(r.message)
            })
        },
        LOAD_FORUM_POSTS: function(e) {
            return R(Object.values(e.threads), function(e) {
                var t = e.first_message;
                return null != t && N(t)
            })
        },
        MESSAGE_CREATE: function(e) {
            var t = e.message;
            return !!E.default.getMessages(t.channel_id).ready && N(t)
        },
        MESSAGE_UPDATE: function(e) {
            var t = e.message,
                n = t.id,
                r = t.channel_id;
            if (!b.has(r, n)) return !1;
            var o = b.get(r, n);
            if (null == o || 0 !== o.state) return !1;
            b.set(r, n, {
                state: 0,
                message: (0, d.updateMessageRecord)(o.message, t)
            })
        },
        MESSAGE_DELETE: function(e) {
            var t = e.id;
            return L(e.channelId, t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            var t = e.ids,
                n = e.channelId;
            return R(t, function(e) {
                return L(n, e)
            })
        },
        CREATE_PENDING_REPLY: function(e) {
            var t = e.message;
            b.set(t.channel_id, t.id, {
                state: 0,
                message: t
            })
        },
        CHANNEL_DELETE: D,
        THREAD_DELETE: D,
        GUILD_DELETE: function() {
            if (0 === b.retainWhere(function(e) {
                    return null != _.default.getChannel(e)
                })) return !1
        },
        CONNECTION_OPEN: M,
        LOGOUT: M
    })
}