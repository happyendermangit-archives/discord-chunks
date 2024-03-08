function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("77078"),
        d = n("867805"),
        c = n("993244"),
        f = n("600785"),
        p = n("315102"),
        m = n("958706"),
        h = n("65063");
    let x = o.memoize(e => "".concat(e * m.EmojiSprites.NonDiversityPerRow, "px ").concat(e * Math.ceil(d.default.numNonDiversitySprites / m.EmojiSprites.NonDiversityPerRow), "px")),
        E = o.memoize(e => "".concat(e * m.EmojiSprites.DiversityPerRow, "px ").concat(e * Math.ceil(d.default.numDiversitySprites / m.EmojiSprites.DiversityPerRow), "px")),
        y = (e, t, i) => {
            let l, a, s;
            if (!e.useSpriteSheet) return;
            let r = null != e.index ? e.index : 0;
            e.hasDiversity ? (l = n("110126")("./images/spritesheet-".concat(t, "-").concat(i, ".png").replace("./images/", "./")), a = E(i), s = m.EmojiSprites.DiversityPerRow) : (l = n("996542")("./images/spritesheet-emoji-".concat(i, ".png").replace("./images/", "./")), a = x(i), s = m.EmojiSprites.NonDiversityPerRow);
            let o = -r % s * i,
                u = -Math.floor(r / s) * i;
            return {
                backgroundImage: "url('".concat(l, "')"),
                backgroundPosition: "".concat(o, "px ").concat(u, "px"),
                backgroundSize: a,
                height: i,
                width: i
            }
        },
        g = l.memo(function(e) {
            let {
                emoji: t,
                size: n,
                surrogateCodePoint: a,
                allowAnimatedEmoji: r,
                "aria-label": o,
                isLocked: d
            } = e, m = (() => {
                if (!t.useSpriteSheet) {
                    var e;
                    let l = null == t.id ? t.url : p.default.getEmojiURL({
                        id: t.id,
                        animated: r && t.animated,
                        size: 48
                    });
                    return null != l ? (0, i.jsx)(c.default, {
                        className: h.lockedEmoji,
                        "aria-label": o,
                        src: l,
                        size: n,
                        alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ""
                    }) : null
                }
                return (0, i.jsx)("div", {
                    className: s(h.emojiSpriteImage, {
                        [h.lockedEmoji]: d
                    }),
                    style: y(t, a, n),
                    children: (0, i.jsx)(u.HiddenVisually, {
                        children: o
                    })
                })
            })();
            return (0, i.jsxs)(l.Fragment, {
                children: [m, d ? (0, i.jsx)("div", {
                    className: h.emojiLockIconContainer,
                    children: (0, i.jsx)(f.default, {
                        width: 16,
                        height: 16,
                        className: h.emojiLockIcon
                    })
                }) : null]
            })
        });
    var S = g
}