function(e, t, n) {
    "use strict";
    var r = n("201694").forEach;
    e.exports = function(e) {
        var t = (e = e || {}).reporter,
            n = e.batchProcessor,
            i = e.stateHandler.getState;
        e.stateHandler.hasState;
        var a = e.idHandler;
        if (!n) throw Error("Missing required dependency: batchProcessor");
        if (!t) throw Error("Missing required dependency: reporter.");
        var o = function() {
                var e = document.createElement("div");
                e.style.cssText = c(["position: absolute", "width: 1000px", "height: 1000px", "visibility: hidden", "margin: 0", "padding: 0"]);
                var t = document.createElement("div");
                t.style.cssText = c(["position: absolute", "width: 500px", "height: 500px", "overflow: scroll", "visibility: none", "top: -1500px", "left: -1500px", "visibility: hidden", "margin: 0", "padding: 0"]), t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
                var n = 500 - t.clientWidth,
                    r = 500 - t.clientHeight;
                return document.body.removeChild(t), {
                    width: n,
                    height: r
                }
            }(),
            s = "erd_scroll_detection_container";

        function u(e) {
            (function(e, t, n) {
                if (!e.getElementById(t)) {
                    var r, i, a, o = n + "_animation",
                        s = "/* Created by the element-resize-detector library. */\n";
                    s += "." + n + " > div::-webkit-scrollbar { " + c(["display: none"]) + " }\n\n" + ("." + n + "_animation_active { " + c(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + o, "animation-name: " + o]) + " }\n") + ("@-webkit-keyframes " + o + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n") + ("@keyframes " + o + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }"), r = s, i = i || function(t) {
                        e.head.appendChild(t)
                    }, (a = e.createElement("style")).innerHTML = r, a.id = t, i(a)
                }
            })(e, "erd_scroll_detection_scrollbar_style", s)
        }

        function c(t) {
            var n = e.important ? " !important; " : "; ";
            return (t.join(n) + n).trim()
        }
        u(window.document);

        function l(e, n, r) {
            if (e.addEventListener) e.addEventListener(n, r);
            else {
                if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
                e.attachEvent("on" + n, r)
            }
        }

        function d(e, n, r) {
            if (e.removeEventListener) e.removeEventListener(n, r);
            else {
                if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
                e.detachEvent("on" + n, r)
            }
        }

        function f(e) {
            return i(e).container.childNodes[0].childNodes[0].childNodes[0]
        }

        function p(e) {
            return i(e).container.childNodes[0].childNodes[0].childNodes[1]
        }
        return {
            makeDetectable: function(e, u, d) {
                var h, m, g;

                function _() {
                    if (e.debug) {
                        var n = Array.prototype.slice.call(arguments);
                        if (n.unshift(a.get(u), "Scroll: "), t.log.apply) t.log.apply(null, n);
                        else
                            for (var r = 0; r < n.length; r++) t.log(n[r])
                    }
                }!d && (d = u, u = e, e = null), e = e || {};

                function b(e) {
                    var t = i(e).container.childNodes[0],
                        n = window.getComputedStyle(t);
                    return !n.width || -1 === n.width.indexOf("px")
                }

                function v() {
                    var e = window.getComputedStyle(u),
                        t = {};
                    return t.position = e.position, t.width = u.offsetWidth, t.height = u.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
                }

                function y() {
                    if (_("storeStyle invoked."), !i(u)) {
                        _("Aborting because element has been uninstalled");
                        return
                    }
                    var e = v();
                    i(u).style = e
                }

                function E(e, t, n) {
                    i(e).lastWidth = t, i(e).lastHeight = n
                }

                function S() {
                    return 2 * o.width + 1
                }

                function x() {
                    return 2 * o.height + 1
                }

                function w(e) {
                    return e + 10 + S()
                }

                function T(e) {
                    return e + 10 + x()
                }

                function C(e, t, n) {
                    var r = f(e),
                        i = p(e),
                        a = t + 10 + S(),
                        o = n + 10 + x(),
                        s = 2 * t + S(),
                        u = 2 * n + x();
                    r.scrollLeft = a, r.scrollTop = o, i.scrollLeft = s, i.scrollTop = u
                }

                function D() {
                    var e = i(u).container;
                    if (!e) {
                        (e = document.createElement("div")).className = s, e.style.cssText = c(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), i(u).container = e, t = e, t.className += " " + s + "_animation_active", u.appendChild(e);
                        var t, n = function() {
                            i(u).onRendered && i(u).onRendered()
                        };
                        l(e, "animationstart", n), i(u).onAnimationStart = n
                    }
                    return e
                }

                function O() {
                    if (_("Injecting elements"), !i(u)) {
                        _("Aborting because element has been uninstalled");
                        return
                    }! function() {
                        var n = i(u).style;
                        if ("static" === n.position) {
                            u.style.setProperty("position", "relative", e.important ? "important" : "");
                            var r = function(e, t, n, r) {
                                var i = n[r];
                                if ("auto" !== i && "0" !== i.replace(/[^-\d\.]/g, "")) e.warn("An element that is positioned static has style." + r + "=" + i + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", t), t.style[r] = 0
                            };
                            r(t, u, n, "top"), r(t, u, n, "right"), r(t, u, n, "bottom"), r(t, u, n, "left")
                        }
                    }();
                    var n, r, a, d, f = i(u).container;
                    !f && (f = D());
                    var p = o.width,
                        h = o.height,
                        m = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
                    var g = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat((n = -(1 + p), r = -(1 + h), a = -h, ["left: " + (n = n ? n + "px" : "0"), "top: " + (r = r ? r + "px" : "0"), "right: " + (d = (d = -p) ? d + "px" : "0"), "bottom: " + (a = a ? a + "px" : "0")]))),
                        b = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                        v = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                        y = c(["position: absolute", "left: 0", "top: 0"]),
                        E = c(["position: absolute", "width: 200%", "height: 200%"]),
                        S = document.createElement("div"),
                        x = document.createElement("div"),
                        w = document.createElement("div"),
                        T = document.createElement("div"),
                        C = document.createElement("div"),
                        O = document.createElement("div");

                    function M() {
                        var e = i(u);
                        e && e.onExpand ? e.onExpand() : _("Aborting expand scroll handler: element has been uninstalled")
                    }

                    function A() {
                        var e = i(u);
                        e && e.onShrink ? e.onShrink() : _("Aborting shrink scroll handler: element has been uninstalled")
                    }
                    S.dir = "ltr", S.style.cssText = m, S.className = s, x.className = s, x.style.cssText = g, w.style.cssText = b, T.style.cssText = y, C.style.cssText = v, O.style.cssText = E, w.appendChild(T), C.appendChild(O), x.appendChild(w), x.appendChild(C), S.appendChild(x), f.appendChild(S), l(w, "scroll", M), l(C, "scroll", A), i(u).onExpandScroll = M, i(u).onShrinkScroll = A
                }

                function M() {
                    function o(t, n, r) {
                        var i = f(t).childNodes[0],
                            a = n + 10 + S(),
                            o = r + 10 + x();
                        i.style.setProperty("width", a + "px", e.important ? "important" : ""), i.style.setProperty("height", o + "px", e.important ? "important" : "")
                    }

                    function s(r) {
                        var s = u.offsetWidth,
                            l = u.offsetHeight,
                            d = s !== i(u).lastWidth || l !== i(u).lastHeight;
                        _("Storing current size", s, l), E(u, s, l), n.add(0, function() {
                            if (d) {
                                if (!i(u)) {
                                    _("Aborting because element has been uninstalled");
                                    return
                                }
                                if (!c()) {
                                    _("Aborting because element container has not been initialized");
                                    return
                                }
                                if (e.debug) {
                                    var n = u.offsetWidth,
                                        r = u.offsetHeight;
                                    (n !== s || r !== l) && t.warn(a.get(u), "Scroll: Size changed before updating detector elements.")
                                }
                                o(u, s, l)
                            }
                        }), n.add(1, function() {
                            if (!i(u)) {
                                _("Aborting because element has been uninstalled");
                                return
                            }
                            if (!c()) {
                                _("Aborting because element container has not been initialized");
                                return
                            }
                            C(u, s, l)
                        }), d && r && n.add(2, function() {
                            if (!i(u)) {
                                _("Aborting because element has been uninstalled");
                                return
                            }
                            if (!c()) {
                                _("Aborting because element container has not been initialized");
                                return
                            }
                            r()
                        })
                    }

                    function c() {
                        return !!i(u).container
                    }

                    function l() {
                        _("notifyListenersIfNeeded invoked");
                        var e = i(u);
                        return void 0 === i(u).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? _("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? _("Not notifying: Size already notified") : void(_("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, r(i(u).listeners, function(e) {
                            e(u)
                        }))
                    }

                    function d() {
                        if (_("Scroll detected."), b(u)) {
                            _("Scroll event fired while unrendered. Ignoring...");
                            return
                        }
                        s(l)
                    }
                    if (_("registerListenersAndPositionElements invoked."), !i(u)) {
                        _("Aborting because element has been uninstalled");
                        return
                    }
                    i(u).onRendered = function() {
                        if (_("startanimation triggered."), b(u)) {
                            _("Ignoring since element is still unrendered...");
                            return
                        }
                        _("Element rendered.");
                        var e = f(u),
                            t = p(u);
                        (0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (_("Scrollbars out of sync. Updating detector elements..."), s(l))
                    }, i(u).onExpand = d, i(u).onShrink = d;
                    var h = i(u).style;
                    o(u, h.width, h.height)
                }

                function A() {
                    if (_("finalizeDomMutation invoked."), !i(u)) {
                        _("Aborting because element has been uninstalled");
                        return
                    }
                    var e = i(u).style;
                    E(u, e.width, e.height), C(u, e.width, e.height)
                }

                function k() {
                    d(u)
                }

                function R() {
                    var e;
                    _("Installing..."), i(u).listeners = [], e = v(), i(u).startSize = {
                        width: e.width,
                        height: e.height
                    }, _("Element start size", i(u).startSize), n.add(0, y), n.add(1, O), n.add(2, M), n.add(3, A), n.add(4, k)
                }
                if (_("Making detectable..."), (g = (m = h = u).getRootNode && m.getRootNode().contains(m), (m === m.ownerDocument.body || m.ownerDocument.body.contains(m) || g) && null !== window.getComputedStyle(h)) ? 1 : 0) R();
                else _("Element is detached"), D(), _("Waiting until element is attached..."), i(u).onRendered = function() {
                    _("Element is now attached"), R()
                }
            },
            addListener: function(e, t) {
                if (!i(e).listeners.push) throw Error("Cannot add listener to an element that is not detectable.");
                i(e).listeners.push(t)
            },
            uninstall: function(e) {
                var t = i(e);
                t && (t.onExpandScroll && d(f(e), "scroll", t.onExpandScroll), t.onShrinkScroll && d(p(e), "scroll", t.onShrinkScroll), t.onAnimationStart && d(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container))
            },
            initDocument: u
        }
    }
}