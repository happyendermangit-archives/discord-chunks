function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOMOD_ERROR_CODES: function() {
            return y
        },
        InvalidKeywordError: function() {
            return p
        },
        InvalidRegexPatternError: function() {
            return m
        },
        getAutomodErrorMessage: function() {
            return h
        },
        getAutomodErrorMessageFromErrorResponse: function() {
            return I
        }
    });
    var r = n("749055"),
        o = n("935741"),
        i = n("281767"),
        a = n("941504");

    function u(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function s(e, t, n) {
        return (s = _() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new(Function.bind.apply(e, r));
            return n && f(o, n.prototype), o
        }).apply(null, arguments)
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && f(e, t)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function d(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (d = function(e) {
            var n;
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return s(e, arguments, l(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), f(r, e)
        })(e)
    }

    function _() {
        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch (e) {
            return !1
        }
    }

    function E(e) {
        var t = _();
        return function() {
            var n, r, o, i = l(e);
            if (t) {
                var a = l(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n)
        }
    }
    var p = function(e) {
            c(n, e);
            var t = E(n);

            function n() {
                return u(this, n), t.apply(this, arguments)
            }
            return n
        }(d(Error)),
        m = function(e) {
            c(n, e);
            var t = E(n);

            function n() {
                return u(this, n), t.apply(this, arguments)
            }
            return n
        }(d(Error)),
        y = new Set([i.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, i.AbortCodes.AUTOMOD_TITLE_BLOCKED, i.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

    function I(e, t) {
        if (null == e) return null;
        var n = e.code,
            r = e.message;
        if (!y.has(n)) return null;
        if (null != r) return r;
        if (null == t) return null;
        var u = o.default.getChannel(t);
        return (null == u ? void 0 : u.isThread()) ? a.default.Messages.THREAD_AUTOMOD_ERROR : ((null == u ? void 0 : u.isForumPost()) || (null == u ? void 0 : u.isForumLikeChannel())) && (n === i.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === i.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? a.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
    }

    function h(e, t) {
        var n, i, u = I(t);
        if (null != u) return u;
        if (null == e) return a.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE;
        return n = e, i = o.default.getChannel(n.message.channelId), (0, r.isMessageDataEdit)(n) ? a.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == i ? void 0 : i.isThread()) ? a.default.Messages.THREAD_AUTOMOD_ERROR : (null == i ? void 0 : i.isForumPost()) || (null == i ? void 0 : i.isForumLikeChannel()) ? a.default.Messages.FORUM_POST_AUTOMOD_ERROR : a.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
    }
}