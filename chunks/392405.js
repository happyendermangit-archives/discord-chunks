function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        prepareEvent: function() {
            return o
        }
    });
    var r = n("648238"),
        i = n("28434"),
        a = n("703498");

    function o(t, e, n, o) {
        let {
            normalizeDepth: u = 3,
            normalizeMaxBreadth: l = 1e3
        } = t, c = {
            ...e,
            event_id: e.event_id || n.event_id || (0, r.uuid4)(),
            timestamp: e.timestamp || (0, r.dateTimestampInSeconds)()
        }, d = n.integrations || t.integrations.map(t => t.name);
        (function(t, e) {
            let {
                environment: n,
                release: a,
                dist: o,
                maxValueLength: s = 250
            } = e;
            !("environment" in t) && (t.environment = "environment" in e ? n : i.DEFAULT_ENVIRONMENT), void 0 === t.release && void 0 !== a && (t.release = a), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = (0, r.truncate)(t.message, s));
            let u = t.exception && t.exception.values && t.exception.values[0];
            u && u.value && (u.value = (0, r.truncate)(u.value, s));
            let l = t.request;
            l && l.url && (l.url = (0, r.truncate)(l.url, s))
        })(c, t),
        function(t, e) {
            e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
        }(c, d), void 0 === e.type && function(t, e) {
            let n;
            let i = r.GLOBAL_OBJ._sentryDebugIds;
            if (!i) return;
            let a = s.get(e);
            a ? n = a : (n = new Map, s.set(e, n));
            let o = Object.keys(i).reduce((t, r) => {
                let a;
                let o = n.get(r);
                o ? a = o : (a = e(r), n.set(r, a));
                for (let e = a.length - 1; e >= 0; e--) {
                    let n = a[e];
                    if (n.filename) {
                        t[n.filename] = i[r];
                        break
                    }
                }
                return t
            }, {});
            try {
                t.exception.values.forEach(t => {
                    t.stacktrace.frames.forEach(t => {
                        t.filename && (t.debug_id = o[t.filename])
                    })
                })
            } catch (t) {}
        }(c, t.stackParser);
        let f = o;
        n.captureContext && (f = a.Scope.clone(f).update(n.captureContext));
        let p = (0, r.resolvedSyncPromise)(c);
        if (f) {
            if (f.getAttachments) {
                let t = [...n.attachments || [], ...f.getAttachments()];
                t.length && (n.attachments = t)
            }
            p = f.applyToEvent(c, n)
        }
        return p.then(t => (t && function(t) {
            let e = {};
            try {
                t.exception.values.forEach(t => {
                    t.stacktrace.frames.forEach(t => {
                        t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                    })
                })
            } catch (t) {}
            if (0 === Object.keys(e).length) return;
            t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
            let n = t.debug_meta.images;
            Object.keys(e).forEach(t => {
                n.push({
                    type: "sourcemap",
                    code_file: t,
                    debug_id: e[t]
                })
            })
        }(t), "number" == typeof u && u > 0) ? function(t, e, n) {
            if (!t) return null;
            let i = {
                ...t,
                ...t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(t => ({
                        ...t,
                        ...t.data && {
                            data: (0, r.normalize)(t.data, e, n)
                        }
                    }))
                },
                ...t.user && {
                    user: (0, r.normalize)(t.user, e, n)
                },
                ...t.contexts && {
                    contexts: (0, r.normalize)(t.contexts, e, n)
                },
                ...t.extra && {
                    extra: (0, r.normalize)(t.extra, e, n)
                }
            };
            return t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = (0, r.normalize)(t.contexts.trace.data, e, n))), t.spans && (i.spans = t.spans.map(t => (t.data && (t.data = (0, r.normalize)(t.data, e, n)), t))), i
        }(t, u, l) : t)
    }
    let s = new WeakMap
}