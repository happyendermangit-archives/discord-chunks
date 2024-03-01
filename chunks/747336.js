function(t, e, s) {
    "use strict";
    s("424973"), s("70102");
    let r = s("571405").Reporter,
        i = s("13020").EncoderBuffer,
        n = s("13020").DecoderBuffer,
        c = s("463483"),
        o = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
        f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(o);

    function Node(t, e, s) {
        let r = {};
        this._baseState = r, r.name = s, r.enc = t, r.parent = e || null, r.children = null, r.tag = null, r.args = null, r.reverseArgs = null, r.choice = null, r.optional = !1, r.any = !1, r.obj = !1, r.use = null, r.useDecoder = null, r.key = null, r.default = null, r.explicit = null, r.implicit = null, r.contains = null, !r.parent && (r.children = [], this._wrap())
    }
    t.exports = Node;
    let u = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    Node.prototype.clone = function() {
        let t = this._baseState,
            e = {};
        u.forEach(function(s) {
            e[s] = t[s]
        });
        let s = new this.constructor(e.parent);
        return s._baseState = e, s
    }, Node.prototype._wrap = function() {
        let t = this._baseState;
        f.forEach(function(e) {
            this[e] = function() {
                let s = new this.constructor(this);
                return t.children.push(s), s[e].apply(s, arguments)
            }
        }, this)
    }, Node.prototype._init = function(t) {
        let e = this._baseState;
        c(null === e.parent), t.call(this), e.children = e.children.filter(function(t) {
            return t._baseState.parent === this
        }, this), c.equal(e.children.length, 1, "Root node can have only one child")
    }, Node.prototype._useArgs = function(t) {
        let e = this._baseState,
            s = t.filter(function(t) {
                return t instanceof this.constructor
            }, this);
        t = t.filter(function(t) {
            return !(t instanceof this.constructor)
        }, this), 0 !== s.length && (c(null === e.children), e.children = s, s.forEach(function(t) {
            t._baseState.parent = this
        }, this)), 0 !== t.length && (c(null === e.args), e.args = t, e.reverseArgs = t.map(function(t) {
            if ("object" != typeof t || t.constructor !== Object) return t;
            let e = {};
            return Object.keys(t).forEach(function(s) {
                s == (0 | s) && (s |= 0);
                let r = t[s];
                e[r] = s
            }), e
        }))
    }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(t) {
        Node.prototype[t] = function() {
            let e = this._baseState;
            throw Error(t + " not implemented for encoding: " + e.enc)
        }
    }), o.forEach(function(t) {
        Node.prototype[t] = function() {
            let e = this._baseState,
                s = Array.prototype.slice.call(arguments);
            return c(null === e.tag), e.tag = t, this._useArgs(s), this
        }
    }), Node.prototype.use = function(t) {
        c(t);
        let e = this._baseState;
        return c(null === e.use), e.use = t, this
    }, Node.prototype.optional = function() {
        let t = this._baseState;
        return t.optional = !0, this
    }, Node.prototype.def = function(t) {
        let e = this._baseState;
        return c(null === e.default), e.default = t, e.optional = !0, this
    }, Node.prototype.explicit = function(t) {
        let e = this._baseState;
        return c(null === e.explicit && null === e.implicit), e.explicit = t, this
    }, Node.prototype.implicit = function(t) {
        let e = this._baseState;
        return c(null === e.explicit && null === e.implicit), e.implicit = t, this
    }, Node.prototype.obj = function() {
        let t = this._baseState,
            e = Array.prototype.slice.call(arguments);
        return t.obj = !0, 0 !== e.length && this._useArgs(e), this
    }, Node.prototype.key = function(t) {
        let e = this._baseState;
        return c(null === e.key), e.key = t, this
    }, Node.prototype.any = function() {
        let t = this._baseState;
        return t.any = !0, this
    }, Node.prototype.choice = function(t) {
        let e = this._baseState;
        return c(null === e.choice), e.choice = t, this._useArgs(Object.keys(t).map(function(e) {
            return t[e]
        })), this
    }, Node.prototype.contains = function(t) {
        let e = this._baseState;
        return c(null === e.use), e.contains = t, this
    }, Node.prototype._decode = function(t, e) {
        let s;
        let r = this._baseState;
        if (null === r.parent) return t.wrapResult(r.children[0]._decode(t, e));
        let i = r.default,
            c = !0,
            o = null;
        if (null !== r.key && (o = t.enterKey(r.key)), r.optional) {
            let s = null;
            if (null !== r.explicit ? s = r.explicit : null !== r.implicit ? s = r.implicit : null !== r.tag && (s = r.tag), null !== s || r.any) {
                if (c = this._peekTag(t, s, r.any), t.isError(c)) return c
            } else {
                let s = t.save();
                try {
                    null === r.choice ? this._decodeGeneric(r.tag, t, e) : this._decodeChoice(t, e), c = !0
                } catch (t) {
                    c = !1
                }
                t.restore(s)
            }
        }
        if (r.obj && c && (s = t.enterObject()), c) {
            if (null !== r.explicit) {
                let e = this._decodeTag(t, r.explicit);
                if (t.isError(e)) return e;
                t = e
            }
            let s = t.offset;
            if (null === r.use && null === r.choice) {
                let e;
                r.any && (e = t.save());
                let s = this._decodeTag(t, null !== r.implicit ? r.implicit : r.tag, r.any);
                if (t.isError(s)) return s;
                r.any ? i = t.raw(e) : t = s
            }
            if (e && e.track && null !== r.tag && e.track(t.path(), s, t.length, "tagged"), e && e.track && null !== r.tag && e.track(t.path(), t.offset, t.length, "content"), r.any || (i = null === r.choice ? this._decodeGeneric(r.tag, t, e) : this._decodeChoice(t, e)), t.isError(i)) return i;
            if (!r.any && null === r.choice && null !== r.children && r.children.forEach(function(s) {
                    s._decode(t, e)
                }), r.contains && ("octstr" === r.tag || "bitstr" === r.tag)) {
                let s = new n(i);
                i = this._getUse(r.contains, t._reporterState.obj)._decode(s, e)
            }
        }
        return r.obj && c && (i = t.leaveObject(s)), null !== r.key && (null !== i || !0 === c) ? t.leaveKey(o, r.key, i) : null !== o && t.exitKey(o), i
    }, Node.prototype._decodeGeneric = function(t, e, s) {
        let r = this._baseState;
        if ("seq" === t || "set" === t) return null;
        if ("seqof" === t || "setof" === t) return this._decodeList(e, t, r.args[0], s);
        if (/str$/.test(t)) return this._decodeStr(e, t, s);
        if ("objid" === t && r.args) return this._decodeObjid(e, r.args[0], r.args[1], s);
        else if ("objid" === t) return this._decodeObjid(e, null, null, s);
        else if ("gentime" === t || "utctime" === t) return this._decodeTime(e, t, s);
        else if ("null_" === t) return this._decodeNull(e, s);
        else if ("bool" === t) return this._decodeBool(e, s);
        else if ("objDesc" === t) return this._decodeStr(e, t, s);
        else if ("int" === t || "enum" === t) return this._decodeInt(e, r.args && r.args[0], s);
        return null !== r.use ? this._getUse(r.use, e._reporterState.obj)._decode(e, s) : e.error("unknown tag: " + t)
    }, Node.prototype._getUse = function(t, e) {
        let s = this._baseState;
        return s.useDecoder = this._use(t, e), c(null === s.useDecoder._baseState.parent), s.useDecoder = s.useDecoder._baseState.children[0], s.implicit !== s.useDecoder._baseState.implicit && (s.useDecoder = s.useDecoder.clone(), s.useDecoder._baseState.implicit = s.implicit), s.useDecoder
    }, Node.prototype._decodeChoice = function(t, e) {
        let s = this._baseState,
            r = null,
            i = !1;
        return (Object.keys(s.choice).some(function(n) {
            let c = t.save(),
                o = s.choice[n];
            try {
                let s = o._decode(t, e);
                if (t.isError(s)) return !1;
                r = {
                    type: n,
                    value: s
                }, i = !0
            } catch (e) {
                return t.restore(c), !1
            }
            return !0
        }, this), i) ? r : t.error("Choice not matched")
    }, Node.prototype._createEncoderBuffer = function(t) {
        return new i(t, this.reporter)
    }, Node.prototype._encode = function(t, e, s) {
        let r = this._baseState;
        if (null !== r.default && r.default === t) return;
        let i = this._encodeValue(t, e, s);
        if (void 0 !== i) {
            if (!this._skipDefault(i, e, s)) return i
        }
    }, Node.prototype._encodeValue = function(t, e, s) {
        let i = this._baseState;
        if (null === i.parent) return i.children[0]._encode(t, e || new r);
        let n = null;
        if (this.reporter = e, i.optional && void 0 === t) {
            if (null === i.default) return;
            t = i.default
        }
        let c = null,
            o = !1;
        if (i.any) n = this._createEncoderBuffer(t);
        else if (i.choice) n = this._encodeChoice(t, e);
        else if (i.contains) c = this._getUse(i.contains, s)._encode(t, e), o = !0;
        else if (i.children) c = i.children.map(function(s) {
            if ("null_" === s._baseState.tag) return s._encode(null, e, t);
            if (null === s._baseState.key) return e.error("Child should have a key");
            let r = e.enterKey(s._baseState.key);
            if ("object" != typeof t) return e.error("Child expected, but input is not object");
            let i = s._encode(t[s._baseState.key], e, t);
            return e.leaveKey(r), i
        }, this).filter(function(t) {
            return t
        }), c = this._createEncoderBuffer(c);
        else if ("seqof" === i.tag || "setof" === i.tag) {
            if (!(i.args && 1 === i.args.length)) return e.error("Too many args for : " + i.tag);
            if (!Array.isArray(t)) return e.error("seqof/setof, but data is not Array");
            let s = this.clone();
            s._baseState.implicit = null, c = this._createEncoderBuffer(t.map(function(s) {
                let r = this._baseState;
                return this._getUse(r.args[0], t)._encode(s, e)
            }, s))
        } else null !== i.use ? n = this._getUse(i.use, s)._encode(t, e) : (c = this._encodePrimitive(i.tag, t), o = !0);
        if (!i.any && null === i.choice) {
            let t = null !== i.implicit ? i.implicit : i.tag,
                s = null === i.implicit ? "universal" : "context";
            null === t ? null === i.use && e.error("Tag could be omitted only for .use()") : null === i.use && (n = this._encodeComposite(t, o, s, c))
        }
        return null !== i.explicit && (n = this._encodeComposite(i.explicit, !1, "context", n)), n
    }, Node.prototype._encodeChoice = function(t, e) {
        let s = this._baseState,
            r = s.choice[t.type];
        return !r && c(!1, t.type + " not found in " + JSON.stringify(Object.keys(s.choice))), r._encode(t.value, e)
    }, Node.prototype._encodePrimitive = function(t, e) {
        let s = this._baseState;
        if (/str$/.test(t)) return this._encodeStr(e, t);
        if ("objid" === t && s.args) return this._encodeObjid(e, s.reverseArgs[0], s.args[1]);
        if ("objid" === t) return this._encodeObjid(e, null, null);
        else if ("gentime" === t || "utctime" === t) return this._encodeTime(e, t);
        else if ("null_" === t) return this._encodeNull();
        else if ("int" === t || "enum" === t) return this._encodeInt(e, s.args && s.reverseArgs[0]);
        else if ("bool" === t) return this._encodeBool(e);
        else if ("objDesc" === t) return this._encodeStr(e, t);
        else throw Error("Unsupported tag: " + t)
    }, Node.prototype._isNumstr = function(t) {
        return /^[0-9 ]*$/.test(t)
    }, Node.prototype._isPrintstr = function(t) {
        return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(t)
    }
}