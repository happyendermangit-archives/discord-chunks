function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("433517"),
        r = n("147913");
    let s = "formGuidelinesStorageKey";
    class a extends r.default {
        _initialize() {
            let e = i.Storage.get(s);
            null != e && (this.seenForumGuidelines = new Set(e))
        }
        _terminate() {
            i.Storage.set(s, this.seenForumGuidelines)
        }
        markAsSeen(e) {
            this.seenForumGuidelines.add(e), i.Storage.set(s, this.seenForumGuidelines)
        }
        hasSeen(e) {
            return this.seenForumGuidelines.has(e)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "seenForumGuidelines", i = new Set, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new a
}