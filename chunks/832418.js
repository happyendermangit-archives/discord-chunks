function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("898511"),
        o = n("629815"),
        i = n("807471"),
        a = n("526151"),
        u = n("217014"),
        s = n("935741");

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

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(m, e);
        var t, n, i, _, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function m() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), e = p.apply(this, arguments), t = l(e), n = "actions", r = {
                CHANNEL_DELETE: e.handleChannelDelete,
                MESSAGE_CREATE: e.handleMessageCreate
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return i = m, _ = [{
            key: "handleChannelDelete",
            value: function(e) {
                var t = e.channel;
                if (null != t.guild_id) {
                    var n = s.default.getAllThreadsForParent(t.id);
                    n.length > 0 && r.default.Emitter.batched(function() {
                        var e = !0,
                            t = !1,
                            r = void 0;
                        try {
                            for (var i, a = n[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                                var u = i.value;
                                o.default.dispatch({
                                    type: "THREAD_DELETE",
                                    channel: u
                                })
                            }
                        } catch (e) {
                            t = !0, r = e
                        } finally {
                            try {
                                !e && null != a.return && a.return()
                            } finally {
                                if (t) throw r
                            }
                        }
                    })
                }
            }
        }, {
            key: "handleMessageCreate",
            value: function(e) {
                var t, n, r, o = e.channelId,
                    i = e.message,
                    l = s.default.getChannel(o);
                if ((null === (t = i.author) || void 0 === t ? void 0 : t.id) === u.default.getId()) {
                    if (null == l ? void 0 : l.isActiveThread()) {
                        var c = new Date(null !== (r = null === (n = l.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== r ? r : 0).getTime();
                        Date.now() - c < 5e3 && a.default.resort(l.parent_id)
                    }
                }
            }
        }], c(i.prototype, _), E && c(i, E), m
    }(i.default);
    t.default = new _
}