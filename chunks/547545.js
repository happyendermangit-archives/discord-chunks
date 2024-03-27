function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("689938");
    class r {
        announce(e, t, n) {
            this.announcer.announce(e, t, n)
        }
        announceDrag(e, t) {
            if (null == e) return;
            let n = this.getName(e, t);
            this.announce(i.default.Messages.DND_ITEM_PICKED_UP.format({
                itemName: n
            }))
        }
        announceHover(e, t) {
            null != e && this.announce(this.getName(e, t))
        }
        announceDrop() {
            this.announce(i.default.Messages.DND_ITEM_DROPPED)
        }
        announceCancel() {
            this.announce(i.default.Messages.DND_DRAG_CANCELED)
        }
        clear() {
            this.announcer.clearAnnouncements()
        }
        getName(e, t) {
            var n, i;
            return null !== (i = null !== (n = e.getAttribute("data-dnd-name")) && void 0 !== n ? n : e.getAttribute("aria-label")) && void 0 !== i ? i : t
        }
        constructor(e) {
            var t, i, r;
            if (t = this, r = void 0, (i = "announcer") in t ? Object.defineProperty(t, i, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = r, null != e) this.announcer = e;
            else {
                let e = n("408160");
                this.announcer = {
                    announce: e.announce,
                    clearAnnouncements: e.clearAnnouncer
                }
            }
        }
    }
}