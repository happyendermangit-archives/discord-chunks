function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageType: function() {
            return g
        }
    });
    var r = n("36056"),
        i = n("950697"),
        a = n("614456"),
        o = n("528046"),
        s = n("727037"),
        u = n("297584"),
        c = n("349992"),
        l = n("320215"),
        d = n("660284"),
        f = n("838390"),
        p = n("284267"),
        h = n("973408"),
        m = n("647943");
    class g {
        constructor(e, t, n) {
            this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(r.normalizeFieldInfo), this.options = null != n ? n : {}, this.refTypeCheck = new i.ReflectionTypeCheck(this), this.refJsonReader = new a.ReflectionJsonReader(this), this.refJsonWriter = new o.ReflectionJsonWriter(this), this.refBinReader = new s.ReflectionBinaryReader(this), this.refBinWriter = new u.ReflectionBinaryWriter(this)
        }
        create(e) {
            let t = (0, c.reflectionCreate)(this);
            return void 0 !== e && (0, l.reflectionMergePartial)(this, t, e), t
        }
        clone(e) {
            let t = this.create();
            return (0, l.reflectionMergePartial)(this, t, e), t
        }
        equals(e, t) {
            return (0, p.reflectionEquals)(this, e, t)
        }
        is(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !1)
        }
        isAssignable(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !0)
        }
        mergePartial(e, t) {
            (0, l.reflectionMergePartial)(this, e, t)
        }
        fromBinary(e, t) {
            let n = (0, m.binaryReadOptions)(t);
            return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
        }
        fromJson(e, t) {
            return this.internalJsonRead(e, (0, f.jsonReadOptions)(t))
        }
        fromJsonString(e, t) {
            let n = JSON.parse(e);
            return this.fromJson(n, t)
        }
        toJson(e, t) {
            return this.internalJsonWrite(e, (0, f.jsonWriteOptions)(t))
        }
        toJsonString(e, t) {
            var n;
            return JSON.stringify(this.toJson(e, t), null, null !== (n = null == t ? void 0 : t.prettySpaces) && void 0 !== n ? n : 0)
        }
        toBinary(e, t) {
            let n = (0, h.binaryWriteOptions)(t);
            return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
        }
        internalJsonRead(e, t, n) {
            if (null !== e && "object" == typeof e && !Array.isArray(e)) {
                let r = null != n ? n : this.create();
                return this.refJsonReader.read(e, r, t), r
            }
            throw Error(`Unable to parse message ${this.typeName} from JSON ${(0,d.typeofJsonValue)(e)}.`)
        }
        internalJsonWrite(e, t) {
            return this.refJsonWriter.write(e, t)
        }
        internalBinaryWrite(e, t, n) {
            return this.refBinWriter.write(e, t, n), t
        }
        internalBinaryRead(e, t, n, r) {
            let i = null != r ? r : this.create();
            return this.refBinReader.read(e, i, n, t), i
        }
    }
}