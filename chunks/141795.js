function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CloudUpload: function() {
            return g
        },
        CloudUploadStatus: function() {
            return i
        }
    }), n("47120"), n("411104");
    var i, r, s = n("392711"),
        a = n.n(s),
        o = n("261470"),
        l = n("544891"),
        u = n("710845"),
        d = n("432877"),
        _ = n("549464"),
        c = n("740492"),
        E = n("866960"),
        I = n("626135"),
        T = n("510990"),
        f = n("70956"),
        S = n("960048"),
        h = n("861990"),
        A = n("476326"),
        m = n("983544"),
        N = n("981631");

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let O = new u.default("CloudUpload.tsx"),
        R = n("224497").default;
    (r = i || (i = {})).NOT_STARTED = "NOT_STARTED", r.STARTED = "STARTED", r.UPLOADING = "UPLOADING", r.ERROR = "ERROR", r.COMPLETED = "COMPLETED", r.CANCELED = "CANCELED";
    class C {
        constructor() {
            p(this, "numChunks", void 0), p(this, "totalRequestCount", void 0), p(this, "timing", {}), p(this, "compressAndExtractDisabled", void 0), p(this, "fileAlreadyPrepped", void 0), p(this, "imageCompressionQuality", void 0), p(this, "videoCompressionQuality", void 0), p(this, "convertedMimeType", void 0)
        }
    }
    class g extends A.default {
        static fromJson(e) {
            let {
                item: t,
                channelId: n,
                showLargeMessageDialog: i,
                reactNativeFileIndex: r
            } = e, s = new g(t, n, i, r);
            return "COMPLETED" !== s.status && (s.status = "NOT_STARTED"), Object.entries(e).forEach(e => {
                let [t, n] = e;
                !t.startsWith("_") && (s[t] = n)
            }), s
        }
        retryOpts() {
            return this.item.platform === A.UploadPlatform.REACT_NATIVE ? {
                timeout: 1 * f.default.Millis.HOUR,
                backoff: new o.default(.5 * f.default.Millis.SECOND, 30 * f.default.Millis.MINUTE),
                retries: 12
            } : {
                timeout: 1 * f.default.Millis.HOUR,
                retries: 12,
                backoff: new o.default
            }
        }
        async uploadFileToCloudAsChunks(e) {
            if (null == this.responseUrl || "" === this.responseUrl) throw Error("_uploadFileToCloudAsChunks - responseUrl is not set");
            let {
                contentType: t,
                fileSize: n,
                bufferedFileData: i
            } = await this.prepareChunkUploadItem(), r = Math.ceil(n / e);
            this.uploadAnalytics.numChunks = r, this.uploadAnalytics.totalRequestCount = 0;
            for (let s = 0; s < r; s++) {
                O.info("Uploading chunk ".concat(s + 1, " of ").concat(r, " for file id ").concat(this.id));
                let a = s * e,
                    o = Math.min(a + e, n),
                    l = await this.getChunk(a, o, i);
                try {
                    await this.uploadChunk({
                        chunk: l,
                        start: a,
                        end: o,
                        totalSize: n,
                        sessionUrl: this.responseUrl,
                        contentType: t
                    })
                } catch (e) {
                    throw O.error("Error uploading chunk ".concat(s + 1, " for file id ").concat(this.id, ": ").concat(e)), e
                }
            }
            O.log("Upload complete for file id ".concat(this.id))
        }
        async prepareChunkUploadItem() {
            let e, t, n;
            if (this.item.platform === A.UploadPlatform.REACT_NATIVE) {
                let i = this.item;
                if (e = null != i.mimeType && "" !== i.mimeType ? i.mimeType : "application/octet-stream", null == i.size || 0 === i.size || isNaN(i.size)) try {
                    t = await (0, h.getFileContentLength)(i.uri)
                } catch (e) {
                    O.warn("Failed to peek content length for file id ".concat(this.id, ", reading whole file instead: ").concat(e)), t = (n = await (0, h.getFileData)(i.uri)).size
                } else t = i.size
            } else e = "application/octet-stream", t = this.item.file.size;
            return {
                contentType: e,
                fileSize: t,
                bufferedFileData: n
            }
        }
        async getChunk(e, t, n) {
            return this.item.platform !== A.UploadPlatform.REACT_NATIVE ? this.item.file.slice(e, t) : null != n ? n.slice(e, t) : await (0, h.getFileChunk)(this.item.uri, e, t)
        }
        async uploadChunk(e) {
            let t = {
                "Content-Type": e.contentType,
                "Content-Range": "bytes ".concat(e.start, "-").concat(e.end - 1, "/").concat(e.totalSize)
            };
            for (let i = 1; i <= 3; i++) {
                var n;
                this.uploadAnalytics.totalRequestCount = (null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 0) + 1, O.log("Attempt ".concat(i, " for file id ").concat(this.id, " : Uploading chunk ").concat(e.start, "-").concat(e.end - 1, " of ").concat(e.totalSize, " bytes"));
                let r = a().throttle(t => {
                    let n = e.start + t.loaded;
                    this.emit("progress", n, e.totalSize, n - this.loaded), this.loaded = n
                }, 50);
                try {
                    if ((await l.HTTP.put({
                            url: e.sessionUrl,
                            body: e.chunk,
                            headers: t,
                            signal: this._abortController.signal,
                            onRequestProgress: r,
                            ...this.retryOpts()
                        })).ok) return
                } catch (t) {
                    if (!this.RESUME_INCOMPLETE_CODES.includes(t.status)) throw t;
                    if (this.isUnsuccessfulChunkUpload(t, e.end - 1)) {
                        O.error("Incomplete chunk upload for file id ".concat(this.id, ": ").concat(t.status));
                        continue
                    }
                    return
                }
            }
            throw Error("Failed to upload chunk")
        }
        isUnsuccessfulChunkUpload(e, t) {
            if (null == e.headers.range || "" === e.headers.range) return !0;
            let n = e.headers.range.match(/bytes=(\d+)-(\d+)/);
            return null !== n && parseInt(n[2], 10) !== t
        }
        uploadFileToCloud() {
            let e, t;
            if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
            O.log("Uploading ".concat(this.id)), this.item.platform === A.UploadPlatform.REACT_NATIVE ? t = null != (e = {
                type: this.item.mimeType,
                uri: this.item.uri,
                name: this.item.filename
            }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
            let n = a().throttle(e => {
                    this.emit("progress", e.loaded, e.total, e.loaded - this.loaded), this.loaded = e.loaded
                }, 50),
                i = {
                    "Content-Type": t
                };
            return l.HTTP.put({
                url: this.responseUrl,
                body: e,
                headers: i,
                signal: this._abortController.signal,
                onRequestProgress: n,
                ...this.retryOpts()
            })
        }
        async getSize() {
            var e;
            return null !== (e = this.currentSize) && void 0 !== e ? e : 0
        }
        async trackTime(e, t) {
            let n = performance.now();
            try {
                return await t()
            } finally {
                this.uploadAnalytics.timing[e] = performance.now() - n
            }
        }
        async upload() {
            var e, t, n;
            if ("COMPLETED" === this.status) return;
            if (this.setStatus("STARTED"), this.startTime = performance.now(), this.trackUploadStart(), "CANCELED" === this.status) {
                this.handleComplete(this.id);
                return
            }
            let i = await R.getUploadPayload(this),
                r = (0, m.getUploadTarget)(this.item.target);
            if (null == i.filename || "" === i.filename || 0 === this.currentSize) {
                O.error("File does not have a filename or size is 0.", JSON.stringify(i)), this.handleError(N.AbortCodes.INVALID_FILE_ASSET);
                return
            }
            if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > r.getMaxFileSize(this.channelId)) {
                this.handleError(N.AbortCodes.ENTITY_TOO_LARGE);
                return
            }
            if (d.default.get("upload_fail_50") && .5 > Math.random()) {
                setTimeout(() => {
                    this.handleError(500)
                }, 1e3);
                return
            }
            try {
                O.log("Requesting upload url for ".concat(this.id));
                let e = await this.trackTime("getUploadUrlTimeMs", async () => await l.HTTP.post({
                    url: r.getCreateAttachmentURL(this.channelId),
                    body: {
                        files: [i]
                    },
                    ...this.retryOpts()
                }));
                this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename)
            } catch (i) {
                let e = null !== (n = null == i ? void 0 : null === (t = i.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : i.status;
                e !== N.AbortCodes.ENTITY_TOO_LARGE && (O.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(i.body), " for ").concat(this.id)), S.default.captureException(i)), this.handleError(e);
                return
            }
            try {
                let e;
                let t = _.default.getCurrentConfig({
                    location: "CloudUpload"
                }, {
                    autoTrackExposure: !0
                });
                e = t.enabled && t.chunkSize > 0 ? await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloudAsChunks(t.chunkSize)) : await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud()), this.trackUploadFinished("COMPLETED"), this.handleComplete(e)
            } catch (e) {
                "CANCELED" === this.status ? this.handleComplete(e) : (O.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
            }
        }
        async reactNativeCompressAndExtractData() {
            var e;
            if (!(0, m.getUploadTarget)(this.item.target).shouldReactNativeCompressUploads) {
                this.uploadAnalytics.compressAndExtractDisabled = !0, O.log("reactNativeCompressAndExtractData() disabled by upload target");
                return
            }
            if (!0 === this.reactNativeFilePrepped) {
                this.uploadAnalytics.fileAlreadyPrepped = !0, O.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id));
                return
            }
            O.log("Starting compression/conversion for ".concat(this.id));
            let t = await this.trackTime("compressTimeMs", async () => {
                var e;
                return await (0, T.getAttachmentFile)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0)
            });
            if (null == t || null == t.file) return;
            let n = t.uri,
                i = t.file.name,
                r = t.file.type;
            if ((0, A.isResolvedUpload)(t.file) && (this.uploadAnalytics.imageCompressionQuality = t.file.imageCompressionQuality, this.uploadAnalytics.videoCompressionQuality = t.file.videoCompressionQuality, this.uploadAnalytics.convertedMimeType = t.file.type), this.filename = i, null == i || null == n || null == r) throw O.error("Insufficient file data: ".concat({
                filename: i,
                uri: n,
                mimeType: r
            }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
                filename: i,
                uri: n,
                mimeType: r
            }));
            let s = null !== (e = t.fileSize) && void 0 !== e ? e : (await (0, h.getFileData)(n)).size;
            if (this.postCompressionSize = s, this.currentSize = s, null == s) throw O.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
            O.log("Completed compression and conversion. Output size=".concat(s, " bytes; filename=").concat(i, " for ").concat(this.id));
            this.item = {
                ...this.item,
                uri: n,
                filename: i,
                mimeType: r
            }, this.reactNativeFilePrepped = !0
        }
        handleError(e) {
            this.setStatus("ERROR"), this.error = e, this.trackUploadFinished("ERROR");
            try {
                this.emit("error", e)
            } catch {}
            this.removeAllListeners()
        }
        handleComplete(e) {
            this.setStatus("COMPLETED"), O.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
        }
        cancel() {
            O.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), this.trackUploadFinished("CANCELED"), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
        }
        resetState() {
            return this.status = "NOT_STARTED", this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this.startTime = void 0, this.uploadAnalytics = new C, this._abortController = new AbortController, super.resetState()
        }
        async delete() {
            if (null == this.uploadedFilename) return;
            let e = (0, m.getUploadTarget)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
            try {
                await l.HTTP.del(e)
            } catch {}
        }
        setResponseUrl(e) {
            this.responseUrl = e
        }
        setStatus(e) {
            this.status = e
        }
        setFilename(e) {
            this.filename = e
        }
        setUploadedFilename(e) {
            this.uploadedFilename = e
        }
        trackUploadStart() {
            var e;
            I.default.track(N.AnalyticEvents.ATTACHMENT_UPLOAD_STARTED, {
                file_size: this.currentSize,
                mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : "unknown",
                video_upload_quality: c.default.videoUploadQuality,
                data_saving_mode: c.default.dataSavingMode,
                low_quality_image_mode: c.default.lowQualityImageMode,
                connection_type: E.default.getType(),
                effective_connection_speed: E.default.getEffectiveConnectionSpeed(),
                service_provider: E.default.getServiceProvider()
            })
        }
        trackUploadFinished(e) {
            var t, n, i, r, s;
            let a = null != this.startTime ? performance.now() - this.startTime : -1;
            I.default.track(N.AnalyticEvents.ATTACHMENT_UPLOAD_FINISHED, {
                duration_ms: a,
                file_size: this.currentSize,
                pre_compression_file_size: this.preCompressionSize,
                final_state: e,
                mime_type: null !== (t = this.mimeType) && void 0 !== t ? t : "unknown",
                num_chunks: this.uploadAnalytics.numChunks,
                num_upload_attempts: null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 1,
                error_code: this.error,
                video_upload_quality: c.default.videoUploadQuality,
                data_saving_mode: c.default.dataSavingMode,
                low_quality_image_mode: c.default.lowQualityImageMode,
                compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
                get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
                upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
                converted_mime_type: null !== (i = this.uploadAnalytics.convertedMimeType) && void 0 !== i ? i : "unknown",
                image_compression_quality: null !== (r = this.uploadAnalytics.imageCompressionQuality) && void 0 !== r ? r : 0,
                video_compression_quality: null !== (s = this.uploadAnalytics.videoCompressionQuality) && void 0 !== s ? s : "unknown",
                was_converted: this.mimeType !== this.uploadAnalytics.convertedMimeType,
                was_compressed: this.currentSize < this.preCompressionSize,
                connection_type: E.default.getType(),
                effective_connection_speed: E.default.getEffectiveConnectionSpeed(),
                service_provider: E.default.getServiceProvider()
            })
        }
        constructor(e, t, n, i) {
            var r, s, a, o;
            super(e, n), p(this, "RESUME_INCOMPLETE_CODES", [308]), p(this, "status", "NOT_STARTED"), p(this, "channelId", void 0), p(this, "responseUrl", void 0), p(this, "currentSize", void 0), p(this, "preCompressionSize", void 0), p(this, "postCompressionSize", void 0), p(this, "loaded", 0), p(this, "reactNativeFileIndex", void 0), p(this, "error", void 0), p(this, "reactNativeFilePrepped", !1), p(this, "startTime", void 0), p(this, "uploadAnalytics", new C), p(this, "_abortController", void 0), p(this, "_xhr", void 0), p(this, "_aborted", !1), this.channelId = t, this.preCompressionSize = null !== (a = null === (r = e.file) || void 0 === r ? void 0 : r.size) && void 0 !== a ? a : 0, this.currentSize = null !== (o = null === (s = e.file) || void 0 === s ? void 0 : s.size) && void 0 !== o ? o : 0, this.reactNativeFileIndex = i, this._abortController = new AbortController
        }
    }
}