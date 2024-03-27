function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Cache: function() {
            return o
        }
    });
    var r = n("135891"),
        i = n("695170"),
        a = n("686942"),
        o = function() {
            function e() {
                this.all = !1, this.before = [], this.after = [], this.between = []
            }
            return e.prototype._cacheAdd = function(e, t, n) {
                t && (t = t instanceof Date ? (0, i.clone)(t) : (0, i.cloneDates)(t)), "all" === e ? this.all = t : (n._value = t, this[e].push(n))
            }, e.prototype._cacheGet = function(e, t) {
                var n = !1,
                    o = t ? Object.keys(t) : [],
                    s = this[e];
                if ("all" === e) n = this.all;
                else if ((0, a.isArray)(s))
                    for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        if (!(o.length && function(e) {
                                for (var n = 0; n < o.length; n++) {
                                    var r = o[n];
                                    if (! function(e, t) {
                                            if (Array.isArray(e)) return !!Array.isArray(t) && e.length === t.length && e.every(function(e, n) {
                                                return e.getTime() === t[n].getTime()
                                            });
                                            return e instanceof Date ? t instanceof Date && e.getTime() === t.getTime() : e === t
                                        }(t[r], e[r])) return !0
                                }
                                return !1
                            }(c))) {
                            n = c._value;
                            break
                        }
                    }
                if (!n && this.all) {
                    for (var l = new r.default(e, t), u = 0; u < this.all.length && l.accept(this.all[u]); u++);
                    n = l.getValue(), this._cacheAdd(e, n, t)
                }
                return (0, a.isArray)(n) ? (0, i.cloneDates)(n) : n instanceof Date ? (0, i.clone)(n) : n
            }, e
        }()
}