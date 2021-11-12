let ctx, ctx2, ctx3, canvases = []

// functions
const getContext = () => {
    canvases.forEach(canvas => {
        canvas.context = canvas.element.getContext("2d")
    })
}

const sizeCanvas = () => {
    canvases.forEach(canvas => {
        canvas.element.width = canvas.element.offsetWidth;
        canvas.element.height = canvas.element.offsetHeight;
    })
}

const setArray = () => {
    canvases = [
        {
            element: document.querySelector(".plane-container_canvas1"),
            context: ctx
        },
        {
            element: document.querySelector(".plane-container_canvas1"),
            context: ctx2
        },
        {
            element: document.querySelector(".plane-container_canvas1"),
            context: ctx3
        }
    ]
}

// The main function (the one that will be exported)
const centerCanvas = () => {
    setArray()
    getContext()
    sizeCanvas()

    let canvasWidth = canvases[0].element.width / 2;
    let canvasHeight = canvases[0].element.height / 2;

    canvases.forEach(canvas => {
        canvas.context.translate(canvasWidth, canvasHeight)
        canvas.context.fillRect(0,0,20,20)
    })
}

export default centerCanvas;