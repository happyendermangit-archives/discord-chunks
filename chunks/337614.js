function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("31775"),
        o = n.n(r),
        i = n("807471"),
        a = n("870331"),
        u = n("523018"),
        s = n("281767");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

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
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(m, e);
        var t, n, r, i, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function m() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), e = p.apply(this, arguments), f(l(e), "currentlyVisibleMessageTimers", {}), f(l(e), "viewsInCurrentChannel", new Set), f(l(e), "recentViewTimes", new(o())({
                max: 500,
                maxAge: 6e4
            })), f(l(e), "batchBuffer", []), f(l(e), "batchTimerId", null), f(l(e), "actions", {
                CHANNEL_SELECT: function() {
                    return e.handleChannelSelect()
                }
            }), e
        }
        return r = m, i = [{
            key: "handleMessageBecameVisible",
            value: function(e) {
                var t = this,
                    n = e.messageId;
                if (!(null != this.currentlyVisibleMessageTimers[n] || this.viewsInCurrentChannel.has(n))) {
                    var r = this.recentViewTimes.get(n);
                    if (!(null != r && Date.now() - r < 6e4)) {
                        var o = setTimeout(function() {
                            delete t.currentlyVisibleMessageTimers[n], t.viewsInCurrentChannel.add(n), t.recentViewTimes.set(n, Date.now()), t.bufferViewTrack(e)
                        }, 1e3);
                        this.currentlyVisibleMessageTimers[n] = o
                    }
                }
            }
        }, {
            key: "handleMessageLostVisibility",
            value: function(e) {
                var t = this.currentlyVisibleMessageTimers[e];
                null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
            }
        }, {
            key: "handleMessageListVisibilityChange",
            value: function(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        this.handleMessageBecameVisible(a)
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        !t && null != i.return && i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                var s = new Set(e.map(function(e) {
                        return e.messageId
                    })),
                    l = !0,
                    c = !1,
                    f = void 0;
                try {
                    for (var d, _ = u.default.keys(this.currentlyVisibleMessageTimers)[Symbol.iterator](); !(l = (d = _.next()).done); l = !0) {
                        var E = d.value;
                        !s.has(E) && this.handleMessageLostVisibility(E)
                    }
                } catch (e) {
                    c = !0, f = e
                } finally {
                    try {
                        !l && null != _.return && _.return()
                    } finally {
                        if (c) throw f
                    }
                }
            }
        }, {
            key: "handleChannelSelect",
            value: function() {
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = Object.values(this.currentlyVisibleMessageTimers)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value;
                        clearTimeout(i)
                    }
                } catch (e) {
                    t = !0, n = e
                } finally {
                    try {
                        !e && null != o.return && o.return()
                    } finally {
                        if (t) throw n
                    }
                }
                this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
            }
        }, {
            key: "drainBuffer",
            value: function() {
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = this.batchBuffer[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value;
                        a.default.track(s.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                            message_id: i.messageId,
                            channel_id: i.channelId,
                            guild_id: i.guildId,
                            source_channel_id: i.sourceChannelId,
                            source_guild_id: i.sourceGuildId
                        })
                    }
                } catch (e) {
                    t = !0, n = e
                } finally {
                    try {
                        !e && null != o.return && o.return()
                    } finally {
                        if (t) throw n
                    }
                }
                this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
            }
        }, {
            key: "bufferViewTrack",
            value: function(e) {
                var t = this;
                this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(function() {
                    return t.drainBuffer()
                }, 2e3))
            }
        }], c(r.prototype, i), E && c(r, E), m
    }(i.default);
    t.default = new E
}