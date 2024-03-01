function(t, e, s) {
    s("70102");
    var e = t.exports = function(t) {
        var s = e[t = t.toLowerCase()];
        if (!s) throw Error(t + " is not supported (we accept pull requests)");
        return new s
    };
    e.sha = s("886581"), e.sha1 = s("272303"), e.sha224 = s("831944"), e.sha256 = s("445354"), e.sha384 = s("736460"), e.sha512 = s("950731")
}