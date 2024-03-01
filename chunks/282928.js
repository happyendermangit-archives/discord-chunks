function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CloudUploadStatus: function() {
            return s
        },
        CloudUpload: function() {
            return I
        }
    }), n("222007"), n("70102");
    var s, i, r = n("917351"),
        a = n.n(r),
        o = n("981980"),
        d = n("872717"),
        u = n("605250"),
        l = n("676574"),
        f = n("668273"),
        _ = n("168973"),
        c = n("599110"),
        g = n("994440"),
        m = n("718517"),
        h = n("286235"),
        v = n("980134"),
        E = n("966724"),
        p = n("142852"),
        y = n("49111");
    let T = new u.default("CloudUpload.tsx"),
        C = n("123010").default;
    (i = s || (s = {})).NOT_STARTED = "NOT_STARTED", i.STARTED = "STARTED", i.UPLOADING = "UPLOADING", i.ERROR = "ERROR", i.COMPLETED = "COMPLETED", i.CANCELED = "CANCELED";
    class I extends E.default {
        static fromJson(e) {
            let {
                item: t,
                channelId: n,
                showLargeMessageDialog: s,
                reactNativeFileIndex: i
            } = e, r = new I(t, n, s, i);
            return "COMPLETED" !== r.status && (r.status = "NOT_STARTED"), Object.entries(e).forEach(e => {
                let [t, n] = e;
                !t.startsWith("_") && (r[t] = n)
            }), r
        }
        retryOpts() {
            return this.item.platform === E.UploadPlatform.REACT_NATIVE ? {
                timeout: 1 * m.default.Millis.HOUR,
                backoff: new o.default(.5 * m.default.Millis.SECOND, 30 * m.default.Millis.MINUTE),
                retries: 12
            } : {
                timeout: 1 * m.default.Millis.HOUR,
                retries: 12,
                backoff: new o.default
            }
        }
        async uploadFileToCloudAsChunks(e) {
            if (null == this.responseUrl || "" === this.responseUrl) throw Error("_uploadFileToCloudAsChunks - responseUrl is not set");
            let {
                contentType: t,
                fileSize: n,
                bufferedFileData: s
            } = await this.prepareChunkUploadItem(), i = Math.ceil(n / e);
            this.uploadStats = {
                numChunks: i,
                totalRequestCount: 0
            };
            for (let r = 0; r < i; r++) {
                T.info("Uploading chunk ".concat(r + 1, " of ").concat(i, " for file id ").concat(this.id));
                let a = r * e,
                    o = Math.min(a + e, n),
                    d = await this.getChunk(a, o, s);
                try {
                    await this.uploadChunk({
                        chunk: d,
                        start: a,
                        end: o,
                        totalSize: n,
                        sessionUrl: this.responseUrl,
                        contentType: t
                    })
                } catch (e) {
                    throw T.error("Error uploading chunk ".concat(r + 1, " for file id ").concat(this.id, ": ").concat(e)), e
                }
            }
            T.log("Upload complete for file id ".concat(this.id))
        }
        async prepareChunkUploadItem() {
            let e, t, n;
            if (this.item.platform === E.UploadPlatform.REACT_NATIVE) {
                let s = this.item;
                if (e = null != s.mimeType && "" !== s.mimeType ? s.mimeType : "application/octet-stream", null == s.size || 0 === s.size || isNaN(s.size)) try {
                    t = await (0, v.getFileContentLength)(s.uri)
                } catch (e) {
                    T.warn("Failed to peek content length for file id ".concat(this.id, ", reading whole file instead: ").concat(e)), t = (n = await (0, v.getFileData)(s.uri)).size
                } else t = s.size
            } else e = "application/octet-stream", t = this.item.file.size;
            return {
                contentType: e,
                fileSize: t,
                bufferedFileData: n
            }
        }
        async getChunk(e, t, n) {
            return this.item.platform !== E.UploadPlatform.REACT_NATIVE ? this.item.file.slice(e, t) : null != n ? n.slice(e, t) : await (0, v.getFileChunk)(this.item.uri, e, t)
        }
        async uploadChunk(e) {
            let t = {
                "Content-Type": e.contentType,
                "Content-Range": "bytes ".concat(e.start, "-").concat(e.end - 1, "/").concat(e.totalSize)
            };
            for (let n = 1; n <= 3; n++) {
                null != this.uploadStats && (this.uploadStats.totalRequestCount += 1), T.log("Attempt ".concat(n, " for file id ").concat(this.id, " : Uploading chunk ").concat(e.start, "-").concat(e.end - 1, " of ").concat(e.totalSize, " bytes"));
                let s = a.throttle(t => {
                    let n = e.start + t.loaded;
                    this.emit("progress", n, e.totalSize, n - this.loaded), this.loaded = n
                }, 50);
                try {
                    let n = await d.default.put({
                        url: e.sessionUrl,
                        body: e.chunk,
                        headers: t,
                        signal: this._abortController.signal,
                        onRequestProgress: s,
                        ...this.retryOpts()
                    });
                    if (n.ok) return
                } catch (t) {
                    if (!this.RESUME_INCOMPLETE_CODES.includes(t.status)) throw t;
                    if (this.isUnsuccessfulChunkUpload(t, e.end - 1)) {
                        T.error("Incomplete chunk upload for file id ".concat(this.id, ": ").concat(t.status));
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
            T.log("Uploading ".concat(this.id)), this.item.platform === E.UploadPlatform.REACT_NATIVE ? t = null != (e = {
                type: this.item.mimeType,
                uri: this.item.uri,
                name: this.item.filename
            }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
            let n = a.throttle(e => {
                    this.emit("progress", e.loaded, e.total, e.loaded - this.loaded), this.loaded = e.loaded
                }, 50),
                s = {
                    "Content-Type": t
                };
            return d.default.put({
                url: this.responseUrl,
                body: e,
                headers: s,
                signal: this._abortController.signal,
                onRequestProgress: n,
                ...this.retryOpts()
            })
        }
        async getSize() {
            var e;
            return null !== (e = this.currentSize) && void 0 !== e ? e : 0
        }
        async upload() {
            var e, t, n;
            if ("COMPLETED" === this.status) return;
            if (this.setStatus("STARTED"), this.startTime = new Date, this.trackUploadStart(), "CANCELED" === this.status) {
                this.handleComplete(this.id);
                return
            }
            let s = await C.getUploadPayload(this),
                i = (0, p.getUploadTarget)(this.item.target);
            if (null == s.filename || "" === s.filename || 0 === this.currentSize) {
                T.error("File does not have a filename or size is 0.", JSON.stringify(s)), this.handleError(y.AbortCodes.INVALID_FILE_ASSET);
                return
            }
            if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > i.getMaxFileSize(this.channelId)) {
                this.handleError(y.AbortCodes.ENTITY_TOO_LARGE);
                return
            }
            if (l.default.get("upload_fail_50") && .5 > Math.random()) {
                setTimeout(() => {
                    this.handleError(500)
                }, 1e3);
                return
            }
            try {
                T.log("Requesting upload url for ".concat(this.id));
                let e = await d.default.post({
                    url: i.getCreateAttachmentURL(this.channelId),
                    body: {
                        files: [s]
                    },
                    ...this.retryOpts()
                });
                this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename)
            } catch (s) {
                let e = null !== (n = null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : s.status;
                e !== y.AbortCodes.ENTITY_TOO_LARGE && (T.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(s.body), " for ").concat(this.id)), h.default.captureException(s)), this.handleError(e);
                return
            }
            try {
                let e;
                let t = f.default.getCurrentConfig({
                    location: "CloudUpload"
                }, {
                    autoTrackExposure: !0
                });
                e = t.enabled && t.chunkSize > 0 ? await this.uploadFileToCloudAsChunks(t.chunkSize) : await this.uploadFileToCloud(), this.trackUploadFinished("COMPLETED"), this.handleComplete(e)
            } catch (e) {
                "CANCELED" === this.status ? this.handleComplete(e) : (T.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
            }
        }
        async reactNativeCompressAndExtractData() {
            var e, t;
            if (!(0, p.getUploadTarget)(this.item.target).shouldReactNativeCompressUploads) {
                T.log("reactNativeCompressAndExtractData() disabled by upload target");
                return
            }
            if (!0 === this.reactNativeFilePrepped) {
                T.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id));
                return
            }
            T.log("Starting compression/conversion for ".concat(this.id));
            let n = await (0, g.getAttachmentFile)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
            if (null == n || null == n.file) return;
            let s = n.uri,
                i = n.file.name,
                r = n.file.type;
            if (this.filename = i, null == i || null == s || null == r) throw T.error("Insufficient file data: ".concat({
                filename: i,
                uri: s,
                mimeType: r
            }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
                filename: i,
                uri: s,
                mimeType: r
            }));
            let a = null !== (t = n.fileSize) && void 0 !== t ? t : (await (0, v.getFileData)(s)).size;
            if (this.postCompressionSize = a, this.currentSize = a, null == a) throw T.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
            T.log("Completed compression and conversion. Output size=".concat(a, " bytes; filename=").concat(i, " for ").concat(this.id));
            this.item = {
                ...this.item,
                uri: s,
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
            this.setStatus("COMPLETED"), T.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
        }
        cancel() {
            T.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), this.trackUploadFinished("CANCELED"), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
        }
        resetState() {
            return this.status = "NOT_STARTED", this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this.startTime = void 0, this.uploadStats = void 0, this._abortController = new AbortController, super.resetState()
        }
        async delete() {
            if (null == this.uploadedFilename) return;
            let e = (0, p.getUploadTarget)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
            try {
                await d.default.delete(e)
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
            c.default.track(y.AnalyticEvents.ATTACHMENT_UPLOAD_STARTED, {
                file_size: this.currentSize,
                mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : "unknown",
                video_upload_quality: _.default.videoUploadQuality,
                data_saving_mode: _.default.dataSavingMode,
                low_quality_image_mode: _.default.lowQualityImageMode
            })
        }
        trackUploadFinished(e) {
            var t;
            let n = null != this.startTime ? Date.now() - this.startTime.getTime() : -1,
                s = null,
                i = 1;
            null != this.uploadStats && (s = this.uploadStats.numChunks, i = this.uploadStats.totalRequestCount), c.default.track(y.AnalyticEvents.ATTACHMENT_UPLOAD_FINISHED, {
                duration_ms: n,
                file_size: this.currentSize,
                pre_compression_file_size: this.preCompressionSize,
                final_state: e,
                mime_type: null !== (t = this.mimeType) && void 0 !== t ? t : "unknown",
                num_chunks: s,
                num_upload_attempts: i,
                error_code: this.error,
                video_upload_quality: _.default.videoUploadQuality,
                data_saving_mode: _.default.dataSavingMode,
                low_quality_image_mode: _.default.lowQualityImageMode
            })
        }
        constructor(e, t, n, s) {
            var i, r, a, o;
            super(e, n), this.RESUME_INCOMPLETE_CODES = [308], this.status = "NOT_STARTED", this.loaded = 0, this.reactNativeFilePrepped = !1, this._aborted = !1, this.channelId = t, this.preCompressionSize = null !== (a = null === (i = e.file) || void 0 === i ? void 0 : i.size) && void 0 !== a ? a : 0, this.currentSize = null !== (o = null === (r = e.file) || void 0 === r ? void 0 : r.size) && void 0 !== o ? o : 0, this.reactNativeFileIndex = s, this._abortController = new AbortController
        }
    }
}