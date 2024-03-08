function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("627445"),
        l = n.n(i),
        a = n("113149"),
        s = n("695412"),
        r = class e {
            getCanvas() {
                return this.canvas
            }
            setColor(e) {
                this.color = e
            }
            setFont(e) {
                var t, n, i, l, a;
                this.font.style = null !== (t = e.style) && void 0 !== t ? t : this.font.style, this.font.size = null !== (n = e.size) && void 0 !== n ? n : this.font.size, this.font.weight = null !== (i = e.weight) && void 0 !== i ? i : this.font.weight, this.font.family = null !== (l = e.family) && void 0 !== l ? l : this.font.family, this.font.truncate = null !== (a = e.truncate) && void 0 !== a ? a : this.font.truncate
            }
            getLoadedImage(e) {
                l(null != this.assetMap, "DiscordCanvas: An AssetStore has not been initialized.");
                let t = this.assetMap.get(e);
                if (void 0 === t) {
                    console.error("DiscordCanvas: AssetMap hasn't loaded ".concat(e, ".  Make sure to load it before trying to render."));
                    return
                }
                return t
            }
            constructor(e, t) {
                this.color = "black", this.font = {
                    style: "normal",
                    weight: 300,
                    size: a.DEFAULT_FONT_SIZE,
                    family: "serif",
                    truncate: s.TextTruncationMethod.None
                }, this.canvas = e, this.assetMap = t
            }
        }
}