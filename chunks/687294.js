function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        },
        stageAttachmentFiles: function() {
            return I
        }
    }), n("724458"), n("47120"), n("411104");
    var i = n("259443"),
        r = n("510990"),
        s = n("141795"),
        a = n("983544"),
        o = n("596956"),
        l = n("865275"),
        u = n("981631"),
        d = n("959517"),
        _ = n("689938");
    let c = new i.Logger("CloudUploaderBase.tsx");
    class E extends l.default {
        _fileSize() {
            return this.files.reduce((e, t) => {
                var n;
                return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
            }, 0)
        }
        async compressAndCheckFileSize() {
            var e, t;
            let n = (0, a.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
            return this.files.length > n.getMaxAttachmentsCount() ? (c.log("Too many attachments for ".concat(this.id)), this._handleError({
                code: u.AbortCodes.TOO_MANY_ATTACHMENTS
            }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                code: u.AbortCodes.ENTITY_TOO_LARGE,
                reason: {
                    type: d.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                }
            }), !1)
        }
        _filesTooLarge() {
            return this.files.some(e => e.error === u.AbortCodes.ENTITY_TOO_LARGE)
        }
        setUploadingTextForUI() {
            let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : _.default.Messages.UPLOADING_FILES.format({
                    count: this.files.length
                }),
                t = this.files.some(e => e.isImage),
                n = this.files.some(e => e.isVideo),
                i = this._fileSize();
            c.log("setUploadingTextForUI - total content: ".concat(i, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
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
            let e = this._fileSize();
            return {
                loaded: this.files.reduce((e, t) => {
                    var n;
                    return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                }, 0),
                total: e
            }
        }
        _recomputeProgressByFile() {
            let e = {};
            return this.files.forEach(t => {
                e[t.id] = (0, o.calculateProgress)(t.loaded, t.currentSize)
            }), e
        }
        cancel() {
            c.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
        }
        async cancelItem(e) {
            c.log("Cancel called for ".concat(this.id, " for item ").concat(e));
            let t = this.files.find(t => t.id === e);
            if (null == t || t.status === s.CloudUploadStatus.CANCELED) return;
            let n = this.files.indexOf(t);
            this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                ...this._file,
                items: this.files
            }, await (0, r.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
        }
        failed() {
            return this.files.some(e => e.status === s.CloudUploadStatus.ERROR)
        }
        _remainingUploadCount() {
            let e = this.files;
            return e.length - e.filter(e => e.status === s.CloudUploadStatus.COMPLETED).length
        }
        clear() {
            this.cancel(), this.files = []
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, i = [], (n = "files") in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    async function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = e.map(e => new Promise((i, r) => {
                switch (e.status) {
                    case s.CloudUploadStatus.NOT_STARTED:
                        e.upload();
                        break;
                    case s.CloudUploadStatus.COMPLETED:
                        i("complete");
                        break;
                    case s.CloudUploadStatus.ERROR:
                        t && e.error !== u.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : r(Error("File failed to upload"));
                        break;
                    case s.CloudUploadStatus.CANCELED:
                        r(Error("Upload is canceled"))
                }
                e.on("complete", () => {
                    i("complete")
                }), e.on("error", () => {
                    r(Error("File ".concat(e.id, " failed to upload")))
                }), e.on("progress", (e, t) => {
                    null == n || n(e, t)
                })
            }));
        await Promise.all(i)
    }
}