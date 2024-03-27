function(e, t) {
    var n, r, i = (n = new Date, r = 4, {
        setLogLevel: function(e) {
            e == this.debug ? r = 1 : e == this.info ? r = 2 : e == this.warn ? r = 3 : (this.error, r = 4)
        },
        debug: function(e, t) {
            void 0 === console.debug && (console.debug = console.log), 1 >= r && console.debug("[" + i.getDurationString(new Date - n, 1e3) + "]", "[" + e + "]", t)
        },
        log: function(e, t) {
            this.debug(e.msg)
        },
        info: function(e, t) {
            2 >= r && console.info("[" + i.getDurationString(new Date - n, 1e3) + "]", "[" + e + "]", t)
        },
        warn: function(e, t) {
            3 >= r && console.warn("[" + i.getDurationString(new Date - n, 1e3) + "]", "[" + e + "]", t)
        },
        error: function(e, t) {
            4 >= r && console.error("[" + i.getDurationString(new Date - n, 1e3) + "]", "[" + e + "]", t)
        }
    });
    i.getDurationString = function(e, t) {
        function n(e, t) {
            for (var n = ("" + e).split("."); n[0].length < t;) n[0] = "0" + n[0];
            return n.join(".")
        }
        e < 0 ? (r = !0, e = -e) : r = !1;
        var r, i = e / (t || 1),
            a = Math.floor(i / 3600),
            o = Math.floor((i -= 3600 * a) / 60),
            s = 1e3 * (i -= 60 * o);
        return s -= 1e3 * (i = Math.floor(i)), s = Math.floor(s), (r ? "-" : "") + a + ":" + n(o, 2) + ":" + n(i, 2) + "." + n(s, 3)
    }, i.printRanges = function(e) {
        var t = e.length;
        if (!(t > 0)) return "(empty)";
        for (var n = "", r = 0; r < t; r++) r > 0 && (n += ","), n += "[" + i.getDurationString(e.start(r)) + "," + i.getDurationString(e.end(r)) + "]";
        return n
    }, void 0 !== t && (t.Log = i);
    var a = function(e) {
        if (e instanceof ArrayBuffer) this.buffer = e, this.dataview = new DataView(e);
        else throw "Needs an array buffer";
        this.position = 0
    };
    a.prototype.getPosition = function() {
        return this.position
    }, a.prototype.getEndPosition = function() {
        return this.buffer.byteLength
    }, a.prototype.getLength = function() {
        return this.buffer.byteLength
    }, a.prototype.seek = function(e) {
        var t = Math.max(0, Math.min(this.buffer.byteLength, e));
        return this.position = isNaN(t) || !isFinite(t) ? 0 : t, !0
    }, a.prototype.isEos = function() {
        return this.getPosition() >= this.getEndPosition()
    }, a.prototype.readAnyInt = function(e, t) {
        var n = 0;
        if (this.position + e <= this.buffer.byteLength) {
            switch (e) {
                case 1:
                    n = t ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                    break;
                case 2:
                    n = t ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                    break;
                case 3:
                    if (t) throw "No method for reading signed 24 bits values";
                    n = this.dataview.getUint8(this.position) << 16 | this.dataview.getUint8(this.position + 1) << 8 | this.dataview.getUint8(this.position + 2);
                    break;
                case 4:
                    n = t ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                    break;
                case 8:
                    if (t) throw "No method for reading signed 64 bits values";
                    n = this.dataview.getUint32(this.position) << 32 | this.dataview.getUint32(this.position + 4);
                    break;
                default:
                    throw "readInt method not implemented for size: " + e
            }
            return this.position += e, n
        }
        throw "Not enough bytes in buffer"
    }, a.prototype.readUint8 = function() {
        return this.readAnyInt(1, !1)
    }, a.prototype.readUint16 = function() {
        return this.readAnyInt(2, !1)
    }, a.prototype.readUint24 = function() {
        return this.readAnyInt(3, !1)
    }, a.prototype.readUint32 = function() {
        return this.readAnyInt(4, !1)
    }, a.prototype.readUint64 = function() {
        return this.readAnyInt(8, !1)
    }, a.prototype.readString = function(e) {
        if (this.position + e <= this.buffer.byteLength) {
            for (var t = "", n = 0; n < e; n++) t += String.fromCharCode(this.readUint8());
            return t
        }
        throw "Not enough bytes in buffer"
    }, a.prototype.readCString = function() {
        for (var e = [];;) {
            var t = this.readUint8();
            if (0 !== t) e.push(t);
            else break
        }
        return String.fromCharCode.apply(null, e)
    }, a.prototype.readInt8 = function() {
        return this.readAnyInt(1, !0)
    }, a.prototype.readInt16 = function() {
        return this.readAnyInt(2, !0)
    }, a.prototype.readInt32 = function() {
        return this.readAnyInt(4, !0)
    }, a.prototype.readInt64 = function() {
        return this.readAnyInt(8, !1)
    }, a.prototype.readUint8Array = function(e) {
        for (var t = new Uint8Array(e), n = 0; n < e; n++) t[n] = this.readUint8();
        return t
    }, a.prototype.readInt16Array = function(e) {
        for (var t = new Int16Array(e), n = 0; n < e; n++) t[n] = this.readInt16();
        return t
    }, a.prototype.readUint16Array = function(e) {
        for (var t = new Int16Array(e), n = 0; n < e; n++) t[n] = this.readUint16();
        return t
    }, a.prototype.readUint32Array = function(e) {
        for (var t = new Uint32Array(e), n = 0; n < e; n++) t[n] = this.readUint32();
        return t
    }, a.prototype.readInt32Array = function(e) {
        for (var t = new Int32Array(e), n = 0; n < e; n++) t[n] = this.readInt32();
        return t
    }, void 0 !== t && (t.MP4BoxStream = a);
    var o = function(e, t, n) {
        this._byteOffset = t || 0, e instanceof ArrayBuffer ? this.buffer = e : "object" == typeof e ? (this.dataView = e, t && (this._byteOffset += t)) : this.buffer = new ArrayBuffer(e || 0), this.position = 0, this.endianness = null == n ? o.LITTLE_ENDIAN : n
    };
    o.prototype = {}, o.prototype.getPosition = function() {
        return this.position
    }, o.prototype._realloc = function(e) {
        if (this._dynamicSize) {
            var t = this._byteOffset + this.position + e,
                n = this._buffer.byteLength;
            if (t <= n) {
                t > this._byteLength && (this._byteLength = t);
                return
            }
            for (n < 1 && (n = 1); t > n;) n *= 2;
            var r = new ArrayBuffer(n),
                i = new Uint8Array(this._buffer);
            new Uint8Array(r, 0, i.length).set(i), this.buffer = r, this._byteLength = t
        }
    }, o.prototype._trimAlloc = function() {
        if (this._byteLength != this._buffer.byteLength) {
            var e = new ArrayBuffer(this._byteLength),
                t = new Uint8Array(e),
                n = new Uint8Array(this._buffer, 0, t.length);
            t.set(n), this.buffer = e
        }
    }, o.BIG_ENDIAN = !1, o.LITTLE_ENDIAN = !0, o.prototype._byteLength = 0, Object.defineProperty(o.prototype, "byteLength", {
        get: function() {
            return this._byteLength - this._byteOffset
        }
    }), Object.defineProperty(o.prototype, "buffer", {
        get: function() {
            return this._trimAlloc(), this._buffer
        },
        set: function(e) {
            this._buffer = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
        }
    }), Object.defineProperty(o.prototype, "byteOffset", {
        get: function() {
            return this._byteOffset
        },
        set: function(e) {
            this._byteOffset = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
        }
    }), Object.defineProperty(o.prototype, "dataView", {
        get: function() {
            return this._dataView
        },
        set: function(e) {
            this._byteOffset = e.byteOffset, this._buffer = e.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + e.byteLength
        }
    }), o.prototype.seek = function(e) {
        var t = Math.max(0, Math.min(this.byteLength, e));
        this.position = isNaN(t) || !isFinite(t) ? 0 : t
    }, o.prototype.isEof = function() {
        return this.position >= this._byteLength
    }, o.prototype.mapUint8Array = function(e) {
        this._realloc(1 * e);
        var t = new Uint8Array(this._buffer, this.byteOffset + this.position, e);
        return this.position += 1 * e, t
    }, o.prototype.readInt32Array = function(e, t) {
        e = null == e ? this.byteLength - this.position / 4 : e;
        var n = new Int32Array(e);
        return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
    }, o.prototype.readInt16Array = function(e, t) {
        e = null == e ? this.byteLength - this.position / 2 : e;
        var n = new Int16Array(e);
        return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
    }, o.prototype.readInt8Array = function(e) {
        e = null == e ? this.byteLength - this.position : e;
        var t = new Int8Array(e);
        return o.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t
    }, o.prototype.readUint32Array = function(e, t) {
        e = null == e ? this.byteLength - this.position / 4 : e;
        var n = new Uint32Array(e);
        return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
    }, o.prototype.readUint16Array = function(e, t) {
        e = null == e ? this.byteLength - this.position / 2 : e;
        var n = new Uint16Array(e);
        return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
    }, o.prototype.readUint8Array = function(e) {
        e = null == e ? this.byteLength - this.position : e;
        var t = new Uint8Array(e);
        return o.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t
    }, o.prototype.readFloat64Array = function(e, t) {
        e = null == e ? this.byteLength - this.position / 8 : e;
        var n = new Float64Array(e);
        return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
    }, o.prototype.readFloat32Array = function(e, t) {
        e = null == e ? this.byteLength - this.position / 4 : e;
        var n = new Float32Array(e);
        return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
    }, o.prototype.readInt32 = function(e) {
        var t = this._dataView.getInt32(this.position, null == e ? this.endianness : e);
        return this.position += 4, t
    }, o.prototype.readInt16 = function(e) {
        var t = this._dataView.getInt16(this.position, null == e ? this.endianness : e);
        return this.position += 2, t
    }, o.prototype.readInt8 = function() {
        var e = this._dataView.getInt8(this.position);
        return this.position += 1, e
    }, o.prototype.readUint32 = function(e) {
        var t = this._dataView.getUint32(this.position, null == e ? this.endianness : e);
        return this.position += 4, t
    }, o.prototype.readUint16 = function(e) {
        var t = this._dataView.getUint16(this.position, null == e ? this.endianness : e);
        return this.position += 2, t
    }, o.prototype.readUint8 = function() {
        var e = this._dataView.getUint8(this.position);
        return this.position += 1, e
    }, o.prototype.readFloat32 = function(e) {
        var t = this._dataView.getFloat32(this.position, null == e ? this.endianness : e);
        return this.position += 4, t
    }, o.prototype.readFloat64 = function(e) {
        var t = this._dataView.getFloat64(this.position, null == e ? this.endianness : e);
        return this.position += 8, t
    }, o.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, o.memcpy = function(e, t, n, r, i) {
        var a = new Uint8Array(e, t, i),
            o = new Uint8Array(n, r, i);
        a.set(o)
    }, o.arrayToNative = function(e, t) {
        return t == this.endianness ? e : this.flipArrayEndianness(e)
    }, o.nativeToEndian = function(e, t) {
        return this.endianness == t ? e : this.flipArrayEndianness(e)
    }, o.flipArrayEndianness = function(e) {
        for (var t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), n = 0; n < e.byteLength; n += e.BYTES_PER_ELEMENT)
            for (var r = n + e.BYTES_PER_ELEMENT - 1, i = n; r > i; r--, i++) {
                var a = t[i];
                t[i] = t[r], t[r] = a
            }
        return e
    }, o.prototype.failurePosition = 0, String.fromCharCodeUint8 = function(e) {
        for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];
        return String.fromCharCode.apply(null, t)
    }, o.prototype.readString = function(e, t) {
        return null == t || "ASCII" == t ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == e ? this.byteLength - this.position : e)]) : new TextDecoder(t).decode(this.mapUint8Array(e))
    }, o.prototype.readCString = function(e) {
        var t = this.byteLength - this.position,
            n = new Uint8Array(this._buffer, this._byteOffset + this.position),
            r = t;
        null != e && (r = Math.min(e, t));
        for (var i = 0; i < r && 0 !== n[i]; i++);
        var a = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(i)]);
        return null != e ? this.position += r - i : i != t && (this.position += 1), a
    };
    o.prototype.readInt64 = function() {
        return 4294967296 * this.readInt32() + this.readUint32()
    }, o.prototype.readUint64 = function() {
        return 4294967296 * this.readUint32() + this.readUint32()
    }, o.prototype.readInt64 = function() {
        return 4294967296 * this.readUint32() + this.readUint32()
    }, o.prototype.readUint24 = function() {
        return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8()
    }, void 0 !== t && (t.DataStream = o), o.prototype.save = function(e) {
        var t = new Blob([this.buffer]);
        if (window.URL && URL.createObjectURL) {
            var n = window.URL.createObjectURL(t),
                r = document.createElement("a");
            document.body.appendChild(r), r.setAttribute("href", n), r.setAttribute("download", e), r.setAttribute("target", "_self"), r.click(), window.URL.revokeObjectURL(n)
        } else throw "DataStream.save: Can't create object URL."
    }, o.prototype._dynamicSize = !0, Object.defineProperty(o.prototype, "dynamicSize", {
        get: function() {
            return this._dynamicSize
        },
        set: function(e) {
            !e && this._trimAlloc(), this._dynamicSize = e
        }
    }), o.prototype.shift = function(e) {
        var t = new ArrayBuffer(this._byteLength - e),
            n = new Uint8Array(t),
            r = new Uint8Array(this._buffer, e, n.length);
        n.set(r), this.buffer = t, this.position -= e
    }, o.prototype.writeInt32Array = function(e, t) {
        if (this._realloc(4 * e.length), e instanceof Int32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt32Array(e.length, t);
        else
            for (var n = 0; n < e.length; n++) this.writeInt32(e[n], t)
    }, o.prototype.writeInt16Array = function(e, t) {
        if (this._realloc(2 * e.length), e instanceof Int16Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt16Array(e.length, t);
        else
            for (var n = 0; n < e.length; n++) this.writeInt16(e[n], t)
    }, o.prototype.writeInt8Array = function(e) {
        if (this._realloc(1 * e.length), e instanceof Int8Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt8Array(e.length);
        else
            for (var t = 0; t < e.length; t++) this.writeInt8(e[t])
    }, o.prototype.writeUint32Array = function(e, t) {
        if (this._realloc(4 * e.length), e instanceof Uint32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint32Array(e.length, t);
        else
            for (var n = 0; n < e.length; n++) this.writeUint32(e[n], t)
    }, o.prototype.writeUint16Array = function(e, t) {
        if (this._realloc(2 * e.length), e instanceof Uint16Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint16Array(e.length, t);
        else
            for (var n = 0; n < e.length; n++) this.writeUint16(e[n], t)
    }, o.prototype.writeUint8Array = function(e) {
        if (this._realloc(1 * e.length), e instanceof Uint8Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint8Array(e.length);
        else
            for (var t = 0; t < e.length; t++) this.writeUint8(e[t])
    }, o.prototype.writeFloat64Array = function(e, t) {
        if (this._realloc(8 * e.length), e instanceof Float64Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat64Array(e.length, t);
        else
            for (var n = 0; n < e.length; n++) this.writeFloat64(e[n], t)
    }, o.prototype.writeFloat32Array = function(e, t) {
        if (this._realloc(4 * e.length), e instanceof Float32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat32Array(e.length, t);
        else
            for (var n = 0; n < e.length; n++) this.writeFloat32(e[n], t)
    }, o.prototype.writeInt32 = function(e, t) {
        this._realloc(4), this._dataView.setInt32(this.position, e, null == t ? this.endianness : t), this.position += 4
    }, o.prototype.writeInt16 = function(e, t) {
        this._realloc(2), this._dataView.setInt16(this.position, e, null == t ? this.endianness : t), this.position += 2
    }, o.prototype.writeInt8 = function(e) {
        this._realloc(1), this._dataView.setInt8(this.position, e), this.position += 1
    }, o.prototype.writeUint32 = function(e, t) {
        this._realloc(4), this._dataView.setUint32(this.position, e, null == t ? this.endianness : t), this.position += 4
    }, o.prototype.writeUint16 = function(e, t) {
        this._realloc(2), this._dataView.setUint16(this.position, e, null == t ? this.endianness : t), this.position += 2
    }, o.prototype.writeUint8 = function(e) {
        this._realloc(1), this._dataView.setUint8(this.position, e), this.position += 1
    }, o.prototype.writeFloat32 = function(e, t) {
        this._realloc(4), this._dataView.setFloat32(this.position, e, null == t ? this.endianness : t), this.position += 4
    }, o.prototype.writeFloat64 = function(e, t) {
        this._realloc(8), this._dataView.setFloat64(this.position, e, null == t ? this.endianness : t), this.position += 8
    }, o.prototype.writeUCS2String = function(e, t, n) {
        null == n && (n = e.length);
        for (var r = 0; r < e.length && r < n; r++) this.writeUint16(e.charCodeAt(r), t);
        for (; r < n; r++) this.writeUint16(0)
    }, o.prototype.writeString = function(e, t, n) {
        var r = 0;
        if (null == t || "ASCII" == t) {
            if (null != n) {
                var i = Math.min(e.length, n);
                for (r = 0; r < i; r++) this.writeUint8(e.charCodeAt(r));
                for (; r < n; r++) this.writeUint8(0)
            } else
                for (r = 0; r < e.length; r++) this.writeUint8(e.charCodeAt(r))
        } else this.writeUint8Array(new TextEncoder(t).encode(e.substring(0, n)))
    }, o.prototype.writeCString = function(e, t) {
        var n = 0;
        if (null != t) {
            var r = Math.min(e.length, t);
            for (n = 0; n < r; n++) this.writeUint8(e.charCodeAt(n));
            for (; n < t; n++) this.writeUint8(0)
        } else {
            for (n = 0; n < e.length; n++) this.writeUint8(e.charCodeAt(n));
            this.writeUint8(0)
        }
    }, o.prototype.writeStruct = function(e, t) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[n + 1];
            this.writeType(r, t[e[n]], t)
        }
    }, o.prototype.writeType = function(e, t, n) {
        if ("function" == typeof e) return e(this, t);
        if ("object" == typeof e && !(e instanceof Array)) return e.set(this, t, n);
        var r, i = null,
            a = "ASCII",
            s = this.position;
        switch ("string" == typeof e && /:/.test(e) && (e = (r = e.split(":"))[0], i = parseInt(r[1])), "string" == typeof e && /,/.test(e) && (e = (r = e.split(","))[0], a = parseInt(r[1])), e) {
            case "uint8":
                this.writeUint8(t);
                break;
            case "int8":
                this.writeInt8(t);
                break;
            case "uint16":
                this.writeUint16(t, this.endianness);
                break;
            case "int16":
                this.writeInt16(t, this.endianness);
                break;
            case "uint32":
                this.writeUint32(t, this.endianness);
                break;
            case "int32":
                this.writeInt32(t, this.endianness);
                break;
            case "float32":
                this.writeFloat32(t, this.endianness);
                break;
            case "float64":
                this.writeFloat64(t, this.endianness);
                break;
            case "uint16be":
                this.writeUint16(t, o.BIG_ENDIAN);
                break;
            case "int16be":
                this.writeInt16(t, o.BIG_ENDIAN);
                break;
            case "uint32be":
                this.writeUint32(t, o.BIG_ENDIAN);
                break;
            case "int32be":
                this.writeInt32(t, o.BIG_ENDIAN);
                break;
            case "float32be":
                this.writeFloat32(t, o.BIG_ENDIAN);
                break;
            case "float64be":
                this.writeFloat64(t, o.BIG_ENDIAN);
                break;
            case "uint16le":
                this.writeUint16(t, o.LITTLE_ENDIAN);
                break;
            case "int16le":
                this.writeInt16(t, o.LITTLE_ENDIAN);
                break;
            case "uint32le":
                this.writeUint32(t, o.LITTLE_ENDIAN);
                break;
            case "int32le":
                this.writeInt32(t, o.LITTLE_ENDIAN);
                break;
            case "float32le":
                this.writeFloat32(t, o.LITTLE_ENDIAN);
                break;
            case "float64le":
                this.writeFloat64(t, o.LITTLE_ENDIAN);
                break;
            case "cstring":
                this.writeCString(t, i);
                break;
            case "string":
                this.writeString(t, a, i);
                break;
            case "u16string":
                this.writeUCS2String(t, this.endianness, i);
                break;
            case "u16stringle":
                this.writeUCS2String(t, o.LITTLE_ENDIAN, i);
                break;
            case "u16stringbe":
                this.writeUCS2String(t, o.BIG_ENDIAN, i);
                break;
            default:
                if (3 == e.length) {
                    for (var u = e[1], c = 0; c < t.length; c++) this.writeType(u, t[c]);
                    break
                }
                this.writeStruct(e, t)
        }
        null != i && (this.position = s, this._realloc(i), this.position = s + i)
    }, o.prototype.writeUint64 = function(e) {
        this.writeUint32(Math.floor(e / 4294967296)), this.writeUint32(4294967295 & e)
    }, o.prototype.writeUint24 = function(e) {
        this.writeUint8((16711680 & e) >> 16), this.writeUint8((65280 & e) >> 8), this.writeUint8(255 & e)
    }, o.prototype.adjustUint32 = function(e, t) {
        var n = this.position;
        this.seek(e), this.writeUint32(t), this.seek(n)
    }, o.prototype.mapInt32Array = function(e, t) {
        this._realloc(4 * e);
        var n = new Int32Array(this._buffer, this.byteOffset + this.position, e);
        return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n
    }, o.prototype.mapInt16Array = function(e, t) {
        this._realloc(2 * e);
        var n = new Int16Array(this._buffer, this.byteOffset + this.position, e);
        return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 2 * e, n
    }, o.prototype.mapInt8Array = function(e) {
        this._realloc(1 * e);
        var t = new Int8Array(this._buffer, this.byteOffset + this.position, e);
        return this.position += 1 * e, t
    }, o.prototype.mapUint32Array = function(e, t) {
        this._realloc(4 * e);
        var n = new Uint32Array(this._buffer, this.byteOffset + this.position, e);
        return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n
    }, o.prototype.mapUint16Array = function(e, t) {
        this._realloc(2 * e);
        var n = new Uint16Array(this._buffer, this.byteOffset + this.position, e);
        return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 2 * e, n
    }, o.prototype.mapFloat64Array = function(e, t) {
        this._realloc(8 * e);
        var n = new Float64Array(this._buffer, this.byteOffset + this.position, e);
        return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 8 * e, n
    }, o.prototype.mapFloat32Array = function(e, t) {
        this._realloc(4 * e);
        var n = new Float32Array(this._buffer, this.byteOffset + this.position, e);
        return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n
    };
    var s = function(e) {
        this.buffers = [], this.bufferIndex = -1, e && (this.insertBuffer(e), this.bufferIndex = 0)
    };
    s.prototype = new o(new ArrayBuffer, 0, o.BIG_ENDIAN), s.prototype.initialized = function() {
        var e;
        if (this.bufferIndex > -1) return !0;
        if (!(this.buffers.length > 0)) return i.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), !1;
        return 0 === (e = this.buffers[0]).fileStart ? (this.buffer = e, this.bufferIndex = 0, i.debug("MultiBufferStream", "Stream ready for parsing"), !0) : (i.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), !1)
    }, ArrayBuffer.concat = function(e, t) {
        i.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (e.byteLength + t.byteLength));
        var n = new Uint8Array(e.byteLength + t.byteLength);
        return n.set(new Uint8Array(e), 0), n.set(new Uint8Array(t), e.byteLength), n.buffer
    }, s.prototype.reduceBuffer = function(e, t, n) {
        var r;
        return (r = new Uint8Array(n)).set(new Uint8Array(e, t, n)), r.buffer.fileStart = e.fileStart + t, r.buffer.usedBytes = 0, r.buffer
    }, s.prototype.insertBuffer = function(e) {
        for (var t = !0, n = 0; n < this.buffers.length; n++) {
            var r = this.buffers[n];
            if (e.fileStart <= r.fileStart) {
                if (e.fileStart === r.fileStart) {
                    if (e.byteLength > r.byteLength) {
                        this.buffers.splice(n, 1), n--;
                        continue
                    }
                    i.warn("MultiBufferStream", "Buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ") already appended, ignoring")
                } else e.fileStart + e.byteLength <= r.fileStart || (e = this.reduceBuffer(e, 0, r.fileStart - e.fileStart)), i.debug("MultiBufferStream", "Appending new buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ")"), this.buffers.splice(n, 0, e), 0 === n && (this.buffer = e);
                t = !1;
                break
            }
            if (e.fileStart < r.fileStart + r.byteLength) {
                var a = r.fileStart + r.byteLength - e.fileStart,
                    o = e.byteLength - a;
                if (o > 0) e = this.reduceBuffer(e, a, o);
                else {
                    t = !1;
                    break
                }
            }
        }
        t && (i.debug("MultiBufferStream", "Appending new buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ")"), this.buffers.push(e), 0 === n && (this.buffer = e))
    }, s.prototype.logBufferLevel = function(e) {
        var t, n, r, a, o, s = [],
            u = "";
        for (t = 0, r = 0, a = 0; t < this.buffers.length; t++) n = this.buffers[t], 0 === t ? (o = {}, s.push(o), o.start = n.fileStart, o.end = n.fileStart + n.byteLength, u += "[" + o.start + "-") : o.end === n.fileStart ? o.end = n.fileStart + n.byteLength : ((o = {}).start = n.fileStart, u += s[s.length - 1].end - 1 + "], [" + o.start + "-", o.end = n.fileStart + n.byteLength, s.push(o)), r += n.usedBytes, a += n.byteLength;
        s.length > 0 && (u += o.end - 1 + "]");
        var c = e ? i.info : i.debug;
        c("MultiBufferStream", 0 === this.buffers.length ? "No more buffer in memory" : "" + this.buffers.length + " stored buffer(s) (" + r + "/" + a + " bytes), continuous ranges: " + u)
    }, s.prototype.cleanBuffers = function() {
        var e, t;
        for (e = 0; e < this.buffers.length; e++)(t = this.buffers[e]).usedBytes === t.byteLength && (i.debug("MultiBufferStream", "Removing buffer #" + e), this.buffers.splice(e, 1), e--)
    }, s.prototype.mergeNextBuffer = function() {
        if (!(this.bufferIndex + 1 < this.buffers.length)) return !1;
        if ((e = this.buffers[this.bufferIndex + 1]).fileStart !== this.buffer.fileStart + this.buffer.byteLength) return !1;
        var e, t = this.buffer.byteLength,
            n = this.buffer.usedBytes,
            r = this.buffer.fileStart;
        return this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, e), this.buffer = this.buffers[this.bufferIndex], this.buffers.splice(this.bufferIndex + 1, 1), this.buffer.usedBytes = n, this.buffer.fileStart = r, i.debug("ISOFile", "Concatenating buffer for box parsing (length: " + t + "->" + this.buffer.byteLength + ")"), !0
    }, s.prototype.findPosition = function(e, t, n) {
        var r, a = null,
            o = -1;
        for (r = !0 === e ? 0 : this.bufferIndex; r < this.buffers.length && (a = this.buffers[r]).fileStart <= t;) {
            o = r, n && (a.fileStart + a.byteLength <= t ? a.usedBytes = a.byteLength : a.usedBytes = t - a.fileStart, this.logBufferLevel());
            r++
        }
        return -1 === o ? -1 : (a = this.buffers[o]).fileStart + a.byteLength >= t ? (i.debug("MultiBufferStream", "Found position in existing buffer #" + o), o) : -1
    }, s.prototype.findEndContiguousBuf = function(e) {
        var t, n, r, i = void 0 !== e ? e : this.bufferIndex;
        if (n = this.buffers[i], this.buffers.length > i + 1)
            for (t = i + 1; t < this.buffers.length; t++)
                if ((r = this.buffers[t]).fileStart === n.fileStart + n.byteLength) n = r;
                else break;
        return n.fileStart + n.byteLength
    }, s.prototype.getEndFilePositionAfter = function(e) {
        var t = this.findPosition(!0, e, !1);
        return -1 !== t ? this.findEndContiguousBuf(t) : e
    }, s.prototype.addUsedBytes = function(e) {
        this.buffer.usedBytes += e, this.logBufferLevel()
    }, s.prototype.setAllUsedBytes = function() {
        this.buffer.usedBytes = this.buffer.byteLength, this.logBufferLevel()
    }, s.prototype.seek = function(e, t, n) {
        var r;
        return -1 !== (r = this.findPosition(t, e, n)) ? (this.buffer = this.buffers[r], this.bufferIndex = r, this.position = e - this.buffer.fileStart, i.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), !0) : (i.debug("MultiBufferStream", "Position " + e + " not found in buffered data"), !1)
    }, s.prototype.getPosition = function() {
        if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
        return this.buffers[this.bufferIndex].fileStart + this.position
    }, s.prototype.getLength = function() {
        return this.byteLength
    }, s.prototype.getEndPosition = function() {
        if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
        return this.buffers[this.bufferIndex].fileStart + this.byteLength
    }, void 0 !== t && (t.MultiBufferStream = s);
    var u = function() {
        var e = [];
        e[3] = "ES_Descriptor", e[4] = "DecoderConfigDescriptor", e[5] = "DecoderSpecificInfo", e[6] = "SLConfigDescriptor", this.getDescriptorName = function(t) {
            return e[t]
        };
        var t = this,
            n = {};
        return this.parseOneDescriptor = function(t) {
            var r, a, o, s = 0,
                u = 0;
            for (r = t.readUint8(), s++, o = t.readUint8(), s++; 128 & o;) u = (127 & o) << 7, o = t.readUint8(), s++;
            return u += 127 & o, i.debug("MPEG4DescriptorParser", "Found " + (e[r] || "Descriptor " + r) + ", size " + u + " at position " + t.getPosition()), (a = e[r] ? new n[e[r]](u) : new n.Descriptor(u)).parse(t), a
        }, n.Descriptor = function(e, t) {
            this.tag = e, this.size = t, this.descs = []
        }, n.Descriptor.prototype.parse = function(e) {
            this.data = e.readUint8Array(this.size)
        }, n.Descriptor.prototype.findDescriptor = function(e) {
            for (var t = 0; t < this.descs.length; t++)
                if (this.descs[t].tag == e) return this.descs[t];
            return null
        }, n.Descriptor.prototype.parseRemainingDescriptors = function(e) {
            for (var n = e.position; e.position < n + this.size;) {
                var r = t.parseOneDescriptor(e);
                this.descs.push(r)
            }
        }, n.ES_Descriptor = function(e) {
            n.Descriptor.call(this, 3, e)
        }, n.ES_Descriptor.prototype = new n.Descriptor, n.ES_Descriptor.prototype.parse = function(e) {
            if (this.ES_ID = e.readUint16(), this.flags = e.readUint8(), this.size -= 3, 128 & this.flags ? (this.dependsOn_ES_ID = e.readUint16(), this.size -= 2) : this.dependsOn_ES_ID = 0, 64 & this.flags) {
                var t = e.readUint8();
                this.URL = e.readString(t), this.size -= t + 1
            } else this.URL = "";
            32 & this.flags ? (this.OCR_ES_ID = e.readUint16(), this.size -= 2) : this.OCR_ES_ID = 0, this.parseRemainingDescriptors(e)
        }, n.ES_Descriptor.prototype.getOTI = function(e) {
            var t = this.findDescriptor(4);
            return t ? t.oti : 0
        }, n.ES_Descriptor.prototype.getAudioConfig = function(e) {
            var t = this.findDescriptor(4);
            if (!t) return null;
            var n = t.findDescriptor(5);
            if (!n || !n.data) return null;
            var r = (248 & n.data[0]) >> 3;
            return 31 === r && n.data.length >= 2 && (r = 32 + ((7 & n.data[0]) << 3) + ((224 & n.data[1]) >> 5)), r
        }, n.DecoderConfigDescriptor = function(e) {
            n.Descriptor.call(this, 4, e)
        }, n.DecoderConfigDescriptor.prototype = new n.Descriptor, n.DecoderConfigDescriptor.prototype.parse = function(e) {
            this.oti = e.readUint8(), this.streamType = e.readUint8(), this.bufferSize = e.readUint24(), this.maxBitrate = e.readUint32(), this.avgBitrate = e.readUint32(), this.size -= 13, this.parseRemainingDescriptors(e)
        }, n.DecoderSpecificInfo = function(e) {
            n.Descriptor.call(this, 5, e)
        }, n.DecoderSpecificInfo.prototype = new n.Descriptor, n.SLConfigDescriptor = function(e) {
            n.Descriptor.call(this, 6, e)
        }, n.SLConfigDescriptor.prototype = new n.Descriptor, this
    };
    void 0 !== t && (t.MPEG4DescriptorParser = u);
    var c = {
        ERR_INVALID_DATA: -1,
        ERR_NOT_ENOUGH_DATA: 0,
        OK: 1,
        BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
        FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
        CONTAINER_BOXES: [
            ["moov", ["trak", "pssh"]],
            ["trak"],
            ["edts"],
            ["mdia"],
            ["minf"],
            ["dinf"],
            ["stbl", ["sgpd", "sbgp"]],
            ["mvex", ["trex"]],
            ["moof", ["traf"]],
            ["traf", ["trun", "sgpd", "sbgp"]],
            ["vttc"],
            ["tref"],
            ["iref"],
            ["mfra", ["tfra"]],
            ["meco"],
            ["hnti"],
            ["hinf"],
            ["strk"],
            ["strd"],
            ["sinf"],
            ["rinf"],
            ["schi"],
            ["trgr"],
            ["udta", ["kind"]],
            ["iprp", ["ipma"]],
            ["ipco"]
        ],
        boxCodes: [],
        fullBoxCodes: [],
        containerBoxCodes: [],
        sampleEntryCodes: {},
        sampleGroupEntryCodes: [],
        trackGroupTypes: [],
        UUIDBoxes: {},
        UUIDs: [],
        initialize: function() {
            c.FullBox.prototype = new c.Box, c.ContainerBox.prototype = new c.Box, c.SampleEntry.prototype = new c.Box, c.TrackGroupTypeBox.prototype = new c.FullBox, c.BASIC_BOXES.forEach(function(e) {
                c.createBoxCtor(e)
            }), c.FULL_BOXES.forEach(function(e) {
                c.createFullBoxCtor(e)
            }), c.CONTAINER_BOXES.forEach(function(e) {
                c.createContainerBoxCtor(e[0], null, e[1])
            })
        },
        Box: function(e, t, n) {
            this.type = e, this.size = t, this.uuid = n
        },
        FullBox: function(e, t, n) {
            c.Box.call(this, e, t, n), this.flags = 0, this.version = 0
        },
        ContainerBox: function(e, t, n) {
            c.Box.call(this, e, t, n), this.boxes = []
        },
        SampleEntry: function(e, t, n, r) {
            c.ContainerBox.call(this, e, t), this.hdr_size = n, this.start = r
        },
        SampleGroupEntry: function(e) {
            this.grouping_type = e
        },
        TrackGroupTypeBox: function(e, t) {
            c.FullBox.call(this, e, t)
        },
        createBoxCtor: function(e, t) {
            c.boxCodes.push(e), c[e + "Box"] = function(t) {
                c.Box.call(this, e, t)
            }, c[e + "Box"].prototype = new c.Box, t && (c[e + "Box"].prototype.parse = t)
        },
        createFullBoxCtor: function(e, t) {
            c[e + "Box"] = function(t) {
                c.FullBox.call(this, e, t)
            }, c[e + "Box"].prototype = new c.FullBox, c[e + "Box"].prototype.parse = function(e) {
                this.parseFullHeader(e), t && t.call(this, e)
            }
        },
        addSubBoxArrays: function(e) {
            if (e) {
                this.subBoxNames = e;
                for (var t = e.length, n = 0; n < t; n++) this[e[n] + "s"] = []
            }
        },
        createContainerBoxCtor: function(e, t, n) {
            c[e + "Box"] = function(t) {
                c.ContainerBox.call(this, e, t), c.addSubBoxArrays.call(this, n)
            }, c[e + "Box"].prototype = new c.ContainerBox, t && (c[e + "Box"].prototype.parse = t)
        },
        createMediaSampleEntryCtor: function(e, t, n) {
            c.sampleEntryCodes[e] = [], c[e + "SampleEntry"] = function(e, t) {
                c.SampleEntry.call(this, e, t), c.addSubBoxArrays.call(this, n)
            }, c[e + "SampleEntry"].prototype = new c.SampleEntry, t && (c[e + "SampleEntry"].prototype.parse = t)
        },
        createSampleEntryCtor: function(e, t, n, r) {
            c.sampleEntryCodes[e].push(t), c[t + "SampleEntry"] = function(n) {
                c[e + "SampleEntry"].call(this, t, n), c.addSubBoxArrays.call(this, r)
            }, c[t + "SampleEntry"].prototype = new c[e + "SampleEntry"], n && (c[t + "SampleEntry"].prototype.parse = n)
        },
        createEncryptedSampleEntryCtor: function(e, t, n) {
            c.createSampleEntryCtor.call(this, e, t, n, ["sinf"])
        },
        createSampleGroupCtor: function(e, t) {
            c[e + "SampleGroupEntry"] = function(t) {
                c.SampleGroupEntry.call(this, e, t)
            }, c[e + "SampleGroupEntry"].prototype = new c.SampleGroupEntry, t && (c[e + "SampleGroupEntry"].prototype.parse = t)
        },
        createTrackGroupCtor: function(e, t) {
            c[e + "TrackGroupTypeBox"] = function(t) {
                c.TrackGroupTypeBox.call(this, e, t)
            }, c[e + "TrackGroupTypeBox"].prototype = new c.TrackGroupTypeBox, t && (c[e + "TrackGroupTypeBox"].prototype.parse = t)
        },
        createUUIDBox: function(e, t, n, r) {
            c.UUIDs.push(e), c.UUIDBoxes[e] = function(r) {
                t ? c.FullBox.call(this, "uuid", r, e) : n ? c.ContainerBox.call(this, "uuid", r, e) : c.Box.call(this, "uuid", r, e)
            }, c.UUIDBoxes[e].prototype = t ? new c.FullBox : n ? new c.ContainerBox : new c.Box, r && (t ? c.UUIDBoxes[e].prototype.parse = function(e) {
                this.parseFullHeader(e), r && r.call(this, e)
            } : c.UUIDBoxes[e].prototype.parse = r)
        }
    };
    c.initialize(), c.TKHD_FLAG_ENABLED = 1, c.TKHD_FLAG_IN_MOVIE = 2, c.TKHD_FLAG_IN_PREVIEW = 4, c.TFHD_FLAG_BASE_DATA_OFFSET = 1, c.TFHD_FLAG_SAMPLE_DESC = 2, c.TFHD_FLAG_SAMPLE_DUR = 8, c.TFHD_FLAG_SAMPLE_SIZE = 16, c.TFHD_FLAG_SAMPLE_FLAGS = 32, c.TFHD_FLAG_DUR_EMPTY = 65536, c.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072, c.TRUN_FLAGS_DATA_OFFSET = 1, c.TRUN_FLAGS_FIRST_FLAG = 4, c.TRUN_FLAGS_DURATION = 256, c.TRUN_FLAGS_SIZE = 512, c.TRUN_FLAGS_FLAGS = 1024, c.TRUN_FLAGS_CTS_OFFSET = 2048, c.Box.prototype.add = function(e) {
        return this.addBox(new c[e + "Box"])
    }, c.Box.prototype.addBox = function(e) {
        return this.boxes.push(e), this[e.type + "s"] ? this[e.type + "s"].push(e) : this[e.type] = e, e
    }, c.Box.prototype.set = function(e, t) {
        return this[e] = t, this
    }, c.Box.prototype.addEntry = function(e, t) {
        var n = t || "entries";
        return !this[n] && (this[n] = []), this[n].push(e), this
    }, void 0 !== t && (t.BoxParser = c), c.parseUUID = function(e) {
        return c.parseHex16(e)
    }, c.parseHex16 = function(e) {
        for (var t = "", n = 0; n < 16; n++) {
            var r = e.readUint8().toString(16);
            t += 1 === r.length ? "0" + r : r
        }
        return t
    }, c.parseOneBox = function(e, t, n) {
        var r, a, o, s = e.getPosition(),
            u = 0;
        if (e.getEndPosition() - s < 8) return i.debug("BoxParser", "Not enough data in stream to parse the type and size of the box"), {
            code: c.ERR_NOT_ENOUGH_DATA
        };
        if (n && n < 8) return i.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box"), {
            code: c.ERR_NOT_ENOUGH_DATA
        };
        var l = e.readUint32(),
            d = e.readString(4),
            f = d;
        if (i.debug("BoxParser", "Found box of type '" + d + "' and size " + l + " at position " + s), u = 8, "uuid" == d) {
            if (e.getEndPosition() - e.getPosition() < 16 || n - u < 16) return e.seek(s), i.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box"), {
                code: c.ERR_NOT_ENOUGH_DATA
            };
            o = c.parseUUID(e), u += 16, f = o
        }
        if (1 == l) {
            if (e.getEndPosition() - e.getPosition() < 8 || n && n - u < 8) return e.seek(s), i.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + d + '" box'), {
                code: c.ERR_NOT_ENOUGH_DATA
            };
            l = e.readUint64(), u += 8
        } else if (0 === l) {
            if (n) l = n;
            else if ("mdat" !== d) return i.error("BoxParser", "Unlimited box size not supported for type: '" + d + "'"), r = new c.Box(d, l), {
                code: c.OK,
                box: r,
                size: r.size
            }
        }
        return 0 !== l && l < u ? (i.error("BoxParser", "Box of type " + d + " has an invalid size " + l + " (too small to be a box)"), {
            code: c.ERR_NOT_ENOUGH_DATA,
            type: d,
            size: l,
            hdr_size: u,
            start: s
        }) : 0 !== l && n && l > n ? (i.error("BoxParser", "Box of type '" + d + "' has a size " + l + " greater than its container size " + n), {
            code: c.ERR_NOT_ENOUGH_DATA,
            type: d,
            size: l,
            hdr_size: u,
            start: s
        }) : 0 !== l && s + l > e.getEndPosition() ? (e.seek(s), i.info("BoxParser", "Not enough data in stream to parse the entire '" + d + "' box"), {
            code: c.ERR_NOT_ENOUGH_DATA,
            type: d,
            size: l,
            hdr_size: u,
            start: s
        }) : t ? {
            code: c.OK,
            type: d,
            size: l,
            hdr_size: u,
            start: s
        } : (c[d + "Box"] ? r = new c[d + "Box"](l) : "uuid" !== d ? (i.warn("BoxParser", "Unknown box type: '" + d + "'"), (r = new c.Box(d, l)).has_unparsed_data = !0) : c.UUIDBoxes[o] ? r = new c.UUIDBoxes[o](l) : (i.warn("BoxParser", "Unknown uuid type: '" + o + "'"), (r = new c.Box(d, l)).uuid = o, r.has_unparsed_data = !0), r.hdr_size = u, r.start = s, r.write === c.Box.prototype.write && "mdat" !== r.type && (i.info("BoxParser", "'" + f + "' box writing not yet implemented, keeping unparsed data in memory for later write"), r.parseDataAndRewind(e)), r.parse(e), (a = e.getPosition() - (r.start + r.size)) < 0 ? (i.warn("BoxParser", "Parsing of box '" + f + "' did not read the entire indicated box data size (missing " + -a + " bytes), seeking forward"), e.seek(r.start + r.size)) : a > 0 && (i.error("BoxParser", "Parsing of box '" + f + "' read " + a + " more bytes than the indicated box data size, seeking backwards"), 0 !== r.size && e.seek(r.start + r.size)), {
            code: c.OK,
            box: r,
            size: r.size
        })
    }, c.Box.prototype.parse = function(e) {
        "mdat" != this.type ? this.data = e.readUint8Array(this.size - this.hdr_size) : 0 === this.size ? e.seek(e.getEndPosition()) : e.seek(this.start + this.size)
    }, c.Box.prototype.parseDataAndRewind = function(e) {
        this.data = e.readUint8Array(this.size - this.hdr_size), e.position -= this.size - this.hdr_size
    }, c.FullBox.prototype.parseDataAndRewind = function(e) {
        this.parseFullHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 4, e.position -= this.size - this.hdr_size
    }, c.FullBox.prototype.parseFullHeader = function(e) {
        this.version = e.readUint8(), this.flags = e.readUint24(), this.hdr_size += 4
    }, c.FullBox.prototype.parse = function(e) {
        this.parseFullHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size)
    }, c.ContainerBox.prototype.parse = function(e) {
        for (; e.getPosition() < this.start + this.size;) {
            if ((t = c.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== c.OK) return;
            if (n = t.box, this.boxes.push(n), this.subBoxNames && -1 != this.subBoxNames.indexOf(n.type)) this[this.subBoxNames[this.subBoxNames.indexOf(n.type)] + "s"].push(n);
            else {
                var t, n, r = "uuid" !== n.type ? n.type : n.uuid;
                this[r] ? i.warn("Box of type " + r + " already stored in field of this type") : this[r] = n
            }
        }
    }, c.Box.prototype.parseLanguage = function(e) {
        this.language = e.readUint16();
        var t = [];
        t[0] = this.language >> 10 & 31, t[1] = this.language >> 5 & 31, t[2] = 31 & this.language, this.languageString = String.fromCharCode(t[0] + 96, t[1] + 96, t[2] + 96)
    }, c.SAMPLE_ENTRY_TYPE_VISUAL = "Visual", c.SAMPLE_ENTRY_TYPE_AUDIO = "Audio", c.SAMPLE_ENTRY_TYPE_HINT = "Hint", c.SAMPLE_ENTRY_TYPE_METADATA = "Metadata", c.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle", c.SAMPLE_ENTRY_TYPE_SYSTEM = "System", c.SAMPLE_ENTRY_TYPE_TEXT = "Text", c.SampleEntry.prototype.parseHeader = function(e) {
        e.readUint8Array(6), this.data_reference_index = e.readUint16(), this.hdr_size += 8
    }, c.SampleEntry.prototype.parse = function(e) {
        this.parseHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size)
    }, c.SampleEntry.prototype.parseDataAndRewind = function(e) {
        this.parseHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 8, e.position -= this.size - this.hdr_size
    }, c.SampleEntry.prototype.parseFooter = function(e) {
        c.ContainerBox.prototype.parse.call(this, e)
    }, c.createMediaSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_HINT), c.createMediaSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_METADATA), c.createMediaSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_SUBTITLE), c.createMediaSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_SYSTEM), c.createMediaSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_TEXT), c.createMediaSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, function(e) {
        var t;
        this.parseHeader(e), e.readUint16(), e.readUint16(), e.readUint32Array(3), this.width = e.readUint16(), this.height = e.readUint16(), this.horizresolution = e.readUint32(), this.vertresolution = e.readUint32(), e.readUint32(), this.frame_count = e.readUint16(), t = Math.min(31, e.readUint8()), this.compressorname = e.readString(t), t < 31 && e.readString(31 - t), this.depth = e.readUint16(), e.readUint16(), this.parseFooter(e)
    }), c.createMediaSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_AUDIO, function(e) {
        this.parseHeader(e), e.readUint32Array(2), this.channel_count = e.readUint16(), this.samplesize = e.readUint16(), e.readUint16(), e.readUint16(), this.samplerate = e.readUint32() / 65536, this.parseFooter(e)
    }), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "avc1"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "avc2"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "avc3"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "avc4"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "av01"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "hev1"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "vvcN"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "vp08"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "vp09"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3"), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_AUDIO, "Opus"), c.createEncryptedSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_VISUAL, "encv"), c.createEncryptedSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_AUDIO, "enca"), c.createEncryptedSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu"), c.createEncryptedSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_SYSTEM, "encs"), c.createEncryptedSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_TEXT, "enct"), c.createEncryptedSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_METADATA, "encm"), c.createBoxCtor("a1lx", function(e) {
        var t = ((1 & e.readUint8() & 1) + 1) * 16;
        this.layer_size = [];
        for (var n = 0; n < 3; n++) 16 == t ? this.layer_size[n] = e.readUint16() : this.layer_size[n] = e.readUint32()
    }), c.createBoxCtor("a1op", function(e) {
        this.op_index = e.readUint8()
    }), c.createFullBoxCtor("auxC", function(e) {
        this.aux_type = e.readCString();
        var t = this.size - this.hdr_size - (this.aux_type.length + 1);
        this.aux_subtype = e.readUint8Array(t)
    }), c.createBoxCtor("av1C", function(e) {
        var t = e.readUint8();
        if (this.version = 127 & t, 1 !== this.version) {
            i.error("av1C version " + this.version + " not supported");
            return
        }
        if (t = e.readUint8(), this.seq_profile = t >> 5 & 7, this.seq_level_idx_0 = 31 & t, t = e.readUint8(), this.seq_tier_0 = t >> 7 & 1, this.high_bitdepth = t >> 6 & 1, this.twelve_bit = t >> 5 & 1, this.monochrome = t >> 4 & 1, this.chroma_subsampling_x = t >> 3 & 1, this.chroma_subsampling_y = t >> 2 & 1, this.chroma_sample_position = 3 & t, t = e.readUint8(), this.reserved_1 = t >> 5 & 7, 0 !== this.reserved_1) {
            i.error("av1C reserved_1 parsing problem");
            return
        }
        if (this.initial_presentation_delay_present = t >> 4 & 1, 1 === this.initial_presentation_delay_present) this.initial_presentation_delay_minus_one = 15 & t;
        else if (this.reserved_2 = 15 & t, 0 !== this.reserved_2) {
            i.error("av1C reserved_2 parsing problem");
            return
        }
        var n = this.size - this.hdr_size - 4;
        this.configOBUs = e.readUint8Array(n)
    }), c.createBoxCtor("avcC", function(e) {
        var t, n;
        for (t = 0, this.configurationVersion = e.readUint8(), this.AVCProfileIndication = e.readUint8(), this.profile_compatibility = e.readUint8(), this.AVCLevelIndication = e.readUint8(), this.lengthSizeMinusOne = 3 & e.readUint8(), this.nb_SPS_nalus = 31 & e.readUint8(), n = this.size - this.hdr_size - 6, this.SPS = []; t < this.nb_SPS_nalus; t++) this.SPS[t] = {}, this.SPS[t].length = e.readUint16(), this.SPS[t].nalu = e.readUint8Array(this.SPS[t].length), n -= 2 + this.SPS[t].length;
        for (this.nb_PPS_nalus = e.readUint8(), n--, this.PPS = [], t = 0; t < this.nb_PPS_nalus; t++) this.PPS[t] = {}, this.PPS[t].length = e.readUint16(), this.PPS[t].nalu = e.readUint8Array(this.PPS[t].length), n -= 2 + this.PPS[t].length;
        n > 0 && (this.ext = e.readUint8Array(n))
    }), c.createBoxCtor("btrt", function(e) {
        this.bufferSizeDB = e.readUint32(), this.maxBitrate = e.readUint32(), this.avgBitrate = e.readUint32()
    }), c.createBoxCtor("clap", function(e) {
        this.cleanApertureWidthN = e.readUint32(), this.cleanApertureWidthD = e.readUint32(), this.cleanApertureHeightN = e.readUint32(), this.cleanApertureHeightD = e.readUint32(), this.horizOffN = e.readUint32(), this.horizOffD = e.readUint32(), this.vertOffN = e.readUint32(), this.vertOffD = e.readUint32()
    }), c.createBoxCtor("clli", function(e) {
        this.max_content_light_level = e.readUint16(), this.max_pic_average_light_level = e.readUint16()
    }), c.createFullBoxCtor("co64", function(e) {
        var t, n;
        if (t = e.readUint32(), this.chunk_offsets = [], 0 === this.version)
            for (n = 0; n < t; n++) this.chunk_offsets.push(e.readUint64())
    }), c.createFullBoxCtor("CoLL", function(e) {
        this.maxCLL = e.readUint16(), this.maxFALL = e.readUint16()
    }), c.createBoxCtor("colr", function(e) {
        if (this.colour_type = e.readString(4), "nclx" === this.colour_type) {
            this.colour_primaries = e.readUint16(), this.transfer_characteristics = e.readUint16(), this.matrix_coefficients = e.readUint16();
            var t = e.readUint8();
            this.full_range_flag = t >> 7
        } else "rICC" === this.colour_type ? this.ICC_profile = e.readUint8Array(this.size - 4) : "prof" === this.colour_type && (this.ICC_profile = e.readUint8Array(this.size - 4))
    }), c.createFullBoxCtor("cprt", function(e) {
        this.parseLanguage(e), this.notice = e.readCString()
    }), c.createFullBoxCtor("cslg", function(e) {
        0 === this.version && (this.compositionToDTSShift = e.readInt32(), this.leastDecodeToDisplayDelta = e.readInt32(), this.greatestDecodeToDisplayDelta = e.readInt32(), this.compositionStartTime = e.readInt32(), this.compositionEndTime = e.readInt32())
    }), c.createFullBoxCtor("ctts", function(e) {
        if (t = e.readUint32(), this.sample_counts = [], this.sample_offsets = [], 0 === this.version)
            for (n = 0; n < t; n++) {
                this.sample_counts.push(e.readUint32());
                var t, n, r = e.readInt32();
                r < 0 && i.warn("BoxParser", "ctts box uses negative values without using version 1"), this.sample_offsets.push(r)
            } else if (1 == this.version)
                for (n = 0; n < t; n++) this.sample_counts.push(e.readUint32()), this.sample_offsets.push(e.readInt32())
    }), c.createBoxCtor("dac3", function(e) {
        var t = e.readUint8(),
            n = e.readUint8(),
            r = e.readUint8();
        this.fscod = t >> 6, this.bsid = t >> 1 & 31, this.bsmod = (1 & t) << 2 | n >> 6 & 3, this.acmod = n >> 3 & 7, this.lfeon = n >> 2 & 1, this.bit_rate_code = 3 & n | r >> 5 & 7
    }), c.createBoxCtor("dec3", function(e) {
        var t = e.readUint16();
        this.data_rate = t >> 3, this.num_ind_sub = 7 & t, this.ind_subs = [];
        for (var n = 0; n < this.num_ind_sub + 1; n++) {
            var r = {};
            this.ind_subs.push(r);
            var i = e.readUint8(),
                a = e.readUint8(),
                o = e.readUint8();
            r.fscod = i >> 6, r.bsid = i >> 1 & 31, r.bsmod = (1 & i) << 4 | a >> 4 & 15, r.acmod = a >> 1 & 7, r.lfeon = 1 & a, r.num_dep_sub = o >> 1 & 15, r.num_dep_sub > 0 && (r.chan_loc = (1 & o) << 8 | e.readUint8())
        }
    }), c.createFullBoxCtor("dfLa", function(e) {
        var t = [],
            n = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
        for (this.parseFullHeader(e);;) {
            var r = e.readUint8(),
                i = Math.min(127 & r, n.length - 1);
            if (i ? e.readUint8Array(e.readUint24()) : (e.readUint8Array(13), this.samplerate = e.readUint32() >> 12, e.readUint8Array(20)), t.push(n[i]), 128 & r) break
        }
        this.numMetadataBlocks = t.length + " (" + t.join(", ") + ")"
    }), c.createBoxCtor("dimm", function(e) {
        this.bytessent = e.readUint64()
    }), c.createBoxCtor("dmax", function(e) {
        this.time = e.readUint32()
    }), c.createBoxCtor("dmed", function(e) {
        this.bytessent = e.readUint64()
    }), c.createBoxCtor("dOps", function(e) {
        if (this.Version = e.readUint8(), this.OutputChannelCount = e.readUint8(), this.PreSkip = e.readUint16(), this.InputSampleRate = e.readUint32(), this.OutputGain = e.readInt16(), this.ChannelMappingFamily = e.readUint8(), 0 !== this.ChannelMappingFamily) {
            this.StreamCount = e.readUint8(), this.CoupledCount = e.readUint8(), this.ChannelMapping = [];
            for (var t = 0; t < this.OutputChannelCount; t++) this.ChannelMapping[t] = e.readUint8()
        }
    }), c.createFullBoxCtor("dref", function(e) {
        this.entries = [];
        for (var t, n, r = e.readUint32(), i = 0; i < r; i++) {
            if ((t = c.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== c.OK) return;
            n = t.box, this.entries.push(n)
        }
    }), c.createBoxCtor("drep", function(e) {
        this.bytessent = e.readUint64()
    }), c.createFullBoxCtor("elng", function(e) {
        this.extended_language = e.readString(this.size - this.hdr_size)
    }), c.createFullBoxCtor("elst", function(e) {
        this.entries = [];
        for (var t = e.readUint32(), n = 0; n < t; n++) {
            var r = {};
            this.entries.push(r), 1 === this.version ? (r.segment_duration = e.readUint64(), r.media_time = e.readInt64()) : (r.segment_duration = e.readUint32(), r.media_time = e.readInt32()), r.media_rate_integer = e.readInt16(), r.media_rate_fraction = e.readInt16()
        }
    }), c.createFullBoxCtor("emsg", function(e) {
        1 == this.version ? (this.timescale = e.readUint32(), this.presentation_time = e.readUint64(), this.event_duration = e.readUint32(), this.id = e.readUint32(), this.scheme_id_uri = e.readCString(), this.value = e.readCString()) : (this.scheme_id_uri = e.readCString(), this.value = e.readCString(), this.timescale = e.readUint32(), this.presentation_time_delta = e.readUint32(), this.event_duration = e.readUint32(), this.id = e.readUint32());
        var t = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
        1 == this.version && (t -= 4), this.message_data = e.readUint8Array(t)
    }), c.createFullBoxCtor("esds", function(e) {
        var t = e.readUint8Array(this.size - this.hdr_size);
        if (void 0 !== u) {
            var n = new u;
            this.esd = n.parseOneDescriptor(new o(t.buffer, 0, o.BIG_ENDIAN))
        }
    }), c.createBoxCtor("fiel", function(e) {
        this.fieldCount = e.readUint8(), this.fieldOrdering = e.readUint8()
    }), c.createBoxCtor("frma", function(e) {
        this.data_format = e.readString(4)
    }), c.createBoxCtor("ftyp", function(e) {
        var t = this.size - this.hdr_size;
        this.major_brand = e.readString(4), this.minor_version = e.readUint32(), t -= 8, this.compatible_brands = [];
        for (var n = 0; t >= 4;) this.compatible_brands[n] = e.readString(4), t -= 4, n++
    }), c.createFullBoxCtor("hdlr", function(e) {
        0 === this.version && (e.readUint32(), this.handler = e.readString(4), e.readUint32Array(3), this.name = e.readString(this.size - this.hdr_size - 20), "\0" === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)))
    }), c.createBoxCtor("hvcC", function(e) {
        this.configurationVersion = e.readUint8(), i = e.readUint8(), this.general_profile_space = i >> 6, this.general_tier_flag = (32 & i) >> 5, this.general_profile_idc = 31 & i, this.general_profile_compatibility = e.readUint32(), this.general_constraint_indicator = e.readUint8Array(6), this.general_level_idc = e.readUint8(), this.min_spatial_segmentation_idc = 4095 & e.readUint16(), this.parallelismType = 3 & e.readUint8(), this.chroma_format_idc = 3 & e.readUint8(), this.bit_depth_luma_minus8 = 7 & e.readUint8(), this.bit_depth_chroma_minus8 = 7 & e.readUint8(), this.avgFrameRate = e.readUint16(), i = e.readUint8(), this.constantFrameRate = i >> 6, this.numTemporalLayers = (13 & i) >> 3, this.temporalIdNested = (4 & i) >> 2, this.lengthSizeMinusOne = 3 & i, this.nalu_arrays = [];
        var t, n, r, i, a = e.readUint8();
        for (t = 0; t < a; t++) {
            var o = [];
            this.nalu_arrays.push(o), i = e.readUint8(), o.completeness = (128 & i) >> 7, o.nalu_type = 63 & i;
            var s = e.readUint16();
            for (n = 0; n < s; n++) {
                var u = {};
                o.push(u), r = e.readUint16(), u.data = e.readUint8Array(r)
            }
        }
    }), c.createFullBoxCtor("iinf", function(e) {
        var t;
        0 === this.version ? this.entry_count = e.readUint16() : this.entry_count = e.readUint32(), this.item_infos = [];
        for (var n = 0; n < this.entry_count; n++) {
            if ((t = c.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== c.OK) return;
            "infe" !== t.box.type && i.error("BoxParser", "Expected 'infe' box, got " + t.box.type), this.item_infos[n] = t.box
        }
    }), c.createFullBoxCtor("iloc", function(e) {
        t = e.readUint8(), this.offset_size = t >> 4 & 15, this.length_size = 15 & t, t = e.readUint8(), this.base_offset_size = t >> 4 & 15, 1 === this.version || 2 === this.version ? this.index_size = 15 & t : this.index_size = 0, this.items = [];
        var t, n = 0;
        if (this.version < 2) n = e.readUint16();
        else if (2 === this.version) n = e.readUint32();
        else throw "version of iloc box not supported";
        for (var r = 0; r < n; r++) {
            var i = {};
            if (this.items.push(i), this.version < 2) i.item_ID = e.readUint16();
            else if (2 === this.version) i.item_ID = e.readUint16();
            else throw "version of iloc box not supported";
            switch (1 === this.version || 2 === this.version ? i.construction_method = 15 & e.readUint16() : i.construction_method = 0, i.data_reference_index = e.readUint16(), this.base_offset_size) {
                case 0:
                    i.base_offset = 0;
                    break;
                case 4:
                    i.base_offset = e.readUint32();
                    break;
                case 8:
                    i.base_offset = e.readUint64();
                    break;
                default:
                    throw "Error reading base offset size"
            }
            var a = e.readUint16();
            i.extents = [];
            for (var o = 0; o < a; o++) {
                var s = {};
                if (i.extents.push(s), 1 === this.version || 2 === this.version) switch (this.index_size) {
                    case 0:
                        s.extent_index = 0;
                        break;
                    case 4:
                        s.extent_index = e.readUint32();
                        break;
                    case 8:
                        s.extent_index = e.readUint64();
                        break;
                    default:
                        throw "Error reading extent index"
                }
                switch (this.offset_size) {
                    case 0:
                        s.extent_offset = 0;
                        break;
                    case 4:
                        s.extent_offset = e.readUint32();
                        break;
                    case 8:
                        s.extent_offset = e.readUint64();
                        break;
                    default:
                        throw "Error reading extent index"
                }
                switch (this.length_size) {
                    case 0:
                        s.extent_length = 0;
                        break;
                    case 4:
                        s.extent_length = e.readUint32();
                        break;
                    case 8:
                        s.extent_length = e.readUint64();
                        break;
                    default:
                        throw "Error reading extent index"
                }
            }
        }
    }), c.createBoxCtor("imir", function(e) {
        var t = e.readUint8();
        this.reserved = t >> 7, this.axis = 1 & t
    }), c.createFullBoxCtor("infe", function(e) {
        if ((0 === this.version || 1 === this.version) && (this.item_ID = e.readUint16(), this.item_protection_index = e.readUint16(), this.item_name = e.readCString(), this.content_type = e.readCString(), this.content_encoding = e.readCString()), 1 === this.version) {
            this.extension_type = e.readString(4), i.warn("BoxParser", "Cannot parse extension type"), e.seek(this.start + this.size);
            return
        }
        this.version >= 2 && (2 === this.version ? this.item_ID = e.readUint16() : 3 === this.version && (this.item_ID = e.readUint32()), this.item_protection_index = e.readUint16(), this.item_type = e.readString(4), this.item_name = e.readCString(), "mime" === this.item_type ? (this.content_type = e.readCString(), this.content_encoding = e.readCString()) : "uri " === this.item_type && (this.item_uri_type = e.readCString()))
    }), c.createFullBoxCtor("ipma", function(e) {
        var t, n;
        for (t = 0, entry_count = e.readUint32(), this.associations = []; t < entry_count; t++) {
            var r = {};
            this.associations.push(r), this.version < 1 ? r.id = e.readUint16() : r.id = e.readUint32();
            var i = e.readUint8();
            for (n = 0, r.props = []; n < i; n++) {
                var a = e.readUint8(),
                    o = {};
                r.props.push(o), o.essential = (128 & a) >> 7 == 1, 1 & this.flags ? o.property_index = (127 & a) << 8 | e.readUint8() : o.property_index = 127 & a
            }
        }
    }), c.createFullBoxCtor("iref", function(e) {
        var t, n;
        for (this.references = []; e.getPosition() < this.start + this.size;) {
            if ((t = c.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== c.OK) return;
            (n = 0 === this.version ? new c.SingleItemTypeReferenceBox(t.type, t.size, t.hdr_size, t.start) : new c.SingleItemTypeReferenceBoxLarge(t.type, t.size, t.hdr_size, t.start)).write === c.Box.prototype.write && "mdat" !== n.type && (i.warn("BoxParser", n.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), n.parseDataAndRewind(e)), n.parse(e), this.references.push(n)
        }
    }), c.createBoxCtor("irot", function(e) {
        this.angle = 3 & e.readUint8()
    }), c.createFullBoxCtor("ispe", function(e) {
        this.image_width = e.readUint32(), this.image_height = e.readUint32()
    }), c.createFullBoxCtor("kind", function(e) {
        this.schemeURI = e.readCString(), this.value = e.readCString()
    }), c.createFullBoxCtor("leva", function(e) {
        var t = e.readUint8();
        this.levels = [];
        for (var n = 0; n < t; n++) {
            var r = {};
            this.levels[n] = r, r.track_ID = e.readUint32();
            var a = e.readUint8();
            switch (r.padding_flag = a >> 7, r.assignment_type = 127 & a, r.assignment_type) {
                case 0:
                    r.grouping_type = e.readString(4);
                    break;
                case 1:
                    r.grouping_type = e.readString(4), r.grouping_type_parameter = e.readUint32();
                    break;
                case 2:
                case 3:
                    break;
                case 4:
                    r.sub_track_id = e.readUint32();
                    break;
                default:
                    i.warn("BoxParser", "Unknown leva assignement type")
            }
        }
    }), c.createBoxCtor("lsel", function(e) {
        this.layer_id = e.readUint16()
    }), c.createBoxCtor("maxr", function(e) {
        this.period = e.readUint32(), this.bytes = e.readUint32()
    }), c.createBoxCtor("mdcv", function(e) {
        this.display_primaries = [], this.display_primaries[0] = {}, this.display_primaries[0].x = e.readUint16(), this.display_primaries[0].y = e.readUint16(), this.display_primaries[1] = {}, this.display_primaries[1].x = e.readUint16(), this.display_primaries[1].y = e.readUint16(), this.display_primaries[2] = {}, this.display_primaries[2].x = e.readUint16(), this.display_primaries[2].y = e.readUint16(), this.white_point = {}, this.white_point.x = e.readUint16(), this.white_point.y = e.readUint16(), this.max_display_mastering_luminance = e.readUint32(), this.min_display_mastering_luminance = e.readUint32()
    }), c.createFullBoxCtor("mdhd", function(e) {
        1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.timescale = e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.timescale = e.readUint32(), this.duration = e.readUint32()), this.parseLanguage(e), e.readUint16()
    }), c.createFullBoxCtor("mehd", function(e) {
        1 & this.flags && (i.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1"), this.version = 1), 1 == this.version ? this.fragment_duration = e.readUint64() : this.fragment_duration = e.readUint32()
    }), c.createFullBoxCtor("meta", function(e) {
        this.boxes = [], c.ContainerBox.prototype.parse.call(this, e)
    }), c.createFullBoxCtor("mfhd", function(e) {
        this.sequence_number = e.readUint32()
    }), c.createFullBoxCtor("mfro", function(e) {
        this._size = e.readUint32()
    }), c.createFullBoxCtor("mvhd", function(e) {
        1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.timescale = e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.timescale = e.readUint32(), this.duration = e.readUint32()), this.rate = e.readUint32(), this.volume = e.readUint16() >> 8, e.readUint16(), e.readUint32Array(2), this.matrix = e.readUint32Array(9), e.readUint32Array(6), this.next_track_id = e.readUint32()
    }), c.createBoxCtor("npck", function(e) {
        this.packetssent = e.readUint32()
    }), c.createBoxCtor("nump", function(e) {
        this.packetssent = e.readUint64()
    }), c.createFullBoxCtor("padb", function(e) {
        var t = e.readUint32();
        this.padbits = [];
        for (var n = 0; n < Math.floor((t + 1) / 2); n++) this.padbits = e.readUint8()
    }), c.createBoxCtor("pasp", function(e) {
        this.hSpacing = e.readUint32(), this.vSpacing = e.readUint32()
    }), c.createBoxCtor("payl", function(e) {
        this.text = e.readString(this.size - this.hdr_size)
    }), c.createBoxCtor("payt", function(e) {
        this.payloadID = e.readUint32();
        var t = e.readUint8();
        this.rtpmap_string = e.readString(t)
    }), c.createFullBoxCtor("pdin", function(e) {
        var t = (this.size - this.hdr_size) / 8;
        this.rate = [], this.initial_delay = [];
        for (var n = 0; n < t; n++) this.rate[n] = e.readUint32(), this.initial_delay[n] = e.readUint32()
    }), c.createFullBoxCtor("pitm", function(e) {
        0 === this.version ? this.item_id = e.readUint16() : this.item_id = e.readUint32()
    }), c.createFullBoxCtor("pixi", function(e) {
        var t;
        for (t = 0, this.num_channels = e.readUint8(), this.bits_per_channels = []; t < this.num_channels; t++) this.bits_per_channels[t] = e.readUint8()
    }), c.createBoxCtor("pmax", function(e) {
        this.bytes = e.readUint32()
    }), c.createFullBoxCtor("prft", function(e) {
        this.ref_track_id = e.readUint32(), this.ntp_timestamp = e.readUint64(), 0 === this.version ? this.media_time = e.readUint32() : this.media_time = e.readUint64()
    }), c.createFullBoxCtor("pssh", function(e) {
        if (this.system_id = c.parseHex16(e), this.version > 0) {
            var t = e.readUint32();
            this.kid = [];
            for (var n = 0; n < t; n++) this.kid[n] = c.parseHex16(e)
        }
        var r = e.readUint32();
        r > 0 && (this.data = e.readUint8Array(r))
    }), c.createFullBoxCtor("clef", function(e) {
        this.width = e.readUint32(), this.height = e.readUint32()
    }), c.createFullBoxCtor("enof", function(e) {
        this.width = e.readUint32(), this.height = e.readUint32()
    }), c.createFullBoxCtor("prof", function(e) {
        this.width = e.readUint32(), this.height = e.readUint32()
    }), c.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]), c.createBoxCtor("rtp ", function(e) {
        this.descriptionformat = e.readString(4), this.sdptext = e.readString(this.size - this.hdr_size - 4)
    }), c.createFullBoxCtor("saio", function(e) {
        1 & this.flags && (this.aux_info_type = e.readUint32(), this.aux_info_type_parameter = e.readUint32());
        var t = e.readUint32();
        this.offset = [];
        for (var n = 0; n < t; n++) 0 === this.version ? this.offset[n] = e.readUint32() : this.offset[n] = e.readUint64()
    }), c.createFullBoxCtor("saiz", function(e) {
        1 & this.flags && (this.aux_info_type = e.readUint32(), this.aux_info_type_parameter = e.readUint32()), this.default_sample_info_size = e.readUint8();
        var t = e.readUint32();
        if (this.sample_info_size = [], 0 === this.default_sample_info_size)
            for (var n = 0; n < t; n++) this.sample_info_size[n] = e.readUint8()
    }), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_METADATA, "mett", function(e) {
        this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
    }), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_METADATA, "metx", function(e) {
        this.parseHeader(e), this.content_encoding = e.readCString(), this.namespace = e.readCString(), this.schema_location = e.readCString(), this.parseFooter(e)
    }), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function(e) {
        this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
    }), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function(e) {
        this.parseHeader(e), this.namespace = e.readCString(), this.schema_location = e.readCString(), this.auxiliary_mime_types = e.readCString(), this.parseFooter(e)
    }), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function(e) {
        this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
    }), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function(e) {
        this.parseHeader(e), this.displayFlags = e.readUint32(), this.horizontal_justification = e.readInt8(), this.vertical_justification = e.readInt8(), this.bg_color_rgba = e.readUint8Array(4), this.box_record = e.readInt16Array(4), this.style_record = e.readUint8Array(12), this.parseFooter(e)
    }), c.createSampleEntryCtor(c.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function(e) {
        this.parseHeader(e), this.parseFooter(e)
    }), c.createSampleGroupCtor("alst", function(e) {
        var t, n = e.readUint16();
        for (t = 0, this.first_output_sample = e.readUint16(), this.sample_offset = []; t < n; t++) this.sample_offset[t] = e.readUint32();
        var r = this.description_length - 4 - 4 * n;
        for (t = 0, this.num_output_samples = [], this.num_total_samples = []; t < r / 4; t++) this.num_output_samples[t] = e.readUint16(), this.num_total_samples[t] = e.readUint16()
    }), c.createSampleGroupCtor("avll", function(e) {
        this.layerNumber = e.readUint8(), this.accurateStatisticsFlag = e.readUint8(), this.avgBitRate = e.readUint16(), this.avgFrameRate = e.readUint16()
    }), c.createSampleGroupCtor("avss", function(e) {
        this.subSequenceIdentifier = e.readUint16(), this.layerNumber = e.readUint8();
        var t = e.readUint8();
        this.durationFlag = t >> 7, this.avgRateFlag = t >> 6 & 1, this.durationFlag && (this.duration = e.readUint32()), this.avgRateFlag && (this.accurateStatisticsFlag = e.readUint8(), this.avgBitRate = e.readUint16(), this.avgFrameRate = e.readUint16()), this.dependency = [];
        for (var n = e.readUint8(), r = 0; r < n; r++) {
            var i = {};
            this.dependency.push(i), i.subSeqDirectionFlag = e.readUint8(), i.layerNumber = e.readUint8(), i.subSequenceIdentifier = e.readUint16()
        }
    }), c.createSampleGroupCtor("dtrt", function(e) {
        i.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
    }), c.createSampleGroupCtor("mvif", function(e) {
        i.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
    }), c.createSampleGroupCtor("prol", function(e) {
        this.roll_distance = e.readInt16()
    }), c.createSampleGroupCtor("rap ", function(e) {
        var t = e.readUint8();
        this.num_leading_samples_known = t >> 7, this.num_leading_samples = 127 & t
    }), c.createSampleGroupCtor("rash", function(e) {
        if (this.operation_point_count = e.readUint16(), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9) i.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length"), this.data = e.readUint8Array(this.description_length - 2);
        else {
            if (1 === this.operation_point_count) this.target_rate_share = e.readUint16();
            else {
                this.target_rate_share = [], this.available_bitrate = [];
                for (var t = 0; t < this.operation_point_count; t++) this.available_bitrate[t] = e.readUint32(), this.target_rate_share[t] = e.readUint16()
            }
            this.maximum_bitrate = e.readUint32(), this.minimum_bitrate = e.readUint32(), this.discard_priority = e.readUint8()
        }
    }), c.createSampleGroupCtor("roll", function(e) {
        this.roll_distance = e.readInt16()
    }), c.SampleGroupEntry.prototype.parse = function(e) {
        i.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type), this.data = e.readUint8Array(this.description_length)
    }, c.createSampleGroupCtor("scif", function(e) {
        i.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
    }), c.createSampleGroupCtor("scnm", function(e) {
        i.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
    }), c.createSampleGroupCtor("seig", function(e) {
        this.reserved = e.readUint8();
        var t = e.readUint8();
        this.crypt_byte_block = t >> 4, this.skip_byte_block = 15 & t, this.isProtected = e.readUint8(), this.Per_Sample_IV_Size = e.readUint8(), this.KID = c.parseHex16(e), this.constant_IV_size = 0, this.constant_IV = 0, 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && (this.constant_IV_size = e.readUint8(), this.constant_IV = e.readUint8Array(this.constant_IV_size))
    }), c.createSampleGroupCtor("stsa", function(e) {
        i.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
    }), c.createSampleGroupCtor("sync", function(e) {
        var t = e.readUint8();
        this.NAL_unit_type = 63 & t
    }), c.createSampleGroupCtor("tele", function(e) {
        var t = e.readUint8();
        this.level_independently_decodable = t >> 7
    }), c.createSampleGroupCtor("tsas", function(e) {
        i.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
    }), c.createSampleGroupCtor("tscl", function(e) {
        i.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
    }), c.createSampleGroupCtor("vipr", function(e) {
        i.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
    }), c.createFullBoxCtor("sbgp", function(e) {
        this.grouping_type = e.readString(4), 1 === this.version ? this.grouping_type_parameter = e.readUint32() : this.grouping_type_parameter = 0, this.entries = [];
        for (var t = e.readUint32(), n = 0; n < t; n++) {
            var r = {};
            this.entries.push(r), r.sample_count = e.readInt32(), r.group_description_index = e.readInt32()
        }
    }), c.createFullBoxCtor("schm", function(e) {
        this.scheme_type = e.readString(4), this.scheme_version = e.readUint32(), 1 & this.flags && (this.scheme_uri = e.readString(this.size - this.hdr_size - 8))
    }), c.createBoxCtor("sdp ", function(e) {
        this.sdptext = e.readString(this.size - this.hdr_size)
    }), c.createFullBoxCtor("sdtp", function(e) {
        var t, n = this.size - this.hdr_size;
        this.is_leading = [], this.sample_depends_on = [], this.sample_is_depended_on = [], this.sample_has_redundancy = [];
        for (var r = 0; r < n; r++) t = e.readUint8(), this.is_leading[r] = t >> 6, this.sample_depends_on[r] = t >> 4 & 3, this.sample_is_depended_on[r] = t >> 2 & 3, this.sample_has_redundancy[r] = 3 & t
    }), c.createFullBoxCtor("senc"), c.createFullBoxCtor("sgpd", function(e) {
        this.grouping_type = e.readString(4), i.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type), 1 === this.version ? this.default_length = e.readUint32() : this.default_length = 0, this.version >= 2 && (this.default_group_description_index = e.readUint32()), this.entries = [];
        for (var t, n = e.readUint32(), r = 0; r < n; r++) t = c[this.grouping_type + "SampleGroupEntry"] ? new c[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new c.SampleGroupEntry(this.grouping_type), this.entries.push(t), 1 === this.version && 0 === this.default_length ? t.description_length = e.readUint32() : t.description_length = this.default_length, t.write === c.SampleGroupEntry.prototype.write && (i.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"), t.data = e.readUint8Array(t.description_length), e.position -= t.description_length), t.parse(e)
    }), c.createFullBoxCtor("sidx", function(e) {
        this.reference_ID = e.readUint32(), this.timescale = e.readUint32(), 0 === this.version ? (this.earliest_presentation_time = e.readUint32(), this.first_offset = e.readUint32()) : (this.earliest_presentation_time = e.readUint64(), this.first_offset = e.readUint64()), e.readUint16(), this.references = [];
        for (var t = e.readUint16(), n = 0; n < t; n++) {
            var r = {};
            this.references.push(r);
            var i = e.readUint32();
            r.reference_type = i >> 31 & 1, r.referenced_size = 2147483647 & i, r.subsegment_duration = e.readUint32(), i = e.readUint32(), r.starts_with_SAP = i >> 31 & 1, r.SAP_type = i >> 28 & 7, r.SAP_delta_time = 268435455 & i
        }
    }), c.SingleItemTypeReferenceBox = function(e, t, n, r) {
        c.Box.call(this, e, t), this.hdr_size = n, this.start = r
    }, c.SingleItemTypeReferenceBox.prototype = new c.Box, c.SingleItemTypeReferenceBox.prototype.parse = function(e) {
        this.from_item_ID = e.readUint16();
        var t = e.readUint16();
        this.references = [];
        for (var n = 0; n < t; n++) this.references[n] = e.readUint16()
    }, c.SingleItemTypeReferenceBoxLarge = function(e, t, n, r) {
        c.Box.call(this, e, t), this.hdr_size = n, this.start = r
    }, c.SingleItemTypeReferenceBoxLarge.prototype = new c.Box, c.SingleItemTypeReferenceBoxLarge.prototype.parse = function(e) {
        this.from_item_ID = e.readUint32();
        var t = e.readUint16();
        this.references = [];
        for (var n = 0; n < t; n++) this.references[n] = e.readUint32()
    }, c.createFullBoxCtor("SmDm", function(e) {
        this.primaryRChromaticity_x = e.readUint16(), this.primaryRChromaticity_y = e.readUint16(), this.primaryGChromaticity_x = e.readUint16(), this.primaryGChromaticity_y = e.readUint16(), this.primaryBChromaticity_x = e.readUint16(), this.primaryBChromaticity_y = e.readUint16(), this.whitePointChromaticity_x = e.readUint16(), this.whitePointChromaticity_y = e.readUint16(), this.luminanceMax = e.readUint32(), this.luminanceMin = e.readUint32()
    }), c.createFullBoxCtor("smhd", function(e) {
        this.balance = e.readUint16(), e.readUint16()
    }), c.createFullBoxCtor("ssix", function(e) {
        this.subsegments = [];
        for (var t = e.readUint32(), n = 0; n < t; n++) {
            var r = {};
            this.subsegments.push(r), r.ranges = [];
            for (var i = e.readUint32(), a = 0; a < i; a++) {
                var o = {};
                r.ranges.push(o), o.level = e.readUint8(), o.range_size = e.readUint24()
            }
        }
    }), c.createFullBoxCtor("stco", function(e) {
        var t;
        if (t = e.readUint32(), this.chunk_offsets = [], 0 === this.version)
            for (var n = 0; n < t; n++) this.chunk_offsets.push(e.readUint32())
    }), c.createFullBoxCtor("stdp", function(e) {
        var t = (this.size - this.hdr_size) / 2;
        this.priority = [];
        for (var n = 0; n < t; n++) this.priority[n] = e.readUint16()
    }), c.createFullBoxCtor("sthd"), c.createFullBoxCtor("stri", function(e) {
        this.switch_group = e.readUint16(), this.alternate_group = e.readUint16(), this.sub_track_id = e.readUint32();
        var t = (this.size - this.hdr_size - 8) / 4;
        this.attribute_list = [];
        for (var n = 0; n < t; n++) this.attribute_list[n] = e.readUint32()
    }), c.createFullBoxCtor("stsc", function(e) {
        var t, n;
        if (t = e.readUint32(), this.first_chunk = [], this.samples_per_chunk = [], this.sample_description_index = [], 0 === this.version)
            for (n = 0; n < t; n++) this.first_chunk.push(e.readUint32()), this.samples_per_chunk.push(e.readUint32()), this.sample_description_index.push(e.readUint32())
    }), c.createFullBoxCtor("stsd", function(e) {
        var t, n, r, a;
        for (t = 1, this.entries = [], r = e.readUint32(); t <= r; t++) {
            if ((n = c.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== c.OK) return;
            c[n.type + "SampleEntry"] ? ((a = new c[n.type + "SampleEntry"](n.size)).hdr_size = n.hdr_size, a.start = n.start) : (i.warn("BoxParser", "Unknown sample entry type: " + n.type), a = new c.SampleEntry(n.type, n.size, n.hdr_size, n.start)), a.write === c.SampleEntry.prototype.write && (i.info("BoxParser", "SampleEntry " + a.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), a.parseDataAndRewind(e)), a.parse(e), this.entries.push(a)
        }
    }), c.createFullBoxCtor("stsg", function(e) {
        this.grouping_type = e.readUint32();
        var t = e.readUint16();
        this.group_description_index = [];
        for (var n = 0; n < t; n++) this.group_description_index[n] = e.readUint32()
    }), c.createFullBoxCtor("stsh", function(e) {
        var t, n;
        if (t = e.readUint32(), this.shadowed_sample_numbers = [], this.sync_sample_numbers = [], 0 === this.version)
            for (n = 0; n < t; n++) this.shadowed_sample_numbers.push(e.readUint32()), this.sync_sample_numbers.push(e.readUint32())
    }), c.createFullBoxCtor("stss", function(e) {
        var t, n;
        if (n = e.readUint32(), 0 === this.version)
            for (t = 0, this.sample_numbers = []; t < n; t++) this.sample_numbers.push(e.readUint32())
    }), c.createFullBoxCtor("stsz", function(e) {
        var t;
        if (this.sample_sizes = [], 0 === this.version)
            for (t = 0, this.sample_size = e.readUint32(), this.sample_count = e.readUint32(); t < this.sample_count; t++) 0 === this.sample_size ? this.sample_sizes.push(e.readUint32()) : this.sample_sizes[t] = this.sample_size
    }), c.createFullBoxCtor("stts", function(e) {
        var t, n, r;
        if (t = e.readUint32(), this.sample_counts = [], this.sample_deltas = [], 0 === this.version)
            for (n = 0; n < t; n++) this.sample_counts.push(e.readUint32()), (r = e.readInt32()) < 0 && (i.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!"), r = 1), this.sample_deltas.push(r)
    }), c.createFullBoxCtor("stvi", function(e) {
        var t, n, r = e.readUint32();
        this.single_view_allowed = 3 & r, this.stereo_scheme = e.readUint32();
        var i = e.readUint32();
        for (this.stereo_indication_type = e.readString(i), this.boxes = []; e.getPosition() < this.start + this.size;) {
            if ((t = c.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== c.OK) return;
            n = t.box, this.boxes.push(n), this[n.type] = n
        }
    }), c.createBoxCtor("styp", function(e) {
        c.ftypBox.prototype.parse.call(this, e)
    }), c.createFullBoxCtor("stz2", function(e) {
        if (this.sample_sizes = [], 0 === this.version) {
            if (this.reserved = e.readUint24(), this.field_size = e.readUint8(), n = e.readUint32(), 4 === this.field_size)
                for (t = 0; t < n; t += 2) {
                    var t, n, r = e.readUint8();
                    this.sample_sizes[t] = r >> 4 & 15, this.sample_sizes[t + 1] = 15 & r
                } else if (8 === this.field_size)
                    for (t = 0; t < n; t++) this.sample_sizes[t] = e.readUint8();
                else if (16 === this.field_size)
                for (t = 0; t < n; t++) this.sample_sizes[t] = e.readUint16();
            else i.error("BoxParser", "Error in length field in stz2 box")
        }
    }), c.createFullBoxCtor("subs", function(e) {
        for (t = 0, r = e.readUint32(), this.entries = []; t < r; t++) {
            var t, n, r, i, a = {};
            if (this.entries[t] = a, a.sample_delta = e.readUint32(), a.subsamples = [], (i = e.readUint16()) > 0)
                for (n = 0; n < i; n++) {
                    var o = {};
                    a.subsamples.push(o), 1 == this.version ? o.size = e.readUint32() : o.size = e.readUint16(), o.priority = e.readUint8(), o.discardable = e.readUint8(), o.codec_specific_parameters = e.readUint32()
                }
        }
    }), c.createFullBoxCtor("tenc", function(e) {
        if (e.readUint8(), 0 === this.version) e.readUint8();
        else {
            var t = e.readUint8();
            this.default_crypt_byte_block = t >> 4 & 15, this.default_skip_byte_block = 15 & t
        }
        this.default_isProtected = e.readUint8(), this.default_Per_Sample_IV_Size = e.readUint8(), this.default_KID = c.parseHex16(e), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && (this.default_constant_IV_size = e.readUint8(), this.default_constant_IV = e.readUint8Array(this.default_constant_IV_size))
    }), c.createFullBoxCtor("tfdt", function(e) {
        1 == this.version ? this.baseMediaDecodeTime = e.readUint64() : this.baseMediaDecodeTime = e.readUint32()
    }), c.createFullBoxCtor("tfhd", function(e) {
        var t = 0;
        this.track_id = e.readUint32(), this.size - this.hdr_size > t && this.flags & c.TFHD_FLAG_BASE_DATA_OFFSET ? (this.base_data_offset = e.readUint64(), t += 8) : this.base_data_offset = 0, this.size - this.hdr_size > t && this.flags & c.TFHD_FLAG_SAMPLE_DESC ? (this.default_sample_description_index = e.readUint32(), t += 4) : this.default_sample_description_index = 0, this.size - this.hdr_size > t && this.flags & c.TFHD_FLAG_SAMPLE_DUR ? (this.default_sample_duration = e.readUint32(), t += 4) : this.default_sample_duration = 0, this.size - this.hdr_size > t && this.flags & c.TFHD_FLAG_SAMPLE_SIZE ? (this.default_sample_size = e.readUint32(), t += 4) : this.default_sample_size = 0, this.size - this.hdr_size > t && this.flags & c.TFHD_FLAG_SAMPLE_FLAGS ? (this.default_sample_flags = e.readUint32(), t += 4) : this.default_sample_flags = 0
    }), c.createFullBoxCtor("tfra", function(e) {
        this.track_ID = e.readUint32(), e.readUint24();
        var t = e.readUint8();
        this.length_size_of_traf_num = t >> 4 & 3, this.length_size_of_trun_num = t >> 2 & 3, this.length_size_of_sample_num = 3 & t, this.entries = [];
        for (var n = e.readUint32(), r = 0; r < n; r++) 1 === this.version ? (this.time = e.readUint64(), this.moof_offset = e.readUint64()) : (this.time = e.readUint32(), this.moof_offset = e.readUint32()), this.traf_number = e["readUint" + 8 * (this.length_size_of_traf_num + 1)](), this.trun_number = e["readUint" + 8 * (this.length_size_of_trun_num + 1)](), this.sample_number = e["readUint" + 8 * (this.length_size_of_sample_num + 1)]()
    }), c.createFullBoxCtor("tkhd", function(e) {
        1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.track_id = e.readUint32(), e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.track_id = e.readUint32(), e.readUint32(), this.duration = e.readUint32()), e.readUint32Array(2), this.layer = e.readInt16(), this.alternate_group = e.readInt16(), this.volume = e.readInt16() >> 8, e.readUint16(), this.matrix = e.readInt32Array(9), this.width = e.readUint32(), this.height = e.readUint32()
    }), c.createBoxCtor("tmax", function(e) {
        this.time = e.readUint32()
    }), c.createBoxCtor("tmin", function(e) {
        this.time = e.readUint32()
    }), c.createBoxCtor("totl", function(e) {
        this.bytessent = e.readUint32()
    }), c.createBoxCtor("tpay", function(e) {
        this.bytessent = e.readUint32()
    }), c.createBoxCtor("tpyl", function(e) {
        this.bytessent = e.readUint64()
    }), c.TrackGroupTypeBox.prototype.parse = function(e) {
        this.parseFullHeader(e), this.track_group_id = e.readUint32()
    }, c.createTrackGroupCtor("msrc"), c.TrackReferenceTypeBox = function(e, t, n, r) {
        c.Box.call(this, e, t), this.hdr_size = n, this.start = r
    }, c.TrackReferenceTypeBox.prototype = new c.Box, c.TrackReferenceTypeBox.prototype.parse = function(e) {
        this.track_ids = e.readUint32Array((this.size - this.hdr_size) / 4)
    }, c.trefBox.prototype.parse = function(e) {
        for (var t, n; e.getPosition() < this.start + this.size;) {
            if ((t = c.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== c.OK) return;
            (n = new c.TrackReferenceTypeBox(t.type, t.size, t.hdr_size, t.start)).write === c.Box.prototype.write && "mdat" !== n.type && (i.info("BoxParser", "TrackReference " + n.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), n.parseDataAndRewind(e)), n.parse(e), this.boxes.push(n)
        }
    }, c.createFullBoxCtor("trep", function(e) {
        for (this.track_ID = e.readUint32(), this.boxes = []; e.getPosition() < this.start + this.size;) {
            if ((ret = c.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== c.OK) return;
            box = ret.box, this.boxes.push(box)
        }
    }), c.createFullBoxCtor("trex", function(e) {
        this.track_id = e.readUint32(), this.default_sample_description_index = e.readUint32(), this.default_sample_duration = e.readUint32(), this.default_sample_size = e.readUint32(), this.default_sample_flags = e.readUint32()
    }), c.createBoxCtor("trpy", function(e) {
        this.bytessent = e.readUint64()
    }), c.createFullBoxCtor("trun", function(e) {
        var t = 0;
        if (this.sample_count = e.readUint32(), t += 4, this.size - this.hdr_size > t && this.flags & c.TRUN_FLAGS_DATA_OFFSET ? (this.data_offset = e.readInt32(), t += 4) : this.data_offset = 0, this.size - this.hdr_size > t && this.flags & c.TRUN_FLAGS_FIRST_FLAG ? (this.first_sample_flags = e.readUint32(), t += 4) : this.first_sample_flags = 0, this.sample_duration = [], this.sample_size = [], this.sample_flags = [], this.sample_composition_time_offset = [], this.size - this.hdr_size > t)
            for (var n = 0; n < this.sample_count; n++) this.flags & c.TRUN_FLAGS_DURATION && (this.sample_duration[n] = e.readUint32()), this.flags & c.TRUN_FLAGS_SIZE && (this.sample_size[n] = e.readUint32()), this.flags & c.TRUN_FLAGS_FLAGS && (this.sample_flags[n] = e.readUint32()), this.flags & c.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? this.sample_composition_time_offset[n] = e.readUint32() : this.sample_composition_time_offset[n] = e.readInt32())
    }), c.createFullBoxCtor("tsel", function(e) {
        this.switch_group = e.readUint32();
        var t = (this.size - this.hdr_size - 4) / 4;
        this.attribute_list = [];
        for (var n = 0; n < t; n++) this.attribute_list[n] = e.readUint32()
    }), c.createFullBoxCtor("txtC", function(e) {
        this.config = e.readCString()
    }), c.createFullBoxCtor("url ", function(e) {
        1 !== this.flags && (this.location = e.readCString())
    }), c.createFullBoxCtor("urn ", function(e) {
        this.name = e.readCString(), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = e.readCString())
    }), c.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", !0, !1, function(e) {
        this.LiveServerManifest = e.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
    }), c.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", !0, !1, function(e) {
        this.system_id = c.parseHex16(e);
        var t = e.readUint32();
        t > 0 && (this.data = e.readUint8Array(t))
    }), c.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", !0, !1), c.createUUIDBox("8974dbce7be74c5184f97148f9882554", !0, !1, function(e) {
        this.default_AlgorithmID = e.readUint24(), this.default_IV_size = e.readUint8(), this.default_KID = c.parseHex16(e)
    }), c.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", !0, !1, function(e) {
        this.fragment_count = e.readUint8(), this.entries = [];
        for (var t = 0; t < this.fragment_count; t++) {
            var n = {},
                r = 0,
                i = 0;
            1 === this.version ? (r = e.readUint64(), i = e.readUint64()) : (r = e.readUint32(), i = e.readUint32()), n.absolute_time = r, n.absolute_duration = i, this.entries.push(n)
        }
    }), c.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", !0, !1, function(e) {
        1 === this.version ? (this.absolute_time = e.readUint64(), this.duration = e.readUint64()) : (this.absolute_time = e.readUint32(), this.duration = e.readUint32())
    }), c.createFullBoxCtor("vmhd", function(e) {
        this.graphicsmode = e.readUint16(), this.opcolor = e.readUint16Array(3)
    }), c.createFullBoxCtor("vpcC", function(e) {
        var t;
        1 === this.version ? (this.profile = e.readUint8(), this.level = e.readUint8(), t = e.readUint8(), this.bitDepth = t >> 4, this.chromaSubsampling = t >> 1 & 7, this.videoFullRangeFlag = 1 & t, this.colourPrimaries = e.readUint8(), this.transferCharacteristics = e.readUint8(), this.matrixCoefficients = e.readUint8()) : (this.profile = e.readUint8(), this.level = e.readUint8(), t = e.readUint8(), this.bitDepth = t >> 4 & 15, this.colorSpace = 15 & t, t = e.readUint8(), this.chromaSubsampling = t >> 4 & 15, this.transferFunction = t >> 1 & 7, this.videoFullRangeFlag = 1 & t), this.codecIntializationDataSize = e.readUint16(), this.codecIntializationData = e.readUint8Array(this.codecIntializationDataSize)
    }), c.createBoxCtor("vttC", function(e) {
        this.text = e.readString(this.size - this.hdr_size)
    }), c.createFullBoxCtor("vvcC", function(e) {
        var t, n, r = {
            held_bits: void 0,
            num_held_bits: 0,
            stream_read_1_bytes: function(e) {
                this.held_bits = e.readUint8(), this.num_held_bits = 8
            },
            stream_read_2_bytes: function(e) {
                this.held_bits = e.readUint16(), this.num_held_bits = 16
            },
            extract_bits: function(e) {
                var t = this.held_bits >> this.num_held_bits - e & (1 << e) - 1;
                return this.num_held_bits -= e, t
            }
        };
        if (r.stream_read_1_bytes(e), r.extract_bits(5), this.lengthSizeMinusOne = r.extract_bits(2), this.ptl_present_flag = r.extract_bits(1), this.ptl_present_flag) {
            if (r.stream_read_2_bytes(e), this.ols_idx = r.extract_bits(9), this.num_sublayers = r.extract_bits(3), this.constant_frame_rate = r.extract_bits(2), this.chroma_format_idc = r.extract_bits(2), r.stream_read_1_bytes(e), this.bit_depth_minus8 = r.extract_bits(3), r.extract_bits(5), r.stream_read_2_bytes(e), r.extract_bits(2), this.num_bytes_constraint_info = r.extract_bits(6), this.general_profile_idc = r.extract_bits(7), this.general_tier_flag = r.extract_bits(1), this.general_level_idc = e.readUint8(), r.stream_read_1_bytes(e), this.ptl_frame_only_constraint_flag = r.extract_bits(1), this.ptl_multilayer_enabled_flag = r.extract_bits(1), this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info), this.num_bytes_constraint_info) {
                for (t = 0; t < this.num_bytes_constraint_info - 1; t++) {
                    var i = r.extract_bits(6);
                    r.stream_read_1_bytes(e);
                    var a = r.extract_bits(2);
                    this.general_constraint_info[t] = i << 2 | a
                }
                this.general_constraint_info[this.num_bytes_constraint_info - 1] = r.extract_bits(6)
            } else r.extract_bits(6);
            for (r.stream_read_1_bytes(e), this.ptl_sublayer_present_mask = 0, n = this.num_sublayers - 2; n >= 0; --n) {
                var o = r.extract_bits(1);
                this.ptl_sublayer_present_mask |= o << n
            }
            for (n = this.num_sublayers; n <= 8 && this.num_sublayers > 1; ++n) r.extract_bits(1);
            for (n = this.num_sublayers - 2; n >= 0; --n) this.ptl_sublayer_present_mask & 1 << n && (this.sublayer_level_idc[n] = e.readUint8());
            if (this.ptl_num_sub_profiles = e.readUint8(), this.general_sub_profile_idc = [], this.ptl_num_sub_profiles)
                for (t = 0; t < this.ptl_num_sub_profiles; t++) this.general_sub_profile_idc.push(e.readUint32());
            this.max_picture_width = e.readUint16(), this.max_picture_height = e.readUint16(), this.avg_frame_rate = e.readUint16()
        }
        this.nalu_arrays = [];
        var s = e.readUint8();
        for (t = 0; t < s; t++) {
            var u = [];
            this.nalu_arrays.push(u), r.stream_read_1_bytes(e), u.completeness = r.extract_bits(1), r.extract_bits(2), u.nalu_type = r.extract_bits(5);
            var c = 1;
            for (13 != u.nalu_type && 12 != u.nalu_type && (c = e.readUint16()), n = 0; n < c; n++) {
                var l = e.readUint16();
                u.push({
                    data: e.readUint8Array(l),
                    length: l
                })
            }
        }
    }), c.createFullBoxCtor("vvnC", function(e) {
        var t = strm.readUint8();
        this.lengthSizeMinusOne = 3 & t
    }), c.SampleEntry.prototype.isVideo = function() {
        return !1
    }, c.SampleEntry.prototype.isAudio = function() {
        return !1
    }, c.SampleEntry.prototype.isSubtitle = function() {
        return !1
    }, c.SampleEntry.prototype.isMetadata = function() {
        return !1
    }, c.SampleEntry.prototype.isHint = function() {
        return !1
    }, c.SampleEntry.prototype.getCodec = function() {
        return this.type.replace(".", "")
    }, c.SampleEntry.prototype.getWidth = function() {
        return ""
    }, c.SampleEntry.prototype.getHeight = function() {
        return ""
    }, c.SampleEntry.prototype.getChannelCount = function() {
        return ""
    }, c.SampleEntry.prototype.getSampleRate = function() {
        return ""
    }, c.SampleEntry.prototype.getSampleSize = function() {
        return ""
    }, c.VisualSampleEntry.prototype.isVideo = function() {
        return !0
    }, c.VisualSampleEntry.prototype.getWidth = function() {
        return this.width
    }, c.VisualSampleEntry.prototype.getHeight = function() {
        return this.height
    }, c.AudioSampleEntry.prototype.isAudio = function() {
        return !0
    }, c.AudioSampleEntry.prototype.getChannelCount = function() {
        return this.channel_count
    }, c.AudioSampleEntry.prototype.getSampleRate = function() {
        return this.samplerate
    }, c.AudioSampleEntry.prototype.getSampleSize = function() {
        return this.samplesize
    }, c.SubtitleSampleEntry.prototype.isSubtitle = function() {
        return !0
    }, c.MetadataSampleEntry.prototype.isMetadata = function() {
        return !0
    }, c.decimalToHex = function(e, t) {
        var n = Number(e).toString(16);
        for (t = null == t ? t = 2 : t; n.length < t;) n = "0" + n;
        return n
    }, c.avc1SampleEntry.prototype.getCodec = c.avc2SampleEntry.prototype.getCodec = c.avc3SampleEntry.prototype.getCodec = c.avc4SampleEntry.prototype.getCodec = function() {
        var e = c.SampleEntry.prototype.getCodec.call(this);
        return this.avcC ? e + "." + c.decimalToHex(this.avcC.AVCProfileIndication) + c.decimalToHex(this.avcC.profile_compatibility) + c.decimalToHex(this.avcC.AVCLevelIndication) : e
    }, c.hev1SampleEntry.prototype.getCodec = c.hvc1SampleEntry.prototype.getCodec = function() {
        var e, t = c.SampleEntry.prototype.getCodec.call(this);
        if (this.hvcC) {
            switch (t += ".", this.hvcC.general_profile_space) {
                case 0:
                    t += "";
                    break;
                case 1:
                    t += "A";
                    break;
                case 2:
                    t += "B";
                    break;
                case 3:
                    t += "C"
            }
            t += this.hvcC.general_profile_idc + ".";
            var n = this.hvcC.general_profile_compatibility,
                r = 0;
            for (e = 0; e < 32 && (r |= 1 & n, 31 != e); e++) {
                ;
                r <<= 1, n >>= 1
            }
            t += c.decimalToHex(r, 0) + ".", 0 === this.hvcC.general_tier_flag ? t += "L" : t += "H", t += this.hvcC.general_level_idc;
            var i = !1,
                a = "";
            for (e = 5; e >= 0; e--)(this.hvcC.general_constraint_indicator[e] || i) && (a = "." + c.decimalToHex(this.hvcC.general_constraint_indicator[e], 0) + a, i = !0);
            t += a
        }
        return t
    }, c.vvc1SampleEntry.prototype.getCodec = c.vvi1SampleEntry.prototype.getCodec = function() {
        var e = c.SampleEntry.prototype.getCodec.call(this);
        if (this.vvcC) {
            e += "." + this.vvcC.general_profile_idc, this.vvcC.general_tier_flag ? e += ".H" : e += ".L", e += this.vvcC.general_level_idc;
            var t = "";
            if (this.vvcC.general_constraint_info) {
                var n, r, i, a = [];
                for (r = 0, n = 0 | this.vvcC.ptl_frame_only_constraint << 7 | this.vvcC.ptl_multilayer_enabled << 6; r < this.vvcC.general_constraint_info.length; ++r) n |= this.vvcC.general_constraint_info[r] >> 2 & 63, a.push(n), n && (i = r), n = this.vvcC.general_constraint_info[r] >> 2 & 3;
                if (void 0 === i) t = ".CA";
                else {
                    t = ".C";
                    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                        s = 0,
                        u = 0;
                    for (r = 0; r <= i; ++r)
                        for (s = s << 8 | a[r], u += 8; u >= 5;) t += o[s >> u - 5 & 31], u -= 5, s &= (1 << u) - 1;
                    u && (s <<= 5 - u, t += o[31 & s])
                }
            }
            e += t
        }
        return e
    }, c.mp4aSampleEntry.prototype.getCodec = function() {
        var e = c.SampleEntry.prototype.getCodec.call(this);
        if (!this.esds || !this.esds.esd) return e;
        var t = this.esds.esd.getOTI(),
            n = this.esds.esd.getAudioConfig();
        return e + "." + c.decimalToHex(t) + (n ? "." + n : "")
    }, c.stxtSampleEntry.prototype.getCodec = function() {
        var e = c.SampleEntry.prototype.getCodec.call(this);
        return this.mime_format ? e + "." + this.mime_format : e
    }, c.vp08SampleEntry.prototype.getCodec = c.vp09SampleEntry.prototype.getCodec = function() {
        var e = c.SampleEntry.prototype.getCodec.call(this),
            t = this.vpcC.level;
        0 == t && (t = "00");
        var n = this.vpcC.bitDepth;
        return 8 == n && (n = "08"), e + ".0" + this.vpcC.profile + "." + t + "." + n
    }, c.av01SampleEntry.prototype.getCodec = function() {
        var e, t = c.SampleEntry.prototype.getCodec.call(this),
            n = this.av1C.seq_level_idx_0;
        return n < 10 && (n = "0" + n), 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? e = 1 === this.av1C.twelve_bit ? "12" : "10" : this.av1C.seq_profile <= 2 && (e = 1 === this.av1C.high_bitdepth ? "10" : "08"), t + "." + this.av1C.seq_profile + "." + n + (this.av1C.seq_tier_0 ? "H" : "M") + "." + e
    }, c.Box.prototype.writeHeader = function(e, t) {
        this.size += 8, this.size > 4294967296 && (this.size += 8), "uuid" === this.type && (this.size += 16), i.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + e.getPosition() + (t || "")), this.size > 4294967296 ? e.writeUint32(1) : (this.sizePosition = e.getPosition(), e.writeUint32(this.size)), e.writeString(this.type, null, 4), "uuid" === this.type && e.writeUint8Array(this.uuid), this.size > 4294967296 && e.writeUint64(this.size)
    }, c.FullBox.prototype.writeHeader = function(e) {
        this.size += 4, c.Box.prototype.writeHeader.call(this, e, " v=" + this.version + " f=" + this.flags), e.writeUint8(this.version), e.writeUint24(this.flags)
    }, c.Box.prototype.write = function(e) {
        "mdat" === this.type ? this.data && (this.size = this.data.length, this.writeHeader(e), e.writeUint8Array(this.data)) : (this.size = this.data ? this.data.length : 0, this.writeHeader(e), this.data && e.writeUint8Array(this.data))
    }, c.ContainerBox.prototype.write = function(e) {
        this.size = 0, this.writeHeader(e);
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t] && (this.boxes[t].write(e), this.size += this.boxes[t].size);
        i.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
    }, c.TrackReferenceTypeBox.prototype.write = function(e) {
        this.size = 4 * this.track_ids.length, this.writeHeader(e), e.writeUint32Array(this.track_ids)
    }, c.avcCBox.prototype.write = function(e) {
        var t;
        for (t = 0, this.size = 7; t < this.SPS.length; t++) this.size += 2 + this.SPS[t].length;
        for (t = 0; t < this.PPS.length; t++) this.size += 2 + this.PPS[t].length;
        for (this.ext && (this.size += this.ext.length), this.writeHeader(e), e.writeUint8(this.configurationVersion), e.writeUint8(this.AVCProfileIndication), e.writeUint8(this.profile_compatibility), e.writeUint8(this.AVCLevelIndication), e.writeUint8(this.lengthSizeMinusOne + 252), e.writeUint8(this.SPS.length + 224), t = 0; t < this.SPS.length; t++) e.writeUint16(this.SPS[t].length), e.writeUint8Array(this.SPS[t].nalu);
        for (e.writeUint8(this.PPS.length), t = 0; t < this.PPS.length; t++) e.writeUint16(this.PPS[t].length), e.writeUint8Array(this.PPS[t].nalu);
        this.ext && e.writeUint8Array(this.ext)
    }, c.co64Box.prototype.write = function(e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), t = 0; t < this.chunk_offsets.length; t++) e.writeUint64(this.chunk_offsets[t])
    }, c.cslgBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(e), e.writeInt32(this.compositionToDTSShift), e.writeInt32(this.leastDecodeToDisplayDelta), e.writeInt32(this.greatestDecodeToDisplayDelta), e.writeInt32(this.compositionStartTime), e.writeInt32(this.compositionEndTime)
    }, c.cttsBox.prototype.write = function(e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++) e.writeUint32(this.sample_counts[t]), 1 === this.version ? e.writeInt32(this.sample_offsets[t]) : e.writeUint32(this.sample_offsets[t])
    }, c.drefBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++) this.entries[t].write(e), this.size += this.entries[t].size;
        i.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
    }, c.elngBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = this.extended_language.length, this.writeHeader(e), e.writeString(this.extended_language)
    }, c.elstBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 4 + 12 * this.entries.length, this.writeHeader(e), e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++) {
            var n = this.entries[t];
            e.writeUint32(n.segment_duration), e.writeInt32(n.media_time), e.writeInt16(n.media_rate_integer), e.writeInt16(n.media_rate_fraction)
        }
    }, c.emsgBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1), this.writeHeader(e), e.writeCString(this.scheme_id_uri), e.writeCString(this.value), e.writeUint32(this.timescale), e.writeUint32(this.presentation_time_delta), e.writeUint32(this.event_duration), e.writeUint32(this.id), e.writeUint8Array(this.message_data)
    }, c.ftypBox.prototype.write = function(e) {
        this.size = 8 + 4 * this.compatible_brands.length, this.writeHeader(e), e.writeString(this.major_brand, null, 4), e.writeUint32(this.minor_version);
        for (var t = 0; t < this.compatible_brands.length; t++) e.writeString(this.compatible_brands[t], null, 4)
    }, c.hdlrBox.prototype.write = function(e) {
        this.size = 20 + this.name.length + 1, this.version = 0, this.flags = 0, this.writeHeader(e), e.writeUint32(0), e.writeString(this.handler, null, 4), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeCString(this.name)
    }, c.kindBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = this.schemeURI.length + 1 + (this.value.length + 1), this.writeHeader(e), e.writeCString(this.schemeURI), e.writeCString(this.value)
    }, c.mdhdBox.prototype.write = function(e) {
        this.size = 20, this.flags = 0, this.version = 0, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint16(this.language), e.writeUint16(0)
    }, c.mehdBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.fragment_duration)
    }, c.mfhdBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.sequence_number)
    }, c.mvhdBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 96, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint32(this.rate), e.writeUint16(this.volume << 8), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32Array(this.matrix), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(this.next_track_id)
    }, c.SampleEntry.prototype.writeHeader = function(e) {
        this.size = 8, c.Box.prototype.writeHeader.call(this, e), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint16(this.data_reference_index)
    }, c.SampleEntry.prototype.writeFooter = function(e) {
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e), this.size += this.boxes[t].size;
        i.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
    }, c.SampleEntry.prototype.write = function(e) {
        this.writeHeader(e), e.writeUint8Array(this.data), this.size += this.data.length, i.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
    }, c.VisualSampleEntry.prototype.write = function(e) {
        this.writeHeader(e), this.size += 70, e.writeUint16(0), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.width), e.writeUint16(this.height), e.writeUint32(this.horizresolution), e.writeUint32(this.vertresolution), e.writeUint32(0), e.writeUint16(this.frame_count), e.writeUint8(Math.min(31, this.compressorname.length)), e.writeString(this.compressorname, null, 31), e.writeUint16(this.depth), e.writeInt16(-1), this.writeFooter(e)
    }, c.AudioSampleEntry.prototype.write = function(e) {
        this.writeHeader(e), this.size += 20, e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.channel_count), e.writeUint16(this.samplesize), e.writeUint16(0), e.writeUint16(0), e.writeUint32(this.samplerate << 16), this.writeFooter(e)
    }, c.stppSampleEntry.prototype.write = function(e) {
        this.writeHeader(e), this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1, e.writeCString(this.namespace), e.writeCString(this.schema_location), e.writeCString(this.auxiliary_mime_types), this.writeFooter(e)
    }, c.SampleGroupEntry.prototype.write = function(e) {
        e.writeUint8Array(this.data)
    }, c.sbgpBox.prototype.write = function(e) {
        this.version = 1, this.flags = 0, this.size = 12 + 8 * this.entries.length, this.writeHeader(e), e.writeString(this.grouping_type, null, 4), e.writeUint32(this.grouping_type_parameter), e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++) {
            var n = this.entries[t];
            e.writeInt32(n.sample_count), e.writeInt32(n.group_description_index)
        }
    }, c.sgpdBox.prototype.write = function(e) {
        var t, n;
        for (t = 0, this.flags = 0, this.size = 12; t < this.entries.length; t++) n = this.entries[t], 1 === this.version && (0 === this.default_length && (this.size += 4), this.size += n.data.length);
        for (this.writeHeader(e), e.writeString(this.grouping_type, null, 4), 1 === this.version && e.writeUint32(this.default_length), this.version >= 2 && e.writeUint32(this.default_sample_description_index), e.writeUint32(this.entries.length), t = 0; t < this.entries.length; t++) n = this.entries[t], 1 === this.version && 0 === this.default_length && e.writeUint32(n.description_length), n.write(e)
    }, c.sidxBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 20 + 12 * this.references.length, this.writeHeader(e), e.writeUint32(this.reference_ID), e.writeUint32(this.timescale), e.writeUint32(this.earliest_presentation_time), e.writeUint32(this.first_offset), e.writeUint16(0), e.writeUint16(this.references.length);
        for (var t = 0; t < this.references.length; t++) {
            var n = this.references[t];
            e.writeUint32(n.reference_type << 31 | n.referenced_size), e.writeUint32(n.subsegment_duration), e.writeUint32(n.starts_with_SAP << 31 | n.SAP_type << 28 | n.SAP_delta_time)
        }
    }, c.smhdBox.prototype.write = function(e) {
        this.version = 0, this.flags = 1, this.size = 4, this.writeHeader(e), e.writeUint16(this.balance), e.writeUint16(0)
    }, c.stcoBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 4 + 4 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), e.writeUint32Array(this.chunk_offsets)
    }, c.stscBox.prototype.write = function(e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(e), e.writeUint32(this.first_chunk.length), t = 0; t < this.first_chunk.length; t++) e.writeUint32(this.first_chunk[t]), e.writeUint32(this.samples_per_chunk[t]), e.writeUint32(this.sample_description_index[t])
    }, c.stsdBox.prototype.write = function(e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(e), e.writeUint32(this.entries.length), this.size += 4, t = 0; t < this.entries.length; t++) this.entries[t].write(e), this.size += this.entries[t].size;
        i.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
    }, c.stshBox.prototype.write = function(e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(e), e.writeUint32(this.shadowed_sample_numbers.length), t = 0; t < this.shadowed_sample_numbers.length; t++) e.writeUint32(this.shadowed_sample_numbers[t]), e.writeUint32(this.sync_sample_numbers[t])
    }, c.stssBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 4 + 4 * this.sample_numbers.length, this.writeHeader(e), e.writeUint32(this.sample_numbers.length), e.writeUint32Array(this.sample_numbers)
    }, c.stszBox.prototype.write = function(e) {
        var t, n = !0;
        if (this.version = 0, this.flags = 0, this.sample_sizes.length > 0)
            for (t = 0; t + 1 < this.sample_sizes.length;)
                if (this.sample_sizes[t + 1] !== this.sample_sizes[0]) {
                    n = !1;
                    break
                } else t++;
        else n = !1;
        this.size = 8, !n && (this.size += 4 * this.sample_sizes.length), this.writeHeader(e), n ? e.writeUint32(this.sample_sizes[0]) : e.writeUint32(0), e.writeUint32(this.sample_sizes.length), !n && e.writeUint32Array(this.sample_sizes)
    }, c.sttsBox.prototype.write = function(e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++) e.writeUint32(this.sample_counts[t]), e.writeUint32(this.sample_deltas[t])
    }, c.tfdtBox.prototype.write = function(e) {
        this.version = this.baseMediaDecodeTime > 4294967295 ? 1 : 0, this.flags = 0, this.size = 4, 1 === this.version && (this.size += 4), this.writeHeader(e), 1 === this.version ? e.writeUint64(this.baseMediaDecodeTime) : e.writeUint32(this.baseMediaDecodeTime)
    }, c.tfhdBox.prototype.write = function(e) {
        this.version = 0, this.size = 4, this.flags & c.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & c.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & c.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & c.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & c.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(e), e.writeUint32(this.track_id), this.flags & c.TFHD_FLAG_BASE_DATA_OFFSET && e.writeUint64(this.base_data_offset), this.flags & c.TFHD_FLAG_SAMPLE_DESC && e.writeUint32(this.default_sample_description_index), this.flags & c.TFHD_FLAG_SAMPLE_DUR && e.writeUint32(this.default_sample_duration), this.flags & c.TFHD_FLAG_SAMPLE_SIZE && e.writeUint32(this.default_sample_size), this.flags & c.TFHD_FLAG_SAMPLE_FLAGS && e.writeUint32(this.default_sample_flags)
    }, c.tkhdBox.prototype.write = function(e) {
        this.version = 0, this.size = 80, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.track_id), e.writeUint32(0), e.writeUint32(this.duration), e.writeUint32(0), e.writeUint32(0), e.writeInt16(this.layer), e.writeInt16(this.alternate_group), e.writeInt16(this.volume << 8), e.writeUint16(0), e.writeInt32Array(this.matrix), e.writeUint32(this.width), e.writeUint32(this.height)
    }, c.trexBox.prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(e), e.writeUint32(this.track_id), e.writeUint32(this.default_sample_description_index), e.writeUint32(this.default_sample_duration), e.writeUint32(this.default_sample_size), e.writeUint32(this.default_sample_flags)
    }, c.trunBox.prototype.write = function(e) {
        this.version = 0, this.size = 4, this.flags & c.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & c.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & c.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & c.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & c.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & c.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(e), e.writeUint32(this.sample_count), this.flags & c.TRUN_FLAGS_DATA_OFFSET && (this.data_offset_position = e.getPosition(), e.writeInt32(this.data_offset)), this.flags & c.TRUN_FLAGS_FIRST_FLAG && e.writeUint32(this.first_sample_flags);
        for (var t = 0; t < this.sample_count; t++) this.flags & c.TRUN_FLAGS_DURATION && e.writeUint32(this.sample_duration[t]), this.flags & c.TRUN_FLAGS_SIZE && e.writeUint32(this.sample_size[t]), this.flags & c.TRUN_FLAGS_FLAGS && e.writeUint32(this.sample_flags[t]), this.flags & c.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? e.writeUint32(this.sample_composition_time_offset[t]) : e.writeInt32(this.sample_composition_time_offset[t]))
    }, c["url Box"].prototype.write = function(e) {
        this.version = 0, this.location ? (this.flags = 0, this.size = this.location.length + 1) : (this.flags = 1, this.size = 0), this.writeHeader(e), this.location && e.writeCString(this.location)
    }, c["urn Box"].prototype.write = function(e) {
        this.version = 0, this.flags = 0, this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0), this.writeHeader(e), e.writeCString(this.name), this.location && e.writeCString(this.location)
    }, c.vmhdBox.prototype.write = function(e) {
        this.version = 0, this.flags = 1, this.size = 8, this.writeHeader(e), e.writeUint16(this.graphicsmode), e.writeUint16Array(this.opcolor)
    }, c.cttsBox.prototype.unpack = function(e) {
        var t, n, r;
        for (t = 0, r = 0; t < this.sample_counts.length; t++)
            for (n = 0; n < this.sample_counts[t]; n++) e[r].pts = e[r].dts + this.sample_offsets[t], r++
    }, c.sttsBox.prototype.unpack = function(e) {
        var t, n, r;
        for (t = 0, r = 0; t < this.sample_counts.length; t++)
            for (n = 0; n < this.sample_counts[t]; n++) 0 === r ? e[r].dts = 0 : e[r].dts = e[r - 1].dts + this.sample_deltas[t], r++
    }, c.stcoBox.prototype.unpack = function(e) {
        var t;
        for (t = 0; t < this.chunk_offsets.length; t++) e[t].offset = this.chunk_offsets[t]
    }, c.stscBox.prototype.unpack = function(e) {
        var t, n, r, i, a;
        for (t = 0, i = 0, a = 0; t < this.first_chunk.length; t++)
            for (n = 0; n < (t + 1 < this.first_chunk.length ? this.first_chunk[t + 1] : 1 / 0); n++)
                for (a++, r = 0; r < this.samples_per_chunk[t]; r++) {
                    if (!e[i]) return;
                    e[i].description_index = this.sample_description_index[t], e[i].chunk_index = a;
                    i++
                }
    }, c.stszBox.prototype.unpack = function(e) {
        var t;
        for (t = 0; t < this.sample_sizes.length; t++) e[t].size = this.sample_sizes[t]
    }, c.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"], c.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"], c.boxEqualFields = function(e, t) {
        var n;
        if (e && !t) return !1;
        for (n in e) {
            if (c.DIFF_BOXES_PROP_NAMES.indexOf(n) > -1) continue;
            if (e[n] instanceof c.Box || t[n] instanceof c.Box || void 0 === e[n] || void 0 === t[n] || "function" == typeof e[n] || "function" == typeof t[n] || e.subBoxNames && e.subBoxNames.indexOf(n.slice(0, 4)) > -1 || t.subBoxNames && t.subBoxNames.indexOf(n.slice(0, 4)) > -1) continue;
            if ("data" === n || "start" === n || "size" === n || "creation_time" === n || "modification_time" === n) continue;
            if (!(c.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(n) > -1)) {
                if (e[n] !== t[n]) return !1
            }
        }
        return !0
    }, c.boxEqual = function(e, t) {
        if (!c.boxEqualFields(e, t)) return !1;
        for (var n = 0; n < c.DIFF_BOXES_PROP_NAMES.length; n++) {
            var r = c.DIFF_BOXES_PROP_NAMES[n];
            if (e[r] && t[r] && !c.boxEqual(e[r], t[r])) return !1
        }
        return !0
    };
    var l = function() {};
    l.prototype.parseSample = function(e) {
        var t, n, r = new a(e.buffer);
        for (t = []; !r.isEos();)(n = c.parseOneBox(r, !1)).code === c.OK && "vttc" === n.box.type && t.push(n.box);
        return t
    }, l.prototype.getText = function(e, t, n) {
        function r(e, t, n) {
            return n = n || "0", (e += "").length >= t ? e : Array(t - e.length + 1).join(n) + e
        }

        function i(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                i = Math.floor(e - 3600 * t - 60 * n);
            return "" + r(t, 2) + ":" + r(n, 2) + ":" + r(i, 2) + "." + r(Math.floor((e - 3600 * t - 60 * n - i) * 1e3), 3)
        }
        for (var a = this.parseSample(n), o = "", s = 0; s < a.length; s++) {
            var u = a[s];
            o += i(e) + " --> " + i(t) + "\r\n" + u.payl.text
        }
        return o
    };
    var d = function() {};
    d.prototype.parseSample = function(e) {
        var t, n = {};
        n.resources = [];
        var r = new a(e.data.buffer);
        if (e.subsamples && 0 !== e.subsamples.length) {
            if (n.documentString = r.readString(e.subsamples[0].size), e.subsamples.length > 1)
                for (t = 1; t < e.subsamples.length; t++) n.resources[t] = r.readUint8Array(e.subsamples[t].size)
        } else n.documentString = r.readString(e.data.length);
        return "undefined" != typeof DOMParser && (n.document = new DOMParser().parseFromString(n.documentString, "application/xml")), n
    };
    var f = function() {};
    f.prototype.parseSample = function(e) {
        return new a(e.data.buffer).readString(e.data.length)
    }, f.prototype.parseConfig = function(e) {
        var t = new a(e.buffer);
        return t.readUint32(), t.readCString()
    }, void 0 !== t && (t.XMLSubtitlein4Parser = d, t.Textin4Parser = f);
    var p = function(e) {
        this.stream = e || new s, this.boxes = [], this.mdats = [], this.moofs = [], this.isProgressive = !1, this.moovStartFound = !1, this.onMoovStart = null, this.moovStartSent = !1, this.onReady = null, this.readySent = !1, this.onSegment = null, this.onSamples = null, this.onError = null, this.sampleListBuilt = !1, this.fragmentedTracks = [], this.extractedTracks = [], this.isFragmentationInitialized = !1, this.sampleProcessingStarted = !1, this.nextMoofNumber = 0, this.itemListBuilt = !1, this.onSidx = null, this.sidxSent = !1
    };
    p.prototype.setSegmentOptions = function(e, t, n) {
        var r = this.getTrackById(e);
        if (r) {
            var i = {};
            this.fragmentedTracks.push(i), i.id = e, i.user = t, i.trak = r, r.nextSample = 0, i.segmentStream = null, i.nb_samples = 1e3, i.rapAlignement = !0, n && (n.nbSamples && (i.nb_samples = n.nbSamples), n.rapAlignement && (i.rapAlignement = n.rapAlignement))
        }
    }, p.prototype.unsetSegmentOptions = function(e) {
        for (var t = -1, n = 0; n < this.fragmentedTracks.length; n++) this.fragmentedTracks[n].id == e && (t = n);
        t > -1 && this.fragmentedTracks.splice(t, 1)
    }, p.prototype.setExtractionOptions = function(e, t, n) {
        var r = this.getTrackById(e);
        if (r) {
            var i = {};
            this.extractedTracks.push(i), i.id = e, i.user = t, i.trak = r, r.nextSample = 0, i.nb_samples = 1e3, i.samples = [], n && n.nbSamples && (i.nb_samples = n.nbSamples)
        }
    }, p.prototype.unsetExtractionOptions = function(e) {
        for (var t = -1, n = 0; n < this.extractedTracks.length; n++) this.extractedTracks[n].id == e && (t = n);
        t > -1 && this.extractedTracks.splice(t, 1)
    }, p.prototype.parse = function() {
        var e, t, n;
        if (!this.restoreParsePosition || !!this.restoreParsePosition())
            for (;;)
                if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                    if (this.processIncompleteMdat()) continue;
                    return
                } else {
                    if (this.saveParsePosition && this.saveParsePosition(), (e = c.parseOneBox(this.stream, !1)).code === c.ERR_NOT_ENOUGH_DATA) {
                        if (!this.processIncompleteBox) return;
                        if (this.processIncompleteBox(e)) continue;
                        return
                    }
                    switch (n = "uuid" !== (t = e.box).type ? t.type : t.uuid, this.boxes.push(t), n) {
                        case "mdat":
                            this.mdats.push(t);
                            break;
                        case "moof":
                            this.moofs.push(t);
                            break;
                        case "moov":
                            this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0);
                        default:
                            void 0 !== this[n] && i.warn("ISOFile", "Duplicate Box of type: " + n + ", overriding previous occurrence"), this[n] = t
                    }
                    this.updateUsedBytes && this.updateUsedBytes(t, e)
                }
    }, p.prototype.checkBuffer = function(e) {
        if (null == e) throw "Buffer must be defined and non empty";
        if (void 0 === e.fileStart) throw "Buffer must have a fileStart property";
        return 0 === e.byteLength ? (i.warn("ISOFile", "Ignoring empty buffer (fileStart: " + e.fileStart + ")"), this.stream.logBufferLevel(), !1) : (i.info("ISOFile", "Processing buffer (fileStart: " + e.fileStart + ")"), e.usedBytes = 0, this.stream.insertBuffer(e), this.stream.logBufferLevel(), !!this.stream.initialized() || (i.warn("ISOFile", "Not ready to start parsing"), !1))
    }, p.prototype.appendBuffer = function(e, t) {
        var n;
        if (this.checkBuffer(e)) return this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (!this.sampleListBuilt && (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(t), this.nextSeekPosition ? (n = this.nextSeekPosition, this.nextSeekPosition = void 0) : n = this.nextParsePosition, this.stream.getEndFilePositionAfter && (n = this.stream.getEndFilePositionAfter(n))) : n = this.nextParsePosition ? this.nextParsePosition : 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (i.info("ISOFile", "Done processing buffer (fileStart: " + e.fileStart + ") - next buffer to fetch should have a fileStart position of " + n), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), i.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())), n
    }, p.prototype.getInfo = function() {
        var e, t, n, r, i, a, o = {},
            s = new Date("1904-01-01T00:00:00Z").getTime();
        if (this.moov)
            for (o.hasMoov = !0, o.duration = this.moov.mvhd.duration, o.timescale = this.moov.mvhd.timescale, o.isFragmented = null != this.moov.mvex, o.isFragmented && this.moov.mvex.mehd && (o.fragment_duration = this.moov.mvex.mehd.fragment_duration), o.isProgressive = this.isProgressive, o.hasIOD = null != this.moov.iods, o.brands = [], o.brands.push(this.ftyp.major_brand), o.brands = o.brands.concat(this.ftyp.compatible_brands), o.created = new Date(s + 1e3 * this.moov.mvhd.creation_time), o.modified = new Date(s + 1e3 * this.moov.mvhd.modification_time), o.tracks = [], o.audioTracks = [], o.videoTracks = [], o.subtitleTracks = [], o.metadataTracks = [], o.hintTracks = [], o.otherTracks = [], e = 0; e < this.moov.traks.length; e++) {
                if (a = (n = this.moov.traks[e]).mdia.minf.stbl.stsd.entries[0], r = {}, o.tracks.push(r), r.id = n.tkhd.track_id, r.name = n.mdia.hdlr.name, r.references = [], n.tref)
                    for (t = 0; t < n.tref.boxes.length; t++) i = {}, r.references.push(i), i.type = n.tref.boxes[t].type, i.track_ids = n.tref.boxes[t].track_ids;
                n.edts && (r.edits = n.edts.elst.entries), r.created = new Date(s + 1e3 * n.tkhd.creation_time), r.modified = new Date(s + 1e3 * n.tkhd.modification_time), r.movie_duration = n.tkhd.duration, r.movie_timescale = o.timescale, r.layer = n.tkhd.layer, r.alternate_group = n.tkhd.alternate_group, r.volume = n.tkhd.volume, r.matrix = n.tkhd.matrix, r.track_width = n.tkhd.width / 65536, r.track_height = n.tkhd.height / 65536, r.timescale = n.mdia.mdhd.timescale, r.cts_shift = n.mdia.minf.stbl.cslg, r.duration = n.mdia.mdhd.duration, r.samples_duration = n.samples_duration, r.codec = a.getCodec(), r.kind = n.udta && n.udta.kinds.length ? n.udta.kinds[0] : {
                    schemeURI: "",
                    value: ""
                }, r.language = n.mdia.elng ? n.mdia.elng.extended_language : n.mdia.mdhd.languageString, r.nb_samples = n.samples.length, r.size = n.samples_size, r.bitrate = 8 * r.size * r.timescale / r.samples_duration, a.isAudio() ? (r.type = "audio", o.audioTracks.push(r), r.audio = {}, r.audio.sample_rate = a.getSampleRate(), r.audio.channel_count = a.getChannelCount(), r.audio.sample_size = a.getSampleSize()) : a.isVideo() ? (r.type = "video", o.videoTracks.push(r), r.video = {}, r.video.width = a.getWidth(), r.video.height = a.getHeight()) : a.isSubtitle() ? (r.type = "subtitles", o.subtitleTracks.push(r)) : a.isHint() ? (r.type = "metadata", o.hintTracks.push(r)) : a.isMetadata() ? (r.type = "metadata", o.metadataTracks.push(r)) : (r.type = "metadata", o.otherTracks.push(r))
            } else o.hasMoov = !1;
        if (o.mime = "", o.hasMoov && o.tracks) {
            for (o.videoTracks && o.videoTracks.length > 0 ? o.mime += 'video/mp4; codecs="' : o.audioTracks && o.audioTracks.length > 0 ? o.mime += 'audio/mp4; codecs="' : o.mime += 'application/mp4; codecs="', e = 0; e < o.tracks.length; e++) 0 !== e && (o.mime += ","), o.mime += o.tracks[e].codec;
            o.mime += '"; profiles="', o.mime += this.ftyp.compatible_brands.join(), o.mime += '"'
        }
        return o
    }, p.prototype.processSamples = function(e) {
        if (this.sampleProcessingStarted) {
            if (this.isFragmentationInitialized && null !== this.onSegment)
                for (t = 0; t < this.fragmentedTracks.length; t++) {
                    var t, n, r = this.fragmentedTracks[t];
                    for (n = r.trak; n.nextSample < n.samples.length && this.sampleProcessingStarted;) {
                        i.debug("ISOFile", "Creating media fragment on track #" + r.id + " for sample " + n.nextSample);
                        var a = this.createFragment(r.id, n.nextSample, r.segmentStream);
                        if (a) r.segmentStream = a, n.nextSample++;
                        else break;
                        if ((n.nextSample % r.nb_samples == 0 || e || n.nextSample >= n.samples.length) && (i.info("ISOFile", "Sending fragmented data on track #" + r.id + " for samples [" + Math.max(0, n.nextSample - r.nb_samples) + "," + (n.nextSample - 1) + "]"), i.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(r.id, r.user, r.segmentStream.buffer, n.nextSample, e || n.nextSample >= n.samples.length), r.segmentStream = null, r !== this.fragmentedTracks[t])) break
                    }
                }
            if (null !== this.onSamples)
                for (t = 0; t < this.extractedTracks.length; t++) {
                    var o = this.extractedTracks[t];
                    for (n = o.trak; n.nextSample < n.samples.length && this.sampleProcessingStarted;) {
                        i.debug("ISOFile", "Exporting on track #" + o.id + " sample #" + n.nextSample);
                        var s = this.getSample(n, n.nextSample);
                        if (s) n.nextSample++, o.samples.push(s);
                        else break;
                        if ((n.nextSample % o.nb_samples == 0 || n.nextSample >= n.samples.length) && (i.debug("ISOFile", "Sending samples on track #" + o.id + " for sample " + n.nextSample), this.onSamples && this.onSamples(o.id, o.user, o.samples), o.samples = [], o !== this.extractedTracks[t])) break
                    }
                }
        }
    }, p.prototype.getBox = function(e) {
        var t = this.getBoxes(e, !0);
        return t.length ? t[0] : null
    }, p.prototype.getBoxes = function(e, t) {
        var n = [];
        return p._sweep.call(this, e, n, t), n
    }, p._sweep = function(e, t, n) {
        for (var r in this.type && this.type == e && t.push(this), this.boxes) {
            if (t.length && n) return;
            p._sweep.call(this.boxes[r], e, t, n)
        }
    }, p.prototype.getTrackSamplesInfo = function(e) {
        var t = this.getTrackById(e);
        return t ? t.samples : void 0
    }, p.prototype.getTrackSample = function(e, t) {
        var n = this.getTrackById(e);
        return this.getSample(n, t)
    }, p.prototype.releaseUsedSamples = function(e, t) {
        var n = 0,
            r = this.getTrackById(e);
        !r.lastValidSample && (r.lastValidSample = 0);
        for (var a = r.lastValidSample; a < t; a++) n += this.releaseSample(r, a);
        i.info("ISOFile", "Track #" + e + " released samples up to " + t + " (released size: " + n + ", remaining: " + this.samplesDataSize + ")"), r.lastValidSample = t
    }, p.prototype.start = function() {
        this.sampleProcessingStarted = !0, this.processSamples(!1)
    }, p.prototype.stop = function() {
        this.sampleProcessingStarted = !1
    }, p.prototype.flush = function() {
        i.info("ISOFile", "Flushing remaining samples"), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0)
    }, p.prototype.seekTrack = function(e, t, n) {
        var r, a, o, s = 1 / 0,
            u = 0,
            c = 0;
        if (0 === n.samples.length) return i.info("ISOFile", "No sample in track, cannot seek! Using time " + i.getDurationString(0, 1) + " and offset: 0"), {
            offset: 0,
            time: 0
        };
        for (r = 0; r < n.samples.length; r++) {
            if (a = n.samples[r], 0 === r) c = 0, o = a.timescale;
            else if (a.cts > e * a.timescale) {
                c = r - 1;
                break
            }
            t && a.is_sync && (u = r)
        }
        for (t && (c = u), e = n.samples[c].cts, n.nextSample = c; n.samples[c].alreadyRead === n.samples[c].size && n.samples[c + 1];) {
            ;
            c++
        }
        return s = n.samples[c].offset + n.samples[c].alreadyRead, i.info("ISOFile", "Seeking to " + (t ? "RAP" : "") + " sample #" + n.nextSample + " on track " + n.tkhd.track_id + ", time " + i.getDurationString(e, o) + " and offset: " + s), {
            offset: s,
            time: e / o
        }
    }, p.prototype.seek = function(e, t) {
        var n, r, a, o = this.moov,
            s = {
                offset: 1 / 0,
                time: 1 / 0
            };
        if (this.moov) {
            for (a = 0; a < o.traks.length; a++) n = o.traks[a], (r = this.seekTrack(e, t, n)).offset < s.offset && (s.offset = r.offset), r.time < s.time && (s.time = r.time);
            return i.info("ISOFile", "Seeking at time " + i.getDurationString(s.time, 1) + " needs a buffer with a fileStart position of " + s.offset), s.offset === 1 / 0 ? s = {
                offset: this.nextParsePosition,
                time: 0
            } : s.offset = this.stream.getEndFilePositionAfter(s.offset), i.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + s.offset), s
        }
        throw "Cannot seek: moov not received!"
    }, p.prototype.equal = function(e) {
        for (var t = 0; t < this.boxes.length && t < e.boxes.length;) {
            var n = this.boxes[t],
                r = e.boxes[t];
            if (!c.boxEqual(n, r)) return !1;
            t++
        }
        return !0
    }, void 0 !== t && (t.ISOFile = p), p.prototype.lastBoxStartPosition = 0, p.prototype.parsingMdat = null, p.prototype.nextParsePosition = 0, p.prototype.discardMdatData = !1, p.prototype.processIncompleteBox = function(e) {
        var t;
        if ("mdat" === e.type) return (t = new c[e.type + "Box"](e.size), this.parsingMdat = t, this.boxes.push(t), this.mdats.push(t), t.start = e.start, t.hdr_size = e.hdr_size, this.stream.addUsedBytes(t.hdr_size), this.lastBoxStartPosition = t.start + t.size, this.stream.seek(t.start + t.size, !1, this.discardMdatData)) ? (this.parsingMdat = null, !0) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = t.start + t.size, !1);
        return ("moov" === e.type && (this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) ? (this.nextParsePosition = this.stream.getEndPosition(), !0) : (e.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + e.size : this.nextParsePosition = this.stream.getEndPosition(), !1)
    }, p.prototype.hasIncompleteMdat = function() {
        return null !== this.parsingMdat
    }, p.prototype.processIncompleteMdat = function() {
        var e;
        return (e = this.parsingMdat, this.stream.seek(e.start + e.size, !1, this.discardMdatData)) ? (i.debug("ISOFile", "Found 'mdat' end in buffered data"), this.parsingMdat = null, !0) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), !1)
    }, p.prototype.restoreParsePosition = function() {
        return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData)
    }, p.prototype.saveParsePosition = function() {
        this.lastBoxStartPosition = this.stream.getPosition()
    }, p.prototype.updateUsedBytes = function(e, t) {
        this.stream.addUsedBytes && ("mdat" === e.type ? (this.stream.addUsedBytes(e.hdr_size), this.discardMdatData && this.stream.addUsedBytes(e.size - e.hdr_size)) : this.stream.addUsedBytes(e.size))
    }, p.prototype.add = c.Box.prototype.add, p.prototype.addBox = c.Box.prototype.addBox, p.prototype.init = function(e) {
        var t = e || {};
        this.add("ftyp").set("major_brand", t.brands && t.brands[0] || "iso4").set("minor_version", 0).set("compatible_brands", t.brands || ["iso4"]);
        var n = this.add("moov");
        return n.add("mvhd").set("timescale", t.timescale || 600).set("rate", t.rate || 65536).set("creation_time", 0).set("modification_time", 0).set("duration", t.duration || 0).set("volume", t.width ? 0 : 256).set("matrix", [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824]).set("next_track_id", 1), n.add("mvex"), this
    }, p.prototype.addTrack = function(e) {
        !this.moov && this.init(e);
        var t = e || {};
        t.width = t.width || 320, t.height = t.height || 320, t.id = t.id || this.moov.mvhd.next_track_id, t.type = t.type || "avc1";
        var n = this.moov.add("trak");
        this.moov.mvhd.next_track_id = t.id + 1, n.add("tkhd").set("flags", c.TKHD_FLAG_ENABLED | c.TKHD_FLAG_IN_MOVIE | c.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0).set("modification_time", 0).set("track_id", t.id).set("duration", t.duration || 0).set("layer", t.layer || 0).set("alternate_group", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("width", t.width << 16).set("height", t.height << 16);
        var r = n.add("mdia");
        r.add("mdhd").set("creation_time", 0).set("modification_time", 0).set("timescale", t.timescale || 1).set("duration", t.media_duration || 0).set("language", t.language || "und"), r.add("hdlr").set("handler", t.hdlr || "vide").set("name", t.name || "Track created with MP4Box.js"), r.add("elng").set("extended_language", t.language || "fr-FR");
        var i = r.add("minf");
        if (void 0 !== c[t.type + "SampleEntry"]) {
            var o = new c[t.type + "SampleEntry"];
            o.data_reference_index = 1;
            var s = "";
            for (var u in c.sampleEntryCodes) {
                for (var l = c.sampleEntryCodes[u], d = 0; d < l.length; d++)
                    if (l.indexOf(t.type) > -1) {
                        s = u;
                        break
                    }
            }
            switch (s) {
                case "Visual":
                    if (i.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]), o.set("width", t.width).set("height", t.height).set("horizresolution", 4718592).set("vertresolution", 4718592).set("frame_count", 1).set("compressorname", t.type + " Compressor").set("depth", 24), t.avcDecoderConfigRecord) {
                        var f = new c.avcCBox,
                            p = new a(t.avcDecoderConfigRecord);
                        f.parse(p), o.addBox(f)
                    }
                    break;
                case "Audio":
                    i.add("smhd").set("balance", t.balance || 0), o.set("channel_count", t.channel_count || 2).set("samplesize", t.samplesize || 16).set("samplerate", t.samplerate || 65536);
                    break;
                case "Hint":
                    i.add("hmhd");
                    break;
                case "Subtitle":
                    if (i.add("sthd"), "stpp" === t.type) o.set("namespace", t.namespace || "nonamespace").set("schema_location", t.schema_location || "").set("auxiliary_mime_types", t.auxiliary_mime_types || "");
                    break;
                case "Metadata":
                case "System":
                    i.add("nmhd");
                    break;
                default:
                    i.add("nmhd")
            }
            t.description && o.addBox(t.description), t.description_boxes && t.description_boxes.forEach(function(e) {
                o.addBox(e)
            }), i.add("dinf").add("dref").addEntry(new c["url Box"]().set("flags", 1));
            var h = i.add("stbl");
            return h.add("stsd").addEntry(o), h.add("stts").set("sample_counts", []).set("sample_deltas", []), h.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []), h.add("stco").set("chunk_offsets", []), h.add("stsz").set("sample_sizes", []), this.moov.mvex.add("trex").set("track_id", t.id).set("default_sample_description_index", t.default_sample_description_index || 1).set("default_sample_duration", t.default_sample_duration || 0).set("default_sample_size", t.default_sample_size || 0).set("default_sample_flags", t.default_sample_flags || 0), this.buildTrakSampleLists(n), t.id
        }
    }, c.Box.prototype.computeSize = function(e) {
        var t = e || new o;
        t.endianness = o.BIG_ENDIAN, this.write(t)
    }, p.prototype.addSample = function(e, t, n) {
        var r = n || {},
            i = {},
            a = this.getTrackById(e);
        if (null !== a) {
            i.number = a.samples.length, i.track_id = a.tkhd.track_id, i.timescale = a.mdia.mdhd.timescale, i.description_index = r.sample_description_index ? r.sample_description_index - 1 : 0, i.description = a.mdia.minf.stbl.stsd.entries[i.description_index], i.data = t, i.size = t.byteLength, i.alreadyRead = i.size, i.duration = r.duration || 1, i.cts = r.cts || 0, i.dts = r.dts || 0, i.is_sync = r.is_sync || !1, i.is_leading = r.is_leading || 0, i.depends_on = r.depends_on || 0, i.is_depended_on = r.is_depended_on || 0, i.has_redundancy = r.has_redundancy || 0, i.degradation_priority = r.degradation_priority || 0, i.offset = 0, i.subsamples = r.subsamples, a.samples.push(i), a.samples_size += i.size, a.samples_duration += i.duration, !a.first_dts && (a.first_dts = r.dts), this.processSamples();
            var o = this.createSingleSampleMoof(i);
            return this.addBox(o), o.computeSize(), o.trafs[0].truns[0].data_offset = o.size + 8, this.add("mdat").data = new Uint8Array(t), i
        }
    }, p.prototype.createSingleSampleMoof = function(e) {
        var t = 0;
        t = e.is_sync ? 33554432 : 65536;
        var n = new c.moofBox;
        n.add("mfhd").set("sequence_number", this.nextMoofNumber), this.nextMoofNumber++;
        var r = n.add("traf"),
            i = this.getTrackById(e.track_id);
        return r.add("tfhd").set("track_id", e.track_id).set("flags", c.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), r.add("tfdt").set("baseMediaDecodeTime", e.dts - (i.first_dts || 0)), r.add("trun").set("flags", c.TRUN_FLAGS_DATA_OFFSET | c.TRUN_FLAGS_DURATION | c.TRUN_FLAGS_SIZE | c.TRUN_FLAGS_FLAGS | c.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0).set("first_sample_flags", 0).set("sample_count", 1).set("sample_duration", [e.duration]).set("sample_size", [e.size]).set("sample_flags", [t]).set("sample_composition_time_offset", [e.cts - e.dts]), n
    }, p.prototype.lastMoofIndex = 0, p.prototype.samplesDataSize = 0, p.prototype.resetTables = function() {
        for (e = 0, this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0; e < this.moov.traks.length; e++) {
            (t = this.moov.traks[e]).tkhd.duration = 0, t.mdia.mdhd.duration = 0, (t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64).chunk_offsets = [], (n = t.mdia.minf.stbl.stsc).first_chunk = [], n.samples_per_chunk = [], n.sample_description_index = [], (t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2).sample_sizes = [], (r = t.mdia.minf.stbl.stts).sample_counts = [], r.sample_deltas = [], (i = t.mdia.minf.stbl.ctts) && (i.sample_counts = [], i.sample_offsets = []), a = t.mdia.minf.stbl.stss;
            var e, t, n, r, i, a, o = t.mdia.minf.stbl.boxes.indexOf(a); - 1 != o && (t.mdia.minf.stbl.boxes[o] = null)
        }
    }, p.initSampleGroups = function(e, t, n, r, i) {
        var a, o, s, u;

        function c(e, t, n) {
            this.grouping_type = e, this.grouping_type_parameter = t, this.sbgp = n, this.last_sample_in_run = -1, this.entry_index = -1
        }
        for (t && (t.sample_groups_info = []), !e.sample_groups_info && (e.sample_groups_info = []), o = 0; o < n.length; o++) {
            for (u = n[o].grouping_type + "/" + n[o].grouping_type_parameter, s = new c(n[o].grouping_type, n[o].grouping_type_parameter, n[o]), t && (t.sample_groups_info[u] = s), !e.sample_groups_info[u] && (e.sample_groups_info[u] = s), a = 0; a < r.length; a++) r[a].grouping_type === n[o].grouping_type && (s.description = r[a], s.description.used = !0);
            if (i)
                for (a = 0; a < i.length; a++) i[a].grouping_type === n[o].grouping_type && (s.fragment_description = i[a], s.fragment_description.used = !0, s.is_fragment = !0)
        }
        if (t) {
            if (i)
                for (o = 0; o < i.length; o++) !i[o].used && i[o].version >= 2 && (u = i[o].grouping_type + "/0", (s = new c(i[o].grouping_type, 0)).is_fragment = !0, !t.sample_groups_info[u] && (t.sample_groups_info[u] = s))
        } else
            for (o = 0; o < r.length; o++) !r[o].used && r[o].version >= 2 && (u = r[o].grouping_type + "/0", s = new c(r[o].grouping_type, 0), !e.sample_groups_info[u] && (e.sample_groups_info[u] = s))
    }, p.setSampleGroupProperties = function(e, t, n, r) {
        var i, a, o;
        for (i in t.sample_groups = [], r) t.sample_groups[i] = {}, t.sample_groups[i].grouping_type = r[i].grouping_type, t.sample_groups[i].grouping_type_parameter = r[i].grouping_type_parameter, n >= r[i].last_sample_in_run && (r[i].last_sample_in_run < 0 && (r[i].last_sample_in_run = 0), r[i].entry_index++, r[i].entry_index <= r[i].sbgp.entries.length - 1 && (r[i].last_sample_in_run += r[i].sbgp.entries[r[i].entry_index].sample_count)), r[i].entry_index <= r[i].sbgp.entries.length - 1 ? t.sample_groups[i].group_description_index = r[i].sbgp.entries[r[i].entry_index].group_description_index : t.sample_groups[i].group_description_index = -1, 0 !== t.sample_groups[i].group_description_index && (o = r[i].fragment_description ? r[i].fragment_description : r[i].description, t.sample_groups[i].group_description_index > 0 ? (a = t.sample_groups[i].group_description_index > 65535 ? (t.sample_groups[i].group_description_index >> 16) - 1 : t.sample_groups[i].group_description_index - 1, o && a >= 0 && (t.sample_groups[i].description = o.entries[a])) : o && o.version >= 2 && o.default_group_description_index > 0 && (t.sample_groups[i].description = o.entries[o.default_group_description_index - 1]))
    }, p.process_sdtp = function(e, t, n) {
        t && (e ? (t.is_leading = e.is_leading[n], t.depends_on = e.sample_depends_on[n], t.is_depended_on = e.sample_is_depended_on[n], t.has_redundancy = e.sample_has_redundancy[n]) : (t.is_leading = 0, t.depends_on = 0, t.is_depended_on = 0, t.has_redundancy = 0))
    }, p.prototype.buildSampleLists = function() {
        var e, t;
        for (e = 0; e < this.moov.traks.length; e++) t = this.moov.traks[e], this.buildTrakSampleLists(t)
    }, p.prototype.buildTrakSampleLists = function(e) {
        if (e.samples = [], e.samples_duration = 0, e.samples_size = 0, n = e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64, r = e.mdia.minf.stbl.stsc, i = e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2, a = e.mdia.minf.stbl.stts, o = e.mdia.minf.stbl.ctts, s = e.mdia.minf.stbl.stss, u = e.mdia.minf.stbl.stsd, c = e.mdia.minf.stbl.subs, f = e.mdia.minf.stbl.stdp, l = e.mdia.minf.stbl.sbgps, d = e.mdia.minf.stbl.sgpds, v = -1, y = -1, E = -1, S = -1, x = 0, w = 0, T = 0, p.initSampleGroups(e, null, l, d), void 0 !== i) {
            for (t = 0; t < i.sample_sizes.length; t++) {
                var t, n, r, i, a, o, s, u, c, l, d, f, h, m, g, _, b, v, y, E, S, x, w, T, C = {};
                C.number = t, C.track_id = e.tkhd.track_id, C.timescale = e.mdia.mdhd.timescale, C.alreadyRead = 0, e.samples[t] = C, C.size = i.sample_sizes[t], e.samples_size += C.size, 0 === t ? (m = 1, h = 0, C.chunk_index = m, C.chunk_run_index = h, b = r.samples_per_chunk[h], _ = 0, g = h + 1 < r.first_chunk.length ? r.first_chunk[h + 1] - 1 : 1 / 0) : t < b ? (C.chunk_index = m, C.chunk_run_index = h) : (m++, C.chunk_index = m, _ = 0, m <= g || (g = ++h + 1 < r.first_chunk.length ? r.first_chunk[h + 1] - 1 : 1 / 0), C.chunk_run_index = h, b += r.samples_per_chunk[h]), C.description_index = r.sample_description_index[C.chunk_run_index] - 1, C.description = u.entries[C.description_index], C.offset = n.chunk_offsets[C.chunk_index - 1] + _, _ += C.size, t > v && (y++, v < 0 && (v = 0), v += a.sample_counts[y]), t > 0 ? (e.samples[t - 1].duration = a.sample_deltas[y], e.samples_duration += e.samples[t - 1].duration, C.dts = e.samples[t - 1].dts + e.samples[t - 1].duration) : C.dts = 0, o ? (t >= E && (S++, E < 0 && (E = 0), E += o.sample_counts[S]), C.cts = e.samples[t].dts + o.sample_offsets[S]) : C.cts = C.dts, s ? (t == s.sample_numbers[x] - 1 ? (C.is_sync = !0, x++) : (C.is_sync = !1, C.degradation_priority = 0), c && c.entries[w].sample_delta + T == t + 1 && (C.subsamples = c.entries[w].subsamples, T += c.entries[w].sample_delta, w++)) : C.is_sync = !0, p.process_sdtp(e.mdia.minf.stbl.sdtp, C, C.number), f ? C.degradation_priority = f.priority[t] : C.degradation_priority = 0, c && c.entries[w].sample_delta + T == t && (C.subsamples = c.entries[w].subsamples, T += c.entries[w].sample_delta), (l.length > 0 || d.length > 0) && p.setSampleGroupProperties(e, C, t, e.sample_groups_info)
            }
            t > 0 && (e.samples[t - 1].duration = Math.max(e.mdia.mdhd.duration - e.samples[t - 1].dts, 0), e.samples_duration += e.samples[t - 1].duration)
        }
    }, p.prototype.updateSampleLists = function() {
        if (void 0 !== this.moov) {
            for (; this.lastMoofIndex < this.moofs.length;)
                if (u = this.moofs[this.lastMoofIndex], this.lastMoofIndex++, "moof" == u.type)
                    for (e = 0; e < u.trafs.length; e++) {
                        for (l = u.trafs[e], d = this.getTrackById(l.tfhd.track_id), f = this.getTrexById(l.tfhd.track_id), r = l.tfhd.flags & c.TFHD_FLAG_SAMPLE_DESC ? l.tfhd.default_sample_description_index : f ? f.default_sample_description_index : 1, i = l.tfhd.flags & c.TFHD_FLAG_SAMPLE_DUR ? l.tfhd.default_sample_duration : f ? f.default_sample_duration : 0, a = l.tfhd.flags & c.TFHD_FLAG_SAMPLE_SIZE ? l.tfhd.default_sample_size : f ? f.default_sample_size : 0, o = l.tfhd.flags & c.TFHD_FLAG_SAMPLE_FLAGS ? l.tfhd.default_sample_flags : f ? f.default_sample_flags : 0, l.sample_number = 0, l.sbgps.length > 0 && p.initSampleGroups(d, l, l.sbgps, d.mdia.minf.stbl.sgpds, l.sgpds), t = 0; t < l.truns.length; t++) {
                            var e, t, n, r, i, a, o, s, u, l, d, f, h, m, g = l.truns[t];
                            for (n = 0; n < g.sample_count; n++) {
                                (h = {}).moof_number = this.lastMoofIndex, h.number_in_traf = l.sample_number, l.sample_number++, h.number = d.samples.length, l.first_sample_index = d.samples.length, d.samples.push(h), h.track_id = d.tkhd.track_id, h.timescale = d.mdia.mdhd.timescale, h.description_index = r - 1, h.description = d.mdia.minf.stbl.stsd.entries[h.description_index], h.size = a, g.flags & c.TRUN_FLAGS_SIZE && (h.size = g.sample_size[n]), d.samples_size += h.size, h.duration = i, g.flags & c.TRUN_FLAGS_DURATION && (h.duration = g.sample_duration[n]), d.samples_duration += h.duration, d.first_traf_merged || n > 0 ? h.dts = d.samples[d.samples.length - 2].dts + d.samples[d.samples.length - 2].duration : (l.tfdt ? h.dts = l.tfdt.baseMediaDecodeTime : h.dts = 0, d.first_traf_merged = !0), h.cts = h.dts, g.flags & c.TRUN_FLAGS_CTS_OFFSET && (h.cts = h.dts + g.sample_composition_time_offset[n]), m = o, g.flags & c.TRUN_FLAGS_FLAGS ? m = g.sample_flags[n] : 0 === n && g.flags & c.TRUN_FLAGS_FIRST_FLAG && (m = g.first_sample_flags), h.is_sync = !(m >> 16 & 1), h.is_leading = m >> 26 & 3, h.depends_on = m >> 24 & 3, h.is_depended_on = m >> 22 & 3, h.has_redundancy = m >> 20 & 3, h.degradation_priority = 65535 & m;
                                var _ = !!(l.tfhd.flags & c.TFHD_FLAG_BASE_DATA_OFFSET),
                                    b = !!(l.tfhd.flags & c.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                                    v = !!(g.flags & c.TRUN_FLAGS_DATA_OFFSET),
                                    y = 0;
                                y = _ ? l.tfhd.base_data_offset : b ? u.start : 0 === t ? u.start : s, 0 === t && 0 === n ? v ? h.offset = y + g.data_offset : h.offset = y : h.offset = s, s = h.offset + h.size, (l.sbgps.length > 0 || l.sgpds.length > 0 || d.mdia.minf.stbl.sbgps.length > 0 || d.mdia.minf.stbl.sgpds.length > 0) && p.setSampleGroupProperties(d, h, h.number_in_traf, l.sample_groups_info)
                            }
                        }
                        if (l.subs) {
                            d.has_fragment_subsamples = !0;
                            var E = l.first_sample_index;
                            for (t = 0; t < l.subs.entries.length; t++) E += l.subs.entries[t].sample_delta, (h = d.samples[E - 1]).subsamples = l.subs.entries[t].subsamples
                        }
                    }
        }
    }, p.prototype.getSample = function(e, t) {
        var n, r = e.samples[t];
        if (!this.moov) return null;
        if (r.data) {
            if (r.alreadyRead == r.size) return r
        } else r.data = new Uint8Array(r.size), r.alreadyRead = 0, this.samplesDataSize += r.size, i.debug("ISOFile", "Allocating sample #" + t + " on track #" + e.tkhd.track_id + " of size " + r.size + " (total: " + this.samplesDataSize + ")");
        for (;;) {
            var a = this.stream.findPosition(!0, r.offset + r.alreadyRead, !1);
            if (!(a > -1)) return null;
            var s = (n = this.stream.buffers[a]).byteLength - (r.offset + r.alreadyRead - n.fileStart);
            if (r.size - r.alreadyRead <= s) return i.debug("ISOFile", "Getting sample #" + t + " data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - n.fileStart) + " read size: " + (r.size - r.alreadyRead) + " full size: " + r.size + ")"), o.memcpy(r.data.buffer, r.alreadyRead, n, r.offset + r.alreadyRead - n.fileStart, r.size - r.alreadyRead), n.usedBytes += r.size - r.alreadyRead, this.stream.logBufferLevel(), r.alreadyRead = r.size, r;
            if (0 === s) return null;
            i.debug("ISOFile", "Getting sample #" + t + " partial data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - n.fileStart) + " read size: " + s + " full size: " + r.size + ")"), o.memcpy(r.data.buffer, r.alreadyRead, n, r.offset + r.alreadyRead - n.fileStart, s), r.alreadyRead += s, n.usedBytes += s, this.stream.logBufferLevel()
        }
    }, p.prototype.releaseSample = function(e, t) {
        var n = e.samples[t];
        return n.data ? (this.samplesDataSize -= n.size, n.data = null, n.alreadyRead = 0, n.size) : 0
    }, p.prototype.getAllocatedSampleDataSize = function() {
        return this.samplesDataSize
    }, p.prototype.getCodecs = function() {
        var e, t = "";
        for (e = 0; e < this.moov.traks.length; e++) {
            var n = this.moov.traks[e];
            e > 0 && (t += ","), t += n.mdia.minf.stbl.stsd.entries[0].getCodec()
        }
        return t
    }, p.prototype.getTrexById = function(e) {
        var t;
        if (!this.moov || !this.moov.mvex) return null;
        for (t = 0; t < this.moov.mvex.trexs.length; t++) {
            var n = this.moov.mvex.trexs[t];
            if (n.track_id == e) return n
        }
        return null
    }, p.prototype.getTrackById = function(e) {
        if (void 0 === this.moov) return null;
        for (var t = 0; t < this.moov.traks.length; t++) {
            var n = this.moov.traks[t];
            if (n.tkhd.track_id == e) return n
        }
        return null
    }, p.prototype.items = [], p.prototype.itemsDataSize = 0, p.prototype.flattenItemInfo = function() {
        var e, t, n, r = this.items,
            a = this.meta;
        if (null != a && void 0 !== a.hdlr) {
            if (void 0 !== a.iinf) {
                for (e = 0; e < a.iinf.item_infos.length; e++)(n = {}).id = a.iinf.item_infos[e].item_ID, r[n.id] = n, n.ref_to = [], n.name = a.iinf.item_infos[e].item_name, a.iinf.item_infos[e].protection_index > 0 && (n.protection = a.ipro.protections[a.iinf.item_infos[e].protection_index - 1]), a.iinf.item_infos[e].item_type ? n.type = a.iinf.item_infos[e].item_type : n.type = "mime", n.content_type = a.iinf.item_infos[e].content_type, n.content_encoding = a.iinf.item_infos[e].content_encoding;
                if (a.iloc)
                    for (e = 0; e < a.iloc.items.length; e++) {
                        var o = a.iloc.items[e];
                        switch (n = r[o.item_ID], 0 !== o.data_reference_index && (i.warn("Item storage with reference to other files: not supported"), n.source = a.dinf.boxes[o.data_reference_index - 1]), o.construction_method) {
                            case 0:
                                break;
                            case 1:
                                i.warn("Item storage with construction_method : not supported");
                                break;
                            case 2:
                                i.warn("Item storage with construction_method : not supported")
                        }
                        for (t = 0, n.extents = [], n.size = 0; t < o.extents.length; t++) n.extents[t] = {}, n.extents[t].offset = o.extents[t].extent_offset + o.base_offset, n.extents[t].length = o.extents[t].extent_length, n.extents[t].alreadyRead = 0, n.size += n.extents[t].length
                    }
                if (a.pitm && (r[a.pitm.item_id].primary = !0), a.iref)
                    for (e = 0; e < a.iref.references.length; e++) {
                        var s = a.iref.references[e];
                        for (t = 0; t < s.references.length; t++) r[s.from_item_ID].ref_to.push({
                            type: s.type,
                            id: s.references[t]
                        })
                    }
                if (a.iprp)
                    for (var u = 0; u < a.iprp.ipmas.length; u++) {
                        var c = a.iprp.ipmas[u];
                        for (e = 0; e < c.associations.length; e++) {
                            var l = c.associations[e];
                            for (void 0 === (n = r[l.id]).properties && (n.properties = {}, n.properties.boxes = []), t = 0; t < l.props.length; t++) {
                                var d = l.props[t];
                                if (d.property_index > 0 && d.property_index - 1 < a.iprp.ipco.boxes.length) {
                                    var f = a.iprp.ipco.boxes[d.property_index - 1];
                                    n.properties[f.type] = f, n.properties.boxes.push(f)
                                }
                            }
                        }
                    }
            }
        }
    }, p.prototype.getItem = function(e) {
        if (!this.meta) return null;
        if (!(n = this.items[e]).data && n.size) n.data = new Uint8Array(n.size), n.alreadyRead = 0, this.itemsDataSize += n.size, i.debug("ISOFile", "Allocating item #" + e + " of size " + n.size + " (total: " + this.itemsDataSize + ")");
        else if (n.alreadyRead === n.size) return n;
        for (var t, n, r = 0; r < n.extents.length; r++) {
            var a = n.extents[r];
            if (a.alreadyRead !== a.length) {
                var s = this.stream.findPosition(!0, a.offset + a.alreadyRead, !1);
                if (!(s > -1)) return null;
                var u = (t = this.stream.buffers[s]).byteLength - (a.offset + a.alreadyRead - t.fileStart);
                if (!(a.length - a.alreadyRead <= u)) return i.debug("ISOFile", "Getting item #" + e + " extent #" + r + " partial data (alreadyRead: " + a.alreadyRead + " offset: " + (a.offset + a.alreadyRead - t.fileStart) + " read size: " + u + " full extent size: " + a.length + " full item size: " + n.size + ")"), o.memcpy(n.data.buffer, n.alreadyRead, t, a.offset + a.alreadyRead - t.fileStart, u), a.alreadyRead += u, n.alreadyRead += u, t.usedBytes += u, this.stream.logBufferLevel(), null;
                i.debug("ISOFile", "Getting item #" + e + " extent #" + r + " data (alreadyRead: " + a.alreadyRead + " offset: " + (a.offset + a.alreadyRead - t.fileStart) + " read size: " + (a.length - a.alreadyRead) + " full extent size: " + a.length + " full item size: " + n.size + ")"), o.memcpy(n.data.buffer, n.alreadyRead, t, a.offset + a.alreadyRead - t.fileStart, a.length - a.alreadyRead), t.usedBytes += a.length - a.alreadyRead, this.stream.logBufferLevel(), n.alreadyRead += a.length - a.alreadyRead, a.alreadyRead = a.length
            }
        }
        return n.alreadyRead === n.size ? n : null
    }, p.prototype.releaseItem = function(e) {
        var t = this.items[e];
        if (!t.data) return 0;
        this.itemsDataSize -= t.size, t.data = null, t.alreadyRead = 0;
        for (var n = 0; n < t.extents.length; n++) t.extents[n].alreadyRead = 0;
        return t.size
    }, p.prototype.processItems = function(e) {
        for (var t in this.items) {
            var n = this.items[t];
            this.getItem(n.id), e && !n.sent && (e(n), n.sent = !0, n.data = null)
        }
    }, p.prototype.hasItem = function(e) {
        for (var t in this.items) {
            var n = this.items[t];
            if (n.name === e) return n.id
        }
        return -1
    }, p.prototype.getMetaHandler = function() {
        return this.meta ? this.meta.hdlr.handler : null
    }, p.prototype.getPrimaryItem = function() {
        return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null
    }, p.prototype.itemToFragmentedTrackFile = function(e) {
        var t = e || {},
            n = null;
        if (null == (n = t.itemId ? this.getItem(t.itemId) : this.getPrimaryItem())) return null;
        var r = new p;
        r.discardMdatData = !1;
        var i = {
            type: n.type,
            description_boxes: n.properties.boxes
        };
        n.properties.ispe && (i.width = n.properties.ispe.image_width, i.height = n.properties.ispe.image_height);
        var a = r.addTrack(i);
        return a ? (r.addSample(a, n.data), r) : null
    }, p.prototype.write = function(e) {
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e)
    }, p.prototype.createFragment = function(e, t, n) {
        var r = this.getTrackById(e),
            a = this.getSample(r, t);
        if (null == a) return a = r.samples[t], this.nextSeekPosition ? this.nextSeekPosition = Math.min(a.offset + a.alreadyRead, this.nextSeekPosition) : this.nextSeekPosition = r.samples[t].offset + a.alreadyRead, null;
        var s = n || new o;
        s.endianness = o.BIG_ENDIAN;
        var u = this.createSingleSampleMoof(a);
        u.write(s), u.trafs[0].truns[0].data_offset = u.size + 8, i.debug("MP4Box", "Adjusting data_offset with new value " + u.trafs[0].truns[0].data_offset), s.adjustUint32(u.trafs[0].truns[0].data_offset_position, u.trafs[0].truns[0].data_offset);
        var l = new c.mdatBox;
        return l.data = a.data, l.write(s), s
    }, p.writeInitializationSegment = function(e, t, n, r) {
        i.debug("ISOFile", "Generating initialization segment");
        var a, s = new o;
        s.endianness = o.BIG_ENDIAN, e.write(s);
        var u = t.add("mvex");
        for (n && u.add("mehd").set("fragment_duration", n), a = 0; a < t.traks.length; a++) u.add("trex").set("track_id", t.traks[a].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", r).set("default_sample_size", 0).set("default_sample_flags", 65536);
        return t.write(s), s.buffer
    }, p.prototype.save = function(e) {
        var t = new o;
        t.endianness = o.BIG_ENDIAN, this.write(t), t.save(e)
    }, p.prototype.getBuffer = function() {
        var e = new o;
        return e.endianness = o.BIG_ENDIAN, this.write(e), e.buffer
    }, p.prototype.initializeSegmentation = function() {
        for (null === this.onSegment && i.warn("MP4Box", "No segmentation callback set!"), !this.isFragmentationInitialized && (this.isFragmentationInitialized = !0, this.nextMoofNumber = 0, this.resetTables()), t = [], e = 0; e < this.fragmentedTracks.length; e++) {
            var e, t, n, r, a = new c.moovBox;
            a.mvhd = this.moov.mvhd, a.boxes.push(a.mvhd), n = this.getTrackById(this.fragmentedTracks[e].id), a.boxes.push(n), a.traks.push(n), (r = {}).id = n.tkhd.track_id, r.user = this.fragmentedTracks[e].user, r.buffer = p.writeInitializationSegment(this.ftyp, a, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[e].samples.length > 0 ? this.moov.traks[e].samples[0].duration : 0), t.push(r)
        }
        return t
    }, c.Box.prototype.printHeader = function(e) {
        this.size += 8, this.size > 4294967296 && (this.size += 8), "uuid" === this.type && (this.size += 16), e.log(e.indent + "size:" + this.size), e.log(e.indent + "type:" + this.type)
    }, c.FullBox.prototype.printHeader = function(e) {
        this.size += 4, c.Box.prototype.printHeader.call(this, e), e.log(e.indent + "version:" + this.version), e.log(e.indent + "flags:" + this.flags)
    }, c.Box.prototype.print = function(e) {
        this.printHeader(e)
    }, c.ContainerBox.prototype.print = function(e) {
        this.printHeader(e);
        for (var t = 0; t < this.boxes.length; t++)
            if (this.boxes[t]) {
                var n = e.indent;
                e.indent += " ", this.boxes[t].print(e), e.indent = n
            }
    }, p.prototype.print = function(e) {
        e.indent = "";
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t] && this.boxes[t].print(e)
    }, c.mvhdBox.prototype.print = function(e) {
        c.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + "creation_time: " + this.creation_time), e.log(e.indent + "modification_time: " + this.modification_time), e.log(e.indent + "timescale: " + this.timescale), e.log(e.indent + "duration: " + this.duration), e.log(e.indent + "rate: " + this.rate), e.log(e.indent + "volume: " + (this.volume >> 8)), e.log(e.indent + "matrix: " + this.matrix.join(", ")), e.log(e.indent + "next_track_id: " + this.next_track_id)
    }, c.tkhdBox.prototype.print = function(e) {
        c.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + "creation_time: " + this.creation_time), e.log(e.indent + "modification_time: " + this.modification_time), e.log(e.indent + "track_id: " + this.track_id), e.log(e.indent + "duration: " + this.duration), e.log(e.indent + "volume: " + (this.volume >> 8)), e.log(e.indent + "matrix: " + this.matrix.join(", ")), e.log(e.indent + "layer: " + this.layer), e.log(e.indent + "alternate_group: " + this.alternate_group), e.log(e.indent + "width: " + this.width), e.log(e.indent + "height: " + this.height)
    };
    var h = {};
    h.createFile = function(e, t) {
        var n = new p(t);
        return n.discardMdatData = !(void 0 === e || e), n
    }, void 0 !== t && (t.createFile = h.createFile)
}