function(e, t, n) {
    n("70102"), n("222007");
    var r = Object.prototype.hasOwnProperty;

    function i(e) {
        if (!(this instanceof i)) throw TypeError("Constructor PseudoMap requires 'new'");
        if (this.clear(), e) {
            if (e instanceof i || "function" == typeof Map && e instanceof Map) e.forEach(function(e, t) {
                this.set(t, e)
            }, this);
            else if (Array.isArray(e)) e.forEach(function(e) {
                this.set(e[0], e[1])
            }, this);
            else throw TypeError("invalid argument")
        }
    }

    function o(e, t) {
        return e === t || e != e && t != t
    }

    function s(e, t, n) {
        this.key = e, this.value = t, this._index = n
    }

    function a(e, t) {
        for (var n = 0, i = "_" + t, s = i; r.call(e, s); s = i + n++)
            if (o(e[s].key, t)) return e[s]
    }
    e.exports = i, i.prototype.forEach = function(e, t) {
        t = t || this, Object.keys(this._data).forEach(function(n) {
            "size" !== n && e.call(t, this._data[n].value, this._data[n].key)
        }, this)
    }, i.prototype.has = function(e) {
        return !!a(this._data, e)
    }, i.prototype.get = function(e) {
        var t = a(this._data, e);
        return t && t.value
    }, i.prototype.set = function(e, t) {
        (function(e, t, n) {
            for (var i = 0, a = "_" + t, c = a; r.call(e, c); c = a + i++)
                if (o(e[c].key, t)) {
                    e[c].value = n;
                    return
                } e.size++, e[c] = new s(t, n, c)
        })(this._data, e, t)
    }, i.prototype.delete = function(e) {
        var t = a(this._data, e);
        t && (delete this._data[t._index], this._data.size--)
    }, i.prototype.clear = function() {
        var e = Object.create(null);
        e.size = 0, Object.defineProperty(this, "_data", {
            value: e,
            enumerable: !1,
            configurable: !0,
            writable: !1
        })
    }, Object.defineProperty(i.prototype, "size", {
        get: function() {
            return this._data.size
        },
        set: function(e) {},
        enumerable: !0,
        configurable: !0
    }), i.prototype.values = i.prototype.keys = i.prototype.entries = function() {
        throw Error("iterators are not implemented in this version")
    }
}