function(e, t) {
    function n(e, t, n, r) {
        var a = [],
            o = {};
        return function s(u) {
            o[u] = !0, a.push(u), e[u].forEach(function(e) {
                if (o[e]) {
                    if (a.indexOf(e) >= 0 && (a.push(e), !r)) throw new i(a)
                } else s(e)
            }), a.pop(), (!t || 0 === e[u].length) && -1 === n.indexOf(u) && n.push(u)
        }
    }
    var r = t.DepGraph = function(e) {
        this.nodes = {}, this.outgoingEdges = {}, this.incomingEdges = {}, this.circular = e && !!e.circular
    };
    r.prototype = {
        size: function() {
            return Object.keys(this.nodes).length
        },
        addNode: function(e, t) {
            !this.hasNode(e) && (2 == arguments.length ? this.nodes[e] = t : this.nodes[e] = e, this.outgoingEdges[e] = [], this.incomingEdges[e] = [])
        },
        removeNode: function(e) {
            this.hasNode(e) && (delete this.nodes[e], delete this.outgoingEdges[e], delete this.incomingEdges[e], [this.incomingEdges, this.outgoingEdges].forEach(function(t) {
                Object.keys(t).forEach(function(n) {
                    var r = t[n].indexOf(e);
                    r >= 0 && t[n].splice(r, 1)
                }, this)
            }))
        },
        hasNode: function(e) {
            return this.nodes.hasOwnProperty(e)
        },
        getNodeData: function(e) {
            if (this.hasNode(e)) return this.nodes[e];
            throw Error("Node does not exist: " + e)
        },
        setNodeData: function(e, t) {
            if (this.hasNode(e)) this.nodes[e] = t;
            else throw Error("Node does not exist: " + e)
        },
        addDependency: function(e, t) {
            if (!this.hasNode(e)) throw Error("Node does not exist: " + e);
            if (!this.hasNode(t)) throw Error("Node does not exist: " + t);
            return -1 === this.outgoingEdges[e].indexOf(t) && this.outgoingEdges[e].push(t), -1 === this.incomingEdges[t].indexOf(e) && this.incomingEdges[t].push(e), !0
        },
        removeDependency: function(e, t) {
            var n;
            this.hasNode(e) && (n = this.outgoingEdges[e].indexOf(t)) >= 0 && this.outgoingEdges[e].splice(n, 1), this.hasNode(t) && (n = this.incomingEdges[t].indexOf(e)) >= 0 && this.incomingEdges[t].splice(n, 1)
        },
        clone: function() {
            var e = this,
                t = new r;
            return Object.keys(e.nodes).forEach(function(n) {
                t.nodes[n] = e.nodes[n], t.outgoingEdges[n] = e.outgoingEdges[n].slice(0), t.incomingEdges[n] = e.incomingEdges[n].slice(0)
            }), t
        },
        dependenciesOf: function(e, t) {
            if (this.hasNode(e)) {
                var r = [];
                n(this.outgoingEdges, t, r, this.circular)(e);
                var i = r.indexOf(e);
                return i >= 0 && r.splice(i, 1), r
            }
            throw Error("Node does not exist: " + e)
        },
        dependantsOf: function(e, t) {
            if (this.hasNode(e)) {
                var r = [];
                n(this.incomingEdges, t, r, this.circular)(e);
                var i = r.indexOf(e);
                return i >= 0 && r.splice(i, 1), r
            }
            throw Error("Node does not exist: " + e)
        },
        overallOrder: function(e) {
            var t = this,
                r = [],
                i = Object.keys(this.nodes);
            if (0 === i.length) return r;
            var a = n(this.outgoingEdges, !1, [], this.circular);
            i.forEach(function(e) {
                a(e)
            });
            var o = n(this.outgoingEdges, e, r, this.circular);
            return i.filter(function(e) {
                return 0 === t.incomingEdges[e].length
            }).forEach(function(e) {
                o(e)
            }), r
        }
    };
    var i = t.DepGraphCycleError = function(e) {
        var t = Error("Dependency Cycle Found: " + e.join(" -> "));
        return t.cyclePath = e, Object.setPrototypeOf(t, Object.getPrototypeOf(this)), Error.captureStackTrace && Error.captureStackTrace(t, i), t
    };
    i.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), Object.setPrototypeOf(i, Error)
}