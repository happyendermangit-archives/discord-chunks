function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("329128"),
        a = n("251384"),
        u = n("754250"),
        s = n("769098"),
        l = n("68735"),
        c = n("503225");

    function f(e) {
        var t, n = e.editorRef,
            f = e.options,
            d = e.channel,
            _ = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(),
            E = r.useCallback(function(e, t) {
                var r = n.current;
                null != e && null != r && r.insertEmoji(e, t, !1), t && (0, a.closeExpressionPicker)()
            }, [n]);
        return null == _ ? null : r.createElement("div", {
            id: "slate-toolbar",
            className: c.staticToolbar
        }, r.createElement("div", {
            className: c.staticButtons
        }, r.createElement(s.ToolbarButtons, {
            editorRef: n,
            options: f,
            iconClassName: c.staticIcon,
            dividerClassName: c.staticDivider
        })), r.createElement(o.Popout, {
            renderPopout: function(e) {
                var t = e.closePopout;
                return r.createElement(i.default, {
                    persistSearch: !0,
                    channel: d,
                    closePopout: t,
                    onSelectEmoji: function(e, n) {
                        E(e, n), n && t()
                    },
                    pickerIntention: l.EmojiIntention.COMMUNITY_CONTENT
                })
            },
            position: "bottom",
            animation: o.Popout.Animation.NONE,
            align: "left"
        }, function(e, t) {
            var n, o, i = t.isShown;
            return r.createElement(u.default, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, e), o = (o = {
                active: i,
                className: c.emojiButton,
                tabIndex: 0
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
            }), n))
        }))
    }
}