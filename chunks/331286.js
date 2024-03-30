function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("204394");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                s(e, t, n[t])
            })
        }
        return e
    }

    function f(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = {},
        E = {},
        p = {};

    function m(e) {
        if (null == e) return !1;
        var t = E[e];
        if (null == t) return !1;
        var n = a.default.getMessage(e, t.messageId);
        if (null == n) return !1;
        _[e] = {
            channel: t.channel,
            message: n,
            shouldMention: t.shouldMention,
            showMentionToggle: t.showMentionToggle
        }, delete E[e]
    }

    function y() {
        _ = {}, E = {}, p = {}
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(c, e);
        var t, n, r, o, i, s = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var a = l(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), s.apply(this, arguments)
        }
        return r = c, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(a.default)
            }
        }, {
            key: "getPendingReply",
            value: function(e) {
                return _[e]
            }
        }, {
            key: "getPendingReplyActionSource",
            value: function(e) {
                return p[e]
            }
        }], u(r.prototype, o), i && u(r, i), c
    }(o.default.Store);
    s(I, "displayName", "PendingReplyStore"), t.default = new I(i.default, {
        CREATE_PENDING_REPLY: function(e) {
            var t = e.channel,
                n = e.message,
                r = e.shouldMention,
                o = e.showMentionToggle,
                i = e.source;
            _[t.id] = {
                channel: t,
                message: n,
                shouldMention: void 0 === r || r,
                showMentionToggle: void 0 === o || o
            }, p[t.id] = i
        },
        CREATE_SHALLOW_PENDING_REPLY: function(e) {
            var t = e.channel,
                n = e.messageId,
                r = e.shouldMention,
                o = e.showMentionToggle;
            E[t.id] = {
                channel: t,
                messageId: n,
                shouldMention: void 0 === r || r,
                showMentionToggle: void 0 === o || o
            }
        },
        SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
            var t = e.channelId,
                n = e.shouldMention;
            t in _ && (_[t] = f(c({}, _[t]), {
                shouldMention: n
            })), t in E && (E[t] = f(c({}, E[t]), {
                shouldMention: n
            }))
        },
        DELETE_PENDING_REPLY: function(e) {
            var t = e.channelId;
            delete _[t], delete E[t]
        },
        CONNECTION_OPEN: y,
        LOGOUT: y,
        MESSAGE_DELETE: function(e) {
            var t, n, r, o = e.id,
                i = e.channelId;
            if ((null === (n = _[i]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === o) delete _[i], delete p[i];
            else {
                if ((null === (r = E[i]) || void 0 === r ? void 0 : r.messageId) !== o) return !1;
                delete E[i], delete p[i]
            }
        },
        CHANNEL_SELECT: function(e) {
            m(e.channelId)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            m(e.channelId)
        }
    })
}