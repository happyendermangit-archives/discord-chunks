function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        l = r("803997"),
        i = r.n(l),
        a = r("784184"),
        o = r("50182");

    function c(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    t.default = function(e) {
        var t, r, l, u = e.className,
            s = e.compact,
            f = void 0 !== s && s,
            d = e.contentOnly,
            m = e.zalgo,
            h = e.disableInteraction,
            p = e.childrenRepliedMessage,
            g = e.childrenExecutedCommand,
            y = e.childrenHeader,
            b = e.childrenSystemMessage,
            O = e.childrenButtons,
            E = e.childrenMessageContent,
            v = e.childrenAccessories,
            w = e.messageRef,
            P = e.focusProps,
            x = e.hasThread,
            S = e.isSystemMessage,
            C = e.hasReply,
            j = function(e, t) {
                if (null == e) return {};
                var r, n, l = function(e, t) {
                    if (null == e) return {};
                    var r, n, l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && (l[r] = e[r]);
                    return l
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        if (r = i[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
                    }
                }
                return l
            }(e, ["className", "compact", "contentOnly", "zalgo", "disableInteraction", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply"]);
        var I = n.createElement(a.FocusRing, void 0 === P ? {
            offset: {
                left: 4,
                right: 4
            }
        } : P, n.createElement("div", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    c(e, t, r[t])
                })
            }
            return e
        }({
            className: i()(u, (c(l = {}, o.wrapper, !0), c(l, o.contentOnly, void 0 !== d && d), c(l, o.compact, f), c(l, o.cozy, !f), c(l, o.zalgo, void 0 === m || m), c(l, o.hasThread, x), c(l, o.isSystemMessage, S), c(l, o.hasReply, C), l)),
            ref: w
        }, j), r = (r = {
            role: "article"
        }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t), p, g, n.createElement("div", {
            className: o.contents
        }, b, y, null == b && E), v, null != O ? n.createElement("div", {
            className: o.buttonContainer
        }, O) : null));
        return void 0 !== h && h ? n.createElement(a.FocusBlock, null, I) : I
    }
}