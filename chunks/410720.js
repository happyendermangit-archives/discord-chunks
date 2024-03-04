function(e, t, n) {
    n("854508"), t.encrypt = function(e, t) {
        return e._cipher.encryptBlock(t)
    }, t.decrypt = function(e, t) {
        return e._cipher.decryptBlock(t)
    }
}