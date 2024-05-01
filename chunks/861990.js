function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_TOTAL_ATTACHMENT_SIZE: function() {
            return s
        },
        getAttachmentPayload: function() {
            return o
        },
        getFile: function() {
            return _
        },
        getFileChunk: function() {
            return l
        },
        getFileContentLength: function() {
            return d
        },
        getFileData: function() {
            return u
        }
    }), n("411104");
    var i = n("830496"),
        r = n("959517");
    let a = [{
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
        s = 524288e3;

    function o(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 ? arguments[2] : void 0,
            s = {
                id: null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : e.id
            };
        null != e.description && (s.description = e.description);
        let o = function(e) {
            let {
                spoiler: t
            } = e;
            return t ? r.SPOILER_ATTACHMENT_PREFIX : ""
        }({
            spoiler: e.spoiler
        });
        return s.filename = "".concat(o).concat(null != a ? a : e.filename), s.uploaded_filename = e.uploadedFilename, "durationSecs" in e && null != e.durationSecs && (s.duration_secs = e.durationSecs), "waveform" in e && null != e.waveform && (s.waveform = e.waveform), "isThumbnail" in e && !0 === e.isThumbnail && (s.is_thumbnail = e.isThumbnail), "isRemix" in e && !0 === e.isRemix && (s.is_remix = e.isRemix), "clip" in e && null != e.clip && (s.is_clip = !0, s.title = e.clip.name, s.application_id = e.clip.applicationId, s.clip_created_at = (0, i.getClipCreatedAt)(e.clip.id), s.clip_participant_ids = (0, i.getClipParticipantIds)(e.clip.users)), s
    }

    function l(e, t, n) {
        let i = new XMLHttpRequest;
        return new Promise((r, a) => {
            i.open("GET", e, !0), i.responseType = "blob", i.setRequestHeader("Range", "bytes=".concat(t, "-").concat(n)), i.onabort = e => a(e), i.onerror = e => a(e), i.ontimeout = e => a(e), i.onload = () => {
                206 === i.status ? r(i.response) : a(Error("Range request failed"))
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

    function _(e) {
        var t, n, i, r, s, o;
        let l, {
                uri: u,
                i: d,
                overrideFilename: _,
                overrideType: c
            } = e,
            E = u.split("/"),
            I = E[E.length - 1];
        I = null !== (i = null === (n = I.split("?")) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== i ? i : "";
        let T = a.find(e => e.reName.test(I));
        if (null == T && null != _ && (T = a.find(e => e.reName.test(_))), null != T && null != _) {
            let e = T.name(d).split(".").pop(),
                t = _.lastIndexOf(".");
            l = -1 !== t ? "".concat(_.substr(0, t), ".").concat(e) : "".concat(_, ".").concat(e)
        } else l = null != T ? T.name(d) : null != _ ? _ : "unknown";
        return {
            uri: u,
            filename: l,
            type: null !== (r = null != c ? c : null == T ? void 0 : T.type) && void 0 !== r ? r : "unknown",
            isVideo: -1 !== (null !== (s = null != c ? c : null == T ? void 0 : T.name(d)) && void 0 !== s ? s : "").indexOf("video"),
            isImage: -1 !== (null !== (o = null != c ? c : null == T ? void 0 : T.name(d)) && void 0 !== o ? o : "").indexOf("image")
        }
    }
}