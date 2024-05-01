function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
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
            let r, a, s;
            if (!e.useSpriteSheet) return;
            let o = null != e.index ? e.index : 0;
            e.hasDiversity ? (r = n("36837")("./images/spritesheet-".concat(t, "-").concat(i, ".png").replace("./images/", "./")), a = S(i), s = I.EmojiSprites.DiversityPerRow) : (r = n("12302")("./images/spritesheet-emoji-".concat(i, ".png").replace("./images/", "./")), a = f(i), s = I.EmojiSprites.NonDiversityPerRow);
            let l = -o % s * i,
                u = -Math.floor(o / s) * i;
            return {
                backgroundImage: "url('".concat(r, "')"),
                backgroundPosition: "".concat(l, "px ").concat(u, "px"),
                backgroundSize: a,
                height: i,
                width: i
            }
        },
        A = r.memo(function(e) {
            let {
                emoji: t,
                size: n,
                surrogateCodePoint: a,
                allowAnimatedEmoji: o,
                "aria-label": l,
                isLocked: d
            } = e, f = (() => {
                if (!t.useSpriteSheet) {
                    var e;
                    let r = null == t.id ? t.url : E.default.getEmojiURL({
                        id: t.id,
                        animated: o && t.animated,
                        size: I.EMOJI_URL_BASE_SIZE
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
                    className: s()(T.emojiSpriteImage, {
                        [T.lockedEmoji]: d
                    }),
                    style: h(t, a, n),
                    children: (0, i.jsx)(u.HiddenVisually, {
                        children: l
                    })
                })
            })();
            return (0, i.jsxs)(r.Fragment, {
                children: [f, d ? (0, i.jsx)("div", {
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