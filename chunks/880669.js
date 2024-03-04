function(e, t, n) {
    e.exports = i;
    var r = n("44170").EventEmitter;

    function i() {
        r.call(this)
    }
    n("599235")(i, r), i.Readable = n("245387"), i.Writable = n("769419"), i.Duplex = n("388765"), i.Transform = n("372614"), i.PassThrough = n("19734"), i.finished = n("362796"), i.pipeline = n("907481"), i.Stream = i, i.prototype.pipe = function(e, t) {
        var n = this;

        function i(t) {
            e.writable && !1 === e.write(t) && n.pause && n.pause()
        }

        function o() {
            n.readable && n.resume && n.resume()
        }
        n.on("data", i), e.on("drain", o), !e._isStdio && (!t || !1 !== t.end) && (n.on("end", a), n.on("close", c));
        var s = !1;

        function a() {
            !s && (s = !0, e.end())
        }

        function c() {
            !s && (s = !0, "function" == typeof e.destroy && e.destroy())
        }

        function u(e) {
            if (d(), 0 === r.listenerCount(this, "error")) throw e
        }

        function d() {
            n.removeListener("data", i), e.removeListener("drain", o), n.removeListener("end", a), n.removeListener("close", c), n.removeListener("error", u), e.removeListener("error", u), n.removeListener("end", d), n.removeListener("close", d), e.removeListener("close", d)
        }
        return n.on("error", u), e.on("error", u), n.on("end", d), n.on("close", d), e.on("close", d), e.emit("pipe", n), e
    }
}