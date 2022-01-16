window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;
    
    function startPainting(e) {
        painting = true;
        draw(e);
    }

    function finishPainting() {
        painting = false;
        ctx.beginPath();
    }

    function getMousePoint(ex, ey){

        var px = 0, py = 0;
        var el = document.getElementById('canvas');
        while (el) {
            px += el.offsetLeft;
            py += el.offsetTop;
            el = el.offsetParent;
         }
    
        return {x: ex-px ,y: ey-py};
    }

    function clearAll() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw(e) {
        if (!painting) return;

        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        
        var mp = getMousePoint(e.clientX, e.clientY);
        ctx.lineTo(mp.x, mp.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(mp.x, mp.y);
    }

    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", finishPainting);
    canvas.addEventListener("mousemove", draw);
    var clear = document.getElementById('clear');
    
    
});