function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        anyFileTooLarge: function() {
            return N
        },
        classifyFile: function() {
            return S
        },
        classifyFileName: function() {
            return h
        },
        getMaxRequestSize: function() {
            return p
        },
        makeFile: function() {
            return T
        },
        maxFileSize: function() {
            return m
        },
        sizeString: function() {
            return A
        },
        transformNativeFile: function() {
            return I
        },
        uploadSumTooLarge: function() {
            return O
        }
    }), n("47120");
    var i = n("119516"),
        r = n.n(i),
        s = n("392711"),
        a = n.n(s),
        o = n("206744"),
        l = n("948350"),
        u = n("430824"),
        d = n("594174"),
        _ = n("74538"),
        c = n("981631"),
        E = n("474936");

    function I(e, t) {
        return e instanceof File ? e : T(e.data, e.filename, t)
    }

    function T(e, t, i) {
        let r = n("643907");
        if (null == t && (t = "unknown", "type" in e)) {
            let n = r.extension(e.type);
            n && (t += ".".concat(n))
        }
        return null == i && ("type" in e && (i = e.type), i = null != i ? i : r.lookup(t)), new File([e], t, {
            type: i
        })
    }
    let f = [{
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

    function S(e) {
        return h(e.name, e.type)
    }

    function h(e, t) {
        var n;
        e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : "";
        let i = a().find(f, n => null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e));
        return null != i ? i.klass : "unknown"
    }

    function A(e) {
        return r().filesize(e)
    }

    function m(e) {
        let t = d.default.getCurrentUser();
        o.default.trackExposure({
            location: "de18ec_1"
        }), l.default.trackExposure({
            location: "de18ec_2"
        });
        let n = _.default.getUserMaxFileSize(t);
        if (null == e) return n;
        let i = u.default.getGuild(e);
        return Math.max(null != i ? E.BoostedGuildFeatures[i.premiumTier].limits.fileSize : c.MAX_ATTACHMENT_SIZE, n)
    }

    function N(e, t) {
        let n = m(t);
        return Array.from(e).some(e => e.size > n)
    }

    function O(e) {
        return function(e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t
        }(e) > p()
    }

    function p() {
        let e = d.default.getCurrentUser();
        return null != e && e.isStaff() ? 524288e3 : 524288e3
    }
}