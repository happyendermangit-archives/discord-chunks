function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("702016");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var i = function() {
        var e, t, n;

        function i() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), e = this, n = {}, (t = "streams") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = i, t = [{
            key: "addSink",
            value: function(e, t, n) {
                var o = this.streams,
                    i = o[e];
                if (null == i && (i = o[e] = new Map), 0 === i.size) {
                    var a = (0, r.getVoiceEngine)();
                    a.setVideoOutputSink(e, this.handleImageData.bind(this, a.signalVideoOutputSinkReady.bind(a, e), i), !0)
                }
                i.set(t, n)
            }
        }, {
            key: "removeSink",
            value: function(e, t) {
                var n = this.streams,
                    o = n[e];
                null != o && (o.delete(t), 0 === o.size && (delete n[e], (0, r.getVoiceEngine)().setVideoOutputSink(e)))
            }
        }, {
            key: "handleImageData",
            value: function(e, t, n) {
                var r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t.values()[Symbol.iterator](); !(r = (a = u.next()).done); r = !0)(0, a.value)(n)
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && null != u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                e()
            }
        }], o(e.prototype, t), n && o(e, n), i
    }();
    t.default = new i
}