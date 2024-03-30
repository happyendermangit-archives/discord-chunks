function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("941504");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var i = function() {
        var e, t, i;

        function a(e) {
            var t, r, o;
            if (! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, a), t = this, o = void 0, (r = "announcer") in t ? Object.defineProperty(t, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = o, null != e) this.announcer = e;
            else {
                var i = n("408160");
                this.announcer = {
                    announce: i.announce,
                    clearAnnouncements: i.clearAnnouncer
                }
            }
        }
        return e = a, t = [{
            key: "announce",
            value: function(e, t, n) {
                this.announcer.announce(e, t, n)
            }
        }, {
            key: "announceDrag",
            value: function(e, t) {
                if (null != e) {
                    var n = this.getName(e, t);
                    this.announce(r.default.Messages.DND_ITEM_PICKED_UP.format({
                        itemName: n
                    }))
                }
            }
        }, {
            key: "announceHover",
            value: function(e, t) {
                null != e && this.announce(this.getName(e, t))
            }
        }, {
            key: "announceDrop",
            value: function() {
                this.announce(r.default.Messages.DND_ITEM_DROPPED)
            }
        }, {
            key: "announceCancel",
            value: function() {
                this.announce(r.default.Messages.DND_DRAG_CANCELED)
            }
        }, {
            key: "clear",
            value: function() {
                this.announcer.clearAnnouncements()
            }
        }, {
            key: "getName",
            value: function(e, t) {
                var n, r;
                return null !== (r = null !== (n = e.getAttribute("data-dnd-name")) && void 0 !== n ? n : e.getAttribute("aria-label")) && void 0 !== r ? r : t
            }
        }], o(e.prototype, t), i && o(e, i), a
    }()
}