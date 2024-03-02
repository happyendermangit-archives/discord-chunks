function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createImageFromUint8Array: function() {
            return i
        },
        createImageFromImageData: function() {
            return l
        },
        createThumbnailFromVideo: function() {
            return d
        }
    }), n("70102");
    var a = n("80028");
    async function i(e) {
        if (null == e) return "";
        let t = new Blob([e], {
                type: "image/jpeg"
            }),
            n = await new Promise(e => {
                let n = new FileReader;
                n.onloadend = () => {
                    e(n.result)
                }, n.readAsDataURL(t)
            });
        if ("string" != typeof n) throw Error("Image creation failed");
        return n
    }

    function l(e) {
        let t = document.createElement("canvas");
        t.width = e.width, t.height = e.height;
        let n = t.getContext("2d");
        if (null == n) throw Error("Could not create canvas context");
        return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
    }
    async function d(e, t) {
        let n = document.createElement("video");
        n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
        let i = a.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
            l = a.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight,
            d = Math.min(i, l),
            r = n.videoWidth * d,
            u = n.videoHeight * d,
            s = document.createElement("canvas");
        s.width = r, s.height = u;
        let o = s.getContext("2d");
        if (null == o) throw Error("Could not create canvas context");
        return o.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, r, u), s.toDataURL("image/jpeg", .9)
    }
}