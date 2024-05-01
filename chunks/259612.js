function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createImageFromImageData: function() {
            return r
        },
        createThumbnailFromVideo: function() {
            return a
        }
    }), n("411104");
    var i = n("356659");

    function r(e) {
        let t = document.createElement("canvas");
        t.width = e.width, t.height = e.height;
        let n = t.getContext("2d");
        if (null == n) throw Error("Could not create canvas context");
        return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
    }
    async function a(e, t) {
        let n = document.createElement("video");
        n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
        let r = i.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
            a = Math.min(r, i.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight),
            s = n.videoWidth * a,
            o = n.videoHeight * a,
            l = document.createElement("canvas");
        l.width = s, l.height = o;
        let u = l.getContext("2d");
        if (null == u) throw Error("Could not create canvas context");
        return u.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, s, o), l.toDataURL("image/jpeg", .9)
    }
}