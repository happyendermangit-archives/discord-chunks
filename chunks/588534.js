function(e, t, n) {
    t.publicEncrypt = n("424522"), t.privateDecrypt = n("894881"), t.privateEncrypt = function(e, n) {
        return t.publicEncrypt(e, n, !0)
    }, t.publicDecrypt = function(e, n) {
        return t.privateDecrypt(e, n, !0)
    }
}