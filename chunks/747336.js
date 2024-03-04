function(e, t, n) {
    "use strict";
    n("424973"), n("70102");
    let r = n("571405").Reporter,
        i = n("13020").EncoderBuffer,
        o = n("13020").DecoderBuffer,
        s = n("463483"),
        a = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
        c = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(a);

    function Node(e, t, n) {
        let r = {};
        this._baseState = r, r.name = n, r.enc = e, r.parent = t || null, r.children = null, r.tag = null, r.args = null, r.reverseArgs = null, r.choice = null, r.optional = !1, r.any = !1, r.obj = !1, r.use = null, r.useDecoder = null, r.key = null, r.default = null, r.explicit = null, r.implicit = null, r.contains = null, !r.parent && (r.children = [], this._wrap())
    }
    e.exports = Node;
    let u = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    Node.prototype.clone = function() {
        let e = this._baseState,
            t = {};
        u.forEach(function(n) {
            t[n] = e[n]
        });
        let n = new this.constructor(t.parent);
        return n._baseState = t, n
    }, Node.prototype._wrap = function() {
        let e = this._baseState;
        c.forEach(function(t) {
            this[t] = function() {
                let n = new this.constructor(this);
                return e.children.push(n), n[t].apply(n, arguments)
            }
        }, this)
    }, Node.prototype._init = function(e) {
        let t = this._baseState;
        s(null === t.parent), e.call(this), t.children = t.children.filter(function(e) {
            return e._baseState.parent === this
        }, this), s.equal(t.children.length, 1, "Root node can have only one child")
    }, Node.prototype._useArgs = function(e) {
        let t = this._baseState,
            n = e.filter(function(e) {
                return e instanceof this.constructor
            }, this);
        e = e.filter(function(e) {
            return !(e instanceof this.constructor)
        }, this), 0 !== n.length && (s(null === t.children), t.children = n, n.forEach(function(e) {
            e._baseState.parent = this
        }, this)), 0 !== e.length && (s(null === t.args), t.args = e, t.reverseArgs = e.map(function(e) {
            if ("object" != typeof e || e.constructor !== Object) return e;
            let t = {};
            return Object.keys(e).forEach(function(n) {
                n == (0 | n) && (n |= 0);
                let r = e[n];
                t[r] = n
            }), t
        }))
    }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(e) {
        Node.prototype[e] = function() {
            let t = this._baseState;
            throw Error(e + " not implemented for encoding: " + t.enc)
        }
    }), a.forEach(function(e) {
        Node.prototype[e] = function() {
            let t = this._baseState,
                n = Array.prototype.slice.call(arguments);
            return s(null === t.tag), t.tag = e, this._useArgs(n), this
        }
    }), Node.prototype.use = function(e) {
        s(e);
        let t = this._baseState;
        return s(null === t.use), t.use = e, this
    }, Node.prototype.optional = function() {
        let e = this._baseState;
        return e.optional = !0, this
    }, Node.prototype.def = function(e) {
        let t = this._baseState;
        return s(null === t.default), t.default = e, t.optional = !0, this
    }, Node.prototype.explicit = function(e) {
        let t = this._baseState;
        return s(null === t.explicit && null === t.implicit), t.explicit = e, this
    }, Node.prototype.implicit = function(e) {
        let t = this._baseState;
        return s(null === t.explicit && null === t.implicit), t.implicit = e, this
    }, Node.prototype.obj = function() {
        let e = this._baseState,
            t = Array.prototype.slice.call(arguments);
        return e.obj = !0, 0 !== t.length && this._useArgs(t), this
    }, Node.prototype.key = function(e) {
        let t = this._baseState;
        return s(null === t.key), t.key = e, this
    }, Node.prototype.any = function() {
        let e = this._baseState;
        return e.any = !0, this
    }, Node.prototype.choice = function(e) {
        let t = this._baseState;
        return s(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function(t) {
            return e[t]
        })), this
    }, Node.prototype.contains = function(e) {
        let t = this._baseState;
        return s(null === t.use), t.contains = e, this
    }, Node.prototype._decode = function(e, t) {
        let n;
        let r = this._baseState;
        if (null === r.parent) return e.wrapResult(r.children[0]._decode(e, t));
        let i = r.default,
            s = !0,
            a = null;
        if (null !== r.key && (a = e.enterKey(r.key)), r.optional) {
            let n = null;
            if (null !== r.explicit ? n = r.explicit : null !== r.implicit ? n = r.implicit : null !== r.tag && (n = r.tag), null !== n || r.any) {
                if (s = this._peekTag(e, n, r.any), e.isError(s)) return s
            } else {
                let n = e.save();
                try {
                    null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t), s = !0
                } catch (e) {
                    s = !1
                }
                e.restore(n)
            }
        }
        if (r.obj && s && (n = e.enterObject()), s) {
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
                let n = new o(i);
                i = this._getUse(r.contains, e._reporterState.obj)._decode(n, t)
            }
        }
        return r.obj && s && (i = e.leaveObject(n)), null !== r.key && (null !== i || !0 === s) ? e.leaveKey(a, r.key, i) : null !== a && e.exitKey(a), i
    }, Node.prototype._decodeGeneric = function(e, t, n) {
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
    }, Node.prototype._getUse = function(e, t) {
        let n = this._baseState;
        return n.useDecoder = this._use(e, t), s(null === n.useDecoder._baseState.parent), n.useDecoder = n.useDecoder._baseState.children[0], n.implicit !== n.useDecoder._baseState.implicit && (n.useDecoder = n.useDecoder.clone(), n.useDecoder._baseState.implicit = n.implicit), n.useDecoder
    }, Node.prototype._decodeChoice = function(e, t) {
        let n = this._baseState,
            r = null,
            i = !1;
        return (Object.keys(n.choice).some(function(o) {
            let s = e.save(),
                a = n.choice[o];
            try {
                let n = a._decode(e, t);
                if (e.isError(n)) return !1;
                r = {
                    type: o,
                    value: n
                }, i = !0
            } catch (t) {
                return e.restore(s), !1
            }
            return !0
        }, this), i) ? r : e.error("Choice not matched")
    }, Node.prototype._createEncoderBuffer = function(e) {
        return new i(e, this.reporter)
    }, Node.prototype._encode = function(e, t, n) {
        let r = this._baseState;
        if (null !== r.default && r.default === e) return;
        let i = this._encodeValue(e, t, n);
        if (void 0 !== i) {
            if (!this._skipDefault(i, t, n)) return i
        }
    }, Node.prototype._encodeValue = function(e, t, n) {
        let i = this._baseState;
        if (null === i.parent) return i.children[0]._encode(e, t || new r);
        let o = null;
        if (this.reporter = t, i.optional && void 0 === e) {
            if (null === i.default) return;
            e = i.default
        }
        let s = null,
            a = !1;
        if (i.any) o = this._createEncoderBuffer(e);
        else if (i.choice) o = this._encodeChoice(e, t);
        else if (i.contains) s = this._getUse(i.contains, n)._encode(e, t), a = !0;
        else if (i.children) s = i.children.map(function(n) {
            if ("null_" === n._baseState.tag) return n._encode(null, t, e);
            if (null === n._baseState.key) return t.error("Child should have a key");
            let r = t.enterKey(n._baseState.key);
            if ("object" != typeof e) return t.error("Child expected, but input is not object");
            let i = n._encode(e[n._baseState.key], t, e);
            return t.leaveKey(r), i
        }, this).filter(function(e) {
            return e
        }), s = this._createEncoderBuffer(s);
        else if ("seqof" === i.tag || "setof" === i.tag) {
            if (!(i.args && 1 === i.args.length)) return t.error("Too many args for : " + i.tag);
            if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
            let n = this.clone();
            n._baseState.implicit = null, s = this._createEncoderBuffer(e.map(function(n) {
                let r = this._baseState;
                return this._getUse(r.args[0], e)._encode(n, t)
            }, n))
        } else null !== i.use ? o = this._getUse(i.use, n)._encode(e, t) : (s = this._encodePrimitive(i.tag, e), a = !0);
        if (!i.any && null === i.choice) {
            let e = null !== i.implicit ? i.implicit : i.tag,
                n = null === i.implicit ? "universal" : "context";
            null === e ? null === i.use && t.error("Tag could be omitted only for .use()") : null === i.use && (o = this._encodeComposite(e, a, n, s))
        }
        return null !== i.explicit && (o = this._encodeComposite(i.explicit, !1, "context", o)), o
    }, Node.prototype._encodeChoice = function(e, t) {
        let n = this._baseState,
            r = n.choice[e.type];
        return !r && s(!1, e.type + " not found in " + JSON.stringify(Object.keys(n.choice))), r._encode(e.value, t)
    }, Node.prototype._encodePrimitive = function(e, t) {
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
    }, Node.prototype._isNumstr = function(e) {
        return /^[0-9 ]*$/.test(e)
    }, Node.prototype._isPrintstr = function(e) {
        return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e)
    }
}