function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("163094"),
        i = n("68735");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var c = new Set([i.EmojiInteractionPoint.EmojiButtonMouseEntered, i.EmojiInteractionPoint.ChatInputExpressionPressed, i.EmojiInteractionPoint.ChatInputSuggestionsShown, i.EmojiInteractionPoint.SearchEmojiKeybindPressed, i.EmojiInteractionPoint.AutocompleteTyped, i.EmojiInteractionPoint.GuildLeaveModalShown, i.EmojiInteractionPoint.AddReactionPopoutMouseEntered, i.EmojiInteractionPoint.AddReactionPopoutFocused, i.EmojiInteractionPoint.MessageContextMenuMouseEntered, i.EmojiInteractionPoint.AutocompleteWrapperShown]),
        f = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(_, e);
            var t, n, r, i, f, d = (t = _, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = s(t);
                if (n) {
                    var u = s(this).constructor;
                    o = Reflect.construct(i, arguments, u)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : a(e)
            });

            function _() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, _), e = d.apply(this, arguments), t = a(e), n = "actions", r = {
                    EMOJI_INTERACTION_INITIATED: e.handleInteraction
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return r = _, i = [{
                key: "handleInteraction",
                value: function(e) {
                    var t = e.interaction;
                    c.has(t) && (0, o.maybeGetEmojiCaptionsForUser)(t)
                }
            }], u(r.prototype, i), f && u(r, f), _
        }(r.default);
    t.default = new f
}