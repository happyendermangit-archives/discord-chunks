function(t, e, s) {
    "use strict";

    function r(t) {
        if (this._capacity = c(t), this._length = 0, this._front = 0, this._makeCapacity(), i(t)) {
            for (var e = t.length, s = 0; s < e; ++s) this[s] = t[s];
            this._length = e
        }
    }
    s("424973"), s("843762"), s("274635"), s("70102"), r.prototype.toArray = function() {
        for (var t = this._length, e = Array(t), s = this._front, r = this._capacity, i = 0; i < t; ++i) e[i] = this[s + i & r - 1];
        return e
    }, r.prototype.push = function(t) {
        var e = arguments.length,
            s = this._length;
        if (e > 1) {
            var r = this._capacity;
            if (s + e > r) {
                for (var i = 0; i < e; ++i) {
                    this._checkCapacity(s + 1);
                    var n = this._front + s & this._capacity - 1;
                    this[n] = arguments[i], s++, this._length = s
                }
                return s
            }
            for (var n = this._front, i = 0; i < e; ++i) this[n + s & r - 1] = arguments[i], n++;
            return this._length = s + e, s + e
        }
        if (0 === e) return s;
        this._checkCapacity(s + 1);
        var i = this._front + s & this._capacity - 1;
        return this[i] = t, this._length = s + 1, s + 1
    }, r.prototype.pop = function() {
        var t = this._length;
        if (0 !== t) {
            var e = this._front + t - 1 & this._capacity - 1,
                s = this[e];
            return this[e] = void 0, this._length = t - 1, s
        }
    }, r.prototype.shift = function() {
        var t = this._length;
        if (0 !== t) {
            var e = this._front,
                s = this[e];
            return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length = t - 1, s
        }
    }, r.prototype.unshift = function(t) {
        var e = this._length,
            s = arguments.length;
        if (s > 1) {
            var r = this._capacity;
            if (e + s > r) {
                for (var i = s - 1; i >= 0; i--) {
                    this._checkCapacity(e + 1);
                    var r = this._capacity,
                        n = (this._front - 1 & r - 1 ^ r) - r;
                    this[n] = arguments[i], e++, this._length = e, this._front = n
                }
                return e
            }
            for (var c = this._front, i = s - 1; i >= 0; i--) {
                var n = (c - 1 & r - 1 ^ r) - r;
                this[n] = arguments[i], c = n
            }
            return this._front = c, this._length = e + s, e + s
        }
        if (0 === s) return e;
        this._checkCapacity(e + 1);
        var r = this._capacity,
            i = (this._front - 1 & r - 1 ^ r) - r;
        return this[i] = t, this._length = e + 1, this._front = i, e + 1
    }, r.prototype.peekBack = function() {
        var t = this._length;
        if (0 !== t) return this[this._front + t - 1 & this._capacity - 1]
    }, r.prototype.peekFront = function() {
        if (0 !== this._length) return this[this._front]
    }, r.prototype.get = function(t) {
        var e = t;
        if (e === (0 | e)) {
            var s = this._length;
            if (e < 0 && (e += s), !(e < 0) && !(e >= s)) return this[this._front + e & this._capacity - 1]
        }
    }, r.prototype.isEmpty = function() {
        return 0 === this._length
    }, r.prototype.clear = function() {
        this._length = 0, this._front = 0, this._makeCapacity()
    }, r.prototype.toString = function() {
        return this.toArray().toString()
    }, r.prototype.valueOf = r.prototype.toString, r.prototype.removeFront = r.prototype.shift, r.prototype.removeBack = r.prototype.pop, r.prototype.insertFront = r.prototype.unshift, r.prototype.insertBack = r.prototype.push, r.prototype.enqueue = r.prototype.push, r.prototype.dequeue = r.prototype.shift, r.prototype.toJSON = r.prototype.toArray, Object.defineProperty(r.prototype, "length", {
        get: function() {
            return this._length
        },
        set: function() {
            throw RangeError("")
        }
    }), r.prototype._makeCapacity = function() {
        for (var t = this._capacity, e = 0; e < t; ++e) this[e] = void 0
    }, r.prototype._checkCapacity = function(t) {
        this._capacity < t && this._resizeTo(c(1.5 * this._capacity + 16))
    }, r.prototype._resizeTo = function(t) {
        var e = this._front,
            s = this._capacity,
            r = Array(s),
            i = this._length;
        if (n(this, 0, r, 0, s), this._capacity = t, this._makeCapacity(), this._front = 0, e + i <= s) n(r, e, this, 0, i);
        else {
            var c = i - (e + i & s - 1);
            n(r, e, this, 0, c), n(r, 0, this, c, i - c)
        }
    };
    var i = Array.isArray;

    function n(t, e, s, r, i) {
        for (var n = 0; n < i; ++n) s[n + r] = t[n + e]
    }

    function c(t) {
        var e;
        if ("number" != typeof t) {
            if (!i(t)) return 16;
            t = t.length
        }
        return e = (Math.min(Math.max(16, t), 1073741824) >>> 0) - 1, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, (e |= e >> 16) + 1
    }
    t.exports = r
}