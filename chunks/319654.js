function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadPlatform: function() {
            return i
        },
        default: function() {
            return h
        },
        isResolvedUpload: function() {
            return I
        }
    });
    var r, o, i, a, u = n("836560"),
        s = n("392711"),
        l = n.n(s),
        c = n("153832"),
        f = n("49657"),
        d = n("83653");

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function I(e) {
        return void 0 !== e.isVideo && void 0 !== e.isImage
    }(r = i || (i = {}))[r.REACT_NATIVE = 0] = "REACT_NATIVE", r[r.WEB = 1] = "WEB", (o = a || (a = {}))[o.FILE_ATTACHMENT = 0] = "FILE_ATTACHMENT", o[o.IMAGE_PICKER = 1] = "IMAGE_PICKER";
    var h = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : _(e)
        });

        function u(e, t) {
            if (! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), p(_(r = a.call(this)), "id", void 0), p(_(r), "uniqueId", void 0), p(_(r), "filename", void 0), p(_(r), "item", void 0), p(_(r), "spoiler", void 0), p(_(r), "description", void 0), p(_(r), "classification", void 0), p(_(r), "isImage", void 0), p(_(r), "isVideo", void 0), p(_(r), "uploadedFilename", void 0), p(_(r), "showLargeMessageDialog", void 0), p(_(r), "mimeType", void 0), p(_(r), "origin", void 0), p(_(r), "durationSecs", void 0), p(_(r), "waveform", void 0), p(_(r), "isThumbnail", void 0), p(_(r), "isRemix", void 0), p(_(r), "clip", void 0), r.item = e, 0 === e.platform) {
                r.id = null !== (o = e.id) && void 0 !== o ? o : e.uri;
                var n, r, o, i = (0, d.getFile)({
                    uri: e.uri,
                    overrideFilename: e.filename,
                    overrideType: e.mimeType
                });
                r.filename = i.filename, r.isImage = i.isImage, r.isVideo = i.isVideo, r.mimeType = i.type, r.origin = e.origin, r.durationSecs = e.durationSecs, r.waveform = e.waveform, r.isRemix = e.isRemix
            } else r.id = null !== (n = e.id) && void 0 !== n ? n : l().uniqueId("upload"), r.classification = f.classifyFile(e.file), r.isImage = "image" === r.classification, r.isVideo = "video" === r.classification, r.filename = e.file.name, r.mimeType = e.file.type;
            return r.isThumbnail = e.isThumbnail, r.clip = e.clip, r.uniqueId = (0, c.v4)(), r.showLargeMessageDialog = t, r.spoiler = !1, r.description = null, r
        }
        return r = u, o = [{
            key: "cancel",
            value: function() {}
        }, {
            key: "resetState",
            value: function() {
                return this
            }
        }], E(r.prototype, o), i && E(r, i), u
    }(u.EventEmitter)
}