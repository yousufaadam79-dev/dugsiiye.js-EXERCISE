function changeImg() {
    const image =  document.querySelector("#image")

    const url = prompt("fadlan soo gali link sawirka aad rabto")
    const borderColor  = prompt("fadlan soo gali collorka borderka ")
    const width  = prompt("fadlan soo gali cabirka widthka aad rabto ")
    const height   = prompt("fadlan soo gali cabirka hight aad rabto ")
    const borderRadius  = prompt("fadlan soo gali cabirka border radios ka aad rabto ")

        image.setAttribute('src', url);
        image.style.border = `2px solid ${borderColor}`;
        image.style.width = ` ${width}px`
        image.style.hight  = `${ hight}px`
        image.style.borderRadius = `${borderRadius}px`;
        image.style.pading = `10px`
}