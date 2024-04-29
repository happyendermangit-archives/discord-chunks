function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("481060"),
        d = n("633302"),
        _ = n("334920"),
        c = n("242411"),
        E = n("768581"),
        I = n("185923"),
        T = n("147981");
    let f = l().memoize(e => "".concat(e * I.EmojiSprites.NonDiversityPerRow, "px ").concat(e * Math.ceil(d.default.numNonDiversitySprites / I.EmojiSprites.NonDiversityPerRow), "px")),
        S = l().memoize(e => "".concat(e * I.EmojiSprites.DiversityPerRow, "px ").concat(e * Math.ceil(d.default.numDiversitySprites / I.EmojiSprites.DiversityPerRow), "px")),
        h = (e, t, i) => {
            let r, s, a;
            if (!e.useSpriteSheet) return;
            let o = null != e.index ? e.index : 0;
            e.hasDiversity ? (r = n("36837")("./images/spritesheet-".concat(t, "-").concat(i, ".png").replace("./images/", "./")), s = S(i), a = I.EmojiSprites.DiversityPerRow) : (r = n("12302")("./images/spritesheet-emoji-".concat(i, ".png").replace("./images/", "./")), s = f(i), a = I.EmojiSprites.NonDiversityPerRow);
            let l = -o % a * i,
                u = -Math.floor(o / a) * i;
            return {
                backgroundImage: "url('".concat(r, "')"),
                backgroundPosition: "".concat(l, "px ").concat(u, "px"),
                backgroundSize: s,
                height: i,
                width: i
            }
        },
        A = r.memo(function(e) {
            let {
                emoji: t,
                size: n,
                surrogateCodePoint: s,
                allowAnimatedEmoji: o,
                "aria-label": l,
                isLocked: d
            } = e, I = (() => {
                if (!t.useSpriteSheet) {
                    var e;
                    let r = null == t.id ? t.url : E.default.getEmojiURL({
                        id: t.id,
                        animated: o && t.animated,
                        size: 48
                    });
                    return null != r ? (0, i.jsx)(_.default, {
                        className: T.lockedEmoji,
                        "aria-label": l,
                        src: r,
                        size: n,
                        alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ""
                    }) : null
                }
                return (0, i.jsx)("div", {
                    className: a()(T.emojiSpriteImage, {
                        [T.lockedEmoji]: d
                    }),
                    style: h(t, s, n),
                    children: (0, i.jsx)(u.HiddenVisually, {
                        children: l
                    })
                })
            })();
            return (0, i.jsxs)(r.Fragment, {
                children: [I, d ? (0, i.jsx)("div", {
                    className: T.emojiLockIconContainer,
                    children: (0, i.jsx)(c.default, {
                        width: 16,
                        height: 16,
                        className: T.emojiLockIcon
                    })
                }) : null]
            })
        });
    t.default = A
}