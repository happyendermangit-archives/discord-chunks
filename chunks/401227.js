function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMOJI_BUTTON_SPRING_CONFIG: function() {
            return I
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("718017"),
        l = n("481060"),
        u = n("130402"),
        d = n("153066"),
        _ = n("185923"),
        c = n("689938"),
        E = n("607771");
    let I = {
        tension: 800,
        friction: 24
    };
    t.default = function(e) {
        var t;
        let {
            tabIndex: n,
            className: s,
            renderButtonContents: T,
            active: f,
            onClick: S,
            "aria-controls": h,
            focusProps: A
        } = e, [m, N] = r.useState(!1), [p, O] = r.useState(50), R = m || f, C = (0, d.getClass)(E, "emojiButton", R ? "Hovered" : "Normal");
        let g = (t = p, {
                "--custom-emoji-sprite-size": "".concat(24, "px"),
                "--custom-emoji-sprite-row": Math.floor(t / 20),
                "--custom-emoji-sprite-col": t % 20
            }),
            L = r.useCallback(() => {
                if (!R) N(!0), O(Math.floor(77 * Math.random())), (0, u.initiateEmojiInteraction)(_.EmojiInteractionPoint.EmojiButtonMouseEntered)
            }, [R, N, O]),
            D = r.useCallback(() => {
                N(!1)
            }, [N]),
            v = r.useCallback(() => (0, u.initiateEmojiInteraction)(_.EmojiInteractionPoint.EmojiButtonFocused), []);
        return (0, i.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            tabIndex: n,
            className: a()(C, s),
            onMouseEnter: L,
            onMouseOver: L,
            onMouseLeave: D,
            onFocus: v,
            onClick: S,
            "aria-label": c.default.Messages.SELECT_EMOJI,
            "aria-controls": h,
            "aria-expanded": f,
            "aria-haspopup": "dialog",
            focusProps: A,
            children: null != T ? T() : (0, i.jsx)(o.Spring, {
                config: I,
                to: {
                    value: R ? 1 : 0
                },
                children: e => {
                    let {
                        value: t
                    } = e;
                    return (0, i.jsxs)(o.animated.div, {
                        className: E.spriteContainer,
                        style: {
                            ...g,
                            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
                        },
                        children: [(0, i.jsx)("div", {
                            className: a()(E.sprite, E.spriteColored, R ? E.active : E.inactive)
                        }), (0, i.jsx)("div", {
                            className: a()(E.sprite, E.spriteGreyscale, R ? E.inactive : E.active)
                        })]
                    })
                }
            })
        })
    }
}