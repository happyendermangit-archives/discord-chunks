function(e, t, n) {
    "use strict";
    var r = n("117417");
    e.exports = function(e) {
        var t = (e = e || {}).reporter,
            n = e.batchProcessor,
            i = e.stateHandler.getState;
        if (!t) throw Error("Missing required dependency: reporter.");

        function a(e) {
            return i(e).object
        }
        return {
            makeDetectable: function(a, o, s) {
                !s && (s = o, o = a, a = null), (a = a || {}).debug;
                r.isIE(8) ? s(o) : ! function(o, s) {
                    var u, c, l = (u = ["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"], c = e.important ? " !important; " : "; ", (u.join(c) + c).trim()),
                        d = !1,
                        f = window.getComputedStyle(o),
                        p = o.offsetWidth,
                        h = o.offsetHeight;

                    function m() {
                        function e() {
                            if ("static" === f.position) {
                                o.style.setProperty("position", "relative", a.important ? "important" : "");
                                var e = function(e, t, n, r) {
                                    var i = n[r];
                                    if ("auto" !== i && "0" !== i.replace(/[^-\d\.]/g, "")) e.warn("An element that is positioned static has style." + r + "=" + i + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", t), t.style.setProperty(r, "0", a.important ? "important" : "")
                                };
                                e(t, o, f, "top"), e(t, o, f, "right"), e(t, o, f, "bottom"), e(t, o, f, "left")
                            }
                        }
                        "" !== f.position && (e(f), d = !0);
                        var n = document.createElement("object");
                        n.style.cssText = l, n.tabIndex = -1, n.type = "text/html", n.setAttribute("aria-hidden", "true"), n.onload = function() {
                            !d && e();
                            ! function e(t, n) {
                                if (!t.contentDocument) {
                                    var r = i(t);
                                    r.checkForObjectDocumentTimeoutId && window.clearTimeout(r.checkForObjectDocumentTimeoutId), r.checkForObjectDocumentTimeoutId = setTimeout(function() {
                                        r.checkForObjectDocumentTimeoutId = 0, e(t, n)
                                    }, 100);
                                    return
                                }
                                n(t.contentDocument)
                            }(this, function(e) {
                                s(o)
                            })
                        }, !r.isIE() && (n.data = "about:blank"), i(o) && (o.appendChild(n), i(o).object = n, r.isIE() && (n.data = "about:blank"))
                    }
                    i(o).startSize = {
                        width: p,
                        height: h
                    }, n ? n.add(m) : m()
                }(o, s)
            },
            addListener: function(e, t) {
                function n() {
                    t(e)
                }
                if (r.isIE(8)) i(e).object = {
                    proxy: n
                }, e.attachEvent("onresize", n);
                else {
                    var a = function(e) {
                        return i(e).object
                    }(e);
                    if (!a) throw Error("Element is not detectable by this strategy.");
                    a.contentDocument.defaultView.addEventListener("resize", n)
                }
            },
            uninstall: function(e) {
                if (!!i(e)) {
                    var t = i(e).object;
                    t && (r.isIE(8) ? e.detachEvent("onresize", t.proxy) : e.removeChild(t), i(e).checkForObjectDocumentTimeoutId && window.clearTimeout(i(e).checkForObjectDocumentTimeoutId), delete i(e).object)
                }
            }
        }
    }
}