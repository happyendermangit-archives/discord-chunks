function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        stageAttachmentFiles: function() {
            return m
        },
        default: function() {
            return i
        }
    }), n("808653"), n("222007"), n("70102");
    var i, l = n("811022"),
        a = n("994440"),
        o = n("282928"),
        s = n("142852"),
        r = n("402752"),
        u = n("572868"),
        d = n("49111"),
        c = n("894488"),
        p = n("782340");
    let f = new l.Logger("CloudUploaderBase.tsx");
    async function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = e.map(e => new Promise((i, l) => {
                switch (e.status) {
                    case o.CloudUploadStatus.NOT_STARTED:
                        e.upload();
                        break;
                    case o.CloudUploadStatus.COMPLETED:
                        i("complete");
                        break;
                    case o.CloudUploadStatus.ERROR:
                        t && e.error !== d.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : l(Error("File failed to upload"));
                        break;
                    case o.CloudUploadStatus.CANCELED:
                        l(Error("Upload is canceled"))
                }
                e.on("complete", () => {
                    i("complete")
                }), e.on("error", () => {
                    l(Error("File ".concat(e.id, " failed to upload")))
                }), e.on("progress", (e, t) => {
                    null == n || n(e, t)
                })
            }));
        await Promise.all(i)
    }
    i = class extends u.default {
        _fileSize() {
            return this.files.reduce((e, t) => {
                var n;
                return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
            }, 0)
        }
        async compressAndCheckFileSize() {
            var e, t;
            let n = (0, s.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
            return this.files.length > n.getMaxAttachmentsCount() ? (f.log("Too many attachments for ".concat(this.id)), this._handleError({
                code: d.AbortCodes.TOO_MANY_ATTACHMENTS
            }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                code: d.AbortCodes.ENTITY_TOO_LARGE,
                reason: {
                    type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                }
            }), !1)
        }
        _filesTooLarge() {
            return this.files.some(e => e.error === d.AbortCodes.ENTITY_TOO_LARGE)
        }
        setUploadingTextForUI() {
            let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : p.default.Messages.UPLOADING_FILES.format({
                    count: this.files.length
                }),
                t = this.files.some(e => e.isImage),
                n = this.files.some(e => e.isVideo),
                i = this._fileSize();
            f.log("setUploadingTextForUI - total content: ".concat(i, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                ...this._file,
                totalPostCompressionSize: i,
                currentSize: i,
                name: e,
                hasVideo: n,
                hasImage: t,
                attachmentsCount: this.files.length,
                items: this.files
            }
        }
        _recomputeProgress() {
            let {
                loaded: e,
                total: t
            } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
            this._handleProgress(e, t, n)
        }
        _recomputeProgressTotal() {
            let e = this._fileSize(),
                t = this.files.reduce((e, t) => {
                    var n;
                    return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                }, 0);
            return {
                loaded: t,
                total: e
            }
        }
        _recomputeProgressByFile() {
            let e = {};
            return this.files.forEach(t => {
                e[t.id] = (0, r.calculateProgress)(t.loaded, t.currentSize)
            }), e
        }
        cancel() {
            f.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
        }
        async cancelItem(e) {
            f.log("Cancel called for ".concat(this.id, " for item ").concat(e));
            let t = this.files.find(t => t.id === e);
            if (null == t || t.status === o.CloudUploadStatus.CANCELED) return;
            let n = this.files.indexOf(t);
            this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                ...this._file,
                items: this.files
            }, await (0, a.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
        }
        failed() {
            return this.files.some(e => e.status === o.CloudUploadStatus.ERROR)
        }
        _remainingUploadCount() {
            let e = this.files;
            return e.length - e.filter(e => e.status === o.CloudUploadStatus.COMPLETED).length
        }
        clear() {
            this.cancel(), this.files = []
        }
        constructor(...e) {
            super(...e), this.files = []
        }
    }
}