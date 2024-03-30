function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("147071"),
        i = n("217014"),
        a = n("935741"),
        u = n("523018"),
        s = n("727908");

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
        }(y, e);
        var t, n, r, E, p, m = (t = y, n = function() {
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

        function y() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), e = m.apply(this, arguments), f(l(e), "readStateSnapshots", {}), f(l(e), "actions", {
                CHANNEL_SELECT: function(t) {
                    return e.handleChannelSelect(t)
                },
                THREAD_CREATE: function(t) {
                    return e.handleThreadCreate(t)
                }
            }), f(l(e), "handleChannelSelect", function(t) {
                var n = t.channelId;
                if (null != n) {
                    var r = a.default.getChannel(n);
                    null != r && r.isForumLikeChannel() && (e.readStateSnapshots = {}, e.processForumChannel(r.guild_id, n))
                }
            }), f(l(e), "processForumChannel", function(t, n) {
                var r = o.default.getThreadsForParent(t, n);
                u.default.keys(r).forEach(function(t) {
                    var n = (0, s.getForumPostReadStatesById)(t);
                    null != n && (e.readStateSnapshots[t] = n)
                })
            }), f(l(e), "getReadStateSnapshotAnalytics", function(t) {
                return e.readStateSnapshots[t]
            }), e
        }
        return r = y, E = [{
            key: "handleThreadCreate",
            value: function(e) {
                var t = e.channel;
                if (t.isForumPost()) {
                    var n = t.ownerId === i.default.getId();
                    this.readStateSnapshots[t.id] = {
                        isNew: !n,
                        hasUnreads: !n
                    }
                }
            }
        }], c(r.prototype, E), p && c(r, p), y
    }(r.default);
    t.default = new E
}