function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("65597"),
        a = n("151426"),
        s = n("77078"),
        r = n("430568"),
        o = n("206230"),
        u = n("10641"),
        d = n("917764"),
        c = n("538282"),
        f = n("562323"),
        m = n("305961"),
        p = n("227602"),
        h = n("471671"),
        E = n("945330"),
        g = n("95689"),
        C = n("423487"),
        S = n("773336"),
        T = n("13798"),
        I = n("235004"),
        v = n("49111"),
        _ = n("782340"),
        N = n("870477");

    function A(e) {
        let {
            soundboardSound: t,
            closePicker: A
        } = e, x = (0, c.useExpressionPickerStore)(e => e.searchQuery), y = (0, i.default)([I.default], () => null != t && I.default.isFavoriteSound(t.soundId)), O = (0, i.default)([m.default], () => m.default.getGuild(null == t ? void 0 : t.guildId)), R = (0, i.default)([o.default], () => o.default.useReducedMotion, []), M = (0, i.default)([h.default], () => h.default.isFocused()), L = (0, i.default)([p.default], () => p.default.getKeybindForAction(v.GlobalKeybindActions.SOUNDBOARD_HOLD));
        if (null != t && x.length > 0) return (0, l.jsx)(f.default, {
            graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, l.jsx)(r.default, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                className: N.emoji
            }) : (0, l.jsx)(g.default, {
                className: N.emoji
            }),
            graphicSecondary: null != O ? (0, l.jsx)(d.default, {
                guild: O,
                shouldAnimate: !R && M
            }) : null,
            titlePrimary: t.name,
            titleSecondary: null == O ? void 0 : O.name,
            isFavorite: y
        });
        let P = () => {
                A(), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("644926").then(n.bind(n, "644926"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            },
            b = (0, u.isDismissibleContentDismissed)(a.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
            j = null != L && (0, S.isWindows)() && !b ? _.default.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
                keybind: (0, T.toString)(L.shortcut, !0),
                openSettingsHook: (e, t) => (0, l.jsx)(s.Anchor, {
                    onClick: P,
                    children: e
                }, t)
            }) : null;
        return null == j ? null : (0, l.jsxs)("div", {
            className: N.keybindHint,
            children: [(0, l.jsx)(C.default, {
                className: N.warningIcon
            }), (0, l.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: N.keybindHintText,
                children: j
            }), (0, l.jsx)(s.Clickable, {
                className: N.closeButton,
                onClick: () => (0, u.markDismissibleContentAsDismissed)(a.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
                children: (0, l.jsx)(E.default, {
                    width: 16,
                    height: 16
                })
            })]
        })
    }
}