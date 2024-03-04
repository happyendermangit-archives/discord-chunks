function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadPlatform: function() {
            return r
        },
        default: function() {
            return o
        }
    });
    var i, s, r, a, o, l = n("44170"),
        u = n("917351"),
        d = n.n(u),
        c = n("748820"),
        f = n("254490"),
        _ = n("980134");
    (i = r || (r = {}))[i.REACT_NATIVE = 0] = "REACT_NATIVE", i[i.WEB = 1] = "WEB", (s = a || (a = {}))[s.FILE_ATTACHMENT = 0] = "FILE_ATTACHMENT", s[s.IMAGE_PICKER = 1] = "IMAGE_PICKER", o = class extends l.EventEmitter {
        cancel() {}
        resetState() {
            return this
        }
        constructor(e, t) {
            var n, i;
            if (super(), this.item = e, 0 === e.platform) {
                this.id = null !== (n = e.id) && void 0 !== n ? n : e.uri;
                let t = (0, _.getFile)({
                    uri: e.uri,
                    overrideFilename: e.filename,
                    overrideType: e.mimeType
                });
                this.filename = t.filename, this.isImage = t.isImage, this.isVideo = t.isVideo, this.mimeType = t.type, this.origin = e.origin, this.durationSecs = e.durationSecs, this.waveform = e.waveform, this.isRemix = e.isRemix
            } else this.id = null !== (i = e.id) && void 0 !== i ? i : d.uniqueId("upload"), this.classification = f.classifyFile(e.file), this.isImage = "image" === this.classification, this.isVideo = "video" === this.classification, this.filename = e.file.name, this.mimeType = e.file.type;
            this.isThumbnail = e.isThumbnail, this.clip = e.clip, this.uniqueId = (0, c.v4)(), this.showLargeMessageDialog = t, this.spoiler = !1, this.description = null
        }
    }
}