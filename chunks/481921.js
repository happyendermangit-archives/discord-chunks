function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CloudUpload: function() {
            return G
        },
        CloudUploadStatus: function() {
            return o
        }
    });
    var r, o, i = n("392711"),
        a = n.n(i),
        u = n("235923"),
        s = n("967888"),
        l = n("35523"),
        c = n("834704"),
        f = n("268473"),
        d = n("24039"),
        _ = n("649310"),
        E = n("870331"),
        p = n("882492"),
        m = n("388990"),
        y = n("285910"),
        I = n("83653"),
        h = n("319654"),
        O = n("997529"),
        T = n("281767");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function g(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function A(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    g(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    g(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function b(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e, t, n) {
        return (C = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = P(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function P(e) {
        return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function D(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                R(e, t, n[t])
            })
        }
        return e
    }

    function L(e, t) {
        return (L = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function M(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var U = new l.default("CloudUpload.tsx"),
        w = n("368168").default;
    (r = o || (o = {})).NOT_STARTED = "NOT_STARTED", r.STARTED = "STARTED", r.UPLOADING = "UPLOADING", r.ERROR = "ERROR", r.COMPLETED = "COMPLETED", r.CANCELED = "CANCELED";
    var k = function e() {
            b(this, e), R(this, "numChunks", void 0), R(this, "totalRequestCount", void 0), R(this, "timing", {}), R(this, "compressAndExtractDisabled", void 0), R(this, "fileAlreadyPrepped", void 0), R(this, "imageCompressionQuality", void 0), R(this, "videoCompressionQuality", void 0), R(this, "convertedMimeType", void 0)
        },
        G = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && L(e, t)
            }(g, e);
            var t, n, r, o, i, l = (t = g, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = P(t);
                if (n) {
                    var a = P(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : v(e)
            });

            function g(e, t, n, r) {
                var o, i, a, u, s;
                return b(this, g), R(v(o = l.call(this, e, n)), "RESUME_INCOMPLETE_CODES", [308]), R(v(o), "status", "NOT_STARTED"), R(v(o), "channelId", void 0), R(v(o), "responseUrl", void 0), R(v(o), "currentSize", void 0), R(v(o), "preCompressionSize", void 0), R(v(o), "postCompressionSize", void 0), R(v(o), "loaded", 0), R(v(o), "reactNativeFileIndex", void 0), R(v(o), "error", void 0), R(v(o), "reactNativeFilePrepped", !1), R(v(o), "startTime", void 0), R(v(o), "uploadAnalytics", new k), R(v(o), "_abortController", void 0), R(v(o), "_xhr", void 0), R(v(o), "_aborted", !1), o.channelId = t, o.preCompressionSize = null !== (u = null === (i = e.file) || void 0 === i ? void 0 : i.size) && void 0 !== u ? u : 0, o.currentSize = null !== (s = null === (a = e.file) || void 0 === a ? void 0 : a.size) && void 0 !== s ? s : 0, o.reactNativeFileIndex = r, o._abortController = new AbortController, o
            }
            return r = g, o = [{
                key: "retryOpts",
                value: function() {
                    return this.item.platform === h.UploadPlatform.REACT_NATIVE ? {
                        timeout: 1 * m.default.Millis.HOUR,
                        backoff: new u.default(.5 * m.default.Millis.SECOND, 30 * m.default.Millis.MINUTE),
                        retries: 12
                    } : {
                        timeout: 1 * m.default.Millis.HOUR,
                        retries: 12,
                        backoff: new u.default
                    }
                }
            }, {
                key: "uploadFileToCloudAsChunks",
                value: function(e) {
                    var t = this;
                    return A(function() {
                        var n, r, o, i, a, u, s, l, c, f;
                        return M(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (null == t.responseUrl || "" === t.responseUrl) throw Error("_uploadFileToCloudAsChunks - responseUrl is not set");
                                    return [4, t.prepareChunkUploadItem()];
                                case 1:
                                    r = (n = d.sent()).contentType, o = n.fileSize, i = n.bufferedFileData, a = Math.ceil(o / e), t.uploadAnalytics.numChunks = a, t.uploadAnalytics.totalRequestCount = 0, u = 0, d.label = 2;
                                case 2:
                                    if (!(u < a)) return [3, 8];
                                    return U.info("Uploading chunk ".concat(u + 1, " of ").concat(a, " for file id ").concat(t.id)), l = Math.min((s = u * e) + e, o), [4, t.getChunk(s, l, i)];
                                case 3:
                                    c = d.sent(), d.label = 4;
                                case 4:
                                    return d.trys.push([4, 6, , 7]), [4, t.uploadChunk({
                                        chunk: c,
                                        start: s,
                                        end: l,
                                        totalSize: o,
                                        sessionUrl: t.responseUrl,
                                        contentType: r
                                    })];
                                case 5:
                                    return d.sent(), [3, 7];
                                case 6:
                                    throw f = d.sent(), U.error("Error uploading chunk ".concat(u + 1, " for file id ").concat(t.id, ": ").concat(f)), f;
                                case 7:
                                    return u++, [3, 2];
                                case 8:
                                    return U.log("Upload complete for file id ".concat(t.id)), [2]
                            }
                        })
                    })()
                }
            }, {
                key: "prepareChunkUploadItem",
                value: function() {
                    var e = this;
                    return A(function() {
                        var t, n, r, o, i;
                        return M(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (e.item.platform !== h.UploadPlatform.REACT_NATIVE) return [3, 6];
                                    if (t = null != (o = e.item).mimeType && "" !== o.mimeType ? o.mimeType : "application/octet-stream", !(null != o.size && 0 !== o.size && !isNaN(o.size))) return [3, 1];
                                    return n = o.size, [3, 5];
                                case 1:
                                    return a.trys.push([1, 3, , 5]), [4, (0, I.getFileContentLength)(o.uri)];
                                case 2:
                                    return n = a.sent(), [3, 5];
                                case 3:
                                    return i = a.sent(), U.warn("Failed to peek content length for file id ".concat(e.id, ", reading whole file instead: ").concat(i)), [4, (0, I.getFileData)(o.uri)];
                                case 4:
                                    return n = (r = a.sent()).size, [3, 5];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    t = "application/octet-stream", n = e.item.file.size, a.label = 7;
                                case 7:
                                    return [2, {
                                        contentType: t,
                                        fileSize: n,
                                        bufferedFileData: r
                                    }]
                            }
                        })
                    })()
                }
            }, {
                key: "getChunk",
                value: function(e, t, n) {
                    var r = this;
                    return A(function() {
                        return M(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (r.item.platform !== h.UploadPlatform.REACT_NATIVE) return [3, 4];
                                    if (!(null != n)) return [3, 1];
                                    return [2, n.slice(e, t)];
                                case 1:
                                    return [4, (0, I.getFileChunk)(r.item.uri, e, t)];
                                case 2:
                                    return [2, o.sent()];
                                case 3:
                                    return [3, 5];
                                case 4:
                                    return [2, r.item.file.slice(e, t)];
                                case 5:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "uploadChunk",
                value: function(e) {
                    var t = this;
                    return A(function() {
                        var n, r, o, i, u, l;
                        return M(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    n = {
                                        "Content-Type": e.contentType,
                                        "Content-Range": "bytes ".concat(e.start, "-").concat(e.end - 1, "/").concat(e.totalSize)
                                    }, r = 3, o = 1, c.label = 1;
                                case 1:
                                    if (!(o <= r)) return [3, 6];
                                    t.uploadAnalytics.totalRequestCount = (null !== (i = t.uploadAnalytics.totalRequestCount) && void 0 !== i ? i : 0) + 1, U.log("Attempt ".concat(o, " for file id ").concat(t.id, " : Uploading chunk ").concat(e.start, "-").concat(e.end - 1, " of ").concat(e.totalSize, " bytes")), u = a().throttle(function(n) {
                                        var r = e.start + n.loaded;
                                        t.emit("progress", r, e.totalSize, r - t.loaded), t.loaded = r
                                    }, 50), c.label = 2;
                                case 2:
                                    return c.trys.push([2, 4, , 5]), [4, s.HTTP.put(D({
                                        url: e.sessionUrl,
                                        body: e.chunk,
                                        headers: n,
                                        signal: t._abortController.signal,
                                        onRequestProgress: u
                                    }, t.retryOpts()))];
                                case 3:
                                    if (c.sent().ok) return [2];
                                    return [3, 5];
                                case 4:
                                    if (l = c.sent(), !t.RESUME_INCOMPLETE_CODES.includes(l.status)) throw l;
                                    if (t.isUnsuccessfulChunkUpload(l, e.end - 1)) return U.error("Incomplete chunk upload for file id ".concat(t.id, ": ").concat(l.status)), [3, 5];
                                    return [2];
                                case 5:
                                    return o++, [3, 1];
                                case 6:
                                    throw Error("Failed to upload chunk")
                            }
                        })
                    })()
                }
            }, {
                key: "isUnsuccessfulChunkUpload",
                value: function(e, t) {
                    if (null == e.headers.range || "" === e.headers.range) return !0;
                    var n = e.headers.range.match(/bytes=(\d+)-(\d+)/);
                    return null !== n && parseInt(n[2], 10) !== t
                }
            }, {
                key: "uploadFileToCloud",
                value: function() {
                    var e, t, n = this;
                    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
                    U.log("Uploading ".concat(this.id)), this.item.platform === h.UploadPlatform.REACT_NATIVE ? t = null != (e = {
                        type: this.item.mimeType,
                        uri: this.item.uri,
                        name: this.item.filename
                    }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
                    var r = a().throttle(function(e) {
                            n.emit("progress", e.loaded, e.total, e.loaded - n.loaded), n.loaded = e.loaded
                        }, 50),
                        o = {
                            "Content-Type": t
                        };
                    return s.HTTP.put(D({
                        url: this.responseUrl,
                        body: e,
                        headers: o,
                        signal: this._abortController.signal,
                        onRequestProgress: r
                    }, this.retryOpts()))
                }
            }, {
                key: "getSize",
                value: function() {
                    var e = this;
                    return A(function() {
                        var t, n;
                        return M(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [3, 2];
                                case 1:
                                    return [2, null !== (t = r.sent()) && void 0 !== t ? t : 0];
                                case 2:
                                    return [2, null !== (n = e.currentSize) && void 0 !== n ? n : 0];
                                case 3:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "trackTime",
                value: function(e, t) {
                    var n = this;
                    return A(function() {
                        var r;
                        return M(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    r = performance.now(), o.label = 1;
                                case 1:
                                    return o.trys.push([1, , 3, 4]), [4, t()];
                                case 2:
                                    return [2, o.sent()];
                                case 3:
                                    return n.uploadAnalytics.timing[e] = performance.now() - r, [7];
                                case 4:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "upload",
                value: function() {
                    var e = this;
                    return A(function() {
                        var t, n, r, o, i, a, u, l, d, _, E;
                        return M(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    if ("COMPLETED" === e.status) return [2];
                                    return e.setStatus("STARTED"), e.startTime = performance.now(), e.trackUploadStart(), [3, 2];
                                case 1:
                                    p.sent(), p.label = 2;
                                case 2:
                                    if ("CANCELED" === e.status) return e.handleComplete(e.id), [2];
                                    return [4, w.getUploadPayload(e)];
                                case 3:
                                    if (t = p.sent(), n = (0, O.getUploadTarget)(e.item.target), null == t.filename || "" === t.filename || 0 === e.currentSize) return U.error("File does not have a filename or size is 0.", JSON.stringify(t)), e.handleError(T.AbortCodes.INVALID_FILE_ASSET), [2];
                                    if ((null !== (r = e.currentSize) && void 0 !== r ? r : 0) > n.getMaxFileSize(e.channelId)) return e.handleError(T.AbortCodes.ENTITY_TOO_LARGE), [2];
                                    if (c.default.get("upload_fail_50") && .5 > Math.random()) return setTimeout(function() {
                                        e.handleError(500)
                                    }, 1e3), [2];
                                    p.label = 4;
                                case 4:
                                    return p.trys.push([4, 6, , 7]), U.log("Requesting upload url for ".concat(e.id)), [4, e.trackTime("getUploadUrlTimeMs", A(function() {
                                        return M(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, s.HTTP.post(D({
                                                        url: n.getCreateAttachmentURL(e.channelId),
                                                        body: {
                                                            files: [t]
                                                        }
                                                    }, e.retryOpts()))];
                                                case 1:
                                                    return [2, r.sent()]
                                            }
                                        })
                                    }))];
                                case 5:
                                    return o = p.sent(), e.setResponseUrl(o.body.attachments[0].upload_url), e.setUploadedFilename(o.body.attachments[0].upload_filename), [3, 7];
                                case 6:
                                    return (l = null !== (u = null == (i = p.sent()) ? void 0 : null === (a = i.body) || void 0 === a ? void 0 : a.code) && void 0 !== u ? u : i.status) !== T.AbortCodes.ENTITY_TOO_LARGE && (U.error("Requesting upload url failed with code ".concat(null != l ? l : JSON.stringify(i.body), " for ").concat(e.id)), y.default.captureException(i)), e.handleError(l), [2];
                                case 7:
                                    if (p.trys.push([7, 12, , 13]), !((_ = f.default.getCurrentConfig({
                                            location: "CloudUpload"
                                        }, {
                                            autoTrackExposure: !0
                                        })).enabled && _.chunkSize > 0)) return [3, 9];
                                    return [4, e.trackTime("uploadTimeMs", A(function() {
                                        return M(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, e.uploadFileToCloudAsChunks(_.chunkSize)];
                                                case 1:
                                                    return [2, t.sent()]
                                            }
                                        })
                                    }))];
                                case 8:
                                    return d = p.sent(), [3, 11];
                                case 9:
                                    return [4, e.trackTime("uploadTimeMs", A(function() {
                                        return M(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, e.uploadFileToCloud()];
                                                case 1:
                                                    return [2, t.sent()]
                                            }
                                        })
                                    }))];
                                case 10:
                                    d = p.sent(), p.label = 11;
                                case 11:
                                    return e.trackUploadFinished("COMPLETED"), e.handleComplete(d), [3, 13];
                                case 12:
                                    return E = p.sent(), "CANCELED" === e.status ? e.handleComplete(E) : (U.info("Error: status ".concat(E.status, " for ").concat(e.id)), e.handleError(E)), [3, 13];
                                case 13:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "reactNativeCompressAndExtractData",
                value: function() {
                    var e = this;
                    return A(function() {
                        var t, n, r, o, i, a, u, s;
                        return M(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    if (!(0, O.getUploadTarget)(e.item.target).shouldReactNativeCompressUploads) return e.uploadAnalytics.compressAndExtractDisabled = !0, U.log("reactNativeCompressAndExtractData() disabled by upload target"), [2];
                                    if (!0 === e.reactNativeFilePrepped) return e.uploadAnalytics.fileAlreadyPrepped = !0, U.log("reactNativeCompressAndExtractData() file already prepped - ".concat(e.id)), [2];
                                    return U.log("Starting compression/conversion for ".concat(e.id)), [4, e.trackTime("compressTimeMs", A(function() {
                                        var t;
                                        return M(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return [4, (0, p.getAttachmentFile)(e, null !== (t = e.reactNativeFileIndex) && void 0 !== t ? t : 0)];
                                                case 1:
                                                    return [2, n.sent()]
                                            }
                                        })
                                    }))];
                                case 1:
                                    if (null == (t = l.sent()) || null == t.file) return [2];
                                    if (n = t.uri, r = t.file.name, o = t.file.type, (0, h.isResolvedUpload)(t.file) && (e.uploadAnalytics.imageCompressionQuality = t.file.imageCompressionQuality, e.uploadAnalytics.videoCompressionQuality = t.file.videoCompressionQuality, e.uploadAnalytics.convertedMimeType = t.file.type), e.filename = r, null == r || null == n || null == o) throw U.error("Insufficient file data: ".concat({
                                        filename: r,
                                        uri: n,
                                        mimeType: o
                                    }, " for ").concat(e.id)), Error("Insufficient file data: ".concat({
                                        filename: r,
                                        uri: n,
                                        mimeType: o
                                    }));
                                    if (!(null !== (i = t.fileSize) && void 0 !== i)) return [3, 2];
                                    return u = i, [3, 4];
                                case 2:
                                    return [4, (0, I.getFileData)(n)];
                                case 3:
                                    u = l.sent().size, l.label = 4;
                                case 4:
                                    if (a = u, e.postCompressionSize = a, e.currentSize = a, null == a) throw U.error("Size missing from file data for ".concat(e.id)), Error("Size missing from file data");
                                    return U.log("Completed compression and conversion. Output size=".concat(a, " bytes; filename=").concat(r, " for ").concat(e.id)), s = {
                                        uri: n,
                                        filename: r,
                                        mimeType: o
                                    }, e.item = D({}, e.item, s), e.reactNativeFilePrepped = !0, [2]
                            }
                        })
                    })()
                }
            }, {
                key: "handleError",
                value: function(e) {
                    this.setStatus("ERROR"), this.error = e, this.trackUploadFinished("ERROR");
                    try {
                        this.emit("error", e)
                    } catch (e) {}
                    this.removeAllListeners()
                }
            }, {
                key: "handleComplete",
                value: function(e) {
                    this.setStatus("COMPLETED"), U.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
                }
            }, {
                key: "cancel",
                value: function() {
                    U.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), this.trackUploadFinished("CANCELED"), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
                }
            }, {
                key: "resetState",
                value: function() {
                    return this.status = "NOT_STARTED", this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this.startTime = void 0, this.uploadAnalytics = new k, this._abortController = new AbortController, C(P(g.prototype), "resetState", this).call(this)
                }
            }, {
                key: "delete",
                value: function() {
                    var e = this;
                    return A(function() {
                        var t, n;
                        return M(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (null == e.uploadedFilename) return [2];
                                    t = (0, O.getUploadTarget)(e.item.target).getDeleteUploadURL(e.uploadedFilename), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, s.HTTP.del(t)];
                                case 2:
                                case 3:
                                    return n.sent(), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "setResponseUrl",
                value: function(e) {
                    this.responseUrl = e
                }
            }, {
                key: "setStatus",
                value: function(e) {
                    this.status = e
                }
            }, {
                key: "setFilename",
                value: function(e) {
                    this.filename = e
                }
            }, {
                key: "setUploadedFilename",
                value: function(e) {
                    this.uploadedFilename = e
                }
            }, {
                key: "trackUploadStart",
                value: function() {
                    var e;
                    E.default.track(T.AnalyticEvents.ATTACHMENT_UPLOAD_STARTED, {
                        file_size: this.currentSize,
                        mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : "unknown",
                        video_upload_quality: d.default.videoUploadQuality,
                        data_saving_mode: d.default.dataSavingMode,
                        low_quality_image_mode: d.default.lowQualityImageMode,
                        connection_type: _.default.getType(),
                        effective_connection_speed: _.default.getEffectiveConnectionSpeed(),
                        service_provider: _.default.getServiceProvider()
                    })
                }
            }, {
                key: "trackUploadFinished",
                value: function(e) {
                    var t, n, r, o, i, a = null != this.startTime ? performance.now() - this.startTime : -1;
                    E.default.track(T.AnalyticEvents.ATTACHMENT_UPLOAD_FINISHED, {
                        duration_ms: a,
                        file_size: this.currentSize,
                        pre_compression_file_size: this.preCompressionSize,
                        final_state: e,
                        mime_type: null !== (t = this.mimeType) && void 0 !== t ? t : "unknown",
                        num_chunks: this.uploadAnalytics.numChunks,
                        num_upload_attempts: null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 1,
                        error_code: this.error,
                        video_upload_quality: d.default.videoUploadQuality,
                        data_saving_mode: d.default.dataSavingMode,
                        low_quality_image_mode: d.default.lowQualityImageMode,
                        compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
                        get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
                        upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
                        converted_mime_type: null !== (r = this.uploadAnalytics.convertedMimeType) && void 0 !== r ? r : "unknown",
                        image_compression_quality: null !== (o = this.uploadAnalytics.imageCompressionQuality) && void 0 !== o ? o : 0,
                        video_compression_quality: null !== (i = this.uploadAnalytics.videoCompressionQuality) && void 0 !== i ? i : "unknown",
                        was_converted: this.mimeType !== this.uploadAnalytics.convertedMimeType,
                        was_compressed: this.currentSize < this.preCompressionSize,
                        connection_type: _.default.getType(),
                        effective_connection_speed: _.default.getEffectiveConnectionSpeed(),
                        service_provider: _.default.getServiceProvider()
                    })
                }
            }], i = [{
                key: "fromJson",
                value: function(e) {
                    var t = new g(e.item, e.channelId, e.showLargeMessageDialog, e.reactNativeFileIndex);
                    return "COMPLETED" !== t.status && (t.status = "NOT_STARTED"), Object.entries(e).forEach(function(e) {
                        var n, r, o = (r = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(n = e) || function(e, t) {
                                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != o) {
                                    var i = [],
                                        a = !0,
                                        u = !1;
                                    try {
                                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                    } catch (e) {
                                        u = !0, r = e
                                    } finally {
                                        try {
                                            !a && null != o.return && o.return()
                                        } finally {
                                            if (u) throw r
                                        }
                                    }
                                    return i
                                }
                            }(n, r) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return S(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                                }
                            }(n, r) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            i = o[0],
                            a = o[1];
                        !i.startsWith("_") && (t[i] = a)
                    }), t
                }
            }], o && N(r.prototype, o), i && N(r, i), g
        }(h.default)
}