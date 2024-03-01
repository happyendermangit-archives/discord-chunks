function(t, e, s) {
    e.publicEncrypt = s("424522"), e.privateDecrypt = s("894881"), e.privateEncrypt = function(t, s) {
        return e.publicEncrypt(t, s, !0)
    }, e.publicDecrypt = function(t, s) {
        return e.privateDecrypt(t, s, !0)
    }
}