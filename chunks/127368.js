function(e, t, n) {
    n("70102");
    var r = n("912065").Buffer;
    e.exports = function(e, t, n) {
        if (r.isBuffer(e)) return e;
        if ("string" == typeof e) return r.from(e, t);
        if (ArrayBuffer.isView(e)) return r.from(e.buffer);
        else throw TypeError(n + " must be a string, a Buffer, a typed array or a DataView")
    }
}