function(e, t, n) {
    n("70102");
    var t = e.exports = function(e) {
        var n = t[e = e.toLowerCase()];
        if (!n) throw Error(e + " is not supported (we accept pull requests)");
        return new n
    };
    t.sha = n("886581"), t.sha1 = n("272303"), t.sha224 = n("831944"), t.sha256 = n("445354"), t.sha384 = n("736460"), t.sha512 = n("950731")
}