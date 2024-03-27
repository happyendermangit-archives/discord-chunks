function(e, t, n) {
    var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
        i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
        a = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
        o = n("245413"),
        s = n("780177"),
        u = n("957578").Buffer;
    e.exports = function(e, t) {
        var n, c = e.toString(),
            l = c.match(r);
        if (l) {
            var d = "aes" + l[1],
                f = u.from(l[2], "hex"),
                p = u.from(l[3].replace(/[\r\n]/g, ""), "base64"),
                h = o(t, f.slice(0, 8), parseInt(l[1], 10)).key,
                m = [],
                g = s.createDecipheriv(d, h, f);
            m.push(g.update(p)), m.push(g.final()), n = u.concat(m)
        } else {
            var _ = c.match(a);
            n = u.from(_[2].replace(/[\r\n]/g, ""), "base64")
        }
        return {
            tag: c.match(i)[1],
            data: n
        }
    }
}