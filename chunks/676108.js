function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("481060"),
        s = n("907040"),
        o = n("28546"),
        l = n("401227"),
        u = n("872635"),
        d = n("185923"),
        _ = n("620948");

    function c(e) {
        var t;
        let {
            editorRef: n,
            options: c,
            channel: E
        } = e, I = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(), T = r.useCallback((e, t) => {
            let i = n.current;
            null != e && null != i && i.insertEmoji(e, t, !1), t && (0, o.closeExpressionPicker)()
        }, [n]);
        return null == I ? null : (0, i.jsxs)("div", {
            id: "slate-toolbar",
            className: _.staticToolbar,
            children: [(0, i.jsx)("div", {
                className: _.staticButtons,
                children: (0, i.jsx)(u.ToolbarButtons, {
                    editorRef: n,
                    options: c,
                    iconClassName: _.staticIcon,
                    dividerClassName: _.staticDivider
                })
            }), (0, i.jsx)(a.Popout, {
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(s.default, {
                        persistSearch: !0,
                        channel: E,
                        closePopout: t,
                        onSelectEmoji: (e, n) => {
                            T(e, n), n && t()
                        },
                        pickerIntention: d.EmojiIntention.COMMUNITY_CONTENT
                    })
                },
                position: "bottom",
                animation: a.Popout.Animation.NONE,
                align: "left",
                children: (e, t) => {
                    let {
                        isShown: n
                    } = t;
                    return (0, i.jsx)(l.default, {
                        ...e,
                        active: n,
                        className: _.emojiButton,
                        tabIndex: 0
                    })
                }
            })]
        })
    }
}