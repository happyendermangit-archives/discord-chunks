function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addMetadataToStackFrames: function() {
            return o
        },
        stripMetadataFromStackFrames: function() {
            return s
        }
    });
    var r = n("648238");
    let i = new Map,
        a = new Set;

    function o(t, e) {
        try {
            e.exception.values.forEach(e => {
                if (e.stacktrace)
                    for (let s of e.stacktrace.frames || []) {
                        var n, o;
                        if (!s.filename) continue;
                        let e = (n = t, o = s.filename, ! function(t) {
                            if (r.GLOBAL_OBJ._sentryModuleMetadata)
                                for (let e of Object.keys(r.GLOBAL_OBJ._sentryModuleMetadata)) {
                                    let n = r.GLOBAL_OBJ._sentryModuleMetadata[e];
                                    if (!a.has(e)) {
                                        for (let r of (a.add(e), t(e).reverse()))
                                            if (r.filename) {
                                                i.set(r.filename, n);
                                                break
                                            }
                                    }
                                }
                        }(n), i.get(o));
                        e && (s.module_metadata = e)
                    }
            })
        } catch (t) {}
    }

    function s(t) {
        try {
            t.exception.values.forEach(t => {
                if (t.stacktrace)
                    for (let e of t.stacktrace.frames || []) delete e.module_metadata
            })
        } catch (t) {}
    }
}