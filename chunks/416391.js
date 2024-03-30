function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        },
        stageAttachmentFiles: function() {
            return b
        }
    });
    var r = n("188129"),
        o = n("882492"),
        i = n("481921"),
        a = n("997529"),
        u = n("389408"),
        s = n("976331"),
        l = n("281767"),
        c = n("401146"),
        f = n("941504");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    E(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    E(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
            })
        }
        return e
    }

    function O(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function S(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function v(e, t) {
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
    var g = new r.Logger("CloudUploaderBase.tsx"),
        A = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
            }(A, e);
            var t, n, r, s, d, E = (t = A, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = I(t);
                if (n) {
                    var a = I(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : _(e)
            });

            function A() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, A), e = E.apply(this, arguments), y(_(e), "files", []), e
            }
            return r = A, s = [{
                key: "_fileSize",
                value: function() {
                    return this.files.reduce(function(e, t) {
                        var n;
                        return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
            }, {
                key: "compressAndCheckFileSize",
                value: function() {
                    var e = this;
                    return p(function() {
                        var t, n, r, o, u, s, f, d, _, E, p, m, y;
                        return v(this, function(I) {
                            switch (I.label) {
                                case 0:
                                    if (r = (0, a.getUploadTarget)(null === (n = e.files[0]) || void 0 === n ? void 0 : null === (t = n.item) || void 0 === t ? void 0 : t.target), e.files.length > r.getMaxAttachmentsCount()) return g.log("Too many attachments for ".concat(e.id)), e._handleError({
                                        code: l.AbortCodes.TOO_MANY_ATTACHMENTS
                                    }), [2, !1];
                                    return [3, 10];
                                case 1:
                                    I.trys.push([1, 8, 9, 10]), f = e.files[Symbol.iterator](), I.label = 2;
                                case 2:
                                    if (o = (d = f.next()).done) return [3, 7];
                                    _ = d.value, I.label = 3;
                                case 3:
                                    return I.trys.push([3, 5, , 6]), [4, _.reactNativeCompressAndExtractData()];
                                case 4:
                                    if (I.sent(), _.status === i.CloudUploadStatus.CANCELED) return g.log("compressAndCheckFileSize() file has been cancelled for compression - ".concat(_.id)), [3, 6];
                                    if ((null !== (E = _.currentSize) && void 0 !== E ? E : 0) === 0) return e._handleError({
                                        code: l.AbortCodes.ENTITY_EMPTY
                                    }), [2, !1];
                                    if ((null !== (p = _.currentSize) && void 0 !== p ? p : 0) > r.getMaxFileSize(_.channelId)) return e._handleError({
                                        code: l.AbortCodes.ENTITY_TOO_LARGE,
                                        reason: {
                                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE
                                        }
                                    }), [2, !1];
                                    return [3, 6];
                                case 5:
                                    return m = I.sent(), e._handleException(m), [2, !1];
                                case 6:
                                    return o = !0, [3, 2];
                                case 7:
                                    return [3, 10];
                                case 8:
                                    return y = I.sent(), u = !0, s = y, [3, 10];
                                case 9:
                                    try {
                                        !o && null != f.return && f.return()
                                    } finally {
                                        if (u) throw s
                                    }
                                    return [7];
                                case 10:
                                    if (e._fileSize() > r.getMaxTotalAttachmentSize()) return e._handleError({
                                        code: l.AbortCodes.ENTITY_TOO_LARGE,
                                        reason: {
                                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                                        }
                                    }), [2, !1];
                                    return [2, !0]
                            }
                        })
                    })()
                }
            }, {
                key: "_filesTooLarge",
                value: function() {
                    return this.files.some(function(e) {
                        return e.error === l.AbortCodes.ENTITY_TOO_LARGE
                    })
                }
            }, {
                key: "setUploadingTextForUI",
                value: function() {
                    var e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : f.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(function(e) {
                            return e.isImage
                        }),
                        n = this.files.some(function(e) {
                            return e.isVideo
                        }),
                        r = this._fileSize();
                    g.log("setUploadingTextForUI - total content: ".concat(r, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = O(h({}, this._file), {
                        totalPostCompressionSize: r,
                        currentSize: r,
                        name: e,
                        hasVideo: n,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    })
                }
            }, {
                key: "_recomputeProgress",
                value: function() {
                    var e = this._recomputeProgressTotal(),
                        t = e.loaded,
                        n = e.total,
                        r = this._recomputeProgressByFile();
                    this._handleProgress(t, n, r)
                }
            }, {
                key: "_recomputeProgressTotal",
                value: function() {
                    var e = this._fileSize();
                    return {
                        loaded: this.files.reduce(function(e, t) {
                            var n;
                            return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                        }, 0),
                        total: e
                    }
                }
            }, {
                key: "_recomputeProgressByFile",
                value: function() {
                    var e = {};
                    return this.files.forEach(function(t) {
                        e[t.id] = (0, u.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
            }, {
                key: "cancel",
                value: function() {
                    g.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(function(e) {
                        return e.cancel()
                    }), this._handleComplete())
                }
            }, {
                key: "cancelItem",
                value: function(e) {
                    var t = this;
                    return p(function() {
                        var n, r;
                        return v(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (g.log("Cancel called for ".concat(t.id, " for item ").concat(e)), null == (n = t.files.find(function(t) {
                                            return t.id === e
                                        })) || n.status === i.CloudUploadStatus.CANCELED) return [2];
                                    return r = t.files.indexOf(n), t.files = S(t.files.slice(0, r)).concat(S(t.files.slice(r + 1))), t._file = O(h({}, t._file), {
                                        items: t.files
                                    }), [4, (0, o.cancelGetAttachmentFile)(n)];
                                case 1:
                                    return a.sent(), n.cancel(), t.emit("cancel-upload-item", t._file), 0 === t.files.length && t.cancel(), [2]
                            }
                        })
                    })()
                }
            }, {
                key: "failed",
                value: function() {
                    return this.files.some(function(e) {
                        return e.status === i.CloudUploadStatus.ERROR
                    })
                }
            }, {
                key: "_remainingUploadCount",
                value: function() {
                    var e = this.files;
                    return e.length - e.filter(function(e) {
                        return e.status === i.CloudUploadStatus.COMPLETED
                    }).length
                }
            }, {
                key: "clear",
                value: function() {
                    this.cancel(), this.files = []
                }
            }], m(r.prototype, s), d && m(r, d), A
        }(s.default);

    function b(e) {
        return N.apply(this, arguments)
    }

    function N() {
        return (N = p(function(e) {
            var t, n, r = arguments;
            return v(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = r.length > 1 && void 0 !== r[1] && r[1], n = r.length > 2 ? r[2] : void 0, [4, Promise.all(e.map(function(e) {
                            return new Promise(function(r, o) {
                                switch (e.status) {
                                    case i.CloudUploadStatus.NOT_STARTED:
                                        e.upload();
                                        break;
                                    case i.CloudUploadStatus.COMPLETED:
                                        r("complete");
                                        break;
                                    case i.CloudUploadStatus.ERROR:
                                        t && e.error !== l.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : o(Error("File failed to upload"));
                                        break;
                                    case i.CloudUploadStatus.CANCELED:
                                        o(Error("Upload is canceled"))
                                }
                                e.on("complete", function() {
                                    r("complete")
                                }), e.on("error", function() {
                                    o(Error("File ".concat(e.id, " failed to upload")))
                                }), e.on("progress", function(e, t) {
                                    null == n || n(e, t)
                                })
                            })
                        }))];
                    case 1:
                        return o.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }
}