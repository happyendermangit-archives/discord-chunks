function(e, t, n) {
    "use strict";
    let r = n("761655").Reporter,
        i = n("873994").EncoderBuffer,
        a = n("873994").DecoderBuffer,
        o = n("21841"),
        s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
        u = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);

    function c(e, t, n) {
        let r = {};
        this._baseState = r, r.name = n, r.enc = e, r.parent = t || null, r.children = null, r.tag = null, r.args = null, r.reverseArgs = null, r.choice = null, r.optional = !1, r.any = !1, r.obj = !1, r.use = null, r.useDecoder = null, r.key = null, r.default = null, r.explicit = null, r.implicit = null, r.contains = null, !r.parent && (r.children = [], this._wrap())
    }
    e.exports = c;
    let l = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    c.prototype.clone = function() {
        let e = this._baseState,
            t = {};
        l.forEach(function(n) {
            t[n] = e[n]
        });
        let n = new this.constructor(t.parent);
        return n._baseState = t, n
    }, c.prototype._wrap = function() {
        let e = this._baseState;
        u.forEach(function(t) {
            this[t] = function() {
                let n = new this.constructor(this);
                return e.children.push(n), n[t].apply(n, arguments)
            }
        }, this)
    }, c.prototype._init = function(e) {
        let t = this._baseState;
        o(null === t.parent), e.call(this), t.children = t.children.filter(function(e) {
            return e._baseState.parent === this
        }, this), o.equal(t.children.length, 1, "Root node can have only one child")
    }, c.prototype._useArgs = function(e) {
        let t = this._baseState,
            n = e.filter(function(e) {
                return e instanceof this.constructor
            }, this);
        e = e.filter(function(e) {
            return !(e instanceof this.constructor)
        }, this), 0 !== n.length && (o(null === t.children), t.children = n, n.forEach(function(e) {
            e._baseState.parent = this
        }, this)), 0 !== e.length && (o(null === t.args), t.args = e, t.reverseArgs = e.map(function(e) {
            if ("object" != typeof e || e.constructor !== Object) return e;
            let t = {};
            return Object.keys(e).forEach(function(n) {
                n == (0 | n) && (n |= 0), t[e[n]] = n
            }), t
        }))
    }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(e) {
        c.prototype[e] = function() {
            throw Error(e + " not implemented for encoding: " + this._baseState.enc)
        }
    }), s.forEach(function(e) {
        c.prototype[e] = function() {
            let t = this._baseState,
                n = Array.prototype.slice.call(arguments);
            return o(null === t.tag), t.tag = e, this._useArgs(n), this
        }
    }), c.prototype.use = function(e) {
        o(e);
        let t = this._baseState;
        return o(null === t.use), t.use = e, this
    }, c.prototype.optional = function() {
        return this._baseState.optional = !0, this
    }, c.prototype.def = function(e) {
        let t = this._baseState;
        return o(null === t.default), t.default = e, t.optional = !0, this
    }, c.prototype.explicit = function(e) {
        let t = this._baseState;
        return o(null === t.explicit && null === t.implicit), t.explicit = e, this
    }, c.prototype.implicit = function(e) {
        let t = this._baseState;
        return o(null === t.explicit && null === t.implicit), t.implicit = e, this
    }, c.prototype.obj = function() {
        let e = this._baseState,
            t = Array.prototype.slice.call(arguments);
        return e.obj = !0, 0 !== t.length && this._useArgs(t), this
    }, c.prototype.key = function(e) {
        let t = this._baseState;
        return o(null === t.key), t.key = e, this
    }, c.prototype.any = function() {
        return this._baseState.any = !0, this
    }, c.prototype.choice = function(e) {
        let t = this._baseState;
        return o(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function(t) {
            return e[t]
        })), this
    }, c.prototype.contains = function(e) {
        let t = this._baseState;
        return o(null === t.use), t.contains = e, this
    }, c.prototype._decode = function(e, t) {
        let n;
        let r = this._baseState;
        if (null === r.parent) return e.wrapResult(r.children[0]._decode(e, t));
        let i = r.default,
            o = !0,
            s = null;
        if (null !== r.key && (s = e.enterKey(r.key)), r.optional) {
            let n = null;
            if (null !== r.explicit ? n = r.explicit : null !== r.implicit ? n = r.implicit : null !== r.tag && (n = r.tag), null !== n || r.any) {
                if (o = this._peekTag(e, n, r.any), e.isError(o)) return o
            } else {
                let n = e.save();
                try {
                    null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t), o = !0
                } catch (e) {
                    o = !1
                }
                e.restore(n)
            }
        }
        if (r.obj && o && (n = e.enterObject()), o) {
            if (null !== r.explicit) {
                let t = this._decodeTag(e, r.explicit);
                if (e.isError(t)) return t;
                e = t
            }
            let n = e.offset;
            if (null === r.use && null === r.choice) {
                let t;
                r.any && (t = e.save());
                let n = this._decodeTag(e, null !== r.implicit ? r.implicit : r.tag, r.any);
                if (e.isError(n)) return n;
                r.any ? i = e.raw(t) : e = n
            }
            if (t && t.track && null !== r.tag && t.track(e.path(), n, e.length, "tagged"), t && t.track && null !== r.tag && t.track(e.path(), e.offset, e.length, "content"), r.any || (i = null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t)), e.isError(i)) return i;
            if (!r.any && null === r.choice && null !== r.children && r.children.forEach(function(n) {
                    n._decode(e, t)
                }), r.contains && ("octstr" === r.tag || "bitstr" === r.tag)) {
                let n = new a(i);
                i = this._getUse(r.contains, e._reporterState.obj)._decode(n, t)
            }
        }
        return r.obj && o && (i = e.leaveObject(n)), null !== r.key && (null !== i || !0 === o) ? e.leaveKey(s, r.key, i) : null !== s && e.exitKey(s), i
    }, c.prototype._decodeGeneric = function(e, t, n) {
        let r = this._baseState;
        if ("seq" === e || "set" === e) return null;
        if ("seqof" === e || "setof" === e) return this._decodeList(t, e, r.args[0], n);
        if (/str$/.test(e)) return this._decodeStr(t, e, n);
        if ("objid" === e && r.args) return this._decodeObjid(t, r.args[0], r.args[1], n);
        else if ("objid" === e) return this._decodeObjid(t, null, null, n);
        else if ("gentime" === e || "utctime" === e) return this._decodeTime(t, e, n);
        else if ("null_" === e) return this._decodeNull(t, n);
        else if ("bool" === e) return this._decodeBool(t, n);
        else if ("objDesc" === e) return this._decodeStr(t, e, n);
        else if ("int" === e || "enum" === e) return this._decodeInt(t, r.args && r.args[0], n);
        return null !== r.use ? this._getUse(r.use, t._reporterState.obj)._decode(t, n) : t.error("unknown tag: " + e)
    }, c.prototype._getUse = function(e, t) {
        let n = this._baseState;
        return n.useDecoder = this._use(e, t), o(null === n.useDecoder._baseState.parent), n.useDecoder = n.useDecoder._baseState.children[0], n.implicit !== n.useDecoder._baseState.implicit && (n.useDecoder = n.useDecoder.clone(), n.useDecoder._baseState.implicit = n.implicit), n.useDecoder
    }, c.prototype._decodeChoice = function(e, t) {
        let n = this._baseState,
            r = null,
            i = !1;
        return (Object.keys(n.choice).some(function(a) {
            let o = e.save(),
                s = n.choice[a];
            try {
                let n = s._decode(e, t);
                if (e.isError(n)) return !1;
                r = {
                    type: a,
                    value: n
                }, i = !0
            } catch (t) {
                return e.restore(o), !1
            }
            return !0
        }, this), i) ? r : e.error("Choice not matched")
    }, c.prototype._createEncoderBuffer = function(e) {
        return new i(e, this.reporter)
    }, c.prototype._encode = function(e, t, n) {
        let r = this._baseState;
        if (null !== r.default && r.default === e) return;
        let i = this._encodeValue(e, t, n);
        if (void 0 !== i) {
            if (!this._skipDefault(i, t, n)) return i
        }
    }, c.prototype._encodeValue = function(e, t, n) {
        let i = this._baseState;
        if (null === i.parent) return i.children[0]._encode(e, t || new r);
        let a = null;
        if (this.reporter = t, i.optional && void 0 === e) {
            if (null === i.default) return;
            e = i.default
        }
        let o = null,
            s = !1;
        if (i.any) a = this._createEncoderBuffer(e);
        else if (i.choice) a = this._encodeChoice(e, t);
        else if (i.contains) o = this._getUse(i.contains, n)._encode(e, t), s = !0;
        else if (i.children) o = i.children.map(function(n) {
            if ("null_" === n._baseState.tag) return n._encode(null, t, e);
            if (null === n._baseState.key) return t.error("Child should have a key");
            let r = t.enterKey(n._baseState.key);
            if ("object" != typeof e) return t.error("Child expected, but input is not object");
            let i = n._encode(e[n._baseState.key], t, e);
            return t.leaveKey(r), i
        }, this).filter(function(e) {
            return e
        }), o = this._createEncoderBuffer(o);
        else if ("seqof" === i.tag || "setof" === i.tag) {
            if (!(i.args && 1 === i.args.length)) return t.error("Too many args for : " + i.tag);
            if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
            let n = this.clone();
            n._baseState.implicit = null, o = this._createEncoderBuffer(e.map(function(n) {
                let r = this._baseState;
                return this._getUse(r.args[0], e)._encode(n, t)
            }, n))
        } else null !== i.use ? a = this._getUse(i.use, n)._encode(e, t) : (o = this._encodePrimitive(i.tag, e), s = !0);
        if (!i.any && null === i.choice) {
            let e = null !== i.implicit ? i.implicit : i.tag,
                n = null === i.implicit ? "universal" : "context";
            null === e ? null === i.use && t.error("Tag could be omitted only for .use()") : null === i.use && (a = this._encodeComposite(e, s, n, o))
        }
        return null !== i.explicit && (a = this._encodeComposite(i.explicit, !1, "context", a)), a
    }, c.prototype._encodeChoice = function(e, t) {
        let n = this._baseState,
            r = n.choice[e.type];
        return !r && o(!1, e.type + " not found in " + JSON.stringify(Object.keys(n.choice))), r._encode(e.value, t)
    }, c.prototype._encodePrimitive = function(e, t) {
        let n = this._baseState;
        if (/str$/.test(e)) return this._encodeStr(t, e);
        if ("objid" === e && n.args) return this._encodeObjid(t, n.reverseArgs[0], n.args[1]);
        if ("objid" === e) return this._encodeObjid(t, null, null);
        else if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
        else if ("null_" === e) return this._encodeNull();
        else if ("int" === e || "enum" === e) return this._encodeInt(t, n.args && n.reverseArgs[0]);
        else if ("bool" === e) return this._encodeBool(t);
        else if ("objDesc" === e) return this._encodeStr(t, e);
        else throw Error("Unsupported tag: " + e)
    }, c.prototype._isNumstr = function(e) {
        return /^[0-9 ]*$/.test(e)
    }, c.prototype._isPrintstr = function(e) {
        return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e)
    }
}