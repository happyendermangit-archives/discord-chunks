function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("65597"),
        a = n("151426"),
        s = n("77078"),
        r = n("430568"),
        o = n("206230"),
        u = n("10641"),
        d = n("917764"),
        c = n("538282"),
        f = n("562323"),
        p = n("305961"),
        m = n("227602"),
        h = n("471671"),
        x = n("945330"),
        E = n("95689"),
        y = n("423487"),
        g = n("773336"),
        S = n("13798"),
        C = n("235004"),
        I = n("49111"),
        T = n("782340"),
        _ = n("870477");

    function v(e) {
        let {
            soundboardSound: t,
            closePicker: v
        } = e, N = (0, c.useExpressionPickerStore)(e => e.searchQuery), A = (0, l.default)([C.default], () => null != t && C.default.isFavoriteSound(t.soundId)), O = (0, l.default)([p.default], () => p.default.getGuild(null == t ? void 0 : t.guildId)), M = (0, l.default)([o.default], () => o.default.useReducedMotion, []), k = (0, l.default)([h.default], () => h.default.isFocused()), R = (0, l.default)([m.default], () => m.default.getKeybindForAction(I.GlobalKeybindActions.SOUNDBOARD_HOLD));
        if (null != t && N.length > 0) return (0, i.jsx)(f.default, {
            graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, i.jsx)(r.default, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                className: _.emoji
            }) : (0, i.jsx)(E.default, {
                className: _.emoji
            }),
            graphicSecondary: null != O ? (0, i.jsx)(d.default, {
                guild: O,
                shouldAnimate: !M && k
            }) : null,
            titlePrimary: t.name,
            titleSecondary: null == O ? void 0 : O.name,
            isFavorite: A
        });
        let L = () => {
                v(), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("644926").then(n.bind(n, "644926"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            },
            b = (0, u.isDismissibleContentDismissed)(a.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
            P = null != R && (0, g.isWindows)() && !b ? T.default.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
                keybind: (0, S.toString)(R.shortcut, !0),
                openSettingsHook: (e, t) => (0, i.jsx)(s.Anchor, {
                    onClick: L,
                    children: e
                }, t)
            }) : null;
        return null == P ? null : (0, i.jsxs)("div", {
            className: _.keybindHint,
            children: [(0, i.jsx)(y.default, {
                className: _.warningIcon
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: _.keybindHintText,
                children: P
            }), (0, i.jsx)(s.Clickable, {
                className: _.closeButton,
                onClick: () => (0, u.markDismissibleContentAsDismissed)(a.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
                children: (0, i.jsx)(x.default, {
                    width: 16,
                    height: 16
                })
            })]
        })
    }
}