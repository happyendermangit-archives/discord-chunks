function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MultiBackendImpl: function() {
            return x
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("952162");

    function a(e, t, n) {
        (function(e, t) {
            if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
        })(e, t), t.set(e, n)
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e, t) {
        var n = c(e, t, "get");
        return function(e, t) {
            return t.get ? t.get.call(e) : t.value
        }(e, n)
    }

    function s(e, t, n) {
        var r = c(e, t, "set");
        return function(e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
                if (!t.writable) throw TypeError("attempted to set read only private field");
                t.value = n
            }
        }(e, r, n), n
    }

    function c(e, t, n) {
        if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
    }
    var l = new WeakMap,
        u = new WeakMap,
        d = new WeakMap,
        p = new WeakMap,
        f = new WeakMap,
        m = new WeakMap,
        h = new WeakMap,
        v = new WeakMap,
        g = new WeakMap,
        y = new WeakMap,
        b = new WeakMap;
    class x {
        constructor(e, t, n) {
            if (a(this, l, {
                    writable: !0,
                    value: void 0
                }), a(this, u, {
                    writable: !0,
                    value: void 0
                }), a(this, d, {
                    writable: !0,
                    value: void 0
                }), a(this, p, {
                    writable: !0,
                    value: void 0
                }), a(this, f, {
                    writable: !0,
                    value: void 0
                }), a(this, m, {
                    writable: !0,
                    value: (e, t, n) => {
                        var r, a;
                        if (!n.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)));
                        let i = n.backend(e, t, n.options),
                            s = n.id,
                            c = !n.id && i && i.constructor;
                        if (c && (s = i.constructor.name), s) c && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                        else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx"));
                        if (o(this, d)[s]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), " (conflicts with: ").concat(JSON.stringify(o(this, d)[s]), ")"));
                        return {
                            id: s,
                            instance: i,
                            preview: null !== (r = n.preview) && void 0 !== r && r,
                            transition: n.transition,
                            skipDispatchOnTransition: null !== (a = n.skipDispatchOnTransition) && void 0 !== a && a
                        }
                    }
                }), i(this, "setup", () => {
                    if ("undefined" != typeof window) {
                        if (x.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                        x.isSetUp = !0, o(this, h).call(this, window), o(this, d)[o(this, l)].instance.setup()
                    }
                }), i(this, "teardown", () => {
                    "undefined" != typeof window && (x.isSetUp = !1, o(this, v).call(this, window), o(this, d)[o(this, l)].instance.teardown())
                }), i(this, "connectDragSource", (e, t, n) => o(this, b).call(this, "connectDragSource", e, t, n)), i(this, "connectDragPreview", (e, t, n) => o(this, b).call(this, "connectDragPreview", e, t, n)), i(this, "connectDropTarget", (e, t, n) => o(this, b).call(this, "connectDropTarget", e, t, n)), i(this, "profile", () => o(this, d)[o(this, l)].instance.profile()), i(this, "previewEnabled", () => o(this, d)[o(this, l)].preview), i(this, "previewsList", () => o(this, u)), i(this, "backendsList", () => o(this, p)), a(this, h, {
                    writable: !0,
                    value: e => {
                        o(this, p).forEach(t => {
                            t.transition && e.addEventListener(t.transition.event, o(this, g))
                        })
                    }
                }), a(this, v, {
                    writable: !0,
                    value: e => {
                        o(this, p).forEach(t => {
                            t.transition && e.removeEventListener(t.transition.event, o(this, g))
                        })
                    }
                }), a(this, g, {
                    writable: !0,
                    value: e => {
                        let t = o(this, l);
                        if (o(this, p).some(t => !!(t.id !== o(this, l) && t.transition && t.transition.check(e)) && (s(this, l, t.id), !0)), o(this, l) !== t) {
                            var n;
                            o(this, d)[t].instance.teardown(), Object.keys(o(this, f)).forEach(e => {
                                let t = o(this, f)[e];
                                t.unsubscribe(), t.unsubscribe = o(this, y).call(this, t.func, ...t.args)
                            }), o(this, u).backendChanged(this);
                            let r = o(this, d)[o(this, l)];
                            if (r.instance.setup(), r.skipDispatchOnTransition) return;
                            let a = e.constructor,
                                i = new a(e.type, e);
                            null === (n = e.target) || void 0 === n || n.dispatchEvent(i)
                        }
                    }
                }), a(this, y, {
                    writable: !0,
                    value: (e, t, n, r) => o(this, d)[o(this, l)].instance[e](t, n, r)
                }), a(this, b, {
                    writable: !0,
                    value: (e, t, n, r) => {
                        let a = "".concat(e, "_").concat(t),
                            i = o(this, y).call(this, e, t, n, r);
                        return o(this, f)[a] = {
                            func: e,
                            args: [t, n, r],
                            unsubscribe: i
                        }, () => {
                            o(this, f)[a].unsubscribe(), delete o(this, f)[a]
                        }
                    }
                }), !n || !n.backends || n.backends.length < 1) throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
            s(this, u, new r.PreviewListImpl), s(this, d, {}), s(this, p, []), n.backends.forEach(n => {
                let r = o(this, m).call(this, e, t, n);
                o(this, d)[r.id] = r, o(this, p).push(r)
            }), s(this, l, o(this, p)[0].id), s(this, f, {})
        }
    }
    i(x, "isSetUp", !1)
}