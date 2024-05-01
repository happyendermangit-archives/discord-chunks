function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadPlatform: function() {
            return s
        },
        default: function() {
            return T
        },
        isResolvedUpload: function() {
            return I
        }
    });
    var i, r, s, a, o = n("836560"),
        l = n("392711"),
        u = n.n(l),
        d = n("153832"),
        _ = n("403182"),
        c = n("861990");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return void 0 !== e.isVideo && void 0 !== e.isImage
    }(i = s || (s = {}))[i.REACT_NATIVE = 0] = "REACT_NATIVE", i[i.WEB = 1] = "WEB", (r = a || (a = {}))[r.FILE_ATTACHMENT = 0] = "FILE_ATTACHMENT", r[r.IMAGE_PICKER = 1] = "IMAGE_PICKER";
    class T extends o.EventEmitter {
        cancel() {}
        resetState() {
            return this
        }
        constructor(e, t) {
            var n, i;
            if (super(), E(this, "id", void 0), E(this, "uniqueId", void 0), E(this, "filename", void 0), E(this, "item", void 0), E(this, "spoiler", void 0), E(this, "description", void 0), E(this, "classification", void 0), E(this, "isImage", void 0), E(this, "isVideo", void 0), E(this, "uploadedFilename", void 0), E(this, "showLargeMessageDialog", void 0), E(this, "mimeType", void 0), E(this, "origin", void 0), E(this, "durationSecs", void 0), E(this, "waveform", void 0), E(this, "isThumbnail", void 0), E(this, "isRemix", void 0), E(this, "clip", void 0), this.item = e, 0 === e.platform) {
                this.id = null !== (n = e.id) && void 0 !== n ? n : e.uri;
                let t = (0, c.getFile)({
                    uri: e.uri,
                    overrideFilename: e.filename,
                    overrideType: e.mimeType
                });
                this.filename = t.filename, this.isImage = t.isImage, this.isVideo = t.isVideo, this.mimeType = t.type, this.origin = e.origin, this.durationSecs = e.durationSecs, this.waveform = e.waveform, this.isRemix = e.isRemix
            } else this.id = null !== (i = e.id) && void 0 !== i ? i : u().uniqueId("upload"), this.classification = _.classifyFile(e.file), this.isImage = "image" === this.classification, this.isVideo = "video" === this.classification, this.filename = e.file.name, this.mimeType = e.file.type;
            this.isThumbnail = e.isThumbnail, this.clip = e.clip, this.uniqueId = (0, d.v4)(), this.showLargeMessageDialog = t, this.spoiler = !1, this.description = null
        }
    }
}