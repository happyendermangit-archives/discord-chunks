function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("70102");
    var i = n("103603"),
        l = n("695412"),
        a = class e {
            toDataUrl(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return e.toDataURL(t, n)
            }
            async exportCanvas(e, t) {
                let {
                    format: n,
                    fileType: a = "png",
                    quality: s = 1,
                    fileName: r
                } = t;
                if (n === l.DiscordCanvasExporterOutputFormats.Base64) return this.toDataUrl(e, a, s);
                if (n === l.DiscordCanvasExporterOutputFormats.Blob) {
                    let t = this.toDataUrl(e, a, s);
                    return (0, i.dataUrlToBlob)(t)
                }
                if (n === l.DiscordCanvasExporterOutputFormats.File) {
                    let t = this.toDataUrl(e, a, s);
                    return await (0, i.dataUrlToFile)(t, r, "image/png")
                }
                throw Error("DiscordCanvas: ".concat(n, " is not a valid export format."))
            }
        }
}