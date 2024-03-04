function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MultiBackendImpl: function() {
            return x
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("952162");

    function i(e, t, n) {
        (function(e, t) {
            if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
        })(e, t), t.set(e, n)
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e, t) {
        var n = c(e, t, "get");
        return function(e, t) {
            return t.get ? t.get.call(e) : t.value
        }(e, n)
    }

    function a(e, t, n) {
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
    var u = new WeakMap,
        d = new WeakMap,
        l = new WeakMap,
        f = new WeakMap,
        p = new WeakMap,
        h = new WeakMap,
        v = new WeakMap,
        g = new WeakMap,
        b = new WeakMap,
        m = new WeakMap,
        y = new WeakMap;
    class x {
        constructor(e, t, n) {
            if (i(this, u, {
                    writable: !0,
                    value: void 0
                }), i(this, d, {
                    writable: !0,
                    value: void 0
                }), i(this, l, {
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
                        let o = n.backend(e, t, n.options),
                            a = n.id,
                            c = !n.id && o && o.constructor;
                        if (c && (a = o.constructor.name), a) c && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                        else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx"));
                        if (s(this, l)[a]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), " (conflicts with: ").concat(JSON.stringify(s(this, l)[a]), ")"));
                        return {
                            id: a,
                            instance: o,
                            preview: null !== (r = n.preview) && void 0 !== r && r,
                            transition: n.transition,
                            skipDispatchOnTransition: null !== (i = n.skipDispatchOnTransition) && void 0 !== i && i
                        }
                    }
                }), o(this, "setup", () => {
                    if ("undefined" != typeof window) {
                        if (x.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                        x.isSetUp = !0, s(this, v).call(this, window), s(this, l)[s(this, u)].instance.setup()
                    }
                }), o(this, "teardown", () => {
                    "undefined" != typeof window && (x.isSetUp = !1, s(this, g).call(this, window), s(this, l)[s(this, u)].instance.teardown())
                }), o(this, "connectDragSource", (e, t, n) => s(this, y).call(this, "connectDragSource", e, t, n)), o(this, "connectDragPreview", (e, t, n) => s(this, y).call(this, "connectDragPreview", e, t, n)), o(this, "connectDropTarget", (e, t, n) => s(this, y).call(this, "connectDropTarget", e, t, n)), o(this, "profile", () => s(this, l)[s(this, u)].instance.profile()), o(this, "previewEnabled", () => s(this, l)[s(this, u)].preview), o(this, "previewsList", () => s(this, d)), o(this, "backendsList", () => s(this, f)), i(this, v, {
                    writable: !0,
                    value: e => {
                        s(this, f).forEach(t => {
                            t.transition && e.addEventListener(t.transition.event, s(this, b))
                        })
                    }
                }), i(this, g, {
                    writable: !0,
                    value: e => {
                        s(this, f).forEach(t => {
                            t.transition && e.removeEventListener(t.transition.event, s(this, b))
                        })
                    }
                }), i(this, b, {
                    writable: !0,
                    value: e => {
                        let t = s(this, u);
                        if (s(this, f).some(t => !!(t.id !== s(this, u) && t.transition && t.transition.check(e)) && (a(this, u, t.id), !0)), s(this, u) !== t) {
                            var n;
                            s(this, l)[t].instance.teardown(), Object.keys(s(this, p)).forEach(e => {
                                let t = s(this, p)[e];
                                t.unsubscribe(), t.unsubscribe = s(this, m).call(this, t.func, ...t.args)
                            }), s(this, d).backendChanged(this);
                            let r = s(this, l)[s(this, u)];
                            if (r.instance.setup(), r.skipDispatchOnTransition) return;
                            let i = e.constructor,
                                o = new i(e.type, e);
                            null === (n = e.target) || void 0 === n || n.dispatchEvent(o)
                        }
                    }
                }), i(this, m, {
                    writable: !0,
                    value: (e, t, n, r) => s(this, l)[s(this, u)].instance[e](t, n, r)
                }), i(this, y, {
                    writable: !0,
                    value: (e, t, n, r) => {
                        let i = "".concat(e, "_").concat(t),
                            o = s(this, m).call(this, e, t, n, r);
                        return s(this, p)[i] = {
                            func: e,
                            args: [t, n, r],
                            unsubscribe: o
                        }, () => {
                            s(this, p)[i].unsubscribe(), delete s(this, p)[i]
                        }
                    }
                }), !n || !n.backends || n.backends.length < 1) throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
            a(this, d, new r.PreviewListImpl), a(this, l, {}), a(this, f, []), n.backends.forEach(n => {
                let r = s(this, h).call(this, e, t, n);
                s(this, l)[r.id] = r, s(this, f).push(r)
            }), a(this, u, s(this, f)[0].id), a(this, p, {})
        }
    }
    o(x, "isSetUp", !1)
}