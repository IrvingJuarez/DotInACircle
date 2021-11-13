import { canvases } from "./centerCanvas";

let ctx, width, height;

// The other functions
const printMainAxis = (width, height) => {
    ctx.save()
    ctx.lineWidth = 2;

    ctx.beginPath()
    ctx.moveTo(-width, 0)
    ctx.lineTo(width, 0)
    ctx.moveTo(0, -height)
    ctx.lineTo(0, height)
    ctx.stroke()

    ctx.restore()
}

// Principal function
const drawGrid = () => {
    ctx = canvases[0].context;
    width = canvases[0].element.width / 2;
    height = canvases[0].element.height / 2;

    console.log(ctx)
    // printMainAxis(width, height)
    // printVerticalLines(width, height)
    // printHorizontalLines(width, height)
}

export default drawGrid;