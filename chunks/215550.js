function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("77078"),
        d = n("867805"),
        c = n("993244"),
        f = n("600785"),
        m = n("315102"),
        p = n("958706"),
        h = n("65063");
    let E = o.memoize(e => "".concat(e * p.EmojiSprites.NonDiversityPerRow, "px ").concat(e * Math.ceil(d.default.numNonDiversitySprites / p.EmojiSprites.NonDiversityPerRow), "px")),
        g = o.memoize(e => "".concat(e * p.EmojiSprites.DiversityPerRow, "px ").concat(e * Math.ceil(d.default.numDiversitySprites / p.EmojiSprites.DiversityPerRow), "px")),
        S = (e, t, l) => {
            let i, a, s;
            if (!e.useSpriteSheet) return;
            let r = null != e.index ? e.index : 0;
            e.hasDiversity ? (i = n("110126")("./images/spritesheet-".concat(t, "-").concat(l, ".png").replace("./images/", "./")), a = g(l), s = p.EmojiSprites.DiversityPerRow) : (i = n("996542")("./images/spritesheet-emoji-".concat(l, ".png").replace("./images/", "./")), a = E(l), s = p.EmojiSprites.NonDiversityPerRow);
            let o = -r % s * l,
                u = -Math.floor(r / s) * l;
            return {
                backgroundImage: "url('".concat(i, "')"),
                backgroundPosition: "".concat(o, "px ").concat(u, "px"),
                backgroundSize: a,
                height: l,
                width: l
            }
        },
        C = i.memo(function(e) {
            let {
                emoji: t,
                size: n,
                surrogateCodePoint: a,
                allowAnimatedEmoji: r,
                "aria-label": o,
                isLocked: d
            } = e, p = (() => {
                if (!t.useSpriteSheet) {
                    var e;
                    let i = null == t.id ? t.url : m.default.getEmojiURL({
                        id: t.id,
                        animated: r && t.animated,
                        size: 48
                    });
                    return null != i ? (0, l.jsx)(c.default, {
                        className: h.lockedEmoji,
                        "aria-label": o,
                        src: i,
                        size: n,
                        alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ""
                    }) : null
                }
                return (0, l.jsx)("div", {
                    className: s(h.emojiSpriteImage, {
                        [h.lockedEmoji]: d
                    }),
                    style: S(t, a, n),
                    children: (0, l.jsx)(u.HiddenVisually, {
                        children: o
                    })
                })
            })();
            return (0, l.jsxs)(i.Fragment, {
                children: [p, d ? (0, l.jsx)("div", {
                    className: h.emojiLockIconContainer,
                    children: (0, l.jsx)(f.default, {
                        width: 16,
                        height: 16,
                        className: h.emojiLockIcon
                    })
                }) : null]
            })
        });
    var T = C
}