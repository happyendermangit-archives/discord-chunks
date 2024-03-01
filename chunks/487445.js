function(e, t, n) {
    function r(e, t, n, r) {
        var a = [],
            i = {};
        return function s(u) {
            i[u] = !0, a.push(u), e[u].forEach(function(e) {
                if (i[e]) {
                    if (a.indexOf(e) >= 0 && (a.push(e), !r)) throw new o(a)
                } else s(e)
            }), a.pop(), (!t || 0 === e[u].length) && -1 === n.indexOf(u) && n.push(u)
        }
    }
    n("424973"), n("70102"), n("854508");
    var a = t.DepGraph = function(e) {
        this.nodes = {}, this.outgoingEdges = {}, this.incomingEdges = {}, this.circular = e && !!e.circular
    };
    a.prototype = {
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
                t = new a;
            return Object.keys(e.nodes).forEach(function(n) {
                t.nodes[n] = e.nodes[n], t.outgoingEdges[n] = e.outgoingEdges[n].slice(0), t.incomingEdges[n] = e.incomingEdges[n].slice(0)
            }), t
        },
        dependenciesOf: function(e, t) {
            if (this.hasNode(e)) {
                var n = [];
                r(this.outgoingEdges, t, n, this.circular)(e);
                var a = n.indexOf(e);
                return a >= 0 && n.splice(a, 1), n
            }
            throw Error("Node does not exist: " + e)
        },
        dependantsOf: function(e, t) {
            if (this.hasNode(e)) {
                var n = [];
                r(this.incomingEdges, t, n, this.circular)(e);
                var a = n.indexOf(e);
                return a >= 0 && n.splice(a, 1), n
            }
            throw Error("Node does not exist: " + e)
        },
        overallOrder: function(e) {
            var t = this,
                n = [],
                a = Object.keys(this.nodes);
            if (0 === a.length) return n;
            var o = r(this.outgoingEdges, !1, [], this.circular);
            a.forEach(function(e) {
                o(e)
            });
            var i = r(this.outgoingEdges, e, n, this.circular);
            return a.filter(function(e) {
                return 0 === t.incomingEdges[e].length
            }).forEach(function(e) {
                i(e)
            }), n
        }
    };
    var o = t.DepGraphCycleError = function(e) {
        var t = Error("Dependency Cycle Found: " + e.join(" -> "));
        return t.cyclePath = e, Object.setPrototypeOf(t, Object.getPrototypeOf(this)), Error.captureStackTrace && Error.captureStackTrace(t, o), t
    };
    o.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), Object.setPrototypeOf(o, Error)
}