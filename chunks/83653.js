function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_TOTAL_ATTACHMENT_SIZE: function() {
            return a
        },
        getAttachmentPayload: function() {
            return u
        },
        getFile: function() {
            return f
        },
        getFileChunk: function() {
            return s
        },
        getFileContentLength: function() {
            return c
        },
        getFileData: function() {
            return l
        }
    });
    var r = n("995369"),
        o = n("401146"),
        i = [{
            reName: /\.jpe?g$/i,
            name: function(e) {
                return "image".concat(e, ".jpg")
            },
            type: "image/jpeg"
        }, {
            reName: /\.png$/i,
            name: function(e) {
                return "image".concat(e, ".png")
            },
            type: "image/png"
        }, {
            reName: /\.gif$/i,
            name: function(e) {
                return "image".concat(e, ".gif")
            },
            type: "image/gif"
        }, {
            reName: /\.webp$/i,
            name: function(e) {
                return "image".concat(e, ".webp")
            },
            type: "image/webp"
        }, {
            reName: /\.heic$/i,
            name: function(e) {
                return "image".concat(e, ".heic")
            },
            type: "image/heic"
        }, {
            reName: /\.heif$/i,
            name: function(e) {
                return "image".concat(e, ".heif")
            },
            type: "image/heif"
        }, {
            reName: /\.dng$/i,
            name: function(e) {
                return "image".concat(e, ".dng")
            },
            type: "image/x-adobe-dng"
        }, {
            reName: /\.mov$/i,
            name: function(e) {
                return "video".concat(e, ".mov")
            },
            type: "video/quicktime"
        }, {
            reName: /\.avi$/i,
            name: function(e) {
                return "video".concat(e, ".avi")
            },
            type: "video/x-msvideo"
        }, {
            reName: /\.mp4$/i,
            name: function(e) {
                return "video".concat(e, ".mp4")
            },
            type: "video/mp4"
        }, {
            reName: /\.webm$/i,
            name: function(e) {
                return "video".concat(e, ".webm")
            },
            type: "image/webm"
        }],
        a = 524288e3;

    function u(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = {
                id: null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : e.id
            };
        null != e.description && (a.description = e.description);
        var u = {
            spoiler: e.spoiler
        }.spoiler ? o.SPOILER_ATTACHMENT_PREFIX : "";
        return a.filename = "".concat(u).concat(null != i ? i : e.filename), a.uploaded_filename = e.uploadedFilename, "durationSecs" in e && null != e.durationSecs && (a.duration_secs = e.durationSecs), "waveform" in e && null != e.waveform && (a.waveform = e.waveform), "isThumbnail" in e && !0 === e.isThumbnail && (a.is_thumbnail = e.isThumbnail), "isRemix" in e && !0 === e.isRemix && (a.is_remix = e.isRemix), "clip" in e && null != e.clip && (a.is_clip = !0, a.title = e.clip.name, a.application_id = e.clip.applicationId, a.clip_created_at = (0, r.getClipCreatedAt)(e.clip.id), a.clip_participant_ids = (0, r.getClipParticipantIds)(e.clip.users)), a
    }

    function s(e, t, n) {
        var r = new XMLHttpRequest;
        return new Promise(function(o, i) {
            r.open("GET", e, !0), r.responseType = "blob", r.setRequestHeader("Range", "bytes=".concat(t, "-").concat(n)), r.onabort = function(e) {
                return i(e)
            }, r.onerror = function(e) {
                return i(e)
            }, r.ontimeout = function(e) {
                return i(e)
            }, r.onload = function() {
                206 === r.status ? o(r.response) : i(Error("Range request failed"))
            }, r.send()
        })
    }

    function l(e) {
        var t = new XMLHttpRequest;
        return new Promise(function(n, r) {
            t.open("GET", e, !0), t.responseType = "blob", t.onabort = function(e) {
                return r(e)
            }, t.onerror = function(e) {
                return r(e)
            }, t.ontimeout = function(e) {
                return r(e)
            }, t.onload = function() {
                var e;
                return n(null == t ? void 0 : null === (e = t.response) || void 0 === e ? void 0 : e.data)
            }, t.send()
        })
    }

    function c(e) {
        return new Promise(function(t, n) {
            var r = new XMLHttpRequest;
            r.open("HEAD", e, !0), r.onload = function() {
                if (r.status >= 200 && r.status < 300) {
                    var e = r.getResponseHeader("Content-Length");
                    null != e && "" !== e ? t(parseInt(e, 10)) : n(Error("Content-Length header is missing"))
                } else n(Error("HTTP request failed with status code ".concat(r.status)))
            }, r.onerror = n, r.onabort = n, r.ontimeout = n, r.send()
        })
    }

    function f(e) {
        var t, n, r, o, a, u, s, l = e.uri,
            c = e.i,
            f = e.overrideFilename,
            d = e.overrideType,
            _ = l.split("/"),
            E = _[_.length - 1];
        E = null !== (r = null === (n = E.split("?")) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== r ? r : "";
        var p = i.find(function(e) {
            return e.reName.test(E)
        });
        if (null == p && null != f && (p = i.find(function(e) {
                return e.reName.test(f)
            })), null != p && null != f) {
            var m = p.name(c).split(".").pop(),
                y = f.lastIndexOf(".");
            o = -1 !== y ? "".concat(f.substr(0, y), ".").concat(m) : "".concat(f, ".").concat(m)
        } else o = null != p ? p.name(c) : null != f ? f : "unknown";
        return {
            uri: l,
            filename: o,
            type: null !== (a = null != d ? d : null == p ? void 0 : p.type) && void 0 !== a ? a : "unknown",
            isVideo: -1 !== (null !== (u = null != d ? d : null == p ? void 0 : p.name(c)) && void 0 !== u ? u : "").indexOf("video"),
            isImage: -1 !== (null !== (s = null != d ? d : null == p ? void 0 : p.name(c)) && void 0 !== s ? s : "").indexOf("image")
        }
    }
}