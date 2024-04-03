function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("141795"),
        r = n("476326"),
        s = n("956664"),
        a = n("693824");
    t.default = class e {
        toDataUrl(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return e.toDataURL(t, n)
        }
        async exportCanvas(e, t) {
            let {
                format: n,
                fileType: o = "png",
                quality: l = 1,
                fileName: u
            } = t;
            if (n === a.DiscordCanvasExporterOutputFormats.Base64) return this.toDataUrl(e, o, l);
            if (n === a.DiscordCanvasExporterOutputFormats.Blob) {
                let t = this.toDataUrl(e, o, l);
                return (0, s.dataUrlToBlob)(t)
            }
            if (n === a.DiscordCanvasExporterOutputFormats.File) {
                let t = this.toDataUrl(e, o, l);
                return await (0, s.dataUrlToFile)(t, u, "image/png")
            }
            if (n === a.DiscordCanvasExporterOutputFormats.CloudUpload) {
                let {
                    channelId: n
                } = t, a = this.toDataUrl(e, o, l), d = await (0, s.dataUrlToFile)(a, u, "image/png");
                return new i.CloudUpload({
                    file: d,
                    platform: r.UploadPlatform.WEB,
                    isThumbnail: !1
                }, n)
            }
            throw Error("DiscordCanvas: ".concat(n, " is not a valid export format."))
        }
    }
}