function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMOJI_BUTTON_SPRING_CONFIG: function() {
            return m
        },
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("907002"),
        o = n("77078"),
        u = n("558986"),
        d = n("474293"),
        c = n("958706"),
        f = n("782340"),
        p = n("321573");
    let m = {
        tension: 800,
        friction: 24
    };
    var h = function(e) {
        var t;
        let {
            tabIndex: n,
            className: a,
            renderButtonContents: h,
            active: x,
            onClick: E,
            "aria-controls": y,
            focusProps: g
        } = e, [S, C] = l.useState(!1), [I, T] = l.useState(50), _ = S || x, v = (0, d.getClass)(p, "emojiButton", _ ? "Hovered" : "Normal");
        let N = (t = I, {
                "--custom-emoji-sprite-size": "".concat(24, "px"),
                "--custom-emoji-sprite-row": Math.floor(t / 20),
                "--custom-emoji-sprite-col": t % 20
            }),
            A = l.useCallback(() => {
                if (!_) C(!0), T(Math.floor(77 * Math.random())), (0, u.initiateEmojiInteraction)(c.EmojiInteractionPoint.EmojiButtonMouseEntered)
            }, [_, C, T]),
            O = l.useCallback(() => {
                C(!1)
            }, [C]),
            k = l.useCallback(() => (0, u.initiateEmojiInteraction)(c.EmojiInteractionPoint.EmojiButtonFocused), []);
        return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            tabIndex: n,
            className: s(v, a),
            onMouseEnter: A,
            onMouseOver: A,
            onMouseLeave: O,
            onFocus: k,
            onClick: E,
            "aria-label": f.default.Messages.SELECT_EMOJI,
            "aria-controls": y,
            "aria-expanded": x,
            "aria-haspopup": "dialog",
            focusProps: g,
            children: null != h ? h() : (0, i.jsx)(r.Spring, {
                config: m,
                to: {
                    value: _ ? 1 : 0
                },
                children: e => {
                    let {
                        value: t
                    } = e;
                    return (0, i.jsxs)(r.animated.div, {
                        className: p.spriteContainer,
                        style: {
                            ...N,
                            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
                        },
                        children: [(0, i.jsx)("div", {
                            className: s(p.sprite, p.spriteColored, _ ? p.active : p.inactive)
                        }), (0, i.jsx)("div", {
                            className: s(p.sprite, p.spriteGreyscale, _ ? p.inactive : p.active)
                        })]
                    })
                }
            })
        })
    }
}