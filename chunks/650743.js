function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("399606"),
        s = n("524437"),
        a = n("481060"),
        o = n("596454"),
        l = n("607070"),
        u = n("605236"),
        d = n("880949"),
        _ = n("28546"),
        c = n("65029"),
        E = n("430824"),
        I = n("556296"),
        T = n("451478"),
        f = n("465670"),
        S = n("84017"),
        h = n("759231"),
        A = n("358085"),
        m = n("13140"),
        N = n("763296"),
        p = n("981631"),
        O = n("689938"),
        R = n("819216");

    function C(e) {
        let {
            soundboardSound: t,
            closePicker: C
        } = e, g = (0, _.useExpressionPickerStore)(e => e.searchQuery), L = (0, r.useStateFromStores)([N.default], () => null != t && N.default.isFavoriteSound(t.soundId)), D = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(null == t ? void 0 : t.guildId)), v = (0, r.useStateFromStores)([l.default], () => l.default.useReducedMotion, []), M = (0, r.useStateFromStores)([T.default], () => T.default.isFocused()), y = (0, r.useStateFromStores)([I.default], () => I.default.getKeybindForAction(p.GlobalKeybindActions.SOUNDBOARD_HOLD));
        if (null != t && g.length > 0) return (0, i.jsx)(c.default, {
            graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, i.jsx)(o.default, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                className: R.emoji
            }) : (0, i.jsx)(S.default, {
                className: R.emoji
            }),
            graphicSecondary: null != D ? (0, i.jsx)(d.default, {
                guild: D,
                shouldAnimate: !v && M
            }) : null,
            titlePrimary: t.name,
            titleSecondary: null == D ? void 0 : D.name,
            isFavorite: L
        });
        let P = () => {
                C(), (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("54626")]).then(n.bind(n, "355453"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            },
            U = (0, u.isDismissibleContentDismissed)(s.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
            b = null != y && (0, A.isWindows)() && !U ? O.default.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
                keybind: (0, m.toString)(y.shortcut, !0),
                openSettingsHook: (e, t) => (0, i.jsx)(a.Anchor, {
                    onClick: P,
                    children: e
                }, t)
            }) : null;
        return null == b ? null : (0, i.jsxs)("div", {
            className: R.keybindHint,
            children: [(0, i.jsx)(h.default, {
                className: R.warningIcon
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: R.keybindHintText,
                children: b
            }), (0, i.jsx)(a.Clickable, {
                className: R.closeButton,
                onClick: () => (0, u.markDismissibleContentAsDismissed)(s.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
                children: (0, i.jsx)(f.default, {
                    width: 16,
                    height: 16
                })
            })]
        })
    }
}