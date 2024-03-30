function(e, t, n) {
    "use strict";
    n.r(t), n("629815");
    var r = n("807471");
    n("951240");
    var o = n("56449"),
        i = n("584876"),
        a = n("152587");
    n("439970"), n("411778");
    var u = n("420480"),
        s = n("964164");

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
    var _ = new Set;

    function E(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!t || !!_.has(e.channel_id)) {
            var n = (0, s.default)(e.content);
            null != n && 0 !== n.length && n.forEach(function(e) {
                var t = e.type,
                    n = e.code;
                if (t === u.CodedLinkType.INVITE);
                else if (t === u.CodedLinkType.TEMPLATE) null == a.default.getGuildTemplate(n) && i.default.resolveGuildTemplate(n);
                else if (t === u.CodedLinkType.BUILD_OVERRIDE || t === u.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                else if (t === u.CodedLinkType.EVENT);
                else if (t === u.CodedLinkType.CHANNEL_LINK);
                else if (t === u.CodedLinkType.APP_DIRECTORY_PROFILE);
                else if (t === u.CodedLinkType.ACTIVITY_BOOKMARK);
                else if (t === u.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                else if (t === u.CodedLinkType.GUILD_PRODUCT);
                else if (t === u.CodedLinkType.SERVER_SHOP);
                else if (t === u.CodedLinkType.CLYDE_PROFILE);
                else if (t === u.CodedLinkType.QUESTS_EMBED);
                else throw Error("Unknown coded link type: ".concat(t))
            })
        }
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(s, e);
        var t, n, r, i, a, u = (t = s, n = function() {
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

        function s() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), e = u.apply(this, arguments), t = l(e), n = "actions", r = {
                POST_CONNECTION_OPEN: e.handleConnectionOpen,
                MESSAGE_CREATE: {
                    callback: e.handleMessage,
                    autoSubscribe: !1
                },
                MESSAGE_UPDATE: e.handleMessage,
                LOAD_MESSAGES_SUCCESS: e.handleLoadMessages,
                LOAD_MESSAGES_AROUND_SUCCESS: e.handleLoadMessages,
                LOAD_RECENT_MENTIONS_SUCCESS: e.handleLoadRecentMentions,
                LOAD_PINNED_MESSAGES_SUCCESS: e.handleLoadPinnedMessages,
                SEARCH_FINISH: e.handleSearchFinish,
                MOD_VIEW_SEARCH_FINISH: e.handleSearchFinish,
                GUILD_FEED_FETCH_SUCCESS: e.handleGuildFeedFetchSuccess,
                CHANNEL_SELECT: {
                    callback: e.handleChannelSelect,
                    autoSubscribe: !1
                }
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return r = s, i = [{
            key: "handleConnectionOpen",
            value: function() {
                _.clear()
            }
        }, {
            key: "handleChannelSelect",
            value: function(e) {
                var t = e.channelId;
                null != t && _.add(t)
            }
        }, {
            key: "handleMessage",
            value: function(e) {
                return E(e.message, !0)
            }
        }, {
            key: "handleLoadMessages",
            value: function(e) {
                var t = e.channelId,
                    n = e.messages;
                _.add(t), n.forEach(function(e) {
                    return E(e, !0)
                })
            }
        }, {
            key: "handleLoadRecentMentions",
            value: function(e) {
                e.messages.forEach(function(e) {
                    return E(e)
                })
            }
        }, {
            key: "handleLoadPinnedMessages",
            value: function(e) {
                e.messages.forEach(function(e) {
                    return E(e)
                })
            }
        }, {
            key: "handleSearchFinish",
            value: function(e) {
                e.messages.forEach(function(e) {
                    e.forEach(function(e) {
                        return E(e)
                    })
                })
            }
        }, {
            key: "handleGuildFeedFetchSuccess",
            value: function(e) {
                var t = e.data;
                (0, o.getMessagesFromGuildFeedFetch)(t).forEach(function(e) {
                    return E(e)
                })
            }
        }], c(r.prototype, i), a && c(r, a), s
    }(r.default);
    t.default = new p
}