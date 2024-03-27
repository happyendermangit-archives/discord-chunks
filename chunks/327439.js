function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MultiBackendImpl: function() {
            return y
        }
    });
    var r = n("313694");

    function i(e, t, n) {
        (function(e, t) {
            if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
        })(e, t), t.set(e, n)
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e, t) {
        var n = u(e, t, "get");
        return function(e, t) {
            return t.get ? t.get.call(e) : t.value
        }(e, n)
    }

    function s(e, t, n) {
        var r = u(e, t, "set");
        return function(e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
                if (!t.writable) throw TypeError("attempted to set read only private field");
                t.value = n
            }
        }(e, r, n), n
    }

    function u(e, t, n) {
        if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
    }
    var c = new WeakMap,
        l = new WeakMap,
        d = new WeakMap,
        f = new WeakMap,
        p = new WeakMap,
        h = new WeakMap,
        m = new WeakMap,
        g = new WeakMap,
        _ = new WeakMap,
        b = new WeakMap,
        v = new WeakMap;
    class y {
        constructor(e, t, n) {
            if (i(this, c, {
                    writable: !0,
                    value: void 0
                }), i(this, l, {
                    writable: !0,
                    value: void 0
                }), i(this, d, {
                    writable: !0,
                    value: void 0
                }), i(this, f, {
                    writable: !0,
                    value: void 0
                }), i(this, p, {
                    writable: !0,
                    value: void 0
                }), i(this, h, {
                    writable: !0,
                    value: (e, t, n) => {
                        var r, i;
                        if (!n.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)));
                        let a = n.backend(e, t, n.options),
                            s = n.id,
                            u = !n.id && a && a.constructor;
                        if (u && (s = a.constructor.name), s) u && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                        else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx"));
                        if (o(this, d)[s]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), " (conflicts with: ").concat(JSON.stringify(o(this, d)[s]), ")"));
                        return {
                            id: s,
                            instance: a,
                            preview: null !== (r = n.preview) && void 0 !== r && r,
                            transition: n.transition,
                            skipDispatchOnTransition: null !== (i = n.skipDispatchOnTransition) && void 0 !== i && i
                        }
                    }
                }), a(this, "setup", () => {
                    if ("undefined" != typeof window) {
                        if (y.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                        y.isSetUp = !0, o(this, m).call(this, window), o(this, d)[o(this, c)].instance.setup()
                    }
                }), a(this, "teardown", () => {
                    "undefined" != typeof window && (y.isSetUp = !1, o(this, g).call(this, window), o(this, d)[o(this, c)].instance.teardown())
                }), a(this, "connectDragSource", (e, t, n) => o(this, v).call(this, "connectDragSource", e, t, n)), a(this, "connectDragPreview", (e, t, n) => o(this, v).call(this, "connectDragPreview", e, t, n)), a(this, "connectDropTarget", (e, t, n) => o(this, v).call(this, "connectDropTarget", e, t, n)), a(this, "profile", () => o(this, d)[o(this, c)].instance.profile()), a(this, "previewEnabled", () => o(this, d)[o(this, c)].preview), a(this, "previewsList", () => o(this, l)), a(this, "backendsList", () => o(this, f)), i(this, m, {
                    writable: !0,
                    value: e => {
                        o(this, f).forEach(t => {
                            t.transition && e.addEventListener(t.transition.event, o(this, _))
                        })
                    }
                }), i(this, g, {
                    writable: !0,
                    value: e => {
                        o(this, f).forEach(t => {
                            t.transition && e.removeEventListener(t.transition.event, o(this, _))
                        })
                    }
                }), i(this, _, {
                    writable: !0,
                    value: e => {
                        let t = o(this, c);
                        if (o(this, f).some(t => !!(t.id !== o(this, c) && t.transition && t.transition.check(e)) && (s(this, c, t.id), !0)), o(this, c) !== t) {
                            var n;
                            o(this, d)[t].instance.teardown(), Object.keys(o(this, p)).forEach(e => {
                                let t = o(this, p)[e];
                                t.unsubscribe(), t.unsubscribe = o(this, b).call(this, t.func, ...t.args)
                            }), o(this, l).backendChanged(this);
                            let r = o(this, d)[o(this, c)];
                            if (r.instance.setup(), r.skipDispatchOnTransition) return;
                            let i = new e.constructor(e.type, e);
                            null === (n = e.target) || void 0 === n || n.dispatchEvent(i)
                        }
                    }
                }), i(this, b, {
                    writable: !0,
                    value: (e, t, n, r) => o(this, d)[o(this, c)].instance[e](t, n, r)
                }), i(this, v, {
                    writable: !0,
                    value: (e, t, n, r) => {
                        let i = "".concat(e, "_").concat(t),
                            a = o(this, b).call(this, e, t, n, r);
                        return o(this, p)[i] = {
                            func: e,
                            args: [t, n, r],
                            unsubscribe: a
                        }, () => {
                            o(this, p)[i].unsubscribe(), delete o(this, p)[i]
                        }
                    }
                }), !n || !n.backends || n.backends.length < 1) throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
            s(this, l, new r.PreviewListImpl), s(this, d, {}), s(this, f, []), n.backends.forEach(n => {
                let r = o(this, h).call(this, e, t, n);
                o(this, d)[r.id] = r, o(this, f).push(r)
            }), s(this, c, o(this, f)[0].id), s(this, p, {})
        }
    }
    a(y, "isSetUp", !1)
}