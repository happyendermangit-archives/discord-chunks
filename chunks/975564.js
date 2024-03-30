function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("388990");

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
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {
            captionsById: new Map
        },
        _ = d,
        E = !1,
        p = null,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(s, e);
            var t, n, r, o, i, a = (t = s, n = function() {
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

            function s() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), a.apply(this, arguments)
            }
            return r = s, o = [{
                key: "initialize",
                value: function(e) {
                    _ = null != e ? {
                        captionsById: new Map(e.captionsById)
                    } : d
                }
            }, {
                key: "getState",
                value: function() {
                    return _
                }
            }, {
                key: "getCaptionsForEmojiById",
                value: function(e) {
                    var t, n = e.emojiId;
                    return null !== (t = _.captionsById.get(n)) && void 0 !== t ? t : []
                }
            }, {
                key: "getIsFetching",
                value: function() {
                    return E
                }
            }, {
                key: "getEmojiCaptionsTTL",
                value: function() {
                    return p
                }
            }, {
                key: "hasPersistedState",
                value: function() {
                    return _.captionsById.size > 0
                }
            }, {
                key: "clear",
                value: function() {
                    _ = d, E = !1, p = null
                }
            }], u(r.prototype, o), i && u(r, i), s
        }(o.default.PersistedStore);
    s(m, "displayName", "EmojiCaptionsStore"), s(m, "persistKey", "EmojiCaptionsStore"), t.default = new m(i.default, {
        LOGOUT: function() {
            _ = d, E = !1, p = null
        },
        EMOJI_CAPTIONS_FETCH: function(e) {
            c(e), !E && (E = !0)
        },
        EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
            var t = e.emojiCaptions;
            _.captionsById = new Map(Object.entries(t)), E = !1, p = Date.now() + 360 * a.default.Millis.MINUTE
        },
        EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
            var t = e.is4XXError;
            E = !1;
            p = Date.now() + (t ? 10 : 1) * a.default.Millis.MINUTE
        },
        POST_CONNECTION_OPEN: function(e) {
            c(e), E = !1
        }
    })
}