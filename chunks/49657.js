function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        anyFileTooLarge: function() {
            return T
        },
        classifyFile: function() {
            return y
        },
        classifyFileName: function() {
            return I
        },
        getMaxRequestSize: function() {
            return v
        },
        makeFile: function() {
            return p
        },
        maxFileSize: function() {
            return O
        },
        sizeString: function() {
            return h
        },
        transformNativeFile: function() {
            return E
        },
        uploadSumTooLarge: function() {
            return S
        }
    });
    var r = n("119516"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("62747"),
        s = n("274591"),
        l = n("306912"),
        c = n("208454"),
        f = n("830721"),
        d = n("281767"),
        _ = n("868615");

    function E(e, t) {
        var n, r;
        return (n = e, null != (r = File) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r) ? e : p(e.data, e.filename, t)
    }

    function p(e, t, r) {
        var o = n("643907");
        if (null == t && (t = "unknown", "type" in e)) {
            var i = o.extension(e.type);
            i && (t += ".".concat(i))
        }
        return null == r && ("type" in e && (r = e.type), r = null != r ? r : o.lookup(t)), new File([e], t, {
            type: r
        })
    }
    var m = [{
        reType: /^image\/vnd.adobe.photoshop/,
        klass: "photoshop"
    }, {
        reType: /^image\/svg\+xml/,
        klass: "webcode"
    }, {
        reType: /^image\//,
        klass: "image"
    }, {
        reType: /^video\//,
        klass: "video"
    }, {
        reName: /\.pdf$/,
        klass: "acrobat"
    }, {
        reName: /\.ae/,
        klass: "ae"
    }, {
        reName: /\.sketch$/,
        klass: "sketch"
    }, {
        reName: /\.ai$/,
        klass: "ai"
    }, {
        reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/,
        klass: "archive"
    }, {
        reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
        klass: "code"
    }, {
        reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
        klass: "document"
    }, {
        reName: /\.(?:xls|xlsx|numbers|csv)$/,
        klass: "spreadsheet"
    }, {
        reName: /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/,
        klass: "webcode"
    }, {
        reName: /\.(?:mp3|ogg|wav|flac)$/,
        klass: "audio"
    }];

    function y(e) {
        return I(e.name, e.type)
    }

    function I(e, t) {
        e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : "";
        var n, r = a().find(m, function(n) {
            return null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e)
        });
        return null != r ? r.klass : "unknown"
    }

    function h(e) {
        return o().filesize(e)
    }

    function O(e) {
        var t = c.default.getCurrentUser();
        u.default.trackExposure({
            location: "de18ec_1"
        }), s.default.trackExposure({
            location: "de18ec_2"
        });
        var n = f.default.getUserMaxFileSize(t);
        if (null == e) return n;
        var r = l.default.getGuild(e);
        return Math.max(null != r ? _.BoostedGuildFeatures[r.premiumTier].limits.fileSize : d.MAX_ATTACHMENT_SIZE, n)
    }

    function T(e, t) {
        var n = O(t);
        return Array.from(e).some(function(e) {
            return e.size > n
        })
    }

    function S(e) {
        return function(e) {
            var t = 0,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    t += u.size
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            return t
        }(e) > v()
    }

    function v() {
        var e = c.default.getCurrentUser();
        return null != e && e.isStaff() ? 524288e3 : 524288e3
    }
}