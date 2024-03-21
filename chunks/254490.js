function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transformNativeFile: function() {
            return E
        },
        makeFile: function() {
            return h
        },
        classifyFile: function() {
            return m
        },
        classifyFileName: function() {
            return p
        },
        sizeString: function() {
            return S
        },
        maxFileSize: function() {
            return T
        },
        anyFileTooLarge: function() {
            return v
        },
        uploadSumTooLarge: function() {
            return I
        },
        getMaxRequestSize: function() {
            return A
        }
    }), n("222007");
    var i = n("477850"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("143068"),
        l = n("700031"),
        u = n("305961"),
        d = n("697218"),
        c = n("719923"),
        _ = n("49111"),
        f = n("646718");

    function E(e, t) {
        return e instanceof File ? e : h(e.data, e.filename, t)
    }

    function h(e, t, i) {
        let s = n("637139");
        if (null == t && (t = "unknown", "type" in e)) {
            let n = s.extension(e.type);
            n && (t += ".".concat(n))
        }
        return null == i && ("type" in e && (i = e.type), i = null != i ? i : s.lookup(t)), new File([e], t, {
            type: i
        })
    }
    let g = [{
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

    function m(e) {
        return p(e.name, e.type)
    }

    function p(e, t) {
        var n;
        e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : "";
        let i = a.find(g, n => null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e));
        return null != i ? i.klass : "unknown"
    }

    function S(e) {
        return s.filesize(e)
    }

    function T(e) {
        let t = d.default.getCurrentUser();
        o.default.trackExposure({
            location: "de18ec_1"
        }), l.default.trackExposure({
            location: "de18ec_2"
        });
        let n = c.default.getUserMaxFileSize(t);
        if (null == e) return n;
        let i = u.default.getGuild(e),
            s = null != i ? f.BoostedGuildFeatures[i.premiumTier].limits.fileSize : _.MAX_ATTACHMENT_SIZE;
        return Math.max(s, n)
    }

    function v(e, t) {
        let n = T(t);
        return Array.from(e).some(e => e.size > n)
    }

    function I(e) {
        return function(e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t
        }(e) > A()
    }

    function A() {
        let e = d.default.getCurrentUser();
        return null != e && e.isStaff() ? 524288e3 : 524288e3
    }
}