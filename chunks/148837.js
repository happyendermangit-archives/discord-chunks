function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("512722"),
        o = n.n(r),
        i = n("533963"),
        a = n("121669");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = function() {
        var e, t, n;

        function r(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), s(this, "color", "black"), s(this, "font", {
                style: "normal",
                weight: 300,
                size: i.DEFAULT_FONT_SIZE,
                family: "serif",
                truncate: a.TextTruncationMethod.None
            }), s(this, "assetMap", void 0), s(this, "canvas", void 0), this.canvas = e, this.assetMap = t
        }
        return e = r, t = [{
            key: "getCanvas",
            value: function() {
                return this.canvas
            }
        }, {
            key: "setColor",
            value: function(e) {
                this.color = e
            }
        }, {
            key: "setFont",
            value: function(e) {
                var t, n, r, o, i;
                this.font.style = null !== (t = e.style) && void 0 !== t ? t : this.font.style, this.font.size = null !== (n = e.size) && void 0 !== n ? n : this.font.size, this.font.weight = null !== (r = e.weight) && void 0 !== r ? r : this.font.weight, this.font.family = null !== (o = e.family) && void 0 !== o ? o : this.font.family, this.font.truncate = null !== (i = e.truncate) && void 0 !== i ? i : this.font.truncate
            }
        }, {
            key: "getLoadedImage",
            value: function(e) {
                o()(null != this.assetMap, "DiscordCanvas: An AssetStore has not been initialized.");
                var t = this.assetMap.get(e);
                if (void 0 === t) {
                    console.error("DiscordCanvas: AssetMap hasn't loaded ".concat(e, ".  Make sure to load it before trying to render."));
                    return
                }
                return t
            }
        }], u(e.prototype, t), n && u(e, n), r
    }();
    t.default = l
}