function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("956664"),
        r = n("693824");
    t.default = class e {
        toDataUrl(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return e.toDataURL(t, n)
        }
        async exportCanvas(e, t) {
            let {
                format: n,
                fileType: s = "png",
                quality: a = 1,
                fileName: o
            } = t;
            if (n === r.DiscordCanvasExporterOutputFormats.Base64) return this.toDataUrl(e, s, a);
            if (n === r.DiscordCanvasExporterOutputFormats.Blob) {
                let t = this.toDataUrl(e, s, a);
                return (0, i.dataUrlToBlob)(t)
            }
            if (n === r.DiscordCanvasExporterOutputFormats.File) {
                let t = this.toDataUrl(e, s, a);
                return await (0, i.dataUrlToFile)(t, o, "image/png")
            }
            throw Error("DiscordCanvas: ".concat(n, " is not a valid export format."))
        }
    }
}