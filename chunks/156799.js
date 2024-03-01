function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HandlerRegistryImpl: function() {
            return f
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("900255"),
        a = n("714413"),
        i = n("820733"),
        o = n("101752"),
        s = n("910028"),
        c = n("891521");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e) {
        switch (e[0]) {
            case "S":
                return o.HandlerRole.SOURCE;
            case "T":
                return o.HandlerRole.TARGET;
            default:
                (0, r.invariant)(!1, "Cannot parse handler ID: ".concat(e))
        }
    }

    function p(e, t) {
        var n = e.entries(),
            r = !1;
        do {
            var a, i, o = n.next(),
                s = o.done;
            if ((a = o.value, i = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(a) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            a = !0, i = e
                        } finally {
                            try {
                                !r && null != s.return && s.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return n
                    }
                }(a, i) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                    }
                }(a, i) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[1] === t) return !0;
            r = !!s
        } while (!r);
        return !1
    }
    var f = function() {
        var e, t, n;

        function u(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = e
        }
        return e = u, t = [{
            key: "addSource",
            value: function(e, t) {
                (0, s.validateType)(e), (0, s.validateSourceContract)(t);
                var n = this.addHandler(o.HandlerRole.SOURCE, e, t);
                return this.store.dispatch((0, a.addSource)(n)), n
            }
        }, {
            key: "addTarget",
            value: function(e, t) {
                (0, s.validateType)(e, !0), (0, s.validateTargetContract)(t);
                var n = this.addHandler(o.HandlerRole.TARGET, e, t);
                return this.store.dispatch((0, a.addTarget)(n)), n
            }
        }, {
            key: "containsHandler",
            value: function(e) {
                return p(this.dragSources, e) || p(this.dropTargets, e)
            }
        }, {
            key: "getSource",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, r.invariant)(this.isSourceId(e), "Expected a valid source ID."), t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e)
            }
        }, {
            key: "getTarget",
            value: function(e) {
                return (0, r.invariant)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e)
            }
        }, {
            key: "getSourceType",
            value: function(e) {
                return (0, r.invariant)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e)
            }
        }, {
            key: "getTargetType",
            value: function(e) {
                return (0, r.invariant)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e)
            }
        }, {
            key: "isSourceId",
            value: function(e) {
                return d(e) === o.HandlerRole.SOURCE
            }
        }, {
            key: "isTargetId",
            value: function(e) {
                return d(e) === o.HandlerRole.TARGET
            }
        }, {
            key: "removeSource",
            value: function(e) {
                var t = this;
                (0, r.invariant)(this.getSource(e), "Expected an existing source."), this.store.dispatch((0, a.removeSource)(e)), (0, c.asap)(function() {
                    t.dragSources.delete(e), t.types.delete(e)
                })
            }
        }, {
            key: "removeTarget",
            value: function(e) {
                (0, r.invariant)(this.getTarget(e), "Expected an existing target."), this.store.dispatch((0, a.removeTarget)(e)), this.dropTargets.delete(e), this.types.delete(e)
            }
        }, {
            key: "pinSource",
            value: function(e) {
                var t = this.getSource(e);
                (0, r.invariant)(t, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = t
            }
        }, {
            key: "unpinSource",
            value: function() {
                (0, r.invariant)(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null
            }
        }, {
            key: "addHandler",
            value: function(e, t, n) {
                var r = function(e) {
                    var t = (0, i.getNextUniqueId)().toString();
                    switch (e) {
                        case o.HandlerRole.SOURCE:
                            return "S".concat(t);
                        case o.HandlerRole.TARGET:
                            return "T".concat(t);
                        default:
                            throw Error("Unknown Handler Role: ".concat(e))
                    }
                }(e);
                return this.types.set(r, t), e === o.HandlerRole.SOURCE ? this.dragSources.set(r, n) : e === o.HandlerRole.TARGET && this.dropTargets.set(r, n), r
            }
        }], l(e.prototype, t), n && l(e, n), u
    }()
}