function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NON_TOKEN_TYPE: function() {
            return a
        },
        Token: function() {
            return o
        },
        default: function() {
            return i
        }
    }), n("222007"), n("702976"), n("424973");
    let l = /.+/g,
        a = "NON_TOKEN";

    function r(e, t, n) {
        if (null == t) return null;
        for (let l = 0; l < t.length; l++) {
            let a;
            let r = t[l],
                s = u(e.match(r.regex), n);
            if (null != s) {
                let {
                    cache: e
                } = r;
                if (null != e && null != (a = e.get(s[0])) && ((a = new o(a)).start = s.index), null == a) {
                    if (a = new o(s, r.type), null != r.validator && !r.validator(a)) continue;
                    null != e && !(null == e ? void 0 : e.has(s[0])) && e.set(s[0], a)
                }
                return a
            }
        }
        return null
    }

    function u(e, t) {
        if (null == e) return null;
        let n = [...e];
        return n.index = t, n
    }
    class s {
        reset(e) {
            this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : a
        }
        addRule(e) {
            let t;
            let {
                type: n,
                follows: l,
                validator: a
            } = e, {
                regex: r
            } = e;
            if ("^" !== r.source.charAt(0) && (r = new RegExp("^".concat(r.source), r.flags)), null != a && (t = new Map), null == l) {
                this._rules.push({
                    regex: r,
                    type: n,
                    validator: a,
                    cache: t
                });
                return
            }
            l.forEach(e => {
                null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                    regex: r,
                    type: n,
                    validator: a,
                    cache: t
                })
            })
        }
        tokenize(e) {
            let t, n = e,
                a = "",
                r = 0,
                s = [];
            for (; n.length > 0;) {
                let e = this._getMatch(n, t, r + a.length);
                null != e ? (null != a && "" !== a && s.push(new o(u(a.match(l), r), this._nonTokenType)), t = e, s.push(e), r += t.length + a.length, n = n.substring(t.length), a = "") : (a += n[0], n = n.substring(1))
            }
            return null != a && "" !== a && s.push(new o(u(a.match(l), r), this._nonTokenType)), s
        }
        clearCache() {
            for (let e in this._rules.forEach(e => {
                    var t;
                    return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                }), this._followers) {
                let t = this._followers[e];
                t.forEach(e => {
                    var t;
                    return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                })
            }
        }
        _getMatch(e, t, n) {
            let l;
            let a = null != t ? t.type : null;
            return (null == t ? void 0 : t.end) === n && (l = r(e, this._followers[String(a)], n)), null == l && (l = r(e, this._rules, n)), l
        }
        constructor(e = [], t) {
            this._rules = [], this._followers = {}, this._nonTokenType = a, this.reset(t), e.forEach(e => this.addRule(e))
        }
    }
    class o {
        get end() {
            return this.start + this.length
        }
        get length() {
            return this.match[0].length
        }
        valueOf() {
            return this.match[0]
        }
        getFullMatch() {
            return this.match[0]
        }
        getMatch() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return this.match[e]
        }
        setData(e, t) {
            null == this._data && (this._data = new Map), this._data.set(e, t)
        }
        getData(e) {
            if (null != this._data) return this._data.get(e)
        }
        constructor(e, t) {
            if (e instanceof o) this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data);
            else if (null != e) {
                var n;
                this.match = [...e], this.start = "string" == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0, this.type = t
            } else this.match = [], this.start = 0, this.type = t
        }
    }
    s.NON_TOKEN_TYPE = a, s.Token = o;
    var i = s
}