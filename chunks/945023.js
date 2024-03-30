function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("784184"),
        l = n("27375"),
        c = n("93555"),
        f = n("451962"),
        d = n("299529"),
        _ = n("68735"),
        E = n("731153"),
        p = u().memoize(function(e) {
            return "".concat(e * _.EmojiSprites.NonDiversityPerRow, "px ").concat(e * Math.ceil(l.default.numNonDiversitySprites / _.EmojiSprites.NonDiversityPerRow), "px")
        }),
        m = u().memoize(function(e) {
            return "".concat(e * _.EmojiSprites.DiversityPerRow, "px ").concat(e * Math.ceil(l.default.numDiversitySprites / _.EmojiSprites.DiversityPerRow), "px")
        }),
        y = function(e, t, r) {
            if (e.useSpriteSheet) {
                var o, i, a, u = null != e.index ? e.index : 0;
                e.hasDiversity ? (o = n("973607")("./images/spritesheet-".concat(t, "-").concat(r, ".png").replace("./images/", "./")), i = m(r), a = _.EmojiSprites.DiversityPerRow) : (o = n("273735")("./images/spritesheet-emoji-".concat(r, ".png").replace("./images/", "./")), i = p(r), a = _.EmojiSprites.NonDiversityPerRow);
                var s = -u % a * r,
                    l = -Math.floor(u / a) * r;
                return {
                    backgroundImage: "url('".concat(o, "')"),
                    backgroundPosition: "".concat(s, "px ").concat(l, "px"),
                    backgroundSize: i,
                    height: r,
                    width: r
                }
            }
        },
        I = r.memo(function(e) {
            var t = e.emoji,
                n = e.size,
                o = e.surrogateCodePoint,
                a = e.allowAnimatedEmoji,
                u = e["aria-label"],
                l = e.isLocked,
                _ = function() {
                    if (!t.useSpriteSheet) {
                        var e, f, _, p, m = null == t.id ? t.url : d.default.getEmojiURL({
                            id: t.id,
                            animated: a && t.animated,
                            size: 48
                        });
                        return null != m ? r.createElement(c.default, {
                            className: E.lockedEmoji,
                            "aria-label": u,
                            src: m,
                            size: n,
                            alt: null !== (p = t.allNamesString) && void 0 !== p ? p : ""
                        }) : null
                    }
                    return r.createElement("div", {
                        className: i()(E.emojiSpriteImage, (e = {}, f = E.lockedEmoji, _ = l, f in e ? Object.defineProperty(e, f, {
                            value: _,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[f] = _, e)),
                        style: y(t, o, n)
                    }, r.createElement(s.HiddenVisually, null, u))
                }();
            return r.createElement(r.Fragment, null, _, l ? r.createElement("div", {
                className: E.emojiLockIconContainer
            }, r.createElement(f.default, {
                width: 16,
                height: 16,
                className: E.emojiLockIcon
            })) : null)
        });
    t.default = I
}