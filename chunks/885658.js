function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("300983"),
        i = n("935741"),
        a = n("299529"),
        u = n("739226"),
        s = n("928204"),
        l = n("644037");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    var E = new Worker(new URL(n.p + n.u("72979"), n.b)),
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(I, e);
            var t, n, r, p, m, y = (t = I, n = function() {
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
                }(r) || "function" == typeof r) ? r : c(e)
            });

            function I() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, I), e = y.apply(this, arguments), t = c(e), n = "actions", r = {
                    CHANNEL_PRELOAD: e.handleChannelPreload
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return r = I, p = [{
                key: "handleChannelPreload",
                value: function(e) {
                    var t, n, r, c, f, d = e.channelId;
                    if (!(0, s.isStaticChannelRoute)(d)) {
                        var _ = i.default.getChannel(d);
                        if (null != _ && _.isForumLikeChannel()) {
                            ;
                            (c = [], (null == (f = (t = _).defaultReactionEmoji) ? void 0 : f.emojiId) != null ? c.push(a.default.getEmojiURL({
                                id: f.emojiId,
                                animated: null !== (r = null === (n = o.default.getUsableCustomEmojiById(f.emojiId)) || void 0 === n ? void 0 : n.animated) && void 0 !== r && r,
                                size: l.EMOJI_SIZE_MAP.reaction
                            })) : (null == f ? void 0 : f.emojiName) != null && c.push(u.default.getURL(f.emojiName)), t.availableTags.forEach(function(e) {
                                null != e.emojiId ? c.push(a.default.getEmojiURL({
                                    id: e.emojiId,
                                    animated: !1,
                                    size: l.EMOJI_SIZE_MAP.reaction
                                })) : null != e.emojiName && c.push(u.default.getURL(e.emojiName))
                            }), c).forEach(function(e) {
                                if (null != e && 0 !== e.length) {
                                    var t;
                                    t = e, new Promise(function(e) {
                                        var n = function(r) {
                                            var o = r.data.url;
                                            null == E || E.removeEventListener("message", n), t === o && e()
                                        };
                                        null == E || E.addEventListener("message", n), null == E || E.postMessage({
                                            url: t
                                        })
                                    })
                                }
                            })
                        }
                    }
                }
            }], f(r.prototype, p), m && f(r, m), I
        }(r.default);
    t.default = new p
}