function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_TOTAL_ATTACHMENT_SIZE: function() {
            return a
        },
        getAttachmentPayload: function() {
            return o
        },
        getFileChunk: function() {
            return l
        },
        getFileData: function() {
            return u
        },
        getFileContentLength: function() {
            return d
        },
        getFile: function() {
            return c
        }
    }), n("70102");
    var i = n("66175"),
        s = n("894488");
    let r = [{
            reName: /\.jpe?g$/i,
            name: e => "image".concat(e, ".jpg"),
            type: "image/jpeg"
        }, {
            reName: /\.png$/i,
            name: e => "image".concat(e, ".png"),
            type: "image/png"
        }, {
            reName: /\.gif$/i,
            name: e => "image".concat(e, ".gif"),
            type: "image/gif"
        }, {
            reName: /\.webp$/i,
            name: e => "image".concat(e, ".webp"),
            type: "image/webp"
        }, {
            reName: /\.heic$/i,
            name: e => "image".concat(e, ".heic"),
            type: "image/heic"
        }, {
            reName: /\.heif$/i,
            name: e => "image".concat(e, ".heif"),
            type: "image/heif"
        }, {
            reName: /\.dng$/i,
            name: e => "image".concat(e, ".dng"),
            type: "image/x-adobe-dng"
        }, {
            reName: /\.mov$/i,
            name: e => "video".concat(e, ".mov"),
            type: "video/quicktime"
        }, {
            reName: /\.avi$/i,
            name: e => "video".concat(e, ".avi"),
            type: "video/x-msvideo"
        }, {
            reName: /\.mp4$/i,
            name: e => "video".concat(e, ".mp4"),
            type: "video/mp4"
        }, {
            reName: /\.webm$/i,
            name: e => "video".concat(e, ".webm"),
            type: "image/webm"
        }],
        a = 524288e3;

    function o(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 ? arguments[2] : void 0,
            a = {
                id: null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : e.id
            };
        null != e.description && (a.description = e.description);
        let o = function(e) {
            let {
                spoiler: t
            } = e;
            return t ? s.SPOILER_ATTACHMENT_PREFIX : ""
        }({
            spoiler: e.spoiler
        });
        return a.filename = "".concat(o).concat(null != r ? r : e.filename), a.uploaded_filename = e.uploadedFilename, "durationSecs" in e && null != e.durationSecs && (a.duration_secs = e.durationSecs), "waveform" in e && null != e.waveform && (a.waveform = e.waveform), "isThumbnail" in e && !0 === e.isThumbnail && (a.is_thumbnail = e.isThumbnail), "isRemix" in e && !0 === e.isRemix && (a.is_remix = e.isRemix), "clip" in e && null != e.clip && (a.is_clip = !0, a.title = e.clip.name, a.application_id = e.clip.applicationId, a.clip_created_at = (0, i.getClipCreatedAt)(e.clip.id), a.clip_participant_ids = (0, i.getClipParticipantIds)(e.clip.users)), a
    }

    function l(e, t, n) {
        let i = new XMLHttpRequest;
        return new Promise((s, r) => {
            i.open("GET", e, !0), i.responseType = "blob", i.setRequestHeader("Range", "bytes=".concat(t, "-").concat(n)), i.onabort = e => r(e), i.onerror = e => r(e), i.ontimeout = e => r(e), i.onload = () => {
                206 === i.status ? s(i.response) : r(Error("Range request failed"))
            }, i.send()
        })
    }

    function u(e) {
        let t = new XMLHttpRequest;
        return new Promise((n, i) => {
            t.open("GET", e, !0), t.responseType = "blob", t.onabort = e => i(e), t.onerror = e => i(e), t.ontimeout = e => i(e), t.onload = () => {
                var e;
                return n(null == t ? void 0 : null === (e = t.response) || void 0 === e ? void 0 : e.data)
            }, t.send()
        })
    }

    function d(e) {
        return new Promise((t, n) => {
            let i = new XMLHttpRequest;
            i.open("HEAD", e, !0), i.onload = () => {
                if (i.status >= 200 && i.status < 300) {
                    let e = i.getResponseHeader("Content-Length");
                    null != e && "" !== e ? t(parseInt(e, 10)) : n(Error("Content-Length header is missing"))
                } else n(Error("HTTP request failed with status code ".concat(i.status)))
            }, i.onerror = n, i.onabort = n, i.ontimeout = n, i.send()
        })
    }

    function c(e) {
        var t, n, i, s, a, o;
        let l, {
                uri: u,
                i: d,
                overrideFilename: c,
                overrideType: f
            } = e,
            _ = u.split("/"),
            h = _[_.length - 1];
        h = null !== (i = null === (n = h.split("?")) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== i ? i : "";
        let E = r.find(e => e.reName.test(h));
        if (null == E && null != c && (E = r.find(e => e.reName.test(c))), null != E && null != c) {
            let e = E.name(d).split(".").pop(),
                t = c.lastIndexOf(".");
            l = -1 !== t ? "".concat(c.substr(0, t), ".").concat(e) : "".concat(c, ".").concat(e)
        } else l = null != E ? E.name(d) : null != c ? c : "unknown";
        return {
            uri: u,
            filename: l,
            type: null !== (s = null != f ? f : null == E ? void 0 : E.type) && void 0 !== s ? s : "unknown",
            isVideo: -1 !== (null !== (a = null != f ? f : null == E ? void 0 : E.name(d)) && void 0 !== a ? a : "").indexOf("video"),
            isImage: -1 !== (null !== (o = null != f ? f : null == E ? void 0 : E.name(d)) && void 0 !== o ? o : "").indexOf("image")
        }
    }
}