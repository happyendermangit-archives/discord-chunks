function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("512722"),
        r = n.n(i),
        a = n("921608"),
        s = n("693824");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = class e {
        getCanvas() {
            return this.canvas
        }
        setColor(e) {
            this.color = e
        }
        setFont(e) {
            var t, n, i, r, a;
            this.font.style = null !== (t = e.style) && void 0 !== t ? t : this.font.style, this.font.size = null !== (n = e.size) && void 0 !== n ? n : this.font.size, this.font.weight = null !== (i = e.weight) && void 0 !== i ? i : this.font.weight, this.font.family = null !== (r = e.family) && void 0 !== r ? r : this.font.family, this.font.truncate = null !== (a = e.truncate) && void 0 !== a ? a : this.font.truncate
        }
        getLoadedImage(e) {
            r()(null != this.assetMap, "DiscordCanvas: An AssetStore has not been initialized.");
            let t = this.assetMap.get(e);
            if (void 0 === t) {
                console.error("DiscordCanvas: AssetMap hasn't loaded ".concat(e, ".  Make sure to load it before trying to render."));
                return
            }
            return t
        }
        constructor(e, t) {
            o(this, "color", "black"), o(this, "font", {
                style: "normal",
                weight: 300,
                size: a.DEFAULT_FONT_SIZE,
                family: ["serif"],
                truncate: s.TextTruncationMethod.None
            }), o(this, "assetMap", void 0), o(this, "canvas", void 0), this.canvas = e, this.assetMap = t
        }
    }
}