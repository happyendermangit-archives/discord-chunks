function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addMetadataToStackFrames: function() {
            return s
        },
        stripMetadataFromStackFrames: function() {
            return o
        }
    }), n("222007");
    var r = n("103787");
    let i = new Map,
        a = new Set;

    function s(t, e) {
        try {
            e.exception.values.forEach(e => {
                if (e.stacktrace)
                    for (let o of e.stacktrace.frames || []) {
                        var n, s;
                        if (!o.filename) continue;
                        let e = (n = t, s = o.filename, ! function(t) {
                            if (r.GLOBAL_OBJ._sentryModuleMetadata)
                                for (let e of Object.keys(r.GLOBAL_OBJ._sentryModuleMetadata)) {
                                    let n = r.GLOBAL_OBJ._sentryModuleMetadata[e];
                                    if (a.has(e)) continue;
                                    a.add(e);
                                    let s = t(e);
                                    for (let t of s.reverse())
                                        if (t.filename) {
                                            i.set(t.filename, n);
                                            break
                                        }
                                }
                        }(n), i.get(s));
                        e && (o.module_metadata = e)
                    }
            })
        } catch (t) {}
    }

    function o(t) {
        try {
            t.exception.values.forEach(t => {
                if (t.stacktrace)
                    for (let e of t.stacktrace.frames || []) delete e.module_metadata
            })
        } catch (t) {}
    }
}