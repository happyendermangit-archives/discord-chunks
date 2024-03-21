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
        r = n("146606"),
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
        } = e, [S, C] = l.useState(!1), [T, _] = l.useState(50), I = S || x, v = (0, d.getClass)(p, "emojiButton", I ? "Hovered" : "Normal");
        let N = (t = T, {
                "--custom-emoji-sprite-size": "".concat(24, "px"),
                "--custom-emoji-sprite-row": Math.floor(t / 20),
                "--custom-emoji-sprite-col": t % 20
            }),
            A = l.useCallback(() => {
                if (!I) C(!0), _(Math.floor(77 * Math.random())), (0, u.initiateEmojiInteraction)(c.EmojiInteractionPoint.EmojiButtonMouseEntered)
            }, [I, C, _]),
            O = l.useCallback(() => {
                C(!1)
            }, [C]),
            R = l.useCallback(() => (0, u.initiateEmojiInteraction)(c.EmojiInteractionPoint.EmojiButtonFocused), []);
        return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            tabIndex: n,
            className: s(v, a),
            onMouseEnter: A,
            onMouseOver: A,
            onMouseLeave: O,
            onFocus: R,
            onClick: E,
            "aria-label": f.default.Messages.SELECT_EMOJI,
            "aria-controls": y,
            "aria-expanded": x,
            "aria-haspopup": "dialog",
            focusProps: g,
            children: null != h ? h() : (0, i.jsx)(r.Spring, {
                config: m,
                to: {
                    value: I ? 1 : 0
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
                            className: s(p.sprite, p.spriteColored, I ? p.active : p.inactive)
                        }), (0, i.jsx)("div", {
                            className: s(p.sprite, p.spriteGreyscale, I ? p.inactive : p.active)
                        })]
                    })
                }
            })
        })
    }
}