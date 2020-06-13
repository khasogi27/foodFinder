class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Times New Roman', Times, serif;
            }
            :host {
                display: block;
                width: 100%;
                background-color: white;
                font-size: 100px;
                font-family: 'Times New Roman', Times, serif;
                background-image: url(https://image.freepik.com/free-psd/arrangement-fast-food-wooden-background_23-2148321316.jpg);
            }
            h2 {
                padding: 20px;
                color: orange;
                text-align: center;
            }
            span {
                color: green;
            }
        </style>
        <h2><span>F</span>ood <span>F</span>inder</h2>`;
    }
}

customElements.define("app-bar", AppBar);